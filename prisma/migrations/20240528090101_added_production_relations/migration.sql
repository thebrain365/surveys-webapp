/*
  Warnings:

  - You are about to drop the `FOOD` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PERSON` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PREFERENCE` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FOODToPERSON` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PERSONToPREFERENCE` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_FOODToPERSON` DROP FOREIGN KEY `_FOODToPERSON_A_fkey`;

-- DropForeignKey
ALTER TABLE `_FOODToPERSON` DROP FOREIGN KEY `_FOODToPERSON_B_fkey`;

-- DropForeignKey
ALTER TABLE `_PERSONToPREFERENCE` DROP FOREIGN KEY `_PERSONToPREFERENCE_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PERSONToPREFERENCE` DROP FOREIGN KEY `_PERSONToPREFERENCE_B_fkey`;

-- DropTable
DROP TABLE `FOOD`;

-- DropTable
DROP TABLE `PERSON`;

-- DropTable
DROP TABLE `PREFERENCE`;

-- DropTable
DROP TABLE `_FOODToPERSON`;

-- DropTable
DROP TABLE `_PERSONToPREFERENCE`;

-- CreateTable
CREATE TABLE `Person` (
    `id` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Person_contact_key`(`contact`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Preference` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Preference_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Food` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Food_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PersonOnPreference` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `personId` VARCHAR(191) NOT NULL,
    `preferenceId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PersonOnFood` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `personId` VARCHAR(191) NOT NULL,
    `foodId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PersonOnPreference` ADD CONSTRAINT `PersonOnPreference_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `Person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PersonOnPreference` ADD CONSTRAINT `PersonOnPreference_preferenceId_fkey` FOREIGN KEY (`preferenceId`) REFERENCES `Preference`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PersonOnFood` ADD CONSTRAINT `PersonOnFood_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `Person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PersonOnFood` ADD CONSTRAINT `PersonOnFood_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Food`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
