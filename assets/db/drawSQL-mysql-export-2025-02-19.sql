CREATE TABLE `persona`(
    `id` INT NOT NULL,
    `tipo_persona` ENUM(
        'persona natural',
        'persona juridica'
    ) NOT NULL,
    `nombre` VARCHAR(255) NOT NULL,
    `nit` INT NOT NULL,
    `dv` INT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `camara_comercio`(
    `id` INT NOT NULL,
    `sucursal` INT NOT NULL,
    `pagina_web` VARCHAR(255) NOT NULL,
    `usuario` VARCHAR(255) NOT NULL,
    `clave_ingreso` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
ALTER TABLE
    `camara_comercio` ADD INDEX `camara_comercio_sucursal_index`(`sucursal`);
CREATE TABLE `persona_modulo_submodulo`(
    `id` INT NOT NULL,
    `id_submodulo` INT NOT NULL,
    `id_modulo` INT NOT NULL,
    `id_persona` INT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL
);
CREATE TABLE `contable`(
    `id` INT NOT NULL,
    `usuario` VARCHAR(255) NOT NULL,
    `clave ingreso` VARCHAR(255) NOT NULL,
    `programa_id` INT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
ALTER TABLE
    `contable` ADD INDEX `contable_programa_id_index`(`programa_id`);
CREATE TABLE `tipo_entidad`(
    `id` BIGINT NOT NULL,
    `nombre` VARCHAR(255) NOT NULL,
    `pagina web` VARCHAR(255) NOT NULL,
    `submodulo_id` BIGINT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_date` DATETIME NULL,
    PRIMARY KEY(`id`)
);
ALTER TABLE
    `tipo_entidad` ADD INDEX `tipo_entidad_submodulo_id_index`(`submodulo_id`);
CREATE TABLE `Superintendencia`(
    `id` INT NOT NULL,
    `usuario` VARCHAR(255) NOT NULL,
    `clave_ingreso` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `udpated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `DIAN`(
    `id` INT NOT NULL,
    `tipo_documento` ENUM(
        'cedula',
        'targeta de identidad',
        'pasaporte',
        'cedula de extrangeria'
    ) NULL DEFAULT 'Cedula de cuidadania',
    `numero_documento` VARCHAR(255) NOT NULL,
    `clave_ingreso` VARCHAR(255) NOT NULL,
    `clave_firma` VARCHAR(255) NULL,
    `created_at` DATETIME NOT NULL,
    `udpated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `AFP`(
    `id` INT NOT NULL,
    `usuario` VARCHAR(255) NOT NULL,
    `clave ingreso` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `programas`(
    `id` INT NOT NULL,
    `nombre` VARCHAR(255) NOT NULL,
    `pagina web` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `contador_persona`(
    `id` INT NOT NULL,
    `id_contador` INT NOT NULL,
    `id_persona` INT NOT NULL,
    `targeta_profesional` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
ALTER TABLE
    `contador_persona` ADD INDEX `contador_persona_id_contador_index`(`id_contador`);
ALTER TABLE
    `contador_persona` ADD INDEX `contador_persona_id_persona_index`(`id_persona`);
CREATE TABLE `modulos`(
    `id` INT NOT NULL,
    `nombre` VARCHAR(255) NOT NULL,
    `deleted_at` DATETIME NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `ARL`(
    `id` INT NOT NULL,
    `usuario` VARCHAR(255) NOT NULL,
    `clave_ingreso` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `tipos_planilla`(
    `id` INT NOT NULL,
    `nombre` VARCHAR(255) NOT NULL,
    `submodulo_id` INT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
ALTER TABLE
    `tipos_planilla` ADD INDEX `tipos_planilla_submodulo_id_index`(`submodulo_id`);
CREATE TABLE `pagina_ciudad`(
    `id` INT NOT NULL,
    `ciudad` VARCHAR(255) NOT NULL COMMENT 'no pueden haber 2 pagina_ciudad con la misma cuidad',
    `estado` BOOLEAN NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `planilla_seguridad_social`(
    `id` INT NOT NULL,
    `usuario` VARCHAR(255) NOT NULL,
    `clave_ingreso` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `CCF`(
    `id` INT NOT NULL,
    `correo_electronico` VARCHAR(255) NOT NULL,
    `clave_ingreso` VARCHAR(255) NOT NULL,
    `codigo_empresa` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `Alcaldia`(
    `id` INT NOT NULL,
    `ciudad` INT NOT NULL,
    `pagina_web` VARCHAR(255) NOT NULL,
    `identificacion` VARCHAR(255) NOT NULL,
    `clave_ingreso` VARCHAR(255) NOT NULL,
    `clave_exogena` VARCHAR(255) NULL,
    `clave_ica` VARCHAR(255) NULL,
    `placa` INT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
ALTER TABLE
    `Alcaldia` ADD INDEX `alcaldia_ciudad_index`(`ciudad`);
CREATE TABLE `correos`(
    `id` INT NOT NULL,
    `cuenta` VARCHAR(255) NOT NULL,
    `contraseña` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `udpated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL,
    PRIMARY KEY(`id`)
);
CREATE TABLE `EPS`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `usuario` VARCHAR(255) NOT NULL,
    `clave_ingreso` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    `deleted_at` DATETIME NULL
);
ALTER TABLE
    `tipo_entidad` ADD CONSTRAINT `tipo_entidad_submodulo_id_foreign` FOREIGN KEY(`submodulo_id`) REFERENCES `planilla_seguridad_social`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_modulo_foreign` FOREIGN KEY(`id_modulo`) REFERENCES `modulos`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `camara_comercio`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `ARL`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `Alcaldia`(`id`);
ALTER TABLE
    `contador_persona` ADD CONSTRAINT `contador_persona_id_contador_foreign` FOREIGN KEY(`id_contador`) REFERENCES `persona`(`id`);
ALTER TABLE
    `tipos_planilla` ADD CONSTRAINT `tipos_planilla_submodulo_id_foreign` FOREIGN KEY(`submodulo_id`) REFERENCES `planilla_seguridad_social`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `planilla_seguridad_social`(`id`);
ALTER TABLE
    `tipo_entidad` ADD CONSTRAINT `tipo_entidad_submodulo_id_foreign` FOREIGN KEY(`submodulo_id`) REFERENCES `AFP`(`id`);
ALTER TABLE
    `tipo_entidad` ADD CONSTRAINT `tipo_entidad_submodulo_id_foreign` FOREIGN KEY(`submodulo_id`) REFERENCES `ARL`(`id`);
ALTER TABLE
    `contador_persona` ADD CONSTRAINT `contador_persona_id_persona_foreign` FOREIGN KEY(`id_persona`) REFERENCES `persona`(`id`);
ALTER TABLE
    `Alcaldia` ADD CONSTRAINT `alcaldia_ciudad_foreign` FOREIGN KEY(`ciudad`) REFERENCES `pagina_ciudad`(`id`);
ALTER TABLE
    `tipo_entidad` ADD CONSTRAINT `tipo_entidad_submodulo_id_foreign` FOREIGN KEY(`submodulo_id`) REFERENCES `Superintendencia`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `DIAN`(`id`);
ALTER TABLE
    `camara_comercio` ADD CONSTRAINT `camara_comercio_sucursal_foreign` FOREIGN KEY(`sucursal`) REFERENCES `pagina_ciudad`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `Superintendencia`(`id`);
ALTER TABLE
    `contable` ADD CONSTRAINT `contable_programa_id_foreign` FOREIGN KEY(`programa_id`) REFERENCES `programas`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `AFP`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `CCF`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `EPS`(`id`);
ALTER TABLE
    `tipo_entidad` ADD CONSTRAINT `tipo_entidad_submodulo_id_foreign` FOREIGN KEY(`submodulo_id`) REFERENCES `CCF`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_persona_foreign` FOREIGN KEY(`id_persona`) REFERENCES `persona`(`id`);
ALTER TABLE
    `tipo_entidad` ADD CONSTRAINT `tipo_entidad_submodulo_id_foreign` FOREIGN KEY(`submodulo_id`) REFERENCES `EPS`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `contable`(`id`);
ALTER TABLE
    `persona_modulo_submodulo` ADD CONSTRAINT `persona_modulo_submodulo_id_submodulo_foreign` FOREIGN KEY(`id_submodulo`) REFERENCES `correos`(`id`);