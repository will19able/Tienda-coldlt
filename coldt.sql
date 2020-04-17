-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 17-04-2020 a las 15:38:27
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coldt`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

DROP TABLE IF EXISTS `factura`;
CREATE TABLE IF NOT EXISTS `factura` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `cliente` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `item` varchar(1000) COLLATE utf8_swedish_ci NOT NULL,
  `valorTotal` float(12,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id`, `cliente`, `item`, `valorTotal`) VALUES
(7, 'william polo', '[{\"producto\":{\"codigo\":3,\"nombre\":\"Lavadora\",\"valor\":550000},\"cantidad\":2,\"valorTotal\":1100000},{\"producto\":{\"codigo\":4,\"nombre\":\"telefono\",\"valor\":150000},\"cantidad\":3,\"valorTotal\":450000}]', 1550000.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `codigo` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8_swedish_ci NOT NULL,
  `valor` float NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`codigo`, `nombre`, `valor`) VALUES
(15, 'Lavadora', 589699),
(19, 'computador', 5400000),
(21, 'Gafas de sol', 350000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
