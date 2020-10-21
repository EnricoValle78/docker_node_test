
docker build -t writefileimg -f Dockerfile_write .

docker build -t readfileimg .

docker run -it -e DIR_NAME=/app/resources -v /d/Courses/Docker_basic/docker_node_test/resources:/app/resources --name readFile readfileimg

docker run -it -e DIR_NAME=/app/resources -v /d/Courses/Docker_basic/docker_node_test/resources:/app/resources --name writeFile writefileimg



------------------------------------------------------
docker volume create resources

docker run -d -e DIR_NAME=/app/resources -e DEST_FILE_NAME=log.txt -v resources:/app/resources --name writefile writefileimg

docker run -d -e DIR_NAME=/app/resources -e DEST_FILE_NAME=pippo -v resources:/app/resources --name readfile readfileimg