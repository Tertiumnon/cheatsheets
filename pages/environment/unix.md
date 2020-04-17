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

## Files and directories

### View the file or firectory size

```bash
du -sh {{path}}
```

### Find the largest files

- Find the largest files on a file system.

```bash
du -a / | sort -n -r | head -n 10
```

### Remove files by pattern

- Find and remove files in current directory by extension.

```bash
find . -maxdepth 1 -name "*.{{extension}}" -delete
```



