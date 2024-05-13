# Lab Session 1 - Setting up Development Environment

## Exercise 1: Node.js Installation

``` sh
node --v
```

You should see the Node.js version number displayed:

```
v20.12.0
```

## Exercise 2: MongoDB installation

<https://www.mongodb.com/try/download/community>

download the appropriate MongoDB for your operating system.

Run the installer and follow the on-screen instructions to complete the
installation.

## Exercise 3: Mongosh

<https://www.mongodb.com/try/download/shell>

download the appropriate Mongosh for your operating system.

Run the installer and follow the on-screen instructions to complete the
installation.

Test your MongoDB: Follow the step by step instructions on the slide.

```
$ mongod
{"t":{"$date":"2024-05-06T19:56:08.890+00:00"},"s":"I",  "c":"NETWORK",  "id":4915701, "ctx":"-","msg":"Initialized wire specification","attr":{"spec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":17},"incomingInternalClient":{"minWireVersion":0,"maxWireVersion":17},"outgoing":{"minWireVersion":6,"maxWireVersion":17},"isInternalClient":true}}}
{"t":{"$date":"2024-05-06T19:56:08.890+00:00"},"s":"I",  "c":"CONTROL",  "id":23285,   "ctx":"-","msg":"Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'"}
{"t":{"$date":"2024-05-06T19:56:08.892+00:00"},"s":"I",  "c":"NETWORK",  "id":4648601, "ctx":"main","msg":"Implicit TCP FastOpen unavailable. If TCP FastOpen is required, set tcpFastOpenServer, tcpFastOpenClient, and tcpFastOpenQueueSize."}
{"t":{"$date":"2024-05-06T19:56:08.893+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"TenantMigrationDonorService","namespace":"config.tenantMigrationDonors"}}
{"t":{"$date":"2024-05-06T19:56:08.893+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"TenantMigrationRecipientService","namespace":"config.tenantMigrationRecipients"}}
{"t":{"$date":"2024-05-06T19:56:08.893+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"ShardSplitDonorService","namespace":"config.tenantSplitDonors"}}
{"t":{"$date":"2024-05-06T19:56:08.893+00:00"},"s":"I",  "c":"CONTROL",  "id":5945603, "ctx":"main","msg":"Multi threading initialized"}
{"t":{"$date":"2024-05-06T19:56:08.894+00:00"},"s":"I",  "c":"CONTROL",  "id":4615611, "ctx":"initandlisten","msg":"MongoDB starting","attr":{"pid":3285,"port":27017,"dbPath":"/data/db","architecture":"64-bit","host":"7ec4dcc01455"}}
{"t":{"$date":"2024-05-06T19:56:08.894+00:00"},"s":"I",  "c":"CONTROL",  "id":23403,   "ctx":"initandlisten","msg":"Build Info","attr":{"buildInfo":{"version":"6.0.15","gitVersion":"7494119c41ca4e13b493e9f048df4032164e860e","openSSLVersion":"OpenSSL 1.1.1w  11 Sep 2023","modules":[],"allocator":"tcmalloc","environment":{"distmod":"debian11","distarch":"x86_64","target_arch":"x86_64"}}}}
{"t":{"$date":"2024-05-06T19:56:08.894+00:00"},"s":"I",  "c":"CONTROL",  "id":51765,   "ctx":"initandlisten","msg":"Operating System","attr":{"os":{"name":"PRETTY_NAME=\"Debian GNU/Linux 11 (bullseye)\"","version":"Kernel 6.5.0-1018-azure"}}}
{"t":{"$date":"2024-05-06T19:56:08.894+00:00"},"s":"I",  "c":"CONTROL",  "id":21951,   "ctx":"initandlisten","msg":"Options set by command line","attr":{"options":{}}}
{"t":{"$date":"2024-05-06T19:56:08.894+00:00"},"s":"E",  "c":"CONTROL",  "id":20568,   "ctx":"initandlisten","msg":"Error setting up listener","attr":{"error":{"code":9001,"codeName":"SocketException","errmsg":"Address already in use"}}}
{"t":{"$date":"2024-05-06T19:56:08.894+00:00"},"s":"I",  "c":"REPL",     "id":4784900, "ctx":"initandlisten","msg":"Stepping down the ReplicationCoordinator for shutdown","attr":{"waitTimeMillis":15000}}
{"t":{"$date":"2024-05-06T19:56:08.895+00:00"},"s":"I",  "c":"REPL",     "id":4794602, "ctx":"initandlisten","msg":"Attempting to enter quiesce mode"}
{"t":{"$date":"2024-05-06T19:56:08.895+00:00"},"s":"I",  "c":"-",        "id":6371601, "ctx":"initandlisten","msg":"Shutting down the FLE Crud thread pool"}
{"t":{"$date":"2024-05-06T19:56:08.895+00:00"},"s":"I",  "c":"COMMAND",  "id":4784901, "ctx":"initandlisten","msg":"Shutting down the MirrorMaestro"}
{"t":{"$date":"2024-05-06T19:56:08.895+00:00"},"s":"I",  "c":"SHARDING", "id":4784902, "ctx":"initandlisten","msg":"Shutting down the WaitForMajorityService"}
{"t":{"$date":"2024-05-06T19:56:08.895+00:00"},"s":"I",  "c":"NETWORK",  "id":4784905, "ctx":"initandlisten","msg":"Shutting down the global connection pool"}
{"t":{"$date":"2024-05-06T19:56:08.895+00:00"},"s":"I",  "c":"NETWORK",  "id":4784918, "ctx":"initandlisten","msg":"Shutting down the ReplicaSetMonitor"}
{"t":{"$date":"2024-05-06T19:56:08.895+00:00"},"s":"I",  "c":"SHARDING", "id":4784921, "ctx":"initandlisten","msg":"Shutting down the MigrationUtilExecutor"}
{"t":{"$date":"2024-05-06T19:56:08.896+00:00"},"s":"I",  "c":"ASIO",     "id":22582,   "ctx":"MigrationUtil-TaskExecutor","msg":"Killing all outstanding egress activity."}
{"t":{"$date":"2024-05-06T19:56:08.896+00:00"},"s":"I",  "c":"COMMAND",  "id":4784923, "ctx":"initandlisten","msg":"Shutting down the ServiceEntryPoint"}
{"t":{"$date":"2024-05-06T19:56:08.896+00:00"},"s":"I",  "c":"CONTROL",  "id":4784928, "ctx":"initandlisten","msg":"Shutting down the TTL monitor"}
{"t":{"$date":"2024-05-06T19:56:08.896+00:00"},"s":"I",  "c":"CONTROL",  "id":6278511, "ctx":"initandlisten","msg":"Shutting down the Change Stream Expired Pre-images Remover"}
{"t":{"$date":"2024-05-06T19:56:08.896+00:00"},"s":"I",  "c":"CONTROL",  "id":4784929, "ctx":"initandlisten","msg":"Acquiring the global lock for shutdown"}
{"t":{"$date":"2024-05-06T19:56:08.896+00:00"},"s":"I",  "c":"-",        "id":4784931, "ctx":"initandlisten","msg":"Dropping the scope cache for shutdown"}
{"t":{"$date":"2024-05-06T19:56:08.896+00:00"},"s":"I",  "c":"CONTROL",  "id":20565,   "ctx":"initandlisten","msg":"Now exiting"}
{"t":{"$date":"2024-05-06T19:56:08.896+00:00"},"s":"I",  "c":"CONTROL",  "id":8423404, "ctx":"initandlisten","msg":"shutdownTask complete","attr":{"Summary of time elapsed":{"Statistics":{"Enter terminal shutdown":"0 ms","Step down the replication coordinator for shutdown":"1 ms","Time spent in quiesce mode":"0 ms","Shut down FLE Crud subsystem":"0 ms","Shut down MirrorMaestro":"0 ms","Shut down WaitForMajorityService":"0 ms","Shut down the global connection pool":"0 ms","Shut down the replica set monitor":"0 ms","Shut down the migration util executor":"1 ms","Shut down the TTL monitor":"0 ms","Shut down expired pre-images remover":"0 ms","Shut down full-time data capture":"0 ms","shutdownTask total elapsed time":"2 ms"}}}}
{"t":{"$date":"2024-05-06T19:56:08.896+00:00"},"s":"I",  "c":"CONTROL",  "id":23138,   "ctx":"initandlisten","msg":"Shutting down","attr":{"exitCode":48}}
```

