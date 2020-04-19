-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 19, 2020 at 01:28 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku_flashback`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_arating`
--

CREATE TABLE `tbl_arating` (
  `arating_id` int(11) NOT NULL,
  `name` varchar(125) NOT NULL,
  `description` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_arating`
--

INSERT INTO `tbl_arating` (`arating_id`, `name`, `description`) VALUES
(1, 'G', 'G – General Audiences\r\nAll ages admitted. Nothing that would offend parents for viewing by children. '),
(2, 'PG', 'PG – Parental Guidance Suggested\r\nSome material may not be suitable for children. '),
(3, 'PG-13', 'PG-13 – Parents Strongly Cautioned\r\nSome material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'),
(4, 'R', 'R – Restricted\r\nUnder 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them. '),
(5, 'NC-17', 'NC-17 – Adults Only\r\nNo One 17 and Under Admitted. Clearly adult. Children are not admitted. ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_audio_genre`
--

CREATE TABLE `tbl_audio_genre` (
  `genre_id` int(11) NOT NULL,
  `genre_name` varchar(75) NOT NULL,
  `genre_icon` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_audio_genre`
--

INSERT INTO `tbl_audio_genre` (`genre_id`, `genre_name`, `genre_icon`) VALUES
(1, 'Rock', 'genre_music_rock.svg'),
(2, 'Pop', 'genre_music_pop.svg'),
(5, 'Classical', 'genre_music_classical.svg'),
(9, 'Jazz', 'genre_music.svg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

CREATE TABLE `tbl_comments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `time` varchar(25) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_comments`
--

INSERT INTO `tbl_comments` (`id`, `user_id`, `comment`, `time`) VALUES
(1, 1, 'I loved it.', '2:13 pm'),
(2, 2, 'Great movie', '5:35 pm'),
(3, 1, 'Amazing!', '23:49:45'),
(10, 1, 'Wowwww', '01:35 am'),
(8, 1, 'Unexpected ending!', '01:04 am'),
(9, 1, 'Wowww!!!', '01:33 am');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_link_media_genre`
--

CREATE TABLE `tbl_link_media_genre` (
  `link_media_genre_id` int(11) NOT NULL,
  `media_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_link_media_genre`
--

INSERT INTO `tbl_link_media_genre` (`link_media_genre_id`, `media_id`, `genre_id`) VALUES
(1, 1, 7),
(2, 1, 4),
(4, 2, 1),
(5, 2, 6),
(6, 4, 5),
(7, 5, 7),
(8, 5, 2),
(9, 6, 2),
(10, 7, 4),
(11, 8, 1),
(12, 8, 8),
(13, 9, 1),
(14, 9, 6),
(15, 10, 7),
(16, 10, 4),
(17, 10, 8),
(18, 11, 4);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_link_music_genre`
--

CREATE TABLE `tbl_link_music_genre` (
  `music_genre_id` int(11) NOT NULL,
  `music_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_link_music_genre`
--

INSERT INTO `tbl_link_music_genre` (`music_genre_id`, `music_id`, `genre_id`) VALUES
(1, 1, 2),
(2, 2, 2),
(4, 3, 1),
(5, 4, 1),
(6, 5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media`
--

CREATE TABLE `tbl_media` (
  `media_id` int(11) NOT NULL,
  `title` varchar(125) NOT NULL,
  `poster` varchar(75) NOT NULL,
  `year` varchar(10) NOT NULL,
  `storyline` text NOT NULL,
  `trailer` varchar(75) NOT NULL,
  `rating` float NOT NULL,
  `video` tinyint(1) NOT NULL DEFAULT '1',
  `type` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_media`
--

INSERT INTO `tbl_media` (`media_id`, `title`, `poster`, `year`, `storyline`, `trailer`, `rating`, `video`, `type`) VALUES
(1, 'Home Alone', 'home_alone.jpg', '1990', 'An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.', 'home_alone.mp4', 4.3, 1, 'film'),
(2, 'Die Hard', 'die_hard.jpg', '1988', 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.', 'die_hard.mp4', 3.2, 1, 'film'),
(4, 'The Exorcist', 'exorcist.jpg', '1973', 'When a 12 year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.', 'exorcist.mp4', 3.1, 1, 'film'),
(5, 'Sound of Music', 'sound_of_music.jpg', '1965', 'A woman leaves an Austrian convent to become a governess to the children of a Naval officer widower.', 'sound_of_music.mp4', 4.1, 1, 'film'),
(6, 'Twelve Angry Men', 'twelve_angry_men.jpg', '1957', 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.', 'twelve_angry_men.mp4', 4.7, 1, 'film'),
(7, 'Seinfeld', 'seinfeld.jpg', '1989–1998', 'The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends.', 'seinfeld.mp4', 4.8, 1, 'tv'),
(8, 'Star Trek', 'star_trek.jpg', '1966-1969', 'In the 23rd Century, Captain James T. Kirk and the crew of the U.S.S. Enterprise explore the galaxy and defend the United Federation of Planets.', 'star_trek.mp4', 3.7, 1, 'tv'),
(9, 'Charlie\'s Angels', 'charlies_angels.jpg', '1976-1981', 'A wealthy mystery man named Charlie runs a detective agency via a speakerphone and his personal assistant, John Bosley. His detectives are three beautiful women, who end up in a variety of difficult situations.', 'charlies_angels.mp4', 3.5, 1, 'tv'),
(10, 'Bewitched', 'bewitched.jpg', '1964-1972', 'A witch married to an ordinary man cannot resist using her magic powers to solve the problems her family faces.', 'bewitched.mp4', 3.6, 1, 'tv'),
(11, 'The Honeymooners', 'honeymooners.jpg', '1955-1956', 'A bus driver and his sewer worker friend struggle to strike it rich while their wives look on with weary patience.', 'honeymooners.mp4', 3.3, 1, 'tv');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_media_arating`
--

CREATE TABLE `tbl_media_arating` (
  `media_arating_id` int(11) NOT NULL,
  `media_id` int(11) NOT NULL,
  `arating_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_media_arating`
--

INSERT INTO `tbl_media_arating` (`media_arating_id`, `media_id`, `arating_id`) VALUES
(1, 1, 1),
(2, 2, 3),
(4, 4, 4),
(5, 5, 1),
(6, 6, 3),
(7, 7, 5),
(8, 8, 3),
(9, 9, 3),
(10, 10, 2),
(13, 11, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

CREATE TABLE `tbl_music` (
  `music_id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `poster` varchar(75) NOT NULL,
  `audiosrc` varchar(75) NOT NULL,
  `year` varchar(5) NOT NULL,
  `rating` float NOT NULL,
  `artist` varchar(250) NOT NULL,
  `audio` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`music_id`, `title`, `poster`, `audiosrc`, `year`, `rating`, `artist`, `audio`) VALUES
(1, 'Don\'t Speak', 'dont_speak.jpg', 'dont_speak.mp3', '1995', 4.7, 'No Doubt', 1),
(2, 'Billie Jean', 'billie_jean.jpg', 'billie_jean.mp3', '1982', 4.2, 'Michael Jackson', 1),
(3, 'Your Song', 'your_song.jpg', 'your_song.mp3', '1970', 3.4, 'Elton John', 1),
(4, 'The sound of Silence', 'sound_of_silence.jpg', 'sound_of_silence.mp3', '1964', 4, 'Simon & Garfunkel', 1),
(5, 'I Have A Dream', 'i_have_a_dream.jpg', 'i_have_a_dream.mp3', '1979', 3.9, 'Abba', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(20) NOT NULL,
  `avatar` varchar(250) DEFAULT 'avatar1.svg',
  `role` tinyint(1) NOT NULL DEFAULT '0',
  `permissions` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `username`, `password`, `avatar`, `role`, `permissions`) VALUES
(1, 'Mari', '111', 'avatar1.svg', 1, 5),
(2, 'Kayla', '111', 'avatar2.svg', 1, 4),
(14, 'Fares', '111', 'avatar2.svg', 0, 2),
(15, 'Farah', '111', 'avatar4.svg', 0, 3),
(17, 'Amir', '111', 'avatar3.svg', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_video_genre`
--

CREATE TABLE `tbl_video_genre` (
  `genre_id` int(11) NOT NULL,
  `genre_name` varchar(75) NOT NULL,
  `genre_icon` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_video_genre`
--

INSERT INTO `tbl_video_genre` (`genre_id`, `genre_name`, `genre_icon`) VALUES
(1, 'Action', 'genre_action.svg'),
(2, 'Drama', 'genre_drama.svg'),
(4, 'Comedy', 'genre_comedy.svg'),
(5, 'Horror', 'genre_horror.svg'),
(6, 'Thriller', 'genre_thriller.svg'),
(7, 'Family', 'genre_family.svg'),
(8, 'Sci-fi/ Fantasy', 'genre_sci_fi.svg'),
(9, 'Romantic', 'genre_romantic.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_arating`
--
ALTER TABLE `tbl_arating`
  ADD PRIMARY KEY (`arating_id`);

--
-- Indexes for table `tbl_audio_genre`
--
ALTER TABLE `tbl_audio_genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- Indexes for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_link_media_genre`
--
ALTER TABLE `tbl_link_media_genre`
  ADD PRIMARY KEY (`link_media_genre_id`);

--
-- Indexes for table `tbl_link_music_genre`
--
ALTER TABLE `tbl_link_music_genre`
  ADD PRIMARY KEY (`music_genre_id`);

--
-- Indexes for table `tbl_media`
--
ALTER TABLE `tbl_media`
  ADD PRIMARY KEY (`media_id`);

--
-- Indexes for table `tbl_media_arating`
--
ALTER TABLE `tbl_media_arating`
  ADD PRIMARY KEY (`media_arating_id`);

--
-- Indexes for table `tbl_music`
--
ALTER TABLE `tbl_music`
  ADD PRIMARY KEY (`music_id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tbl_video_genre`
--
ALTER TABLE `tbl_video_genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_arating`
--
ALTER TABLE `tbl_arating`
  MODIFY `arating_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_audio_genre`
--
ALTER TABLE `tbl_audio_genre`
  MODIFY `genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_link_media_genre`
--
ALTER TABLE `tbl_link_media_genre`
  MODIFY `link_media_genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbl_link_music_genre`
--
ALTER TABLE `tbl_link_music_genre`
  MODIFY `music_genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_media`
--
ALTER TABLE `tbl_media`
  MODIFY `media_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_media_arating`
--
ALTER TABLE `tbl_media_arating`
  MODIFY `media_arating_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbl_music`
--
ALTER TABLE `tbl_music`
  MODIFY `music_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tbl_video_genre`
--
ALTER TABLE `tbl_video_genre`
  MODIFY `genre_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
