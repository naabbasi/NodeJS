sudo docker save --output deploy_ecommerce_app-latest.tar deploy_ecommerce_app:latest
sudo k3s ctr images import deploy_ecommerce_app-latest.tar