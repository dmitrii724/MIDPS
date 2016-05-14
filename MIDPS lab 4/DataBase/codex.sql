-- phpMyAdmin SQL Dump
-- version 4.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 17, 2015 at 07:02 PM
-- Server version: 5.5.41-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `codexworld`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1=Active, 0=Inactive'
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `created`, `modified`, `status`) VALUES
(1, 'MIDPS', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(2, 'MIDPS1', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(3, 'MIDPS2', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(4, 'MIDPS3', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(5, 'MIDPS4', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(6, 'MIDPS5', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(7, 'MIDPS6', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(8, 'MIDPS7', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(9, 'MIDPS8', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(10, 'MIDPS9', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(11, 'MIDPS10', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(12, 'MIDPS11', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(13, 'MIDPS12', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(14, 'MIDPS13', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(15, 'MIDPS14', '2015-12-17 04:15:15', '2015-12-17 04:15:15', 1),
(16, 'MIDPS15', '2015-12-17 05:20:28', '2015-12-17 11:30:37', 1),
(17, 'MIDPS16', '2015-12-17 05:20:28', '2015-12-17 11:30:37', 1),
(18, 'MIDPS17', '2015-12-17 05:20:28', '2015-12-17 11:30:37', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
