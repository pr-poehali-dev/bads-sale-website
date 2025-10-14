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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Каталог БАДов</h1>
          <p className="text-muted-foreground">
            Найдено товаров: {filteredProducts.length}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg">Фильтры</h2>
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearAllFilters}
                      className="text-xs"
                    >
                      Сбросить
                    </Button>
                  )}
                </div>

                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3 flex items-center">
                        <Icon name="Tag" size={16} className="mr-2" />
                        Категория
                      </h3>
                      <div className="space-y-2">
                        {categories.map((cat) => (
                          <div key={cat.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={`cat-${cat.id}`}
                              checked={selectedCategories.includes(cat.id)}
                              onCheckedChange={() =>
                                toggleFilter(cat.id, selectedCategories, setSelectedCategories)
                              }
                            />
                            <Label
                              htmlFor={`cat-${cat.id}`}
                              className="text-sm cursor-pointer flex-1"
                            >
                              {cat.name} ({cat.count})
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-3 flex items-center">
                        <Icon name="Flask" size={16} className="mr-2" />
                        Состав
                      </h3>
                      <div className="space-y-2">
                        {allIngredients.slice(0, 8).map((ing) => (
                          <div key={ing} className="flex items-center space-x-2">
                            <Checkbox
                              id={`ing-${ing}`}
                              checked={selectedIngredients.includes(ing)}
                              onCheckedChange={() =>
                                toggleFilter(ing, selectedIngredients, setSelectedIngredients)
                              }
                            />
                            <Label htmlFor={`ing-${ing}`} className="text-sm cursor-pointer">
                              {ing}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-3 flex items-center">
                        <Icon name="Target" size={16} className="mr-2" />
                        Назначение
                      </h3>
                      <div className="space-y-2">
                        {allPurposes.slice(0, 6).map((purpose) => (
                          <div key={purpose} className="flex items-center space-x-2">
                            <Checkbox
                              id={`purpose-${purpose}`}
                              checked={selectedPurposes.includes(purpose)}
                              onCheckedChange={() =>
                                toggleFilter(purpose, selectedPurposes, setSelectedPurposes)
                              }
                            />
                            <Label
                              htmlFor={`purpose-${purpose}`}
                              className="text-sm cursor-pointer"
                            >
                              {purpose}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-3 flex items-center text-destructive">
                        <Icon name="AlertCircle" size={16} className="mr-2" />
                        Исключить противопоказания
                      </h3>
                      <div className="space-y-2">
                        {allContraindications.slice(0, 5).map((contra) => (
                          <div key={contra} className="flex items-center space-x-2">
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
                            />
                            <Label
                              htmlFor={`contra-${contra}`}
                              className="text-sm cursor-pointer"
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

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Icon name="SlidersHorizontal" size={20} />
                <span className="font-medium">Сортировка:</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={sortBy === 'name' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSortBy('name')}
                >
                  По названию
                </Button>
                <Button
                  variant={sortBy === 'price-asc' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSortBy('price-asc')}
                >
                  Цена ↑
                </Button>
                <Button
                  variant={sortBy === 'price-desc' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSortBy('price-desc')}
                >
                  Цена ↓
                </Button>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Icon name="PackageOpen" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-semibold text-lg mb-2">Товары не найдены</h3>
                  <p className="text-muted-foreground mb-4">
                    Попробуйте изменить параметры фильтрации
                  </p>
                  <Button onClick={clearAllFilters}>Сбросить фильтры</Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="relative mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        {!product.inStock && (
                          <Badge
                            variant="destructive"
                            className="absolute top-2 right-2"
                          >
                            Нет в наличии
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.purpose.slice(0, 2).map((purpose) => (
                          <Badge key={purpose} variant="secondary" className="text-xs">
                            {purpose}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          {product.price} ₽
                        </span>
                        <Button 
                          disabled={!product.inStock}
                          onClick={() => {
                            addItem(product);
                            toast({
                              title: 'Товар добавлен в корзину',
                              description: product.name,
                            });
                          }}
                        >
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;