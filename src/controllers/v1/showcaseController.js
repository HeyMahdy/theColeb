import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();

export const getUserShowcase = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token

        const showcase = await prisma.showcase.findUnique({
            where: { userId }
        });

        if (!showcase) {
            return res.status(404).json({
                message: 'Showcase not found'
            });
        }

        return res.status(200).json({
            showcase
        });
    } catch (error) {
        console.error('Get showcase error:', error);
        return res.status(500).json({
            message: 'An error occurred while fetching showcase'
        });
    }
};

export const createUserShowcase = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const { github, portfolio, linkedin , whatsapp ,email} = req.body;

        // Validate input - at least one field should be provided
        if (!github && !portfolio && !linkedin) {
            return res.status(400).json({
                message: 'At least one field (github, portfolio, or linkedin) is required',
            });
        }

        const showcase = await prisma.showcase.create({
            data: {
                userId,
                github,
                portfolio,
                linkedin,
                whatsapp,
                email
            }
        });

        return res.status(201).json({
            message: 'Showcase created successfully',
            showcase
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return res.status(400).json({
                    message: 'Showcase already exists for this user'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Create showcase error:', error);
        return res.status(500).json({
            message: 'An error occurred while creating showcase'
        });
    }
};

export const updateUserShowcase = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const { github, portfolio, linkedin } = req.body;

        // Validate input - at least one field should be provided
        if (!github && !portfolio && !linkedin) {
            return res.status(400).json({
                message: 'At least one field (github, portfolio, or linkedin) is required',
            });
        }

        const showcase = await prisma.showcase.update({
            where: { userId },
            data: {
                github,
                portfolio,
                linkedin,
                whatsapp,
                email
            }
        });

        return res.status(200).json({
            message: 'Showcase updated successfully',
            showcase
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return res.status(404).json({
                    message: 'Showcase not found'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Update showcase error:', error);
        return res.status(500).json({
            message: 'An error occurred while updating showcase'
        });
    }
};

export const deleteUserShowcase = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token

        await prisma.showcase.delete({
            where: { userId }
        });

        return res.status(200).json({
            message: 'Showcase deleted successfully'
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return res.status(404).json({
                    message: 'Showcase not found'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Delete showcase error:', error);
        return res.status(500).json({
            message: 'An error occurred while deleting showcase'
        });
    }
};
