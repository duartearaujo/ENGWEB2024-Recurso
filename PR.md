Primeiramente, o setup da base de dados foi feito correndo o seguinte comando:
`sudo docker run -d -p 27017:27017 --name mongo mongo`

Após isso, utilizei a app **MongoDB Compass** para fazer a conexão na porta 27017 e criar a base de dados e a respetiva coleção, e popular a mesma com o dataset em json, já modificado pelo script python que foi criado para o efeito, denominado normalize2.py. As strings com valores numéricos passaram a ser, efetivamente, números, e os campos com strings que representavam listas passaram também a ser arrays.

#### Comandos para execução dos exercícios:
1-
`npm install`
`npm start`

2-
`npm install`
`node app.js`


