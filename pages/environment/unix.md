# UNIX

## Administration

### Get user list

```bash
less /etc/passwd
```

### Add new user

```bash
useradd -m -d /home/{{user_name}} {{user_name}}
```

### Remove user

```bash
userdel {{user_name}}
```

### Run sudo command without entering a password

Edit:

```bash
sudo visudo
```

Paste to the end of file:

```text
{{username}} ALL=(ALL) NOPASSWD: ALL
```

## Processes

### Find process using a specific port

- Find process using a specific port (netstat).

```bash
netstat -lp | grep {{port}}
```

- Find process using a specific port (lsof).

```bash
sudo lsof -i TCP:{{port}}
```