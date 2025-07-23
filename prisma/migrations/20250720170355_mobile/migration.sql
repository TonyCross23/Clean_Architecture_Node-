/*
  Warnings:

  - Added the required column `address` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('Like New', 'Good', 'Fair', 'Poor');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Available', 'Sold', 'Reserved');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('Cash', 'Card', 'Online');

-- CreateEnum
CREATE TYPE "Action" AS ENUM ('Add', 'Sell', 'Return');

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Sale" (
    "id" SERIAL NOT NULL,
    "mobile_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "sale_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "salePrice" TEXT NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "category_name" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mobile" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "modelName" VARCHAR(100) NOT NULL,
    "brand" VARCHAR(50) NOT NULL,
    "condition" "Condition" NOT NULL,
    "price" TEXT NOT NULL,
    "storage_capacity" VARCHAR(20),
    "ram" VARCHAR(20),
    "color" VARCHAR(30),
    "description" TEXT,
    "imei" VARCHAR(15) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Available',
    "added_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mobile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" SERIAL NOT NULL,
    "mobile_id" INTEGER NOT NULL,
    "action" "Action" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "action_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mobile_imei_key" ON "Mobile"("imei");

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_mobile_id_fkey" FOREIGN KEY ("mobile_id") REFERENCES "Mobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mobile" ADD CONSTRAINT "Mobile_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_mobile_id_fkey" FOREIGN KEY ("mobile_id") REFERENCES "Mobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
