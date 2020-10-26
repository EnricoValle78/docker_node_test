docker network create --driver bridge mongo-bridge


docker build -t pug .

docker run --network mongo-bridge -p 3000:3000 pug

docker run --network mongo-bridge --name mongo-db -d  mongo
