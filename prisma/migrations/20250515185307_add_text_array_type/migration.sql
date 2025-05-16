/*
  Warnings:

  - You are about to drop the column `connectionId` on the `connections` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `connections` table. All the data in the column will be lost.
  - The `projectInterests` column on the `technical_profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[participantAId,participantBId]` on the table `connections` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[senderId,receiverId]` on the table `incoming_connection` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[senderId,receiverId]` on the table `outgoing_connection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `participantAId` to the `connections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `participantBId` to the `connections` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverId` to the `incoming_connection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `outgoing_connection` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "connections" DROP CONSTRAINT "connections_connectionId_fkey";

-- DropForeignKey
ALTER TABLE "connections" DROP CONSTRAINT "connections_userId_fkey";

-- AlterTable
ALTER TABLE "connections" DROP COLUMN "connectionId",
DROP COLUMN "userId",
ADD COLUMN     "participantAId" INTEGER NOT NULL,
ADD COLUMN     "participantBId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "incoming_connection" ADD COLUMN     "receiverId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "outgoing_connection" ADD COLUMN     "senderId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "technical_profile" DROP COLUMN "projectInterests",
ADD COLUMN     "projectInterests" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "connections_participantAId_participantBId_key" ON "connections"("participantAId", "participantBId");

-- CreateIndex
CREATE UNIQUE INDEX "incoming_connection_senderId_receiverId_key" ON "incoming_connection"("senderId", "receiverId");

-- CreateIndex
CREATE UNIQUE INDEX "outgoing_connection_senderId_receiverId_key" ON "outgoing_connection"("senderId", "receiverId");

-- AddForeignKey
ALTER TABLE "incoming_connection" ADD CONSTRAINT "incoming_connection_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outgoing_connection" ADD CONSTRAINT "outgoing_connection_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connections" ADD CONSTRAINT "connections_participantAId_fkey" FOREIGN KEY ("participantAId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connections" ADD CONSTRAINT "connections_participantBId_fkey" FOREIGN KEY ("participantBId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
