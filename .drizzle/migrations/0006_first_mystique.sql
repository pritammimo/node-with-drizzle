CREATE TABLE `orderproduct` (
	`id` int AUTO_INCREMENT NOT NULL,
	`order_id` int NOT NULL,
	`product_id` int NOT NULL,
	`product_price` int NOT NULL,
	`delivery_related_info` text NOT NULL,
	`delivery_status` varchar(768) NOT NULL,
	`product_cancel_reason` text NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `orderproduct_id` PRIMARY KEY(`id`)
);
