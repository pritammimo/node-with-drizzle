CREATE TABLE `order` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`payment_method` varchar(256) NOT NULL,
	`delivery_address` text NOT NULL,
	`card_details` text NOT NULL,
	`order_status` varchar(768) NOT NULL,
	`delivery_status` varchar(768) NOT NULL,
	`order_date` datetime NOT NULL,
	`delivery_date` datetime NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `order_id` PRIMARY KEY(`id`)
);
