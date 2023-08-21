CREATE TABLE `auth` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_name` varchar(100) NOT NULL,
	`role` enum('user','admin') NOT NULL,
	`email` varchar(100) NOT NULL,
	`password` varchar(255) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `auth_id` PRIMARY KEY(`id`),
	CONSTRAINT `email_unique_idx` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `category` (
	`id` int AUTO_INCREMENT NOT NULL,
	`categoryname` varchar(256) NOT NULL,
	`categorytag` varchar(256),
	`categoryimage` varchar(256) NOT NULL,
	`minimum_quantity` int,
	`categorystatus` varchar(512) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `category_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `product_to_category` (
	`product_id` int NOT NULL,
	`category_id` int NOT NULL,
	CONSTRAINT `product_to_category_category_id_product_id` PRIMARY KEY(`category_id`,`product_id`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`status` varchar(256),
	`brand` varchar(256) NOT NULL,
	`minimum_quantity` int,
	`type` varchar(256) NOT NULL,
	`description` text NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`full_name` varchar(100) NOT NULL,
	`phone` varchar(256),
	`address` varchar(256),
	`delivery_address` varchar(256),
	`authid` varchar(50) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
