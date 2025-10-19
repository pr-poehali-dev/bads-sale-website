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
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: 'Leaf',
      title: 'Натуральные',
      description: 'Только природные компоненты без химических добавок',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставим ваш заказ в течение 1-3 дней',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: 'Award',
      title: 'Гарантия качества',
      description: 'Возврат товара в течение 30 дней',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  const categories = [
    {
      title: 'Витамины',
      description: 'Комплексы для иммунитета',
      emoji: '💊',
      link: '/catalog?category=vitamins',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Для суставов',
      description: 'Поддержка опорно-двигательной системы',
      emoji: '🦴',
      link: '/catalog?category=joints',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Для сердца',
      description: 'Укрепление сердечно-сосудистой системы',
      emoji: '❤️',
      link: '/catalog?category=heart',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Для пищеварения',
      description: 'Нормализация работы ЖКТ',
      emoji: '🥗',
      link: '/catalog?category=digestion',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Антиоксиданты',
      description: 'Защита клеток от старения',
      emoji: '✨',
      link: '/catalog?category=antioxidants',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Для энергии',
      description: 'Повышение работоспособности',
      emoji: '⚡',
      link: '/catalog?category=energy',
      gradient: 'from-yellow-500 to-amber-600',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/20">
                <Icon name="Sparkles" size={18} className="text-primary animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Новинка сезона
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Забота о здоровье
                <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  с VitaLife
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Премиальные биологически активные добавки для поддержания здоровья и активного долголетия
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/catalog">
                  <Button size="lg" className="font-semibold text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all group">
                    Перейти в каталог
                    <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/certificates">
                  <Button size="lg" variant="outline" className="font-semibold text-base border-2 hover:bg-primary/5">
                    <Icon name="Shield" size={20} className="mr-2" />
                    Сертификаты
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Товаров</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm"></div>
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop"
                  alt="Витамины"
                  className="w-full h-auto object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 animate-bounce-subtle">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground">Натурально</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all hover:scale-105 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} mb-4 shadow-lg`}>
                    <Icon name={benefit.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold mb-2 text-sm md:text-base">{benefit.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Популярные категории
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящие БАДы для решения ваших задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 h-full">
                  <CardContent className="p-0 h-full">
                    <div className={`h-32 bg-gradient-to-br ${category.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                      <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform">
                        {category.emoji}
                      </span>
                      <div className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Icon name="ArrowRight" size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Icon name="Heart" size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Начните заботиться о здоровье уже сегодня
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Получите персональную консультацию по подбору БАДов от наших специалистов
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/catalog">
                <Button size="lg" variant="secondary" className="font-semibold text-base shadow-xl hover:scale-105 transition-transform">
                  Смотреть каталог
                  <Icon name="ShoppingBag" size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="font-semibold text-base border-2 border-white text-white hover:bg-white/10">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
