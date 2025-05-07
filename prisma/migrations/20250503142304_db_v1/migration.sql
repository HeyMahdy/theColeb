-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "basic_info" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fullName" VARCHAR(100),
    "Institute" VARCHAR(100),
    "degree" VARCHAR(100),
    "major" VARCHAR(100),
    "graduationYear" INTEGER,
    "phone" VARCHAR(20),
    "location" TEXT,

    CONSTRAINT "basic_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technical_profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "skills" VARCHAR(255),
    "experienceLevel" VARCHAR(50),
    "yearsOfExperience" INTEGER,
    "projectInterests" TEXT,
    "availability" VARCHAR(50),

    CONSTRAINT "technical_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bio_summary" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "shortBio" VARCHAR(500),
    "tagline" VARCHAR(255),

    CONSTRAINT "bio_summary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "showcase" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "github" VARCHAR(100),
    "portfolio" VARCHAR(255),
    "linkedin" VARCHAR(100),

    CONSTRAINT "showcase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "techUsed" TEXT,
    "link" VARCHAR(255),

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hackathons" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "award" VARCHAR(100),

    CONSTRAINT "hackathons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collaboration" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "lookingForTeam" BOOLEAN,
    "openToCollaboration" BOOLEAN,
    "ideaInterests" TEXT,

    CONSTRAINT "collaboration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visuals" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "profilePicture" VARCHAR(255),
    "coverImage" VARCHAR(255),

    CONSTRAINT "visuals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "tags" VARCHAR(255),
    "category" VARCHAR(100),

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_list" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "post_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interested_list" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "interested_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incoming_connection" (
    "id" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "incoming_connection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "outgoing_connection" (
    "id" SERIAL NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "outgoing_connection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connections" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "connectionId" INTEGER NOT NULL,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "connections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "basic_info_userId_key" ON "basic_info"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "technical_profile_userId_key" ON "technical_profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "bio_summary_userId_key" ON "bio_summary"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "showcase_userId_key" ON "showcase"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "collaboration_userId_key" ON "collaboration"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "visuals_userId_key" ON "visuals"("userId");

-- AddForeignKey
ALTER TABLE "basic_info" ADD CONSTRAINT "basic_info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technical_profile" ADD CONSTRAINT "technical_profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bio_summary" ADD CONSTRAINT "bio_summary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "showcase" ADD CONSTRAINT "showcase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hackathons" ADD CONSTRAINT "hackathons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collaboration" ADD CONSTRAINT "collaboration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visuals" ADD CONSTRAINT "visuals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_list" ADD CONSTRAINT "post_list_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_list" ADD CONSTRAINT "post_list_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interested_list" ADD CONSTRAINT "interested_list_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incoming_connection" ADD CONSTRAINT "incoming_connection_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outgoing_connection" ADD CONSTRAINT "outgoing_connection_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connections" ADD CONSTRAINT "connections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connections" ADD CONSTRAINT "connections_connectionId_fkey" FOREIGN KEY ("connectionId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
