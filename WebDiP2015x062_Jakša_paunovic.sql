-- phpMyAdmin SQL Dump
-- version 3.4.11.1deb2+deb7u5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 12, 2016 at 01:06 PM
-- Server version: 5.5.50
-- PHP Version: 5.4.45-0+deb7u4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `WebDiP2015x062`
--

-- --------------------------------------------------------

--
-- Table structure for table `dnevnik`
--

CREATE TABLE IF NOT EXISTS `dnevnik` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `korisnik` varchar(40) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `opis` varchar(100) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `vrijeme` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `galerja_slika`
--

CREATE TABLE IF NOT EXISTS `galerja_slika` (
  `idGalerije` int(11) NOT NULL AUTO_INCREMENT,
  `idslika` int(11) DEFAULT NULL,
  `tag` varchar(40) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `idkorisnici` int(11) DEFAULT NULL,
  PRIMARY KEY (`idGalerije`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

CREATE TABLE IF NOT EXISTS `korisnici` (
  `idkorisnici` int(11) NOT NULL AUTO_INCREMENT,
  `ime` varchar(20) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `prezime` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `email` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `sifra` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `korisnicko_ime` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `adresa` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `aktivaciski_kod` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `vrijeme_registracije` datetime DEFAULT NULL,
  `neuspjesnost_prijave` int(11) DEFAULT NULL,
  `uloga` int(11) DEFAULT NULL,
  `slika` int(11) DEFAULT NULL,
  PRIMARY KEY (`idkorisnici`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `korisnici_lokacija`
--

CREATE TABLE IF NOT EXISTS `korisnici_lokacija` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idkorisnici` int(11) DEFAULT NULL,
  `idlokacija` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `lokacija`
--

CREATE TABLE IF NOT EXISTS `lokacija` (
  `idlokacija` int(11) NOT NULL AUTO_INCREMENT,
  `NazivLokacije` varchar(100) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `drzava` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `grad` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `ulica` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `postanskibroj` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  PRIMARY KEY (`idlokacija`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `lokacije_projekcija`
--

CREATE TABLE IF NOT EXISTS `lokacije_projekcija` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idproekcije` int(11) DEFAULT NULL,
  `idlokacija` int(11) DEFAULT NULL,
  `korid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idproekcije` (`idproekcije`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `nesvida`
--

CREATE TABLE IF NOT EXISTS `nesvida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projekcija` int(11) DEFAULT NULL,
  `lokacija` int(11) DEFAULT NULL,
  `datum` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `posjecenost`
--

CREATE TABLE IF NOT EXISTS `posjecenost` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stanica` varchar(40) CHARACTER SET cp1250 COLLATE cp1250_croatian_ci DEFAULT NULL,
  `upit` varchar(80) DEFAULT NULL,
  `korisnik` varchar(50) DEFAULT NULL,
  `datum` date DEFAULT NULL,
  `vrijeme` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `projekcije`
--

CREATE TABLE IF NOT EXISTS `projekcije` (
  `idproekcije` int(11) NOT NULL AUTO_INCREMENT,
  `NazivProjekcije` varchar(40) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `broj_slobodnihmjesta` int(11) DEFAULT NULL,
  `datum_projekcije_od` date DEFAULT NULL,
  `datum_projekcije_do` date DEFAULT NULL,
  `vrijeme_projekcij_od` time DEFAULT NULL,
  `vrijeme_projekcij_do` time DEFAULT NULL,
  PRIMARY KEY (`idproekcije`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `rezervacija`
--

CREATE TABLE IF NOT EXISTS `rezervacija` (
  `idrezervacije` int(11) NOT NULL AUTO_INCREMENT,
  `korisnici_idkorisnici` int(11) DEFAULT NULL,
  `projekcije_idproekcije` int(11) DEFAULT NULL,
  `NazivProjekcije` varchar(50) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `status` varchar(40) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `br_rezmjesta` int(11) DEFAULT NULL,
  PRIMARY KEY (`idrezervacije`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `slika`
--

CREATE TABLE IF NOT EXISTS `slika` (
  `idslika` int(11) NOT NULL AUTO_INCREMENT,
  `slika` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `opis_slike` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `projekcije` int(11) DEFAULT NULL,
  `korisnik` int(11) DEFAULT NULL,
  PRIMARY KEY (`idslika`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `svida`
--

CREATE TABLE IF NOT EXISTS `svida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projekcija` int(11) DEFAULT NULL,
  `lokacija` int(11) DEFAULT NULL,
  `datum` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `uloge`
--

CREATE TABLE IF NOT EXISTS `uloge` (
  `iduloge` int(11) NOT NULL AUTO_INCREMENT,
  `ime_uloge` varchar(45) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  `opis_uloge` varchar(20) CHARACTER SET latin2 COLLATE latin2_croatian_ci DEFAULT NULL,
  PRIMARY KEY (`iduloge`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
