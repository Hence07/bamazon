DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  stock_quantity INT NULL,
  price DECIMAL(10,2) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES ("MacBookPro", Computers, 100, 1000.50);

INSERT INTO products(product_name, department_name, stock_quantity, price)
VALUES
  ("MacBookPro", Computers, 100, 1000.50);

  INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES
  ("HP", Computers, 50, 399.50);

  INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES
  ("Acer", Computers, 25, 299.50);

  INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES
  ("Iphone8", Phone, 300, 600.50);

  INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES
  ("Galaxy5", Phone, 25, 300.50);

  INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES
  ("Fitness & Cross-Training", MenShoes, 200, 40.50);

  INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES
  ("Sandals", MenShoes, 100, 1000.50);

  INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES
  ("Bougartti", Cars, 3, 500000000.78);

  INSERT INTO products (product_name, department_name, stock_quantity, price)
VALUES
  ("BMW", Cars, 30, 75000.70);

  INSERT INTO products
  (product_name, department_name, stock_quantity, price)
VALUES
  ("Mercedes", Cars, 100, 65000.50);