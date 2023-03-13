docker-compose -f docker-compose.yml down
docker rmi apinestincidencias:latest 
docker image prune

sudo rm -rf postgres
sudo rm -rf web