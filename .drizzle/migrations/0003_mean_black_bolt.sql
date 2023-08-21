CREATE TABLE `image` (
	`id` int AUTO_INCREMENT NOT NULL,
	`image` varchar(256) NOT NULL,
	`position` int,
	`product_id` int NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `image_id` PRIMARY KEY(`id`)
);
