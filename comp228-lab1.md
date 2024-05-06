**Lab Session 1 - Setting up Development Environment**

This document provides the necessary instructions for completing the
Week 1 lab session exercises.

**Exercise 1: Node.js Installation**

[**https://nodejs.org**](https://nodejs.org/)

Go to <https://nodejs.org/en/download/current/> and download the current
version of Node.js.

If your system is Windows 10 64 bit, download Windows Installer, 64 bit
version.

Install Node.js using Windows Installer. Mac users can use macOS
installer

After installation, in a console window, check Node.js version using the
following command:

**node -- v**

You should see the Node.js version number displayed:

![](comp229-lab1/image1.png)

**Exercise 2: MongoDB installation**

<https://www.mongodb.com/try/download/community>

download the appropriate MongoDB for your operating system.

Run the installer and follow the on-screen instructions to complete the
installation.

**Exercise 3: Mongosh**

<https://www.mongodb.com/try/download/shell>

download the appropriate Mongosh for your operating system.

Run the installer and follow the on-screen instructions to complete the
installation.

Test your MongoDB: Follow the step by step instructions on the slide.

![](comp229-lab1/image2.png)

![](comp229-lab1/image3.png)

**Exercise 4: VS Code installation**

Go to <https://code.visualstudio.com/download> and

download the appropriate version of VS Code for your operating system.

Run the installer and follow the on-screen instructions to complete the
installation.

Once installed, launch VS Code and familiarize yourself with the
interface.

**Exercise 5: Developing ES6+ Modules with VS Code**

Open VS Code. Open a new folder (File/Open folder...). Name the folder
**lab-session-1**.

Open a new Terminal window (Terminal menu, select new).

![](comp229-lab1/image4.png)

To create the **package.json** file, type **npm init -y** in the
terminal window and accept defaults as below:

![](comp229-lab1/image5.png)

Add also **\"type\": \"module\"** to this file.

```
{
  "name": "lab-session-1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

Using **VS Code** editor, create a JavaScript file **lib.js** in
**lab-session-1** folder and copy the following code:

```
export function halfOf(x) {
    return x / 2;
}
export function multiply(x, y) {
    return x * y;
}
```

Create another JavaScript file named **main.js** and copy the following
code:

```
import {halfOf, multiply} from './lib.js';
//
console.log(halfOf(84));
console.log(multiply(21, 2));
```

In the terminal window, run the main.js by issuing the following
command:

\> **node main**

![](comp229-lab1/image6.png)

You may also click on Run code arrow button, at the top-right of the
editor.

Continue running all examples from Week1-ECMASCRIPT

Note: This exercise assumes a basic understanding of JavaScript and ES6+
syntax. Feel free to explore more advanced features or add additional
functionality to the Week 1 exercises as desired.

**NOTE: COMPLETE ALL INSTALLATIONS**

Ask for assistance if you encounter any issues during the lab session.

Happy coding!

**References**

Week1 slides

<https://nodejs.org/en/>

<https://code.visualstudio.com/>
