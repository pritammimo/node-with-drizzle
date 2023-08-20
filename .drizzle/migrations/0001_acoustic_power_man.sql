CREATE TABLE `products` (
	`id` varchar(50) NOT NULL,
	`name` varchar(256) NOT NULL,
	`status` varchar(256),
	`brand` varchar(256) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
