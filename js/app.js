/**
 * COMMIT! — Sistema Web Educacional
 * Equipe: Grupo 3 - 2026.2
 * Tecnologias: HTML5, CSS3, Vanilla JavaScript, localStorage
 * Identidade Visual e Design Tokens conforme DESIGN.md e Relatório IHC v3.0
 * Paleta Oficial: Primary (#17324D), Secondary (#0D8FA8), Surface (#CAD7E4),
 *                 Background (#F8FAFC), Error (#A61B1B), Success (#1B5E20)
 */

// ==========================================================================
// 1. DADOS INICIAIS (CATÁLOGO DE DESAFIOS E CONQUISTAS)
// ==========================================================================

const INITIAL_CHALLENGES = [
 {
  id: "mercado",
  title: "Mercado",
  subtitle: "Implementação de sistema de caixa",
  level: "Iniciante",
  type: "Lógica",          
  tags: ["Loop", "Vetor", "if/else", "Operadores"],
    quote: "O desafio propõe a criação de um sistema básico de leitura de código de produtos, cálculo do valor final da compra do cliente, e validação de erros nas leituras.",
    description: "Neste desafio prático, você construirá o núcleo lógico de um terminal de caixa de supermercado. O sistema deve ler códigos de barras simulados, identificar preços em uma tabela predefinida, aplicar regras de desconto para compras acima de R$ 100,00 e emitir o extrato final com cálculo do troco a ser devolvido.",
    estimatedTime: "~2h",
    stepsCount: 4,
    language: "Livre",
    delivery: "GitHub",
    achievementId: "primeiro_caixa",
    achievementTitle: "Primeiro caixa",
    objective: [
      "Simular o caixa de um mercadinho no terminal: o operador digita o código de cada produto, informa a quantidade e, no fim, o sistema mostra o total da compra e calcula o troco.",
      "Você vai praticar laços de repetição, vetores pra guardar o catálogo e condicionais pra validar cada leitura."
    ],
    requirementsList: [
      { code: "R01", text: "Cadastrar um catálogo com pelo menos 5 produtos (código, nome e preço) em vetores.", tag: "Vetor" },
      { code: "R02", text: "Ler códigos repetidamente até o operador digitar 0 pra fechar a compra.", tag: "Loop" },
      { code: "R03", text: "Para cada código válido, pedir a quantidade e somar ao subtotal.", tag: "Operadores" },
      { code: "R04", text: "Aplicar 10% de desconto se o total passar de R$ 100,00.", tag: "if/else" },
      { code: "R05", text: "Ler o valor pago e exibir o troco com duas casas decimais.", tag: "Operadores" }
    ],
    requirements: [
      "Cadastrar um catálogo com pelo menos 5 produtos (código, nome e preço) em vetores.",
      "Ler códigos repetidamente até o operador digitar 0 pra fechar a compra.",
      "Para cada código válido, pedir a quantidade e somar ao subtotal.",
      "Aplicar 10% de desconto se o total passar de R$ 100,00.",
      "Ler o valor pago e exibir o troco com duas casas decimais."
    ],
    exampleTable: {
      title: "Catálogo de exemplo",
      headers: ["CÓDIGO", "PRODUTO", "PREÇO"],
      rows: [
        ["101", "Arroz 5kg", "R$ 24,90"],
        ["102", "Feijão 1kg", "R$ 8,49"],
        ["103", "Café 500g", "R$ 17,90"],
        ["104", "Leite 1L", "R$ 5,29"],
        ["105", "Pão de forma", "R$ 9,99"]
      ],
      note: "Pode usar esses produtos ou inventar os seus, desde que cada código seja único e o preço tenha centavos."
    },
    terminalIO: "> Código do produto: 101\n  Arroz 5kg ........ R$ 24,90\n> Quantidade: 2\n  Subtotal: R$ 49,80\n> Código do produto: 999\n  ✗ Código não encontrado. Tente de novo.\n> Código do produto: 0\n------------------------------\n  TOTAL: R$ 49,80\n> Valor pago: 50\n  ✓ Troco: R$ 0,20",
    errorValidations: [
      "Código que não existe no catálogo → mensagem de erro, a compra continua.",
      "Quantidade zero ou negativa → pedir de novo.",
      "Texto onde deveria ser número → não pode quebrar o programa.",
      "Valor pago menor que o total → avisar quanto falta e pedir de novo."
    ],
    acceptanceCriteria: [
      "Roda do início ao fim sem travar, mesmo com entradas inválidas.",
      "Total, desconto e troco batem com o cálculo na mão.",
      "Valores sempre exibidos no formato R$ 0,00.",
      "Código publicado no GitHub com um README explicando como rodar."
    ],
    guidedSteps: [
      { num: "01", title: "Monte o catálogo", desc: "Crie os vetores de código, nome e preço." },
      { num: "02", title: "Leia os produtos", desc: "Laço que só para quando o código for 0." },
      { num: "03", title: "Valide tudo", desc: "Trate código, quantidade e pagamento." },
      { num: "04", title: "Feche a compra", desc: "Total, desconto, troco e commit!" }
    ],
    steps: [
      "Passo 1: Estruture a lista de produtos com códigos numéricos e seus respectivos preços.",
      "Passo 2: Crie a função de adição ao carrinho com verificação de código inválido.",
      "Passo 3: Aplique a condicional de desconto e a fórmula de troco.",
      "Passo 4: Organize o código em seu repositório GitHub e registre a entrega abaixo."
    ],
    ctaHeading: "Bora passar umas compras no caixa.",
    ctaSub: "Salve seu progresso criando uma conta, ou explore sem login.",
    isWeeklyPick: true
  },
  {
    id: "media-nota",
    title: "Média de nota",
    subtitle: "Cálculo dinâmico escolar",
    level: "Iniciante",
    type: "Lógica",  
    tags: ["Operadores", "Loop", "if/else"],
    quote: "Consiste de fazer a média de uma quantidade não determinada de notas de um aluno",
    description: "Desenvolva um programa didático para professores calcularem a média de notas de seus estudantes. O sistema deve aceitar tantas notas quantas o usuário desejar inserir até que um valor especial de encerramento seja digitado. Ao final, classifica a situação acadêmica do aluno.",
    estimatedTime: "~1h30",
    stepsCount: 3,
    language: "Livre",
    delivery: "GitHub",
    achievementId: "first_completion",
    achievementTitle: "Calculador Escolar",
    objective: [
      "Calcular a média dinâmica de notas de um aluno usando um laço de repetição com sentinela de parada (-1).",
      "Classificar o resultado escolar entre Aprovado, Recuperação e Reprovado, identificando a maior e a menor nota."
    ],
    requirementsList: [
      { code: "R01", text: "Ler notas consecutivas do aluno até que seja digitado o valor sentinela -1.", tag: "Loop" },
      { code: "R02", text: "Validar cada nota para aceitar somente valores no intervalo de 0.0 a 10.0.", tag: "if/else" },
      { code: "R03", text: "Calcular a média aritmética simples com precisão de duas casas decimais.", tag: "Operadores" },
      { code: "R04", text: "Classificar: Média >= 7.0 (Aprovado), 5.0 a 6.9 (Recuperação), < 5.0 (Reprovado).", tag: "if/else" },
      { code: "R05", text: "Identificar e exibir a maior e menor nota inseridas no boletim.", tag: "Operadores" }
    ],
    requirements: [
      "Aceitar entrada indeterminada de notas válidas (0 a 10) usando um sentinela de parada (ex: -1).",
      "Calcular a média aritmética simples com arredondamento em 2 casas decimais.",
      "Classificar o resultado: Média >= 7.0 (Aprovado), entre 5.0 e 6.9 (Recuperação), < 5.0 (Reprovado).",
      "Identificar e exibir a maior e a menor nota inseridas."
    ],
    exampleTable: {
      title: "Critérios de avaliação",
      headers: ["FAIXA DE MÉDIA", "STATUS FINAL", "AÇÃO PEDAGÓGICA"],
      rows: [
        ["7.0 a 10.0", "Aprovado", "Avança de módulo curricular"],
        ["5.0 a 6.9", "Recuperação", "Avaliação de reforço agendada"],
        ["0.0 a 4.9", "Reprovado", "Necessita mentoria intensiva"]
      ],
      note: "Notas com casas decimais (ex: 8.5) e digite -1 para fechar o lançamento de avaliações."
    },
    terminalIO: "> Digite a nota do aluno (ou -1 para encerrar): 8.5\n  ✓ Nota registrada: 8.50\n> Digite a nota: 6.0\n  ✓ Nota registrada: 6.00\n> Digite a nota: 9.5\n  ✓ Nota registrada: 9.50\n> Digite a nota: 12.0\n  ✗ Nota inválida! Digite valores entre 0.0 e 10.0.\n> Digite a nota: -1\n------------------------------\n  TOTAL DE AVALIAÇÕES: 3\n  MAIOR NOTA: 9.50 | MENOR NOTA: 6.00\n  MÉDIA FINAL: 8.00\n  ✓ SITUAÇÃO ACADÊMICA: APROVADO",
    errorValidations: [
      "Nota digitada maior que 10 ou menor que 0 (exceto -1) → aviso e pedir nova digitação.",
      "Encerrar com -1 antes de qualquer nota → informar que nenhuma nota foi lançada.",
      "Entrada alfanumérica onde deveria ser float → proteção contra crash do programa."
    ],
    acceptanceCriteria: [
      "Aceita quantidade indeterminada de notas até a parada pelo sentinela -1.",
      "Cálculo matemático correto sem truncamento indevido.",
      "Valores com 2 casas decimais padronizadas.",
      "Publicado no GitHub com README contendo instruções de teste."
    ],
    guidedSteps: [
      { num: "01", title: "Crie o acumulador", desc: "Variáveis para soma total, contador de notas, maior e menor." },
      { num: "02", title: "Trate as notas", desc: "Laço while que valida o intervalo correto e sentinela." },
      { num: "03", title: "Emita o boletim", desc: "Cálculo da média, classificação e commit final!" }
    ],
    steps: [
      "Passo 1: Crie o laço de repetição com acumulador de notas e contador de avaliações.",
      "Passo 2: Trate entradas inválidas (notas negativas fora do sentinela ou maiores que 10).",
      "Passo 3: Exiba o relatório com média e o status pedagógico final."
    ],
    ctaHeading: "Bora calcular essas médias no terminal.",
    ctaSub: "Salve seu progresso criando uma conta, ou explore sem login.",
    isWeeklyPick: true
  },
  {
    id: "padaria",
    title: "Sistema Padaria",
    subtitle: "Gestão de estoque e vendas",
    level: "Intermediário",
    type: "POO",  
    tags: ["Métodos", "Classes", "POO"],
    quote: "Crud de um sistema de cadastro de produtos de padaria.",
    description: "Aplique os pilares da Programação Orientada a Objetos para gerenciar o estoque de delícias de uma padaria (pães, bolos, salgados e cafés). Crie classes bem definidas com métodos para adicionar, consultar, atualizar quantidades e dar baixa após vendas.",
    estimatedTime: "~3h",
    stepsCount: 4,
    language: "Livre",
    delivery: "GitHub",
    achievementId: "first_completion",
    achievementTitle: "Mestre Padeiro Dev",
    objective: [
      "Desenvolver um CRUD orientado a objetos para controle de estoque de produtos perecíveis.",
      "Aplicar encapsulamento com métodos de entrada, saída, verificação de estoque mínimo e desconto."
    ],
    requirementsList: [
      { code: "R01", text: "Criar a classe Produto com id, nome, categoria, preço e quantidade em estoque.", tag: "Classes" },
      { code: "R02", text: "Implementar métodos para adicionar, editar e consultar itens cadastrados.", tag: "Métodos" },
      { code: "R03", text: "Emitir alerta preventivo quando o estoque de um produto for menor que 5.", tag: "POO" },
      { code: "R04", text: "Simular operação de venda dando baixa automática na quantidade disponível.", tag: "Operadores" }
    ],
    requirements: [
      "Definir a classe 'Produto' com atributos: código, nome, categoria, preço e estoque.",
      "Criar métodos para listar produtos, atualizar preços e controlar níveis de estoque.",
      "Implementar alerta visual quando a quantidade em estoque for inferior a 5 unidades.",
      "Simular transações de venda com desconto automático para itens do dia anterior."
    ],
    exampleTable: {
      title: "Estoque da padaria",
      headers: ["CÓD", "ITEM", "CATEGORIA", "PREÇO", "ESTOQUE"],
      rows: [
        ["201", "Pão Francês (kg)", "Pães", "R$ 18,90", "45 kg"],
        ["202", "Bolo de Cenoura", "Confeitaria", "R$ 28,00", "4 un (Alerta)"],
        ["203", "Coxinha de Frango", "Salgados", "R$ 7,50", "18 un"],
        ["204", "Café Expresso", "Bebidas", "R$ 5,00", "60 un"]
      ],
      note: "Itens com menos de 5 unidades disparam alerta imediato de reposição."
    },
    terminalIO: "> Menu Padaria: 1. Cadastrar | 2. Listar | 3. Venda | 0. Sair\n> Opção: 3\n> Código do item: 202 (Bolo de Cenoura)\n> Quantidade: 2\n  ✓ Venda realizada! Subtotal: R$ 56,00\n  ! ALERTA: Estoque baixo (restam 2 unidades).\n> Opção: 3\n> Código do item: 202\n> Quantidade: 5\n  ✗ Estoque insuficiente! Disponível: 2.",
    errorValidations: [
      "Tentativa de vender mais do que o estoque disponível → bloquear e alertar.",
      "Preço ou quantidade negativa no cadastro → rejeição com mensagem clara.",
      "Código de produto repetido → validação de unicidade da chave primária."
    ],
    acceptanceCriteria: [
      "Classes e métodos bem modularizados com boas práticas de POO.",
      "Estoque recalculado com consistência após cada venda.",
      "Alertas visuais disparados corretamente para produtos críticos.",
      "Repositório GitHub com diagrama simples de classes ou doc."
    ],
    guidedSteps: [
      { num: "01", title: "Modele as classes", desc: "Atributos privados e métodos getters/setters da classe Produto." },
      { num: "02", title: "Crie o CRUD", desc: "Funções de cadastro, leitura e atualização de preços." },
      { num: "03", title: "Controle de vendas", desc: "Regra de débito de estoque e verificação de limites." },
      { num: "04", title: "Relatório gerencial", desc: "Extrato consolidado do dia e encerramento." }
    ],
    steps: [
      "Passo 1: Modele as classes com métodos de encapsulamento.",
      "Passo 2: Implemente a estrutura CRUD (Criar, Ler, Atualizar, Deletar).",
      "Passo 3: Valide cenários de tentativa de venda sem estoque suficiente."
    ],
    ctaHeading: "Bora estruturar esse sistema de padaria.",
    ctaSub: "Salve seu progresso criando uma conta, ou explore sem login.",
    isWeeklyPick: true
  },
  {
    id: "tarefas",
    title: "Checklist de tarefas diárias",
    subtitle: "Organização e produtividade pessoal",
    level: "Iniciante",
    type: "Lógica",  
    tags: ["Vetor", "Métodos", "Strings"],
    quote: "O desafio propõe a criação de um sistema básico de checagem de tarefas do dia a dia do usuário",
    description: "Construa um gerenciador de tarefas diárias leve e interativo. O estudante poderá cadastrar atividades escolares e de estudo, marcá-las como concluídas com feedback visual e acompanhar um indicador de produtividade.",
    estimatedTime: "~2h",
    stepsCount: 3,
    language: "Livre",
    delivery: "GitHub",
    achievementId: "first_completion",
    achievementTitle: "Foco Total",
    objective: [
      "Gerenciar um array dinâmico de afazeres com inserção, marcação e remoção de tarefas.",
      "Calcular a taxa percentual de produtividade diária concluída em tempo real."
    ],
    requirementsList: [
      { code: "R01", text: "Armazenar tarefas em um vetor com id, título e booleano de conclusão.", tag: "Vetor" },
      { code: "R02", text: "Alternar o estado da tarefa entre pendente e concluída.", tag: "Métodos" },
      { code: "R03", text: "Calcular e exibir a porcentagem de tarefas já concluídas.", tag: "Operadores" },
      { code: "R04", text: "Bloquear a inserção de tarefas com texto vazio ou espaços em branco.", tag: "Strings" }
    ],
    requirements: [
      "Armazenar tarefas em um vetor de objetos com id, título e indicador booleano de conclusão.",
      "Permitir alternar o estado de cada tarefa entre pendente e concluída.",
      "Calcular e exibir a porcentagem de tarefas já concluídas no dia.",
      "Impedir a inserção de tarefas vazias ou apenas com espaços em branco."
    ],
    exampleTable: {
      title: "Quadro de tarefas",
      headers: ["ID", "TAREFA", "STATUS", "CONCLUÍDO"],
      rows: [
        ["1", "Revisar laços de repetição", "Pendente", "Não"],
        ["2", "Fazer entrega do desafio no GitHub", "Concluído", "Sim"],
        ["3", "Estudar arrays e vetores", "Concluído", "Sim"],
        ["4", "Participar da mentoria de sábado", "Pendente", "Não"]
      ],
      note: "Progresso atual do quadro: 2 de 4 concluídas (50%)."
    },
    terminalIO: "> [1] [ ] Revisar laços de repetição\n> [2] [✓] Fazer entrega do desafio no GitHub\n> [3] [✓] Estudar arrays e vetores\n> Progresso: 50% concluído.\n> Digite o ID para marcar/desmarcar: 1\n  ✓ Tarefa 1 marcada como concluída!\n------------------------------\n  NOVO PROGRESSO: 75% CONCLUÍDO (3 de 4).",
    errorValidations: [
      "Título em branco ou menos de 3 caracteres → rejeição com alerta.",
      "Tentativa de marcar tarefa inexistente → mensagem amigável de erro.",
      "Exclusão sem confirmação → proteção contra perda de dados."
    ],
    acceptanceCriteria: [
      "Lista atualizada imediatamente após qualquer ação.",
      "Contador e barra de porcentagem 100% matematicamente corretos.",
      "Tratamento de strings para evitar espaços vazios.",
      "Código documentado no repositório GitHub."
    ],
    guidedSteps: [
      { num: "01", title: "Estrutura do vetor", desc: "Defina o array de tarefas e a função de renderização." },
      { num: "02", title: "Alternância de status", desc: "Método de toggle para mudar entre concluído e pendente." },
      { num: "03", title: "Cálculo de progresso", desc: "Fórmula de porcentagem e commit do projeto." }
    ],
    steps: [
      "Passo 1: Crie o array de tarefas e a função de renderização.",
      "Passo 2: Implemente a alternância de estado (toggle) com clique.",
      "Passo 3: Adicione a contagem dinâmica de tarefas restantes."
    ],
    ctaHeading: "Bora organizar essa rotina de estudos.",
    ctaSub: "Salve seu progresso criando uma conta, ou explore sem login.",
    isWeeklyPick: false
  },
  {
    id: "clima",
    title: "Sistema de clima",
    subtitle: "Consumo de API meteorológica",
    level: "Avançado",
     type: "Front-end",  
    tags: ["API", "Aplicação web", "Fetch"],
    quote: "O desafio propõe a criação de uma interface visual que consulta API's de clima em diversos locais no globo",
    description: "Conecte sua aplicação com o mundo real através de requisições assíncronas a uma API de previsão do tempo. O projeto exige tratamento de estados de carregamento (loading), exibição gráfica das condições e tratamento de exceções de conexão.",
    estimatedTime: "~4h",
    stepsCount: 3,
    language: "Livre",
    delivery: "GitHub",
    achievementId: "advanced_master",
    achievementTitle: "Meteorologista Digital",
    objective: [
      "Realizar requisições assíncronas com Fetch API / async/await em um endpoint REST de clima.",
      "Tratar estados de carregamento, sucesso de dados e mensagens amigáveis em caso de erro de rede."
    ],
    requirementsList: [
      { code: "R01", text: "Implementar consulta assíncrona usando async/await com tratamento de erros try/catch.", tag: "Fetch" },
      { code: "R02", text: "Exibir temperatura atual, sensação térmica, umidade e condição visual.", tag: "API" },
      { code: "R03", text: "Tratar falhas de busca (cidade não encontrada ou offline) com mensagem clara.", tag: "if/else" },
      { code: "R04", text: "Salvar as últimas 3 cidades pesquisadas em histórico rápido de consulta.", tag: "Vetor" }
    ],
    requirements: [
      "Utilizar a Fetch API com async/await para consultar previsões meteorológicas.",
      "Exibir temperatura atual, sensação térmica, umidade do ar e descrição do céu.",
      "Tratar erros de busca (cidade não encontrada) com mensagem amigável e ícone de alerta.",
      "Salvar as últimas 3 cidades pesquisadas para acesso rápido."
    ],
    exampleTable: {
      title: "Parâmetros retornados da API",
      headers: ["PARÂMETRO", "UNIDADE", "DESCRIÇÃO DIDÁTICA"],
      rows: [
        ["temp", "Graus Celsius (°C)", "Temperatura medida no local"],
        ["feels_like", "Graus Celsius (°C)", "Sensação térmica corporal"],
        ["humidity", "Porcentagem (%)", "Umidade relativa do ar"],
        ["weather.main", "Texto / Ícone", "Condição geral (Céu limpo, Chuva)"]
      ],
      note: "Utilize uma chave gratuita da OpenWeatherMap ou simulação JSON local."
    },
    terminalIO: "> Consultando cidade: São Paulo\n  ... Conectando à API meteorológica ...\n  ✓ Dados recebidos com sucesso!\n------------------------------\n  CIDADE: São Paulo, BR\n  TEMPERATURA: 23°C (Sensação: 24°C)\n  CONDIÇÃO: Parcialmente Nublado\n  UMIDADE: 68%\n> Histórico salvo: [São Paulo]",
    errorValidations: [
      "Cidade inexistente na base → emitir mensagem amigável sem quebrar o fluxo.",
      "Queda de rede ou timeout → instruir o usuário a verificar a internet.",
      "Chave de API inválida → alerta no console com código de resposta HTTP."
    ],
    acceptanceCriteria: [
      "Tratamento de loading durante a requisição externa.",
      "Uso obrigatório de async/await e try/catch.",
      "Dados formatados com clareza para o usuário final.",
      "Código e instruções de teste no GitHub."
    ],
    guidedSteps: [
      { num: "01", title: "Conexão com a API", desc: "Crie a função de requisição assíncrona com try/catch." },
      { num: "02", title: "Tratamento de dados", desc: "Extraia os campos de temperatura e umidade da resposta JSON." },
      { num: "03", title: "Histórico e UI", desc: "Armazene as cidades recentes e finalize o commit!" }
    ],
    steps: [
      "Passo 1: Configure a chamada assíncrona para o endpoint da API.",
      "Passo 2: Formate os dados JSON retornados e atualize os cartões da interface.",
      "Passo 3: Trate falhas de rede com caixas de alerta do Design System."
    ],
    ctaHeading: "Bora integrar seu código com o mundo real.",
    ctaSub: "Salve seu progresso criando uma conta, ou explore sem login.",
    isWeeklyPick: false
  },
  {
    id: "senhas",
    title: "Gerador de senhas seguras",
    subtitle: "Segurança e manipulação de strings",
    level: "Iniciante",
    type: "Lógica",
    tags: ["Operadores", "Strings", "Loop"],
    quote: "Crie um utilitário de geração de senhas criptograficamente fortes com opções de customização de caracteres.",
    description: "Desenvolva uma ferramenta didática para criar senhas fortes e aleatórias. O usuário escolhe o comprimento e quais conjuntos de caracteres incluir (maiúsculas, minúsculas, números e caracteres especiais).",
    estimatedTime: "~2h",
    stepsCount: 3,
    language: "Livre",
    delivery: "GitHub",
    achievementId: "first_completion",
    achievementTitle: "Cripto Guardião",
    objective: [
      "Gerar sequências aleatórias seguras manipulando conjuntos de caracteres e strings.",
      "Permitir personalização do comprimento e calcular um medidor de entropia da senha."
    ],
    requirementsList: [
      { code: "R01", text: "Permitir ajuste do tamanho da senha entre 8 e 32 caracteres.", tag: "Loop" },
      { code: "R02", text: "Oferecer opções selecionáveis: maiúsculas, minúsculas, números e símbolos.", tag: "if/else" },
      { code: "R03", text: "Calcular um indicador de força (Fraca, Média, Forte).", tag: "Operadores" },
      { code: "R04", text: "Garantir a presença de pelo menos 1 caractere de cada grupo ativado.", tag: "Strings" }
    ],
    requirements: [
      "Permitir ajustar o tamanho da senha entre 8 e 32 caracteres.",
      "Permitir ativar ou desativar opções de símbolos, números e letras maiúsculas.",
      "Calcular um medidor visual de força da senha gerada.",
      "Permitir copiar a senha para a área de transferência com um clique."
    ],
    exampleTable: {
      title: "Classificação de força da senha",
      headers: ["COMPRIMENTO", "GRUPOS ATIVOS", "FORÇA", "STATUS"],
      rows: [
        ["8 a 10", "Apenas letras ou números", "Fraca", "Vulnerável a ataques"],
        ["11 a 15", "Letras + Números", "Média", "Aceitável para contas simples"],
        ["16 a 32", "Maiúsculas + Minúsculas + Números + Símbolos", "Muito Forte", "Alta segurança recomendada"]
      ],
      note: "Senhas longas com símbolos especiais garantem máxima proteção."
    },
    terminalIO: "> Configuração: 16 caracteres [A-Z, a-z, 0-9, !@#$%]\n  ... Gerando semente aleatória ...\n  ✓ Senha gerada: K9#mP2$vL8!wR5@x\n------------------------------\n  ENTROPIA: 98 bits\n  CLASSIFICAÇÃO: MUITO FORTE\n  ✓ Copiado para a área de transferência!",
    errorValidations: [
      "Nenhuma opção de caractere selecionada → alerta para marcar ao menos uma.",
      "Tamanho fora da faixa de 8 a 32 → limitar automaticamente.",
      "Tentativa de gerar com parâmetros vazios → manter valor seguro padrão."
    ],
    acceptanceCriteria: [
      "Seleção balanceada de caracteres aleatórios sem repetição viciada.",
      "Medidor de segurança responsivo às opções escolhidas.",
      "Cópia rápida com feedback visual.",
      "Publicado no GitHub com README explicativo."
    ],
    guidedSteps: [
      { num: "01", title: "Tabelas de caracteres", desc: "Vetores com letras maiúsculas, minúsculas, dígitos e símbolos." },
      { num: "02", title: "Sorteio aleatório", desc: "Laço de preenchimento garantindo um item de cada categoria ativa." },
      { num: "03", title: "Medição de força", desc: "Função avaliadora e commit do repositório." }
    ],
    steps: [
      "Passo 1: Crie os vetores de caracteres correspondentes a cada opção.",
      "Passo 2: Implemente o laço de seleção randômica balanceada.",
      "Passo 3: Adicione o feedback visual de cópia realizada."
    ],
    ctaHeading: "Bora criar senhas impenetráveis.",
    ctaSub: "Salve seu progresso criando uma conta, ou explore sem login.",
    isWeeklyPick: false
  },
  {
    id: "banco",
    title: "Conta bancária digital",
    subtitle: "Transações e controle de saldo",
    level: "Intermediário",
    type: "POO", 
    tags: ["POO", "Classes", "Métodos"],
    quote: "Simule operações financeiras de depósitos, saques com limite de cheque especial e extrato bancário.",
    description: "Modele a estrutura orientada a objetos de um banco digital moderno. Crie contas correntes e poupança com regras estritas de transação, registro cronológico de extrato e proteção contra saldo negativo além do limite acordado.",
    estimatedTime: "~3h",
    stepsCount: 4,
    language: "Livre",
    delivery: "GitHub",
    achievementId: "first_completion",
    achievementTitle: "Banqueiro Dev",
    objective: [
      "Modelar uma conta bancária completa em POO com saldo protegido, saque, depósito e transferências.",
      "Registrar cada movimentação em um extrato histórico com data, tipo de operação e saldo resultante."
    ],
    requirementsList: [
      { code: "R01", text: "Classe Conta com atributos privados de número, titular, saldo e cheque especial.", tag: "Classes" },
      { code: "R02", text: "Métodos depositar(), sacar() e transferir() com validações numéricas estritas.", tag: "Métodos" },
      { code: "R03", text: "Histórico de transações armazenado em vetor cronológico.", tag: "Vetor" },
      { code: "R04", text: "Impedir saques superiores ao saldo somado ao cheque especial.", tag: "if/else" }
    ],
    requirements: [
      "Criar a classe ContaBancaria com atributos privados de saldo, titular e número da conta.",
      "Implementar métodos sacar(), depositar() e transferir() com validações numéricas.",
      "Armazenar um vetor de movimentações com data, tipo da operação e valor.",
      "Impedir saques superiores ao saldo disponível somado ao cheque especial."
    ],
    exampleTable: {
      title: "Extrato da conta simulada",
      headers: ["DATA", "OPERAÇÃO", "VALOR", "SALDO DISPONÍVEL"],
      rows: [
        ["Hoje 09:30", "Depósito Inicial", "+ R$ 1.000,00", "R$ 1.000,00"],
        ["Hoje 11:15", "Pagamento Mercado", "- R$ 149,80", "R$ 850,20"],
        ["Hoje 14:00", "Transferência Pix Recebida", "+ R$ 250,00", "R$ 1.100,20"],
        ["Hoje 16:45", "Saque Caixa Eletrônico", "- R$ 200,00", "R$ 900,20"]
      ],
      note: "Limite de cheque especial contratado: R$ 500,00."
    },
    terminalIO: "> Conta: 1042-8 | Titular: Pedro Silveira\n> Saldo: R$ 900,20 | Limite: R$ 500,00\n> Operação: Saque de R$ 1.200,00\n  ✓ Saque aprovado utilizando R$ 299,80 do limite especial.\n  NOVO SALDO: -R$ 299,80 (Limite restante: R$ 200,20)\n> Operação: Saque de R$ 300,00\n  ✗ Transação recusada! Limite total excedido.",
    errorValidations: [
      "Depósito com valor negativo ou zero → rejeição com alerta.",
      "Saque superior ao saldo + cheque especial → recusa imediata da operação.",
      "Transferência para a mesma conta de origem → aviso de transação inválida."
    ],
    acceptanceCriteria: [
      "Encapsulamento correto sem acesso direto desprotegido ao saldo.",
      "Extrato financeiro com formatação de moeda R$ 0,00.",
      "Suporte a transações entre múltiplas contas distintas.",
      "Código publicado no GitHub com testes executáveis."
    ],
    guidedSteps: [
      { num: "01", title: "Estrutura da classe", desc: "Defina a classe Conta com atributos privados e construtor." },
      { num: "02", title: "Lógica financeira", desc: "Métodos depositar e sacar com validação de limites." },
      { num: "03", title: "Mecanismo de extrato", desc: "Array de histórico com carimbo de horário e saldo." },
      { num: "04", title: "Transferências", desc: "Método de transferência entre contas e commit!" }
    ],
    steps: [
      "Passo 1: Estruture a classe com métodos de validação de saldo.",
      "Passo 2: Crie a rotina de extrato formatado.",
      "Passo 3: Teste transferências entre duas instâncias de contas distintas."
    ],
    ctaHeading: "Bora programar esse banco digital.",
    ctaSub: "Salve seu progresso criando uma conta, ou explore sem login.",
    isWeeklyPick: false
  },
  {
    id: "ecommerce",
    title: "Mini E-Commerce",
    subtitle: "Catálogo e carrinho de compras",
    level: "Avançado",
    type: "Front-end", 
    tags: ["POO", "Aplicação web", "Vetor", "Classes"],
    quote: "Construção de uma experiência completa de catálogo com filtros de produtos e carrinho interativo.",
    description: "Construa a lógica e a interface de uma loja online com produtos em destaque, cálculo automático de frete simulado por região, aplicação de cupons promocionais e resumo final do pedido.",
    estimatedTime: "~4h",
    stepsCount: 4,
    language: "Livre",
    delivery: "GitHub",
    achievementId: "advanced_master",
    achievementTitle: "Arquiteto E-Commerce",
    objective: [
      "Desenvolver o fluxo completo de carrinho de compras de uma loja virtual moderna.",
      "Implementar cálculos dinâmicos de frete, cupons de desconto e controle de quantidade de itens."
    ],
    requirementsList: [
      { code: "R01", text: "Gerenciar estado do carrinho (adicionar item, mudar quantidade, remover).", tag: "Vetor" },
      { code: "R02", text: "Calcular subtotal, desconto de cupons válidos e taxa de entrega.", tag: "Operadores" },
      { code: "R03", text: "Persistir o carrinho para manter dados salvos após recarregar a tela.", tag: "Aplicação web" },
      { code: "R04", text: "Validar quantidade máxima disponível em estoque por produto.", tag: "if/else" }
    ],
    requirements: [
      "Gerenciar um estado dinâmico do carrinho (adicionar item, mudar quantidade, excluir).",
      "Calcular subtotal, desconto de cupom promocional e taxa de frete.",
      "Persistir o carrinho para manter os produtos mesmo se o usuário recarregar a página.",
      "Validar estoque máximo disponível por produto."
    ],
    exampleTable: {
      title: "Cupons promocionais cadastrados",
      headers: ["CÓDIGO DO CUPOM", "TIPO DE DESCONTO", "VALOR", "REGRA MÍNIMA"],
      rows: [
        ["COMMIT10", "Percentual", "10% OFF", "Compras acima de R$ 50,00"],
        ["DEV20", "Percentual", "20% OFF", "Compras acima de R$ 150,00"],
        ["FRETEGRATIS", "Frete", "100% no frete", "Sem valor mínimo de compra"]
      ],
      note: "Apenas 1 cupom de desconto permitido por transação."
    },
    terminalIO: "> Adicionado ao carrinho: Teclado Mecânico (R$ 250,00) x1\n> Adicionado ao carrinho: Mousepad Gamer (R$ 60,00) x2\n  Subtotal: R$ 370,00\n> Aplicando cupom: DEV20\n  ✓ Cupom aplicado: -20% (-R$ 74,00)\n> Frete calculado: R$ 15,00\n------------------------------\n  TOTAL FINAL DO PEDIDO: R$ 311,00",
    errorValidations: [
      "Cupom expirado ou código inexistente → mensagem de erro sem aplicar desconto.",
      "Tentativa de adicionar quantidade acima do estoque → aviso de limite.",
      "Carrinho vazio ao tentar fechar compra → bloquear checkout."
    ],
    acceptanceCriteria: [
      "Totalização automática ao alterar quantidades.",
      "Validação transparente de cupons e taxas de entrega.",
      "Persistência em localStorage funcionando.",
      "Código entregue no GitHub com demonstração."
    ],
    guidedSteps: [
      { num: "01", title: "Produtos e catálogo", desc: "Estrutura de dados de itens da loja com preço e estoque." },
      { num: "02", title: "Lógica do carrinho", desc: "Adicionar, alterar quantidade e remover itens." },
      { num: "03", title: "Mecanismo de cupons", desc: "Validação e cálculo percentual de desconto." },
      { num: "04", title: "Checkout final", desc: "Extrato consolidado da compra e commit!" }
    ],
    steps: [
      "Passo 1: Desenvolva a visualização dos produtos disponíveis.",
      "Passo 2: Crie as funções de manipulação do carrinho de compras.",
      "Passo 3: Implemente as regras de cálculo e validação de cupons."
    ],
    ctaHeading: "Bora construir essa loja online completa.",
    ctaSub: "Salve seu progresso criando uma conta, ou explore sem login.",
    isWeeklyPick: false
  },
  {
    id: "chat",
    title: "Chat em tempo real",
    subtitle: "Mensageria e eventos de interface",
    level: "Avançado",
    type: "Front-end", 
    tags: ["API", "Aplicação web", "Métodos"],
    quote: "Interface interativa simulando mensageria com histórico de conversas e alternância de participantes.",
    description: "Crie uma aplicação simulando troca de mensagens instantâneas entre usuários em um canal de estudos. Implemente rolagem automática de conversas, carimbo de data/hora e respostas automatizadas com atraso simulado.",
    estimatedTime: "~3h30",
    stepsCount: 3,
    language: "Livre",
    delivery: "GitHub",
    achievementId: "advanced_master",
    achievementTitle: "Mestre da Mensageria",
    objective: [
      "Construir uma interface fluida de troca de mensagens com histórico, remetentes e carimbo de horário.",
      "Simular respostas automáticas assíncronas de um bot de tutoria educacional."
    ],
    requirementsList: [
      { code: "R01", text: "Envio de mensagens por clique no botão e pela tecla Enter.", tag: "Aplicação web" },
      { code: "R02", text: "Identificação visual clara entre remetente (usuário) e destinatário (bot tutor).", tag: "Métodos" },
      { code: "R03", text: "Simulação de resposta automatizada após delay de 1.5s com feedback de digitação.", tag: "API" },
      { code: "R04", text: "Rolagem automática contínua ancorada na última mensagem recebida.", tag: "Aplicação web" }
    ],
    requirements: [
      "Permitir envio e visualização de mensagens com identificação do remetente e horário.",
      "Alternar rapidamente entre o perfil do usuário e um bot de mentoria escolar.",
      "Simular respostas automáticas do tutor após 1,5 segundo de envio da dúvida.",
      "Manter a rolagem automática sempre ancorada na mensagem mais recente."
    ],
    exampleTable: {
      title: "Respostas do bot tutor escolar",
      headers: ["TERMO / DÚVIDA", "RESPOSTA AUTOMATIZADA SIMULADA", "TEMPO DE RESPOSTA"],
      rows: [
        ["Ajuda com loop", "Laços de repetição (while, for) repetem comandos até uma condição ser falsa!", "1.5s"],
        ["O que é vetor?", "Vetor ou array é uma lista ordenada onde guardamos múltiplos valores!", "1.5s"],
        ["Como usar Git?", "Use git add . e depois git commit -m 'mensagem' para salvar seu projeto!", "1.5s"]
      ],
      note: "Dúvidas gerais recebem uma mensagem padrão de incentivo aos estudos."
    },
    terminalIO: "> Usuário [15:20]: Como faço para validar o código de um produto?\n  ... Tutor Commit! está digitando ...\n  ✓ Tutor Commit! [15:22]: Você pode usar uma condicional if/else comparando se o código existe no vetor do catálogo!\n------------------------------\n  MENSAGENS TROCADAS: 2\n  CANAL ATIVO: #duvidas-iniciantes",
    errorValidations: [
      "Mensagens vazias ou apenas espaços → ignorar envio sem criar balão vazio.",
      "Tentativa de spam repetitivo → limite didático de envio por segundo.",
      "Caracteres HTML em mensagens → sanitização para evitar injeção de scripts."
    ],
    acceptanceCriteria: [
      "Envio ágil com Enter e foco mantido no input.",
      "Balões de mensagens estilizados com distinção visual de cores.",
      "Simulação assíncrona de delay com setTimeout.",
      "Código documentado no repositório GitHub."
    ],
    guidedSteps: [
      { num: "01", title: "Layout do chat", desc: "Janela de rolagem, balões de diálogo e input de texto." },
      { num: "02", title: "Eventos de envio", desc: "Tratamento de clique e tecla Enter com sanitização." },
      { num: "03", title: "Bot inteligente", desc: "Simulação de delay com resposta contextual e commit!" }
    ],
    steps: [
      "Passo 1: Estruture o layout de mensagens com caixas de diálogo.",
      "Passo 2: Implemente o evento de envio por clique e pela tecla Enter.",
      "Passo 3: Crie a simulação de resposta do assistente de estudos."
    ],
    ctaHeading: "Bora conversar sobre código em tempo real.",
    ctaSub: "Salve seu progresso criando uma conta, ou explore sem login.",
    isWeeklyPick: false
  }
];

