# ✅ Gerenciador de Tarefas — Meu Primeiro Projeto em React
Olá! Esse é o meu **primeiro projeto desenvolvido com React**, criado enquanto aprendia os conceitos fundamentais do framework. A ideia foi simples: construir um **gerenciador de tarefas** funcional onde o usuário pode adicionar, concluir e deletar tarefas — e que mantém tudo salvo mesmo depois de fechar o navegador!
---
## 🚀 Funcionalidades
- ➕ **Adicionar tarefas** com título e descrição
- ✅ **Marcar como concluída** ao clicar na tarefa
- 🗑️ **Deletar tarefas** da lista
- 💾 **Persistência de dados** via LocalStorage (os dados ficam salvos no navegador)
---
## 🛠️ Tecnologias utilizadas
| Tecnologia | Por que usei |
|---|---|
| [React 18](https://react.dev/) | Biblioteca principal para construir a interface |
| [Vite](https://vitejs.dev/) | Ferramenta de build rápida para desenvolvimento |
| [React Router DOM](https://reactrouter.com/) | Navegação entre páginas |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização da interface de forma prática |
| [Lucide React](https://lucide.dev/) | Ícones bonitos e leves |
| [UUID](https://www.npmjs.com/package/uuid) | Geração de IDs únicos para cada tarefa |
| LocalStorage | Salvar as tarefas no próprio navegador do usuário |
---
## 📁 Estrutura do projeto
src/ ├── components/ │ ├── AddTasks.jsx → Formulário para adicionar nova tarefa │ ├── Tasks.jsx → Lista de tarefas │ ├── Button.jsx → Botão reutilizável │ ├── Input.jsx → Campo de entrada reutilizável │ └── Title.jsx → Título da página ├── pages/ │ └── TaskPage.jsx → Página principal de tarefas ├── App.jsx → Componente raiz com toda a lógica └── main.jsx → Ponto de entrada da aplicação

---
## 💡 O que aprendi com esse projeto
Esse projeto foi meu laboratório de aprendizagem! Principais conceitos que pratiquei:
- **`useState`** — para guardar e atualizar a lista de tarefas
- **`useEffect`** — para salvar as tarefas no LocalStorage sempre que a lista mudava
- **Props** — para passar informações e funções entre os componentes
- **Componentização** — dividir a interface em componentes pequenos e reutilizáveis
- **Manipulação de arrays** — adicionar, filtrar e mapear objetos para atualizar o estado
---
## ▶️ Como rodar o projeto localmente
Certifique-se de ter o **Node.js** instalado. Depois siga os passos:
```bash
# Clone o repositório
git clone https://github.com/wesley1271/Projeto-React.git
# Entre na pasta do projeto
cd Projeto-React
# Instale as dependências
npm install
# Inicie o servidor de desenvolvimento
npm run dev
