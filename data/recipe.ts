import type { Ingredient, Step, IngredientDetail, Recipe } from '../types';

// --- DADOS DO BAIÃO DE DOIS ---

const INGREDIENTS_BAIAO: Ingredient[] = [
  { category: 'Grãos', name: 'Feijão-de-corda (ou fradinho)', quantity: '500 g', notes: 'Deixar de molho na véspera.', emoji: '🫘' },
  { category: 'Grãos', name: 'Arroz Agulhinha', quantity: '2 xícaras (chá)', notes: 'Lavado e escorrido.', emoji: '🍚' },
  { category: 'Proteínas', name: 'Carne-seca', quantity: '300 g', notes: 'Dessalgada, cozida e desfiada.', emoji: '🥩' },
  { category: 'Proteínas', name: 'Bacon', quantity: '150 g', notes: 'Em cubos.', emoji: '🥓' },
  { category: 'Proteínas', name: 'Paio ou Linguiça Calabresa', quantity: '1 gomo', notes: 'Em rodelas.', emoji: '🌭' },
  { category: 'Laticínios', name: 'Queijo Coalho', quantity: '200 g', notes: 'Em cubos.', emoji: '🧀' },
  { category: 'Laticínios', name: 'Manteiga de Garrafa', quantity: '3 colheres (sopa)', emoji: '🧈' },
  { category: 'Aromáticos', name: 'Cebola grande', quantity: '1 unidade', notes: 'Picada.', emoji: '🧅' },
  { category: 'Aromáticos', name: 'Dentes de Alho', quantity: '3 unidades', notes: 'Amassados.', emoji: '🧄' },
  { category: 'Aromáticos', name: 'Pimenta de Cheiro', quantity: '1 unidade', notes: 'Picada, sem sementes.', emoji: '🌶️' },
  { category: 'Aromáticos', name: 'Folha de Louro', quantity: '1 unidade', emoji: '🍃' },
  { category: 'Finalização', name: 'Coentro e Cebolinha', quantity: 'a gosto', notes: 'Picados.', emoji: '🌿' },
  { category: 'Finalização', name: 'Sal e Pimenta-do-reino', quantity: 'a gosto', emoji: '🧂' },
];