const ACHIEVEMENTS_DEFINITIONS = [
  {
    id: "welcome",
    title: "Bem-vindo ao Commit!",
    description: "Criou sua conta na plataforma e deu o pontapé inicial na sua jornada dev."
  },
  {
    id: "first_step",
    title: "Primeiro Passo",
    description: "Iniciou seu primeiro desafio no catálogo de projetos."
  },
  {
    id: "in_progress_50",
    title: "Mão na Massa",
    description: "Atingiu 50% de progresso prático em um dos desafios."
  },
  {
    id: "first_commit",
    title: "Primeiro Commit!",
    description: "Enviou seu primeiro repositório do GitHub registrado na plataforma."
  },
  {
    id: "first_completion",
    title: "Missão Cumprida",
    description: "Concluiu seu primeiro desafio com 100% dos requisitos finalizados!"
  },
  {
    id: "primeiro_caixa",
    title: "Primeiro caixa",
    description: "Concluiu o desafio Mercado e desbloqueou a conquista oficial do operador de caixa!"
  },
  {
    id: "profile_custom",
    title: "Identidade Dev",
    description: "Personalizou seu perfil, bio e sua tag individual de programador."
  },
  {
    id: "explorer",
    title: "Explorador Curioso",
    description: "Utilizou a busca e os filtros avançados no catálogo de desafios."
  },
  {
    id: "bookmarker",
    title: "Colecionador",
    description: "Salvou 3 ou mais desafios na sua lista de favoritos para estudar depois."
  },
  {
    id: "three_completed",
    title: "Programador Consistente",
    description: "Concluiu com sucesso 3 ou mais projetos na plataforma."
  },
  {
    id: "advanced_master",
    title: "Mestre dos Algoritmos",
    description: "Concluiu um projeto de nível Avançado com repositório entregue!"
  }
];

