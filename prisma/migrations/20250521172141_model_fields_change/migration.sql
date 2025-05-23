/*
  Warnings:

  - You are about to drop the column `degree` on the `basic_info` table. All the data in the column will be lost.
  - You are about to drop the column `graduationYear` on the `basic_info` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `basic_info` table. All the data in the column will be lost.
  - You are about to drop the column `lookingForTeam` on the `collaboration` table. All the data in the column will be lost.
  - The `techUsed` column on the `projects` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `availability` on the `technical_profile` table. All the data in the column will be lost.
  - You are about to drop the column `projectInterests` on the `technical_profile` table. All the data in the column will be lost.
  - You are about to drop the column `yearsOfExperience` on the `technical_profile` table. All the data in the column will be lost.
  - Made the column `fullName` on table `basic_info` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "PostType" ADD VALUE 'MEETUP';

-- AlterTable
ALTER TABLE "basic_info" DROP COLUMN "degree",
DROP COLUMN "graduationYear",
DROP COLUMN "phone",
ALTER COLUMN "fullName" SET NOT NULL;

-- AlterTable
ALTER TABLE "collaboration" DROP COLUMN "lookingForTeam";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "techUsed",
ADD COLUMN     "techUsed" TEXT[];

-- AlterTable
ALTER TABLE "showcase" ADD COLUMN     "email" VARCHAR(100),
ADD COLUMN     "whatsapp" VARCHAR(100);

-- AlterTable
ALTER TABLE "technical_profile" DROP COLUMN "availability",
DROP COLUMN "projectInterests",
DROP COLUMN "yearsOfExperience";
