import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sales",
  title: "Sale",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Sale Title",
      validation: (Rule) => Rule.required().min(3).max(50),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Sale Description",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "discountAmount",
      type: "number",
      title: "Discount Amount",
      description: "Amount off in percentage or fixed value",
      // validation: (Rule) => Rule.required().positive().max(100),
    }),
    defineField({
      name: "couponCode",
      type: "string",
      title: "Coupon Code",
      validation: (Rule) => Rule.required().min(3).max(20),
    }),
    defineField({
      name: "validFrom",
      type: "datetime",
      title: "Valid From",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "validUntil",
      type: "datetime",
      title: "Valid Until",
      validation: (Rule) => Rule.required().min(Rule.valueOfField("validFrom")),
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      title: "Is Active",
      description: "Toggle to activate/deactivate the sale",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountAmount: "discountAmount",
      couponCode: "couponCode",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, discountAmount, couponCode, isActive } = selection;
      const status = isActive ? "Active" : "Inactive";
      return {
        title,
        subtitle: `${discountAmount}${discountAmount ? "%" : ""} off - Code: ${
          couponCode || "N/A"
        } - ${status}`,
      };
    },
  },
});
