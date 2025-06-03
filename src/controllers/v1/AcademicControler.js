
import { PrismaClient } from '../../../generated/prisma/client/index.js';


const prisma = new PrismaClient()


export const createAcademics = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { institute, degree, startYear, endYear } = req.body;

        // Optional: Validate required fields
        if (!institute || !degree || !startYear) {
            return res.status(400).json({
                success: false,
                message: 'Institute, degree, and start year are required.'
            });
        }
        const academic = await prisma.academic.create({
            data: {
                userId,
                institute,
                degree,
                startYear,
                endYear
            }
        });

        return res.status(201).json({
            success: true,
            data: academic
        });

    } catch (error) {
        console.error('Error in createAcademics:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export const getAcademics = async (req, res) => {
    try {
        const userId = req.user.userId;
        
        const academics = await prisma.academic.findMany({
            where: { userId },
            orderBy: {
                startYear: 'desc'
            }
        });

        return res.status(200).json({
            success: true,
            data: academics
        });
    } catch (error) {
        console.error('Error in getAcademics:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export const updateAcademics = async (req, res) => {
    try {
        const userId = req.user.userId;
        const academicId = req.params.id;
        const { institute, degree, startYear, endYear } = req.body;

        // Check if the academic record exists and belongs to the user
        const existingAcademic = await prisma.academic.findFirst({
            where: {
                id: academicId,
                userId
            }
        });

        if (!existingAcademic) {
            return res.status(404).json({
                success: false,
                message: 'Academic record not found'
            });
        }

        const updatedAcademic = await prisma.academic.update({
            where: {
                id: academicId
            },
            data: {
                institute,
                degree,
                startYear,
                endYear
            }
        });

        return res.status(200).json({
            success: true,
            data: updatedAcademic
        });
    } catch (error) {
        console.error('Error in updateAcademics:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

export const deleteAcademics = async (req, res) => {
  try {
    const userId = req.user.userId;
    const role = req.user.role; // assume role is available from auth middleware
    const academicId = parseInt(req.params.id, 10);

    if (isNaN(academicId)) {
      return res.status(400).json({ error: 'Invalid academic ID' });
    }

    // Admin can delete any record; user can delete only their own
    const existingAcademic = await prisma.academic.findUnique({
      where: { id: academicId }
    });

    if (!existingAcademic) {
      return res.status(404).json({
        success: false,
        message: 'Academic record not found'
      });
    }

    // If not admin, check if the record belongs to the user
    if (role !== 'ADMIN' && existingAcademic.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: 'You are not authorized to delete this academic record'
      });
    }

    await prisma.academic.delete({
      where: { id: academicId }
    });

    return res.status(200).json({
      success: true,
      message: 'Academic record deleted successfully'
    });

  } catch (error) {
    console.error('Error in deleteAcademics:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};


