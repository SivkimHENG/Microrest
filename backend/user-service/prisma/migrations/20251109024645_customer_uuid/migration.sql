/*
  Warnings:

  - You are about to drop the column `customer_profile_id` on the `customer_addresses` table. All the data in the column will be lost.
  - You are about to drop the column `user_uuid` on the `customer_addresses` table. All the data in the column will be lost.
  - You are about to drop the `CustomerProfiles` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[customer_uuid]` on the table `customer_addresses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customer_uuid` to the `customer_addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."customer_addresses" DROP CONSTRAINT "customer_addresses_customer_profile_id_fkey";

-- DropIndex
DROP INDEX "public"."customer_addresses_user_uuid_key";

-- AlterTable
ALTER TABLE "customer_addresses" DROP COLUMN "customer_profile_id",
DROP COLUMN "user_uuid",
ADD COLUMN     "customer_uuid" UUID NOT NULL;

-- DropTable
DROP TABLE "public"."CustomerProfiles";

-- CreateTable
CREATE TABLE "customer_profiles" (
    "id" SERIAL NOT NULL,
    "user_uuid" UUID NOT NULL,
    "customer_uuid" UUID NOT NULL,
    "customer_since" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "loyalty_points" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_activity_log" (
    "id" SERIAL NOT NULL,
    "customer_profile_id" INTEGER NOT NULL,
    "action" VARCHAR(100) NOT NULL,
    "success" BOOLEAN NOT NULL,
    "message" VARCHAR(50) NOT NULL,
    "ipAddress" INET,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_activity_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_profiles_user_uuid_key" ON "customer_profiles"("user_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "customer_profiles_customer_uuid_key" ON "customer_profiles"("customer_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "customer_addresses_customer_uuid_key" ON "customer_addresses"("customer_uuid");

-- AddForeignKey
ALTER TABLE "user_activity_log" ADD CONSTRAINT "user_activity_log_customer_profile_id_fkey" FOREIGN KEY ("customer_profile_id") REFERENCES "customer_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