const RECIPE_STEPS_BAIAO: Step[] = [
  {
    id: 1,
    phase: "Mise en Place",
    title: "Dessalgando a Carne Seca",
    description: "Este é o passo mais crítico e demorado. Comece com 1 a 2 dias de antecedência para garantir uma carne saborosa e no ponto certo de sal.",
    ingredients: ["Carne-seca"],
    instructions: [
      "Corte a carne-seca em cubos de tamanho médio.",
      "Coloque os cubos de molho em um recipiente com água e leve à geladeira.",
      "Deixe de molho por 24 a 48 horas, trocando a água pelo menos 6 vezes durante esse período.",
      "Após a dessalga, cozinhe a carne em uma panela de pressão com água limpa até ficar bem macia.",
      "Escorra a água, desfie a carne com um garfo e reserve."
    ],
    emoji: "🥩",
  },
  {
    id: 2,
    phase: "Mise en Place",
    title: "Cozinhando o Feijão",
    description: "O segredo para um Baião de Dois perfeito está no cozimento do feijão e, principalmente, no seu caldo. Não cozinhe demais!",
    ingredients: ["Feijão-de-corda", "Folha de Louro"],
    instructions: [
      "Coloque o feijão (previamente de molho) em uma panela com água e a folha de louro.",
      "Cozinhe até que os grãos estejam 'al dente': macios, mas ainda inteiros e mantendo sua forma.",
      "⚠️ O passo mais importante: coe o feijão e RESERVE TODO O CALDO do cozimento. Este caldo será usado para cozinhar o arroz.",
      "Reserve os grãos de feijão cozidos."
    ],
    emoji: "🫘",
    parallelHint: "Enquanto o feijão cozinha, aproveite para picar a cebola, o alho, a pimenta de cheiro, o coentro, a cebolinha e cortar o queijo coalho em cubos. Organização é tudo!"
  },
  {
    id: 3,
    phase: "Construindo Sabor",
    title: "Fritando as Carnes",
    description: "Vamos criar a primeira camada de sabor do nosso prato, dourando as carnes na manteiga de garrafa.",
    ingredients: ["Manteiga de Garrafa", "Bacon", "Paio ou Linguiça Calabresa", "Carne-seca"],
    instructions: [
      "Em uma panela grande e funda, aqueça a manteiga de garrafa em fogo médio.",
      "Adicione o bacon em cubos e frite até começar a dourar e soltar sua gordura.",
      "Acrescente o paio (ou calabresa) em rodelas e a carne-seca desfiada.",
      "Frite tudo junto, mexendo ocasionalmente, até que todas as carnes estejam bem douradas e saborosas.",
      "Retire as carnes da panela com uma escumadeira e reserve. Deixe a gordura saborosa na panela."
    ],
    emoji: "🥓",
  },
  {
    id: 4,
    phase: "Construindo Sabor",
    title: "O Refogado Aromático",
    description: "Usando a gordura saborosa das carnes, vamos criar a base aromática que perfumará todo o prato.",
    ingredients: ["Cebola grande", "Dentes de Alho", "Pimenta de Cheiro"],
    instructions: [
      "Na mesma panela com a gordura das carnes, adicione a cebola picada.",
      "Refogue até que a cebola fique macia e translúcida.",
      "Adicione o alho amassado e a pimenta de cheiro picada. Refogue por mais um minuto, até o alho perfumar.",
    ],
    emoji: "🧅",
  },
  {
    id: 5,
    phase: "O Passo Unificador",
    title: "Cozinhando o Arroz",
    description: "Agora vem a mágica! O arroz será cozido no caldo do feijão, absorvendo todos os sabores que construímos até aqui.",
    ingredients: ["Arroz Agulhinha", "Sal e Pimenta-do-reino"],
    instructions: [
      "Adicione o arroz lavado e escorrido à panela com o refogado.",
      "Mexa bem por cerca de um minuto para 'fritar' o arroz, garantindo que todos os grãos fiquem cobertos pela gordura.",
      "Despeje o caldo do cozimento do feijão (que você reservou!) sobre o arroz. A medida é geralmente 2 partes de caldo para 1 de arroz.",
      "Tempere com sal e pimenta-do-reino a gosto. Cuidado com o sal, pois as carnes já são salgadas.",
      "Tampe a panela, abaixe o fogo e cozinhe até que o arroz esteja macio e todo o líquido tenha sido absorvido."
    ],
    emoji: "🍚",
    parallelHint: "Enquanto o arroz cozinha, é um ótimo momento para preparar um vinagrete ou uma farofinha para acompanhar!"
  },
  {
    id: 6,
    phase: "Montagem Final",
    title: "A Grande Reunião",
    description: "Com o arroz cozido e saboroso, é hora de reunir todos os nossos ingredientes para formar o Baião de Dois.",
    ingredients: ["Queijo Coalho"],
    instructions: [
      "Com o fogo desligado, adicione à panela do arroz: o feijão cozido e as carnes fritas que estavam reservadas.",
      "Acrescente também os cubos de queijo coalho.",
      "Misture tudo delicadamente para incorporar todos os ingredientes sem quebrar os grãos de arroz e feijão."
    ],
    emoji: "🥘",
  },
  {
    id: 7,
    phase: "Montagem Final",
    title: "Finalização e Servir",
    description: "O toque final de frescor para coroar nossa obra-prima. Sirva imediatamente e celebre os sabores do sertão!",
    ingredients: ["Coentro e Cebolinha"],
    instructions: [
      "Adicione o coentro e a cebolinha frescos picados e dê uma última misturada.",
      "Tampe a panela por 2 a 3 minutos. O calor residual vai aquecer o queijo e realçar o aroma das ervas.",
      "Sirva quente, acompanhado de carne de sol acebolada, aipim frito ou um vinagrete refrescante.",
      "Bom apetite!"
    ],
    emoji: "🌿",
  }
];

