import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      lines: ['Москва, ул. Здоровья, 15', 'БЦ "Витамин", офис 301'],
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      lines: ['+7 (999) 123-45-67', 'Звонок бесплатный'],
    },
    {
      icon: 'Mail',
      title: 'Email',
      lines: ['info@vitalife.ru', 'support@vitalife.ru'],
    },
    {
      icon: 'Clock',
      title: 'График работы',
      lines: ['Пн-Пт: 9:00 - 20:00', 'Сб-Вс: 10:00 - 18:00'],
    },
  ];

  const socialLinks = [
    { icon: 'Instagram', url: '#', label: '@vitalife_ru' },
    { icon: 'Facebook', url: '#', label: 'VitaLife Russia' },
    { icon: 'Youtube', url: '#', label: 'VitaLife Channel' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageCircle" size={16} />
            <span>Свяжитесь с нами</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-lg text-muted-foreground">
            Мы всегда на связи и готовы ответить на ваши вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon name={info.icon} size={24} />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                {info.lines.map((line, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="message">Ваше сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите, чем мы можем вам помочь..."
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-start">
                      <Icon name="HelpCircle" size={18} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                      Как долго доставляется заказ?
                    </h3>
                    <p className="text-sm text-muted-foreground ml-6">
                      По Москве — 1-2 дня, по России — 2-14 дней в зависимости от региона
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-start">
                      <Icon name="HelpCircle" size={18} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                      Можно ли вернуть товар?
                    </h3>
                    <p className="text-sm text-muted-foreground ml-6">
                      Да, в течение 30 дней с момента покупки при сохранении товарного вида
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-start">
                      <Icon name="HelpCircle" size={18} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                      Есть ли у вас сертификаты?
                    </h3>
                    <p className="text-sm text-muted-foreground ml-6">
                      Все товары сертифицированы. Документы доступны в разделе "Сертификаты"
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-start">
                      <Icon name="HelpCircle" size={18} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
                      Как получить консультацию?
                    </h3>
                    <p className="text-sm text-muted-foreground ml-6">
                      Позвоните по телефону +7 (999) 123-45-67 или напишите в чат на сайте
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Мы в соцсетях</h2>
                <p className="text-muted-foreground mb-6">
                  Следите за новостями, акциями и полезными советами о здоровье
                </p>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        <Icon name={social.icon} size={20} />
                      </div>
                      <span className="font-medium">{social.label}</span>
                      <Icon name="ExternalLink" size={16} className="ml-auto text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary">
                  <Icon name="Headphones" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Нужна консультация?</h3>
                  <p className="text-muted-foreground">
                    Наши специалисты помогут подобрать оптимальный комплекс БАДов
                  </p>
                </div>
              </div>
              <Button size="lg" className="font-semibold">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
