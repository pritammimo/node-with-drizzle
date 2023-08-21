CREATE TABLE `productsize` (
	`id` int AUTO_INCREMENT NOT NULL,
	`type_id` int NOT NULL,
	`size` varchar(512) NOT NULL,
	`price` int,
	`saleprice` int,
	`count` int,
	`availablepin` varchar(768) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `productsize_id` PRIMARY KEY(`id`)
);
