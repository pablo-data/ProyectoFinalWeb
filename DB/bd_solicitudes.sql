-- MySQL Script generated by MySQL Workbench
-- Sun Jun 20 12:47:01 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bd_solicitudes
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bd_solicitudes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bd_solicitudes` DEFAULT CHARACTER SET utf8 ;
USE `bd_solicitudes` ;

-- -----------------------------------------------------
-- Table `bd_solicitudes`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_solicitudes`.`admin` (
  `idAdmin` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `nombres` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAdmin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_solicitudes`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_solicitudes`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `rut` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `region` VARCHAR(45) NOT NULL,
  `comuna` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_solicitudes`.`prioridad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_solicitudes`.`prioridad` (
  `idPrioridad` INT NOT NULL AUTO_INCREMENT,
  `prioridad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPrioridad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_solicitudes`.`formulario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_solicitudes`.`formulario` (
  `idFormulario` INT NOT NULL AUTO_INCREMENT,
  `asunto` VARCHAR(45) NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `usuario_idUsuario` INT NOT NULL,
  `prioridad_idPrioridad` INT NOT NULL,
  PRIMARY KEY (`idFormulario`),
  INDEX `fk_formulario_usuario_idx` (`usuario_idUsuario` ASC) VISIBLE,
  INDEX `fk_formulario_prioridad1_idx` (`prioridad_idPrioridad` ASC) VISIBLE,
  CONSTRAINT `fk_formulario_usuario`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `bd_solicitudes`.`usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_formulario_prioridad1`
    FOREIGN KEY (`prioridad_idPrioridad`)
    REFERENCES `bd_solicitudes`.`prioridad` (`idPrioridad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_solicitudes`.`ticket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_solicitudes`.`ticket` (
  `idTicket` INT NOT NULL AUTO_INCREMENT,
  `respuesta` VARCHAR(45) NULL,
  `estado` VARCHAR(45) NULL,
  `formulario_idFormulario` INT NOT NULL,
  `prioridad_idPrioridad` INT NOT NULL,
  PRIMARY KEY (`idTicket`),
  INDEX `fk_ticket_formulario1_idx` (`formulario_idFormulario` ASC) VISIBLE,
  INDEX `fk_ticket_prioridad1_idx` (`prioridad_idPrioridad` ASC) VISIBLE,
  CONSTRAINT `fk_ticket_formulario1`
    FOREIGN KEY (`formulario_idFormulario`)
    REFERENCES `bd_solicitudes`.`formulario` (`idFormulario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ticket_prioridad1`
    FOREIGN KEY (`prioridad_idPrioridad`)
    REFERENCES `bd_solicitudes`.`prioridad` (`idPrioridad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd_solicitudes`.`ticket_has_admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bd_solicitudes`.`ticket_has_admin` (
  `ticket_idTicket` INT NOT NULL,
  `admin_idAdmin` INT NOT NULL,
  PRIMARY KEY (`ticket_idTicket`, `admin_idAdmin`),
  INDEX `fk_ticket_has_admin_admin1_idx` (`admin_idAdmin` ASC) VISIBLE,
  INDEX `fk_ticket_has_admin_ticket1_idx` (`ticket_idTicket` ASC) VISIBLE,
  CONSTRAINT `fk_ticket_has_admin_ticket1`
    FOREIGN KEY (`ticket_idTicket`)
    REFERENCES `bd_solicitudes`.`ticket` (`idTicket`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ticket_has_admin_admin1`
    FOREIGN KEY (`admin_idAdmin`)
    REFERENCES `bd_solicitudes`.`admin` (`idAdmin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Insert prioridades
-- -----------------------------------------------------
INSERT INTO prioridad (prioridad) VALUES ("alta");
INSERT INTO prioridad (prioridad) VALUES ("media");
INSERT INTO prioridad (prioridad) VALUES ("baja");
-- -----------------------------------------------------
-- Insert admin
-- -----------------------------------------------------
INSERT INTO admin (email, contraseña, nombres, apellidos) VALUES ("prueba@gmail.com", md5("hola123"), "Juan", "Pedro");

