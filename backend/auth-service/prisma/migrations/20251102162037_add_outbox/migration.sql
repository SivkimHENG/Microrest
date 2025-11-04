/*
  Warnings:

  - You are about to drop the `inbox_events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `outbox_events` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."inbox_events";

-- DropTable
DROP TABLE "public"."outbox_events";

-- CreateTable
CREATE TABLE "Outbox" (
    "id" TEXT NOT NULL,
    "aggregateType" TEXT NOT NULL,
    "aggregateId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "payload" JSONB NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Outbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Outbox_status_occurredAt_idx" ON "Outbox"("status", "occurredAt");
