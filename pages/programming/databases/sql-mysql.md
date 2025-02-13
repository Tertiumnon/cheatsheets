# MySQL

## Installation

### Install MySQL (Ubuntu)

```bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```

## Configure

### Setup as a service on startup (Linux)

- Enable starting MySQL service on startup (Linux)

```bash
sudo update-rc.d mysql defaults
```

- Disable starting MySQL service on startup (Linux)

```bash
sudo update-rc.d mysql remove
```

### Setup as service on startup (Windows)

- Install

```powershell
mysqld --install
```

- Initialize

```powershell
mysqld --initialize
```

- Run

```powershell
mysqld --console
```

### Change data path

- Stop MySQL service

```bash
sudo service mysql stop
```

- Copy MySQL data

```bash
sudo cp -Rp /var/lib/mysql /mnt/d/var/lib/mysql
```

- Copy MySQL logs

```bash
sudo cp -Rp /var/log/mysql /mnt/d/var/log/mysql
```

- Start MySQL service

```bash
sudo service mysql start
```

## Usage

### Login as root

```bash
sudo mysql
```

### Login with user and password

```bash
mysql -u root -p
```

### Common data types

```text
| Column           | Data type     | Note
| ---------------- | ------------- | -------------------------------------
| id               | INTEGER       | AUTO_INCREMENT, UNSIGNED                                                          |
| uuid             | CHAR(36)      | or CHAR(16) binary                                                                |
| title            | VARCHAR(255)  |                                                                                   |
| full name        | VARCHAR(70)   |                                                                                   |
| gender           | TINYINT       | UNSIGNED                                                                          |
| description      | TINYTEXT      | often may not be enough, use TEXT  instead                                        |
| post body        | TEXT          |                                                                                   |
| email            | VARCHAR(255)  |                                                                                   |
| url              | VARCHAR(2083) | MySQL version < 5.0.3 - use TEXT                                                  |
| salt             | CHAR(x)       | randomly generated string, usually of fixed length (x)                            |
| digest (md5)     | CHAR(32)      |                                                                                   |
| phone number     | VARCHAR(20)   |                                                                                   |
| US zip code      | CHAR(5)       | Use CHAR(10) if you store extended codes                                          |
| US/Canada p.code | CHAR(6)       |                                                                                   |
| file path        | VARCHAR(255)  |                                                                                   |
| 5-star rating    | DECIMAL(3,2)  | UNSIGNED                                                                          |
| price            | DECIMAL(10,2) | UNSIGNED                                                                          |
| date (creation)  | DATE/DATETIME | TIMESTAMP DEFAULT CURRENT_TIMESTAMP                                               |
| date (tracking)  | TIMESTAMP     | TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP                   |
| tags, categories | TINYTEXT      | comma separated values *                                                          |
| status           | TINYINT(1)    | 1 – published, 0 – unpublished, … You can also use ENUM for human-readable values |
| json data        | JSON          | or LONGTEXT
```

### Extract

```sql
sed -n '/^-- Current Database: `db_name`/,/^-- Current Database: `/p' alldatabases.sql > db_name.sql
```

### Import database

```sql
mysql -D db_name -o db_name < all_databases.sql
```

```sql
mysql -u db_user -p --one-database db_name < all_databases.sql
```

### Import database from archive

```sql
gunzip < {{db_import_name}}.sql.gz | mysql -u {{db_user}} -p {{db_name}}.sql
```

### Export database

```sql
mysqldump -u {{db_user}} -p {{db_name}} > {{db_export_name}}.sql
```

- Set previous authentication method for MySQL 8.

```sql
ALTER USER '{{user_name}}'@'localhost' IDENTIFIED WITH mysql_native_password '{{user_password}}';
FLUSH PRIVILEGES;
```

### ADD COLUMN with primary key

```sql
ALTER TABLE table_name ADD id INT NOT NULL PRIMARY KEY AUTO_INCREMENT;
```

### ADD COLUMN as the first column

```sql
ALTER TABLE table_name ADD id INT NOT NULL PRIMARY KEY AUTO_INCREMENT FIRST;
```

### ADD COLUMN after an existing column

```sql
ALTER TABLE {{table_name}} ADD {{col_name_n}} VARCHAR AFTER {{column_name_1}};
```

### RENAME COLUMN

```sql
ALTER TABLE {{table_name}} CHANGE COLUMN {{prev_column_name}} {{new_column_name}} {{column_definition}};
```

### CHANGE COLUMN TYPE

```sql
ALTER TABLE {{table_name}} MODIFY COLUMN {{column_name}} {{column_definition}};
```

### ADD categories

```sql
CREATE TABLE person (
`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(50)
);

CREATE TABLE fruits (
`fruit_name` VARCHAR(20) NOT NULL PRIMARY KEY,
`color` VARCHAR(20),
`price` INT
);

CREATE TABLE person_fruit (
`person_id` INT NOT NULL,
`fruit_name` VARCHAR(20) NOT NULL,
PRIMARY KEY(`person_id`, `fruit_name`)
);
```

- Retrieving

```sql
SELECT p.*, f.*
FROM person p
INNER JOIN person_fruit pf
ON pf.person_id = p.id
INNER JOIN fruits f
ON f.fruit_name = pf.fruit_name
```

### ADD COLUMN value from another column

```sql
SELECT col_name_1, col_name_2, SUBSTR(options,13,5) AS options_new FROM table_name;
```

### SELECT with REGEXP

```sql
SELECT col_name FROM table_name WHERE col_name REGEXP '^(A|B|C)';
```

- [MySQL regexp 5.7](https://dev.mysql.com/doc/refman/5.7/en/regexp.html)
- [MySQL regexp 8.0](https://dev.mysql.com/doc/refman/8.0/en/regexp.html)

### UPDATE COLUMN with SUBSTRING (remove last char)

```sql
UPDATE table_name SET col_name = SUBSTRING(col_name FROM 1 FOR CHAR_LENGTH(ref_id) - 1);
```

## Upgrading

### MySQL upgrade from 5.7 to 8.0 (Ubuntu)

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.10-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb
sudo apt install mysql-server
mysql_upgrade -u root -p
```

## Troubleshooting

### No directory, logging in with HOME=/ (Ubuntu)

```bash
sudo usermod -d /var/lib/mysql/ mysql
sudo service mysql start
```

### Can't find mysql.infoschema

```bash
mysql -u root -p
mysql> SET GLOBAL innodb_fast_shutdown = 1;
sudo mysql_upgrade -u root -p
```

### MySQL 8.0 - Client does not support authentication protocol requested by server; consider upgrading MySQL client

```mysql
ALTER USER '{{user_name}}'@'localhost' IDENTIFIED WITH mysql_native_password BY '{{user_password}}';
FLUSH PRIVILEGES;
```

- [stackoverflow.com/questions/50093144](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server)
- [](https://dev.mysql.com/doc/dev/connector-nodejs/8.0/)

## Uninstall

### Uninstall (Ubuntu)

```bash
sudo apt remove --purge mysql-\*
sudo apt install mysql-server mysql-client
```

### Uninstall (CenOS)

```bash
sudo yum remove mysql-server
sudo yum install mysql-server mysql-client
```
