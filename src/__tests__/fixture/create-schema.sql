create table food_type (
  id serial primary key,
  name varchar,
  description varchar
);

insert into food_type (name, description) values ('fruit', 'awesome, citrus');
insert into food_type (name, description) values ('veggie', 'boring, lame, great for you');

create table food (
  id serial primary key,
  name varchar,
  type int references food_type (id)
);

insert into food (name, type) values ('orange', 1);
insert into food (name, type) values ('apple', 1);
insert into food (name, type) values ('brocolli', 2);
