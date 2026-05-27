-- SQL Script to set up database and tables for She Can Foundation
-- You can run this script in your MySQL shell or tool (e.g. phpMyAdmin, MySQL Workbench)

-- 1. Create the database if it doesn't already exist
CREATE DATABASE IF NOT EXISTS shecanfoundation;

-- 2. Switch to the newly created database
USE shecanfoundation;

-- 3. Create the contact_messages table to store contact submissions
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create the volunteers table to store joining submissions
CREATE TABLE IF NOT EXISTS volunteers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  interest VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
