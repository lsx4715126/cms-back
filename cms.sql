/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : cms

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-03-31 16:36:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `reimbursement_pay`
-- ----------------------------
DROP TABLE IF EXISTS `reimbursement_pay`;
CREATE TABLE `reimbursement_pay` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `gender` int(10) DEFAULT '1',
  `email` varchar(64) DEFAULT NULL,
  `status` int(10) DEFAULT '1',
  `employee_no` int(10) DEFAULT '111',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reimbursement_pay
-- ----------------------------
INSERT INTO `reimbursement_pay` VALUES ('5', 'a5', 'aa5', '张555', '1', '5@qq.com', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('6', 'a6', 'aa6', '张6', '1', '6@qq.com', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('7', 'a7', 'aa7', '张7', '1', '7@qq.com', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('8', 'a8', 'aa8', '张8', '1', '8@qq.com', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('9', 'a9', 'aa9', '张9', '1', '9@qq.com', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('16', 'a16', 'aa16', 'a1', '0', 'b1', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('17', 'a17', 'aa17', 'a3', '1', 'b3', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('18', 'a555', '2', 'a4', '1', 'a4@qq.com', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('20', 'aaa', 'aaa', 'aaa', '1', '111@qq.com', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('26', 'aaa', 'bbb', 'bbb', '1', '111@qq.com', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('27', 'aaa', 'bbb', 'ccc', '1', '111@qq.com', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('28', 'aaa', 'bbb', 'ddd', '1', '111@qq.com', '1', '111');
INSERT INTO `reimbursement_pay` VALUES ('29', 'abc', '123', 'def', '1', 'eee@qq.com', '1', '789');

-- ----------------------------
-- Table structure for `resource`
-- ----------------------------
DROP TABLE IF EXISTS `resource`;
CREATE TABLE `resource` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `key` varchar(64) DEFAULT NULL,
  `parent_id` int(10) NOT NULL DEFAULT '0',
  `icon` varchar(64) DEFAULT NULL,
  `type` int(10) DEFAULT '1' COMMENT '1为导航。2为按钮。',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of resource
-- ----------------------------
INSERT INTO `resource` VALUES ('1', '权限管理', '/admin/permission', '0', 'lock', '1');
INSERT INTO `resource` VALUES ('2', '用户管理', '/admin/user', '1', 'user', '1');
INSERT INTO `resource` VALUES ('3', '资源管理', '/admin/resource', '1', 'wallet', '1');
INSERT INTO `resource` VALUES ('4', '角色管理', '/admin/role', '1', 'solution', '1');
INSERT INTO `resource` VALUES ('5', '新增角色', '/admin/role/add', '4', 'gold', '2');
INSERT INTO `resource` VALUES ('6', '编辑角色', '/admin/role/edit', '4', 'gold', '2');
INSERT INTO `resource` VALUES ('7', '删除角色', '/admin/role/del', '4', 'gold', '2');
INSERT INTO `resource` VALUES ('8', '新增用户', '/admin/user/add', '2', 'user', '2');
INSERT INTO `resource` VALUES ('9', '编辑用户', '/admin/user/edit', '2', 'user', '2');
INSERT INTO `resource` VALUES ('10', '删除用户', '/admin/user/del', '2', 'user', '2');
INSERT INTO `resource` VALUES ('11', '分配权限', '/admin/distribution/power', '3', 'gold', '2');
INSERT INTO `resource` VALUES ('12', '分配用户', '/admin/distribution/user', '3', 'gold', '2');
INSERT INTO `resource` VALUES ('13', '其他菜单', '/admin/outher', '0', 'lock', '1');
INSERT INTO `resource` VALUES ('14', '其他子菜单', '/admin/outher/menu01', '13', 'lock', '1');

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `status` int(10) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '超级管理员', '1');
INSERT INTO `role` VALUES ('2', '管理员', '1');
INSERT INTO `role` VALUES ('3', '普通用户', '1');
INSERT INTO `role` VALUES ('4', '游客', '1');
INSERT INTO `role` VALUES ('5', '普通会员1', '1');
INSERT INTO `role` VALUES ('6', '游客222', '0');

-- ----------------------------
-- Table structure for `role_resource`
-- ----------------------------
DROP TABLE IF EXISTS `role_resource`;
CREATE TABLE `role_resource` (
  `role_id` int(10) NOT NULL,
  `resource_id` int(10) NOT NULL,
  PRIMARY KEY (`role_id`,`resource_id`),
  KEY `resource_id` (`resource_id`),
  CONSTRAINT `resource_id` FOREIGN KEY (`resource_id`) REFERENCES `resource` (`id`),
  CONSTRAINT `role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_resource
-- ----------------------------
INSERT INTO `role_resource` VALUES ('1', '1');
INSERT INTO `role_resource` VALUES ('1', '2');
INSERT INTO `role_resource` VALUES ('1', '3');
INSERT INTO `role_resource` VALUES ('1', '4');
INSERT INTO `role_resource` VALUES ('1', '5');
INSERT INTO `role_resource` VALUES ('1', '6');
INSERT INTO `role_resource` VALUES ('1', '7');
INSERT INTO `role_resource` VALUES ('1', '8');
INSERT INTO `role_resource` VALUES ('1', '9');
INSERT INTO `role_resource` VALUES ('1', '10');
INSERT INTO `role_resource` VALUES ('1', '11');
INSERT INTO `role_resource` VALUES ('1', '12');
INSERT INTO `role_resource` VALUES ('2', '1');
INSERT INTO `role_resource` VALUES ('2', '2');
INSERT INTO `role_resource` VALUES ('2', '4');
INSERT INTO `role_resource` VALUES ('2', '5');
INSERT INTO `role_resource` VALUES ('2', '8');
INSERT INTO `role_resource` VALUES ('2', '9');
INSERT INTO `role_resource` VALUES ('4', '3');
INSERT INTO `role_resource` VALUES ('5', '1');
INSERT INTO `role_resource` VALUES ('5', '4');
INSERT INTO `role_resource` VALUES ('5', '6');

-- ----------------------------
-- Table structure for `role_user`
-- ----------------------------
DROP TABLE IF EXISTS `role_user`;
CREATE TABLE `role_user` (
  `role_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  PRIMARY KEY (`role_id`,`user_id`),
  KEY `role_user_user_id` (`user_id`),
  CONSTRAINT `role_user_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  CONSTRAINT `role_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_user
-- ----------------------------
INSERT INTO `role_user` VALUES ('1', '5');
INSERT INTO `role_user` VALUES ('2', '6');
INSERT INTO `role_user` VALUES ('2', '9');
INSERT INTO `role_user` VALUES ('3', '9');
INSERT INTO `role_user` VALUES ('5', '9');

-- ----------------------------
-- Table structure for `tbl_employee`
-- ----------------------------
DROP TABLE IF EXISTS `tbl_employee`;
CREATE TABLE `tbl_employee` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `last_name` varchar(64) DEFAULT NULL,
  `gender` int(10) DEFAULT '1',
  `email` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_employee
-- ----------------------------
INSERT INTO `tbl_employee` VALUES ('5', 'zhangwu', '1', 'aaa@qq.com');
INSERT INTO `tbl_employee` VALUES ('6', '张6', '1', 'aaa@qq.com');
INSERT INTO `tbl_employee` VALUES ('7', '张7', '1', 'aaa@qq.com');
INSERT INTO `tbl_employee` VALUES ('8', '张8', '1', 'bbb@qq.com');
INSERT INTO `tbl_employee` VALUES ('9', '张9', '1', 'bbb@qq.com');
INSERT INTO `tbl_employee` VALUES ('16', 'a1', '0', 'bbb@qq.com');
INSERT INTO `tbl_employee` VALUES ('17', 'a3', '1', 'bbb@qq.com');
INSERT INTO `tbl_employee` VALUES ('18', 'a4', '1', 'bbb@qq.com');
INSERT INTO `tbl_employee` VALUES ('20', 'aaa', '1', null);
INSERT INTO `tbl_employee` VALUES ('26', 'bbb', '1', null);
INSERT INTO `tbl_employee` VALUES ('27', 'ccc', '1', null);
INSERT INTO `tbl_employee` VALUES ('28', 'ddd', '1', null);
INSERT INTO `tbl_employee` VALUES ('29', 'eeeeeeeee', '1', null);
INSERT INTO `tbl_employee` VALUES ('30', '张三111', '1', null);
INSERT INTO `tbl_employee` VALUES ('31', 'zhangsan111', '1', null);
INSERT INTO `tbl_employee` VALUES ('33', 'tom', '1', null);
INSERT INTO `tbl_employee` VALUES ('34', 'tom', '1', null);
INSERT INTO `tbl_employee` VALUES ('35', 'tom', '1', null);

-- ----------------------------
-- Table structure for `temporary_pay`
-- ----------------------------
DROP TABLE IF EXISTS `temporary_pay`;
CREATE TABLE `temporary_pay` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `gender` int(10) DEFAULT '1',
  `email` varchar(64) DEFAULT NULL,
  `status` int(10) DEFAULT '1',
  `employee_no` int(10) DEFAULT '111',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of temporary_pay
-- ----------------------------
INSERT INTO `temporary_pay` VALUES ('5', 'a5', 'aa5', '张555', '1', '5@qq.com', '1', '111');
INSERT INTO `temporary_pay` VALUES ('6', 'a6', 'aa6', '张6', '1', '6@qq.com', '1', '111');
INSERT INTO `temporary_pay` VALUES ('7', 'a7', 'aa7', '张7', '1', '7@qq.com', '1', '111');
INSERT INTO `temporary_pay` VALUES ('8', 'a8', 'aa8', '张8', '1', '8@qq.com', '1', '111');
INSERT INTO `temporary_pay` VALUES ('9', 'a9', 'aa9', '张9', '1', '9@qq.com', '1', '111');
INSERT INTO `temporary_pay` VALUES ('16', 'a16', 'aa16', 'a1', '0', 'b1', '1', '111');
INSERT INTO `temporary_pay` VALUES ('17', 'a17', 'aa17', 'a3', '1', 'b3', '1', '111');
INSERT INTO `temporary_pay` VALUES ('18', 'a555', '2', 'a4', '1', 'a4@qq.com', '1', '111');
INSERT INTO `temporary_pay` VALUES ('20', 'aaa', 'aaa', 'aaa', '1', '111@qq.com', '1', '111');
INSERT INTO `temporary_pay` VALUES ('26', 'aaa', 'bbb', 'bbb', '1', '111@qq.com', '1', '111');
INSERT INTO `temporary_pay` VALUES ('27', 'aaa', 'bbb', 'ccc', '1', '111@qq.com', '1', '111');
INSERT INTO `temporary_pay` VALUES ('28', 'aaa', 'bbb', 'ddd', '1', '111@qq.com', '1', '111');
INSERT INTO `temporary_pay` VALUES ('29', 'abc', '123', 'abc', '1', 'eee@qq.com', '1', '567');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `gender` int(10) DEFAULT '1',
  `username` varchar(64) DEFAULT '' COMMENT '登录账号',
  `password` varchar(64) DEFAULT 'admin' COMMENT '登录密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('5', 'root', '1', 'root', 'root');
INSERT INTO `user` VALUES ('6', 'admin', '1', 'admin', 'admin');
INSERT INTO `user` VALUES ('7', 'a07', '1', 'admin07', 'admin');
INSERT INTO `user` VALUES ('8', 'a08', '1', 'admin08', 'admin');
INSERT INTO `user` VALUES ('9', 'a09', '1', 'admin09', 'admin');
INSERT INTO `user` VALUES ('16', 'a16', '0', 'admin16', 'admin');
INSERT INTO `user` VALUES ('17', 'a17', '1', 'admin17', 'admin');
INSERT INTO `user` VALUES ('18', 'a18', '1', 'admin18', 'admin');
INSERT INTO `user` VALUES ('20', 'a20', '1', 'admin20', 'admin');
INSERT INTO `user` VALUES ('26', 'a26', '1', 'admin26', 'admin');
INSERT INTO `user` VALUES ('27', 'a27', '1', 'admin27', 'admin');
INSERT INTO `user` VALUES ('28', 'a28', '1', 'admin28', 'admin');
INSERT INTO `user` VALUES ('29', 'a29', '1', 'admin29', 'admin');
INSERT INTO `user` VALUES ('30', 'a30', '1', 'admin30', 'admin');
INSERT INTO `user` VALUES ('31', 'a31', '1', 'admin31', 'admin');
INSERT INTO `user` VALUES ('33', 'a33', '1', 'admin33', 'admin');
