import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

const getRandomSkills = () => {
  const allSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'C++', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'Go', 'Rust', 'Docker',
    'Kubernetes', 'AWS', 'Azure', 'GCP', 'MongoDB', 'PostgreSQL',
    'MySQL', 'Redis', 'GraphQL', 'REST', 'Git', 'CI/CD'
  ];
  const numSkills = Math.floor(Math.random() * 5) + 3;
  return allSkills.sort(() => 0.5 - Math.random()).slice(0, numSkills);
};

const getLocation = () => {
  const locations = ['New York', 'London', 'Tokyo', 'Sydney', 'Paris', 'Berlin', 'Toronto', 'Dubai',
    'San Francisco', 'Singapore', 'Barcelona', 'Amsterdam', 'Los Angeles', 'Chicago', 'Hong Kong',
    'Rome', 'Bangkok', 'Moscow', 'Cape Town', 'Mumbai'];
  return locations[Math.floor(Math.random() * locations.length)];
};


const getRandomInstitute = () => {
  const institutes = ['Harvard University', 'Stanford University', 'MIT', 'University of Oxford', 'Cambridge University'];
  return institutes[Math.floor(Math.random() * institutes.length)];
};

const getRandomDegree = () => {
  const degrees = ['Bachelor of Science', 'Bachelor of Arts', 'Master of Science', 'MBA', 'PhD'];
  return degrees[Math.floor(Math.random() * degrees.length)];
};

const getRandomCompany = () => {
  const companies = ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple', 'Netflix'];
  return companies[Math.floor(Math.random() * companies.length)];
};

const getRandomTitle = () => {
  const titles = ['Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer', 'DevOps Engineer'];
  return titles[Math.floor(Math.random() * titles.length)];
};
const getRandomExperience = () => {
  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  return levels[Math.floor(Math.random() * levels.length)];
};

const getRandomAvailability = () => {
  const options = ['Full-time', 'Part-time', 'Freelance', 'Internship'];
  return options[Math.floor(Math.random() * options.length)];
};

async function createUser(index) {
  const hashedPassword = await bcrypt.hash('password123', 10);

  return prisma.user.create({
    data: {
      email: `user${index + 1}@example.com`,
      password: hashedPassword,
      isEmailVerified: true,
      basicInfo: {
        create: {
          fullName: `User ${index + 1}`,
          location: getLocation()
        }
      },
      academics: {
        create: [
          {
            institute: getRandomInstitute(),
            degree: getRandomDegree(),
            startYear: 2015 + Math.floor(Math.random() * 5),
            endYear: 2019 + Math.floor(Math.random() * 2)
          }
        ]
      },
      experience: {
        create: [
          {
            title: getRandomTitle(),
            company: getRandomCompany(),
            jobDescription: 'Worked on various projects involving cutting-edge technologies.',
            startDate: new Date(2019, 0, 1),
            endDate: null // current job
          }
        ]
      },
      technicalProfile: {
        create: {
          skills: getRandomSkills(),
          experienceLevel: getRandomExperience()
        }
      },
   
      
      projects: {
        create: Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map((_, projIndex) => ({
          name: `Project ${index + 1}-${projIndex + 1}`,
          description: `A comprehensive project showcasing various technical skills and problem-solving abilities.`,
          techUsed: getRandomSkills(),
          link: `https://project${index + 1}-${projIndex + 1}.com`,
          status:'finished'
        }))
      },
   
    
    }
  });
}

async function main() {
  try {
   
    console.log('Creating new users...');
    const users = [];
    const totalUsers = 30;
    const batchSize = 5;

    for (let i = 0; i < totalUsers; i += batchSize) {
      const batch = Array.from({ length: Math.min(batchSize, totalUsers - i) }).map((_, index) => 
        createUser(i + index)
      );
      const batchUsers = await Promise.all(batch);
      users.push(...batchUsers);
      console.log(`Created users ${i + 1} to ${i + batchUsers.length}`);
    }

  }
  catch (error) {
    console.error('Error during seeding:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
