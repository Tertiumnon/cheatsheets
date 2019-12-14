# UNIX

## Administration

### Run sudo command without entering a password

Edit:

```bash
sudo visudo
```

Paste to the end of file:

```text
{{username}} ALL=(ALL) NOPASSWD: ALL
```

### Get users list

```bash
less /etc/passwd
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
