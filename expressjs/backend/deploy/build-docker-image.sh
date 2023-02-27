sudo docker rmi image deploy_ecommece_app/latest
sudo docker build --progress=plain --no-cache -t "deploy_ecommece_app/latest" .
sudo docker run --rm --name nodejs -it -p8080:8080 deploy_ecommece_app/latest