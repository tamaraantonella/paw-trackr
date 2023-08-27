-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NULL,
    `postal_code` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `created` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `modified` TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `users_id_key`(`id`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `breed` VARCHAR(255) NULL,
    `age` INTEGER NOT NULL,
    `gender` VARCHAR(255) NOT NULL DEFAULT 'Unknown',
    `owner_id` VARCHAR(191) NULL,
    `image` VARCHAR(255) NULL,

    UNIQUE INDEX `pets_id_key`(`id`),
    INDEX `pets_owner_id_idx`(`owner_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vaccines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `renewal` INTEGER NOT NULL,
    `manufacturer` VARCHAR(255) NOT NULL DEFAULT 'Unknown',

    UNIQUE INDEX `vaccines_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pet_vaccines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pet_id` INTEGER NOT NULL,
    `vaccine_id` INTEGER NOT NULL,
    `date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `pet_vaccines_id_key`(`id`),
    INDEX `pet_vaccines_pet_id_idx`(`pet_id`),
    INDEX `pet_vaccines_vaccine_id_idx`(`vaccine_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dewormers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `manufacturer` VARCHAR(255) NOT NULL DEFAULT 'Unknown',

    UNIQUE INDEX `dewormers_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dewormings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pet_id` INTEGER NOT NULL,
    `dewormer_id` INTEGER NOT NULL,
    `date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),

    UNIQUE INDEX `dewormings_id_key`(`id`),
    INDEX `dewormings_pet_id_idx`(`pet_id`),
    INDEX `dewormings_dewormer_id_idx`(`dewormer_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sicknesses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `sicknesses_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pet_sicknesses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pet_id` INTEGER NOT NULL,
    `sickness_id` INTEGER NOT NULL,
    `date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `pet_sicknesses_id_key`(`id`),
    INDEX `pet_sicknesses_pet_id_idx`(`pet_id`),
    INDEX `pet_sicknesses_sickness_id_idx`(`sickness_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `surgeries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `pet_id` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `date` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `cost` DOUBLE NOT NULL,
    `veterinarian_id` INTEGER NOT NULL,

    UNIQUE INDEX `surgeries_id_key`(`id`),
    INDEX `surgeries_pet_id_idx`(`pet_id`),
    INDEX `surgeries_veterinarian_id_idx`(`veterinarian_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `veterinarians` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `postal_code` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `veterinarians_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vet_appointments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pet_id` INTEGER NOT NULL,
    `veterinarian_id` INTEGER NULL,
    `date` TIMESTAMP(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
    `description` VARCHAR(255) NOT NULL,
    `sickness_id` INTEGER NULL,
    `diagnosis` VARCHAR(255) NULL,
    `instructions` VARCHAR(255) NULL,

    UNIQUE INDEX `vet_appointments_id_key`(`id`),
    INDEX `vet_appointments_pet_id_idx`(`pet_id`),
    INDEX `vet_appointments_veterinarian_id_idx`(`veterinarian_id`),
    INDEX `vet_appointments_sickness_id_idx`(`sickness_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
