DROP KEYSPACE IF EXISTS productDescriptions;
CREATE KEYSPACE productDescriptions
WITH replication = {'class':'NetworkTopologyStrategy', 'datacenter1' : 1};
USE productDescriptions;

CREATE TABLE products (
  id int,
  name text,
  price float,
  prime text,
  returnable text,
  flavor text,
  ingredients text,
  brand text,
  sensitivity text,
  ingredient_info text,
  about text,
  ratings_avg int,
  PRIMARY KEY(id)
);