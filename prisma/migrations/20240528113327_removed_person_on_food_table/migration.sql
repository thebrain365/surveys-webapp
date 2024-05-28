/*
  Warnings:

  - You are about to drop the `PersonOnFood` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rating` to the `PersonOnPreference` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `PersonOnFood` DROP FOREIGN KEY `PersonOnFood_foodId_fkey`;

-- DropForeignKey
ALTER TABLE `PersonOnFood` DROP FOREIGN KEY `PersonOnFood_personId_fkey`;

-- AlterTable
ALTER TABLE `PersonOnPreference` ADD COLUMN `rating` INTEGER NOT NULL;

-- DropTable
DROP TABLE `PersonOnFood`;

-- CreateTable
CREATE TABLE `_FoodToPerson` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_FoodToPerson_AB_unique`(`A`, `B`),
    INDEX `_FoodToPerson_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FoodToPerson` ADD CONSTRAINT `_FoodToPerson_A_fkey` FOREIGN KEY (`A`) REFERENCES `Food`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FoodToPerson` ADD CONSTRAINT `_FoodToPerson_B_fkey` FOREIGN KEY (`B`) REFERENCES `Person`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
