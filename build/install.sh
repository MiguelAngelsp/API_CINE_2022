echo "Desplegando la app de gstión de un Cine"
export DOCKER_HOST="tcp://192.168.16.163:80"
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/build/docker-compose.yml build
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/build/docker-compose.yml down
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/build/docker-compose.yml up -d