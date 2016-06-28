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
  `deleted` tinyint(9) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `groups` */

insert  into `groups`(`id`,`name`,`description`,`deleted`) values (1,'admin','Administrator',0),(2,'members','General User',0);

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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tbl_hinhanh` */

insert  into `tbl_hinhanh`(`id_hinhanh`,`ten_hinhanh`,`date`,`src`,`id_user`,`deleted`,`real_hinhanh`) values (13,'1467133638_0_20141203_102223-200x200.jpg','2016-06-28 19:07:18','public/uploads/2016-06-28/1467133638_0_20141203_102223-200x200.jpg',1,0,'20141203_102223-200x200.jpg'),(14,'1467133638_0_11177154-a-tb-1-bds_1304751077-269x194.jpg','2016-06-28 19:07:18','public/uploads/2016-06-28/1467133638_0_11177154-a-tb-1-bds_1304751077-269x194.jpg',1,0,'11177154-a-tb-1-bds_1304751077-269x194.jpg'),(15,'1467135973_0_20141203_102251-300x225.jpg','2016-06-28 19:46:13','public/uploads/2016-06-28/1467135973_0_20141203_102251-300x225.jpg',1,0,'20141203_102251-300x225.jpg'),(16,'1467135974_0_IMG_0082.jpg','2016-06-28 19:46:15','public/uploads/2016-06-28/1467135974_0_IMG_0082.jpg',1,0,'IMG_0082.jpg'),(17,'1467136666_0_image-150x150.jpeg','2016-06-28 19:57:46','public/uploads/2016-06-28/1467136666_0_image-150x150.jpeg',1,0,'image-150x150.jpeg'),(18,'1467136667_0_logo.jpg','2016-06-28 19:57:47','public/uploads/2016-06-28/1467136667_0_logo.jpg',1,0,'logo.jpg'),(19,'1467136754_0_11177154-a-tb-1-bds_1304751077-260x149.jpg','2016-06-28 19:59:14','public/uploads/2016-06-28/1467136754_0_11177154-a-tb-1-bds_1304751077-260x149.jpg',1,0,'11177154-a-tb-1-bds_1304751077-260x149.jpg'),(20,'1467136754_0_20141203_102223-269x194.jpg','2016-06-28 19:59:14','public/uploads/2016-06-28/1467136754_0_20141203_102223-269x194.jpg',1,0,'20141203_102223-269x194.jpg');

/*Table structure for table `tbl_hinhanh_tin` */

DROP TABLE IF EXISTS `tbl_hinhanh_tin`;

CREATE TABLE `tbl_hinhanh_tin` (
  `id_hinhand_tin` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_hinhanh` int(10) unsigned NOT NULL DEFAULT '0',
  `id_tin` int(10) unsigned NOT NULL DEFAULT '0',
  `deleted` tinyint(9) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_hinhand_tin`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tbl_hinhanh_tin` */

insert  into `tbl_hinhanh_tin`(`id_hinhand_tin`,`id_hinhanh`,`id_tin`,`deleted`) values (7,13,8,0),(8,14,8,0),(9,15,9,0),(10,16,9,0),(11,17,10,0),(12,18,10,0),(13,19,11,0),(14,20,11,0);

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
  `id_tin` int(10) unsigned NOT NULL AUTO_INCREMENT,
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
  `active` tinyint(9) unsigned NOT NULL DEFAULT '0',
  `deleted` tinyint(9) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_tin`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tbl_tin` */

