import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { products, categories, allIngredients, allPurposes, allContraindications } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const { addItem } = useCart();
  const { toast } = useToast();

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>([]);
  const [selectedContraindications, setSelectedContraindications] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc'>('name');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedIngredients.length > 0) {
      filtered = filtered.filter((p) =>
        selectedIngredients.some((ing) => p.ingredients.includes(ing))
      );
    }

    if (selectedPurposes.length > 0) {
      filtered = filtered.filter((p) =>
        selectedPurposes.some((purpose) => p.purpose.includes(purpose))
      );
    }

    if (selectedContraindications.length > 0) {
      filtered = filtered.filter(
        (p) =>
          !selectedContraindications.some((contra) => p.contraindications.includes(contra))
      );
    }

    filtered = [...filtered].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

    return filtered;
  }, [selectedCategories, selectedIngredients, selectedPurposes, selectedContraindications, sortBy]);

  const toggleFilter = (
    value: string,
    selected: string[],
    setter: (value: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setter(selected.filter((item) => item !== value));
    } else {
      setter([...selected, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedIngredients([]);
    setSelectedPurposes([]);
    setSelectedContraindications([]);
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedIngredients.length > 0 ||
    selectedPurposes.length > 0 ||
    selectedContraindications.length > 0;

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product);
    toast({
      title: 'Добавлено в корзину',
      description: `${product.name} добавлен в корзину`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="relative py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8 text-center animate-fade-in-down">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-primary/20">
              <Icon name="Package" size={16} className="text-primary" />
              <span className="text-sm font-semibold">Каталог продукции</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Каталог БАДов
            </h1>
            <p className="text-lg text-muted-foreground">
              Найдено товаров: <span className="font-semibold text-primary">{filteredProducts.length}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 animate-slide-in-left">
              <Card className="border-2 sticky top-4 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-bold text-lg flex items-center">
                      <Icon name="SlidersHorizontal" size={20} className="mr-2 text-primary" />
                      Фильтры
                    </h2>
                    {hasActiveFilters && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAllFilters}
                        className="text-xs hover:text-primary"
                      >
                        <Icon name="X" size={14} className="mr-1" />
                        Сбросить
                      </Button>
                    )}
                  </div>

                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-6">
                      <div className="animate-fade-in-up">
                        <h3 className="font-semibold mb-3 flex items-center text-sm">
                          <Icon name="Tag" size={16} className="mr-2 text-primary" />
                          Категория
                        </h3>
                        <div className="space-y-2.5">
                          {categories.map((cat) => (
                            <div key={cat.id} className="flex items-center space-x-2 group">
                              <Checkbox
                                id={`cat-${cat.id}`}
                                checked={selectedCategories.includes(cat.id)}
                                onCheckedChange={() =>
                                  toggleFilter(cat.id, selectedCategories, setSelectedCategories)
                                }
                                className="data-[state=checked]:bg-primary"
                              />
                              <Label
                                htmlFor={`cat-${cat.id}`}
                                className="text-sm cursor-pointer flex-1 group-hover:text-primary transition-colors"
                              >
                                {cat.name} <span className="text-muted-foreground">({cat.count})</span>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <h3 className="font-semibold mb-3 flex items-center text-sm">
                          <Icon name="Pill" size={16} className="mr-2 text-primary" />
                          Состав
                        </h3>
                        <div className="space-y-2.5">
                          {allIngredients.map((ing) => (
                            <div key={ing} className="flex items-center space-x-2 group">
                              <Checkbox
                                id={`ing-${ing}`}
                                checked={selectedIngredients.includes(ing)}
                                onCheckedChange={() =>
                                  toggleFilter(ing, selectedIngredients, setSelectedIngredients)
                                }
                                className="data-[state=checked]:bg-primary"
                              />
                              <Label
                                htmlFor={`ing-${ing}`}
                                className="text-sm cursor-pointer group-hover:text-primary transition-colors"
                              >
                                {ing}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="font-semibold mb-3 flex items-center text-sm">
                          <Icon name="Target" size={16} className="mr-2 text-primary" />
                          Назначение
                        </h3>
                        <div className="space-y-2.5">
                          {allPurposes.map((purpose) => (
                            <div key={purpose} className="flex items-center space-x-2 group">
                              <Checkbox
                                id={`purpose-${purpose}`}
                                checked={selectedPurposes.includes(purpose)}
                                onCheckedChange={() =>
                                  toggleFilter(purpose, selectedPurposes, setSelectedPurposes)
                                }
                                className="data-[state=checked]:bg-primary"
                              />
                              <Label
                                htmlFor={`purpose-${purpose}`}
                                className="text-sm cursor-pointer group-hover:text-primary transition-colors"
                              >
                                {purpose}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <h3 className="font-semibold mb-3 flex items-center text-sm">
                          <Icon name="AlertCircle" size={16} className="mr-2 text-destructive" />
                          Исключить противопоказания
                        </h3>
                        <div className="space-y-2.5">
                          {allContraindications.map((contra) => (
                            <div key={contra} className="flex items-center space-x-2 group">
                              <Checkbox
                                id={`contra-${contra}`}
                                checked={selectedContraindications.includes(contra)}
                                onCheckedChange={() =>
                                  toggleFilter(
                                    contra,
                                    selectedContraindications,
                                    setSelectedContraindications
                                  )
                                }
                                className="data-[state=checked]:bg-destructive"
                              />
                              <Label
                                htmlFor={`contra-${contra}`}
                                className="text-sm cursor-pointer group-hover:text-destructive transition-colors"
                              >
                                {contra}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </aside>

            <main className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between flex-wrap gap-4 animate-fade-in-down">
                <div className="flex items-center space-x-2">
                  <Icon name="ArrowUpDown" size={18} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-medium">Сортировка:</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={sortBy === 'name' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('name')}
                    className="text-xs"
                  >
                    По названию
                  </Button>
                  <Button
                    variant={sortBy === 'price-asc' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('price-asc')}
                    className="text-xs"
                  >
                    Дешевле
                  </Button>
                  <Button
                    variant={sortBy === 'price-desc' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('price-desc')}
                    className="text-xs"
                  >
                    Дороже
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <Card
                    key={product.id}
                    className="group overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {product.isNew && (
                          <Badge className="absolute top-3 right-3 bg-accent shadow-lg animate-bounce-subtle">
                            <Icon name="Sparkles" size={12} className="mr-1" />
                            Новинка
                          </Badge>
                        )}
                        {product.discount && (
                          <Badge className="absolute top-3 left-3 bg-destructive shadow-lg">
                            -{product.discount}%
                          </Badge>
                        )}
                      </div>
                      <div className="p-5 space-y-3">
                        <div>
                          <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {product.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {product.ingredients.slice(0, 2).map((ing) => (
                            <Badge key={ing} variant="secondary" className="text-xs">
                              {ing}
                            </Badge>
                          ))}
                          {product.ingredients.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{product.ingredients.length - 2}
                            </Badge>
                          )}
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                          <div>
                            {product.discount ? (
                              <div className="space-y-0.5">
                                <div className="text-xs text-muted-foreground line-through">
                                  {product.price} ₽
                                </div>
                                <div className="text-2xl font-bold text-primary">
                                  {Math.round(product.price * (1 - product.discount / 100))} ₽
                                </div>
                              </div>
                            ) : (
                              <div className="text-2xl font-bold text-primary">{product.price} ₽</div>
                            )}
                          </div>
                          <Button
                            onClick={() => handleAddToCart(product)}
                            size="sm"
                            className="shadow-lg hover:shadow-xl transition-all group-hover:scale-105"
                          >
                            <Icon name="ShoppingCart" size={16} className="mr-1.5" />
                            В корзину
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <Card className="p-12 text-center animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-muted rounded-full mb-4">
                    <Icon name="SearchX" size={40} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                  <p className="text-muted-foreground mb-6">
                    Попробуйте изменить параметры фильтрации
                  </p>
                  <Button onClick={clearAllFilters} variant="outline">
                    <Icon name="RotateCcw" size={16} className="mr-2" />
                    Сбросить фильтры
                  </Button>
                </Card>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
