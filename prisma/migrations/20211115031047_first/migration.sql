-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "todo" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
