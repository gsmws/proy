-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-03-2019 a las 18:24:24
-- Versión del servidor: 5.7.23
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wsphp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

DROP TABLE IF EXISTS `alumno`;
CREATE TABLE IF NOT EXISTS `alumno` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(35) NOT NULL,
  `FotoURL` varchar(255) NOT NULL,
  `Usuario` varchar(25) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`Id`, `Nombre`, `FotoURL`, `Usuario`, `Password`) VALUES
(46, 'AdministradorSF', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploads/34752577_1761039387316357_7153179860104380416_o.jpg', 'A14', 'dc3bf9f43928eb52cc2ed7530ec9cdb2c38884a1'),
(47, 'Jose Andres', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploads/555117_105789019621560_1697638179_n.jpg', 'JS', '95f92b2f0cb530542d16d90a6c2af59e20759430'),
(48, 'Julian Aguilar Perez', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploads/9562_1643444645908031_4724474880178544489_n.jpg', 'JAP', 'dc3bf9f43928eb52cc2ed7530ec9cdb2c38884a1'),
(50, 'ROCO', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploads/11272224_823996357691329_1801297209_n.jpg', 'ROCO', 'dc3bf9f43928eb52cc2ed7530ec9cdb2c38884a1'),
(51, 'Nombrs', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploads/images.jpg', 'nuevo', 'ffd95b7cdbe67e5e736f304f42ed96fc925b9f65'),
(52, 'Nombres', '', 'nuevo', 'ffd95b7cdbe67e5e736f304f42ed96fc925b9f65'),
(53, 'jupiters', '', 'PrimerUsuario', 'ffd95b7cdbe67e5e736f304f42ed96fc925b9f65'),
(54, 'AdministradorSF', 'NINGUNA', 'A15', 'GSM'),
(56, 'asasa', 'asas', 'alala', 'asas'),
(57, 'Jose Andresggg', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploads/555117_105789019621560_1697638179_n.jpg', 'JS', '95f92b2f0cb530542d16d90a6c2af59e20759430'),
(58, 'asas', '112s', '1wdsd', 'sdsd'),
(59, 'asas', '112s', '1wdsd', 'sdsd'),
(60, 'asas', '112s', '1wdsd', 'sdsd'),
(61, 'aaaaaaaass', 'AAAAAAAAS', '1wdsdAS', 'sdsd'),
(62, 'aaaaaaaassA', 'AAAAAAAASA', '1wdsdASA', 'sdsd'),
(63, 'aaaaaaaassA', 'AAAAAAAASA', '1wdsdASA', 'sdsd'),
(64, 'aaaaaaaassA', 'AAAAAAAASA', '1wdsdASA', 'sdsd'),
(65, 'aaaaaaaassA', 'AAAAAAAASA', '1wdsdASAa', 'sdsd'),
(66, 'aaaaaaaassA', 'AAAAAAAASA', '1wdsdASAa', 'sdsd'),
(67, 'aaaaaaaassA', 'undefined', '1wdsdASAa', 'sdsd'),
(68, 'aaaaaaaassA', '1wdsdASAa', 'sdsd', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gastos`
--

DROP TABLE IF EXISTS `gastos`;
CREATE TABLE IF NOT EXISTS `gastos` (
  `IdGasto` int(11) NOT NULL AUTO_INCREMENT,
  `Concepto` varchar(200) NOT NULL,
  `NumeroFactura` varchar(25) DEFAULT NULL,
  `Proveedor` varchar(45) NOT NULL,
  `TotalGasto` double NOT NULL,
  `FechaGasto` datetime NOT NULL,
  PRIMARY KEY (`IdGasto`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `gastos`
--

INSERT INTO `gastos` (`IdGasto`, `Concepto`, `NumeroFactura`, `Proveedor`, `TotalGasto`, `FechaGasto`) VALUES
(1, 'compra de sabritas', '121212', 'gamesa', 123, '2019-02-13 00:00:00'),
(2, 'compra de refrescos', '129912', 'pepsi', 1232, '2019-02-13 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

DROP TABLE IF EXISTS `libro`;
CREATE TABLE IF NOT EXISTS `libro` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(150) NOT NULL,
  `Autor` varchar(100) NOT NULL,
  `Publicacion` varchar(25) NOT NULL,
  `Paginas` float NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`Id`, `Titulo`, `Autor`, `Publicacion`, `Paginas`) VALUES
(1, 'SASSA', 'ASAS', 'SASA', 25.5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `CodigoQR` varchar(255) NOT NULL,
  `Descripcion` varchar(45) NOT NULL,
  `Precio` double NOT NULL,
  `Cantidad` int(11) NOT NULL,
  PRIMARY KEY (`CodigoQR`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`CodigoQR`, `Descripcion`, `Precio`, `Cantidad`) VALUES
('175419782509', 'zapatos ', 300, 0),
('4019338605142', 'Rantudil', 50, 10),
('5508963026471', 'Playera para hombre ', 500, 10),
('75002459', 'Cerveza Tecate Original 355ml', 15, 5),
('75004132', 'Cerveza Tecate Ligh 355', 16, 5),
('7501020510478', 'Yoghurt Fresa 1KG', 56, 10),
('7501025403027', 'Desinfectante Pinol 500ml', 18, 10),
('7501026015489', 'Detergente puro sol 250g', 13, 10),
('7501026015496', 'Detergente puro sol 500g', 21.5, 10),
('7501026023040', 'Detergente para ropa carisma', 15, 10),
('7501031307210', 'jumex', 10, 10),
('7501055310883', 'Agua purificada ciel 1L', 12, 10),
('7501055330461', 'Del Valle Frut 2L', 22, 10),
('7501055334018', 'Jugo del valle 453ml', 12, 10),
('7501064196591', 'Cerveza modelo especial 355ml', 20, 2),
('7501201204950', 'Colchón ultra', 1, 10),
('7501258207409', 'Diclofenaco', 14, 10),
('7502253072924', 'Ziloprim', 45, 10),
('7506241202454', 'AJE agua purificada 628ml', 8, 10),
('970816397952', 'Libros', 100, 10),
('9780816397952', 'Evento de los últimos días ', 1000, 10),
('9781575544069', 'Historias que construyen el carácter 1', 390, 10),
('9781575549408', 'Reavivamiento nuestra mayor necesidad ', 25.5, 10),
('9788472082106', 'Salud y educación para la familia 4', 380, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarea`
--

DROP TABLE IF EXISTS `tarea`;
CREATE TABLE IF NOT EXISTS `tarea` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(25) NOT NULL,
  `ArchivoURL` varchar(255) NOT NULL,
  `FechaPublicacion` datetime NOT NULL,
  `FechaLimite` datetime NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tarea`
--

INSERT INTO `tarea` (`Id`, `Titulo`, `ArchivoURL`, `FechaPublicacion`, `FechaLimite`) VALUES
(1, 'Tarea 1', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/java.pdf', '2019-01-30 22:45:59', '2019-02-02 23:59:59'),
(2, 'Tarea 2', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-01-30 22:59:59', '2019-01-31 23:59:59'),
(3, 'TAREA 3', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-01-30 23:59:59', '2019-01-31 23:59:59'),
(5, 'TAREA 4', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 17:41:42', '2019-02-01 00:00:00'),
(6, 'TAREA 5', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 17:43:25', '2019-02-01 17:02:02'),
(7, 'Tara', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 18:12:55', '2019-02-01 06:12:57'),
(9, 'as', '', '2019-01-30 22:45:59', '2019-01-31 23:39:59'),
(10, 'TAREA 6', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 18:41:49', '2019-02-02 06:42:01'),
(11, 'TAREA 7', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 18:43:06', '2019-02-02 06:43:16'),
(12, 'tRA', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 18:57:29', '2019-02-01 06:57:38'),
(13, 'TAREA 8', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 18:58:37', '2019-02-02 06:58:46'),
(14, 'TAREA 56', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 18:59:40', '2019-02-02 06:59:51'),
(15, 'TAREA 4s', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 19:01:48', '2019-02-02 07:02:01'),
(16, 'TAREA 48', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 19:02:36', '2019-02-02 07:02:46'),
(17, 'cavas', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 19:03:56', '2019-02-02 07:04:04'),
(18, 'assAAAAassss', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 19:06:05', '2019-02-02 07:06:18'),
(19, 'asaaa', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-02-01 19:08:27', '2019-02-02 07:08:35'),
(20, 'TAREA 42', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/File 0 Upload Failed! :/', '2019-02-01 19:17:18', '2019-02-02 07:17:28'),
(22, 'Tareas fin de grado 5 A', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/palabras-vida-gran-maestro.pdf', '2019-02-01 19:58:36', '2019-02-02 07:58:56'),
(23, 'Realizar ensayo', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/java.pdf', '2019-02-03 22:55:41', '2019-02-05 04:55:01'),
(24, 'Tarea 100', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/java.pdf', '2019-01-30 22:45:59', '2019-02-02 23:59:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareaalumno`
--

DROP TABLE IF EXISTS `tareaalumno`;
CREATE TABLE IF NOT EXISTS `tareaalumno` (
  `IdTarea` int(11) NOT NULL,
  `IdAlumno` int(11) NOT NULL,
  `Mensaje` varchar(50) DEFAULT NULL,
  `ArchivoURL` varchar(100) NOT NULL,
  `Fecha` datetime NOT NULL,
  `Calificacion` int(11) DEFAULT NULL,
  `Evaluado` tinyint(1) DEFAULT NULL,
  KEY `tarea_fk_idx` (`IdTarea`),
  KEY `alumno_fk_idx` (`IdAlumno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareaalumno`
--

INSERT INTO `tareaalumno` (`IdTarea`, `IdAlumno`, `Mensaje`, `ArchivoURL`, `Fecha`, `Calificacion`, `Evaluado`) VALUES
(1, 48, 'Primeros 100 ejercicios del libro de baldor', 'http://localhost:8080/PHP/cliente/phpProfesor/Views/uploats/cv_gsm.pdf', '2019-01-31 23:59:00', 8, 1),
(1, 47, 'null', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploats/cv_gsm.pdf', '2019-01-31 23:59:00', 5, 1),
(3, 47, NULL, 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploats/cv_gsm.pdf', '2019-01-31 23:59:00', NULL, 0),
(22, 47, 'Pendiente', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploats/05-Paquetes.pdf', '2019-01-31 23:59:00', 0, 0),
(20, 47, 'Pendiente', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploats/palabras-vida-gran-maestro.pdf', '2019-02-02 23:58:25', 0, 0),
(19, 47, 'Pendiente', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploats/10-2000.pdf', '2019-02-03 07:04:38', 0, 0),
(18, 47, 'Pendiente', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploats/java.pdf', '2019-02-03 07:05:47', 8, 1),
(17, 47, 'Pendiente', 'http://localhost:8080/PHP/cliente/phpAlumno/Views/uploats/cv_gsm(19).pdf', '2019-02-03 07:13:21', 9, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

DROP TABLE IF EXISTS `ventas`;
CREATE TABLE IF NOT EXISTS `ventas` (
  `IdVenta` int(11) NOT NULL AUTO_INCREMENT,
  `FkCodigoQR` varchar(25) NOT NULL,
  `CantidadVenta` int(11) NOT NULL,
  `FechaVenta` varchar(45) NOT NULL,
  `TotalVenta` double NOT NULL,
  PRIMARY KEY (`IdVenta`),
  KEY `FK_VENTAS_PRODUCTOS_idx` (`FkCodigoQR`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`IdVenta`, `FkCodigoQR`, `CantidadVenta`, `FechaVenta`, `TotalVenta`) VALUES
(73, '75004132', 1, 'uno', 12),
(74, '970816397952', 1, 'dos', 12),
(75, '75004132', 1, 'uno', 12),
(76, '970816397952', 1, 'dos', 12),
(77, '75004132', 1, '2019-02-12 08:13:46', 12),
(78, '970816397952', 1, '2019-02-12 08:13:46', 12);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tareaalumno`
--
ALTER TABLE `tareaalumno`
  ADD CONSTRAINT `alumno_fk` FOREIGN KEY (`IdAlumno`) REFERENCES `alumno` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tarea_fk` FOREIGN KEY (`IdTarea`) REFERENCES `tarea` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `FK_VENTAS_PRODUCTOS` FOREIGN KEY (`FkCodigoQR`) REFERENCES `productos` (`CodigoQR`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