const INGREDIENT_INFO_BAIAO: Record<string, IngredientDetail> = {
  'Feijão-de-corda': {
    title: 'Feijão-de-Corda: A Alma do Sertão',
    description: 'Também conhecido como feijão fradinho, é a escolha tradicional por ser resistente ao clima árido e por manter sua integridade após o cozimento, resultando numa textura menos caldosa, perfeita para a mistura com o arroz.',
    emoji: '🫘',
  },
  'Carne-seca': {
    title: 'Carne-Seca: O Sabor da Conservação',
    description: 'A carne-seca (ou carne de sol) é o pilar de sabor do prato. É um produto de métodos de conservação essenciais na era pré-refrigeração, trazendo um sabor profundo e uma textura única.',
    emoji: '🥩',
  },
  'Queijo Coalho': {
    title: 'Queijo Coalho: Textura Inconfundível',
    description: 'Um ingrediente não negociável para a autenticidade. Sua propriedade de não derreter completamente é fundamental, criando uma casca dourada e uma textura firme que contrasta maravilhosamente com os outros componentes.',
    emoji: '🧀',
  },
  'Manteiga de Garrafa': {
    title: 'Manteiga de Garrafa: O Ouro Líquido do Nordeste',
    description: 'É uma manteiga clarificada, similar ao ghee, com um sabor intenso e de nozes. É a gordura essencial do prato, conferindo um aroma e um sabor regional insubstituível.',
    emoji: '🧈',
  },
  'Pimenta de Cheiro': {
    title: 'Pimenta de Cheiro: Aroma sem Ardência',
    description: 'Um elemento crucial para a complexidade aromática. Esta variedade de pimenta oferece um aroma floral e frutado intenso sem adicionar ardência significativa, contribuindo com uma camada olfativa única.',
    emoji: '🌶️',
  }
};

const BAIAO_DE_DOIS_RECIPE: Recipe = {
  key: 'baiaoDeDois',
  title: 'Baião de Dois',
  subtitle: 'Um Retrato Culinário do Sertão',
  intro: 'Uma jornada culinária passo a passo para criar o autêntico e delicioso Baião de Dois, um tesouro do sertão brasileiro.',
  ingredients: INGREDIENTS_BAIAO,
  steps: RECIPE_STEPS_BAIAO,
  ingredientInfo: INGREDIENT_INFO_BAIAO,
};

// --- DADOS DA VACA ATOLADA ---

const INGREDIENTS_VACA: Ingredient[] = [
  { category: 'Proteínas', name: 'Costela Bovina', quantity: '1.5 kg', notes: 'Em pedaços, com osso', emoji: '🐄' },
  { category: 'Raízes', name: 'Mandioca', quantity: '1 kg', notes: 'Também conhecida como aipim ou macaxeira', emoji: '🥔' },
  { category: 'Aromáticos', name: 'Cebola grande', quantity: '2 unidades', notes: 'Picadas', emoji: '🧅' },
  { category: 'Aromáticos', name: 'Dentes de Alho', quantity: '4 unidades', notes: 'Amassados', emoji: '🧄' },
  { category: 'Aromáticos', name: 'Tomate maduro', quantity: '3 unidades', notes: 'Sem sementes, picados', emoji: '🍅' },
  { category: 'Finalização', name: 'Cheiro-verde', quantity: 'a gosto', notes: 'Salsa e cebolinha picados', emoji: '🌿' },
  { category: 'Gorduras', name: 'Óleo ou Banha', quantity: '3 colheres (sopa)', emoji: '🍳' },
  { category: 'Temperos', name: 'Colorau (Urucum)', quantity: '1 colher (chá)', emoji: '🌶️' },
  { category: 'Temperos', name: 'Sal e Pimenta-do-reino', quantity: 'a gosto', emoji: '🧂' },
];

