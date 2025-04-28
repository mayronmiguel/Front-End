# Lista de Tarefas

## Descrição

Este projeto é uma aplicação simples de **Lista de Tarefas**, desenvolvida utilizando **HTML** e **JavaScript** puro, com armazenamento local via `localStorage`.  
O objetivo é permitir que o usuário adicione, visualize, marque como concluída ou remova tarefas de forma prática e intuitiva.

---

## Funcionalidades

- Adicionar novas tarefas.
- Marcar tarefas como concluídas (checkbox).
- Remover tarefas da lista.
- Persistência de dados no navegador usando **localStorage**.

---

## Estrutura do Projeto

### HTML (`index.html`)

O arquivo HTML define a estrutura básica da página:

- Um título principal (`<h1>`).
- Um formulário (`<form>`) com:
  - Um campo de entrada (`<input>`) para digitar o título da tarefa.
  - Um botão (`<button>`) para adicionar a tarefa.
- Uma seção (`<section>`) contendo uma lista (`<ul>`) que será preenchida dinamicamente com as tarefas.
- Inclusão do script JavaScript (`<script src="index.js"></script>`).

### JavaScript (`index.js`)

O JavaScript implementa toda a lógica da aplicação:

#### Seleção de Elementos

- `#todo-form`: Formulário de criação de tarefas.
- `#task-tilte-input`: Campo de entrada da tarefa (observação: há um pequeno erro de digitação em "tilte" que deveria ser "title").
- `#todo-list`: Lista de tarefas.

#### Variáveis

- `tasks`: Um array que armazena objetos de tarefas no formato `{ title: string, done: boolean }`.

#### Funções Principais

- **renderTasksOnHTML(taskTitle, done = false)**  
  Cria os elementos HTML (`<li>`, `<input>`, `<span>`, `<button>`) para exibir uma tarefa na tela:
  - Checkbox: Permite marcar a tarefa como feita ou não feita.
  - Span: Exibe o título da tarefa (riscado caso concluída).
  - Botão: Permite remover a tarefa.

- **window.onload**  
  Carrega as tarefas do `localStorage` (se existirem) e renderiza-as no carregamento da página.

- **Evento de 'submit' no formulário**  
  - Impede o recarregamento da página.
  - Valida se a tarefa tem pelo menos 3 caracteres.
  - Adiciona a nova tarefa ao array `tasks`.
  - Atualiza o `localStorage`.
  - Atualiza o HTML com a nova tarefa.
  - Limpa o campo de entrada.

---

## Como Usar

1. Abra o `index.html` em um navegador.
2. Digite uma tarefa no campo de entrada.
3. Clique em "Adicionar" para incluir a tarefa na lista.
4. Marque tarefas como concluídas clicando no checkbox.
5. Remova tarefas clicando no botão "Remover".

---

## Observações

- Corrigir o id `task-tilte-input` para `task-title-input` para melhor legibilidade e evitar confusão futura.
- O projeto usa apenas tecnologias básicas, ideal para iniciantes em desenvolvimento web.

---

## Tecnologias Utilizadas

- HTML5
- JavaScript (ES6)
- LocalStorage

---
