
docker build -t testvolume .

docker run -it -e DIR_NAME=/app/resources -v /d/tmp:/app/resources --name test2 testvolume

docker stop test2

