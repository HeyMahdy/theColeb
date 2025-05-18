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
                title,
                content,
                type,
            },
        });

        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Failed to create post' });
    }
};

export const getPosts = async (req, res) => {
    try {
        const { userId } = req.query;
        const where = userId ? { userId: parseInt(userId) } : {};

        const posts = await prisma.post.findMany({
            where,
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        res.status(200).json({ posts });
    } catch (error) {
        console.error('Error retrieving posts:', error);
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }
};

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await prisma.post.findUnique({
            where: { id: parseInt(id) },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
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

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        if (!title && !content  ) {
            return res.status(400).json({ error: 'At least one field (title or content) is required for update' });
        }

        const existingPost = await prisma.post.findUnique({
            where: { id: parseInt(id) },
        });

        if (!existingPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const updatedPost = await prisma.post.update({
            where: { id: parseInt(id) },
            data: {
                ...(title && { title }),
                ...(content && { content }),
            },
        });

        res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ error: 'Failed to update post' });
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
