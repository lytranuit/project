/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.1.9-MariaDB : Database - project
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`project` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `project`;

/*Table structure for table `groups` */

DROP TABLE IF EXISTS `groups`;

CREATE TABLE `groups` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `groups` */

insert  into `groups`(`id`,`name`,`description`) values (1,'admin','Administrator'),(2,'members','General User');

/*Table structure for table `login_attempts` */

DROP TABLE IF EXISTS `login_attempts`;

CREATE TABLE `login_attempts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(15) NOT NULL,
  `login` varchar(100) NOT NULL,
  `time` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `login_attempts` */

/*Table structure for table `tbl_hinhanh` */

DROP TABLE IF EXISTS `tbl_hinhanh`;

CREATE TABLE `tbl_hinhanh` (
  `id_hinhanh` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ten_hinhanh` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `src` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `id_user` int(10) unsigned NOT NULL,
  `deleted` tinyint(9) unsigned NOT NULL DEFAULT '0',
  `real_hinhanh` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id_hinhanh`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tbl_hinhanh` */

/*Table structure for table `tbl_hinhanh_tin` */

DROP TABLE IF EXISTS `tbl_hinhanh_tin`;

CREATE TABLE `tbl_hinhanh_tin` (
  `id_hinhand_tin` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_hinhanh` int(10) unsigned NOT NULL DEFAULT '0',
  `id_tin` int(10) unsigned NOT NULL DEFAULT '0',
  `deleted` tinyint(9) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_hinhand_tin`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tbl_hinhanh_tin` */

/*Table structure for table `tbl_huong` */

DROP TABLE IF EXISTS `tbl_huong`;

CREATE TABLE `tbl_huong` (
  `id_huong` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ten_huong` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `order` int(10) unsigned NOT NULL DEFAULT '0',
  `deleted` tinyint(9) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_huong`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tbl_huong` */

insert  into `tbl_huong`(`id_huong`,`ten_huong`,`order`,`deleted`) values (1,'Đông',1,0),(2,'Tây',2,0),(3,'Nam',3,0),(4,'Bắc',4,0),(5,'Đông-Nam',5,0),(6,'Đông-Bắc',6,0),(7,'Tây-Nam',7,0),(8,'Tây-Bắc',8,0);

/*Table structure for table `tbl_khuvuc` */

DROP TABLE IF EXISTS `tbl_khuvuc`;

CREATE TABLE `tbl_khuvuc` (
  `id_khuvuc` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ten_khuvuc` varchar(256) DEFAULT NULL,
  `parent` int(10) unsigned NOT NULL DEFAULT '0',
  `deleted` tinyint(9) unsigned NOT NULL DEFAULT '0',
  `order` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id_khuvuc`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_khuvuc` */

insert  into `tbl_khuvuc`(`id_khuvuc`,`ten_khuvuc`,`parent`,`deleted`,`order`) values (1,'Thành phố Hồ Chí Minh',0,0,1),(2,'Đồng Nai',0,0,2),(3,'Bình Dương',0,0,3),(4,'Quận 1',1,0,1),(5,'Quận 2',1,0,2),(6,'Quận 3',1,0,3),(7,'Quận 4',1,0,4),(8,'Quận 5',1,0,5),(9,'Quận 6',1,0,6),(10,'Quận 7',1,0,7),(11,'Quận 8',1,0,8),(12,'Quận 9',1,0,9),(13,'Qu?n 10',1,0,10),(14,'Quận 11',1,0,11),(15,'Quận 12',1,0,12),(16,'Quận Thủ Đức',1,0,13),(17,'Quận Gò Vấp',1,0,14),(18,'Quận Bình Thạnh',1,0,15),(19,'Tp Biên Hòa',2,0,1),(20,'Long Thành',2,0,2),(21,'Long Khánh',2,0,3),(22,'Thị trấn dĩ an',3,0,1);

/*Table structure for table `tbl_phaply` */

DROP TABLE IF EXISTS `tbl_phaply`;

CREATE TABLE `tbl_phaply` (
  `id_phaply` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ten_phaply` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `order` int(10) unsigned NOT NULL DEFAULT '0',
  `deleted` tinyint(9) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_phaply`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tbl_phaply` */

insert  into `tbl_phaply`(`id_phaply`,`ten_phaply`,`order`,`deleted`) values (1,'Sổ đỏ / Sổ hồng',1,0),(2,'Giấy tờ hợp pháp',2,0),(3,'Giấy phép Xây dựng',3,0),(4,'Giấy phép Kinh Doanh',4,0);

/*Table structure for table `tbl_tin` */

DROP TABLE IF EXISTS `tbl_tin`;

CREATE TABLE `tbl_tin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `alias` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `content` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `id_user` int(10) unsigned DEFAULT NULL,
  `id_khuvuc` int(10) unsigned DEFAULT NULL,
  `diachi` varchar(256) CHARACTER SET utf8 DEFAULT NULL,
  `dientich` int(10) unsigned DEFAULT NULL,
  `gia` int(10) unsigned DEFAULT NULL,
  `chieudai` int(10) unsigned DEFAULT NULL,
  `chieurong` int(10) unsigned DEFAULT NULL,
  `id_phaply` int(10) unsigned DEFAULT NULL,
  `id_huong` int(10) unsigned DEFAULT NULL,
  `deleted` tinyint(9) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tbl_tin` */

insert  into `tbl_tin`(`id`,`title`,`alias`,`content`,`date`,`id_user`,`id_khuvuc`,`diachi`,`dientich`,`gia`,`chieudai`,`chieurong`,`id_phaply`,`id_huong`,`deleted`) values (5,'GIÁ ĐẤT NGÂN HÀNG THANH LÝ T. CƯ 100% Đ/DIỆN KCN, CHỢ 100TR/NỀN HỖ TRỢ VAY 80% GÓP 15 NĂM','gia-dat-ngan-hang-thanh-ly-t-cu-100-ddien-kcn-cho-100trnen-ho-tro-vay-80-gop-15-nam','Hiện tại ngân hàng Bình Dương đang cần \r\nthanh lý để thu hồi nợ xấu Ngân Hàng Thanh\r\nLý Đất Bình Dương : \r\nĐất ở đô thị, thổ cư 100%, giấy tờ minh bạch.\r\nMua bán qua Phòng Công Chứng tỉnh Bình Dương\r\nDanh sách đất nền thổ cư ngân hàng thanh lý:\r\nTRẢ GÓP 15','2016-06-27 20:05:11',2,12,'Đường Đại Lộ Bình Dương, Phường Chánh Nghĩa, Thị xã Thủ Dầu Một, Bình Dương',NULL,2000,12,11,2,6,0),(6,'GIÁ ĐẤT NGÂN HÀNG THANH LÝ T. CƯ 100% Đ/DIỆN KCN, CHỢ 100TR/NỀN HỖ TRỢ VAY 80% GÓP 15 NĂM','gia-dat-ngan-hang-thanh-ly-t-cu-100-ddien-kcn-cho-100trnen-ho-tro-vay-80-gop-15-nam','Hiện tại ngân hàng Bình Dương đang cần \r\nthanh lý để thu hồi nợ xấu Ngân Hàng Thanh\r\nLý Đất Bình Dương : \r\nĐất ở đô thị, thổ cư 100%, giấy tờ minh bạch.\r\nMua bán qua Phòng Công Chứng tỉnh Bình Dương\r\nDanh sách đất nền thổ cư ngân hàng thanh lý:\r\nTRẢ GÓP 15','2016-06-27 20:08:16',2,12,'Đường Đại Lộ Bình Dương, Phường Chánh Nghĩa, Thị xã Thủ Dầu Một, Bình Dương',NULL,2000,12,11,2,6,0),(7,'GIÁ ĐẤT NGÂN HÀNG THANH LÝ T. CƯ 100% Đ/DIỆN KCN, CHỢ 100TR/NỀN HỖ TRỢ VAY 80% GÓP 15 NĂM','gia-dat-ngan-hang-thanh-ly-t-cu-100-ddien-kcn-cho-100trnen-ho-tro-vay-80-gop-15-nam','Hiện tại ngân hàng Bình Dương đang cần \r\nthanh lý để thu hồi nợ xấu Ngân Hàng Thanh\r\nLý Đất Bình Dương : \r\nĐất ở đô thị, thổ cư 100%, giấy tờ minh bạch.\r\nMua bán qua Phòng Công Chứng tỉnh Bình Dương\r\nDanh sách đất nền thổ cư ngân hàng thanh lý:\r\nTRẢ GÓP 15','2016-06-27 20:12:14',2,12,' Đường Đại Lộ Bình Dương, Phường Chánh Nghĩa, Thị xã Thủ Dầu Một, Bình Dương',NULL,1200,12,10,1,2,0);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(45) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `activation_code` varchar(40) DEFAULT NULL,
  `forgotten_password_code` varchar(40) DEFAULT NULL,
  `forgotten_password_time` int(11) unsigned DEFAULT NULL,
  `remember_code` varchar(40) DEFAULT NULL,
  `created_on` int(11) unsigned NOT NULL,
  `last_login` int(11) unsigned DEFAULT NULL,
  `active` tinyint(1) unsigned DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`ip_address`,`username`,`password`,`salt`,`email`,`activation_code`,`forgotten_password_code`,`forgotten_password_time`,`remember_code`,`created_on`,`last_login`,`active`,`first_name`,`last_name`,`company`,`phone`) values (1,'127.0.0.1','administrator','$2a$07$SeBknntpZror9uyftVopmu61qg0ms8Qv1yV6FG.kQOSM.9QhmTo36','','admin@admin.com','',NULL,NULL,NULL,1268889823,1466850632,1,'Admin','istrator','ADMIN','0'),(2,'::1',NULL,'$2y$08$5XPyaVY3i9Gov7RUgp9cAOMMPboFqOdIJJckVapnOTEHEnsmbBgRq',NULL,'lytranuit@gmail.com',NULL,NULL,NULL,'dLT/ANOhnZy7OYeX8Nj0yu',1466850699,1467040242,1,'đào lý trân','Bình Dương','zz','0978019668');

/*Table structure for table `users_groups` */

DROP TABLE IF EXISTS `users_groups`;

CREATE TABLE `users_groups` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `group_id` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_users_groups` (`user_id`,`group_id`),
  KEY `fk_users_groups_users1_idx` (`user_id`),
  KEY `fk_users_groups_groups1_idx` (`group_id`),
  CONSTRAINT `fk_users_groups_groups1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_groups_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `users_groups` */

insert  into `users_groups`(`id`,`user_id`,`group_id`) values (1,1,1),(2,1,2),(4,2,1),(5,2,2);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
