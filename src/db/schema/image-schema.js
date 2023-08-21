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
export const ImageSchema = mysqlTable(
    "image",
    {
      id: int("id").autoincrement().primaryKey(),
     image:varchar("image", { length: 256 }).notNull(),
     position:int("position"),
     productid: int("product_id").notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
  );
 