/*
  Warnings:

  - A unique constraint covering the columns `[ip]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User.ip_unique" ON "User"("ip");
