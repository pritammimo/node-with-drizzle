import { relations, sql } from "drizzle-orm";
import {
    int,
    mysqlTable,
    varchar,
    mysqlEnum,
    datetime,
    uniqueIndex,
  } from "drizzle-orm/mysql-core";
export const ProductSchema = mysqlTable(
    "products",
    {
      id: varchar("id", { length: 50 }).primaryKey(),
      name: varchar("name", { length: 256 }).notNull(),
     status:varchar("status", { length: 256 }),
     brand:varchar("brand", { length: 256 }).notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
  );
 