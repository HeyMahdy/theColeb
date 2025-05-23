import { PrismaClient } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();

// Create basic info
export const createBasicInfo = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { fullName, Institute, major, location } = req.body;

        // Check if basic info already exists for the user
        const existingInfo = await prisma.basicInfo.findUnique({
            where: { userId }
        });

        if (existingInfo) {
            return res.status(400).json({
                success: false,
                message: 'Basic info already exists for this user'
            });
        }

        const basicInfo = await prisma.basicInfo.create({
            data: {
                userId,
                fullName,
                Institute,
                major,
                location
            }
        });

        return res.status(201).json({
            success: true,
            data: basicInfo
        });
    } catch (error) {
        console.error('Error in createBasicInfo:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get basic info
export const getBasicInfo = async (req, res) => {
    try {
        const userId = req.user.userId;

        const basicInfo = await prisma.basicInfo.findUnique({
            where: { userId }
        });

        if (!basicInfo) {
            return res.status(404).json({
                success: false,
                message: 'Basic info not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: basicInfo
        });
    } catch (error) {
        console.error('Error in getBasicInfo:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Update basic info
export const updateBasicInfo = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { fullName, Institute, major, location } = req.body;

        const basicInfo = await prisma.basicInfo.update({
            where: { userId },
            data: {
                fullName,
                Institute,
                major,
                location
            }
        });

        return res.status(200).json({
            success: true,
            data: basicInfo
        });
    } catch (error) {
        console.error('Error in updateBasicInfo:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Delete basic info
export const deleteBasicInfo = async (req, res) => {
    try {
        const userId = req.user.id;

        await prisma.basicInfo.delete({
            where: { userId }
        });

        return res.status(200).json({
            success: true,
            message: 'Basic info deleted successfully'
        });
    } catch (error) {
        console.error('Error in deleteBasicInfo:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};
