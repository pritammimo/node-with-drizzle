CREATE TABLE `producttype` (
	`id` int AUTO_INCREMENT NOT NULL,
	`product_id` int NOT NULL,
	`types` varchar(512) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `producttype_id` PRIMARY KEY(`id`)
);
