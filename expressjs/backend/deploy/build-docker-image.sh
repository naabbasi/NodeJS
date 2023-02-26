docker rmi image express/prodction
docker build --progress=plain --no-cache -t "express/prodction:latest" .
docker run --rm --name nodejs -it -p8000:8000 express/prodction:latest