-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 29, 2020 at 12:59 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku_movies`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_arating`
--

DROP TABLE IF EXISTS `tbl_arating`;
CREATE TABLE IF NOT EXISTS `tbl_arating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(125) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_arating`
--

INSERT INTO `tbl_arating` (`id`, `name`, `description`) VALUES
(1, 'G', 'G – General Audiences\r\nAll ages admitted. Nothing that would offend parents for viewing by children. '),
(2, 'PG', 'PG – Parental Guidance Suggested\r\nSome material may not be suitable for children. Parents urged to give  	&ldquo;parental guidance&rdquo;. '),
(3, 'PG-13', 'PG-13 – Parents Strongly Cautioned\r\nSome material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'),
(4, 'R', 'R – Restricted\r\nUnder 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them. '),
(5, 'NC-17', 'NC-17 – Adults Only\r\nNo One 17 and Under Admitted. Clearly adult. Children are not admitted. ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_audio`
--

DROP TABLE IF EXISTS `tbl_audio`;
CREATE TABLE IF NOT EXISTS `tbl_audio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `poster` varchar(75) NOT NULL,
  `audio` varchar(75) NOT NULL,
  `year` varchar(5) NOT NULL,
  `artist` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_audio`
--

INSERT INTO `tbl_audio` (`id`, `title`, `poster`, `audio`, `year`, `artist`) VALUES
(1, 'don\'t Speak', 'dont_speak.jpg', 'dont_speak.mp3', '1995', 'No Doubt'),
(2, 'Billie Jean', 'billie_jean.jpg', 'billie_jean.mp3', '1982', 'Michael Jackson'),
(3, 'Your Song', 'your_song.jpg', 'your_song.mp3', '1970', 'Elton John'),
(4, 'The sound of Silence', 'sound_of_silence.jpg', 'sound_of_silence.mp3', '1964', 'Simon & Garfunkel'),
(5, 'I Have A Dream', 'i_have_a_dream.jpg', 'i_have_a_dream.mp3', '1979', 'Abba');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

DROP TABLE IF EXISTS `tbl_comments`;
CREATE TABLE IF NOT EXISTS `tbl_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auth` varchar(125) NOT NULL,
  `copy` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(125) NOT NULL,
  `poster` varchar(75) NOT NULL,
  `year` varchar(5) NOT NULL,
  `runtime` varchar(25) NOT NULL,
  `storyline` text NOT NULL,
  `trailer` varchar(75) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`id`, `title`, `poster`, `year`, `runtime`, `storyline`, `trailer`) VALUES
(1, 'Home Alone', 'home_alone.jpg', '1990', '1h 43min', 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.', 'home_alone.mp4'),
(2, 'Die Hard', 'die_hard.jpg', '1988', '2h 12min', 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.', 'die_hard.mp4'),
(3, 'The Exorcist', 'exorcist.jpg', '1973', '2h 2min', 'When a 12 year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.', 'exorcist.mp4'),
(4, 'The Sound of Music', 'sound_of_music.jpg', '1965', '2h 52mn', 'A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.', 'sound_of_music.mp4'),
(5, 'Twelve Angry Men', 'twelve_angry_men.jpg', '1957', '1h 36min', 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.', 'twelve_angry_men.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv`
--

DROP TABLE IF EXISTS `tbl_tv`;
CREATE TABLE IF NOT EXISTS `tbl_tv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(125) NOT NULL,
  `poster` varchar(75) NOT NULL,
  `year` varchar(25) NOT NULL,
  `storyline` text NOT NULL,
  `trailer` varchar(75) NOT NULL,
  `runtime` varchar(50) NOT NULL,
  `episodes` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv`
--

INSERT INTO `tbl_tv` (`id`, `title`, `poster`, `year`, `storyline`, `trailer`, `runtime`, `episodes`) VALUES
(1, 'Seinfled', 'seinfeld.jpg', '1989–1998', 'The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends.', 'seinfeld.mp4', '22min', 137),
(3, 'Star Trek', 'star_trek.jpg', '1966-1969', 'In the 23rd Century, Captain James T. Kirk and the crew of the U.S.S. Enterprise explore the galaxy and defend the United Federation of Planets.', 'star_trek.mp4', '50min', 80),
(4, 'Charlie\'s Angels', 'charlies_angels.jpg', '1976-1981', 'A wealthy mystery man named Charlie runs a detective agency via a speakerphone and his personal assistant, John Bosley. His detectives are three beautiful women, who end up in a variety of difficult situations.', 'charlies_angels.mp4', '1h', 110),
(5, 'Bewitched', 'bewitched.jpg', '1964-1972', 'A witch married to an ordinary man cannot resist using her magic powers to solve the problems her family faces.', 'bewitched.mp4', '25min', 254),
(6, 'The Honeymooners', 'honeymooners.jpg', '1955-1956', 'A bus driver and his sewer worker friend struggle to strike it rich while their wives look on with weary patience.', 'honeymooners.mp4', '30min', 39);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `avatar` varchar(250) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `name`, `avatar`, `age`) VALUES
(1, 'Mari', 'mari.jpg', 34),
(2, 'Fares', 'fares.jpg', 6);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
