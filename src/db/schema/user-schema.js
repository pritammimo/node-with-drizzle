import { relations, sql } from "drizzle-orm";
import {
    int,
    mysqlTable,
    varchar,
    mysqlEnum,
    datetime,
    uniqueIndex,
  } from "drizzle-orm/mysql-core";
import { AuthSchema } from "./auth-schema";
export const UserSchema = mysqlTable(
    "users",
    {
      id: varchar("id", { length: 50 }).primaryKey(),
      fullname: varchar("full_name", { length: 100 }).notNull(),
      phone: varchar("phone", { length: 256 }),
  address: varchar("address", { length: 256 }),
  deliveryaddress:varchar("delivery_address", { length: 256 }),
  authid: varchar("authid", { length: 50 })
        .notNull()
        .references(() => {
          return AuthSchema.id;
        }),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
  );
 