

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `student_data` (
  `id` int(11) NOT NULL,
  `u_name` text COLLATE utf8_unicode_ci NOT NULL,
  `u_class` text COLLATE utf8_unicode_ci NOT NULL,
  `u_rollno` text COLLATE utf8_unicode_ci NOT NULL,
  `u_father` text COLLATE utf8_unicode_ci NOT NULL,
  `u_mother` text COLLATE utf8_unicode_ci NOT NULL,
  `u_mobile` text COLLATE utf8_unicode_ci NOT NULL,
  `u_city` text COLLATE utf8_unicode_ci NOT NULL,
  `u_image` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


ALTER TABLE `student_data`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `student_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

