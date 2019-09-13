# Git

## Install

### Setup user email

```bash
git config --global user.email "you@example.com"
```

### Setup user name

```bash
git config --global user.name "Your Name"
```

### Setup all line endings to LF

```bash
git config --global core.autocrlf input
```

## Use

### Remove file from history

```bash
git rm --cached bad_file
git commit --amend -CHEAD
git push
```

## Troubleshooting

### Fix Unicode file names

```bash
git config --global core.quotePath false
```
