import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  const deliveryPrice = totalPrice >= 3000 ? 0 : 300;
  const finalPrice = totalPrice + deliveryPrice;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header cartItemsCount={totalItems} />
        <div className="container mx-auto px-4 py-16 flex-1">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-12 text-center">
              <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Корзина пуста</h2>
              <p className="text-muted-foreground mb-6">
                Добавьте товары из каталога, чтобы оформить заказ
              </p>
              <Link to="/catalog">
                <Button size="lg">
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  Перейти в каталог
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={totalItems} />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Корзина</h1>
          <Button variant="ghost" onClick={clearCart} className="text-destructive">
            <Icon name="Trash2" size={18} className="mr-2" />
            Очистить корзину
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Icon name="X" size={20} />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value) || 1)
                            }
                            className="w-16 text-center"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">
                            {item.price} ₽ × {item.quantity}
                          </div>
                          <div className="text-xl font-bold text-primary">
                            {item.price * item.quantity} ₽
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-bold">Итого</h2>
                <Separator />
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Товары ({totalItems} шт.)
                    </span>
                    <span className="font-medium">{totalPrice} ₽</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Доставка</span>
                    <span className="font-medium">
                      {deliveryPrice === 0 ? (
                        <span className="text-primary">Бесплатно</span>
                      ) : (
                        `${deliveryPrice} ₽`
                      )}
                    </span>
                  </div>
                  {totalPrice < 3000 && (
                    <div className="bg-accent/10 text-accent p-3 rounded-lg text-xs">
                      <Icon name="Info" size={14} className="inline mr-1" />
                      Добавьте товаров на {3000 - totalPrice} ₽ для бесплатной доставки
                    </div>
                  )}
                </div>
                <Separator />
                <div className="flex items-center justify-between text-lg">
                  <span className="font-semibold">К оплате</span>
                  <span className="text-2xl font-bold text-primary">{finalPrice} ₽</span>
                </div>
                <Button size="lg" className="w-full font-semibold">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Оформить заказ
                </Button>
                <Link to="/catalog">
                  <Button variant="outline" size="lg" className="w-full">
                    <Icon name="ArrowLeft" size={20} className="mr-2" />
                    Продолжить покупки
                  </Button>
                </Link>
                <div className="pt-4 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-start">
                    <Icon name="Check" size={14} className="mr-2 mt-0.5 text-primary" />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={14} className="mr-2 mt-0.5 text-primary" />
                    <span>Гарантия возврата 30 дней</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={14} className="mr-2 mt-0.5 text-primary" />
                    <span>Сертифицированная продукция</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
