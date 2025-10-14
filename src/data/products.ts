export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients: string[];
  purpose: string[];
  contraindications: string[];
  dosage: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Мультивитаминный комплекс Premium',
    description: 'Полный комплекс витаминов и минералов для ежедневной поддержки иммунитета и энергии',
    price: 1290,
    image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/cd8632a0-7182-456d-bf64-39ed0ce8ad7b.jpg',
    category: 'vitamins',
    ingredients: ['Витамин C', 'Витамин D3', 'Витамин B12', 'Цинк', 'Магний', 'Селен'],
    purpose: ['Укрепление иммунитета', 'Повышение энергии', 'Улучшение настроения'],
    contraindications: ['Беременность (консультация врача)', 'Аллергия на компоненты'],
    dosage: '1 капсула в день во время еды',
    inStock: true,
  },
  {
    id: '2',
    name: 'Омега-3 Ультра',
    description: 'Концентрированный рыбий жир высокой степени очистки для сердца и мозга',
    price: 1590,
    image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/3020b6d2-f3d8-4dd3-8fa7-8df581aaa145.jpg',
    category: 'heart',
    ingredients: ['EPA', 'DHA', 'Витамин E'],
    purpose: ['Здоровье сердца', 'Улучшение работы мозга', 'Снижение холестерина'],
    contraindications: ['Аллергия на рыбу', 'Прием антикоагулянтов (консультация врача)'],
    dosage: '2 капсулы в день во время еды',
    inStock: true,
  },
  {
    id: '3',
    name: 'Глюкозамин + Хондроитин Pro',
    description: 'Комплекс для восстановления и защиты суставов и хрящевой ткани',
    price: 1890,
    image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/17564965-8bdd-46fc-b0b1-1768994225d7.jpg',
    category: 'joints',
    ingredients: ['Глюкозамин', 'Хондроитин', 'МСМ', 'Коллаген', 'Витамин C'],
    purpose: ['Здоровье суставов', 'Уменьшение боли', 'Восстановление хрящей'],
    contraindications: ['Беременность', 'Лактация', 'Аллергия на моллюсков'],
    dosage: '3 капсулы в день во время еды',
    inStock: true,
  },
  {
    id: '4',
    name: 'Пробиотик Комплекс 10 млрд',
    description: 'Мультиштаммовый пробиотик для здоровья кишечника и иммунитета',
    price: 1390,
    image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/cd8632a0-7182-456d-bf64-39ed0ce8ad7b.jpg',
    category: 'digestion',
    ingredients: ['Lactobacillus', 'Bifidobacterium', 'Пребиотики', 'Инулин'],
    purpose: ['Пищеварение', 'Иммунитет', 'Микрофлора кишечника'],
    contraindications: ['Иммунодефицитные состояния', 'Острые заболевания ЖКТ'],
    dosage: '1 капсула утром натощак',
    inStock: true,
  },
  {
    id: '5',
    name: 'Коэнзим Q10 200 мг',
    description: 'Мощный антиоксидант для энергии клеток и защиты сердца',
    price: 2190,
    image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/3020b6d2-f3d8-4dd3-8fa7-8df581aaa145.jpg',
    category: 'antioxidants',
    ingredients: ['Коэнзим Q10', 'Витамин E', 'Селен'],
    purpose: ['Энергия', 'Антиоксидантная защита', 'Здоровье сердца'],
    contraindications: ['Беременность', 'Прием варфарина'],
    dosage: '1 капсула в день',
    inStock: true,
  },
  {
    id: '6',
    name: 'Витамин D3 5000 МЕ',
    description: 'Высокая дозировка витамина D для костей, иммунитета и настроения',
    price: 890,
    image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/cd8632a0-7182-456d-bf64-39ed0ce8ad7b.jpg',
    category: 'vitamins',
    ingredients: ['Витамин D3 (холекальциферол)', 'МСТ масло'],
    purpose: ['Здоровье костей', 'Иммунитет', 'Улучшение настроения'],
    contraindications: ['Гиперкальциемия', 'Камни в почках'],
    dosage: '1 капсула в день во время еды',
    inStock: true,
  },
  {
    id: '7',
    name: 'Магний + B6 Форте',
    description: 'Комплекс для нервной системы, снятия стресса и качественного сна',
    price: 790,
    image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/17564965-8bdd-46fc-b0b1-1768994225d7.jpg',
    category: 'energy',
    ingredients: ['Магний цитрат', 'Витамин B6', 'Таурин'],
    purpose: ['Снятие стресса', 'Качество сна', 'Работа нервной системы'],
    contraindications: ['Почечная недостаточность', 'Миастения'],
    dosage: '2 капсулы вечером',
    inStock: true,
  },
  {
    id: '8',
    name: 'Куркумин + Пиперин',
    description: 'Натуральный противовоспалительный комплекс с усиленной биодоступностью',
    price: 1190,
    image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/3020b6d2-f3d8-4dd3-8fa7-8df581aaa145.jpg',
    category: 'antioxidants',
    ingredients: ['Куркумин 95%', 'Пиперин', 'Имбирь'],
    purpose: ['Противовоспалительное', 'Антиоксидант', 'Здоровье суставов'],
    contraindications: ['Желчнокаменная болезнь', 'Язва желудка'],
    dosage: '1 капсула 2 раза в день',
    inStock: false,
  },
];

export const categories = [
  { id: 'vitamins', name: 'Витамины', count: 2 },
  { id: 'heart', name: 'Для сердца', count: 2 },
  { id: 'joints', name: 'Для суставов', count: 2 },
  { id: 'digestion', name: 'Для пищеварения', count: 1 },
  { id: 'antioxidants', name: 'Антиоксиданты', count: 2 },
  { id: 'energy', name: 'Для энергии', count: 1 },
];

export const allIngredients = [
  'Витамин C',
  'Витамин D3',
  'Витамин B12',
  'Витамин B6',
  'Витамин E',
  'Цинк',
  'Магний',
  'Селен',
  'EPA',
  'DHA',
  'Глюкозамин',
  'Хондроитин',
  'МСМ',
  'Коллаген',
  'Коэнзим Q10',
  'Куркумин',
  'Пиперин',
];

export const allPurposes = [
  'Укрепление иммунитета',
  'Повышение энергии',
  'Здоровье сердца',
  'Здоровье суставов',
  'Пищеварение',
  'Антиоксидантная защита',
  'Здоровье костей',
  'Снятие стресса',
  'Противовоспалительное',
];

export const allContraindications = [
  'Беременность',
  'Лактация',
  'Аллергия на компоненты',
  'Аллергия на рыбу',
  'Аллергия на моллюсков',
  'Почечная недостаточность',
  'Желчнокаменная болезнь',
  'Язва желудка',
];
