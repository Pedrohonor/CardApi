 Objetivo do Projeto
A Card API é uma aplicação backend desenvolvida com Java e o framework Spring Boot, que serve como base para um sistema de gerenciamento de figurinhas da Copa do Mundo. Seu objetivo é permitir a criação, consulta, atualização e remoção de figurinhas de jogadores, com dados como nome, número, posição, seleção e URL da imagem.

Essa API é ideal para ser usada em conjunto com um site ou aplicativo que exiba ou organize essas figurinhas.

🏗️ Tecnologias Utilizadas
Tecnologia	Finalidade
Java 17+	Linguagem principal
Spring Boot	Framework para criar APIs REST
Maven	Gerenciador de dependências
Spring Data JPA	Comunicação com banco de dados
H2 (ou outro)	Banco de dados relacional (pode ser local ou remoto)
IntelliJ IDEA	Ambiente de desenvolvimento sugerido

🔍 Explicação dos Componentes
📦 Card.java (Model)
Classe que representa os dados de uma figurinha:

-private Long id;

-private String name;
-private int number;
-private String position;
-private String team;
-private String imageUrl;

id: chave primária (gerada automaticamente)

name: nome do jogador

number: número da figurinha

position: posição do jogador em campo

team: seleção à qual pertence

imageUrl: link para a imagem da figurinha


🧠 CardService.java (Service)
Essa classe contém a lógica de negócio da aplicação. Ela recebe as chamadas do Controller e usa o Repository para acessar o banco de dados.

Funções:

Buscar todas as figurinhas

Buscar figurinha por ID

Criar nova figurinha

Atualizar uma existente

Deletar figurinha

🧰 CardRepository.java (Repository)
Interface que estende JpaRepository, fornecendo métodos prontos para:

findAll()

findById(id)

save(objeto)

deleteById(id)

Não é necessário escrever SQL manual.

🌐 CardController.java (Controller)
É o ponto de entrada da API. Define os endpoints REST, como:

Método HTTP	Endpoint	Descrição
GET	/cards	Lista todas as figurinhas
GET	/cards/{id}	Retorna uma figurinha por ID
POST	/cards	Cadastra uma nova figurinha
PUT	/cards/{id}	Atualiza uma figurinha existente
DELETE	/cards/{id}	Remove uma figurinha

▶️ Como Executar o Projeto
Pré-requisitos:

Java 17 ou superior

Maven

Passos:

Abrir o projeto no IntelliJ IDEA

Rodar o projeto pela classe CardApiApplication.java

Ou via terminal:
./mvnw spring-boot:run
A API estará acessível em:
📍 http://localhost:8080/cards

🧪 Testes
O arquivo CardApplicationTests.java contém testes básicos para verificar se a aplicação sobe corretamente.

Para rodar testes:
./mvnw test

🚀 Possibilidades de Expansão
Você pode:

-Conectar a um banco de dados PostgreSQL na nuvem

-Adicionar autenticação (JWT)

-Criar uma interface web (com React, Angular ou outro)

-Gerar QR Codes com os dados das figurinhas

-Permitir upload de imagem ao invés de usar URL

📝 Conclusão
A Card API é um projeto organizado, ideal como base para aplicativos que lidam com dados de figurinhas esportivas. Sua estrutura segue boas práticas com divisão clara entre camadas (Model, Repository, Service e Controller) e uso eficiente de Spring Boot e JPA.
