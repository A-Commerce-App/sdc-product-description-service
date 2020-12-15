DROP DATABASE IF EXISTS productDescriptions;

CREATE DATABASE productDescriptions;

USE productDescriptions;

CREATE TABLE products (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(50),
  price decimal(10, 2) NOT NULL,
  prime varchar(50) NOT NULL,
  returnable varchar(50) NOT NULL,
  flavor varchar(50),
  ingredients varchar(255),
  brand varchar(50) NOT NULL,
  sensitivity varchar(255),
  ingredient_info varchar(255),
  about varchar(255),
  ratings_avg int
);