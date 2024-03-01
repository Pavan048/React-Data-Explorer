CREATE DATABASE customers;

CREATE TABLE customer (
    sno SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    age INT,
    phone VARCHAR(20),
    location VARCHAR(100),
    created_date DATE,
    created_time TIME
);
