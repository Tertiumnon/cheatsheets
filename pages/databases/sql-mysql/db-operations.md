# Database Operations

## Basic

### Create DB

```sql
CREATE DATABASE {{database}};
```

### Create DB with UTF8 support

```sql
CREATE DATABASE {{database}} CHARACTER SET UTF8mb4 COLLATE utf8mb4_bin;
```

### Create DB user

- Create a database user.

```sql
CREATE USER '{{user_name}}'@'localhost' IDENTIFIED BY '{{user_password}}';
GRANT ALL PRIVILEGES ON {{database_name}}.* TO '{{user_name}}'@'localhost';
FLUSH PRIVILEGES;
```
