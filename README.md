# learning_nodejs

Just a bunch of node.js functions

# use nodemon on linux

By default, there is a limit in some linux system for how many files can be watched by a user. Using the following command in a terminal increases the limit.

``` bash
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```