// ==========================================================================
// 2. HELPER DE ÍCONES SVG (Tabler Icons Inline)
// ==========================================================================

const Icons = {
  home: (cls = "") => `<svg class="${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg>`,
  target: (cls = "") => `<svg class="${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1"></circle></svg>`,
  user: (cls = "") => `<svg class="${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path></svg>`,
  trophy: (cls = "") => `<svg class="${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21l8 0"></path><path d="M12 17l0 4"></path><path d="M7 4l10 0"></path><path d="M17 4v8a5 5 0 0 1 -10 0v-8"></path><path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path></svg>`,
  lock: (cls = "") => `<svg class="${cls}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path><path d="M8 11v-4a4 4 0 0 1 8 0v4"></path></svg>`,
  bookmark: (cls = "", filled = false) => `<svg class="${cls}" width="20" height="20" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"></path></svg>`,
  search: (cls = "") => `<svg class="${cls}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>`,
  pencil: (cls = "") => `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path><path d="M13.5 6.5l4 4"></path></svg>`,
  arrowRight: (cls = "") => `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>`,
  check: (cls = "") => `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"></path></svg>`,
  x: (cls = "") => `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>`,
  alert: (cls = "") => `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"></path><path d="M12 16v.01"></path><path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path></svg>`,
  info: (cls = "") => `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path></svg>`,
  github: (cls = "") => `<svg class="${cls}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`,
  externalLink: (cls = "") => `<svg class="${cls}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>`,
  sun: (cls = "") => `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg>`,
  moon: (cls = "") => `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>`
};

