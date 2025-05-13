/*
  Warnings:

  - The `skills` column on the `technical_profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `hackathons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "hackathons" DROP CONSTRAINT "hackathons_userId_fkey";

-- AlterTable
ALTER TABLE "technical_profile" DROP COLUMN "skills",
ADD COLUMN     "skills" TEXT[];

-- DropTable
DROP TABLE "hackathons";
