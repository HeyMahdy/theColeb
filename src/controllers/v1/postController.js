import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
const prisma = new PrismaClient();

export const createPost = async (req, res) => {
    try {
        const userId = req.user.userId;

        const { title, description, type } = req.body;

        if (!title && !content && !type) {
            return res.status(400).json({ error: 'all fields are required' });
        }

        const post = await prisma.post.create({
            data: {
                userId,
                title,
                description,
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



export const updatePost = asyncHandler(async (req, res) => {

    const userId = req.user.userId;
    const { id } = req.params;
    const { title, description, type } = req.body;

    if (!title && !content && !type) {
        return res.status(400).json({ error: 'At least one field (title, content, or type) is required for update' });
    }

    const existingPost = await prisma.post.findUnique({
        where: { id: parseInt(id) },
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
            ...(description && { description }),
            ...(type && { type }),
        },
    });

    res.status(200).json({
        message: 'Post updated successfully', 
        data: {
            post: updatedPost
        }
    });

});

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

export const getPosts = asyncHandler(async (req, res) => {

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
            user: {
                select: {
                    basicInfo: {
                        select: {
                            fullName: true
                        }
                    }
                }
            }
        },

        include: {
            _count: {
                select: { interested: true },
            },
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

});

export const getPostById = asyncHandler(async (req, res) => {

    const { postId } = req.params;
    const post = await prisma.post.findUnique({
        where: {
            postId: postId
        },
        select: {
            title: true,
            description: true,
            type: true
        },
        include: {
            _count: {
                select: { interested: true },
            },
        },

    });

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({
        success: true,
        data: {
            post
        }
    });

});

export const interestPost = asyncHandler(async (req, res) => {
    const userId = req.user.userId
    const { postId } = req.params;

    const post = await prisma.post.findUnique({
        where: { id: parseInt(postId) }
    });

    if (!post) {
        return res.status(404).json({
            success: false,
            message: 'Post not found'
        });
    }

    const existingLike = await prisma.like.findUnique({
        where: {
            userId_postId: {
                userId: userId,
                postId: parseInt(postId)
            }
        }
    });

    if (existingLike) {
        return res.status(400).json({
            success: false,
            message: 'You have already liked this post'
        });
    }

    // Create new like
    const like = await prisma.interested.create({
        data: {
            userId: userId,
            postId: parseInt(postId)
        }
    });


})

export const UninterestPost = asyncHandler(async (req, res) => {
    const userId = req.user.userId;
    const { postId } = req.params;

    // Check if post exists
    const post = await prisma.post.findUnique({
        where: { id: parseInt(postId) }
    });

    if (!post) {
        return res.status(404).json({
            success: false,
            message: 'Post not found'
        });
    }

    // Check if user has liked the post
    const existingLike = await prisma.like.findUnique({
        where: {
            userId_postId: {
                userId: userId,
                postId: parseInt(postId)
            }
        }
    });

    if (!existingLike) {
        return res.status(400).json({
            success: false,
            message: 'You have not liked this post yet'
        });
    }

    // Remove like
    await prisma.interested.delete({
        where: {
            userId_postId: {
                userId: userId,
                postId: parseInt(postId)
            }
        }
    });

    res.status(200).json({
        success: true,
        message: 'Post unliked successfully'
    });
})
