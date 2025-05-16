import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();



export const sendRquest = async (req, res) => {
    try {

        const userId = req.user.userId;
        const { receiverId } = req.body

        const receiverUser = await prisma.user.findUnique({
            where: {
                id: receiverId
            }
        })

        if (!receiverUser) {
            return req.status(404).json({
                message: "user not found"
            })
        }

        const reqSend = await prisma.outgoingConnection.create({
            data: {
                senderId: userId,
                receiverId: receiverId
            }
        })

        const SendSend = await prisma.incomingConnection.create({
            data: {
                receiverId: receiverId,
                senderId: userId
            }
        })


        return res.status(201).json({
            message: "request sent"
        })

    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Update project error:', error);
        return res.status(500).json({
            message: 'An error occurred while updating project'
        });
    }

}

export const getRequestList = async (req, res) => {


    try {

        const { userId } = req.user.userId

        const ResUsers = await prisma.incomingConnection.findMany({
            where: {
                receiverId: userId
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        basicInfo: {
                            select: {
                                fullName
                            }
                        }
                    }
                }
            }
        })

        if (!ResUsers || ResUsers.length === 0) {
            return res.status(200).json({
                message: "No  requests found",
                ResUsers: []
            });
        }

        return res.status(200).json({
            message: "Sent requests list retrieved successfully",
            ResUsers
        });

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Get sent requests error:', error);
        return res.status(500).json({
            message: 'An error occurred while retrieving  requests'
        });
    }


}

export const getSendRequestList = async (req, res) => {
    try {
        const userId = req.user.userId;

        const sentRequests = await prisma.outgoingConnection.findMany({
            where: {
                senderId: userId
            },
            include: {
                receiver: {
                    select: {
                        id: true,
                        basicInfo: {
                            select: {
                                fullName
                            }
                        }
                    }
                }
            }
        });

        if (!sentRequests || sentRequests.length === 0) {
            return res.status(200).json({
                message: "No sent requests found",
                sentRequests: []
            });
        }

        return res.status(200).json({
            message: "Sent requests list retrieved successfully",
            sentRequests
        });

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Get sent requests error:', error);
        return res.status(500).json({
            message: 'An error occurred while retrieving sent requests'
        });
    }
};


export const acceptReq = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { senderId } = req.body;

        // ✅ Create a connection with proper relation references
        const accept = await prisma.connection.create({
            data: {
                participantA: {
                    connect: { id: userId },
                },
                participantB: {
                    connect: { id: senderId },
                },
            },
        });

        // ✅ Delete from outgoingConnection
        await prisma.outgoingConnection.delete({
            where: {
                senderId_receiverId: {
                    senderId: senderId,
                    receiverId: userId,
                },
            },
        });

        // ✅ Delete from incomingConnection
        await prisma.incomingConnection.delete({
            where: {
                senderId_receiverId: {
                    senderId: senderId,
                    receiverId: userId,
                },
            },
        });

        return res.status(201).json({
            message: 'Request accepted',
            connectionId: accept.id,
        });
    } catch (error) {
        console.error('Error accepting request:', error);

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(500).json({
                message: 'Database error occurred',
                code: error.code,
            });
        }

        return res.status(500).json({
            message: 'An unexpected error occurred',
        });
    }
};



export const deleteConnection = async (req,res) => {
    try {

         const userId = req.user.userId;
         const removeUserId = req.body

         const removeUser = await prisma.connection.delete({
            where : {
                participantAId_participantBId : {
                    participantAId : userId, 
                    participantBId : removeUserId
                }
            }
         })

         res.status(201).json({
            message : "connection removed"
         })

    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Get sent requests error:', error);
        return res.status(500).json({
            message: 'An error occurred while retrieving sent requests'
        });
    }
}

export const rejectReq = async (req,res) => {
     try {

                const userId = req.user.userId;
         const removeUserId = req.body
         
         const reject = await prisma.incomingConnection.delete({
            where : {
                senderId : removeUserId,
                receiverId : userId
            }
         })

                     
     }
      catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return res.status(500).json({
                message: 'Database error occurred'
            });
        }
        console.error('Get sent requests error:', error);
        return res.status(500).json({
            message: 'An error occurred while retrieving sent requests'
        });
    }
}