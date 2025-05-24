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
        const { github, portfolio, linkedin, whatsapp, email } = req.body;

        // Validate input
        if (!github && !portfolio && !linkedin && !whatsapp && !email) {
            return res.status(400).json({
                success: false,
                message: 'At least one field (github, portfolio, linkedin, whatsapp, or email) is required',
            });
        }

        // First check if the showcase exists
        const existingShowcase = await prisma.showcase.findUnique({
            where: { userId }
        });

        let showcase;
        if (!existingShowcase) {
            // If no showcase exists, create one
            showcase = await prisma.showcase.create({
                data: {
                    userId,
                    github,
                    portfolio,
                    linkedin,
                    whatsapp,
                    email
                }
            });
        } else {
            // If showcase exists, update it
            showcase = await prisma.showcase.update({
                where: { userId },
                data: {
                    github,
                    portfolio,
                    linkedin,
                    whatsapp,
                    email
                }
            });
        }

        return res.status(200).json({
            success: true,
            data: showcase
        });
    } catch (error) {
        console.error('Error in updateUserShowcase:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
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
