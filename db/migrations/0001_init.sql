-- The first schema of ECommercePlatform, from the approved contracts.

CREATE TABLE "products" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" text NOT NULL,
    "sku" text NOT NULL,
    "description" text,
    "price" numeric(18,2) NOT NULL,
    "stock" integer
);

CREATE TABLE "customers" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    "full_name" text NOT NULL,
    "email" text NOT NULL,
    "phone" text
);

CREATE TABLE "orders" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    "customer_id" uuid NOT NULL,
    "status" text NOT NULL,
    "total" numeric(18,2),
    "placed_at" timestamptz
);

CREATE TABLE "order_items" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    "order_id" uuid NOT NULL,
    "product_id" uuid NOT NULL,
    "quantity" integer NOT NULL,
    "unit_price" numeric(18,2)
);

CREATE TABLE "carts" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    "customer_id" uuid NOT NULL,
    "updated_at" timestamptz
);
