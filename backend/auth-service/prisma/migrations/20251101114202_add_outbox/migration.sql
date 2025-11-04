-- CreateTable
CREATE TABLE "outbox_events" (
    "id" SERIAL NOT NULL,
    "aggregateId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "maxRetries" INTEGER NOT NULL DEFAULT 5,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "outbox_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inbox_events" (
    "id" SERIAL NOT NULL,
    "eventId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "processedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inbox_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "outbox_events_published_createdAt_idx" ON "outbox_events"("published", "createdAt");

-- CreateIndex
CREATE INDEX "outbox_events_eventType_idx" ON "outbox_events"("eventType");

-- CreateIndex
CREATE UNIQUE INDEX "inbox_events_eventId_key" ON "inbox_events"("eventId");

-- CreateIndex
CREATE INDEX "inbox_events_eventType_processedAt_idx" ON "inbox_events"("eventType", "processedAt");
