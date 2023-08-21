CREATE TABLE `auth` (
	`id` varchar(50) NOT NULL,
	`user_name` varchar(100) NOT NULL,
	`role` enum('user','admin') NOT NULL,
	`email` varchar(100) NOT NULL,
	`password` varchar(255) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `auth_id` PRIMARY KEY(`id`),
	CONSTRAINT `email_unique_idx` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` varchar(50) NOT NULL,
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
	`id` varchar(50) NOT NULL,
	`full_name` varchar(100) NOT NULL,
	`phone` varchar(256),
	`address` varchar(256),
	`delivery_address` varchar(256),
	`authid` varchar(50) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_authid_auth_id_fk` FOREIGN KEY (`authid`) REFERENCES `auth`(`id`) ON DELETE no action ON UPDATE no action;