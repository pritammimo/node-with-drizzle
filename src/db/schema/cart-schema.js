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
export const CartSchema = mysqlTable(
    "cart",
    {
      id: int("id").autoincrement().primaryKey(),
      productid: int("product_id").notNull(),
    userid: int("user_id").notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
  );
 