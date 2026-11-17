docker run -d --name user-db-sql -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=my-data-base -p 3307:3306 mysql:8
docker ps (Use esse comando para listar os containers e verificar o CONTAINER ID que será utilizado no comando seguinte)
docker exec -it (CONTAINER ID) mysql -u root -p
usemy-data-base



Crie uma pasta e entre nela
Insira o comando a seguir para iniciar um projeto node: npm init -y
Entrar no package.json e alterar "type" para "module"
Adicionar ',' depois de "test" e acrescentar: "dev": "node --watch server.js"
Instalar as bibliotecas que iremos utilizar com o comando: npm install fastify uuid dotenv mysql2 @fastify/cors




 id              | varchar(36)  | NO   | PRI | NULL    |       |
| nome            | varchar(100) | NO   |     | NULL    |       |
| categoria       | varchar(100) | NO   |     | NULL    |       |
| numero_de_serie | varchar(255) | NO   |     | NULL    |       |
| status          | varchar(20)  | NO   |     | NULL    |       |
| data_aquisicao 