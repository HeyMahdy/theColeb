/*
  Warnings:

  - Added the required column `userId` to the `interested_list` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "interested_list" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "Experience_userId_idx" ON "Experience"("userId");

-- AddForeignKey
ALTER TABLE "interested_list" ADD CONSTRAINT "interested_list_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
