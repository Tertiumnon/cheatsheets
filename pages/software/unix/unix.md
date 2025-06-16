# UNIX Cheatsheet

## Basic Server Setup

### 1. Create a New User

```bash
sudo useradd -m -d /home/{user} -s /bin/bash {user}
sudo passwd {user}
```

- `-m`: Create home directory.
- `-d`: Specify home directory path.
- `-s`: Set default shell.

### 2. Add User to Sudoers

```bash
sudo usermod -aG sudo {user}
```

### 3. Allow Passwordless Sudo (Optional)

```bash
sudo visudo
```

Add at the end:

```text
{user} ALL=(ALL) NOPASSWD: ALL
```

### 4. Switch to New User

```bash
su - {user}
```

---

## System Upgrade (Ubuntu)

```bash
sudo apt update && sudo apt upgrade
sudo do-release-upgrade -d
```

---

## User Management

- **List users:**

  ```bash
  less /etc/passwd
  ```

- **Delete user:**

  ```bash
  sudo userdel {user}
  ```

---

## Processes

- **Find process using a port (netstat):**

  ```bash
  netstat -lp | grep {port}
  ```

- **Find process using a port (lsof):**

  ```bash
  sudo lsof -i TCP:{port}
  ```

---

## Files and Directories

- **View size:**

  ```bash
  du -sh {path}
  ```

- **Find largest files:**

  ```bash
  du -a / | sort -n -r | head -n 10
  ```

- **Remove files by pattern:**

  ```bash
  find . -maxdepth 1 -name "*.{extension}" -delete
  ```

- **Copy file with current datetime:**

  ```bash
  cp {file} {file}-$(date +%Y%m%d-%H%M%S)
  ```
