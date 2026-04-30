<div align="center">
  <h1>📖 Vira-Página</h1>

  <h2>Plataforma online para troca de livros usados ou novos, conectando leitores de forma simples e direta.</h2>
</div>

---

## 🧠 Sobre o projeto

O **Vira-Página** é uma aplicação web focada em troca de livros entre usuários.  
A proposta é criar uma experiência simples, rápida e acessível para leitores compartilharem obras entre si.

---

## 📱 Filosofia de desenvolvimento

O projeto segue a abordagem **Mobile First**, onde a interface é desenvolvida inicialmente para dispositivos móveis e posteriormente adaptada para telas maiores.

Isso garante:

- Melhor performance em dispositivos móveis
- Interface mais limpa e objetiva
- Escalabilidade responsiva com media queries

---

## ♾️ Fluxo de desenvolvimento (Git Flow simplificado)

O projeto segue um fluxo organizado para garantir segurança e qualidade no código.

```text
feature/* → development → main
```

### 🧠 Estrutura das branches
- main → versão estável (produção)
- development → integração e testes
- feature/* → novas funcionalidades
- fix/* → correções de bugs

### 1° ➝‬ Criar branch a partir da development

```bash
git checkout development
git checkout -b feature/nova-funcionalidade
```


#### 2° ➝‬ Desenvolver a funcionalidade

#### 3° ➝‬ Fazer commit das alterações

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
```

#### 4° ➝‬ Enviar para o repositório
```bash
git push origin feature/nova-funcionalidade
```

#### 5° ➝‬ Abrir Pull Request
```text
feature/* → development
```

#### 6° ➝‬ Merge final
```text
development → main
```

### ⚠️ Regras importantes
- ❌ Nunca fazer push direto na main
- ✔ Sempre passar por development
- ✔ Cada feature deve ser pequena e focada
- ✔ Pull Requests devem ser claros e descritivos

---

## ⚙️ Tecnologias utilizadas

### Front-end

<img src="https://skillicons.dev/icons?i=html" title="HTML5" /> <img src="https://skillicons.dev/icons?i=css" title="CSS3" /> <img src="https://skillicons.dev/icons?i=js" title="JavaScript"/>

### Design

<img src="https://skillicons.dev/icons?i=figma" title="Figma" />

### Tools

<img src="https://skillicons.dev/icons?i=vscode" title="VSCode"/> <img src="https://skillicons.dev/icons?i=netlify" title="Netlify" />

---

## 🚀 Como rodar o projeto

```bash
# clonar o repositório
git clone git@github.com:jpjotz/Trabalho-Final-Web.git

# abrir o projeto
abrir index.html com Live Server
