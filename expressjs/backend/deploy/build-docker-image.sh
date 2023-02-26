docker rmi image deploy_ecommece_app/latest
docker build --progress=plain --no-cache -t "deploy_ecommece_app/latest" .
docker run --rm --name nodejs -it -p8080:8080 deploy_ecommece_app/latest