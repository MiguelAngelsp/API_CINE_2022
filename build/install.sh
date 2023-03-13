echo "Desplegando la app de gstión de un Cine"
docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/pCine/api_nest/docker-compose.yml build
# docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/pCine/api_nest/docker-compose.yml down
# docker-compose -f /var/lib/jenkins/workspace/Proyectos/Job-pCine/pCine/api_nest/docker-compose.yml up -d