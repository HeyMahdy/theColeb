/*
  Warnings:

  - You are about to drop the column `Institute` on the `basic_info` table. All the data in the column will be lost.
  - You are about to drop the column `major` on the `basic_info` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "basic_info" DROP COLUMN "Institute",
DROP COLUMN "major";

-- CreateTable
CREATE TABLE "Academic" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "institute" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER,

    CONSTRAINT "Academic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "jobDescription" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Academic_userId_key" ON "Academic"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_userId_key" ON "Experience"("userId");

-- AddForeignKey
ALTER TABLE "Academic" ADD CONSTRAINT "Academic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
