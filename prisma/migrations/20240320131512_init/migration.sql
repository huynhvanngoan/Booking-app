-- CreateTable
CREATE TABLE "Trips" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nights" INTEGER NOT NULL,
    "days" INTEGER NOT NULL,
    "destinationItinerary" JSONB NOT NULL,
    "images" JSONB NOT NULL,
    "inclusions" JSONB NOT NULL,
    "themes" JSONB NOT NULL,
    "price" INTEGER NOT NULL,
    "destinationDetails" JSONB NOT NULL,
    "detauledItinerary" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "packageItineerary" JSONB NOT NULL,
    "scrappedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trips_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trips_id_key" ON "Trips"("id");
