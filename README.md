# node_docker
This project will help in understanding docker basic flow with nodejs

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
>docker run -p 3000:3000 loma/node

check the result at http://localhost:3000/
