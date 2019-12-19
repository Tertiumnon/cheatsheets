# SSH

## Use

### Create key storage file (server)

- Create key storage file.

```bash
touch authorized_keys
```

- Setup permissions.

```bash
chmod 644 ~/.ssh/authorized_keys
```

### Create SSH pair (server)

- Generate SSH private and public keys.

```bash
ssh-keygen -t rsa -b 4096 -N '' -C "{{your email}}" -f ~/.ssh/id_rsa
```

- Copy created pub key to key storage.

```bash
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```

### Create SSH pair (client)

- Copy private key to local .ssh directory.

```bash
scp {{username}}@{{servername}}:/home/{{username}}/.ssh/{{keyname}} ~/.ssh/{{keyname}}
```

- Add your private key to SSH config.

```text
Host {{servername alias}}
    HostName {{servername}}
    User {{username}}
    IdentityFile ~/.ssh/{{keyname}}
```

### Use SSH agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

### Setup SSH directories and files permissions

```bash
chmod 700 ~/.ssh
chmod 644 ~/.ssh/authorized_keys
chmod 644 ~/.ssh/known_hosts
chmod 644 ~/.ssh/config
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
```
