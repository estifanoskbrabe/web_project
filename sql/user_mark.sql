

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `user_mark` (
  `id` int(11) NOT NULL,
  `u_rollno` int(2) NOT NULL,
  `u_class` int(2) NOT NULL,
  `u_amharic` int(2) NOT NULL,
  `u_english1` int(2) NOT NULL,
  `u_math1` int(2) NOT NULL,
  `u_physics1` int(2) NOT NULL,
  `u_chemestry1` int(2) NOT NULL,
  `u_amharic2` int(2) NOT NULL,
  `u_english2` int(2) NOT NULL,
  `u_math2` int(2) NOT NULL,
  `u_physics2` int(2) NOT NULL,
  `u_chemestry` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


ALTER TABLE `user_mark`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `user_mark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
