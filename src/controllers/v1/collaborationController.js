import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();

export const getUserColeb = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token

        const coleb = await prisma.collaboration.findUnique({
            where: { userId }
        });

        if (!coleb) {
            return res.status(404).json({
                message: 'Collaboration settings not found'
            });
        }

        return res.status(200).json({
            coleb
        });
    } catch (error) {
        console.error('Get collaboration settings error:', error);
        return res.status(500).json({
            message: 'An error occurred while fetching collaboration settings'
        });
    }
};

export const createUserColeb = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const { lookingForTeam, openToCollaboration, ideaInterests } = req.body;

        // Validate input - at least one field should be provided
        if (lookingForTeam === undefined && openToCollaboration === undefined && !ideaInterests) {
            return res.status(400).json({
                message: 'At least one field must be provided',
            });
        }

        const coleb = await prisma.collaboration.create({
            data: {
                userId,
                lookingForTeam,
                openToCollaboration,
                ideaInterests
            }
        });

        return res.status(201).json({
            message: 'Collaboration settings created successfully',
            coleb
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return res.status(400).json({
                    message: 'Collaboration settings already exist for this user'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Create collaboration settings error:', error);
        return res.status(500).json({
            message: 'An error occurred while creating collaboration settings'
        });
    }
};

export const updateUserColeb = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const { lookingForTeam, openToCollaboration, ideaInterests } = req.body;

        // Validate input - at least one field should be provided
        if (lookingForTeam === undefined && openToCollaboration === undefined && !ideaInterests) {
            return res.status(400).json({
                message: 'At least one field must be provided',
            });
        }

        const coleb = await prisma.collaboration.update({
            where: { userId },
            data: {
                lookingForTeam,
                openToCollaboration,
                ideaInterests
            }
        });

        return res.status(200).json({
            message: 'Collaboration settings updated successfully',
            coleb
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return res.status(404).json({
                    message: 'Collaboration settings not found'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Update collaboration settings error:', error);
        return res.status(500).json({
            message: 'An error occurred while updating collaboration settings'
        });
    }
};

export const deleteUserColeb = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token

        await prisma.collaboration.delete({
            where: { userId }
        });

        return res.status(200).json({
            message: 'Collaboration settings deleted successfully'
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return res.status(404).json({
                    message: 'Collaboration settings not found'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Delete collaboration settings error:', error);
        return res.status(500).json({
            message: 'An error occurred while deleting collaboration settings'
        });
    }
};

