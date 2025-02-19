CREATE TABLE `persona`(
    `id` INT NOT NULL,
    `tipo_persona` TINYINT NOT NULL,
    `nombre` INT NOT NULL,
    `nit` INT NOT NULL,
    `dv` INT NOT NULL,
    `created_at` INT NOT NULL,
    `updated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `camara_comercio`(
    `id` INT NOT NULL,
    `sucursal` INT NOT NULL,
    `pagina_web` INT NULL,
    `usuario` VARCHAR(255) NOT NULL,
    `clave_ingreso` LONGTEXT NULL,
    `created_at` INT NOT NULL,
    `updated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `persona_modulo_submodulo`(
    `id` INT NOT NULL,
    `id_modulo` INT NOT NULL,
    `id_submodulo` INT NOT NULL,
    `id_persona` INT NOT NULL,
    `created_at` INT NOT NULL,
    `updated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL
);
CREATE TABLE `contable`(
    `id` INT NOT NULL,
    `programa` INT NOT NULL,
    `pagina web` INT NOT NULL,
    `usuario` INT NOT NULL,
    `clave ingreso` INT NOT NULL,
    `created_at` TIMESTAMP NULL,
    `updated_at` TIMESTAMP NULL,
    `deleted_at` INT NOT NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `contador_publico`(
    `id` INT NOT NULL,
    `nombre` INT NOT NULL,
    `numero documento` INT NOT NULL,
    `clave ingreso` VARCHAR(255) NULL,
    `clave firma` VARCHAR(255) NULL,
    `targeta profesional` VARCHAR(255) NULL,
    `created_at` TIMESTAMP NULL,
    `updated_at` TIMESTAMP NULL,
    `deleted_at` INT NOT NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `Superintendencia`(
    `id` BIGINT NOT NULL,
    `entidad` INT NOT NULL,
    `pagina_web` INT NOT NULL,
    `usuario` INT NOT NULL,
    `clave_ingreso` INT NOT NULL,
    `created_at` INT NOT NULL,
    `udpated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL
);
CREATE TABLE `DIAN`(
    `id` BIGINT NOT NULL,
    `tipo_documento` INT NOT NULL,
    `numero_documento` INT NOT NULL,
    `clave_ingreso` INT NOT NULL,
    `clave_firma` INT NOT NULL,
    `created_at` INT NOT NULL,
    `udpated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL
);
CREATE TABLE `modulos`(
    `id` INT NOT NULL,
    `nombre` INT NOT NULL,
    `deleted_at` DATETIME NOT NULL,
    `created_at` TIMESTAMP NULL,
    `updated_at` TIMESTAMP NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `ARL`(
    `id` TINYINT NOT NULL,
    `entidad` TEXT NULL,
    `pagina_web` TIMESTAMP NULL,
    `usuario` INT NOT NULL,
    `clave_ingreso` INT NOT NULL,
    `created_at` INT NOT NULL,
    `updated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL
);
CREATE TABLE `pagina_ciudad`(
    `id` VARCHAR(255) NOT NULL,
    `ciudad` INT NOT NULL,
    `estado` INT NOT NULL,
    `created_at` INT NOT NULL,
    `updated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `planilla_seguridad_social`(
    `id` VARCHAR(255) NOT NULL,
    `entidad` BIGINT NOT NULL,
    `tipo` INT NOT NULL,
    `pagina web` INT NULL,
    `usuario` INT NOT NULL,
    `clave_ingreso` INT NOT NULL,
    `created_at` INT NOT NULL,
    `updated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `CCF`(
    `id` BIGINT NOT NULL,
    `entidad` INT NOT NULL,
    `pagina_web` INT NOT NULL,
    `correo_electronico` INT NOT NULL,
    `clave_ingreso` INT NOT NULL,
    `codigo_empresa` INT NOT NULL,
    `created_at` INT NOT NULL,
    `updated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `Alcaldia`(
    `id` VARCHAR(255) NOT NULL,
    `ciudad` ENUM('') NOT NULL,
    `pagina_web` VARCHAR(255) NOT NULL,
    `identificacion` INT NOT NULL,
    `clave_ingreso` INT NOT NULL,
    `clave_exogena` INT NOT NULL,
    `clave_ica` INT NOT NULL,
    `placa` INT NOT NULL,
    `created_at` INT NOT NULL,
    `updated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL,
    PRIMARY KEY(`id`)
);
ALTER TABLE
    `Alcaldia` ADD UNIQUE `alcaldia_ciudad_unique`(`ciudad`);
CREATE TABLE `correos`(
    `id` INT NOT NULL,
    `cuenta` TIMESTAMP NULL,
    `contraseña` INT NOT NULL,
    `created_at` INT NOT NULL,
    `udpated_at` INT NOT NULL,
    `deleted_at` DATE NOT NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `EPS`(
    `id` INT NOT NULL,
    `entidad` INT NOT NULL,
    `pagina_web` INT NOT NULL,
    `usuario` INT NOT NULL,
    `clave_ingreso` INT NOT NULL,
    `created_at` INT NOT NULL,
    `updated_at` INT NOT NULL,
    `deleted_at` INT NOT NULL,
    PRIMARY KEY(`id`)
);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_modulo_foreign` FOREIGN KEY(`id_modulo`) REFERENCES `modulos`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `camara_comercio`(`id`);
ALTER TABLE
    `ARL` ADD CONSTRAINT `arl_id_foreign` FOREIGN KEY(`id`) REFERENCES `persona_modulo_submodulo`(`id_submodulo`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `Alcaldia`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `planilla_seguridad_social`(`id`);
ALTER TABLE
    `Alcaldia` ADD CONSTRAINT `alcaldia_ciudad_foreign` FOREIGN KEY(`ciudad`) REFERENCES `pagina_ciudad`(`id`);
ALTER TABLE
    `DIAN` ADD CONSTRAINT `dian_id_foreign` FOREIGN KEY(`id`) REFERENCES `persona_modulo_submodulo`(`id_submodulo`);
ALTER TABLE
    `camara_comercio` ADD CONSTRAINT `camara_comercio_sucursal_foreign` FOREIGN KEY(`sucursal`) REFERENCES `pagina_ciudad`(`id`);
ALTER TABLE
    `Superintendencia` ADD CONSTRAINT `superintendencia_id_foreign` FOREIGN KEY(`id`) REFERENCES `persona_modulo_submodulo`(`id_submodulo`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `CCF`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `contador_publico`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `EPS`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_persona_foreign` FOREIGN KEY(`id_persona`) REFERENCES `persona`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `contable`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `correos`(`id`);