CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  age INT,
  niveau VARCHAR(255) NOT NULL,
  salles TEXT NOT NULL,
  disponibilites TEXT NOT NULL
);


create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

INSERT INTO user (id, firstname, genre, age, niveau, salles, disponibilites) VALUES
(1, "Alice", "Femme", 29, "6a", "Mroc Part-Dieu, Climb Up Confluence", "17h-19h, weekend"),
(2, "Paul", "Homme", 35, "6b", "Mroc Laënnec, Climb Up Gerland", "en journée, 20h et +"),
(3, "Marie", "Femme", 24, "5c", "Mroc Villeurbanne, Mroc Part-Dieu", "18h-20h, weekend"),
(4, "Lucas", "Homme", 30, "6c", "Climb Up Confluence, Climb Up Gerland", "20h et +, weekend"),
(5, "Camille", "Femme", 27, "5b", "Mroc Laënnec, Mroc Villeurbanne", "17h-19h, en journée"),
(6, "Hugo", "Homme", 23, "6a+", "Mroc Part-Dieu, Climb Up Gerland", "20h et +, weekend"),
(7, "Claire", "Femme", 26, "5c+", "Mroc Villeurbanne, Climb Up Confluence", "18h-20h"),
(8, "Maxime", "Homme", 28, "7a", "Climb Up Gerland, Mroc Villeurbanne", "17h-19h, weekend"),
(9, "Laura", "Femme", 31, "5a", "Mroc Laënnec, Climb Up Confluence", "en journée, 18h-20h"),
(10, "Antoine", "Homme", 33, "6b+", "Mroc Part-Dieu, Mroc Villeurbanne", "20h et +, weekend");


insert into item(id, title, user_id)
values
  (1, "Stuff", 1),
  (2, "Doodads", 1);

