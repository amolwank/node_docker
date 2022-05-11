Docker with node
create emply repo
>git clone git@github.com:amolwank/node_docker.git
>npm init -y
npm install express --save

create a app.js and write a code

create Dockerfile and write a code

then build our image

>docker build -t loma/node:latest .

check the created image
>docker images
Run the docker image with port

>docker run -p 3000:3000 loma/node

check the result at http://localhost:3000/

>docker ps
>docker stop <container_id_intinal 3 to4 char only>

Running docker in deamon mode
>docker run -d -p 3000:3000 loma/node
https://amolwank.github.io/todayIlearn/
Interactive mode
First run 
>docker ps
take the container id and run below command
>docker exec -it f883 bash
If we just want to run something on the container like a node command, for example, we can type:

>docker exec 268 node app.js

Docker kill vs Docker stop
- docker stop, this sends the signal SIGTERM followed by SIGKILL after a grace period. In short, this is a way to bring down the container in a more graceful way meaning it gets to release resources and saving state.

- docker kill, this sends SIGKILL right away. This means resource release or state save might not work as intended. In Development, it doesn't really matter which one of the two commands are being used but in a production scenatio it probably wiser to rely on docker stop.

Cleaning up:

check the existing stopped containers 
>docker ps -a
>docker rm <c_i> <c_id2>

Creating and managing a volume
e.g. docker volume create [name of volume]
>docker volume create logs
check check volumes
>docker volume ls

remove volume currenlty not using
>docker volume prune

Remove a single volume

>docker volume rm [name of volume]

see more details on our created volume
>docker inspect logs

Mounting a volume in your application
>docker run -d -p 3000:3000 --name my-container --volume my-volume:/logs loma/node

>docker ps
conatainer id c7e6
>docker inspect c7e6

you will see
.....................
"Mounts": [
            {
                "Type": "volume",
                "Name": "my-volume",
                "Source": "/var/lib/docker/volumes/my-volume/_data",
                "Destination": "/logs",
                "Driver": "local",
                "Mode": "z",
                "RW": true,
                "Propagation": ""
            }
        ],
.................

 locate our volume inside of our container.
>docker exec -it my-container bash
conatainer>cd ..
you will see the /logs

Mounting a subdirectory as a volume:

Treating our application as a volume:
(--volume $(pwd):/app)
>docker kill my-container && docker rm my-container

install nodemon
npm install --save-dev nodemon

make changes in package.json in srcipts:

docker run -d -p 3000:3000 --name my-constainer --volume $(pwd):/app loma/node

you can add the endpoint in app.js and check the at url like  http://localhost:3000/nodemon
app.get('/nodemon', (req, res) => {
    res.send('Hello from nodemon');
});


MySql as stand alone image:

>docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=complexpassword -d -p 3306:3306 mysql

install mysql on local machin to connect to container mysql 
with vpn connected on local server
>sudo yum -y install @mysql


>docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=complexpassword -d -p 3307:3306 mysql

>mysql -uroot -pcomplexpassword -h 0.0.0.0 -P 3307

mysql> show databases;
mysql> CREATE DATABASE Customers;
mysql> USE Customers;
mysql> source /home/awankhede/developement/HOME_REPO/node_docker/database.sql;
mysql> show tables;


##Connecting to database from Node.js:


mysql> ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'complexpassword';
mysql> FLUSH PRIVILEGES;

Changes app.js and build it again

>docker build -t loma/node .
>docker run -d -p 3000:3000 --name my-container --link mysql-db:mysql loma/node

TO check container log:
>docker logs my-container

###creating networks or custom bridge networks
create the network
>docker network create --driver bridge isolated_network
>docker run -d -p 3000:3000 --net isolated_network --name my-container loma/node
>docker run -p 3307:3306 --net isolated_network --name mysql-db -e MYSQL_ROOT_PASSWORD=complexpassword -d mysql









 


