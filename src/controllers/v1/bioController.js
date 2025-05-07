import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();

export const createUserBio = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const { shortBio, tagline } = req.body;

        // Validate input
        if (!shortBio && !tagline) {
            return res.status(400).json({
                message: 'At least one field (shortBio or tagline) is required',
            });
        }

        const bio = await prisma.bioSummary.create({
            data: {
                userId,
                shortBio,
                tagline
            }
        });

        return res.status(201).json({
            message: 'Bio created successfully',
            bio
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return res.status(400).json({
                    message: 'Bio already exists for this user'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Create bio error:', error);
        return res.status(500).json({
            message: 'An error occurred while creating bio'
        });
    }
};

export const getUserBio = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token

        const bio = await prisma.bioSummary.findUnique({
            where: { userId }
        });

        if (!bio) {
            return res.status(404).json({
                message: 'Bio not found'
            });
        }

        return res.status(200).json({
            bio
        });
    } catch (error) {
        console.error('Get bio error:', error);
        return res.status(500).json({
            message: 'An error occurred while fetching bio'
        });
    }
};

export const updateUserBio = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const { shortBio, tagline } = req.body;

        // Validate input
        if (!shortBio && !tagline) {
            return res.status(400).json({
                message: 'At least one field (shortBio or tagline) is required',
            });
        }

        const bio = await prisma.bioSummary.update({
            where: { userId },
            data: {
                shortBio,
                tagline
            }
        });

        return res.status(200).json({
            message: 'Bio updated successfully',
            bio
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return res.status(404).json({
                    message: 'Bio not found'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Update bio error:', error);
        return res.status(500).json({
            message: 'An error occurred while updating bio'
        });
    }
};

export const deleteUserBio = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token

        await prisma.bioSummary.delete({
            where: { userId }
        });

        return res.status(200).json({
            message: 'Bio deleted successfully'
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return res.status(404).json({
                    message: 'Bio not found'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Delete bio error:', error);
        return res.status(500).json({
            message: 'An error occurred while deleting bio'
        });
    }
};