// ==========================================================================
// 2.1. GERENCIADOR DE TEMA (MODO CLARO E MODO ESCURO — PDF IHC v3.0 Pág. 4)
// ==========================================================================

const THEME_STORAGE_KEY = "commit_theme";

function getCurrentTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === "dark" || saved === "light") return saved;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

function applyTheme(theme, notify = false) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  const iconEl = document.getElementById("theme-toggle-icon");
  const textEl = document.getElementById("theme-toggle-text");
  const btn = document.getElementById("btn-theme-toggle");

  if (iconEl && textEl) {
    if (theme === "dark") {
      iconEl.innerHTML = Icons.sun();
      textEl.textContent = "Modo Claro";
      if (btn) btn.title = "Alternar para Modo Claro";
    } else {
      iconEl.innerHTML = Icons.moon();
      textEl.textContent = "Modo Escuro";
      if (btn) btn.title = "Alternar para Modo Escuro";
    }
  }

  if (notify) {
    showToast(
      "Tema Atualizado",
      theme === "dark" ? "Modo escuro ativado com sucesso!" : "Modo claro ativado com sucesso!",
      "info"
    );
  }
}

function toggleTheme() {
  const current = getCurrentTheme();
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next, true);
}

// Aplicação imediata para evitar flashes de tema ao carregar
applyTheme(getCurrentTheme(), false);

// ==========================================================================
// 3. GERENCIADOR DE ESTADO E LOCALSTORAGE
// ==========================================================================

const STORAGE_KEYS = {
  USERS: "commit_users",
  CURRENT_USER_ID: "commit_current_user_id",
  USER_DATA_PREFIX: "commit_user_data_"
};

class StateManager {
  constructor() {
    this.initDefaultUsers();
  }

  initDefaultUsers() {
    let users = this.getUsers();
    if (!users || users.length === 0) {
      const defaultUser = {
        id: "user_pedro",
        name: "Pedro Silva",
        username: "pedro.dev",
        email: "pedro@commit.edu",
        password: "123",
        tag: "Iniciante",
        bio: "Estudante apaixonado por lógica de programação e desenvolvimento de software."
      };

      const secondUser = {
        id: "user_ana",
        name: "Ana Clara",
        username: "ana.dev",
        email: "ana@commit.edu",
        password: "123",
        tag: "Frontend",
        bio: "Explorando a construção de interfaces web acessíveis e dinâmicas."
      };

      users = [defaultUser, secondUser];
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

      // Dados pré-carregados para o usuário Pedro
      const pedroData = {
        challenges: {
          "mercado": {
            status: "in_progress",
            progress: 50,
            bookmarked: true,
            githubUrl: "https://github.com/pedro/desafio-mercado",
            githubDeliveredAt: "2026-11-05T14:30:00.000Z",
            checkedSteps: [0, 1]
          },
          "media-nota": {
            status: "completed",
            progress: 100,
            bookmarked: false,
            githubUrl: "https://github.com/pedro/media-de-notas",
            githubDeliveredAt: "2026-11-04T10:15:00.000Z",
            checkedSteps: [0, 1, 2, 3]
          },
          "padaria": {
            status: "in_progress",
            progress: 25,
            bookmarked: true,
            githubUrl: "",
            githubDeliveredAt: null,
            checkedSteps: [0]
          }
        },
        achievements: ["welcome", "first_step", "in_progress_50", "first_commit", "first_completion"]
      };

      const anaData = {
        challenges: {
          "clima": {
            status: "in_progress",
            progress: 75,
            bookmarked: true,
            githubUrl: "https://github.com/ana/clima-api",
            githubDeliveredAt: "2026-11-06T09:00:00.000Z",
            checkedSteps: [0, 1, 2]
          }
        },
        achievements: ["welcome", "first_step", "first_commit"]
      };

      localStorage.setItem(STORAGE_KEYS.USER_DATA_PREFIX + "user_pedro", JSON.stringify(pedroData));
      localStorage.setItem(STORAGE_KEYS.USER_DATA_PREFIX + "user_ana", JSON.stringify(anaData));
      
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER_ID, "user_pedro");
    }
  }

  getUsers() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    } catch (e) {
      return [];
    }
  }

  getCurrentUser() {
    const currentId = localStorage.getItem(STORAGE_KEYS.CURRENT_USER_ID);
    if (!currentId) return null;
    const users = this.getUsers();
    return users.find(u => u.id === currentId) || null;
  }

  setCurrentUser(userId) {
    if (userId) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER_ID, userId);
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER_ID);
    }
  }

  getUserData(userId) {
    if (!userId) return { challenges: {}, achievements: [] };
    const raw = localStorage.getItem(STORAGE_KEYS.USER_DATA_PREFIX + userId);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        return { challenges: {}, achievements: [] };
      }
    }
    const emptyData = { challenges: {}, achievements: [] };
    this.saveUserData(userId, emptyData);
    return emptyData;
  }

  saveUserData(userId, data) {
    if (!userId) return;
    localStorage.setItem(STORAGE_KEYS.USER_DATA_PREFIX + userId, JSON.stringify(data));
  }

  updateChallengeData(challengeId, updates) {
    const user = this.getCurrentUser();
    if (!user) return null;

    const data = this.getUserData(user.id);
    const existing = data.challenges[challengeId] || {
      status: "not_started",
      progress: 0,
      bookmarked: false,
      githubUrl: "",
      githubDeliveredAt: null,
      checkedSteps: []
    };

    data.challenges[challengeId] = { ...existing, ...updates };
    this.saveUserData(user.id, data);
    return data.challenges[challengeId];
  }

  toggleBookmark(challengeId) {
    const user = this.getCurrentUser();
    if (!user) return false;

    const data = this.getUserData(user.id);
    const existing = data.challenges[challengeId] || {
      status: "not_started",
      progress: 0,
      bookmarked: false,
      githubUrl: "",
      githubDeliveredAt: null,
      checkedSteps: []
    };

    existing.bookmarked = !existing.bookmarked;
    data.challenges[challengeId] = existing;
    this.saveUserData(user.id, data);

    const bookmarkedCount = Object.values(data.challenges).filter(c => c.bookmarked).length;
    if (bookmarkedCount >= 3) {
      this.unlockAchievement("bookmarker");
    }

    return existing.bookmarked;
  }

  unlockAchievement(achievementId) {
    const user = this.getCurrentUser();
    if (!user) return false;

    const data = this.getUserData(user.id);
    if (!data.achievements) data.achievements = [];

    if (!data.achievements.includes(achievementId)) {
      data.achievements.push(achievementId);
      this.saveUserData(user.id, data);

      const achDef = ACHIEVEMENTS_DEFINITIONS.find(a => a.id === achievementId);
      if (achDef) {
        showToast("Conquista Desbloqueada!", achDef.title, "achievement");
      }
      return true;
    }
    return false;
  }

  login(identifier, password) {
    const users = this.getUsers();
    const cleanId = identifier.trim().toLowerCase();
    const user = users.find(u => 
      (u.username.toLowerCase() === cleanId || u.email.toLowerCase() === cleanId) &&
      u.password === password
    );

    if (user) {
      this.setCurrentUser(user.id);
      this.unlockAchievement("welcome");
      return { success: true, user };
    }
    return { success: false, message: "Verifique os dados e tente novamente. Podemos ajudar?" };
  }

  register(name, username, email, password, tag, bio) {
    const users = this.getUsers();
    const cleanUsername = username.trim().toLowerCase().replace(/^@/, "");
    const cleanEmail = email.trim().toLowerCase();

    if (!name.trim()) return { success: false, message: "Opa! Informe seu nome completo." };
    if (!cleanUsername) return { success: false, message: "Opa! Informe um nome de usuário." };
    if (users.some(u => u.username.toLowerCase() === cleanUsername)) {
      return { success: false, message: "Este nome de usuário já está em uso. Tente outro!" };
    }
    if (users.some(u => u.email.toLowerCase() === cleanEmail)) {
      return { success: false, message: "Este e-mail já foi cadastrado." };
    }
    if (!password || password.length < 3) {
      return { success: false, message: "A senha deve ter pelo menos 3 caracteres." };
    }

    const newUser = {
      id: "user_" + Date.now(),
      name: name.trim(),
      username: cleanUsername,
      email: cleanEmail,
      password: password,
      tag: tag.trim() || "Iniciante",
      bio: bio.trim() || "Estudante de programação explorando o Commit!."
    };

    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    this.setCurrentUser(newUser.id);

    this.saveUserData(newUser.id, {
      challenges: {},
      achievements: ["welcome"]
    });

    showToast("Operação concluída.", `Bem-vindo ao Commit!, ${newUser.name}!`, "success");
    return { success: true, user: newUser };
  }

  // Login/cadastro via provedor externo (Google ou GitHub).
  // profile = { providerId, name, email, username, avatar, demo }
  loginWithProvider(provider, profile) {
    const users = this.getUsers();
    const cleanEmail = (profile.email || "").trim().toLowerCase();

    // 1) já existe conta ligada a este provedor? 2) já existe conta local com o mesmo e-mail? (vincula)
    let user = users.find(u => u.provider === provider && u.providerId === String(profile.providerId));
    if (!user && cleanEmail) {
      user = users.find(u => (u.email || "").toLowerCase() === cleanEmail);
      if (user) {
        user.provider = provider;
        user.providerId = String(profile.providerId);
      }
    }

    let isNew = false;
    if (!user) {
      isNew = true;
      // username único
      let base = (profile.username || cleanEmail.split("@")[0] || "user")
        .toLowerCase().replace(/[^a-z0-9._-]/g, "");
      let username = base || "user";
      let n = 1;
      while (users.some(u => (u.username || "").toLowerCase() === username)) {
        username = base + (++n);
      }
      user = {
        id: "user_" + provider + "_" + profile.providerId,
        name: profile.name || username,
        username,
        email: cleanEmail || (username + "@" + provider + ".commit"),
        password: null, // contas sociais não têm senha local
        provider,
        providerId: String(profile.providerId),
        avatar: profile.avatar || "",
        demo: !!profile.demo,
        tag: "Iniciante",
        bio: "Estudante de programação explorando o Commit!."
      };
      users.push(user);
    }

    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    this.setCurrentUser(user.id);
    if (isNew) {
      this.saveUserData(user.id, { challenges: {}, achievements: ["welcome"] });
    } else {
      this.unlockAchievement("welcome");
    }
    return { success: true, user, isNew };
  }

  updateProfile(name, username, tag, email, bio) {
    const user = this.getCurrentUser();
    if (!user) return { success: false, message: "Nenhum usuário logado." };

    const cleanName = name.trim();
    const cleanUsername = username.trim().toLowerCase().replace(/^@/, "");

    if (!cleanName) return { success: false, message: "O campo Nome não pode ficar vazio." };
    if (!cleanUsername) return { success: false, message: "O campo Nome de Usuário não pode ficar vazio." };

    const users = this.getUsers();
    if (users.some(u => u.id !== user.id && u.username.toLowerCase() === cleanUsername)) {
      return { success: false, message: "Este nome de usuário já pertence a outra conta." };
    }

    user.name = cleanName;
    user.username = cleanUsername;
    user.tag = tag.trim() || "Iniciante";
    user.email = email.trim() || user.email;
    user.bio = bio.trim() || user.bio;

    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = user;
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    }

    this.unlockAchievement("profile_custom");
    showToast("Operação concluída.", "Seu perfil foi atualizado com sucesso!", "success");
    return { success: true, user };
  }

  logout() {
    this.setCurrentUser(null);
    showToast("Sessão encerrada.", "Você saiu da sua conta.", "info");
  }
}

const state = new StateManager();

// ==========================================================================
// 3.1 LOGIN SOCIAL (GOOGLE / GITHUB)
// ==========================================================================
// Preencha as credenciais para ativar o login REAL. Enquanto estiverem vazias,
// os botões funcionam em MODO DEMONSTRAÇÃO (sem verificação de identidade).
const SOCIAL_AUTH_CONFIG = {
  // Google Cloud Console > APIs e serviços > Credenciais > ID do cliente OAuth (Aplicativo da Web)
  // Adicione a origem do site (ex.: http://localhost:5500) em "Origens JavaScript autorizadas".
  GOOGLE_CLIENT_ID: "",

  // GitHub > Settings > Developer settings > OAuth Apps (o "Client ID" é público)
  GITHUB_CLIENT_ID: "",
  // URL de um pequeno backend que troca o "code" pelo token usando o Client Secret
  // e devolve { id, login, name, email, avatar_url }. O secret NUNCA pode ficar no front-end.
  GITHUB_AUTH_PROXY_URL: ""
};

const GITHUB_STATE_KEY = "commit_github_oauth_state";

function finishSocialLogin(provider, profile) {
  const res = state.loginWithProvider(provider, profile);
  closeAuthModal();
  renderAllViews();
  const name = res.user.name;
  if (profile.demo) {
    showToast("Modo demonstração", `Login ${provider === "google" ? "Google" : "GitHub"} simulado para ${name}.`, "info");
  } else {
    showToast("Operação concluída.", res.isNew ? `Bem-vindo ao Commit!, ${name}!` : `Bem-vindo de volta, ${name}!`, "success");
  }
}

function showAuthError(message) {
  const errorEl = document.getElementById("auth-error-msg");
  if (!errorEl) return;
  errorEl.style.display = "flex";
  errorEl.innerHTML = `${Icons.alert()} ${message}`;
}

