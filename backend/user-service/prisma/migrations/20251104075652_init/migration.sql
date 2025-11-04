-- CreateTable
CREATE TABLE "ProccessedEvent" (
    "eventId" TEXT NOT NULL,
    "processedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProccessedEvent_pkey" PRIMARY KEY ("eventId")
);

-- CreateIndex
CREATE INDEX "ProccessedEvent_processedAt_idx" ON "ProccessedEvent"("processedAt");