const RECIPE_STEPS_VACA: Step[] = [
  {
    id: 1,
    phase: "Fundação do Sabor",
    title: "Selando a Costela",
    description: "Este é o passo mais crucial para um sabor profundo. A Reação de Maillard cria uma crosta rica em sabor que é a base de todo o prato.",
    ingredients: ["Costela Bovina", "Sal e Pimenta-do-reino", "Óleo ou Banha"],
    instructions: [
      "Tempere os pedaços de costela com sal e pimenta-do-reino.",
      "Em uma panela de pressão grande, aqueça o óleo ou a banha em fogo alto.",
      "Doure a carne em levas, sem amontoar, até que todos os lados estejam bem corados.",
      "Retire a carne da panela e reserve."
    ],
    emoji: "🔥",
  },
  {
    id: 2,
    phase: "Construindo Sabor",
    title: "O Refogado Aromático",
    description: "Usando a gordura saborosa da carne, vamos criar a base que perfumará todo o prato. O 'fond' (crostinha no fundo da panela) é puro sabor!",
    ingredients: ["Cebola grande", "Dentes de Alho", "Tomate maduro", "Colorau (Urucum)"],
    instructions: [
      "Na mesma panela, adicione a cebola picada e refogue até ficar translúcida.",
      "Acrescente o alho amassado e refogue por mais um minuto, até perfumar.",
      "Junte o tomate picado e o colorau. Cozinhe, mexendo e raspando o fundo da panela, até o tomate começar a desmanchar."
    ],
    emoji: "🧅",
  },
  {
    id: 3,
    phase: "Cozimento Lento",
    title: "A Magia da Pressão",
    description: "Agora, a pressão e o tempo farão sua mágica, transformando o colágeno da costela em gelatina e deixando a carne incrivelmente macia.",
    ingredients: [],
    instructions: [
      "Retorne a carne selada para a panela e misture com o refogado.",
      "Adicione água quente suficiente para quase cobrir a carne.",
      "Tampe a panela de pressão e, após pegar pressão, cozinhe em fogo baixo por 50 a 60 minutos."
    ],
    emoji: "💨",
  },
  {
    id: 4,
    phase: "A União Perfeita",
    title: "Adicionando a Mandioca",
    description: "Com a carne macia, é hora de adicionar a mandioca, que cozinhará no caldo saboroso, engrossando-o e completando o prato.",
    ingredients: ["Mandioca"],
    instructions: [
      "Retire a pressão da panela com segurança e abra a tampa.",
      "Verifique se a carne está macia. Se não estiver, cozinhe por mais tempo.",
      "Adicione os pedaços de mandioca ao caldo.",
      "Tampe novamente e cozinhe na pressão por mais 15 a 20 minutos, ou até a mandioca ficar bem macia, quase desmanchando."
    ],
    emoji: "🤝",
  },
  {
    id: 5,
    phase: "Finalização",
    title: "O Toque Final",
    description: "O prato está quase pronto! Um toque de frescor e os ajustes finais para servir esta obra-prima da cozinha caipira.",
    ingredients: ["Sal e Pimenta-do-reino", "Cheiro-verde"],
    instructions: [
      "Abra a panela novamente com cuidado. O caldo deve estar grosso e cremoso, com alguns pedaços de mandioca inteiros e outros desmanchados.",
      "Prove e ajuste o sal e a pimenta-do-reino.",
      "Com o fogo desligado, finalize com o cheiro-verde picado.",
      "Sirva imediatamente, bem quente, acompanhado de arroz branco."
    ],
    emoji: "🌿",
  }
];

const INGREDIENT_INFO_VACA: Record<string, IngredientDetail> = {
  'Costela Bovina': {
    title: 'Costela Bovina: A Alma do Prato',
    description: 'A estrela da Vaca Atolada. Rica em colágeno e gordura, seu cozimento lento resulta em uma carne que se desfaz na boca e um caldo de sabor incomparável.',
    emoji: '🐄',
  },
  'Mandioca': {
    title: 'Mandioca: A Base da Terra',
    description: 'Também chamada de aipim ou macaxeira, é o que dá nome e textura ao prato. Ao cozinhar, ela se desfaz parcialmente, criando um creme aveludado que "atola" a carne.',
    emoji: '🥔',
  },
  'Cheiro-verde': {
    title: 'Cheiro-Verde: O Frescor Final',
    description: 'A mistura de salsa e cebolinha, adicionada no final, corta a riqueza do prato com seu aroma e sabor vibrantes, trazendo equilíbrio e um acabamento perfeito.',
    emoji: '🌿',
  }
};

