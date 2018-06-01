# .NET Core

## .NET Core on Linux

### Installing .NET Core on Linux
This procedure was tested on **Ubuntu 16.04.03**:
1. Install dependency packages:

```bash
sudo apt install libunwind8 liblttng-ust0 libcurl3 libssl1.0.0 libuuid1 libkrb5-3 zlib1g libicu55 curl -y
```

2. Register the Microsoft Product key as trusted.
```bash
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg

sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
```

3. Set up the desired version host package feed (for Ubuntu 16.04):
``` bash
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial main" > /etc/apt/sources.list.d/dotnetdev.list'

sudo apt-get update
```

4. Install .NET Core:
```bash
sudo apt-get install dotnet-sdk-2.1.4
```

5. Test the installation:
```bash
dotnet --version
```

### Packaging for Linux
```dos
dotnet publish -r ubuntu.16.04-x64
```

## ASP.NET Core
- [Integration tests in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-2.1) - 30.05.2018
