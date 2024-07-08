CREATE DATABASE TestDB;
IF NOT EXISTS (SELECT *
FROM sys.databases
WHERE name = 'TestDB')
BEGIN
    CREATE DATABASE TestDB;
END

USE TestDB;
CREATE TABLE dbo.Inventory
(
    id INT,
    name NVARCHAR(50),
    quantity INT,
    PRIMARY KEY (id)
);
INSERT INTO dbo.Inventory
VALUES
    (1, 'banana', 150);
INSERT INTO dbo.Inventory
VALUES
    (2, 'orange', 154);

SELECT *
FROM dbo.Inventory
WHERE quantity > 152;

SELECT Name
from sys.databases;
