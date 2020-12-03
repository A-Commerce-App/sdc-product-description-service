DROP DATABASE IF EXISTS product-descriptions;

CREATE DATABASE product-descriptions;

USE product-descriptions;

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  name date,
  price decimal(10, 2) NOT NULL,
  description varchar(255) NOT NULL,
  prime boolean NOT NULL,
  returnable boolean NOT NULL,
  flavor boolean,
  ingredients varchar(255),
  brand varchar(50) NOT NULL,
  sensitivity boolean,
  ingredient_info varchar(255),
  about varchar(255),
  ratings_avg int

  PRIMARY KEY (ID)
);
