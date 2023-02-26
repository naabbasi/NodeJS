docker rmi image exporess/prodction
docker build -t "exporess/prodction:latest" .
docker run --rm --name nodejs -it -p8000:8000 exporess/prodction:latest