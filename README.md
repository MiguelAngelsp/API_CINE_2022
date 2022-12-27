
# 🎞️ PROYECTO INTEGRADO IAW

API-CINE 2022:
El proyecto surge ante la necesidad del diseño Back-End de una APIREST en NESTJS para la gestión de un servicio de streaming de películas. Se implementa la gestión de un servicio de streaming a través de una API REST en NESTJS y Postman para la construcción, prueba e iteración de la API sobre una base de datos PostgreSQL, almacenada en un contenedor docker.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabla de Contenidos**

- [🎞️ PROYECTO INTEGRADO IAW](#-proyecto-integrado-iaw)
  - [🔍 ¿En qué nos estamos basando para el desarrollo?](#-%C2%BFen-qu%C3%A9-nos-estamos-basando-para-el-desarrollo)
  - [💻 Instalación](#-instalaci%C3%B3n)
  - [📫 Postman, la herramienta de desarrollo de nuestro CRUD](#-postman-la-herramienta-de-desarrollo-de-nuestro-crud)
  - [🐳 Docker, runtime para contenedor con nuestra base de datos PostgreSQL](#-docker-runtime-para-contenedor-con-nuestra-base-de-datos-postgresql)
  - [📎 Estructuración del proyecto](#-estructuraci%C3%B3n-del-proyecto)
  - [📚 Documentación del desarrollo](#-documentaci%C3%B3n-del-desarrollo)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 🔍 ¿En qué nos estamos basando para el desarrollo?

- Modelo E-R que define nuestra base de datos:
![API_CINE - Database ER diagram (14-12-2022)](https://user-images.githubusercontent.com/114055167/207689060-3f97c60d-4907-447f-84fd-daac1fb2d298.png)

- Modelo de desarrollo que esboza qué queremos desarrollar:
![image](https://user-images.githubusercontent.com/114055167/207802084-fb5c8d03-faee-49df-81d7-ae12d6403c09.png)



## 💻 Instalación

- Para iniciar la instalación:
  ```bash
  $ npm i -g @nestjs/cli
  ```

- Para la creación del proyecto:
  ```bash
  $ nest new api
  ```

- Para instalar las librerías:
  - Copiamos las dependencias en nuestro archivo "package.json":
    ```bash
    "dependencies": {
      "@nestjs/common": "^9.0.0",
      "@nestjs/config": "^2.2.0",
      "@nestjs/core": "^9.0.0",
      "@nestjs/mapped-types": "^1.2.0",
      "@nestjs/platform-express": "^9.0.0",
      "@nestjs/typeorm": "^9.0.1",
      "class-transformer": "^0.5.1",
      "class-validator": "^0.13.2",
      "pg": "^8.8.0",
      "reflect-metadata": "^0.1.13",
      "rimraf": "^3.0.2",
      "rxjs": "^7.2.0",
      "typeorm": "^0.3.10"
    }
    ```
  - Y, lanzamos:
    ```bash
    $ npm install
    ```

- Para acceder e iniciar el proyecto:
  ```bash
  $ cd api
  $ yarn start:dev
  ```

##  📫 Postman, la herramienta de desarrollo de nuestro CRUD



## 🐳 Docker, runtime para contenedor con nuestra base de datos PostgreSQL

- **Un archivo DockerCompose**, que define y es la orquestación de nuestro contenedor Docker:
  ```bash
  version: '3.1'

  services:

    psql-db:
      image: postgres:12.1-alpine
      ports:
        - ${POSTGRES_PORT_EXTERNAL}:5432
      environment:
        - POSTGRES_USER=${DB_USER}
        - POSTGRES_PASSWORD=${DB_PASS}
        - POSTGRES_DB=${DB_NAME}
      volumes:
        - psql-db-data:/var/lib/postgresql/data
      networks:
        - ws-network

  volumes:
    psql-db-data:

  networks:
    ws-network:
  ```

- **App.module**, donde vamos a definir la conexión a nuestra base de datos PostgreSQL del contenedor docker meidante la llamada de variables definidas en un archivo .env:
  ```bash
  @Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: !!process.env.DB_SYNC
  }), UsuariosModule, PeliculasModule, ValoracionesModule, GenerosModule, CestaModule, AuthModule, SeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
  })
  ```

## 📎 Estructuración del proyecto
```bash
├── api
│  ├── .env
│  ├── .eslintrc.js
│  ├── .gitignore
│  ├── .prettierrc
│  ├── docker-compose.yml
│  ├── nest-cli.json
│  ├── package.json
│  ├── README.md
│  ├── src
│  │  ├── app.controller.spec.ts
│  │  ├── app.controller.ts
│  │  ├── app.module.ts
│  │  ├── app.service.ts
│  │  ├── main.ts
│  │  └── modulos
│  │    ├── auth
│  │    │  ├── auth.controller.ts
│  │    │  ├── auth.module.ts
│  │    │  ├── auth.service.ts
│  │    │  ├── dto
│  │    │  │  ├── create-user.dto.ts
│  │    │  │  └── update-auth.dto.ts
│  │    │  └── entities
│  │    │    └── user.entity.ts
│  │    ├── cesta
│  │    │  ├── cesta.controller.ts
│  │    │  ├── cesta.module.ts
│  │    │  ├── cesta.service.ts
│  │    │  ├── dto
│  │    │  │  ├── create-cesta.dto.ts
│  │    │  │  └── update-cesta.dto.ts
│  │    │  └── entities
│  │    │    └── cesta.entity.ts
│  │    ├── generos
│  │    │  ├── dto
│  │    │  │  ├── create-genero.dto.ts
│  │    │  │  └── update-genero.dto.ts
│  │    │  ├── entities
│  │    │  │  └── genero.entity.ts
│  │    │  ├── generos.controller.ts
│  │    │  ├── generos.module.ts
│  │    │  └── generos.service.ts
│  │    ├── peliculas
│  │    │  ├── dto
│  │    │  │  ├── create-pelicula.dto.ts
│  │    │  │  └── update-pelicula.dto.ts
│  │    │  ├── entities
│  │    │  │  └── pelicula.entity.ts
│  │    │  ├── peliculas.controller.ts
│  │    │  ├── peliculas.module.ts
│  │    │  └── peliculas.service.ts
│  │    ├── seed
│  │    │  ├── data
│  │    │  │  ├── cesta.json
│  │    │  │  ├── generos.json
│  │    │  │  ├── peliculas.json
│  │    │  │  ├── users.json
│  │    │  │  ├── usuarios.json
│  │    │  │  └── valoraciones.json
│  │    │  ├── seed.controller.ts
│  │    │  ├── seed.module.ts
│  │    │  └── seed.service.ts
│  │    ├── usuarios
│  │    │  ├── dto
│  │    │  │  ├── create-usuario.dto.ts
│  │    │  │  └── update-usuario.dto.ts
│  │    │  ├── entities
│  │    │  │  └── usuario.entity.ts
│  │    │  ├── usuarios.controller.ts
│  │    │  ├── usuarios.module.ts
│  │    │  └── usuarios.service.ts
│  │    └── valoraciones
│  │      ├── dto
│  │      │  ├── create-valoracion.dto.ts
│  │      │  └── update-valoracion.dto.ts
│  │      ├── entities
│  │      │  └── valoracion.entity.ts
│  │      ├── valoraciones.controller.ts
│  │      ├── valoraciones.module.ts
│  │      └── valoraciones.service.ts
│  ├── test
│  │  ├── app.e2e-spec.ts
│  │  └── jest-e2e.json
│  ├── tsconfig.build.json
│  ├── tsconfig.json
│  └── yarn.lock
└── README.md
```

## 📚 Documentación del desarrollo
![1](https://user-images.githubusercontent.com/114055167/208981281-48622890-974b-4678-a1c6-dd5557ddb49e.png)
![3](https://user-images.githubusercontent.com/114055167/208981300-4023be4a-f907-4646-8733-5430e818120c.png)
![4](https://user-images.githubusercontent.com/114055167/208981306-d0c536d6-8b66-4d9b-9238-b966c1d3bfb3.png)
![5](https://user-images.githubusercontent.com/114055167/208981312-dc5159f2-4962-47a7-a627-4a631d7501ac.png)
![6](https://user-images.githubusercontent.com/114055167/208981318-7ed8efd6-edb6-43d0-b8c5-6945a76d3e4f.png)
![7](https://user-images.githubusercontent.com/114055167/208981323-cf4b54fe-95d0-4bf2-bda9-5c649216e069.png)
![8](https://user-images.githubusercontent.com/114055167/208981330-df04c2f9-56d7-45e5-b3f7-6c701f9ade36.png)
![9](https://user-images.githubusercontent.com/114055167/208981372-5365aabf-b511-4315-b815-3eca8122922d.png)
![10](https://user-images.githubusercontent.com/114055167/208981375-bb5edfa1-83b9-4420-b291-8a0381c7de01.png)
![11](https://user-images.githubusercontent.com/114055167/208981380-fca325c9-568e-4500-968d-08ef777363c4.png)
![12](https://user-images.githubusercontent.com/114055167/208981383-bc24aea0-59a3-43ee-950d-88b99456b56f.png)
![13](https://user-images.githubusercontent.com/114055167/208981385-2f145490-d4e5-469d-91a0-29da013006b3.png)
![14](https://user-images.githubusercontent.com/114055167/208981390-e8204dbf-caad-4478-9742-97481eebf3e0.png)

