import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
const prisma = new PrismaClient();



export const filterUsers = async (req, res) => {

  const userId = req.user.userId
  const { location, skills, institute, degree, company, jobDescription } = req.query;


  let filterConditions = [];

  if (location) {
    filterConditions.push({ location: { contains: location, mode: 'insensitive' } });
  }
  if (skillArray.length > 0) {
    filterConditions.push({ skills: { hasSome: skillArray } });
  }
  if (institute) {
    filterConditions.push({ education: { some: { institute: { contains: institute, mode: 'insensitive' } } } });
  }
  if (degree) {
    filterConditions.push({ education: { some: { degree: { contains: degree, mode: 'insensitive' } } } });
  }
  if (company) {
    filterConditions.push({ experience: { some: { company: { contains: company, mode: 'insensitive' } } } });
  }
  if (jobDescription) {
    filterConditions.push({ experience: { some: { jobDescription: { contains: jobDescription, mode: 'insensitive' } } } });
  }

  const filtered = await prisma.user.findMany({
    where: {
      AND: filterConditions
    }
  });

     return res.status(200).json({
            message: "this is the output",
            filterConditions
        });


}