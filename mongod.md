## Install MongoDB
title="Permalink to this headline">¶</a>

1

### Import the public key used by the package management system.
class="headerlink" title="Permalink to this headline">¶</a>

From a terminal, issue the following command to import the MongoDB
public GPG Key from
<a href="https://www.mongodb.org/static/pgp/server-3.0.asc"
class="reference external">https://www.mongodb.org/static/pgp/server-3.0.asc</a>:

<span class="code-button--copy code-button" role="button">copy</span>

copied

    wget -qO - https://www.mongodb.org/static/pgp/server-3.0.asc | sudo apt-key add -

The operation should respond with an <span class="pre">`OK`</span>.

2

### Create a list file for MongoDB.
title="Permalink to this headline">¶</a>

Create the
<span class="pre">`/etc/apt/sources.list.d/mongodb-org-3.0.list`</span>
list file using the command appropriate for your version of Ubuntu:

Ubuntu 12.04

<span class="code-button--copy code-button" role="button">copy</span>

copied

    echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

Ubuntu 14.04

<span class="code-button--copy code-button" role="button">copy</span>

copied

    echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

3

### Reload local package database.
title="Permalink to this headline">¶</a>

Issue the following command to reload the local package database:

<span class="code-button--copy code-button" role="button">copy</span>

copied

    sudo apt-get update

4

### Install the MongoDB packages.
title="Permalink to this headline">¶</a>

You can install either the latest stable version of MongoDB or a
specific version of MongoDB.

#### Install the latest stable version of MongoDB.
class="headerlink" title="Permalink to this headline">¶</a>

Issue the following command:

<span class="code-button--copy code-button" role="button">copy</span>

copied

    sudo apt-get install -y mongodb-org

#### Install a specific release of MongoDB.
title="Permalink to this headline">¶</a>

To install a specific release, you must specify each component package
individually along with the version number, as in the following example:

<span class="code-button--copy code-button" role="button">copy</span>

copied

    sudo apt-get install -y mongodb-org=3.0.15 mongodb-org-server=3.0.15 mongodb-org-shell=3.0.15 mongodb-org-mongos=3.0.15 mongodb-org-tools=3.0.15

If you only install <span class="pre">`mongodb-org=3.0.15`</span> and do
not include the component packages, the latest version of each MongoDB
package will be installed regardless of what version you specified.

#### Pin a specific version of MongoDB.
title="Permalink to this headline">¶</a>

Although you can specify any available version of MongoDB,
<span class="pre">`apt-get`</span> will upgrade the packages when a
newer version becomes available. To prevent unintended upgrades, pin the
package. To pin the version of MongoDB at the currently installed
version, issue the following command sequence:

<span class="code-button--copy code-button" role="button">copy</span>

copied

    echo "mongodb-org hold" | sudo dpkg --set-selections
    echo "mongodb-org-server hold" | sudo dpkg --set-selections
    echo "mongodb-org-shell hold" | sudo dpkg --set-selections
    echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
    echo "mongodb-org-tools hold" | sudo dpkg --set-selections

Versions of the MongoDB packages before 2.6 use a different repository
location. Refer to the version of the documentation appropriate for your
MongoDB version.