``` sh
$ mongosh
Current Mongosh Log ID: 663936380ec980a0182202d7
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5
Using MongoDB:          7.0.9
Using Mongosh:          2.2.5

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-05-06T19:52:47.535+00:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
   2024-05-06T19:52:48.107+00:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   2024-05-06T19:52:48.107+00:00: /sys/kernel/mm/transparent_hugepage/enabled is 'always'. We suggest setting it to 'never' in this binary version
   2024-05-06T19:52:48.107+00:00: vm.max_map_count is too low
------

test> 
```
## Exercise 4: VS Code installation

Go to <https://code.visualstudio.com/download> and

download the appropriate version of VS Code for your operating system.

Run the installer and follow the on-screen instructions to complete the
installation.

Once installed, launch VS Code and familiarize yourself with the
interface.

## Exercise 5: Developing ES6+ Modules with VS Code

Open VS Code. Open a new folder (File/Open folder...). Name the folder
**lab-session-1**.

Open a new Terminal window (Terminal menu, select new).

``` sh
/lab-session-1 $ node main.js 
42
42
```

To create the **package.json** file, type **npm init -y** in the
terminal window and accept defaults as below:

``` sh
/lab-session-1 $ npm init -y
Wrote to /workspaces/comp229/lab-session-1/package.json:
```

```
{
  "name": "lab-session-1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

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

``` js
export function halfOf(x) {
    return x / 2;
}
export function multiply(x, y) {
    return x * y;
}
```

Create another JavaScript file named **main.js** and copy the following
code:

``` js
import {halfOf, multiply} from './lib.js';
//
console.log(halfOf(84));
console.log(multiply(21, 2));
```

In the terminal window, run the main.js by issuing the following
command:

\> **node main**

```
node main.js 
42
42
```

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
