/*
  Warnings:

  - You are about to drop the column `categories` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `gst_number` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `mobile_number` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `Seller` table. All the data in the column will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `phoneNumber` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Seller` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_seller_id_fkey";

-- DropIndex
DROP INDEX "Seller_gst_number_key";

-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "categories",
DROP COLUMN "created_at",
DROP COLUMN "gst_number",
DROP COLUMN "mobile_number",
DROP COLUMN "update_at",
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gdtNumber" TEXT,
ADD COLUMN     "phoneNumber" VARCHAR(10) NOT NULL,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(30);

-- DropTable
DROP TABLE "product";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(225) NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "productImage" TEXT[],
    "discountPrice" INTEGER NOT NULL,
    "isDiscount" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL,
    "isStock" BOOLEAN NOT NULL DEFAULT true,
    "sellerId" INTEGER NOT NULL,
    "createAt" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
