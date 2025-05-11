import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();

export const getUserProjects = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token

        const projects = await prisma.project.findMany({
            where: { userId }
        });

        return res.status(200).json({
            projects
        });
    } catch (error) {
        console.error('Get projects error:', error);
        return res.status(500).json({
            message: 'An error occurred while fetching projects'
        });
    }
};

export const createUserProject = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const { name, description, techUsed, link } = req.body;

        // Validate input
        if (!name) {
            return res.status(400).json({
                message: 'Project name is required',
            });
        }

        const project = await prisma.project.create({
            data: {
                userId,
                name,
                description,
                techUsed,
                link
            }
        });

        return res.status(201).json({
            message: 'Project created successfully',
            project
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Create project error:', error);
        return res.status(500).json({
            message: 'An error occurred while creating project'
        });
    }
};

export const updateUserProject = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const projectId = parseInt(req.params.projectId);
        const { name, description, techUsed, link } = req.body;

        // Validate input
        if (!name && !description && !techUsed && !link) {
            return res.status(400).json({
                message: 'At least one field must be provided to update the project',
            });
        }

        // First check if project exists and belongs to user
        const existingProject = await prisma.project.findFirst({
            where: {
                id: projectId,
                userId: userId
            }
        });

        if (!existingProject) {
            return res.status(404).json({
                message: 'Project not found or does not belong to user'
            });
        }

        const project = await prisma.project.update({
            where: { id: projectId },
            data: {
                name,
                description,
                techUsed,
                link
            }
        });

        return res.status(200).json({
            message: 'Project updated successfully',
            project
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return res.status(404).json({
                    message: 'Project not found'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Update project error:', error);
        return res.status(500).json({
            message: 'An error occurred while updating project'
        });
    }
};

export const deleteUserProject = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const projectId = parseInt(req.params.projectId);

        // First check if project exists and belongs to user
        const existingProject = await prisma.project.findFirst({
            where: {
                id: projectId,
                userId: userId
            }
        });

        if (!existingProject) {
            return res.status(404).json({
                message: 'Project not found or does not belong to user'
            });
        }

        await prisma.project.delete({
            where: { id: projectId }
        });

        return res.status(200).json({
            message: 'Project deleted successfully'
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return res.status(404).json({
                    message: 'Project not found'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Delete project error:', error);
        return res.status(500).json({
            message: 'An error occurred while deleting project'
        });
    }
};
