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

### Get remote url

```bash
git config --get remote.origin.url
```

### Get changed files

- Get changed in last commit files

```bash
git diff --name-only HEAD HEAD~1
```

### Remove file or directory from git repository

- Remove file from git repository

```bash
git rm --cached {{file to remove}}
```

- Remove folder from git repository

```bash
git rm --cached -r {{folder to remove}}
```

- Remove commit history in git repository

```bash
git commit --amend -CHEAD
```

- Push your commits

```bash
git push
```

### Clear all stash

- Clear all stash

```bash
git stash clear
```

### Clean git repository

- Remove the history

```bash
rm -rf .git
```

- Init new git repository

```bash
git init
git add .
git commit -m "Initial commit"
```

- Add remote origin

```bash
git remote add origin git@github.com:<YOUR ACCOUNT>/<YOUR REPOS>.git
```

- Push

```bash
git push -u --force origin master
```

### Rename branch

- Rename active branch

```bash
git branch -m {{new branch name}}
```

- Rename another branch

```bash
git branch -m {{old branch name}} {{new branch name}}
```

- Delete old branch and push branch with new name

```bash
git push origin: {{old branch name}} {{new branch name}}
```

- Reset the upstream

```bash
git push origin -u {{new branch name}}
```

## Troubleshooting

### Encoding

- Fix Unicode file names

```bash
git config --global core.quotePath false
```
