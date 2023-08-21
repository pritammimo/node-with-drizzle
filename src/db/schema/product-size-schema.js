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
export const ProductSizeSchema = mysqlTable(
    "productsize",
    {
      id: int("id").autoincrement().primaryKey(),
      typeid: int("type_id").notNull(),
      size: varchar("size", { length: 512 }).notNull(),
      price:int("price"),
      saleprice:int("saleprice"),
      count:int("count"),
      availablepincode:varchar("availablepin", { length: 768 }).notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
  );
 