const VACA_ATOLADA_RECIPE: Recipe = {
  key: 'vacaAtolada',
  title: 'Vaca Atolada',
  subtitle: 'Uma Imersão na Cozinha Caipira',
  intro: 'Uma jornada culinária passo a passo para criar a autêntica e reconfortante Vaca Atolada, um clássico da cozinha do interior do Brasil.',
  ingredients: INGREDIENTS_VACA,
  steps: RECIPE_STEPS_VACA,
  ingredientInfo: INGREDIENT_INFO_VACA,
};

// --- DADOS DA PORCA ATOLADA ---

const INGREDIENTS_PORCA: Ingredient[] = [
  { category: 'Proteínas', name: 'Costela Suína', quantity: '1.5 kg', notes: 'Em pedaços, com osso', emoji: '🐖' },
  { category: 'Raízes', name: 'Mandioca', quantity: '1 kg', notes: 'Aipim/macaxeira, em pedaços grandes', emoji: '🥔' },
  { category: 'Aromáticos', name: 'Cebola grande', quantity: '2 unidades', notes: 'Picadas', emoji: '🧅' },
  { category: 'Aromáticos', name: 'Dentes de Alho', quantity: '4 unidades', notes: 'Amassados', emoji: '🧄' },
  { category: 'Aromáticos', name: 'Tomate maduro', quantity: '3 unidades', notes: 'Sem sementes, picados', emoji: '🍅' },
  { category: 'Finalização', name: 'Cheiro-verde', quantity: 'a gosto', notes: 'Salsa e cebolinha picados', emoji: '🌿' },
  { category: 'Gorduras', name: 'Óleo ou Banha', quantity: '1-2 colheres (sopa)', emoji: '🍳' },
  { category: 'Temperos', name: 'Colorau (Urucum)', quantity: '1 colher (chá)', emoji: '🌶️' },
  { category: 'Temperos', name: 'Folha de Louro', quantity: '1 unidade', notes: 'Opcional', emoji: '🍃' },
  { category: 'Temperos', name: 'Cominho ou Páprica', quantity: '½-1 colher (chá)', notes: 'Opcional', emoji: '🥄' },
  { category: 'Temperos', name: 'Toque Ácido', quantity: 'um pouco', notes: 'Suco de limão, vinagre, cachaça ou cerveja', emoji: '🍋' },
  { category: 'Temperos', name: 'Sal e Pimenta-do-reino', quantity: 'a gosto', emoji: '🧂' },
];

