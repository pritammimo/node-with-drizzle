import { relations, sql } from "drizzle-orm";
import {
    int,
    mysqlTable,
    varchar,
    mysqlEnum,
    datetime,
    uniqueIndex,
  } from "drizzle-orm/mysql-core";
export const AuthSchema = mysqlTable(
    "auth",
    {
      id: varchar("id", { length: 50 }).primaryKey(),
      username: varchar("user_name", { length: 100 }).notNull(),
      role: mysqlEnum("role", ["user", "admin"]).notNull(),
      email: varchar("email", { length: 100 }).notNull(),
      password: varchar("password", { length: 255 }).notNull(),
      createdAt: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    },
    (authSchema) => {
        return {
          email_unique_idx: uniqueIndex("email_unique_idx").on(authSchema.email),
        };
      }
  );