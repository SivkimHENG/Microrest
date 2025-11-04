-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "user_profiles" (
    "id" SERIAL NOT NULL,
    "event_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "user_uuid" UUID NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "role" VARCHAR(50) NOT NULL,
    "profile_url" TEXT,
    "bio" VARCHAR(255),
    "phone_number" VARCHAR(20),
    "statuses" "Status"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerProfiles" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "customer_since" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "loyalty_points" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerAddress" (
    "id" SERIAL NOT NULL,
    "address_line1" VARCHAR(255),
    "address_line2" VARCHAR(255),
    "city" VARCHAR(100) NOT NULL,
    "khan" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomerAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_event_id_key" ON "user_profiles"("event_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_user_id_key" ON "user_profiles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_user_uuid_key" ON "user_profiles"("user_uuid");