const RECIPE_STEPS_PORCA: Step[] = [
  {
    id: 1,
    phase: "Fundação do Sabor",
    title: "Selando a Costela Suína",
    description: "O segredo para um sabor profundo. Dourar a costela suína cria uma crosta rica que é a base do prato. Não tenha pressa nesta etapa!",
    ingredients: ["Costela Suína", "Sal e Pimenta-do-reino", "Óleo ou Banha"],
    instructions: [
      "Tempere a costela com sal e pimenta (se puder, com 12h de antecedência na geladeira).",
      "Aqueça 1-2 colheres de sopa de óleo/banha na panela de pressão em fogo alto.",
      "Doure a carne em levas, sem amontoar, até que todos os lados estejam bem corados.",
      "Retire a carne da panela e reserve."
    ],
    emoji: "🔥",
  },
  {
    id: 2,
    phase: "Construindo Sabor",
    title: "O Refogado Aromático",
    description: "Usando a gordura saborosa da carne, vamos criar a base que perfumará todo o prato. O 'fond' (crostinha no fundo da panela) é puro sabor!",
    ingredients: ["Cebola grande", "Dentes de Alho", "Tomate maduro", "Colorau (Urucum)", "Folha de Louro", "Cominho ou Páprica", "Toque Ácido"],
    instructions: [
      "Na gordura da panela, refogue a cebola até murchar.",
      "Adicione o alho e refogue por mais um minuto.",
      "Junte o tomate, o colorau e os temperos secos (louro, cominho/páprica).",
      "Deglaceie o fundo da panela com sua escolha ácida (limão/cerveja/cachaça/vinagre), raspando todo o sabor agarrado."
    ],
    emoji: "🧅",
  },
  {
    id: 3,
    phase: "Cozimento Lento",
    title: "A Magia da Pressão (Porco)",
    description: "Agora, a pressão e o tempo farão sua mágica, transformando a costela suína em uma carne incrivelmente macia.",
    ingredients: [],
    instructions: [
      "Retorne a costela suína para a panela e misture com o refogado.",
      "Adicione água quente suficiente para quase cobrir a carne.",
      "Tampe a panela e, após pegar pressão, cozinhe em fogo baixo por 25-30 minutos (costela comum) ou 18-22 minutos (costelinha)."
    ],
    emoji: "💨",
    parallelHint: "A carne deve estar macia, mas sem desmanchar totalmente, pois ainda cozinhará com a mandioca."
  },
  {
    id: 4,
    phase: "A União Perfeita",
    title: "Adicionando a Mandioca",
    description: "Com a carne macia, é hora de adicionar a mandioca, que cozinhará no caldo saboroso, engrossando-o e completando o prato.",
    ingredients: ["Mandioca"],
    instructions: [
      "Retire a pressão da panela com segurança e abra a tampa.",
      "Adicione os pedaços de mandioca ao caldo. Se necessário, ajuste a água para que o líquido cubra metade dos ingredientes.",
      "Tampe novamente e cozinhe na pressão por mais 12 a 15 minutos, ou até a mandioca ficar bem macia, quase desmanchando."
    ],
    emoji: "🤝",
  },
  {
    id: 5,
    phase: "Finalização",
    title: "O Toque Final",
    description: "O prato está quase pronto! Um toque de frescor e os ajustes finais para servir esta obra-prima da cozinha caipira.",
    ingredients: ["Sal e Pimenta-do-reino", "Cheiro-verde"],
    instructions: [
      "Abra a panela novamente com cuidado. O caldo deve estar grosso e cremoso, com alguns pedaços de mandioca inteiros e outros desmanchados.",
      "Se a superfície estiver muito gordurosa, retire o excesso com uma concha.",
      "Prove e ajuste o sal e a pimenta-do-reino.",
      "Com o fogo desligado, finalize com o cheiro-verde picado e sirva imediatamente."
    ],
    emoji: "🌿",
  }
];

const INGREDIENT_INFO_PORCA: Record<string, IngredientDetail> = {
  'Costela Suína': {
    title: 'Costela Suína: Suculência e Sabor',
    description: 'Mais delicada que a bovina, a costela suína cozinha mais rápido e solta uma gordura que deixa o caldo rico e saboroso. A escolha por ela cria uma versão ligeiramente mais adocicada do prato.',
    emoji: '🐖',
  },
  'Mandioca': {
    title: 'Mandioca: A Base da Terra',
    description: 'Também chamada de aipim ou macaxeira, é o que dá nome e textura ao prato. Ao cozinhar, ela se desfaz parcialmente, criando um creme aveludado que "atola" a carne.',
    emoji: '🥔',
  },
  'Toque Ácido': {
    title: 'O Equilíbrio Ácido',
    description: 'A carne de porco tem um sabor naturalmente mais adocicado. Um toque de acidez (limão, vinagre, cachaça ou cerveja) no refogado corta essa doçura, equilibra a gordura e complexifica o sabor final do prato.',
    emoji: '🍋',
  }
};

const PORCA_ATOLADA_RECIPE: Recipe = {
  key: 'porcaAtolada',
  title: 'Porca Atolada',
  subtitle: 'A Versão Suína do Clássico Caipira',
  intro: 'Uma jornada culinária passo a passo para criar a reconfortante Porca Atolada, uma variação igualmente tradicional e deliciosa com a suculência da costela suína.',
  ingredients: INGREDIENTS_PORCA,
  steps: RECIPE_STEPS_PORCA,
  ingredientInfo: INGREDIENT_INFO_PORCA,
};

// --- DADOS DO YAKISOBA ---

