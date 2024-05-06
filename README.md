# comp229

Import the public key used by the package management system.

``` sh
RUN wget -qO - https://www.mongodb.org/static/pgp/server-3.0.asc | sudo apt-key add -

```

Create a list file for MongoDB.

``` sh
RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
```

Reload local package database.

``` sh
RUN sudo apt-get update
```

Install the MongoDB packages.

``` sh
RUN sudo apt-get install -y mongodb-org
```

