/*
  Warnings:

  - Added the required column `parentId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Academic_userId_key";

-- DropIndex
DROP INDEX "Experience_userId_key";

-- DropIndex
DROP INDEX "showcase_userId_key";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "parentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
