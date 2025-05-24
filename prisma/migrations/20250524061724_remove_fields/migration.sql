-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('running', 'finished', 'incomplete');

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "status" "ProjectStatus" NOT NULL DEFAULT 'finished';
