echo "Desplegando la app de gstión de un Cine"
export DOCKER_HOST="http://192.168.16.163:5442"
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/build/docker-compose.yml build
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/build/docker-compose.yml down
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/build/docker-compose.yml up -d