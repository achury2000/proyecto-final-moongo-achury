-- CREATE DATABASE IF NOT EXISTS companydb;
-- USE companydb;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(11) DEFAULT NULL, 
  PRIMARY KEY(id)
);

DESCRIBE employee;
-- estp es lo que tiene mi base de datos
INSERT INTO employee values 
  (1, 'Ryan Ray', 20000),
  (2, 'Joe McMillan', 40000),
  (3, 'John Carter', 50000),
  (4, 'Luis Hernan', 30000),
  (5, 'Juan Jose', 60000),
  (6, 'Maria Isabel', 10000),
  (7, 'Cristian Mateo', 70000);

SELECT * FROM employee;
