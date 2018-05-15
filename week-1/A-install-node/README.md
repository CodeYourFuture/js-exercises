### 1. Install the lastest verison of Node.js

**Windows and Mac users**

Download the _installer_ (.msi or .pkg) from https://nodejs.org/en/download

---

**Linux (Ubuntu) users**

Run the following commands in your terminal:

```sh
  curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
  sudo apt-get install -y nodejs
```

Source: https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

> A note on security: This will require you to enter a password. Don't execute a script on your terminal if you don't trust its source, especially if they use the `sudo` command to get admin access to your machine.

### 2. Test installation

Go to your terminal and run the command: `node -v`.

You should get the node version printed on your terminal. For example, `v8.9.3`.
