# DESIGN.md — Commit!

Equipe: Grupo 3 - 2026.2
Plataforma: Web app (desktop) · Domínio: Educação
Usuário-alvo: Estudantes de programação, 12 a 17 anos que já tenham média literacia digital
Contexto de uso: Uso em escritório / mesa

## Contexto de pesquisa
Os estudantes buscam alguma maneira de evoluir profissionalmente e intelectualmente, devido a dificuldade de aplicar os conhecimentos adquiridos, por conta de gastar mais tempo pensando no problema a ser resolvido, do que na solução em si.

## Princípios e voz
Tom: Moderno, Leve, Didático, Profissional
O sistema busca entregar os desafios ao usuário de maneira direta e clara, tanto no sentido de compreender o desafio, mas também no sentido de diversas opções de fácil acesso

Microcopy de referência (adapte; mantenha o mesmo nome para a mesma ação em todo o fluxo):
- **Moderno**: botão "Continuar" · erro "Algo deu errado. Tente novamente." · onboarding "Novo por aqui? Comece agora."
- **Leve**: botão "Pronto!" · erro "Quase! Só falta corrigir isso." · onboarding "Fácil e rápido — promessa."
- **Didático**: botão "Próxima etapa" · erro "Opa! O campo precisa estar no formato correto. Exemplo: 01/01/2000." · onboarding "Passo 1 de 4: configure seu perfil."
- **Profissional**: botão "Prosseguir" · erro "Não foi possível concluir a operação." · onboarding "Acesse sua conta corporativa."

## Regras obrigatórias para gerar telas
- Use SOMENTE os tokens CSS abaixo (var(--...)). Nunca escreva cores, tamanhos ou raios literais.
- Contraste de texto ≥ 4.5:1; alvos interativos ≥ 44px; foco visível com var(--focus-ring).
- Nunca comunique erro/sucesso só por cor: inclua ícone e texto.
- Corpo em Bricolage Grotesque; IBM Plex Mono somente para dados/código. Máximo 2 famílias.
- Ícones: Tabler Icons (estilo outline).
- Preserve a estrutura, a ordem e os fluxos do wireflow anexado; a identidade só altera a camada visual.

## Componentes e estados
Botão primário ("Vamos lá"): default bg primary/texto on-primary · hover primary-hover · active primary-active · focus outline var(--focus-ring) · disabled disabled-bg/disabled-text · erro: borda error + ícone + mensagem.
Campo: borda var(--color-border); foco com var(--focus-ring); erro com error + texto de ajuda.
Cartão: surface, radius-md, shadow-md, padding var(--space-base).

## Wireflow
(Cole aqui a descrição das telas e fluxos do grupo, ou anexe as imagens.)

## Tokens
```css
:root {
  /* commit- — Design Tokens (guia v3.0) · Moderno, Leve, Didático, Profissional */

  /* CORES — use os papéis semânticos nos componentes; as escalas são só referência */
  --color-primary: #17324D;
  --color-secondary: #0D8FA8;
  --color-background: #F8FAFC;
  --color-surface: #CAD7E4;
  --color-error: #A61B1B;
  --color-success: #1B5E20;
  --color-text: #111111;
  --color-text-muted: #5c5c5c;
  --color-on-primary: #FFFFFF;
  --color-surface-2: #CAD7E4;
  --color-surface-3: #CAD7E4;
  --color-surface-4: #CAD7E4;
  --color-border: rgba(0,0,0,.14);
  --color-border-strong: #777878;
  --color-primary-text: #17324d;
  --color-focus: #17324D;
  --color-primary-hover: #07233d;
  --color-primary-active: #00142d;
  --color-disabled-bg: #E0E0E0;
  --color-disabled-text: #757575;

  /* ESCALAS DE TONS (referência; 500 não é necessariamente a cor-base) */
  --color-primary-100: #f0f6fd;
  --color-primary-200: #bac7d4;
  --color-primary-300: #869aaf;
  --color-primary-400: #556e8a;
  --color-primary-500: #2a4562;
  --color-primary-600: #17324D;
  --color-primary-700: #102032;
  --color-primary-800: #0c151f;
  --color-primary-900: #070b0f;
  --color-primary-1000: #030304;
  --color-secondary-100: #e7f9fe;
  --color-secondary-200: #bde1eb;
  --color-secondary-300: #8ccbdc;
  --color-secondary-400: #58b4cb;
  --color-secondary-500: #0D8FA8;
  --color-secondary-600: #077d93;
  --color-secondary-700: #115a6a;
  --color-secondary-800: #153942;
  --color-secondary-900: #0c1b1f;
  --color-secondary-1000: #020405;
  --color-error-100: #ffede9;
  --color-error-200: #fac0b8;
  --color-error-300: #ec9085;
  --color-error-400: #d95f55;
  --color-error-500: #b9312c;
  --color-error-600: #A61B1B;
  --color-error-700: #6a1513;
  --color-error-800: #421410;
  --color-error-900: #200b09;
  --color-error-1000: #070202;
  --color-success-100: #edf9ec;
  --color-success-200: #bcd6bb;
  --color-success-300: #8ab489;
  --color-success-400: #59925a;
  --color-success-500: #2f7031;
  --color-success-600: #1B5E20;
  --color-success-700: #133c16;
  --color-success-800: #112611;
  --color-success-900: #091309;
  --color-success-1000: #020402;

  /* TIPOGRAFIA */
  --font-heading: 'Bricolage Grotesque', system-ui, sans-serif;
  --font-body: 'Bricolage Grotesque', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace; /* apenas dados/código */
  --text-display: 48px;
  --text-h1: 36px;
  --text-h2: 28px;
  --text-h3: 20px;
  --text-body: 16px;
  --text-small: 14px;
  --text-caption: 12px;
  --line-height-body: 1.5;
  --line-height-heading: 1.2;
  --font-weight-400: 400;
  --font-weight-700: 700;
  --font-weight-800: 800;

  /* ESPAÇAMENTO (derivado da base) */
  --space-1: 6px;
  --space-2: 12px;
  --space-3: 18px;
  --space-4: 24px;
  --space-5: 36px;
  --space-6: 48px;
  --space-7: 72px;
  --space-8: 96px;
  --space-base: 24px; /* padding padrão de componentes */

  /* FORMA */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-control: 4px; /* botões e campos */

  /* ELEVAÇÃO */
  --shadow-sm: 5px 5px 0 #000000;
  --shadow-md: 8px 8px 0 #000000;
  --shadow-lg: 10px 10px 0 #000000;
  --elevation-0: none;
  --elevation-1: var(--shadow-sm);
  --elevation-2: var(--shadow-md);
  --elevation-3: var(--shadow-lg);
  --elevation-4: var(--shadow-lg); /* claro: sombra · escuro: use --color-surface-N */

  /* COMPONENTES */
  --button-variant: outline;
  --button-height: 44px;
  --button-padding-x: 16px;
  --button-font-size: 15px;
  --button-radius: 4px;
  --input-variant: outlined;
  --input-height: 44px;
  --input-radius: 4px;
  --badge-variant: outline;
  --card-variant: elevated;
  --card-padding: 36px;
  --toggle-type: checkbox;

  /* INTERAÇÃO */
  --target-min: 44px;
  --focus-ring: 3px solid var(--color-focus);
  --focus-offset: 2px;
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --easing: cubic-bezier(.2,0,0,1);
}
```
