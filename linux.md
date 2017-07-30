# Linux

## Ubuntu
### Links
* [Ubuntu Official Flavours](https://wiki.ubuntu.com/XenialXerus/ReleaseNotes#Official_flavours)
* [Ubuntu Alternative Downloads](https://www.ubuntu.com/download/alternative-downloads)
* [What kinds of desktop environments and shells are available?](https://askubuntu.com/questions/65083/what-kinds-of-desktop-environments-and-shells-are-available)
* [Ubuntu GNOME](https://ubuntugnome.org/)
* [Difference between the i386 download and the amd64?](https://askubuntu.com/questions/54296/difference-between-the-i386-download-and-the-amd64) - basically says AMD64 images are meant both for Intel and AMD
* [Is the 64-Bit version of Ubuntu only compatible with AMD CPUs?](https://askubuntu.com/questions/197001/is-the-64-bit-version-of-ubuntu-only-compatible-with-amd-cpus)
* [XUbuntu 16.04.2 64-bit image torrent link](http://torrent.ubuntu.com/xubuntu/releases/xenial/release/desktop/xubuntu-16.04.2-desktop-amd64.iso.torrent)
* [Create a bootable USB stick on Windows](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-windows#0)

## VMWare
### Installing VMWare Tools
* [Installing VMware Tools in a Linux virtual machine using a Compiler](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1018414)

Command line sequence to install the tools. Note that the version of tools changes, so you need to update that one:
```bash
sudo-s
mkdir /mnt/cdrom
mount /dev/cdrom /mnt/cdrom
cp /mnt/cdrom/VMwareTools-10.1.6-5214329.tar.gz /tmp/
cd /tmp
tar -zxvf VMwareTools-10.1.6-5214329.tar.gz 
cd vmware-tools-distrib/
./vmware-install.pl -d
umount /mnt/cdrom
cd
rm /tmp/VMwareTools-10.1.6-5214329.tar.gz 
rm -rf /tmp/vmware-tools-distrib/
```

## Remote Access From Windows
* [X2Go](http://wiki.x2go.org/doku.php/doc:newtox2go) - doesn't seem to work for my Ubuntu Unity 16.04.2 - the session screen is black
* [Can I access Ubuntu from Windows remotely?](https://askubuntu.com/questions/592537/can-i-access-ubuntu-from-windows-remotely) - basically says you need to switch to xfce4, since Unity is not supported (I tried it on a Ubuntu 16.04.2 Unity VM and it doesn't really work, so it must be true)
* [How to Remote Access to Ubuntu 16.04 from Windows](http://ubuntuhandbook.org/index.php/2016/07/remote-access-ubuntu-16-04/) - explains how to do it via VNC protocol
* [How to use xRDP for remote access to Ubuntu 14.04](https://www.tweaking4all.com/software/linux-software/use-xrdp-remote-access-ubuntu-14-04/)

### Remote Desktop Protocol
#### For Virtual Machines
Make sure the network settings for the VM are set to Bridged (not NAT).

### SSH
On the Linux server:
```
sudo apt-get install openssh-server
```

On the Windows client, install [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html). You can also add a new task in ConEmu: ```"C:\Program Files\PuTTY\putty.exe" -cur_console -ssh 192.168.159.130``` (replace it with your server's IP).

## Command Line Cheatsheet
* ```apt-get update```- updates the package lists
* ```cd``` - moves to the home directory
* ```cp -a source destination``` - copies source to the destination, recursively and by keeping attributes
* ```hostname -I``` - find the IP of the computer
* ```kill -9 12345``` - kill process whose ID is 12345
* ```netstat -an | grep "LISTEN" | grep ":3389"``` - find if any application is listening on port 3389
* ```pwd``` - displays the current directory ("print working directory")
* ```shutdown now``` - powers off the computer (now)
* ```shutdown -r now``` - restarts the computer (now)
* ```xfce4-session-logout``` - logs out of session (XFCE4)

## Keyboard Shortcuts
### Terminal
* ```Ctrl+U``` - clears the current line ine the terminal
