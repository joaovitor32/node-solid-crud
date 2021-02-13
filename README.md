<h1>SOLID</h1>
<div>
  <h3>Acronym:</h3>
  <h4>S - Single Responsibility</h4>
  <h4>O - Open - Closed</h4>
  <h4>L - Liskov substitution</h4>
  <h4>I - Interface segmentation</h4>
  <h4>D - Dependency inversion</h4>
</div>

<div>
  <h3>Definition:</h3>
  <h4>S - Uma única responsabilidade</h4>
  <h4>O - Uma classe aberta para extensôes mas não para modificações</h4>
  <h4>L - Substituir implementações que a classe depende mas não para modificações</h4>
  <h4>I - Não criar interfaces muito robustas</h4>
  <h4>D - As classes da implementação não devem depender de implementações e sim de interfaces</h4>
</div>

<div>
  <h3>Docker - Node:</h3>
  
    docker build -t <your-username>/dockernode . 
    docker run -p 3000:3000 -d <your-username>/dockernode
    To list images: docker ps

  <h3>Docker - Postres:</h3>
  
    docker run --name postgres -e POSTGRES_PASSWORD=secret -d -p 5432:5432 postgres


  <h3>Docker - compose:</h3>
  <p>To run node and postgres is necessary just the following command
  </p>
    
    docker-compose build
    docker-compose --env-file ./.env up  
 
 </div>

### User routes

- **`POST / users`**: The route must receive the fields `name`, `email` and`userPassword` in the body of the request in order to register a new user.

- **`GET / :id`**: The route must receive id in the body of the request in order to find a  user.

- **`DELETE / :id`**: The route must receive id in the body of the request in order to delete a  user.

- **`UPDATE / :id`**: The route must receive the fields `name`, `email` and`userPassword` in the body of the request in order to update a new user.

<h5>Example of .env file:</h5>

```user = postgres
host = node-solid-crud_db_1
database = simplecrud
password = postgres
portDB = 5432
portNode = 3000
host=0.0.0.0
```
<h5>If there is any problem:</h5>

```user = postgres

docker-compose stop
sudo rm -rf ./data/postgres/

```
