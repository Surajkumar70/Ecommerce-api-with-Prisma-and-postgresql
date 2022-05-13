/*
  Warnings:

  - You are about to drop the column `gdtNumber` on the `Seller` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "gdtNumber",
ADD COLUMN     "gstNumber" TEXT;