// ---------- GOOGLE (Google Identity Services, 100% front-end) ----------
function loginWithGoogle() {
  const clientId = SOCIAL_AUTH_CONFIG.GOOGLE_CLIENT_ID;

  // Modo demonstração
  if (!clientId) {
    const email = (window.prompt("MODO DEMONSTRAÇÃO — digite um e-mail Google fictício:", "aluno@gmail.com") || "").trim();
    if (!email) return;
    finishSocialLogin("google", {
      providerId: email.toLowerCase(),
      name: email.split("@")[0],
      email,
      username: email.split("@")[0],
      demo: true
    });
    return;
  }

  if (!window.google || !google.accounts || !google.accounts.oauth2) {
    showAuthError("Não foi possível carregar o login do Google. Verifique sua conexão e tente de novo.");
    return;
  }

  const client = google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    scope: "openid email profile",
    callback: async (tokenResponse) => {
      if (!tokenResponse || tokenResponse.error) {
        showAuthError("Login com Google cancelado ou negado.");
        return;
      }
      try {
        const r = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: "Bearer " + tokenResponse.access_token }
        });
        if (!r.ok) throw new Error("userinfo " + r.status);
        const info = await r.json();
        finishSocialLogin("google", {
          providerId: info.sub,
          name: info.name,
          email: info.email,
          username: (info.email || "").split("@")[0],
          avatar: info.picture
        });
      } catch (err) {
        console.error(err);
        showAuthError("Não conseguimos ler seu perfil do Google. Tente novamente.");
      }
    }
  });
  client.requestAccessToken({ prompt: "select_account" });
}

// ---------- GITHUB (OAuth Web Flow + backend proxy) ----------
function loginWithGithub() {
  const { GITHUB_CLIENT_ID, GITHUB_AUTH_PROXY_URL } = SOCIAL_AUTH_CONFIG;

  // Modo demonstração: busca o perfil PÚBLICO do usuário digitado (não prova que é o dono da conta)
  if (!GITHUB_CLIENT_ID || !GITHUB_AUTH_PROXY_URL) {
    const login = (window.prompt("MODO DEMONSTRAÇÃO — digite um usuário do GitHub:", "ananarcisio") || "").trim();
    if (!login) return;
    fetch("https://api.github.com/users/" + encodeURIComponent(login))
      .then(r => { if (!r.ok) throw new Error("not found"); return r.json(); })
      .then(u => finishSocialLogin("github", {
        providerId: u.id,
        name: u.name || u.login,
        email: u.email || "",
        username: u.login,
        avatar: u.avatar_url,
        demo: true
      }))
      .catch(() => showAuthError("Usuário do GitHub não encontrado."));
    return;
  }

  const stateToken = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random());
  sessionStorage.setItem(GITHUB_STATE_KEY, stateToken);
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: window.location.origin + window.location.pathname,
    scope: "read:user user:email",
    state: stateToken
  });
  window.location.href = "https://github.com/login/oauth/authorize?" + params.toString();
}

// Chamado ao carregar a página: se o GitHub redirecionou de volta com ?code=...
async function handleGithubRedirect() {
  const qs = new URLSearchParams(window.location.search);
  const code = qs.get("code");
  const returnedState = qs.get("state");
  if (!code || !returnedState) return false;

  const expected = sessionStorage.getItem(GITHUB_STATE_KEY);
  sessionStorage.removeItem(GITHUB_STATE_KEY);
  history.replaceState({}, "", window.location.pathname + window.location.hash);

  if (!expected || expected !== returnedState) {
    showToast("Erro", "Falha de segurança no login com GitHub (state inválido).", "error");
    return false;
  }
  try {
    const r = await fetch(SOCIAL_AUTH_CONFIG.GITHUB_AUTH_PROXY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code })
    });
    if (!r.ok) throw new Error("proxy " + r.status);
    const u = await r.json();
    const res = state.loginWithProvider("github", {
      providerId: u.id,
      name: u.name || u.login,
      email: u.email || "",
      username: u.login,
      avatar: u.avatar_url
    });
    showToast("Operação concluída.", res.isNew ? `Bem-vindo ao Commit!, ${res.user.name}!` : `Bem-vindo de volta, ${res.user.name}!`, "success");
    return true;
  } catch (err) {
    console.error(err);
    showToast("Erro", "Não foi possível concluir o login com GitHub.", "error");
    return false;
  }
}

// ==========================================================================
// 4. SISTEMA DE TOAST E NOTIFICAÇÕES VISUAIS
// ==========================================================================

