/*
  Warnings:

  - The `name` column on the `Manga` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `imageUrl` column on the `Manga` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `Url` column on the `Manga` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `UrlLink` column on the `Manga` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Manga" ADD COLUMN     "genre" TEXT[],
DROP COLUMN "name",
ADD COLUMN     "name" TEXT[],
DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[],
DROP COLUMN "Url",
ADD COLUMN     "Url" TEXT[],
DROP COLUMN "UrlLink",
ADD COLUMN     "UrlLink" TEXT[];
