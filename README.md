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

  <h3>Docker - compose:</h3>
  <p>To run node and postgres is necessary just the following command
  </p>
  
    docker-compose up
 </div>
