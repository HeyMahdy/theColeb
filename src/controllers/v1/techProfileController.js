import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();

export const createTechProfile = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const {
            skills,
            experienceLevel,
        } = req.body;

        // Basic validation: at least one field required
        if (
            !skills &&
            !experienceLevel
        ) {
            return res.status(400).json({
                message: 'At least one field must be provided to create a technical profile',
            });
        }

        const techProfile = await prisma.technicalProfile.create({
            data: {
                userId,
                skills,
                experienceLevel
            }
        });

        return res.status(201).json({
            message: 'Technical profile created successfully',
            techProfile
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return res.status(400).json({
                    message: 'Technical profile already exists for this user'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Create tech profile error:', error);
        return res.status(500).json({
            message: 'An error occurred while creating technical profile'
        });
    }
};


export const getTechProfile = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token

        const techProfile = await prisma.technicalProfile.findUnique({
            where: { userId }
        });

        if (!techProfile) {
            return res.status(404).json({
                message: 'Technical profile not found'
            });
        }

        return res.status(200).json({
            techProfile
        });
    } catch (error) {
        console.error('Get tech profile error:', error);
        return res.status(500).json({
            message: 'An error occurred while fetching technical profile'
        });
    }
};

export const updateTechProfile = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token
        const {
            skills,
            experienceLevel
        } = req.body;

        // Validate input
        if (!skills && !experienceLevel) {
            return res.status(400).json({
                success: false,
                message: 'At least one field (skills or experienceLevel) is required',
            });
        }

        // First check if the tech profile exists
        const existingProfile = await prisma.technicalProfile.findUnique({
            where: { userId }
        });

        let techProfile;
        if (!existingProfile) {
            // If no profile exists, create one
            techProfile = await prisma.technicalProfile.create({
                data: {
                    userId,
                    skills,
                    experienceLevel
                }
            });
        } else {
            // If profile exists, update it
            techProfile = await prisma.technicalProfile.update({
                where: { userId },
                data: {
                    skills,
                    experienceLevel
                }
            });
        }

        return res.status(200).json({
            success: true,
            data: techProfile
        });
    } catch (error) {
        console.error('Error in updateTechProfile:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};


export const deleteTechProfile = async (req, res) => {
    try {
        const userId = req.user.userId; // From JWT token

        await prisma.technicalProfile.delete({
            where: { userId }
        });

        return res.status(200).json({
            message: 'Technical profile deleted successfully'
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return res.status(404).json({
                    message: 'Technical profile not found'
                });
            }
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Delete tech profile error:', error);
        return res.status(500).json({
            message: 'An error occurred while deleting technical profile'
        });
    }
};
