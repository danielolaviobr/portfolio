/*
  Warnings:

  - You are about to drop the column `published_at` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "published_at",
ADD COLUMN     "publishedAt" TEXT NOT NULL DEFAULT E'January 01, 2021';
