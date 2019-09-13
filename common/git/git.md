# Git

## Configure

### Configure user preferences

- Setup user email

```bash
git config --global user.email "you@example.com"
```

- Setup user name

```bash
git config --global user.name "Your Name"
```

### Configure line endings

- Setup all line endings to LF

```bash
git config --global core.autocrlf input
```

## Use

### Remove file or directory from git repository

- Remove file from git repository

```bash
git rm --cached {{file to remove}}
```

- Remove folder from git repository

```bash
git rm --cached -r {{folder to remove}}
```

- Remove file and commit history in git repository

```bash
git rm --cached {{file to remove}}
git commit --amend -CHEAD
git push
```

## Troubleshooting

### Encoding

- Fix Unicode file names

```bash
git config --global core.quotePath false
```
