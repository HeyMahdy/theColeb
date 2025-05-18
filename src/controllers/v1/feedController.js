import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();

export const profileFilter = async (req, res) => {
    try {
        const userId = req.user.userId;
        const {
            Institute,
            skills,
            openToCollaboration,
            lookingForTeam,
            experienceLevel,
            yearsOfExperience,
            location,
            page = 1,
            limit = 10
        } = req.query;

        // Build the where clause for filtering
        const where = {
            id: {
                not: userId // Exclude current user
            }
        };

        // Add filters if they exist
        if (Institute) {
            where.basicInfo = {
                Institute: Institute
            };
        }

        if (location) {
            where.basicInfo = {
                ...where.basicInfo,
                location: location
            };
        }

        if (skills && skills.length > 0) {
            where.technicalProfile = {
                skills: {
                    hasSome: skills
                }
            };
        }

        if (experienceLevel) {
            where.technicalProfile = {
                ...where.technicalProfile,
                experienceLevel: experienceLevel
            };
        }

        if (yearsOfExperience) {
            where.technicalProfile = {
                ...where.technicalProfile,
                yearsOfExperience: parseInt(yearsOfExperience)
            };
        }

        if ( openToCollaboration == 'true') {
            where.collaboration = {
                openToCollaboration: openToCollaboration
            };
        }

        if ( lookingForTeam == 'true') {
            where.collaboration = {
                ...where.collaboration,
                lookingForTeam: lookingForTeam
            };
        }

        // Calculate pagination
        const skip = (parseInt(page) - 1) * parseInt(limit);

        // Get total count for pagination
        const total = await prisma.user.count({ where });

        // Fetch users with their related data
        const users = await prisma.user.findMany({
            where,
            skip,
            take: parseInt(limit),
            include: {
                basicInfo: {
                    select: {
                        fullName: true,
                        Institute: true
                    }
                },
                bioSummary: {
                    select: {
                        tagline: true
                    }
                },
                technicalProfile: {
                    select: {
                        skills: true
                    }
                },
                collaboration: {
                    select: {
                        openToCollaboration: true
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            data: users,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(total / parseInt(limit))
            }
        });

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            console.error('Database error:', error);
            return res.status(500).json({
                success: false,
                message: 'Database error occurred',
                error: error.message
            });
        }
        console.error('Profile filter error:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while filtering profiles',
            error: error.message
        });
    }
};

