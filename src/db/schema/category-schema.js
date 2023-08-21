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
export const CategorySchema = mysqlTable(
    "category",
    {
      id: int("id").autoincrement().primaryKey(),
      categoryname: varchar("categoryname", { length: 256 }).notNull(),
      categorytag:varchar("categorytag", { length: 256 }),
       categoryimage:varchar("categoryimage", { length: 256 }).notNull(),
     minimumquantity:int("minimum_quantity"),
     categorystatus:varchar("categorystatus", { length: 512 }).notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
  );
 