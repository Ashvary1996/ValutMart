import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { orderType } from "./orderType";
import { salesType } from "./salesType";
import { productType } from "./productTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, orderType, productType, salesType],
};
