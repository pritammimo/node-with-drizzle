import { InferModel, relations } from "drizzle-orm";
import { int, mysqlTable, primaryKey, varchar } from "drizzle-orm/mysql-core";

export const ProductToCategorySchema = mysqlTable(
  "product_to_category",
  {
    productid: int("product_id").notNull(),
    categoryid: int("category_id").notNull(),
  },
  (productToCategorySchema) => {
    return {
      pk: primaryKey(productToCategorySchema.productid, productToCategorySchema.categoryid),
    };
  }
);

