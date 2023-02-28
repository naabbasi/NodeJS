sudo docker save --output deploy_ecommerce_app-latest.tar deploy_ecommerce_app:latest
sudo k3s ctr images rm docker.io/library/deploy_ecommerce_app:latest
sudo k3s ctr images import deploy_ecommerce_app-latest.tar
sudo k3s kubectl delete -f ecommerce-deployment.yaml
sudo k3s kubectl create -f ecommerce-deployment.yaml &
sudo kubectl logs -l name=ecommerce-app