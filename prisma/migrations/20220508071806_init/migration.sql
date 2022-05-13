-- CreateTable
CREATE TABLE "Seller" (
    "id" SERIAL NOT NULL,
    "name" CHAR(20) NOT NULL,
    "email" TEXT NOT NULL,
    "gst_number" TEXT NOT NULL,
    "mobile_number" CHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "categories" TEXT NOT NULL,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" CHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "prise" INTEGER NOT NULL,
    "is_discounted" BOOLEAN NOT NULL DEFAULT false,
    "discounted_prise" INTEGER NOT NULL,
    "categories" TEXT NOT NULL,
    "in_stock" BOOLEAN NOT NULL DEFAULT true,
    "seller_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Seller_email_key" ON "Seller"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_gst_number_key" ON "Seller"("gst_number");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
