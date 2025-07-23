import { PrismaClient } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();

export const filterUsers = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const {
      location,
      skillArray = [],
      institute,
      degree,
      company,
      jobDescription
    } = req.query;

    const orConditions = [];

    if (location) {
      orConditions.push({
        basicInfo: {
          location: {
            contains: location,
            mode: 'insensitive'
          }
        }
      });
    }

    if (skillArray.length > 0) {
      const skillsArray =
        typeof skillArray === 'string' ? [skillArray] : skillArray;
      orConditions.push({
        technicalProfile: {
          skills: {
            hasSome: skillsArray
          }
        }
      });
    }

    if (institute) {
      orConditions.push({
        academics: {
          some: {
            institute: {
              contains: institute,
              mode: 'insensitive'
            }
          }
        }
      });
    }

    if (degree) {
      orConditions.push({
        academics: {
          some: {
            degree: {
              contains: degree,
              mode: 'insensitive'
            }
          }
        }
      });
    }

    if (company) {
      orConditions.push({
        experience: {
          some: {
            company: {
              contains: company,
              mode: 'insensitive'
            }
          }
        }
      });
    }

    if (jobDescription) {
      orConditions.push({
        experience: {
          some: {
            jobDescription: {
              contains: jobDescription,
              mode: 'insensitive'
            }
          }
        }
      });
    }

    const filtered = await prisma.user.findMany({
      where: orConditions.length > 0 ? { OR: orConditions } : {},
      include: {
        basicInfo: true,
        technicalProfile: true,
        academics: true,
        experience: true,
        visuals: true
      }
    });

    return res.status(200).json({
      success: true,
      message: 'Filtered user list',
      users: filtered
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};
