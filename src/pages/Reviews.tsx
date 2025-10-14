import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [filter, setFilter] = useState<'all' | 5 | 4 | 3>('all');

  const reviews = [
    {
      id: '1',
      author: 'Мария Петрова',
      rating: 5,
      date: '15 сентября 2024',
      product: 'Омега-3 Ультра',
      text: 'Отличный продукт! Принимаю уже второй месяц, заметила улучшение общего самочувствия. Капсулы небольшие, легко глотаются. Рекомендую!',
      verified: true,
    },
    {
      id: '2',
      author: 'Алексей Смирнов',
      rating: 5,
      date: '10 сентября 2024',
      product: 'Глюкозамин + Хондроитин Pro',
      text: 'После месяца приема боли в коленях значительно уменьшились. Качество отличное, сертификаты все в наличии. Буду заказывать еще.',
      verified: true,
    },
    {
      id: '3',
      author: 'Елена Иванова',
      rating: 4,
      date: '5 сентября 2024',
      product: 'Мультивитаминный комплекс Premium',
      text: 'Хороший комплекс витаминов. Чувствую прилив энергии, улучшилось состояние кожи. Единственный минус - цена немного высоковата.',
      verified: true,
    },
    {
      id: '4',
      author: 'Дмитрий Козлов',
      rating: 5,
      date: '1 сентября 2024',
      product: 'Коэнзим Q10 200 мг',
      text: 'Принимаю для поддержки сердца по рекомендации врача. Очень доволен результатом. Доставка быстрая, упаковка качественная.',
      verified: true,
    },
    {
      id: '5',
      author: 'Анна Волкова',
      rating: 5,
      date: '28 августа 2024',
      product: 'Пробиотик Комплекс 10 млрд',
      text: 'Отличные пробиотики! Нормализовалось пищеварение, ушли проблемы с вздутием. Очень рекомендую!',
      verified: true,
    },
    {
      id: '6',
      author: 'Сергей Николаев',
      rating: 4,
      date: '20 августа 2024',
      product: 'Витамин D3 5000 МЕ',
      text: 'Хороший витамин D. Анализы показали улучшение показателей. Удобная дозировка - одна капсула в день.',
      verified: true,
    },
    {
      id: '7',
      author: 'Ольга Морозова',
      rating: 5,
      date: '15 августа 2024',
      product: 'Магний + B6 Форте',
      text: 'Прекрасное средство от стресса! Сон стал глубже, нервы спокойнее. Очень довольна покупкой!',
      verified: true,
    },
    {
      id: '8',
      author: 'Игорь Федоров',
      rating: 4,
      date: '10 августа 2024',
      product: 'Мультивитаминный комплекс Premium',
      text: 'Качественный комплекс. Заметил повышение работоспособности. Состав полностью натуральный, что важно.',
      verified: true,
    },
  ];

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.rating === filter);

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  
  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'fill-accent text-accent' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} />
            <span>Отзывы покупателей</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Что говорят наши клиенты</h1>
          <p className="text-lg text-muted-foreground">
            Реальные отзывы от людей, которые уже попробовали нашу продукцию
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <Card className="lg:col-span-1">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary mb-2">{averageRating}</div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(parseFloat(averageRating)))}
                </div>
                <p className="text-sm text-muted-foreground">
                  На основе {reviews.length} отзывов
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  className="w-full justify-between"
                  onClick={() => setFilter('all')}
                >
                  <span>Все отзывы</span>
                  <Badge variant="secondary">{reviews.length}</Badge>
                </Button>
                <Button
                  variant={filter === 5 ? 'default' : 'outline'}
                  size="sm"
                  className="w-full justify-between"
                  onClick={() => setFilter(5)}
                >
                  <span className="flex items-center">
                    <Icon name="Star" size={14} className="mr-1 fill-accent text-accent" />
                    5 звезд
                  </span>
                  <Badge variant="secondary">{ratingCounts[5]}</Badge>
                </Button>
                <Button
                  variant={filter === 4 ? 'default' : 'outline'}
                  size="sm"
                  className="w-full justify-between"
                  onClick={() => setFilter(4)}
                >
                  <span className="flex items-center">
                    <Icon name="Star" size={14} className="mr-1 fill-accent text-accent" />
                    4 звезды
                  </span>
                  <Badge variant="secondary">{ratingCounts[4]}</Badge>
                </Button>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Icon name="ShieldCheck" size={16} className="mr-2 text-primary" />
                  Подтвержденные отзывы
                </h3>
                <p className="text-xs text-muted-foreground">
                  Все отзывы оставлены покупателями, совершившими покупку в нашем магазине
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-3 space-y-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {review.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{review.author}</h3>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Icon name="BadgeCheck" size={12} className="mr-1" />
                              Проверено
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">{renderStars(review.rating)}</div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs">
                      {review.product}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3">Поделитесь своим опытом</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ваш отзыв поможет другим покупателям сделать правильный выбор. Расскажите о своих
              впечатлениях от использования наших БАДов!
            </p>
            <Button size="lg">
              <Icon name="PenLine" size={20} className="mr-2" />
              Оставить отзыв
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;