function showToast(title, message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-message ${type}`;

  let iconSvg = Icons.info();
  if (type === "achievement") iconSvg = Icons.trophy();
  if (type === "success") iconSvg = Icons.check();
  if (type === "error") iconSvg = Icons.alert();

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-text">
      <strong>${title}</strong>
      <p>${message}</p>
    </div>
  `;

  toast.addEventListener("click", () => toast.remove());
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// ==========================================================================
// 5. RENDERIZAÇÃO DAS TELAS E COMPONENTES
// ==========================================================================

function renderTopUserBar() {
  const user = state.getCurrentUser();
  const userStatusWrap = document.getElementById("top-user-info");
  if (!userStatusWrap) return;

  if (user) {
    userStatusWrap.innerHTML = `
      <div class="user-status-pill">
        <span class="status-dot"></span>
        <span>Conectado como <strong>${escapeHtml(user.username)}</strong></span>
      </div>
      <button class="btn-header-action" id="btn-logout" title="Encerrar sessão">
        ${Icons.user()} Sair
      </button>
    `;
    const btnLogout = document.getElementById("btn-logout");
    if (btnLogout) {
      btnLogout.addEventListener("click", () => {
        state.logout();
        renderAllViews();
      });
    }
  } else {
    userStatusWrap.innerHTML = `
      <div class="user-status-pill guest">
        <span class="status-dot"></span>
        <span>Modo Visitante</span>
      </div>
      <button class="btn-header-action primary-cta" id="btn-open-auth">
        ${Icons.user()} Entrar / Cadastrar
      </button>
    `;
    const btnAuth = document.getElementById("btn-open-auth");
    if (btnAuth) {
      btnAuth.addEventListener("click", () => openAuthModal("login"));
    }
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
const STATUS_LABELS = {
  not_started: "Não iniciado",
  in_progress: "Em andamento",
  completed: "Concluído"
};
function createChallengeCardHtml(challenge, userChallengeData = null, showProgress = false) {
  const isBookmarked = userChallengeData?.bookmarked || false;
  const progress = userChallengeData?.progress || 0;
  const levelClass = challenge.level.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const statusKey = userChallengeData?.status || "not_started";
const tagsHtml = `<span class="tag-badge tech">Tecnologias: ${challenge.tags.map(t => escapeHtml(t)).join(", ")}</span>`;

  let progressHtml = "";
  if (showProgress) {
    progressHtml = `
      <div class="card-progress-wrap">
        <div class="progress-bar-outer" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar-inner" style="width: ${progress}%"></div>
        </div>
        <span class="progress-label">${progress}%</span>
      </div>
    `;
  }

  return `
    <article class="challenge-card level-card-${levelClass}" data-id="${challenge.id}">
      <div>
        <div class="card-top-row">
          <div class="card-title-group">
            <h3 class="card-title">${escapeHtml(challenge.title)}</h3>
            <p class="card-subtitle">${escapeHtml(challenge.subtitle)}</p>
          </div>
          <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" data-action="bookmark" data-id="${challenge.id}" title="${isBookmarked ? 'Remover dos favoritos' : 'Salvar nos favoritos'}" aria-label="Favoritar desafio">
            ${Icons.bookmark("", isBookmarked)}
          </button>
        </div>

       <div class="card-tags">
  <span class="tag-badge level-${levelClass}">Nível: ${escapeHtml(challenge.level)}</span>
  <span class="tag-badge meta">Tipo: ${escapeHtml(challenge.type || "Lógica")}</span>
<span class="tag-badge meta" title="Tempo estimado: você decide quando entregar">Tempo: ${escapeHtml(challenge.estimatedTime)}</span>  <span class="tag-badge meta status-${statusKey}">Status: ${STATUS_LABELS[statusKey]}</span>
  ${tagsHtml}
</div>

        <p class="card-description">"${escapeHtml(challenge.quote)}"</p>
      </div>

      <div class="card-footer">
        ${progressHtml}
        <button class="btn-open-challenge" data-action="open-challenge" data-id="${challenge.id}">
          Abrir desafio <span>&rarr;</span>
        </button>
      </div>
    </article>
  `;
}

// RENDERIZAÇÃO DA TELA HOME
function renderHomeView() {
  const user = state.getCurrentUser();
  const userData = state.getUserData(user?.id);

  const greetingEl = document.getElementById("home-greeting");
  if (greetingEl) {
    const displayName = user ? user.name.split(" ")[0] : "Usuário";
    greetingEl.innerHTML = `Olá, <span class="greeting-accent">${escapeHtml(displayName)}!</span>`;
  }

  const homeGrid = document.getElementById("home-cards-grid");
  if (homeGrid) {
    const featured = INITIAL_CHALLENGES.slice(0, 5);
    let html = "";

    featured.forEach((ch, idx) => {
      const uData = userData.challenges[ch.id];
      
      if (idx === 1) {
        html += `
          <div class="achievement-bubble">
            <span class="trophy-icon">${Icons.trophy()}</span>
            <span><strong>Ana</strong> desbloqueou uma conquista! Conclua 10 projetos de nível intermediário.</span>
          </div>
        `;
      } else if (idx === 3) {
        html += `
          <div class="achievement-bubble">
            <span class="trophy-icon">${Icons.trophy()}</span>
            <span><strong>Luiz</strong> desbloqueou uma conquista! Meu primeiro projeto difícil!</span>
          </div>
        `;
      }

      html += createChallengeCardHtml(ch, uData, false);
    });

    homeGrid.innerHTML = html;
  }

  const weeklyGrid = document.getElementById("weekly-picks-grid");
  if (weeklyGrid) {
    const weekly = INITIAL_CHALLENGES.filter(c => c.isWeeklyPick).slice(0, 3);
    weeklyGrid.innerHTML = weekly.map(ch => 
      createChallengeCardHtml(ch, userData.challenges[ch.id], false)
    ).join("");
  }

  const btnExploreAction = document.getElementById("btn-explore-action");
  if (btnExploreAction) {
    if (user) {
      btnExploreAction.textContent = "Ver meu progresso →";
      btnExploreAction.onclick = () => switchView("profile");
    } else {
      btnExploreAction.textContent = "Criar conta →";
      btnExploreAction.onclick = () => openAuthModal("register");
    }
  }

  const btnCtaAction = document.getElementById("btn-home-cta-action");
  if (btnCtaAction) {
    if (user) {
      btnCtaAction.textContent = "Explorar desafios →";
      btnCtaAction.onclick = () => switchView("catalog");
    } else {
      btnCtaAction.textContent = "Começar agora →";
      btnCtaAction.onclick = () => openAuthModal("register");
    }
  }
}

// RENDERIZAÇÃO DA TELA DE CATÁLOGO
let catalogFilter = {
  search: "",
  level: "Todos",
  tag: "Todos",
  status: "Todos"
};

function renderCatalogView() {
  const user = state.getCurrentUser();
  const userData = state.getUserData(user?.id);
  const catalogGrid = document.getElementById("catalog-cards-grid");
  if (!catalogGrid) return;

  const term = catalogFilter.search.trim().toLowerCase();

  const filtered = INITIAL_CHALLENGES.filter(ch => {
    if (term) {
      const matchTitle = ch.title.toLowerCase().includes(term);
      const matchSub = ch.subtitle.toLowerCase().includes(term);
      const matchQuote = ch.quote.toLowerCase().includes(term);
      const matchTags = ch.tags.some(t => t.toLowerCase().includes(term));
      const matchLevel = ch.level.toLowerCase().includes(term);
      if (!matchTitle && !matchSub && !matchQuote && !matchTags && !matchLevel) {
        return false;
      }
    }

    if (catalogFilter.level !== "Todos" && ch.level !== catalogFilter.level) {
      return false;
    }

    if (catalogFilter.tag !== "Todos" && !ch.tags.includes(catalogFilter.tag)) {
      return false;
    }

    if (catalogFilter.status !== "Todos") {
      const chData = userData.challenges[ch.id];
      if (catalogFilter.status === "Em andamento" && chData?.status !== "in_progress") return false;
      if (catalogFilter.status === "Concluídos" && chData?.status !== "completed") return false;
      if (catalogFilter.status === "Favoritos" && !chData?.bookmarked) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div class="empty-state-box" style="grid-column: 1 / -1;">
        <h3>Nenhum desafio encontrado</h3>
        <p>Não encontramos nenhum projeto correspondente aos filtros ou termos pesquisados.</p>
        <button class="btn-primary" id="btn-reset-catalog-filter">Limpar filtros de busca</button>
      </div>
    `;
    const btnReset = document.getElementById("btn-reset-catalog-filter");
    if (btnReset) {
      btnReset.onclick = () => {
        catalogFilter = { search: "", level: "Todos", tag: "Todos", status: "Todos" };
        const searchInput = document.getElementById("catalog-search-input");
        if (searchInput) searchInput.value = "";
        updateFilterPillsUi();
        renderCatalogView();
      };
    }
  } else {
    catalogGrid.innerHTML = filtered.map(ch => 
      createChallengeCardHtml(ch, userData.challenges[ch.id], false)
    ).join("");
  }

  if (term || catalogFilter.level !== "Todos" || catalogFilter.tag !== "Todos") {
    state.unlockAchievement("explorer");
  }
}

function updateFilterPillsUi() {
  document.querySelectorAll(".filter-pill[data-filter-group='level']").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.value === catalogFilter.level);
  });
  document.querySelectorAll(".filter-pill[data-filter-group='status']").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.value === catalogFilter.status);
  });
}

// RENDERIZAÇÃO DA TELA DE PERFIL
let currentProfileTab = "progress";

function renderProfileView() {
  const user = state.getCurrentUser();
  const profileHero = document.getElementById("profile-hero-content");
  const tabProgress = document.getElementById("profile-tab-progress-content");
  const tabAchievements = document.getElementById("profile-tab-achievements-content");

  if (!user) {
    if (profileHero) {
      profileHero.innerHTML = `
        <div class="profile-info-left">
          <div class="profile-name-row">
            <h1 class="profile-user-name">Modo Visitante</h1>
          </div>
          <p class="profile-handle">visitante.dev</p>
          <p style="margin-top: 12px; max-width: 500px;">Você está navegando sem login. Entre ou crie sua conta para registrar seu progresso, salvar favoritos e entregar repositórios no GitHub!</p>
          <div style="display: flex; gap: 12px; margin-top: 18px;">
            <button class="btn-secondary" onclick="openAuthModal('register')">Criar minha conta</button>
            <button class="btn-primary" onclick="openAuthModal('login')">Fazer login</button>
          </div>
        </div>
      `;
    }
    if (tabProgress) tabProgress.innerHTML = `<div class="empty-state-box"><p>Faça login para acompanhar seus desafios em andamento.</p></div>`;
    if (tabAchievements) tabAchievements.innerHTML = `<div class="empty-state-box"><p>Faça login para visualizar e desbloquear conquistas.</p></div>`;
    return;
  }

  const userData = state.getUserData(user.id);
  const userChallenges = Object.entries(userData.challenges || {});
  const completedCount = userChallenges.filter(([_, c]) => c.status === "completed").length;
  const inProgressList = userChallenges.filter(([_, c]) => c.status === "in_progress" || c.status === "completed");
  const achievementsCount = (userData.achievements || []).length;

  if (profileHero) {
    profileHero.innerHTML = `
      <div class="profile-decorative-ticks">
        <div class="profile-tick"></div>
        <div class="profile-tick"></div>
        <div class="profile-tick"></div>
      </div>

      <div class="profile-info-left">
        <div class="profile-name-row">
          <h1 class="profile-user-name">${escapeHtml(user.name)}</h1>
          <button class="btn-edit-profile" id="btn-trigger-edit-profile" title="Editar informações do perfil" aria-label="Editar perfil">
            ${Icons.pencil()}
          </button>
        </div>
        <p class="profile-handle">${escapeHtml(user.username.startsWith('@') ? user.username : '@' + user.username)}</p>

        <div class="profile-badges-row">
          <span class="profile-stat-badge accent-secondary"><strong>${achievementsCount}</strong> Conquistas</span>
          <span class="profile-stat-badge"><strong>${completedCount}</strong> Desafios feitos</span>
          <span class="profile-stat-badge">Tag: <strong>${escapeHtml(user.tag || "Iniciante")}</strong></span>
        </div>
      </div>

      <div class="profile-art-right">
        <!-- Estrela Sparkle com cores oficiais do Commit! -->
        <svg class="profile-star-sparkle" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 0L27.5 16.5L44 20L27.5 23.5L24 40L20.5 23.5L4 20L20.5 16.5L24 0Z" fill="#0D8FA8" stroke="#17324D" stroke-width="2.5" stroke-linejoin="round"/>
        </svg>

        <!-- Ondas topográficas vetoriais com a paleta oficial -->
        <svg class="profile-wave-lines" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 90C40 70 80 110 130 60C160 30 180 40 200 50" stroke="#0D8FA8" stroke-width="2.2" fill="none"/>
          <path d="M10 80C45 60 85 100 135 50C165 20 185 30 200 40" stroke="#17324D" stroke-width="2.2" fill="none"/>
          <path d="M10 70C50 50 90 90 140 40C170 10 190 20 200 30" stroke="#0D8FA8" stroke-width="2.2" fill="none"/>
          <path d="M10 60C55 40 95 80 145 30C175 0 195 10 200 20" stroke="#17324D" stroke-width="2.2" fill="none"/>
        </svg>
      </div>
    `;

    const btnEdit = document.getElementById("btn-trigger-edit-profile");
    if (btnEdit) {
      btnEdit.addEventListener("click", openProfileEditModal);
    }
  }

  const btnTabProgress = document.getElementById("btn-tab-progress");
  const btnTabAchievements = document.getElementById("btn-tab-achievements");
  if (btnTabProgress && btnTabAchievements) {
    btnTabProgress.classList.toggle("active", currentProfileTab === "progress");
    btnTabAchievements.classList.toggle("active", currentProfileTab === "achievements");
  }

  // Aba 1: Desafios em Andamento
  if (tabProgress) {
    tabProgress.style.display = currentProfileTab === "progress" ? "block" : "none";
    
    if (inProgressList.length === 0) {
      tabProgress.innerHTML = `
        <div class="empty-state-box">
          <h3>Nenhum desafio em andamento ainda</h3>
          <p>Você ainda não iniciou nenhum desafio prático. Escolha seu primeiro desafio no catálogo e comece a praticar!</p>
          <button class="btn-primary" onclick="switchView('catalog')">Ir para Explorar desafios &rarr;</button>
        </div>
      `;
    } else {
      let cardsHtml = "";
      inProgressList.forEach(([chId, chData]) => {
        const fullChallenge = INITIAL_CHALLENGES.find(c => c.id === chId);
        if (fullChallenge) {
          cardsHtml += createChallengeCardHtml(fullChallenge, chData, true);
        }
      });
      tabProgress.innerHTML = `<div class="cards-grid">${cardsHtml}</div>`;
    }
  }

  // Aba 2: Conquistas
  if (tabAchievements) {
    tabAchievements.style.display = currentProfileTab === "achievements" ? "block" : "none";
    
    const userAchs = userData.achievements || [];
    let achsHtml = "";

    ACHIEVEMENTS_DEFINITIONS.forEach(ach => {
      const isUnlocked = userAchs.includes(ach.id);
      achsHtml += `
        <div class="achievement-row-card ${isUnlocked ? 'unlocked' : 'locked'}">
          <div class="achievement-icon-circle">
            ${isUnlocked ? Icons.trophy() : Icons.lock()}
          </div>
          <div class="achievement-details">
            <h4>${escapeHtml(ach.title)}</h4>
            <p>${escapeHtml(ach.description)}</p>
          </div>
          <span class="achievement-status-tag ${isUnlocked ? 'unlocked' : 'locked'}">
            ${isUnlocked ? '✓ Desbloqueada' : 'Bloqueada'}
          </span>
        </div>
      `;
    });

    tabAchievements.innerHTML = `<div class="achievements-list">${achsHtml}</div>`;
  }
}

let currentChallengeId = "mercado";

function renderAllViews() {
  renderTopUserBar();
  renderHomeView();
  renderCatalogView();
  renderChallengeView(currentChallengeId);
  renderProfileView();
}

function switchView(viewName) {
  const views = {
    home: document.getElementById("view-home"),
    catalog: document.getElementById("view-catalog"),
    challenge: document.getElementById("view-challenge"),
    profile: document.getElementById("view-profile")
  };

  const navItems = {
    home: document.getElementById("nav-home"),
    catalog: document.getElementById("nav-catalog"),
    profile: document.getElementById("nav-profile")
  };

  const topNavItems = {
    home: document.getElementById("top-nav-home"),
    challenge: document.getElementById("top-nav-challenge"),
    profile: document.getElementById("top-nav-profile")
  };

  Object.entries(views).forEach(([name, el]) => {
    if (el) el.classList.toggle("active", name === viewName);
  });

  Object.entries(navItems).forEach(([name, btn]) => {
    if (btn) {
      if (name === "catalog" && viewName === "challenge") {
        btn.classList.add("active");
      } else {
        btn.classList.toggle("active", name === viewName);
      }
    }
  });

  Object.entries(topNavItems).forEach(([name, btn]) => {
    if (btn) btn.classList.toggle("active", name === viewName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (viewName === "home") renderHomeView();
  if (viewName === "catalog") renderCatalogView();
  if (viewName === "challenge") renderChallengeView(currentChallengeId);
  if (viewName === "profile") renderProfileView();
}

// ==========================================================================
// 6. INTEGRAÇÃO E RENDERIZAÇÃO DA TELA DE DETALHES DO DESAFIO
// ==========================================================================

function openChallenge(challengeId) {
  if (challengeId) {
    currentChallengeId = challengeId;
  }
  renderChallengeView(currentChallengeId);
  switchView("challenge");
}

function openChallengeModal(challengeId) {
  openChallenge(challengeId);
}

function closeChallengeModal() {
  const modal = document.getElementById("modal-challenge");
  if (modal) {
    modal.classList.remove("active");
  }
  document.body.style.overflow = "";
}

const GUEST_STORAGE_KEY = "commit_guest_data";

function getGuestChallengeData(challengeId) {
  try {
    const raw = localStorage.getItem(GUEST_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed[challengeId] || null;
  } catch (e) {
    return null;
  }
}

function saveGuestChallengeData(challengeId, chData) {
  try {
    const raw = localStorage.getItem(GUEST_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    parsed[challengeId] = chData;
    localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(parsed));
  } catch (e) {}
}

function renderChallengeView(challengeId = null) {
  if (!challengeId) challengeId = currentChallengeId || "mercado";
  const challenge = INITIAL_CHALLENGES.find(c => c.id === challengeId) || INITIAL_CHALLENGES[0];
  currentChallengeId = challenge.id;

  const user = state.getCurrentUser();
  const userData = state.getUserData(user?.id);
  const guestData = !user ? getGuestChallengeData(challenge.id) : null;
  const chData = (user ? userData.challenges[challenge.id] : guestData) || {
    status: "not_started",
    progress: 0,
    bookmarked: false,
    githubUrl: "",
    githubDeliveredAt: null,
    checkedSteps: [],
    checkedErrors: [],
    checkedAcceptance: []
  };

  // 1. Trilha de Navegação (Breadcrumbs)
  const bcCatalog = document.getElementById("ch-breadcrumb-catalog");
  if (bcCatalog) {
    bcCatalog.onclick = () => switchView("catalog");
  }

  const bcLevel = document.getElementById("ch-breadcrumb-level");
  if (bcLevel) {
    bcLevel.textContent = challenge.level;
    bcLevel.onclick = () => {
      catalogFilter.level = challenge.level;
      updateFilterPillsUi();
      renderCatalogView();
      switchView("catalog");
    };
  }

  const bcTitle = document.getElementById("ch-breadcrumb-title");
  if (bcTitle) {
    bcTitle.textContent = challenge.title;
  }

  // 2. Card Principal Hero Ciano
  const titleEl = document.getElementById("ch-hero-title");
  if (titleEl) titleEl.textContent = challenge.title;

  const subtitleEl = document.getElementById("ch-hero-subtitle");
  if (subtitleEl) subtitleEl.textContent = challenge.subtitle;

  const quoteEl = document.getElementById("ch-hero-quote");
  if (quoteEl) quoteEl.textContent = `"${challenge.quote}"`;

    // Tags do Hero
  const tagsEl = document.getElementById("ch-hero-tags");        // ← volta
  if (tagsEl) {                                                  // ← volta
    const statusKey = chData?.status || "not_started";
    let tagsHtml = `<span class="hero-tag-level">Nível: ${escapeHtml(challenge.level)}</span>`;
    tagsHtml += `<span class="hero-tag">Tipo: ${escapeHtml(challenge.type || "Lógica")}</span>`;
    tagsHtml += `<span class="hero-tag">Tempo: ${escapeHtml(challenge.estimatedTime)}</span>`;
    tagsHtml += `<span class="hero-tag">Status: ${STATUS_LABELS[statusKey]}</span>`;
    tagsHtml += `<span class="hero-tag">Tecnologias: ${challenge.tags.map(t => escapeHtml(t)).join(", ")}</span>`;
    tagsEl.innerHTML = tagsHtml;
  }                                                              // ← volta

  // Botão Favoritar no topo do Hero
  const btnBookmark = document.getElementById("btn-hero-bookmark");
  if (btnBookmark) {
    btnBookmark.classList.toggle("active", chData.bookmarked);
    btnBookmark.innerHTML = Icons.bookmark("", chData.bookmarked);
    btnBookmark.title = chData.bookmarked ? "Remover dos favoritos" : "Salvar desafio nos favoritos";
    btnBookmark.onclick = () => {
      if (!state.getCurrentUser()) {
        showToast("Aviso", "Faça login para salvar desafios nos favoritos!", "info");
        openAuthModal("login");
        return;
      }
      const isBookmarked = state.toggleBookmark(challenge.id);
      btnBookmark.classList.toggle("active", isBookmarked);
      btnBookmark.innerHTML = Icons.bookmark("", isBookmarked);
      const btnSaveText = document.getElementById("btn-hero-save-text");
      if (btnSaveText) btnSaveText.textContent = isBookmarked ? "Desafio salvo" : "Salvar desafio";
      showToast(
        isBookmarked ? "Desafio Salvo!" : "Desafio Removido",
        isBookmarked ? "Projeto adicionado aos seus favoritos." : "Projeto removido dos favoritos.",
        "info"
      );
      renderAllViews();
    };
  }

  // Botão "Salvar desafio" na barra de ações
  const btnSave = document.getElementById("btn-hero-save");
  const btnSaveText = document.getElementById("btn-hero-save-text");
  if (btnSaveText) {
    btnSaveText.textContent = chData.bookmarked ? "Desafio salvo" : "Salvar desafio";
  }
  if (btnSave) {
    btnSave.onclick = () => {
      if (!state.getCurrentUser()) {
        showToast("Aviso", "Faça login para salvar desafios nos favoritos!", "info");
        openAuthModal("login");
        return;
      }
      const isBookmarked = state.toggleBookmark(challenge.id);
      if (btnSaveText) btnSaveText.textContent = isBookmarked ? "Desafio salvo" : "Salvar desafio";
      if (btnBookmark) {
        btnBookmark.classList.toggle("active", isBookmarked);
        btnBookmark.innerHTML = Icons.bookmark("", isBookmarked);
      }
      showToast(
        isBookmarked ? "Desafio Salvo!" : "Desafio Removido",
        isBookmarked ? "Projeto adicionado aos seus favoritos." : "Projeto removido dos favoritos.",
        "info"
      );
      renderAllViews();
    };
  }

  // Botão "Começar desafio" / "Continuar desafio"
  const btnStart = document.getElementById("btn-hero-start");
  const btnStartText = document.getElementById("btn-hero-start-text");
  if (btnStartText) {
    if (chData.status === "completed") {
      btnStartText.textContent = "Desafio concluído ✓";
    } else if (chData.status === "in_progress") {
      btnStartText.textContent = "Continuar desafio";
    } else {
      btnStartText.textContent = "Começar desafio";
    }
  }
  if (btnStart) {
    btnStart.onclick = () => {
      const user = state.getCurrentUser();
      if (!user) {
        showToast("Aviso", "Faça login ou crie uma conta para registrar seu progresso!", "info");
        openAuthModal("login");
        return;
      }
      if (chData.status === "not_started") {
        const updated = state.updateChallengeData(challenge.id, {
          status: "in_progress",
          progress: chData.progress > 0 ? chData.progress : 20,
          checkedSteps: chData.checkedSteps?.length ? chData.checkedSteps : [0]
        });
        state.unlockAchievement("first_step");
        showToast("Desafio Iniciado!", "Excelente! Siga os requisitos passo a passo.", "success");
        renderChallengeView(challenge.id);
        renderAllViews();
      }
      const reqSec = document.getElementById("spec-card-requirements");
      reqSec?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  // 3. Coluna Lateral de Metadados (2x2 + Card Conquista)
  const statTime = document.getElementById("ch-stat-time");
  if (statTime) statTime.textContent = challenge.estimatedTime || "~2h";

  const statSteps = document.getElementById("ch-stat-steps");
  if (statSteps) statSteps.textContent = challenge.stepsCount || "4";

  const statLang = document.getElementById("ch-stat-lang");
  if (statLang) statLang.textContent = challenge.language || "Livre";

  const statDelivery = document.getElementById("ch-stat-delivery");
  if (statDelivery) statDelivery.textContent = challenge.delivery || "GitHub";

  const achLink = document.getElementById("ch-ach-link-title");
  if (achLink) {
    achLink.textContent = challenge.achievementTitle || "Conquista especial";
    achLink.onclick = () => {
      currentProfileTab = "achievements";
      switchView("profile");
    };
  }

  // 4. Especificações do Desafio (6 Cards Coloridos)
  // Card 1: Objetivo (Amarelo)
  const objBody = document.getElementById("spec-body-objective");
  if (objBody) {
    objBody.innerHTML = (challenge.objective || []).map(p => 
      `<p style="margin: 0 0 10px 0;">${escapeHtml(p)}</p>`
    ).join("");
  }

  // Card 2: Requisitos (Branco/Neutro) com Badges 001..005 e Tags
  const reqBody = document.getElementById("spec-body-requirements");
  if (reqBody) {
    const reqList = challenge.requirementsList || (challenge.requirements || []).map((r, i) => ({
      code: `00${i + 1}`,
      text: r,
      tag: challenge.tags[i % challenge.tags.length] || "Código"
    }));
    const checked = chData.checkedSteps || [];

    let html = `<div class="spec-req-list">`;
    reqList.forEach((reqItem, idx) => {
      const isChecked = checked.includes(idx);
      const codeNum = reqItem.code.startsWith("R") ? reqItem.code.replace("R", "00") : reqItem.code;
      html += `
        <label class="req-checkbox-interactive spec-req-item">
          <input type="checkbox" data-ch-req-idx="${idx}" ${isChecked ? 'checked' : ''}>
          <span class="req-badge-code">${escapeHtml(codeNum)}</span>
          <span class="req-text-wrap">
            ${escapeHtml(reqItem.text)}
            ${reqItem.tag ? `<span class="req-tag-inline">${escapeHtml(reqItem.tag)}</span>` : ''}
          </span>
        </label>
      `;
    });
    html += `</div>`;
    reqBody.innerHTML = html;

    reqBody.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.addEventListener("change", (e) => {
        const user = state.getCurrentUser();
        if (!user) {
          showToast("Aviso", "Faça login para salvar o progresso dos requisitos!", "error");
          e.target.checked = !e.target.checked;
          openAuthModal("login");
          return;
        }

        const idx = parseInt(e.target.dataset.chReqIdx);
        let newChecked = [...(chData.checkedSteps || [])];
        if (e.target.checked) {
          if (!newChecked.includes(idx)) newChecked.push(idx);
        } else {
          newChecked = newChecked.filter(i => i !== idx);
        }
        chData.checkedSteps = newChecked;
        checkAndRedirect(challenge, chData);
state.updateChallengeData(challenge.id, chData);
renderChallengeView(challenge.id);
        const total = reqList.length;
        const progressPercent = Math.round((newChecked.length / total) * 100);
        chData.progress = progressPercent;

        if (progressPercent === 100) {
          chData.status = "completed";
          state.unlockAchievement("first_completion");
          if (challenge.achievementId) {
            state.unlockAchievement(challenge.achievementId);
          }
          if (challenge.level === "Avançado") {
            state.unlockAchievement("advanced_master");
          }
          const uData = state.getUserData(user.id);
          const compCount = Object.values(uData.challenges).filter(c => c.status === "completed").length;
          if (compCount >= 3) {
            state.unlockAchievement("three_completed");
          }
          showToast("Parabéns!", "Você concluiu todos os requisitos do desafio!", "achievement");
        } else if (progressPercent > 0) {
          chData.status = "in_progress";
          state.unlockAchievement("first_step");
          if (progressPercent >= 50) {
            state.unlockAchievement("in_progress_50");
          }
        } else {
          chData.status = chData.githubUrl ? "completed" : "not_started";
        }

        state.updateChallengeData(challenge.id, chData);
        renderChallengeView(challenge.id);
        renderAllViews();
      });
    });
  }

  // Card 3: Catálogo de Exemplo (Ciano Suave / Tabela)
  const exTitle = document.getElementById("spec-title-example");
  if (exTitle) exTitle.textContent = challenge.exampleTable?.title || "Catálogo de exemplo";

  const exBody = document.getElementById("spec-body-example");
  if (exBody && challenge.exampleTable) {
    const t = challenge.exampleTable;
    exBody.innerHTML = `
      <div class="spec-table-wrap">
        <table class="spec-data-table">
          <thead>
            <tr>
              ${t.headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${t.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
      ${t.note ? `<p class="spec-table-note">${escapeHtml(t.note)}</p>` : ''}
    `;
  }

  // Card 4: Entrada & Saída (Terminal Preto)
  const termBody = document.getElementById("spec-body-terminal");
  if (termBody && challenge.terminalIO) {
    const lines = challenge.terminalIO.split("\n");
    const formattedLines = lines.map(line => {
      const escaped = escapeHtml(line);
      if (line.startsWith(">")) {
        return `<span class="term-prompt">&gt;</span>${escapeHtml(line.slice(1))}`;
      } else if (line.includes("✗")) {
        return `<span class="term-error">${escaped}</span>`;
      } else if (line.includes("✓")) {
        return `<span class="term-success">${escaped}</span>`;
      } else if (line.includes("TOTAL") || line.includes("NOVO PROGRESSO") || line.includes("CIDADE:") || line.includes("ENTROPIA:")) {
        return `<span class="term-highlight">${escaped}</span>`;
      }
      return escaped;
    }).join("\n");
    termBody.innerHTML = `<div class="spec-terminal-box">${formattedLines}</div>`;
  }

  // Card 5: Validação de Erros (Coral / Salmão) — Checkboxes interativos para validação das tratativas
  const errBody = document.getElementById("spec-body-errors");
  if (errBody) {
    const errorList = challenge.errorValidations || [];
    const checkedErrors = chData.checkedErrors || [];
    const badgeEl = document.getElementById("spec-errors-badge");
    if (badgeEl) {
      badgeEl.textContent = `${checkedErrors.length}/${errorList.length}`;
      badgeEl.title = `${checkedErrors.length} de ${errorList.length} tratativas validadas`;
    }

    errBody.innerHTML = `
      <div class="spec-error-list">
        ${errorList.map((item, idx) => {
          const isChecked = checkedErrors.includes(idx);
          return `
            <label class="spec-error-item ${isChecked ? 'completed' : ''}">
              <input type="checkbox" data-ch-error-idx="${idx}" ${isChecked ? 'checked' : ''}>
              <span>${escapeHtml(item)}</span>
            </label>
          `;
        }).join("")}
      </div>
    `;

    errBody.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.addEventListener("change", (e) => {
        const user = state.getCurrentUser();
        const idx = parseInt(e.target.dataset.chErrorIdx);
        let newChecked = [...(chData.checkedErrors || [])];

        if (e.target.checked) {
          if (!newChecked.includes(idx)) newChecked.push(idx);
        } else {
          newChecked = newChecked.filter(i => i !== idx);
        }
        chData.checkedErrors = newChecked;
        checkAndRedirect(challenge, chData);
state.updateChallengeData(challenge.id, chData);
renderChallengeView(challenge.id);
        e.target.closest(".spec-error-item")?.classList.toggle("completed", e.target.checked);

        if (badgeEl) {
          badgeEl.textContent = `${newChecked.length}/${errorList.length}`;
        }

        if (user) {
          state.updateChallengeData(challenge.id, chData);
        } else {
          saveGuestChallengeData(challenge.id, chData);
        }

        if (newChecked.length === errorList.length && errorList.length > 0) {
          showToast("Tratativas Validadas!", "Todas as regras de validação de erro foram marcadas como implementadas.", "info");
        }
      });
    });
  }

  // Card 6: Critérios de Aceite (Verde Menta) — Checkboxes interativos
  const accBody = document.getElementById("spec-body-acceptance");
  if (accBody) {
    const criteriaList = challenge.acceptanceCriteria || [];
    const checkedAcceptance = chData.checkedAcceptance !== undefined ? 
      chData.checkedAcceptance : 
      (chData.status === "completed" ? criteriaList.map((_, i) => i) : [0, 1, 2, 3]);
    chData.checkedAcceptance = checkedAcceptance;

    const badgeEl = document.getElementById("spec-acceptance-badge");
    if (badgeEl) {
      badgeEl.textContent = `${checkedAcceptance.length}/${criteriaList.length}`;
      badgeEl.title = `${checkedAcceptance.length} de ${criteriaList.length} critérios atendidos`;
    }

    accBody.innerHTML = `
      <div class="spec-acceptance-list">
        ${criteriaList.map((crit, idx) => {
          const isChecked = checkedAcceptance.includes(idx);
          return `
            <label class="spec-acceptance-item ${isChecked ? 'completed' : ''}">
              <input type="checkbox" data-ch-acc-idx="${idx}" ${isChecked ? 'checked' : ''}>
              <span>${escapeHtml(crit)}</span>
            </label>
          `;
        }).join("")}
      </div>
    `;

    accBody.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.addEventListener("change", (e) => {
        const user = state.getCurrentUser();
        const idx = parseInt(e.target.dataset.chAccIdx);
        let newChecked = [...(chData.checkedAcceptance || [])];

        if (e.target.checked) {
          if (!newChecked.includes(idx)) newChecked.push(idx);
        } else {
          newChecked = newChecked.filter(i => i !== idx);
        }
        chData.checkedAcceptance = newChecked;
        checkAndRedirect(challenge, chData);
state.updateChallengeData(challenge.id, chData);
renderChallengeView(challenge.id);
        e.target.closest(".spec-acceptance-item")?.classList.toggle("completed", e.target.checked);

        if (badgeEl) {
          badgeEl.textContent = `${newChecked.length}/${criteriaList.length}`;
        }

        if (user) {
          state.updateChallengeData(challenge.id, chData);
        } else {
          saveGuestChallengeData(challenge.id, chData);
        }

        if (newChecked.length === criteriaList.length && criteriaList.length > 0) {
          showToast("Critérios Atendidos!", "Todos os critérios de aceite foram marcados como cumpridos.", "success");
        }
      });
    });
  }

  // 5. Etapas Guiadas
  const stepsCont = document.getElementById("ch-guided-steps-container");
  if (stepsCont) {
    stepsCont.innerHTML = (challenge.guidedSteps || []).map(step => `
      <div class="guided-step-card">
        <span class="step-num-badge">${escapeHtml(step.num)}</span>
        <h4 class="step-card-title">${escapeHtml(step.title)}</h4>
        <p class="step-card-desc">${escapeHtml(step.desc)}</p>
      </div>
    `).join("");
  }

  // 6. Entrega do Desafio com GitHub
  renderChallengeDelivery(challenge, chData);

  // 7. Banner CTA Inferior
  const ctaHeading = document.getElementById("ch-cta-heading");
  if (ctaHeading) ctaHeading.textContent = challenge.ctaHeading || "Bora codar este desafio.";

  const ctaSub = document.getElementById("ch-cta-sub");
  if (ctaSub) ctaSub.textContent = challenge.ctaSub || "Salve seu progresso criando uma conta, ou explore sem login.";

  const btnChBottomCta = document.getElementById("btn-ch-bottom-cta");
  const btnChBottomCtaText = document.getElementById("btn-ch-bottom-cta-text");
  if (btnChBottomCtaText) {
    btnChBottomCtaText.textContent = user ? (chData.status === "completed" ? "Ver entrega" : "Começar agora") : "Começar agora";
  }
  if (btnChBottomCta) {
    btnChBottomCta.onclick = () => {
      const user = state.getCurrentUser();
      if (!user) {
        openAuthModal("register");
      } else {
        const targetSec = chData.status === "completed" ? 
          document.getElementById("challenge-delivery-section") : 
          document.getElementById("spec-card-requirements");
        targetSec?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  }
}

function renderChallengeDelivery(challenge, chData) {
  const statusIndicator = document.getElementById("ch-delivery-status-indicator");
  if (statusIndicator) {
    let statusBadgeClass = "neutral";
    let statusBadgeText = "Não iniciado";
    if (chData.status === "completed") {
      statusBadgeClass = "success";
      statusBadgeText = "Concluído";
    } else if (chData.status === "in_progress") {
      statusBadgeClass = "info";
      statusBadgeText = "Em andamento";
    }

    statusIndicator.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="status-badge ${statusBadgeClass}">${statusBadgeText}</span>
        <strong style="font-size: 14px; color: var(--color-primary);">${chData.progress}%</strong>
      </div>
    `;
  }

  const contentBody = document.getElementById("ch-delivery-content-body");
  if (!contentBody) return;

  if (chData.githubUrl) {
    contentBody.innerHTML = `
      <div class="delivery-submitted-box">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--color-success); letter-spacing: 0.5px;">
            ${Icons.check()} Repositório entregue no GitHub
          </span>
          <a href="${escapeHtml(chData.githubUrl)}" target="_blank" rel="noopener noreferrer" class="delivery-link-anchor">
            ${Icons.github()} ${escapeHtml(chData.githubUrl)} ${Icons.externalLink()}
          </a>
          <span style="font-size: 11px; color: var(--color-text-muted);">
            Entregue em: ${new Date(chData.githubDeliveredAt || Date.now()).toLocaleDateString("pt-BR")}
          </span>
        </div>
        <div style="display: flex; gap: 8px;">
          <button type="button" class="btn-outline btn-sm" id="btn-delivery-edit">Alterar link</button>
          <button type="button" class="btn-outline btn-sm" id="btn-delivery-remove" style="color: var(--color-error);">Remover</button>
        </div>
      </div>
    `;

    document.getElementById("btn-delivery-edit")?.addEventListener("click", () => {
      renderDeliveryInputForm(challenge, chData, chData.githubUrl);
    });

    document.getElementById("btn-delivery-remove")?.addEventListener("click", () => {
      const user = state.getCurrentUser();
      if (!user) return;
      chData.githubUrl = "";
      chData.githubDeliveredAt = null;
      if (chData.progress === 100 && (!chData.checkedSteps || chData.checkedSteps.length < (challenge.requirementsList?.length || 4))) {
        chData.status = "in_progress";
      }
      state.updateChallengeData(challenge.id, chData);
      renderChallengeView(challenge.id);
      renderAllViews();
      showToast("Entrega Removida", "O link do repositório foi desvinculado.", "info");
    });
  } else {
    renderDeliveryInputForm(challenge, chData, "");
  }
}

function renderDeliveryInputForm(challenge, chData, initialVal = "") {
  const contentBody = document.getElementById("ch-delivery-content-body");
  if (!contentBody) return;

  contentBody.innerHTML = `
    <div class="delivery-form-grid">
      <p style="font-size: var(--text-small); color: var(--color-primary); font-weight: 700; margin: 0;">
        Insira a URL do seu repositório no GitHub contendo a solução do desafio:
      </p>
      <div class="delivery-input-group">
        <input type="url" id="input-delivery-github" class="form-control delivery-input-url" placeholder="https://github.com/seu-usuario/desafio-${challenge.id}" value="${escapeHtml(initialVal)}">
        <button type="button" class="btn-secondary" id="btn-submit-delivery">
          ${Icons.github()} Salvar repositório &rarr;
        </button>
      </div>
      <div id="delivery-error-msg" class="field-error-msg" style="display: none;"></div>
    </div>
  `;

  document.getElementById("btn-submit-delivery")?.addEventListener("click", () => {
    const input = document.getElementById("input-delivery-github");
    const errorEl = document.getElementById("delivery-error-msg");
    const val = input.value.trim();

    const user = state.getCurrentUser();
    if (!user) {
      showToast("Aviso", "Você precisa estar conectado para registrar a entrega do repositório!", "error");
      openAuthModal("login");
      return;
    }

    const githubRegex = /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/;
    if (!githubRegex.test(val)) {
      input.classList.add("has-error");
      errorEl.style.display = "flex";
      errorEl.innerHTML = `${Icons.alert()} Opa! Insira um endereço válido do GitHub. Exemplo: https://github.com/usuario/meu-projeto`;
      return;
    }

    input.classList.remove("has-error");
    errorEl.style.display = "none";

       chData.githubUrl = val;
    chData.githubDeliveredAt = new Date().toISOString();

    // Verifica se já está tudo completo
    const reqsOk = (chData.checkedSteps?.length || 0) === (challenge.requirementsList?.length || 0);
    const errsOk = (chData.checkedErrors?.length || 0) === (challenge.errorValidations?.length || 0);
    const accsOk = (chData.checkedAcceptance?.length || 0) === (challenge.acceptanceCriteria?.length || 0);

    if (reqsOk && errsOk && accsOk) {
        chData.status = "completed";
        chData.progress = 100;
        state.unlockAchievement("first_completion");
        if (challenge.achievementId) state.unlockAchievement(challenge.achievementId);
        if (challenge.level === "Avançado") state.unlockAchievement("advanced_master");
        
        const uData = state.getUserData(user.id);
        if (Object.values(uData.challenges).filter(c => c.status === "completed").length >= 3) {
            state.unlockAchievement("three_completed");
        }
    }




    state.updateChallengeData(challenge.id, chData);
    state.unlockAchievement("first_commit");
    state.unlockAchievement("first_completion");
    if (challenge.achievementId) {
      state.unlockAchievement(challenge.achievementId);
    }
    if (challenge.level === "Avançado") {
      state.unlockAchievement("advanced_master");
    }

    const uData = state.getUserData(user.id);
    const compCount = Object.values(uData.challenges).filter(c => c.status === "completed").length;
    if (compCount >= 3) {
      state.unlockAchievement("three_completed");
    }

    showToast("Operação Concluída!", "Repositório salvo com sucesso! Desafio finalizado!", "success");
    renderChallengeView(challenge.id);
    renderAllViews();
  });
}

// ==========================================================================
// 7. MODAL DE EDIÇÃO DE PERFIL
// ==========================================================================

function openProfileEditModal() {
  const user = state.getCurrentUser();
  if (!user) {
    openAuthModal("login");
    return;
  }

  const modal = document.getElementById("modal-profile-edit");

  document.getElementById("edit-profile-name").value = user.name || "";
  document.getElementById("edit-profile-username").value = user.username || "";
  document.getElementById("edit-profile-tag").value = user.tag || "Iniciante";
  document.getElementById("edit-profile-email").value = user.email || "";
  document.getElementById("edit-profile-bio").value = user.bio || "";

  document.getElementById("profile-edit-error").style.display = "none";

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProfileEditModal() {
  const modal = document.getElementById("modal-profile-edit");
  if (modal) {
    modal.classList.remove("active");
  }
  document.body.style.overflow = "";
}

// ==========================================================================
// 8. MODAL DE AUTENTICAÇÃO E CADASTRO LOCAL
// ==========================================================================

function openAuthModal(tab = "login") {
  const modal = document.getElementById("modal-auth");

  const btnTabLogin = document.getElementById("btn-auth-tab-login");
  const btnTabRegister = document.getElementById("btn-auth-tab-register");
  const formLogin = document.getElementById("form-auth-login");
  const formRegister = document.getElementById("form-auth-register");
  const authError = document.getElementById("auth-error-msg");

  if (authError) authError.style.display = "none";

  if (tab === "login") {
    btnTabLogin?.classList.add("active");
    btnTabRegister?.classList.remove("active");
    if (formLogin) formLogin.style.display = "block";
    if (formRegister) formRegister.style.display = "none";
  } else {
    btnTabLogin?.classList.remove("active");
    btnTabRegister?.classList.add("active");
    if (formLogin) formLogin.style.display = "none";
    if (formRegister) formRegister.style.display = "block";
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAuthModal() {
  const modal = document.getElementById("modal-auth");
  if (modal) {
    modal.classList.remove("active");
  }
  document.body.style.overflow = "";
}

// Global scope export for inline event handlers and external caller compatibility
window.switchView = switchView;
window.openChallenge = openChallenge;
window.openChallengeModal = openChallengeModal;
window.closeChallengeModal = closeChallengeModal;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.openProfileEditModal = openProfileEditModal;
window.closeProfileEditModal = closeProfileEditModal;

// ==========================================================================
// 9. INICIALIZAÇÃO DE EVENT LISTENERS GLOBAIS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 0. Alternância de Modo Claro e Escuro (PDF IHC v3.0 Pág. 4)
  document.getElementById("btn-theme-toggle")?.addEventListener("click", toggleTheme);
  applyTheme(getCurrentTheme(), false);

  // Navegação da Barra Lateral (Dock)
  document.getElementById("nav-home")?.addEventListener("click", () => switchView("home"));
  document.getElementById("nav-catalog")?.addEventListener("click", () => switchView("catalog"));
  document.getElementById("nav-profile")?.addEventListener("click", () => switchView("profile"));
  document.getElementById("logo-btn")?.addEventListener("click", () => switchView("home"));
  document.getElementById("link-view-catalog")?.addEventListener("click", () => switchView("catalog"));

  // Navegação das Abas Superiores (Home, Desafio, Perfil - Figma)
  document.getElementById("top-nav-home")?.addEventListener("click", () => switchView("home"));
  document.getElementById("top-nav-challenge")?.addEventListener("click", () => openChallenge(currentChallengeId || "mercado"));
  document.getElementById("top-nav-profile")?.addEventListener("click", () => switchView("profile"));

  // Abas do Perfil
  document.getElementById("btn-tab-progress")?.addEventListener("click", () => {
    currentProfileTab = "progress";
    renderProfileView();
  });
  document.getElementById("btn-tab-achievements")?.addEventListener("click", () => {
    currentProfileTab = "achievements";
    renderProfileView();
  });

  // Busca e Filtros do Catálogo
  const searchInput = document.getElementById("catalog-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      catalogFilter.search = e.target.value;
      renderCatalogView();
    });
  }

  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const group = pill.dataset.filterGroup;
      const val = pill.dataset.value;
      if (group === "level") catalogFilter.level = val;
      if (group === "status") catalogFilter.status = val;
      updateFilterPillsUi();
      renderCatalogView();
    });
  });

  document.getElementById("btn-clear-all-filters")?.addEventListener("click", () => {
    catalogFilter = { search: "", level: "Todos", tag: "Todos", status: "Todos" };
    if (searchInput) searchInput.value = "";
    updateFilterPillsUi();
    renderCatalogView();
  });

  // Delegação de Cliques para Abertura de Desafios e Favoritos
  document.addEventListener("click", (e) => {
    // 1. Botão específico de abrir desafio
    const openBtn = e.target.closest("[data-action='open-challenge'], [data-action='open-modal']");
    if (openBtn) {
      e.stopPropagation();
      const chId = openBtn.dataset.id;
      openChallenge(chId);
      return;
    }

    // 2. Botão de favoritar em cards
    const bookmarkBtn = e.target.closest("[data-action='bookmark']");
    if (bookmarkBtn) {
      e.stopPropagation();
      const chId = bookmarkBtn.dataset.id;
      const user = state.getCurrentUser();
      if (!user) {
        showToast("Aviso", "Faça login para salvar desafios nos favoritos!", "info");
        openAuthModal("login");
        return;
      }
      const isBookmarked = state.toggleBookmark(chId);
      bookmarkBtn.classList.toggle("bookmarked", isBookmarked);
      bookmarkBtn.innerHTML = Icons.bookmark("", isBookmarked);
      renderAllViews();
      return;
    }

    // 3. Clique no próprio card do desafio para abrir detalhes
    const card = e.target.closest(".challenge-card");
    if (card && !e.target.closest("button") && !e.target.closest("a")) {
      const chId = card.dataset.id;
      if (chId) {
        openChallenge(chId);
        return;
      }
    }
  });

  // Fechamento Seguro de Modais
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      closeChallengeModal();
      closeProfileEditModal();
      closeAuthModal();
    });
  });

  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeChallengeModal();
        closeProfileEditModal();
        closeAuthModal();
      }
    });
  });

  // Formulário de Edição de Perfil
  const formProfileEdit = document.getElementById("form-profile-edit");
  if (formProfileEdit) {
    formProfileEdit.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("edit-profile-name").value;
      const username = document.getElementById("edit-profile-username").value;
      const tag = document.getElementById("edit-profile-tag").value;
      const email = document.getElementById("edit-profile-email").value;
      const bio = document.getElementById("edit-profile-bio").value;
      const errorEl = document.getElementById("profile-edit-error");

      const result = state.updateProfile(name, username, tag, email, bio);
      if (result.success) {
        closeProfileEditModal();
        renderAllViews();
      } else {
        errorEl.style.display = "flex";
        errorEl.innerHTML = `${Icons.alert()} ${result.message}`;
      }
    });
  }

  // Formulários de Login e Cadastro
  document.getElementById("btn-auth-tab-login")?.addEventListener("click", () => openAuthModal("login"));
  document.getElementById("btn-auth-tab-register")?.addEventListener("click", () => openAuthModal("register"));

  document.getElementById("form-auth-login")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const idInput = document.getElementById("login-username").value;
    const passInput = document.getElementById("login-password").value;
    const errorEl = document.getElementById("auth-error-msg");

    const res = state.login(idInput, passInput);
    if (res.success) {
      closeAuthModal();
      renderAllViews();
      showToast("Operação concluída.", `Bem-vindo de volta, ${res.user.name}!`, "success");
    } else {
      errorEl.style.display = "flex";
      errorEl.innerHTML = `${Icons.alert()} ${res.message}`;
    }
  });

  document.getElementById("form-auth-register")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reg-name").value;
    const username = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const pass = document.getElementById("reg-password").value;
    const tag = document.getElementById("reg-tag").value;
    const bio = document.getElementById("reg-bio").value;
    const errorEl = document.getElementById("auth-error-msg");

    const res = state.register(name, username, email, pass, tag, bio);
    if (res.success) {
      closeAuthModal();
      renderAllViews();
    } else {
      errorEl.style.display = "flex";
      errorEl.innerHTML = `${Icons.alert()} ${res.message}`;
    }
  });

  // Botões de login social (Google / GitHub)
  document.getElementById("btn-auth-google")?.addEventListener("click", loginWithGoogle);
  document.getElementById("btn-auth-github")?.addEventListener("click", loginWithGithub);

  // Preenchimento Rápido para Teste Avaliativo
  document.getElementById("btn-quick-pedro")?.addEventListener("click", () => {
    document.getElementById("login-username").value = "pedro.dev";
    document.getElementById("login-password").value = "123";
  });

  document.getElementById("btn-quick-ana")?.addEventListener("click", () => {
    document.getElementById("login-username").value = "ana.dev";
    document.getElementById("login-password").value = "123";
  });

  // Retorno do OAuth do GitHub (?code=...&state=...)
  handleGithubRedirect().then(ok => { if (ok) renderAllViews(); });

  // Suporte a Roteamento por Hash de URL (#desafio, #mercado, #catalogo, #perfil)
  const hash = (window.location.hash || "").toLowerCase().replace("#", "").trim();
  if (hash === "desafio" || hash === "challenge" || hash === "mercado") {
    openChallenge("mercado");
  } else if (hash === "catalogo" || hash === "catalog") {
    switchView("catalog");
  } else if (hash === "perfil" || hash === "profile") {
    switchView("profile");
  } else if (INITIAL_CHALLENGES.some(c => c.id === hash)) {
    openChallenge(hash);
  } else {
    // Renderiza todas as views com estado inicial
    renderAllViews();
  }
});
function isChallengeFullyDone(challenge, chData) {
    const reqsOk = (chData.checkedSteps?.length || 0) === (challenge.requirementsList?.length || 0);
    const errsOk = (chData.checkedErrors?.length || 0) === (challenge.errorValidations?.length || 0);
    const accsOk = (chData.checkedAcceptance?.length || 0) === (challenge.acceptanceCriteria?.length || 0);
    return reqsOk && errsOk && accsOk;
}
function checkAndRedirect(challenge, chData) {
    const reqsOk = (chData.checkedSteps?.length || 0) === (challenge.requirementsList?.length || 0);
    const errsOk = (chData.checkedErrors?.length || 0) === (challenge.errorValidations?.length || 0);
    const accsOk = (chData.checkedAcceptance?.length || 0) === (challenge.acceptanceCriteria?.length || 0);

    if (reqsOk && errsOk && accsOk) {
        chData.status = "completed";
        showToast("Parabéns!", "Todos os requisitos, erros e critérios foram validados. Você já pode enviar seu GitHub!", "success");
        document.getElementById("challenge-delivery-section")?.scrollIntoView({ behavior: "smooth" });
    }
}

