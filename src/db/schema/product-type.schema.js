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
export const ProductTypeSchema = mysqlTable(
    "producttype",
    {
      id: int("id").autoincrement().primaryKey(),
      productid: int("product_id").notNull(),
      types: varchar("types", { length: 512 }).notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
  );
 