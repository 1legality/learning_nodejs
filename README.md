# learning_nodejs

Just a bunch of node.js functions

# use nodemon on linux

inotify watch limit can be reached easily with nodemon preventing nodemon from getting started. inotify watch limit can [be raised safely](http://askubuntu.com/questions/154255/how-can-i-tell-if-i-am-out-of-inotify-watches).

##### Temporarily:

Run 
``` bash 
sudo sysctl fs.inotify.max_user_watches=524288
```
#### Permanently (more detailed info):

put fs.inotify.max_user_watches=524288 into your sysctl settings. Depending on your system they might be in one of the following places:

Debian/RedHat: /etc/sysctl.conf

Arch: put a new file into /etc/sysctl.d/, e.g. /etc/sysctl.d/40-max-user-watches.conf

you may wish to reload the sysctl settings to avoid a reboot: sysctl -p (Debian/RedHat) or sysctl --system (Arch)