insert  into `tbl_tin`(`id_tin`,`title`,`alias`,`content`,`date`,`id_user`,`id_khuvuc`,`diachi`,`dientich`,`gia`,`chieudai`,`chieurong`,`id_phaply`,`id_huong`,`active`,`deleted`) values (8,'Cần Bán 2 Lô Đất 75m2 P,B,Tr,Tây Và P,B,Tr,Đông Q2','can-ban-2-lo-dat-75m2-pbtrtay-va-pbtrdong-q2','Vị trí lô đất số 1, hướng tây bắc phường bình trưng tây quận 2, diện tích đất 4,4mx14m lô góc 2 mặt tiền đường vào trải nhựa 5m,khu dân cư hiện hữu,gần chợ siêu thị trường học nhà thiếu nhi quận 2, bệnh viện quận 2, đất giấy tờ sổ đỏ hợp lệ bao sang tên, g','2016-06-28 19:07:28',1,5,'Lô Đất 75m2 P,B,Tr,Tây Và P,B,Tr,Đông Q2',120,2000,12,10,3,7,1,0),(9,'DO LÀM ĂN XA KHÔNG CÓ NGƯỞI QUẢN LÍ NÊN BÁN GẤP 24 PHÒNG TRỌ VÀ 600M2 ĐẤT GẦN TP.HCM','do-lam-an-xa-khong-co-nguoi-quan-li-nen-ban-gap-24-phong-tro-va-600m2-dat-gan-tphcm','Thông tin lô đất 0912.052.896 Gặp LUÂN \r\n\r\n  1. ĐẤT NỀN\r\n\r\n- 600m2 đất mặt tiền đường, gần chợ,gần trường học, nằm trong khu đô thị, thông dài    ra khu công nghiệp, gần QL 13. tiện ở, kinh doanh, xây trọ..\r\n\r\n - Diện Tích: 600m2 tách làm 4 lô (5x30) = 150','2016-06-28 19:46:28',1,12,'120/40 Đường Đại Lộ Bình Dương, Phường Phú Lợi, Thị xã Thủ Dầu Một, Bình Dương',1200,10000,12,100,1,2,1,0),(10,'Bán nhà Quận 10, MT Sư Vạn Hạnh, 12 x 25, 39.9 Tỷ','ban-nha-quan-10-mt-su-van-hanh-12-x-25-399-ty','Bán Nhà Mặt Tiền Đường Sư Vạn Hạnh, Phường 12, Quận 10. \r\n\r\nDT: 12m x 25m, xây 6 lầu thang máy, để sân trước 7m, sân sau 1m. Kết cấu: Hầm + 5 lầu, có thang máy. \r\n- Vị trí cực kỳ đắc địa, MT đường Sư Vạn Hạnh, P12, Q10 (từ 3/2 đến Tô Hiến Thành). Gần 3 trư','2016-06-28 19:57:57',1,13,'Sư Vạn Hạnh',150,39000,12,25,3,3,1,0),(11,'Bán Gấp 2 Dãy Nhà Trọ Tại Bình Chánh 18 Phòng, Diện Tích 260m2, SHR, Thu Nhập 19tr/Tháng','ban-gap-2-day-nha-tro-tai-binh-chanh-18-phong-dien-tich-260m2-shr-thu-nhap-19trthang','+Nằm ngay cụm KCN TÂN ĐÔ + HẠNH PHÚC. \r\n\r\n+Diện tích 260m2 ngang 10m dài 26m \r\n\r\n+2 dãy là 17 phòng và 1 ki ốt\r\n\r\n+Diễn tích mỗi phòng trọ 4x3=12m2 và có gác đúc, riêng ki ốt là 4x4=16m2 \r\n\r\n+Nhà trọ đã có sổ hồng \r\n\r\n+Nhà trọ cho thuê 3 năm rồi, công nhân','2016-06-28 19:59:28',1,12,'Bình Chánh',260,1000,56,12,4,6,1,0);

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
  `deleted` tinyint(9) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`id`,`ip_address`,`username`,`password`,`salt`,`email`,`activation_code`,`forgotten_password_code`,`forgotten_password_time`,`remember_code`,`created_on`,`last_login`,`active`,`first_name`,`last_name`,`company`,`phone`,`deleted`) values (1,'127.0.0.1','administrator','$2a$07$SeBknntpZror9uyftVopmu61qg0ms8Qv1yV6FG.kQOSM.9QhmTo36','','admin@admin.com','',NULL,NULL,NULL,1268889823,1467119644,1,'Admin','istrator','ADMIN','0',0);

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

insert  into `users_groups`(`id`,`user_id`,`group_id`) values (1,1,1),(2,1,2);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
