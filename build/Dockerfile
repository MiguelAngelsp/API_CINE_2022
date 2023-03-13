FROM node:16 as install
LABEL stage=install

ARG DB_HOST
ARG DB_NAME
ARG DB_PORT
ARG DB_USER
ARG DB_PASS
ARG NEST_PORT

ENV DB_HOST=${DB_HOST}
ENV DB_NAME=${DB_NAME}
ENV DB_PORT=${DB_PORT}
ENV DB_USER=${DB_USER}
ENV DB_PASS=${DB_PASS}
ENV NEST_PORT=${NEST_PORT}

WORKDIR /app
COPY ./api_nest/package.json .
COPY ./api_nest/yarn.lock .
RUN yarn install --force

COPY ./api_nest .
RUN yarn build
RUN yarn config set network-timeout 60000
RUN yarn install --production=true

FROM nginx:1.19.0-alpine as deploy
COPY --frominstall /app/dist/main.js /usr/share/nginx/html/index.js
COPY --frominstall /app/dist/node_modules /usr/share/nginx/html/node_modules
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]

# ENTRYPOINT ["tail", "-f", "/dev/null"]
# ENTRYPOINT ["node", "main.js"]

#FROM ub-base
# FROM ubuntu

# WORKDIR /root

# ARG DEBIAN_FRONTEND=noninteractive
# RUN apt update && apt-get install -y -q --no-install-recommends \
#     apt-utils \
#     wget \ 
#     curl \ 
#     git \
#     nano \ 
#     sudo \ 
#     unzip \
#     dos2unix \ 
#     expect \
#     python3 \
#     ca-certificates \
#     gnupg2 \
#     nginx 



# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


# ARG USUARIO
# ARG PASSWD
# ARG PROYECTO
# ARG DB_HOST
# ARG DB_NAME
# ARG DB_PORT
# ARG DB_USERNAME
# ARG DB_PASSWORD
# ARG URL_Repo_GIT
# ARG NEST_PORT
# ARG TZ

# ENV USUARIO=${USUARIO}
# ENV PASSWD=${PASSWD}
# ENV PROYECTO=${PROYECTO}
# ENV DB_HOST=${DB_HOST}
# ENV DB_NAME=${DB_NAME}
# ENV DB_PORT=${DB_PORT}
# ENV DB_USERNAME=${DB_USERNAME}
# ENV DB_PASSWORD=${DB_PASSWORD}
# ENV URL_Repo_GIT=${URL_Repo_GIT}
# ENV NEST_PORT=${NEST_PORT}
# ENV TZ=${TZ}

# WORKDIR /app
# COPY ./api_nest/package.json .
# COPY ./api_nest/yarn.lock .
# RUN yarn install --force

# COPY ./api_nest .
# RUN yarn build

# WORKDIR /app/dist

# EXPOSE 3005

# ENTRYPOINT ["tail", "-f", "/dev/null"]
# ENTRYPOINT ["node", "main.js"]
   

# RUN dos2unix /root/start.sh 
# RUN echo "$USUARIO, $PROYECTO, $DB_NAME" > /home/datos_dfile.txt


# install nvm
# ENV NVM_DIR /usr/local/nvm
# ENV NODE_VERSION 18.1.0
# RUN curl --silent -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
# # install node and npm
# RUN ~/.bashrc $NVM_DIR/nvm.sh \
#     && nvm install $NODE_VERSION \
#     && nvm alias default $NODE_VERSION \
#     && nvm use default

# COPY ./start.sh /root
# COPY ./docker/apicine2022/start-nest.sh /root
# COPY ./conf/nginx.conf /root

# COPY ./conf/nodesource.list /etc/apt/sources.list.d/
# RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - 
# RUN apt-get update && apt-get install -y nodejs
# # RUN apt-get update && apt-get install -y -q --no-install-recommends \
# #     nodejs

# COPY ./docker/apicine2022/start-nest.sh /root
# RUN chmod +x /root/start-nest.sh
# RUN dos2unix /root/start-nest.sh 

# EXPOSE 80
# ENTRYPOINT [ "/root/start-nest.sh" ]