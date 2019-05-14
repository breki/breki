# Windows Scripting

## Tips & Tricks
### Echo off
```bat
@ECHO OFF
```

### Write an empty line
```bat
ECHO.
```

### Variables
```bat
SET DEST_DIR=c:\temp
%DEST_DIR%
```

### Splitting long lines
```bat
%OPENSSL% pkcs12 -export -in %PUBLIC_KEY% -inkey %PRIVATE_KEY% ^
	-out IPN-cert-%PP_ENVIRO%.p12
```

### Break on error
```bat
IF %errorlevel% neq 0 EXIT /b %errorlevel%
```
