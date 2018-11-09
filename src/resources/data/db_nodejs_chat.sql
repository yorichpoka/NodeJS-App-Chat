-- -- MySQL dump 10.13  Distrib 5.6.21, for Win64 (x86_64)
-- --
-- -- Host: localhost    Database: db_nodejs_chat
-- -- ------------------------------------------------------
-- -- Server version	5.6.21-log

-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!40101 SET NAMES utf8 */;
-- /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
-- /*!40103 SET TIME_ZONE='+00:00' */;
-- /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
-- /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
-- /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- --
-- -- Table structure for table "messages"
-- --

-- DROP TABLE IF EXISTS "messages";
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE "messages" (
--   "id" int(11) NOT NULL,
--   "id_user" int(11) NOT NULL,
--   "message" longtext NOT NULL,
--   PRIMARY KEY ("id"),
--   KEY "FK_Messages_Users_idx" ("id_user"),
--   CONSTRAINT "FK_Users_Messages" FOREIGN KEY ("id_user") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table "messages"
-- --

-- LOCK TABLES "messages" WRITE;
-- /*!40000 ALTER TABLE "messages" DISABLE KEYS */;
-- /*!40000 ALTER TABLE "messages" ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table "users"
-- --

-- DROP TABLE IF EXISTS "users";
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE "users" (
--   "id" int(11) NOT NULL AUTO_INCREMENT,
--   "code" varchar(100) NOT NULL,
--   "title" varchar(100) NOT NULL,
--   "password" varchar(100) NOT NULL,
--   PRIMARY KEY ("id"),
--   UNIQUE KEY "code_UNIQUE" ("code")
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table "users"
-- --

-- LOCK TABLES "users" WRITE;
-- /*!40000 ALTER TABLE "users" DISABLE KEYS */;
-- /*!40000 ALTER TABLE "users" ENABLE KEYS */;
-- UNLOCK TABLES;
-- /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

-- /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
-- /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
-- /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- -- Dump completed on 2018-11-09 18:35:55
