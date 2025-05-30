
📁 Estrutura e Explicação do Front-end - CRUD Figurinhas da Copa

🛠️ Tecnologias Utilizadas:
- React Native: Framework principal usado para criar o app mobile.
- JavaScript (ES6): Linguagem de programação usada nos componentes.
- React Navigation: Para navegação entre telas (Home, Add, Edit).
- StyleSheet: Para estilos customizados com CSS-in-JS.
- Imagens locais: Ícones e plano de fundo salvos na pasta /imagens.

🗂️ Estrutura de Pastas:
src/
│
├── componentes/
│   ├── home.js          ← Tela inicial com listagem dos cards
│   ├── add.js           ← Tela para adicionar nova figurinha
│   ├── edit.js          ← Tela para editar uma figurinha existente
│   ├── homeStyles.js    ← Estilização da tela Home
│   ├── addStyles.js     ← Estilização da tela Add
│   └── editStyles.js    ← Estilização da tela Edit
│
├── imagens/             ← Contém imagens utilizadas no app (plano de fundo, ícones, etc)
│
├── App.js               ← Arquivo principal que inicializa as rotas
├── index.js             ← Ponto de entrada da aplicação

🧩 Explicação das Telas

🏠 Home.js (Tela inicial)
- Exibe todos os cards cadastrados em um ScrollView.
- Mostra nome, número, posição, seleção e imagem do jogador.
- Botões de editar (ícone de lápis) e excluir (ícone de lixeira).
- Botão flutuante + leva à tela Add.
- Usa imagem de fundo e SafeAreaView para layout responsivo.

➕ Add.js (Adicionar Figurinha)
- Campos de input: Nome, Número, Posição, Seleção e URL da imagem.
- Preview da imagem digitada via URL.
- Dois botões: LISTAR (volta para home) e ADD (executaria o cadastro).
- Os dados ainda não estão conectados a um backend, mas a estrutura está pronta para isso.

✏️ Edit.js (Editar Figurinha)
- Preenche os campos com os dados do card selecionado.
- Permite editar nome, seleção, número e posição.
- Botões VOLTAR (cancela a edição) e SALVAR (console.log com os dados).
- Exibe a imagem atual da figurinha no topo.
- Usa KeyboardAvoidingView para evitar sobreposição do teclado nos campos.

💡 Observações
- Os dados dos cards são armazenados em um useState, mas ainda não persistem (sem banco local ou API).
- A navegação entre telas está funcionando com navigation.navigate() e navigation.goBack().
- Visual moderno com imagem de fundo, cantos arredondados, fontes personalizadas, e organização limpa.
- Layout responsivo com uso de Dimensions para dimensionar os cards com base no tamanho da tela.
- Algumas funções como "salvar" e "adicionar" ainda não persistem os dados (ponto a desenvolver).
