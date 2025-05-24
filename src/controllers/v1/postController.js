import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();

export const createPost = async (req, res) => {
    try {
        const userId = req.user.userId;
               
        const { title, content,type  } = req.body;

        if (!title && !content && !type) {
            return res.status(400).json({ error: 'all fields are required' });
        }

        const post = await prisma.post.create({
            data: {
                userId,
                title,
                content,
                type,
            },
        });

        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                console.error('Database error:', error);
                return res.status(500).json({
                    success: false,
                    message: 'Database error occurred',
                    error: error.message
                });
            }
    
            return res.status(500).json({
                success: false,
                message: 'An error occurred while filtering profiles',
                error: error.message
            });
        }
};



export const updatePost = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { id } = req.params;
        const { title, content, type } = req.body;

        if (!title && !content && !type) {
            return res.status(400).json({ error: 'At least one field (title, content, or type) is required for update' });
        }

        const existingPost = await prisma.post.findUnique({
            where: { id: parseInt(id)},
        });

        if (!existingPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Check if the user owns the post
        if (existingPost.userId !== userId) {
            return res.status(403).json({ error: 'You are not authorized to update this post' });
        }

        const updatedPost = await prisma.post.update({
            where: { id: parseInt(id) },
            data: {
                ...(title && { title }),
                ...(content && { content }),
                ...(type && { type }),
            },
        });

        res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.error('Database error:', error);
            return res.status(500).json({
                success: false,
                message: 'Database error occurred',
                error: error.message
            });
        }

        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating the post',
            error: error.message
        });
    }
};

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const existingPost = await prisma.post.findUnique({
            where: { id: parseInt(id) },
        });

        if (!existingPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        await prisma.post.delete({
            where: { id: parseInt(id) },
        });

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ error: 'Failed to delete post' });
    }
};

export const getPosts = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { type, page = 1, limit = 10 } = req.query;

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const whereClause = type ? { type } : {};

        const posts = await prisma.post.findMany({
            skip,
            take: parseInt(limit),
            where: whereClause,
            select: {
                id: true,
                title: true,
                description: true,
                type: true,
                createdAt: true,
                updatedAt: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                        basicInfo: {
                            select: {
                                fullName: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Get total count for pagination
        const total = await prisma.post.count({
            where: whereClause
        });

        res.status(200).json({
            success: true,
            data: {
                posts,
                pagination: {
                    total,
                    page: parseInt(page),
                    limit: parseInt(limit),
                    totalPages: Math.ceil(total / parseInt(limit))
                }
            }
        });
    } catch (error) {
        console.error('Error retrieving posts:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve posts',
            error: error.message
        });
    }
};

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
       const posts = await prisma.post.findUnique({
            where : {
                type : type
            },
            select : {
                title : true,
                description : true,
                type : true
            }
            
        });

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json({ post });
    } catch (error) {
        console.error('Error retrieving post:', error);
        res.status(500).json({ error: 'Failed to retrieve post' });
    }
};