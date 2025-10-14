import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  const deliveryMethods = [
    {
      icon: 'Truck',
      title: 'Курьерская доставка',
      time: '1-2 дня',
      price: 'от 300 ₽',
      description: 'Доставка по Москве и области. Курьер позвонит за час до приезда',
      features: ['Оплата при получении', 'Проверка товара', 'Удобное время'],
    },
    {
      icon: 'Package',
      title: 'Пункты выдачи',
      time: '2-4 дня',
      price: 'от 150 ₽',
      description: 'Более 5000 пунктов выдачи СДЭК и Boxberry по всей России',
      features: ['Удобное расположение', 'Гибкий график работы', 'Хранение до 7 дней'],
    },
    {
      icon: 'Home',
      title: 'Почта России',
      time: '5-14 дней',
      price: 'от 250 ₽',
      description: 'Доставка в любую точку России до почтового отделения',
      features: ['Вся территория РФ', 'Отслеживание посылки', 'Надежная доставка'],
    },
    {
      icon: 'Store',
      title: 'Самовывоз',
      time: 'Сегодня',
      price: 'Бесплатно',
      description: 'Заберите заказ из нашего офиса в день оформления',
      features: ['Москва, ул. Здоровья, 15', 'Пн-Пт: 9:00-20:00', 'Сб-Вс: 10:00-18:00'],
    },
  ];

  const paymentMethods = [
    {
      icon: 'CreditCard',
      title: 'Банковская карта',
      description: 'Visa, MasterCard, МИР',
    },
    {
      icon: 'Wallet',
      title: 'Электронные кошельки',
      description: 'ЮMoney, QIWI, WebMoney',
    },
    {
      icon: 'Smartphone',
      title: 'СБП',
      description: 'Система быстрых платежей',
    },
    {
      icon: 'Banknote',
      title: 'При получении',
      description: 'Наличные или карта курьеру',
    },
  ];

  const conditions = [
    {
      icon: 'Gift',
      title: 'Бесплатная доставка',
      description: 'При заказе от 3000 ₽',
      color: 'text-primary',
    },
    {
      icon: 'Clock',
      title: 'Быстрая обработка',
      description: 'Отправка в день заказа',
      color: 'text-accent',
    },
    {
      icon: 'ShieldCheck',
      title: 'Гарантия качества',
      description: 'Возврат в течение 30 дней',
      color: 'text-primary',
    },
    {
      icon: 'Package2',
      title: 'Надежная упаковка',
      description: 'Защита от повреждений',
      color: 'text-accent',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Truck" size={16} />
            <span>Доставка и оплата</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Доставка по всей России</h1>
          <p className="text-lg text-muted-foreground">
            Выберите удобный способ доставки и оплаты. Отправляем заказы каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {conditions.map((condition, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center space-y-3">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 ${condition.color}`}>
                  <Icon name={condition.icon} size={24} />
                </div>
                <h3 className="font-semibold">{condition.title}</h3>
                <p className="text-sm text-muted-foreground">{condition.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Способы доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliveryMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name={method.icon} size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{method.title}</h3>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="text-xs">
                          {method.time}
                        </Badge>
                        <span className="text-primary font-semibold">{method.price}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="mr-2 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <Icon name={method.icon} size={24} />
                  </div>
                  <h3 className="font-semibold">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold">География доставки</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Мы доставляем заказы по всей территории Российской Федерации. Стоимость и
                  сроки доставки зависят от региона и выбранного способа.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    <span>Москва и МО — доставка на следующий день</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    <span>Санкт-Петербург — доставка 1-2 дня</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    <span>Города-миллионники — 2-4 дня</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 text-primary mt-0.5 flex-shrink-0" />
                    <span>Остальные регионы — 3-14 дней</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="HelpCircle" size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold">Есть вопросы?</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Наши специалисты помогут выбрать оптимальный способ доставки и ответят на
                  все ваши вопросы.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span className="font-medium">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span className="font-medium">info@vitalife.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span className="text-sm text-muted-foreground">Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery;