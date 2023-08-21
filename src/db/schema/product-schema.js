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
export const ProductSchema = mysqlTable(
    "products",
    {
      id: varchar("id", { length: 50 }).primaryKey(),
      name: varchar("name", { length: 256 }).notNull(),
     status:varchar("status", { length: 256 }),
     brand:varchar("brand", { length: 256 }).notNull(),
     minimumquantity:int("minimum_quantity"),
     type:varchar("type", { length: 256 }).notNull(),
     description:text("description",{length:65535}).notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
  );
 