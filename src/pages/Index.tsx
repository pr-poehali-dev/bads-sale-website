import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  const benefits = [
    {
      icon: 'Shield',
      title: 'Сертифицированные',
      description: 'Все продукты имеют необходимые сертификаты качества',
    },
    {
      icon: 'Leaf',
      title: 'Натуральные',
      description: 'Только природные компоненты без химических добавок',
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставим ваш заказ в течение 1-3 дней',
    },
    {
      icon: 'Award',
      title: 'Гарантия качества',
      description: 'Возврат товара в течение 30 дней',
    },
  ];

  const categories = [
    {
      title: 'Витамины',
      description: 'Комплексы для иммунитета',
      emoji: '💊',
      link: '/catalog?category=vitamins',
    },
    {
      title: 'Для суставов',
      description: 'Поддержка опорно-двигательной системы',
      emoji: '🦴',
      link: '/catalog?category=joints',
    },
    {
      title: 'Для сердца',
      description: 'Укрепление сердечно-сосудистой системы',
      emoji: '❤️',
      link: '/catalog?category=heart',
    },
    {
      title: 'Для пищеварения',
      description: 'Нормализация работы ЖКТ',
      emoji: '🥗',
      link: '/catalog?category=digestion',
    },
    {
      title: 'Антиоксиданты',
      description: 'Защита клеток от старения',
      emoji: '✨',
      link: '/catalog?category=antioxidants',
    },
    {
      title: 'Для энергии',
      description: 'Повышение работоспособности',
      emoji: '⚡',
      link: '/catalog?category=energy',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/d85a4041-5124-4648-ab99-400c07aead6b.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>Новинка сезона</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Забота о здоровье
                <span className="block text-primary mt-2">с VitaLife</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Премиальные биологически активные добавки для поддержания здоровья и активного долголетия
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/catalog">
                  <Button size="lg" className="font-semibold">
                    Перейти в каталог
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/certificates">
                  <Button size="lg" variant="outline" className="font-semibold">
                    <Icon name="Shield" size={20} className="mr-2" />
                    Сертификаты
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/33c5a4e2-2cbd-4c39-9db9-3aebf04d18b8.jpg"
                alt="VitaLife Products"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <Icon name={benefit.icon} size={24} />
                  </div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Категории БАДов</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Подберите оптимальные добавки для поддержания здоровья каждой системы организма
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                  <CardContent className="p-8">
                    <div className="text-5xl mb-4">{category.emoji}</div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">{category.description}</p>
                    <div className="flex items-center text-primary mt-4 font-medium">
                      <span className="text-sm">Смотреть товары</span>
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Не знаете, что выбрать?</h2>
            <p className="text-lg text-muted-foreground">
              Наши специалисты помогут подобрать оптимальный комплекс БАДов с учетом ваших индивидуальных потребностей
            </p>
            <Link to="/contacts">
              <Button size="lg" variant="default" className="font-semibold">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;