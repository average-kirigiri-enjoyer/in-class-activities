-- Write your Schema Here -- 
DROP DATABASE IF EXISTS customers_db;
CREATE DATABASE customers_db;

USE customers_db;

CREATE TABLE customers
(
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE customer_order
(
  id INT NOT NULL,
  customer_id INT,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);

INSERT INTO customers (id, first_name, last_name)
VALUES (1, "ethan", "hertl");

INSERT INTO customer_order (id, customer_id, order_details)
VALUES (1, 1, "COCO ICHIBANYA CHICKEN-CUTLET CURRY WITH CHEESE");