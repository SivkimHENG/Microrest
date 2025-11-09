/*
  Warnings:

  - You are about to drop the column `customer_uuid` on the `customer_addresses` table. All the data in the column will be lost.
  - You are about to drop the column `customer_uuid` on the `customer_profiles` table. All the data in the column will be lost.
  - Added the required column `customer_profile_id` to the `customer_addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."customer_addresses_customer_uuid_key";

-- DropIndex
DROP INDEX "public"."customer_profiles_customer_uuid_key";

-- AlterTable
ALTER TABLE "customer_addresses" DROP COLUMN "customer_uuid",
ADD COLUMN     "customer_profile_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "customer_profiles" DROP COLUMN "customer_uuid";

-- AddForeignKey
ALTER TABLE "customer_addresses" ADD CONSTRAINT "customer_addresses_customer_profile_id_fkey" FOREIGN KEY ("customer_profile_id") REFERENCES "customer_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
