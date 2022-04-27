# Advanced Prisma with MongoDB

This repository contains the starter project for the **Advanced Prisma with MongoDB** workshop by [Sabin Adams](https://twitter.com/sabintehdev).

## Setup

### 1. Clone this repository

You can clone this repository with the following command:

```
git clone git@github.com:sabinadams/prisma-mongodb-advanced-workshop.git
```

> Alternatively, you can also download the project via the GitHub UI. Click the green **Code**-button in the top-right corner and then click on **Download ZIP**.

### 2. Install dependencies

Navigate into the project directory and install the npm dependencies with the following command:

```
cd prisma-mongodb-workshop
npm install
```

### 3. Start local MongoDB instance via Docker

The `docker-compose.yml` file in this repo lets you spin up an instance of a MongoDB database via [Docker](https://www.docker.com/). Run the following command to start your MongoDB instance:

```
docker-compose up -d
```