const INGREDIENTS_YAKISOBA: Ingredient[] = [
  { category: 'Macarrão', name: 'Macarrão para Yakisoba (chukamen)', quantity: '500g', emoji: '🍜' },
  { category: 'Proteínas', name: 'Alcatra em tiras finas', quantity: '250g', emoji: '🥩' },
  { category: 'Proteínas', name: 'Peito de frango em cubos', quantity: '250g', emoji: '🍗' },
  { category: 'Vegetais', name: 'Repolho', quantity: '1/4 médio', notes: 'Cortado em pedaços de 4 cm', emoji: '🥬' },
  { category: 'Vegetais', name: 'Cenoura', quantity: '1 grande', notes: 'Cortada em rodelas finas', emoji: '🥕' },
  { category: 'Vegetais', name: 'Cebola', quantity: '1 média', notes: 'Cortada em pétalas', emoji: '🧅' },
  { category: 'Vegetais', name: 'Brócolis', quantity: '1 xícara', notes: 'Em floretes', emoji: '🥦' },
  { category: 'Vegetais', name: 'Couve-flor', quantity: '1 xícara', notes: 'Em floretes', emoji: '🥦' },
  { category: 'Para o Molho', name: 'Molho de Soja (Shoyu)', quantity: '1 xícara (240 ml)', emoji: '🍶' },
  { category: 'Para o Molho', name: 'Água', quantity: '1/2 xícara (120 ml)', emoji: '💧' },
  { category: 'Para o Molho', name: 'Molho de Ostra', quantity: '2 colheres (sopa)', emoji: '🦪' },
  { category: 'Para o Molho', name: 'Sakê Mirin', quantity: '2 colheres (sopa)', emoji: '🍶' },
  { category: 'Para o Molho', name: 'Açúcar', quantity: '1 colher (sopa)', emoji: '🍬' },
  { category: 'Para o Molho', name: 'Óleo de Gergelim Torrado', quantity: '1 colher (sopa)', emoji: '🏺' },
  { category: 'Para o Molho', name: 'Amido de Milho', quantity: '2 colheres (sopa)', notes: 'Para engrossar', emoji: '🌽' },
  { category: 'Para o Molho', name: 'Água fria', quantity: '1/2 xícara (120 ml)', notes: 'Para dissolver o amido', emoji: '💧' },
  { category: 'Para o Cozimento', name: 'Óleo Vegetal', quantity: '3-4 colheres (sopa)', emoji: '🍳' },
];

const RECIPE_STEPS_YAKISOBA: Step[] = [
  {
    id: 1,
    phase: "Preparo Prévio",
    title: "O Macarrão: Textura Perfeita",
    description: "O segredo para um bom yakisoba começa com a textura do macarrão. Cozinhe-o 'al dente' e dê um choque térmico para interromper o cozimento e garantir que ele fique firme.",
    ingredients: ["Macarrão para Yakisoba (chukamen)"],
    instructions: [
      "Ferva uma panela grande com água e uma pitada de sal.",
      "Cozinhe o macarrão por 1 a 2 minutos a menos do que o indicado na embalagem.",
      "Escorra imediatamente e passe em água fria corrente para interromper o cozimento (choque térmico).",
      "Regue com um fio de óleo para não grudar e reserve."
    ],
    emoji: "🍜",
    parallelHint: "Enquanto a água ferve, prepare o molho: misture o shoyu, 1/2 xícara de água, molho de ostra, sakê mirin, açúcar e óleo de gergelim. Em outra tigela, dissolva o amido na 1/2 xícara de água fria."
  },
  {
    id: 2,
    phase: "Construindo Sabor",
    title: "Selando as Proteínas",
    description: "Vamos criar a base de sabor do prato dourando as carnes em fogo alto. A Reação de Maillard vai garantir um sabor tostado e profundo.",
    ingredients: ["Alcatra em tiras finas", "Peito de frango em cubos", "Óleo Vegetal"],
    instructions: [
      "Aqueça 2 colheres de óleo em uma wok ou frigideira grande em fogo alto.",
      "Adicione as carnes, sem superlotar a panela (faça em levas, se necessário).",
      "Sele todos os lados até dourar bem.",
      "Retire as proteínas da wok e reserve-as."
    ],
    emoji: "🥩",
  },
  {
    id: 3,
    phase: "Construindo Sabor",
    title: "Salteando os Vegetais",
    description: "O objetivo é cozinhar os vegetais rapidamente para que fiquem macios, mas ainda crocantes ('al dente'). A ordem de entrada na panela é crucial.",
    ingredients: ["Cenoura", "Brócolis", "Couve-flor", "Cebola", "Repolho"],
    instructions: [
      "Na mesma wok, adicione mais uma colher de óleo se necessário.",
      "Adicione os vegetais mais duros: a cenoura, o brócolis e a couve-flor. Salteie por 2-3 minutos.",
      "Adicione os vegetais mais macios: a cebola e o repolho. Salteie por mais 2 minutos, mexendo sempre.",
      "Os vegetais devem murchar levemente, mas permanecer crocantes."
    ],
    emoji: "🥕",
  },
  {
    id: 4,
    phase: "Montagem Final",
    title: "A Grande União",
    description: "Agora vem a mágica! Vamos unir todos os componentes com o molho, que irá engrossar e cobrir tudo com uma camada brilhante e saborosa.",
    ingredients: ["Molho de Soja (Shoyu)"],
    instructions: [
      "Retorne as proteínas cozidas à wok com os vegetais.",
      "Adicione o macarrão cozido e misture delicadamente.",
      "Dê uma última mexida na mistura do molho e despeje sobre a wok.",
      "Continue a mexer em fogo alto. Em 1-2 minutos, o molho irá engrossar. Sirva imediatamente."
    ],
    emoji: "🧑‍🍳",
  },
  {
    id: 5,
    phase: "Finalização",
    title: "Servindo a Obra-Prima",
    description: "As guarnições tradicionais não são apenas decorativas; elas adicionam camadas de sabor, textura e aroma que completam o prato.",
    ingredients: [],
    instructions: [
        "Sirva o yakisoba bem quente em tigelas individuais.",
        "Para uma experiência autêntica, guarneça com:",
        "<b>Beni Shōga</b> (gengibre em conserva) para acidez.",
        "<b>Aonori</b> (alga em pó) para um toque marinho.",
        "<b>Katsuobushi</b> (flocos de peixe seco) para um sabor umami defumado."
    ],
    emoji: "🥢",
  }
];

