echo "Desplegando la app de gstión de un Cine"
# export DOCKER_HOST="tcp://127.0.0.1"
# docker -H tcp://0.0.0.0:2376
export DOCKER_HOST="tcp://localhost:5432"
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/build/docker-compose.yml build
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/build/docker-compose.yml down
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/build/docker-compose.yml up -d