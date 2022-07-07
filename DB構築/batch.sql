create database batch;
use batch;
DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `age` int(3) NOT NULL,
  `birthday` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

INSERT INTO person(id, name, age, birthday) VALUES (1, "Alice", 23, '1999-11-09');
INSERT INTO person(id, name, age, birthday) VALUES (2, "Bob", 38, '1984-09-09');
INSERT INTO person(id, name, age, birthday) VALUES (3, "Carol", 29, '1993-11-09');
INSERT INTO person(id, name, age, birthday) VALUES (4, "Dave", 23, '1999-09-09');