const INGREDIENT_INFO_YAKISOBA: Record<string, IngredientDetail> = {
  'Macarrão para Yakisoba': {
    title: 'O Macarrão: O Falso "Soba"',
    description: 'Apesar do nome, o Yakisoba não usa macarrão "soba". O correto é o "chukamen", um macarrão de trigo com solução alcalina (kansui), que lhe confere a cor amarelada e a textura elástica, essencial para resistir ao calor do salteado.',
    emoji: '🍜',
  },
  'Molho de Soja': {
    title: 'A Alma do Prato: O Molho',
    description: 'A base do sabor do Yakisoba. O molho é uma sinfonia de sabores salgado (shoyu), doce (açúcar, mirin), ácido e umami (molho de ostra), criando um perfil complexo que une todos os ingredientes.',
    emoji: '🍶',
  },
  'Repolho': {
    title: 'O Coração Crocante: Repolho',
    description: 'O repolho é um ingrediente central, não apenas por ser barato, mas por adicionar volume, doçura e uma textura crocante indispensável que contrasta com a maciez do macarrão e das proteínas.',
    emoji: '🥬',
  },
  'Alcatra': {
    title: 'As Proteínas: Base de Sabor',
    description: 'Carnes como alcatra e frango, cortadas finas e seladas em fogo alto, criam a base de sabor do prato através da Reação de Maillard, garantindo suculência e um gosto tostado profundo.',
    emoji: '🥩',
  },
};

const YAKISOBA_RECIPE: Recipe = {
  key: 'yakisoba',
  title: 'Yakisoba',
  subtitle: 'O Clássico Nipo-Chinês',
  intro: 'Uma jornada culinária passo a passo para criar o autêntico e vibrante Yakisoba, um ícone da comida de rua japonesa.',
  ingredients: INGREDIENTS_YAKISOBA,
  steps: RECIPE_STEPS_YAKISOBA,
  ingredientInfo: INGREDIENT_INFO_YAKISOBA,
};


// --- EXPORTAÇÃO UNIFICADA ---

export const RECIPES = {
  baiaoDeDois: BAIAO_DE_DOIS_RECIPE,
  vacaAtolada: VACA_ATOLADA_RECIPE,
  porcaAtolada: PORCA_ATOLADA_RECIPE,
  yakisoba: YAKISOBA_RECIPE,
};

export type RecipeKey = keyof typeof RECIPES;