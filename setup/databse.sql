create table country(
    id serial primary key,
    country varchar(64)
);

create table cars(
    car_id serial primary key,
    make varchar(64),
    model varchar(64),
    price varchar(15),
    country_id int references country(id)
);

select car_id, make, model, color, price country_id  from cars where make ilike '%aud%' offset 2 limit 2;


CREATE OR REPLACE FUNCTION pagination (x int, y int, s text) returns table(id int, nomi character varying, modeli character varying, rangi character varying, narxi character varying, countryId int) language plpgsql as $$ 
    declare 
        pag int := (x - 1) * y;
    begin 
        return query (select car_id, make, model, color, price, country_id  from cars where make ilike '%' || s || '%' offset pag limit y);
    end;
$$; 
