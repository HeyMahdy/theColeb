import { PrismaClient, Prisma } from '../../../generated/prisma/client/index.js';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

// Helper function to generate random skills
const getRandomSkills = () => {
  const allSkills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 
    'C++', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'Go', 'Rust', 'Docker',
    'Kubernetes', 'AWS', 'Azure', 'GCP', 'MongoDB', 'PostgreSQL',
    'MySQL', 'Redis', 'GraphQL', 'REST', 'Git', 'CI/CD'
  ];
  const numSkills = Math.floor(Math.random() * 5) + 3; // 3-7 skills per user
  return allSkills.sort(() => 0.5 - Math.random()).slice(0, numSkills);
};

// Helper function to generate random experience level
const getRandomExperience = () => {
  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  return levels[Math.floor(Math.random() * levels.length)];
};

// Helper function to generate random availability
const getRandomAvailability = () => {
  const options = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
  return options[Math.floor(Math.random() * options.length)];
};

// Function to create a single user
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
          Institute: `University ${Math.floor(Math.random() * 10) + 1}`,
          degree: ['Bachelor', 'Master', 'PhD'][Math.floor(Math.random() * 3)],
          major: ['Computer Science', 'Software Engineering', 'Information Technology', 'Data Science'][Math.floor(Math.random() * 4)],
          graduationYear: 2018 + Math.floor(Math.random() * 6),
          phone: `+1${Math.floor(Math.random() * 1000000000).toString().padStart(10, '0')}`,
          location: `City ${Math.floor(Math.random() * 20) + 1}`
        }
      },
      technicalProfile: {
        create: {
          skills: getRandomSkills(),
          experienceLevel: getRandomExperience(),
          yearsOfExperience: Math.floor(Math.random() * 10) + 1,
          projectInterests: ['Web Development', 'Mobile Development', 'AI/ML', 'DevOps', 'Cloud Computing'].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1),
          availability: getRandomAvailability()
        }
      },
      bioSummary: {
        create: {
          shortBio: `Passionate developer with expertise in various technologies. Always eager to learn and contribute to innovative projects.`,
          tagline: `Full Stack Developer | Problem Solver | Tech Enthusiast`
        }
      },
      showcase: {
        create: {
          github: `github.com/user${index + 1}`,
          portfolio: `portfolio${index + 1}.com`,
          linkedin: `linkedin.com/in/user${index + 1}`
        }
      },
      projects: {
        create: Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map((_, projIndex) => ({
          name: `Project ${index + 1}-${projIndex + 1}`,
          description: `A comprehensive project showcasing various technical skills and problem-solving abilities.`,
          techUsed: getRandomSkills().join(', '),
          link: `https://project${index + 1}-${projIndex + 1}.com`
        }))
      },
      collaboration: {
        create: {
          lookingForTeam: Math.random() > 0.5,
          openToCollaboration: Math.random() > 0.3,
          ideaInterests: ['Web Development', 'Mobile Apps', 'AI/ML', 'Blockchain', 'IoT'].sort(() => 0.5 - Math.random()).slice(0, 3).join(', ')
        }
      },
      visuals: {
        create: {
          profilePicture: `https://example.com/profile${index + 1}.jpg`,
          coverImage: `https://example.com/cover${index + 1}.jpg`
        }
      }
    }
  });
}

async function main() {
  try {
    // First, delete all existing data
    console.log('Cleaning up existing data...');
    await prisma.$transaction([
      prisma.interestedList.deleteMany(),
      prisma.postList.deleteMany(),
      prisma.post.deleteMany(),
      prisma.connection.deleteMany(),
      prisma.incomingConnection.deleteMany(),
      prisma.outgoingConnection.deleteMany(),
      prisma.project.deleteMany(),
      prisma.collaboration.deleteMany(),
      prisma.technicalProfile.deleteMany(),
      prisma.bioSummary.deleteMany(),
      prisma.showcase.deleteMany(),
      prisma.visuals.deleteMany(),
      prisma.basicInfo.deleteMany(),
      prisma.user.deleteMany(),
    ]);
    console.log('Existing data cleaned up successfully!');

    // Create users in batches of 5
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

    // Create posts for each user (2-4 posts per user)
    console.log('Creating posts...');
    const posts = [];
    for (const user of users) {
      const numPosts = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < numPosts; i++) {
        const post = await prisma.post.create({
          data: {
            userId: user.id,
            title: `Post ${user.id}-${i + 1}`,
            type: ['Project', 'Idea', 'Question', 'Discussion'][Math.floor(Math.random() * 4)],
            description: `This is a detailed description for post ${user.id}-${i + 1}`,
            tags: ['web', 'development', 'react', 'node', 'python', 'ai', 'ml', 'cloud']
              .sort(() => 0.5 - Math.random())
              .slice(0, Math.floor(Math.random() * 3) + 3)
              .join(','),
            category: ['Technology', 'Development', 'AI/ML', 'Cloud', 'Mobile'][Math.floor(Math.random() * 5)]
          }
        });
        posts.push(post);
      }
    }

    // Create connections between users
    console.log('Creating connections...');
    for (const user of users) {
      const numConnections = Math.floor(Math.random() * 3) + 3;
      const otherUsers = users.filter(u => u.id !== user.id);
      const selectedUsers = otherUsers.sort(() => 0.5 - Math.random()).slice(0, numConnections);

      for (const otherUser of selectedUsers) {
        await prisma.connection.create({
          data: {
            userId: user.id,
            connectionId: otherUser.id
          }
        });
      }
    }

    // Create incoming and outgoing connections
    console.log('Creating incoming and outgoing connections...');
    for (const user of users) {
      const numIncoming = Math.floor(Math.random() * 3) + 1;
      const numOutgoing = Math.floor(Math.random() * 3) + 1;

      for (let i = 0; i < numIncoming; i++) {
        const randomSender = users[Math.floor(Math.random() * users.length)];
        if (randomSender.id !== user.id) {
          await prisma.incomingConnection.create({
            data: {
              senderId: randomSender.id,
              receiverId: user.id
            }
          });
        }
      }

      for (let i = 0; i < numOutgoing; i++) {
        const randomReceiver = users[Math.floor(Math.random() * users.length)];
        if (randomReceiver.id !== user.id) {
          await prisma.outgoingConnection.create({
            data: {
              senderId: user.id,
              receiverId: randomReceiver.id
            }
          });
        }
      }
    }

    // Create interested lists for posts
    console.log('Creating interested lists...');
    for (const post of posts) {
      const numInterested = Math.floor(Math.random() * 5) + 1;
      for (let i = 0; i < numInterested; i++) {
        await prisma.interestedList.create({
          data: {
            postId: post.id
          }
        });
      }
    }

    console.log('Successfully created 30 users with associated data!');
  } catch (error) {
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
