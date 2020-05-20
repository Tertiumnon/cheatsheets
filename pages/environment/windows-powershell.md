# Windows Powershell

## Use

### Files and folders

#### Remove folder with recurse

```powershell
Remove-Item -path {{path\to\folder}}
```

#### Make a symbolic link (CMD)

```cmd
mklink /d \{{Symlink name}} C:\{{Path to dir}}
```

### Processes and services

#### Find process ID by port

```powershell
netstat -ano | findstr {{port}}
```

#### Kill process by ID

```powershell
taskkill /F /PID {{ID}}
```
