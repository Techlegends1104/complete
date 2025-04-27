-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2025 at 03:18 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_code` int(20) NOT NULL,
  `book_name` varchar(100) DEFAULT NULL,
  `author_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_code`, `book_name`, `author_name`) VALUES
(1, 'Introduction to Algorithms', 'Thomas H. Cormen'),
(2, 'Operating System Concepts', 'Abraham Silberschatz'),
(3, 'Database System Concepts', 'Henry F. Korth'),
(4, 'Computer Networking: Principles', 'Andrew S. Tanenbaum'),
(5, 'Artificial Intelligence: A Modern Approach', 'Stuart Russell'),
(6, 'Java Programming', 'Herbert Schildt'),
(7, 'Python Crash Course', 'Eric Matthes'),
(8, 'Head First Java', 'Kathy Sierra'),
(9, 'Data Structures and Algorithms in Java', 'Robert Lafore'),
(10, 'Clean Code', 'Robert C. Martin'),
(11, 'Design Patterns', 'Erich Gamma'),
(12, 'Effective Java', 'Joshua Bloch'),
(13, 'HTML and CSS: Design and Build Websites', 'Jon Duckett'),
(14, 'JavaScript: The Good Parts', 'Douglas Crockford'),
(15, 'React Up & Running', 'Stoyan Stefanov'),
(16, 'Node.js Design Patterns', 'Mario Casciaro'),
(17, 'Linux Administration Handbook', 'Evi Nemeth'),
(18, 'The Pragmatic Programmer', 'Andrew Hunt'),
(19, 'Cybersecurity Essentials', 'Charles J. Brooks'),
(20, 'Blockchain Basics', 'Daniel Drescher'),
(21, 'Computer Graphics with OpenGL', 'Donald Hearn'),
(22, 'Deep Learning with Python', 'François Chollet'),
(23, 'Introduction to Machine Learning', 'Alpaydin'),
(24, 'Cryptography and Network Security', 'William Stallings'),
(25, 'Software Engineering', 'Ian Sommerville'),
(26, 'PHP & MySQL Web Development', 'Luke Welling'),
(27, 'Programming Rust', 'Jim Blandy'),
(28, 'Swift Programming: The Big Nerd Ranch Guide', 'Matthew Mathias'),
(29, 'React Native in Action', 'Nader Dabit'),
(30, 'Flutter for Beginners', 'Marco L. Napoli'),
(31, 'Android Programming', 'Bill Phillips'),
(32, 'Full Stack JavaScript Development', 'Eric Elliott'),
(33, 'Introduction to Cloud Computing', 'Rajkumar Buyya'),
(34, 'Docker in Action', 'Jeff Nickoloff'),
(35, 'Kubernetes Up & Running', 'Kelsey Hightower'),
(36, 'Hands-on AWS', 'Frank Kane'),
(37, 'Python Machine Learning', 'Sebastian Raschka'),
(38, 'TensorFlow for Deep Learning', 'Tom Hope'),
(39, 'Hadoop: The Definitive Guide', 'Tom White'),
(40, 'Big Data Fundamentals', 'Thomas Erl'),
(41, 'Agile Software Development', 'Robert C. Martin'),
(42, 'Penetration Testing', 'Georgia Weidman'),
(43, 'Network Security Essentials', 'William Stallings'),
(44, 'CompTIA Security+', 'Mike Meyers'),
(45, 'CCNA Guide to Networking', 'Richard Deal'),
(46, 'Wireless Communications', 'Theodore S. Rappaport'),
(47, 'Computer Organization', 'William Stalling'),
(48, 'Assembly Language Step-By-Step', 'Jeff Duntemann'),
(49, 'Quantum Computing for Everyone', 'Chris Bernhardt'),
(50, 'The Art of Computer Programming', 'Donald Knuth');

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `name` varchar(200) NOT NULL,
  `course` varchar(200) NOT NULL,
  `session` varchar(200) NOT NULL,
  `semester` varchar(200) NOT NULL,
  `reg_no` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` bigint(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_code`);

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`reg_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `book_code` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
