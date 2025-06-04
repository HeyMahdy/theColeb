import { PrismaClient } from '../../../generated/prisma/client/index.js';


const prisma = new PrismaClient()

export const createExperience = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { title, company, jobDescription, startDate, endDate } = req.body;

        // Validate required fields
        if (!title || !company || !startDate) {
            return res.status(400).json({
                success: false,
                message: 'Title, company, and start date are required.'
            });
        }

        const experience = await prisma.experience.create({
            data: {
                userId,
                title,
                company,
                jobDescription,
                startDate,
                endDate
            }
        });

        return res.status(201).json({
            success: true,
            data: experience
        });

    } catch (error) {
        console.error('Error in createExperience:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export const getExperiences = async (req, res) => {
    try {
        const userId = req.user.userId;
         
        const experiences = await prisma.experience.findMany({
            where: { userId },
            orderBy: {
                startDate: 'desc'
            }
        });

        return res.status(200).json({
            success: true,
            data: experiences
        });
    } catch (error) {
        console.error('Error in getExperiences:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export const updateExperience = async (req, res) => {
    try {
        const userId = req.user.userId;
        const experienceId = req.params.id;
        const { title, company, jobDescription, startDate, endDate } = req.body;

        // Check if the experience exists and belongs to the user
        const existingExperience = await prisma.experience.findFirst({
            where: {
                id: experienceId,
                userId
            }
        });

        if (!existingExperience) {
            return res.status(404).json({
                success: false,
                message: 'Experience record not found'
            });
        }

        const updatedExperience = await prisma.experience.update({
            where: {
                id: experienceId
            },
            data: {
                title,
                company,
                jobDescription,
                startDate,
                endDate
            }
        });

        return res.status(200).json({
            success: true,
            data: updatedExperience
        });
    } catch (error) {
        console.error('Error in updateExperience:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export const deleteExperience = async (req, res) => {
    try {
        const userId = req.user.userId;
        const experienceId = req.params.id;

        // Check if the experience exists and belongs to the user
        const existingExperience = await prisma.experience.findFirst({
            where: {
                id: experienceId,
                userId
            }
        });

        if (!existingExperience) {
            return res.status(404).json({
                success: false,
                message: 'Experience record not found'
            });
        }

        await prisma.experience.delete({
            where: {
                id: experienceId
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Experience record deleted successfully'
        });
    } catch (error) {
        console.error('Error in deleteExperience:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};
