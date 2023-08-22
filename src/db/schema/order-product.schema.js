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
export const OrderProductSchema = mysqlTable(
    "orderproduct",
    {
      id: int("id").autoincrement().primaryKey(),
      orderid: int("order_id").notNull(),
      productid:int("product_id").notNull(),
      productprice:int("product_price").notNull(),
      deliveryrelatedinfo:text("delivery_related_info", { length: 4000 }).notNull(),
      deliveryStatus:varchar("delivery_status", { length: 768 }).notNull(),
      productcancelreason:text("product_cancel_reason", { length: 4000 }).notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
  );