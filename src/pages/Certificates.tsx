import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Certificates = () => {
  const certificates = [
    {
      id: '1',
      title: 'Сертификат соответствия ГОСТ Р',
      number: 'РОСС RU.АЯ46.Н26903',
      validUntil: '15.12.2026',
      type: 'Государственный стандарт',
      description: 'Подтверждает соответствие продукции требованиям ГОСТа',
      image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/a1f6420b-32e1-45ad-8ba7-c51c5bcf451c.jpg',
    },
    {
      id: '2',
      title: 'Декларация о соответствии ТР ТС',
      number: 'ТС N RU Д-RU.АЛ29.В.12345',
      validUntil: '20.08.2027',
      type: 'Таможенный союз',
      description: 'Декларация соответствия Техническому регламенту Таможенного союза',
      image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/a1f6420b-32e1-45ad-8ba7-c51c5bcf451c.jpg',
    },
    {
      id: '3',
      title: 'Свидетельство о государственной регистрации',
      number: 'RU.77.99.88.003.Е.012345.08.24',
      validUntil: 'Бессрочно',
      type: 'Роспотребнадзор',
      description: 'Государственная регистрация биологически активных добавок',
      image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/a1f6420b-32e1-45ad-8ba7-c51c5bcf451c.jpg',
    },
    {
      id: '4',
      title: 'Сертификат GMP',
      number: 'GMP-2024-VL-0815',
      validUntil: '10.10.2025',
      type: 'Международный стандарт',
      description: 'Надлежащая производственная практика (Good Manufacturing Practice)',
      image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/a1f6420b-32e1-45ad-8ba7-c51c5bcf451c.jpg',
    },
    {
      id: '5',
      title: 'ISO 22000',
      number: 'ISO-22000-2024-8765',
      validUntil: '05.03.2026',
      type: 'Менеджмент безопасности пищевой продукции',
      description: 'Система менеджмента безопасности пищевых продуктов',
      image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/a1f6420b-32e1-45ad-8ba7-c51c5bcf451c.jpg',
    },
    {
      id: '6',
      title: 'Протокол лабораторных испытаний',
      number: 'ЛИ-2024-09-1523',
      validUntil: '30.09.2025',
      type: 'Лабораторный контроль',
      description: 'Результаты испытаний на безопасность и качество продукции',
      image: 'https://cdn.poehali.dev/projects/29ce3d4e-8360-4b26-bbb9-c8e6a293ba9c/files/a1f6420b-32e1-45ad-8ba7-c51c5bcf451c.jpg',
    },
  ];

  const standards = [
    {
      icon: 'Shield',
      title: 'Государственная регистрация',
      description: 'Все БАДы зарегистрированы в Роспотребнадзоре',
    },
    {
      icon: 'Award',
      title: 'Международные стандарты',
      description: 'Производство сертифицировано по GMP и ISO',
    },
    {
      icon: 'FileCheck',
      title: 'Лабораторный контроль',
      description: 'Регулярные проверки качества и безопасности',
    },
    {
      icon: 'Microscope',
      title: 'Клинические испытания',
      description: 'Эффективность подтверждена исследованиями',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="ShieldCheck" size={16} />
            <span>Гарантия качества</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Сертификаты и документы
          </h1>
          <p className="text-lg text-muted-foreground">
            Вся наша продукция имеет необходимые сертификаты качества и разрешительные документы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {standards.map((standard, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <Icon name={standard.icon} size={24} />
                </div>
                <h3 className="font-semibold">{standard.title}</h3>
                <p className="text-sm text-muted-foreground">{standard.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <Badge variant="secondary" className="text-xs">
                      {cert.type}
                    </Badge>
                  </div>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Номер:</span>
                    <span className="font-medium">{cert.number}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Действителен до:</span>
                    <span className="font-medium text-primary">{cert.validUntil}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Icon name="Info" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3">Проверка подлинности</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Вы можете проверить подлинность любого сертификата на официальных сайтах
              регулирующих органов по указанным номерам документов
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="https://fsa.gov.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center"
              >
                <Icon name="ExternalLink" size={14} className="mr-1" />
                fsa.gov.ru
              </a>
              <a
                href="https://rospotrebnadzor.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center"
              >
                <Icon name="ExternalLink" size={14} className="mr-1" />
                rospotrebnadzor.ru
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Certificates;