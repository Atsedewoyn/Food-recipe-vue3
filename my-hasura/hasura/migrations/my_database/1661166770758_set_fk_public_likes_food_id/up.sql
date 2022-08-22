alter table "public"."likes"
  add constraint "likes_food_id_fkey"
  foreign key ("food_id")
  references "public"."foods"
  ("id") on update restrict on delete restrict;
