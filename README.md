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
