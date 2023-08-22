import { relations, sql } from "drizzle-orm";
import {
    int,
    mysqlTable,
    varchar,
    mysqlEnum,
    datetime,
    uniqueIndex,
    text,
  } from "drizzle-orm/mysql-core";
export const OrderSchema = mysqlTable(
    "order",
    {
      id: int("id").autoincrement().primaryKey(),
      userid: int("user_id").notNull(),
      paymentmethod:varchar("payment_method", { length: 256 }).notNull(),
      deliveryaddress:text("delivery_address", { length: 3000 }).notNull(),
      carddetails:text("card_details", { length: 3000 }).notNull(),
      orderStatus:varchar("order_status", { length: 768 }).notNull(),
      deliveryStatus:varchar("delivery_status", { length: 768 }).notNull(),
      orderdate:datetime("order_date").notNull(),
      deliverydate:datetime("delivery_date").notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
  );