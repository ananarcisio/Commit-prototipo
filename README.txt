==========================================================================
COMMIT! — SISTEMA WEB EDUCACIONAL DE PROGRAMAÇÃO
Equipe: Grupo 3 - 2026.2
Tecnologias: HTML5, CSS3, Vanilla JavaScript, localStorage
Paleta Oficial: Primary (#17324D), Secondary (#0D8FA8), Surface (#CAD7E4),
                Background (#F8FAFC), Error (#A61B1B), Success (#1B5E20)
==========================================================================

1. APRESENTAÇÃO DO PROJETO
O Commit! é uma plataforma web educacional voltada para estudantes de
programação (12 a 17 anos), com o objetivo de apoiar a prática de código por meio
de desafios guiados, organizados por nível de dificuldade, com acompanhamento de
progresso, desbloqueio de conquistas e entrega de repositórios via GitHub.

A interface foi rigorosamente desenvolvida com base nas telas do Figma e nos
tokens do Design System oficial (DESIGN.md e Relatório IHC v3.0), aplicando a
paleta de cores oficial de forma viva, estruturada e equilibrada.


2. APLICAÇÃO DA PALETA DE CORES DO DESIGN SYSTEM (REGRA OBRIGATÓRIA)

A aplicação NÃO possui aparência genérica, cinzenta ou monocromática. As cores
da identidade visual do Commit! estão distribuídas com forte hierarquia:

- PRIMARY (#17324D — Azul-marinho):
  Utilizado na barra lateral ativa, no banner "Você pode explorar", nos títulos principais,
  nos botões de ação primária ("Abrir desafio", "Vamos lá", "Concluir"), no cabeçalho
  dos modais, nas bordas destacadas e nas sombras marcadas dos componentes.

- SECONDARY (#0D8FA8 — Azul-petróleo / Ciano):
  Utilizado no logotipo inclinado Commit!, nas estrelas e detalhes gráficos, nas barras de
  progresso preenchidas, nos balões sociais da comunidade, nos botões de destaque,
  nos badges e na borda superior dos cards de nível iniciante.

- SURFACE (#CAD7E4 — Superfície Azulada):
  Utilizado como plano de fundo de cartões e painéis, garantindo contraste superior a 12:1
  com os textos pretos e elementos da interface.

- BACKGROUND (#F8FAFC — Fundo Claro):
  Base de todas as páginas, integrado a uma malha técnica pontilhada com cruzes em tom
  marinho sutil, reproduzindo a estética técnica do Figma.

- SUCCESS (#1B5E20) e ERROR (#A61B1B):
  Utilizados respectivamente em confirmações/desafios concluídos e em alertas/erros
  de validação com ícones e textos explícitos conforme exigido pelo edital.


3. MODO ESCURO (DARK MODE) IMPLEMENTADO

O sistema conta com suporte completo a Modo Escuro, fiel aos parâmetros da
página 4 do Relatório do Design System (IHC v3.0):

- Nível 0 · Fundo (#020508): Base da tela com padrão de cruzes ciano sutil.
- Nível 1 · Superfície (#0a131e / #050a0f): Painéis e áreas de conteúdo com leve tom azulado.
- Nível 2 · Elevada (#12161b): Cartões de desafios, menus e componentes com sobreposição +5% claro.
- Nível 3 · Sobreposta (#191e22): Diálogos, modais de desafio e de perfil (+8% claro).
- Nível 4 · Flutuante (#212529): Popovers, dicas e tooltips (+11% claro).
- Textos: Alto contraste (#FFFFFF e #F1F5F9) e textos atenuados (#94A3B8).
- Acentos: Ciano vibrante (#0D8FA8) e azul institucional (#17324D).

Como Alternar:
- Clique no botão "Modo Escuro / Modo Claro" na barra superior (ao lado do status do usuário).
- A preferência do usuário é salva no localStorage (chave 'commit_theme') e mantida
  automaticamente entre sessões e recarregamentos de página.
- O sistema também detecta a preferência inicial do sistema operacional (prefers-color-scheme).


4. COMO EXECUTAR LOCALMENTE NO COMPUTADOR

O sistema funciona 100% no navegador local, sem dependências, sem frameworks,
sem APIs externas e sem necessidade de backend ou banco de dados.

Opção A — Extensão Live Server do VS Code (Recomendado):
1. Abra a pasta do projeto no Visual Studio Code:
   c:\Projetos\Commit!
2. Certifique-se de que a extensão "Live Server" (Ritwick Dey) está instalada.
3. Clique com o botão direito no arquivo "index.html" e selecione:
   "Open with Live Server" (ou use o atalho Alt+L Alt+O).
4. O navegador abrirá automaticamente no endereço http://127.0.0.1:5500.

Opção B — Abertura Direta no Navegador:
1. Navegue até a pasta do projeto no Explorador de Arquivos do Windows.
2. Dê um duplo clique no arquivo "index.html".
3. A aplicação abrirá e funcionará perfeitamente via protocolo file://.

Opção C — Servidor Local via Linha de Comando (Python):
1. Abra o terminal na pasta do projeto e execute:
   python -m http.server 3000
2. Acesse http://localhost:3000 no navegador.


5. CONTAS E DADOS DE TESTE PRÉ-CONFIGURADOS

Para agilizar a avaliação acadêmica das telas com dados ricos e isolamento de usuários,
já constam duas contas cadastradas localmente:

Conta de Teste 1 (Usuário Principal - com desafios e conquistas ativas):
- Usuário: pedro.dev
- Senha: 123
- Características: Possui o desafio "Mercado" (50%), "Padaria" (25%) e "Média de nota" (100%),
  com link de repositório GitHub entregue e conquistas desbloqueadas.

Conta de Teste 2 (Usuário Secundário - para validação de isolamento de dados):
- Usuário: ana.dev
- Senha: 123
- Características: Possui dados e conquistas distintos, demonstrando a persistência individual.

Modo Visitante e Cadastro de Nova Conta:
- É possível criar novas contas a qualquer momento pelo botão "Criar Conta".
- É possível deslogar pelo botão "Sair" na barra superior para testar o modo visitante.

AVISO DE SEGURANÇA ACADÊMICA:
Este projeto armazena seus dados e senhas unicamente no localStorage do navegador
para fins estritamente didáticos e acadêmicos. Não utilize senhas reais.


6. ESTRUTURA DE ARQUIVOS DO PROJETO

Commit/
├── index.html               # Estrutura semântica HTML5, SPA views e modais
├── README.txt               # Guia de execução e documentação
├── Commit_Projeto_Final.zip # Pacote ZIP para submissão
├── css/
│   └── style.css            # Tokens de design, layout, neo-brutalismo e responsividade
├── js/
│   └── app.js               # Lógica Vanilla JS, estado, localStorage, modais e roteamento
└── assets/
    ├── icons/               # Ícones Tabler em formato SVG
    │   ├── home.svg, target.svg, user.svg, trophy.svg, lock.svg, bookmark.svg,
    │   ├── search.svg, pencil.svg, check.svg, x.svg, alert.svg, info.svg,
    │   ├── github.svg, arrow-right.svg, sun.svg, moon.svg
    │   └── arrow-right.svg
    └── images/              # Recursos gráficos complementares


7. FUNCIONALIDADES IMPLEMENTADAS CONFORME EDITAL

[x] 3.1. Cadastro e Login Local:
    - Criação de nova conta (nome, e-mail, usuário, senha, tag e bio).
    - Login com validação e persistência em localStorage.
    - Logout com retorno limpo ao modo visitante.
    - Preservação da sessão após fechar e reabrir o navegador.
    - Isolamento completo dos dados por usuário autenticado.

[x] 3.2. Modal de Visualização do Desafio:
    - Apresenta nome, subtítulo, nível de dificuldade, tags tecnológicas, descrição pedagógica.
    - Objetivos e requisitos com checklist interativo (marcar itens calcula e atualiza o progresso).
    - Instruções passo a passo para realização.
    - Indicador de estado ("Não iniciado", "Em andamento", "Concluído") e barra de progresso.
    - Ações para iniciar desafio, concluir com 100% e favoritar.

[x] 3.3. Entrega do Desafio com GitHub:
    - Campo de inserção de URL do repositório GitHub.
    - Validação de formato (regex de URL válida do GitHub).
    - Botão para salvar o link, exibição com link externo clicável e data de entrega.
    - Botões para alterar ou remover a entrega a qualquer momento.
    - Persistência associada ao usuário autenticado e ao respectivo desafio.
    - Desbloqueio da conquista "Primeiro Commit!".

[x] 3.4. Modal de Edição de Perfil:
    - Acessível pelo botão de lápis no card de perfil do usuário.
    - Edição de nome completo, nome de usuário (@handle), tag e bio.
    - Atualização imediata em tempo real em todas as áreas do sistema (inclusive "Olá, [Nome]!").
    - Persistência no localStorage.

[x] Telas e Componentes do Figma:
    - Home: Saudação dinâmica em destaque marinho/ciano, dock com logo inclinado Commit!,
      grid de cards com botões contrastantes, balões de conquistas sociais da comunidade (Ana, Luiz),
      banner didático em 3 colunas (01, 02, 03), seção Recomendação da Semana com favoritos,
      banner "Você pode explorar" e CTA inferior.
    - Catálogo de Desafios: Campo de busca em tempo real com ícone, filtro por nível, tag e status,
      grid responsivo de projetos com diferenciação por nível e CTA inferior.
    - Perfil do Usuário: Card principal com nome sublinhado, @handle, estatísticas em badges coloridos,
      arte de estrela sparkle e ondas vetoriais na paleta oficial; abas dinâmicas para
      "Desafios em andamento" (com barras em ciano/marinho) e "Conquistas" (desbloqueadas em ciano/verde).

[x] Conquistas Dinâmicas (Gamificação):
    - 10 conquistas didáticas integradas às ações do estudante (primeiro login, iniciar desafio,
      50% de progresso, entregar repositório GitHub, concluir 100%, editar perfil, pesquisar, favoritar).
    - Notificações Toast animadas com bordas e sombras neo-brutalistas marinho/ciano.

[x] Design System e Acessibilidade:
    - Tipografia oficial: Bricolage Grotesque e IBM Plex Mono.
    - Cores e tokens CSS estritamente fiéis ao DESIGN.md e Relatório IHC v3.0.
    - Sombras sólidas neo-brutalistas (4px 4px 0 var(--color-primary), 7px 7px 0 var(--color-primary)).
    - Alvos de toque >= 44px e anéis de foco visíveis em ciano (#0D8FA8).
    - Layout 100% responsivo para desktops, tablets e smartphones.
