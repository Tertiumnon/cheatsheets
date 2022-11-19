# UNIX

### Upgrading

#### Upgrade to the next version (Ubuntu) 

```bash
sudo do-release-upgrade -d
```

## Usage

### Users

#### Get user list

```bash
less /etc/passwd
```

#### Add new user

```bash
useradd -m -d /home/{{user_name}} {{user_name}}
```

#### Remove user

```bash
userdel {{user_name}}
```

#### Run sudo command without entering a password

Edit:

```bash
sudo visudo
```

Paste to the end of file:

```text
{{username}} ALL=(ALL) NOPASSWD: ALL
```

### Processes

#### Find process using a specific port (netstat)

```bash
netstat -lp | grep {{port}}
```

#### Find process using a specific port (lsof)

```bash
sudo lsof -i TCP:{{port}}
```

### Files and directories

#### View the file or firectory size

```bash
du -sh {{path}}
```

#### Find the largest files

```bash
du -a / | sort -n -r | head -n 10
```

#### Remove files by pattern

```bash
find . -maxdepth 1 -name "*.{{extension}}" -delete
```

#### Copy file with current datetime

```bash
cp {{file}} {{file}}-`date +%Y%m%d-%H%M%S`
```
