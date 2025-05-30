📄 Documentação Técnica — Back-End Node.js com PostgreSQL (Neon)
🔧 Visão Geral
Este projeto implementa um sistema de gerenciamento de cards de jogadores utilizando Node.js e PostgreSQL via Neon (serverless). A conexão com o banco de dados é configurada com segurança usando variáveis de ambiente.

🗂️ Estrutura dos Arquivos

  db.js
-Configura a conexão com o banco de dados PostgreSQL através de @neondatabase/serverless.

-As credenciais são carregadas do arquivo .env com dotenv para manter a segurança.

-Exporta o objeto sql para execução de consultas SQL.

  jogadorController.js
Contém as funções para manipulação dos cards:

-buscarCards(): Retorna todos os cards, ordenados por ID de forma decrescente.

-buscarCardId(req, res): Busca um card específico por ID.

-adicionarCard(req, res): Insere um novo card no banco de dados.

-atualizarCard(req, res): Atualiza um card existente. 

-deletarCard(req, res): Remove um card do banco de dados.

  jogadorRoutes.js
Define as rotas para as operações sobre os cards:

-GET /cards/: Chama buscarCards()

-GET /cards/:id: Chama buscarCardId()

-POST /cards/: Chama adicionarCard()

-PUT /cards/:id: Chama atualizarCard()

-DELETE /cards/:id: Chama deletarCard()

  server.js
Configura o servidor com Express.

Habilita CORS e parsing de JSON.

Carrega as rotas e cria automaticamente a tabela cards caso ela não exista.

Inicia o servidor na porta definida em process.env.PORT.

🌐 Variáveis de Ambiente (.env)

 -PGDATABASE=neondb

 -PGPASSWORD=...

 -PGUSER=neondb_owner

 -PGHOST=...

 -PORT=3000

📦 Tecnologias Usadas

 -Node.js

 -Express

 -PostgreSQL (Neon)

 -dotenv

 -cors

 -@neondatabase/serverless

✅ Observações

Arquitetura modular, com controllers e rotas bem definidos.

Uso seguro de credenciais com o arquivo .env.

Escalável e pronto para ser hospedado em ambientes serverless ou containers.

Ideal para sistemas que precisam manipular dados relacionais de forma eficiente.
