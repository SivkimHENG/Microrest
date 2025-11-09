/*
  Warnings:

  - You are about to drop the column `user_id` on the `CustomerProfiles` table. All the data in the column will be lost.
  - You are about to drop the `CustomerAddress` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_uuid]` on the table `CustomerProfiles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_uuid` to the `CustomerProfiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CustomerProfiles" DROP COLUMN "user_id",
ADD COLUMN     "user_uuid" UUID NOT NULL;

-- DropTable
DROP TABLE "public"."CustomerAddress";

-- CreateTable
CREATE TABLE "customer_addresses" (
    "id" SERIAL NOT NULL,
    "user_uuid" UUID NOT NULL,
    "customer_profile_id" INTEGER NOT NULL,
    "address_line1" VARCHAR(255),
    "address_line2" VARCHAR(255),
    "city" VARCHAR(100) NOT NULL,
    "khan" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login_history" (
    "id" SERIAL NOT NULL,
    "user_profile_id" INTEGER NOT NULL,
    "success" BOOLEAN NOT NULL,
    "action" TEXT NOT NULL,
    "lastLoginAt" TIMESTAMP(3),
    "lastLoginIp" TEXT,
    "loginCount" INTEGER NOT NULL DEFAULT 0,
    "ip_address" INET,
    "user_agent" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "login_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_addresses_user_uuid_key" ON "customer_addresses"("user_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerProfiles_user_uuid_key" ON "CustomerProfiles"("user_uuid");

-- AddForeignKey
ALTER TABLE "customer_addresses" ADD CONSTRAINT "customer_addresses_customer_profile_id_fkey" FOREIGN KEY ("customer_profile_id") REFERENCES "CustomerProfiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login_history" ADD CONSTRAINT "login_history_user_profile_id_fkey" FOREIGN KEY ("user_profile_id") REFERENCES "user_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
