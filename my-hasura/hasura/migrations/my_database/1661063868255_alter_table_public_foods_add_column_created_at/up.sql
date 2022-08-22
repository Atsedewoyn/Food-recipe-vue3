alter table "public"."foods" add column "created_at" timestamptz
 null default now();
