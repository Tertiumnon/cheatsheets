# Windows

## Usage

### Check system files through SFC

SFC will scan all protected system files, and replace corrupted files with a cached copy that is located in a compressed folder at %WinDir%\System32\dllcache.

```powershell
SFC /scannow
```

### Check system files through DISM

DISM uses Windows Update to provide the files that are required to fix corruptions.

```powershell
DISM.exe /Online /Cleanup-image /Restorehealth
```
