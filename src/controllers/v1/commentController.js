import { PrismaClient } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();

export const addComment = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { postId } = req.params;
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ success: false, message: 'Content is required' });
    }

    const comment = await prisma.comment.create({
      data: {
        postId: parseInt(postId),
        userId,
        content,
      },
    });

    res.status(201).json({ success: true, data: comment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to add comment', error: error.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await prisma.comment.findMany({
      where: { postId: parseInt(postId) },
      include: { user: { select: { id: true, email: true } } },
      orderBy: { createdAt: 'asc' },
    });
    res.json({ success: true, data: comments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to get comments', error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { commentId } = req.params;

    const comment = await prisma.comment.findUnique({ where: { id: parseInt(commentId) } });
    if (!comment) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }
    if (comment.userId !== userId) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    await prisma.comment.delete({ where: { id: parseInt(commentId) } });
    res.json({ success: true, message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete comment', error: error.message });
  }
};


export const replyComment = async (req,res) => {
      const userId = req.user.userId;
    const { postId, commentId } = req.params; // parent comment id
    const {content} = req.body;

    const comment = await prisma.comment.create({
      data: {
        postId: parseInt(postId),
        parentId : parseInt(commentId),
        userId,
        content,
      },
    });
    
    res.status(201).json({ success: true, data: comment });

}

