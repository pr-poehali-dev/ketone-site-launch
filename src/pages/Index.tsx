import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30">
      <header className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Icon name="Flask" className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-foreground">Кетоны: структура и свойства</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <section className="mb-12 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Органическая химия</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Изучение кетонов — важного класса органических соединений с карбонильной группой
          </p>
        </section>

        <Tabs defaultValue="structure" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="structure" className="flex items-center gap-2">
              <Icon name="Atom" size={18} />
              <span className="hidden sm:inline">Строение</span>
            </TabsTrigger>
            <TabsTrigger value="properties" className="flex items-center gap-2">
              <Icon name="Beaker" size={18} />
              <span className="hidden sm:inline">Свойства</span>
            </TabsTrigger>
            <TabsTrigger value="reactions" className="flex items-center gap-2">
              <Icon name="Zap" size={18} />
              <span className="hidden sm:inline">Реакции</span>
            </TabsTrigger>
            <TabsTrigger value="applications" className="flex items-center gap-2">
              <Icon name="Factory" size={18} />
              <span className="hidden sm:inline">Применение</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="structure" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Hexagon" className="text-primary" size={24} />
                  Строение и химическая структура кетонов
                </CardTitle>
                <CardDescription>
                  Основные характеристики молекулярного строения
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-3">Общая формула</h3>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <p className="text-2xl font-mono font-semibold text-foreground">R—CO—R'</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      где R и R' — алкильные или арильные радикалы
                    </p>
                  </div>

                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Карбонильная группа C=O</h4>
                      <p className="text-muted-foreground">
                        Центральный структурный элемент кетонов. Атом углерода связан двойной связью с атомом кислорода.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Гибридизация</h4>
                      <p className="text-muted-foreground">
                        Атом углерода карбонильной группы находится в состоянии sp²-гибридизации.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <img 
                      src="https://cdn.poehali.dev/projects/d43e99f0-b562-43ba-958c-7c772fe9addb/files/66d83909-660a-4648-bac0-3088394e52b7.jpg" 
                      alt="Структура молекулы ацетона"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>

                  <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Info" className="text-blue-600" size={20} />
                      Примеры кетонов
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Ацетон</strong> (CH₃—CO—CH₃) — простейший кетон</li>
                      <li>• <strong>Бутанон</strong> (CH₃—CO—C₂H₅) — метилэтилкетон</li>
                      <li>• <strong>Циклогексанон</strong> — циклический кетон</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="properties" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TestTube" className="text-secondary" size={24} />
                  Физические и химические свойства
                </CardTitle>
                <CardDescription>
                  Характеристики кетонов в различных условиях
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Физические свойства</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Агрегатное состояние</h4>
                        <p className="text-sm text-muted-foreground">
                          Низшие кетоны — жидкости, высшие — твёрдые вещества
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Растворимость</h4>
                        <p className="text-sm text-muted-foreground">
                          Хорошо растворяются в органических растворителях
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Температура кипения</h4>
                        <p className="text-sm text-muted-foreground">
                          Выше, чем у алканов, но ниже, чем у спиртов
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Запах</h4>
                        <p className="text-sm text-muted-foreground">
                          Характерный, часто приятный запах
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Химические свойства</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Реакционная способность</h4>
                        <p className="text-sm text-muted-foreground">
                          Менее активны, чем альдегиды
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Полярность</h4>
                        <p className="text-sm text-muted-foreground">
                          Карбонильная группа полярна (δ⁺C=Oδ⁻)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Окисление</h4>
                        <p className="text-sm text-muted-foreground">
                          Окисляются только в жёстких условиях
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Восстановление</h4>
                        <p className="text-sm text-muted-foreground">
                          Образуют вторичные спирты
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Ключевые характеристики</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Icon name="Thermometer" className="mx-auto mb-2 text-primary" size={28} />
                      <p className="text-sm font-medium">Летучесть</p>
                      <p className="text-xs text-muted-foreground mt-1">Средняя</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Icon name="Droplet" className="mx-auto mb-2 text-secondary" size={28} />
                      <p className="text-sm font-medium">Плотность</p>
                      <p className="text-xs text-muted-foreground mt-1">Меньше воды</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <Icon name="Flame" className="mx-auto mb-2 text-orange-500" size={28} />
                      <p className="text-sm font-medium">Горючесть</p>
                      <p className="text-xs text-muted-foreground mt-1">Горючи</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reactions" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="GitBranch" className="text-secondary" size={24} />
                  Характерные реакции кетонов
                </CardTitle>
                <CardDescription>
                  Типичные химические превращения
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/d43e99f0-b562-43ba-958c-7c772fe9addb/files/de002010-952c-4e3a-a6e8-2d9bf8891f19.jpg" 
                    alt="Схема реакций кетонов"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">1. Нуклеофильное присоединение</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        Присоединение нуклеофилов к карбонильной группе
                      </p>
                      <div className="bg-muted p-3 rounded font-mono text-sm">
                        R—CO—R' + HCN → R—C(OH)(CN)—R'
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-secondary">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">2. Восстановление</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        Образование вторичных спиртов
                      </p>
                      <div className="bg-muted p-3 rounded font-mono text-sm">
                        R—CO—R' + H₂ → R—CH(OH)—R'
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Катализаторы: Ni, Pt, Pd
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">3. Конденсация</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        Альдольная и кротоновая конденсация
                      </p>
                      <div className="bg-muted p-3 rounded font-mono text-sm">
                        2CH₃—CO—CH₃ → CH₃—CO—CH₂—C(OH)(CH₃)₂
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        В присутствии щелочи
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">4. Галогенирование</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        Замещение водорода у α-углерода
                      </p>
                      <div className="bg-muted p-3 rounded font-mono text-sm">
                        CH₃—CO—CH₃ + Cl₂ → CH₃—CO—CH₂Cl + HCl
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">5. Окисление</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        Жёсткое окисление приводит к разрыву С—С связей
                      </p>
                      <div className="bg-muted p-3 rounded font-mono text-sm">
                        R—CO—R' + [O] → R—COOH + R'—COOH
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Условия: KMnO₄ в кислой среде, нагревание
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="AlertCircle" className="text-yellow-600" size={20} />
                    Важно помнить
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Кетоны не дают реакцию серебряного зеркала, в отличие от альдегидов, 
                    что используется для их различения.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Building2" className="text-primary" size={24} />
                  Практическое применение в промышленности
                </CardTitle>
                <CardDescription>
                  Использование кетонов в различных областях
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="mb-6">
                  <img 
                    src="https://cdn.poehali.dev/projects/d43e99f0-b562-43ba-958c-7c772fe9addb/files/519d1e5d-2dce-48de-a6a9-7f8269cf70eb.jpg" 
                    alt="Промышленное применение кетонов"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-blue-50 to-white">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Icon name="Paintbrush" className="text-blue-600" size={20} />
                        Растворители
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <p>• Производство лаков и красок</p>
                      <p>• Удаление лака для ногтей</p>
                      <p>• Очистка и обезжиривание поверхностей</p>
                      <p>• Экстракция веществ</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-white">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Icon name="FlaskConical" className="text-purple-600" size={20} />
                        Химический синтез
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <p>• Производство пластмасс</p>
                      <p>• Синтез полимеров</p>
                      <p>• Получение лекарственных препаратов</p>
                      <p>• Производство взрывчатых веществ</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-white">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Icon name="Sparkles" className="text-green-600" size={20} />
                        Парфюмерия и косметика
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <p>• Основа для ароматических композиций</p>
                      <p>• Производство косметических средств</p>
                      <p>• Фиксаторы запахов</p>
                      <p>• Жидкости для снятия макияжа</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-orange-50 to-white">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Icon name="Pill" className="text-orange-600" size={20} />
                        Фармацевтика
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <p>• Промежуточные продукты синтеза</p>
                      <p>• Производство витаминов</p>
                      <p>• Синтез гормонов</p>
                      <p>• Антисептические средства</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Наиболее важные кетоны в промышленности</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Ацетон (Пропанон)</h4>
                        <p className="text-sm text-muted-foreground">
                          Самый распространённый кетон. Объём мирового производства — около 7 млн тонн в год
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Метилэтилкетон (МЭК)</h4>
                        <p className="text-sm text-muted-foreground">
                          Важный растворитель для производства покрытий, клеёв и печатных красок
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Циклогексанон</h4>
                        <p className="text-sm text-muted-foreground">
                          Сырьё для производства капролактама — мономера для получения нейлона-6
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Leaf" className="text-green-600" size={22} />
                    Кетоны в природе
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Кетоны встречаются в эфирных маслах растений, феромонах насекомых, 
                    участвуют в метаболизме живых организмов (кетоновые тела при расщеплении жиров).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Некоторые кетоны обладают приятным запахом и используются в пищевой промышленности 
                    как ароматизаторы.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted/50 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Образовательный материал по органической химии
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
