---
layout: page
title: Кратко и Быстро
description: Гайд для Охотников на Демонов Месть 9.1.0 PvE Shadowlands
last_update: 2021-06-24 09:00:00
game_version: 9.1.0 Shadowlands 
author: Airithez и Rodriguezz
image:
    path: assets/img/blog/prev/spec_logo_VDH.png
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/vengeance/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"><span style="color: white;"> Кратко и Быстро</span></a>
<a href="{{ site.url }}/guide/vengeance/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/vengeance/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/vengeance/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/vengeance/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/vengeance/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/vengeance/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/vengeance/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ковенанты</a>
<a href="{{ site.url }}/guide/vengeance/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/vengeance/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/vengeance/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/vengeance/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>
В этом разделе собраны все основные материалы из гайда, чтоб вы максимально быстро могли начать играть за Охотника на Демонов Месть.

<div class="tabs">
<div class="tabs__nav">
<a class="tabs__link tabs__link_active" href="#content-1">Клеймобилд</a>
<a class="tabs__link" href="#content-2">ДПС Билд</a>
</div>

<div class="tabs__content">
<div class="tabs__pane tabs__pane_show" id="content-1" >

<div class="tabs_in" markdown="1">

Клеймобилд с высокой выживаемостью через легендарный эффект {{ site.data.legendary.Fiery_Soul }}. Основной билд ВДХ в высокие ключи и мифик рейд

{% include FierySoul.html %} 
 
<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">

{{ site.data.talent.Quickened_Sigils }} перманентный выбор только с ковенантом <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирий.

</span></p>


</div>
</div>

<div class="tabs__pane" id="content-2">
   
<div class="tabs_in"  markdown="1">

ДПС вариант через {{ site.data.talent.Spirit_Bomb }}. Выживаемость в этом варианте на порядок ниже.
При игре с ковенантом <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирий используем легендарный предмет {{ site.data.legendary.Razelikhs_Defilement }}, с остальными ковенантами - {{ site.data.legendary.Sephuzs_Proclamation }} либо {{ site.data.legendary.Darkglare_Boon }}.

{% include RazelikhsDefilement.html %} 
  
<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">

{{ site.data.talent.Quickened_Sigils }} перманентный выбор только с ковенантом <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирий.

</span></p>

</div>
</div>
      
</div>
</div>

<script>
    var $tabs = function (target) {
      var
        _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
        _eventTabsShow,
        _showTab = function (tabsLinkTarget) {
          var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
          tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
          tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
          tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
          // если следующая вкладка равна активной, то завершаем работу
          if (tabsLinkTarget === tabsLinkActive) {
            return;
          }
          // удаляем классы у текущих активных элементов
          if (tabsLinkActive !== null) {
            tabsLinkActive.classList.remove('tabs__link_active');
          }
          if (tabsPaneShow !== null) {
            tabsPaneShow.classList.remove('tabs__pane_show');
          }
          // добавляем классы к элементам (в завимости от выбранной вкладки)
          tabsLinkTarget.classList.add('tabs__link_active');
          tabsPaneTarget.classList.add('tabs__pane_show');
          document.dispatchEvent(_eventTabsShow);
        },
        _switchTabTo = function (tabsLinkIndex) {
          var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
          if (tabsLinks.length > 0) {
            if (tabsLinkIndex > tabsLinks.length) {
              tabsLinkIndex = tabsLinks.length;
            } else if (tabsLinkIndex < 1) {
              tabsLinkIndex = 1;
            }
            _showTab(tabsLinks[tabsLinkIndex - 1]);
          }
        };

      _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

      _elemTabs.addEventListener('click', function (e) {
        var tabsLinkTarget = e.target;
        // завершаем выполнение функции, если кликнули не по ссылке
        if (!tabsLinkTarget.classList.contains('tabs__link')) {
          return;
        }
        // отменяем стандартное действие
        e.preventDefault();
        _showTab(tabsLinkTarget);
      });

      return {
        showTab: function (target) {
          _showTab(target);
        },
        switchTabTo: function (index) {
          _switchTabTo(index);
        }
      }

    };

    var mytabs = $tabs('.tabs');
    if (localStorage.getItem('mytabs')) {
      mytabs.showTab(document.querySelector('[href="' + localStorage.getItem('mytabs') + '"]'));
    }

    document.addEventListener('tab.show', function (e) {
      localStorage.setItem('mytabs', e.detail.querySelector('.tabs__link_active').getAttribute('href'));
    })
</script>

## Какой ковенант выбрать

В 9.1 разница между всеми ковенантами незначительна и в первую очередь зависит от личных предпочтений и типа контента, который вы играете

Лучший выбором в **ПвЕ** будет ковенант <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирий
В **ПвП** - <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночной народец

> Если вы планируете играть в обоих типах контента, я бы советовал выбирать между <img src="{{ site.url }}/assets/img/guide/havoc/nightfae.png" width="22" height="22"> Ночным народцем либо <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентирами. Ковенант <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирий является слабым выбором для **ПвП**

## Какого медиума выбрать

### Ковенант Кирий

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/kiri_logo.png"> </p>

После вступления в ковенант нам откроются две способности:

{{ site.data.covenant.Elysian_Decree }} - Размещает в указанном месте кирийскую печать, которая активируется через 2 сек. Печать наносит сильный АоЕ урон, который можно усилить баффом от {{ site.data.talent.Momentum }}. После взрыва печати появляются 3 {{ site.data.spell.Shattered_SoulsHDH }}, это сильно повышает нашу выживаемость. Также использование {{ site.data.covenant.Elysian_Decree }} активирует способность нашего медиума и дает нам бафф искусности на 10 сек, который можно продлевать собирая сферы "Печальных воспоминаний", тем самым усиливая наши способности которые используют Хаос, например такие как {{ site.data.spell.Chaos_Strike }} и {{ site.data.spell.Eye_Beam }}.

{{ site.data.covenant.Summon_Steward }} - Вы зовете распорядителя, который приносит вам {{ site.data.covenant.Phial_of_Serenity }}, восполняющий 20% здоровья и снимающий проклятия, болезни, яды и эффекты кровотечения. Очень полезный флакон, сильно упрощает жизнь в ключах, снимает даже стаки аффикса {{ site.data.mplus.Necrotic }}.

Лучшим медиумом для нас будет **Пелагий**, дерево прокачки медиума выглядит следующим образом:

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/pelagos/demon-hunter/AwCW5pYTBS0fABUvtwAldg4AIxUq7wAlK2kANSr6AA" target="blank">anything</a>

После того, как вы наберете 57 известности и **Миканикос** будет полностью разблокирован, мы будем переключатся на него в эпохальных+ подземельях и AоЕ боях в рейде, 
а **Пелагия** будем использовать для СТ боев. 

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/forgelite-prime-mikanikos/demon-hunter/AwCW6r4CBStvACUszQASBS0fACUvtwAiFSrvACUraQA" target="blank">anything</a>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">

**Пелагий** дает нам хороший СТ урон за счет новой связи [Новообретенная стойкость](https://ru.wowhead.com/spell=351149), но падает в AoE, 
в то время как **Миканикос** значительно увеличивает наш AoE урон благодаря связи [Бурный акселератор анимы](https://ru.wowhead.com/spell=352188), 
а так же мы получим хорошую связь душ [Реактивная модификация](https://ru.wowhead.com/spell=352187).

</span></p>

### Ковенат Ночной народец

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/fae_logo.png"> </p>

После вступления в ковенант нам откроются две способности:
{{ site.data.covenant.The_Hunt }} - Совершает рывок к цели, нанося урон от сил природы и обездвиживая ее на 1.5 сек., накладывая ДоТ на до 5 врагов на пути между вами и вашей целью. Преследование укрепляет вашу душу, в результате чего вы в течение 30 sec. восполняете здоровье в объеме 50% урона, который наносите цели "Охоты". Кондуит {{ site.data.conduits.Unnatural_Malice }} значительно увеличивает урон наносимый {{ site.data.covenant.The_Hunt }} по цели в вашем таргете, что делает этот ковенат хорошим выбором для СТ.
{{ site.data.covenant.Soulshape }} - дополнительное увеличение мобильности, которая поможет уворачиваться от механик.

**Рейд**

<a href="https://ru.wowhead.com/soulbind-calc/embed/night-fae/niya/demon-hunter/AwaWZb4CBStvACUszQASBS0fACVBJgAiFSrvACUraQA" target="blank">anything</a>

**Ключи**

<a href="https://ru.wowhead.com/soulbind-calc/embed/night-fae/korayn/demon-hunter/AwaWb5YCBStvABUszQASBS0fACVBJgAiFSrvADUraQA" target="blank">anything</a>

### Ковенат Вентиров

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/ventyr_logo.png"></p>

После вступления в ковенант нам откроются две способности:

{{ site.data.covenant.Sinful_Brand }} - Отмечает противника клеймом вентиров, снижая скорость атак ближнего боя на 30%, скорость произнесения заклинаний – на 30%, а также наносит урон от темной магии в течение 8 сек. {{ site.data.covenant.Sinful_Brand }} накладывается на всех ближайших противников при активации {{ site.data.spell.Metamorphosis }}. Наносит неплохой урон в одну цель, и очень сильный урон в АоЕ после применения {{ site.data.spell.Metamorphosis }}, может стать неплохим выбором для СТ боев.

{{ site.data.covenant.Door_of_Shadows }} - Способность дающая нам дополнительную мобильность, с ее помощью можно пропускать группы мобов.

Вы можете использовать **Наджию** для большей части контента

<a href="https://ru.wowhead.com/soulbind-calc/embed/venthyr/nadjia-the-mistblade/demon-hunter/AwaWqpYCBStvACUszQASBS0fACUwPAAiFSrvACUraQA" target="blank">anything</a>

Для максимальной защиты используем **Дрейвена**

<a href="https://ru.wowhead.com/soulbind-calc/embed/venthyr/general-draven/demon-hunter/AwCWZZYBJStvABMFLR8AFTA8ACV2DgAiBSrvABUraQA" target="blank">anything</a>

### Ковенант Некролорды

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/necrolord_logo.png"> </p>

После вступленя в ковенант нам отроются две способности:
{{ site.data.covenant.Fodder_to_the_Flame }} - Вы призываете демона которого можете атаковать только вы, его убийство дает {{ site.data.covenant.Empowered_Demon_Soul }}, хоть демон и убивается очень легко, все эти махинации отнимают много времени прежде чем вы начнете бить свою приоритетную цель, тем самым это будет ломать нашу ротацию и вносить дискомфорт в игру.
{{ site.data.covenant.Fleshcraft }} - по описанию звучит как очень хорошая способность, но ее нужно применять 4 сек. чтоб получить щит максимального объема и без специальной связи душ вы не сможете двигаться пока щит "накачивается".

**Рейд**

<a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/plague-deviser-marileth/demon-hunter/AwCW5r4BJStvABMFLR8AFTBfACV2DgAiFSrvACUraQA" target="blank">anything</a>

**Ключи**

<a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/emeni/demon-hunter/AwCWar4CBStvACUszQASBS0fACUwXwAiFSrvACUraQA" target="blank">anything</a>

## Проводники (Кондуиты)

<img src="/assets/img/guide/havoc/potency.png" width="15" height="100%"> <u>Проводники силы</u>

* {{ site.data.conduits.Growing_Inferno }} — приоритетный выбор данного типа проводников. В паре с талантом {{ site.data.talent.Agonizing_Flames }} показывает очень высокие цифры урона
> Добыча: подземелье [Смертельная тризна](https://ru.wowhead.com/the-necrotic-wake) босс [Хирург Трупошов](https://ru.wowhead.com/npc=166882) и рейд [Святилище Господства](https://ru.wowhead.com/zone=13561) босс [Сильвана Ветрокрылая](https://ru.wowhead.com/npc=180828/) 

* [Фрагмент адаптивной брони](https://ru.wowhead.com/spell=357902) При получении исцеления от другого игрока ваша основная характеристика повышается на 2-3,6% на 15 сек. Эффект срабатывает не чаще раза в 30 сек.
> Добыча: мировой босс [Мор'гет](https://ru.wowhead.com/npc=178958/) и рейд [Святилище Господства](https://ru.wowhead.com/zone=13561) босс [Стражница Предвечных](https://ru.wowhead.com/npc=175731/guardian-of-the-first-ones) 

При наличии второго слота под <u>проводник силы</u>, всегда используем ковенантские проводники

* {{ site.data.conduits.Repeat_Decree }} — наша способность <span style="color:#68ccef;font-size:1em;"><img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="22"> Кирии</span> наносит еще больше урона за счет повторной активации. Берем во вторую ячейку силы
> Добыча: рейд [Замок Нафрия](https://ru.wowhead.com/castle-nathria) босс [Сир Денатрий](https://ru.wowhead.com/npc=167406) и мировые боссы

* {{ site.data.conduits.Increased_Scrutiny }} — небольшое увеличение урона по одиночной цели. Берем <img src="{{ site.url }}/assets/img/guide/havoc/venthyr.png" width="16" height="24"> Вентирами за неимением лучшего
> Добыча: рейд [Замок Нафрия](https://ru.wowhead.com/castle-nathria) босс [Сир Денатрий](https://ru.wowhead.com/npc=167406) и мировые боссы

* {{ site.data.conduits.Brooding_Pool }} — продлевает длительность увеличения урона от души демона. Просто и эффективно
> Добыча: рейд [Замок Нафрия](https://ru.wowhead.com/castle-nathria) босс [Сир Денатрий](https://ru.wowhead.com/npc=167406) и мировые боссы

* {{ site.data.conduits.Unnatural_Malice }} — Увеличивает урон ДоТа "Охоты"%.
> Добыча: рейд [Замок Нафрия](https://ru.wowhead.com/castle-nathria) босс [Сир Денатрий](https://ru.wowhead.com/npc=167406) и мировые боссы

<img src="/assets/img/guide/havoc/endurance.png" width="15" height="100%"> <u>Проводники выносливости</u>

* {{ site.data.conduits.Viscous_Ink }} — дает дополнительное снижение урона от магии нашим {{ site.data.spell.Demonic_WardsVDH }}. Очень сильный проводник, берем когда в бою присутствует магический урон
> Добыча: подземелье [Тайный рынок Тазавеш](https://ru.wowhead.com/zone=13577/) босс [Со'азми](https://ru.wowhead.com/npc=175806)

* {{ site.data.conduits.Shattered_Restoration }} — наиболее универсальный среди проводников выносливости. Берем в большинстве ситуаций 
> Добыча: рейд [Святилище Господства](https://ru.wowhead.com/zone=13561/) босс [Раздиратель душ Дормацайн](https://ru.wowhead.com/npc=175727/)

* {{ site.data.conduits.Fel_Defender }} — берем всегда. В боях без магии вместо {{ site.data.conduits.Viscous_Ink }}, в остальных случаях вместо {{ site.data.conduits.Shattered_Restoration }}
> Добыча: подземелье [Тайный рынок Тазавеш](https://ru.wowhead.com/zone=13577/) босс [Со'лея](https://ru.wowhead.com/npc=180863/)

* [Конденсированная сфера анимы](https://ru.wowhead.com/spell=357888) — При получении любого урона вы восполняете 0.25-0.45% максимального запаса здоровья. Эффект срабатывает не чаще раза в 10 сек.
> Добыча: мировой босс [Мор'гет](https://ru.wowhead.com/npc=178958/)

<img src="/assets/img/guide/havoc/finesse.png" width="15" height="100%"> <u>Проводники точности</u>

* {{ site.data.conduits.Felfire_Haste }} — дает дополнительную мобильность и без того мобильному классу. Все же является единственным универсальным выбором проводника в эту ячейку
> Добыча: рейд [Святилище Господства](https://ru.wowhead.com/zone=13561/) босс [Сир Денатрий](https://ru.wowhead.com/npc=179390/)

## Легендарные предметы

{{ site.data.legendary.Fiery_Soul }} — основа нашего клеймобилда. Очень хорошая легендарка как для рейда, так и для М+. Не советуется использовать в паре со  {{ site.data.talent.Spirit_Bomb }}.

> Крафтим в слот наручей

* {{ site.data.legendary.Razelikhs_Defilement }} — неплохая легендарная способность для дпс и утилити. Использовать только с ковенантом <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирий. Имейте ввиду, что с ней сильно просядет аптайм вашего {{ site.data.spell.Fiery_Brand }}

> Крафтим в слот наручей

* {{ site.data.legendary.Darkglare_Boon }} — после апа в 9.0.5 является хорошим выбором. В купе с реворком {{ site.data.conduits.Fel_Defender }} выглядит особенно привлекательно

> Крафтим в любой слот

## Осколки Господства

### Рейд

* [Осколок Бек](https://ru.wowhead.com/item=187057)
* [Осколок Джас](https://ru.wowhead.com/item=187059)
* [Осколок Рев](https://ru.wowhead.com/item=187061)
* [Осколок Диз](https://ru.wowhead.com/item=187073)
* [Осколок Кор](https://ru.wowhead.com/item=187063) - дает хороший прирост урона когда в бою появляются ады, но слаб в СТ, поэтому вы можете заменить его на осколок защиты.

**Осколки для замены**

* [Осколок Зед](https://ru.wowhead.com/item=187079)
* [Осколок Кир](https://ru.wowhead.com/item=187065)

**Улучшаем их в следующем порядке**

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">

1. [Осколок Диз](https://ru.wowhead.com/item=187073) и [Осколок Бек](https://ru.wowhead.com/item=187057) улучшайте их по очереди до максимального уровня, потом переходите к улучшению остальных осколков<br>
2. [Осколок Кир](https://ru.wowhead.com/item=187065) - Если используете <br>
3. [Осколок Джас](https://ru.wowhead.com/item=187059) <br>
4. [Осколок Рев](https://ru.wowhead.com/item=187061)<br>
5. [Осколок Кор](https://ru.wowhead.com/item=187063) - Если используете  <br>
6. [Осколок Зед](https://ru.wowhead.com/item=187079) - Если используете  <br>

</span></p>

### Мифик+

* [Осколок Диз](https://ru.wowhead.com/item=187073)
* [Осколок Кор](https://ru.wowhead.com/item=187063)
* [Осколок Бек](https://ru.wowhead.com/item=187057)
* [Осколок Джас](https://ru.wowhead.com/item=187059)
* [Осколок Кир](https://ru.wowhead.com/item=187065)

**Улучшаем их в следующем порядке**

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">

Улучшайте все осколки по очереди чтоб они были на одном уровне 

1. [Осколок Диз](https://ru.wowhead.com/item=187073)
2. [Осколок Кор](https://ru.wowhead.com/item=187063)
3. [Осколок Бек](https://ru.wowhead.com/item=187057)
4. [Осколок Джас](https://ru.wowhead.com/item=187059)
5. [Осколок Кир](https://ru.wowhead.com/item=187065)

</span></p>

## Приоритет характеристик

**Рейд**

<img src="{{ site.url }}/assets/img/guide/havoc/agil.png" width="25" height="25"> **Ловкость >** <img src="{{ site.url }}/assets/img/guide/havoc/vers.png" width="25" height="25"> **Универсальность >** <img src="{{ site.url }}/assets/img/guide/havoc/speed.png" width="25" height="25"> **Скорость >** <img src="{{ site.url }}/assets/img/guide/havoc/mastry.png" width="25" height="25"> **Искусность >** <img src="{{ site.url }}/assets/img/guide/havoc/crit.png" width="25" height="25"> **Критический удар**

**М+**

<img src="{{ site.url }}/assets/img/guide/havoc/agil.png" width="25" height="25"> **Ловкость >** <img src="{{ site.url }}/assets/img/guide/havoc/vers.png" width="25" height="25"> **Универсальность >** <img src="{{ site.url }}/assets/img/guide/havoc/speed.png" width="25" height="25"> **Скорость >** <img src="{{ site.url }}/assets/img/guide/havoc/crit.png" width="25" height="25"> **Критический удар >** <img src="{{ site.url }}/assets/img/guide/havoc/mastry.png" width="25" height="25"> **Искусность** 

## Ротация 

**Опенер**

1. Прекаст {{ site.data.spell.Sigil_of_Flame }}  
1. {{ site.data.spell.Torment }} вместе с {{ site.data.spell.Fiery_Brand }}
1. {{ site.data.spell.Infernal_Strike }} вместе с {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.covenant.Elysian_Decree }} / {{ site.data.covenant.The_Hunt }} / {{ site.data.covenant.Sinful_Brand }}
1. {{ site.data.talent.Fracture }}  
1. {{ site.data.spell.Soul_Cleave }} - если у вас есть души
1. {{ site.data.spell.Fel_Devastation }} - если у вас есть Гнев

**Ротация**

1. {{ site.data.spell.Infernal_Strike }} если у вас 2 заряда
1. {{ site.data.spell.Fiery_Brand }} - по готовности
1. {{ site.data.spell.Fel_Devastation }} - если у вас есть 50 Ярости
1. {{ site.data.spell.Soul_Cleave }} - если у вас есть души
1. {{ site.data.covenant.Elysian_Decree }} / {{ site.data.covenant.The_Hunt }} / {{ site.data.covenant.Sinful_Brand }} - по готовности
1. {{ site.data.spell.Immolation_Aura }} - по готовности
1. {{ site.data.talent.Fracture }} - если у вас нет капа душ и/или Гнева
1. {{ site.data.spell.Sigil_of_Flame }} - по готовности
1. {{ site.data.spell.Throw_GlaiveVDH }} - когда все способности восстанавливаются


## Инчант и Камни

**Инчант**
* Оружие: {{ site.data.prof.Celestial_Guidance }} и {{ site.data.prof.Enchant_Weapon_Lightless_Force }}
* Кольца: {{ site.data.prof.Enchant_Ring_Tenet_of_Versatility }}
* Сапоги: {{ site.data.prof.Enchant_Boots_Eternal_Agility }}
* Нагрудник: {{ site.data.prof.Enchant_Chest_Eternal_Stats }}
* Плащ: {{ site.data.prof.Enchant_Cloak_Fortified_Leech }}

**Камни**
* {{ site.data.prof.Versatile_Jewel_Cluster }} +16 к универсальности

## Еда и Химия

**Химия**
• Настой: {{ site.data.prof.Eternal_Flask }}
• Зелья: {{ site.data.prof.Potion_of_Empowered_Exorcisms }}
• Исцеление: {{ site.data.prof.Spiritual_Healing_Potion }}

**Еда**
• {{ site.data.prof.Feast_of_Gluttonous_Hedonism }} повышает ловкость на 20.
• {{ site.data.prof.Steak_a_la_Mode }} повышает  универсальность на 30.

## Масло и Заточки для оружия

* Масло:{{ site.data.prof.Shadowcore_Oil }} — При применении к оружию атаки и заклинания в течение 60 мин. с высокой вероятностью наносят противникам 220 ед. дополнительного урона от темной магии. 
* Точильный камень: {{ site.data.prof.Shaded_Sharpening_Stone }} — Вы точите клинковое оружие, в результате чего сила атаки повышается на 20 на 1 час.

## Накладки 

* {{ site.data.prof.Heavy_Desolate_Armor_Kit }} — Укрепляет нагрудник, повышая прибавку к выносливости на 32 на 2 часа.

## Аксессуары

* {{ site.data.item.Blood_Spattered_Scale }} очень сильный дополнительный сейв. Дает много абсорба и хороший урон. Отличный вариант для М+ контента и прочих АОЕ сценариев
* {{ site.data.item.Splintered_Heart_of_Alar }} просто читдез. Огромное кд, шанс осечки крайне мал. Неплохо, если вам нужен еще один читдез, но в целом крайне слабый и ситуативный аксессуар
* {{ site.data.item.Stone_Legion_Heraldry }} статстик, дающий 2% универсальности и примерно еще 0.1% за каждого члена группы с таким же тринкетом. Очень хороший вариант

**Лучшим сетапом аксессуаров для Рейда является**

{{ site.data.item.Stone_Legion_Heraldry }} и {{ site.data.item.Splintered_Heart_of_Alar }}

**В М+ контенте один из этих тринкетов обязательно нужно заменить на**

{{ site.data.item.Blood_Spattered_Scale }} 

## БиС лист

<div class="table-box" markdown="1">

|Слот|Название|Камень господства|Добывается|
|Голова|[Колпак извивающегося зла](https://ru.wowhead.com/item=186292/)|[Осколок Диз](https://ru.wowhead.com/item=187073)|[Душа Нер'зула](https://ru.wowhead.com/npc=175729)|
|Шея|[Межпланарный краеугольный камень](https://ru.wowhead.com/item=186379)| - |[Кел'Тузад](https://ru.wowhead.com/npc=15990/kelthuzad)|
|Плечо|[Наплеч доверенного-предателя](https://ru.wowhead.com/item=186336)|[Осколок Кор](https://ru.wowhead.com/item=187063)|[Кел'Тузад](https://ru.wowhead.com/npc=15990/kelthuzad)|
|Плащ|[Самовоспроизводящаяся ткань](https://ru.wowhead.com/item=186374/)| - |[Стражница Предвечных](https://ru.wowhead.com/npc=175731)|
|Грудь|[Клепаная кираса иссохшего сердца](https://ru.wowhead.com/item=186334)|[Осколок Бек](https://ru.wowhead.com/item=187057)|[Сильвана Ветрокрылая](https://ru.wowhead.com/npc=180828)|
|Запястье|[Путы с нитями судьбы](https://ru.wowhead.com/item=186335)| - |[Писарь судьбы Ро-Кало](https://ru.wowhead.com/npc=179390)|
|Руки|[Повязки верного квалдира](https://ru.wowhead.com/item=186295)|[Осколок Рев](https://ru.wowhead.com/item=187061)|[Око Тюремщика](https://ru.wowhead.com/npc=180018)|
|Пояс|[Перевязь Ветрокрылой](https://ru.wowhead.com/item=186332)| - |[Сильвана Ветрокрылая](https://ru.wowhead.com/npc=180828)|
|Ноги|[Брюки элитного аранакка](https://ru.wowhead.com/item=186331)| - |[Кел'Тузад](https://ru.wowhead.com/npc=15990/kelthuzad)|
|Сапоги|[Сапоги нестабильной энергии](https://ru.wowhead.com/item=186363)|[Осколок Джас](https://ru.wowhead.com/item=187059)|[Стражница Предвечных](https://ru.wowhead.com/npc=175731)|
|Кольцо 1|[Потускневший знак Кель'Таласа](https://ru.wowhead.com/item=186377)| - |[Сильвана Ветрокрылая](https://ru.wowhead.com/npc=180828)|
|Кольцо 2|[Миниатюрное колесо для казни](https://ru.wowhead.com/item=186375)| - |[Кузнец боли Разнал](https://ru.wowhead.com/npc=176523)|
|Аксессуар 1|[Забрызганная кровью чешуйка](https://ru.wowhead.com/item=179331)| - |[Та Сторона](https://ru.wowhead.com/de-other-side)|
|Аксессуар 2|[Осколок эгиды Аннгильды](https://ru.wowhead.com/item=1864241)| - |[Скайя](https://ru.wowhead.com/npc=175726)|
|Основная рука|[Крестовой вспарыватель вен](https://ru.wowhead.com/item=186388)| - |[Кузнец боли Разнал](https://ru.wowhead.com/npc=176523)|
|Левая рука|[Крестовой вспарыватель вен](https://ru.wowhead.com/item=186388)| - |[Кузнец боли Разнал](https://ru.wowhead.com/npc=176523)|

</div>
<div class="minibox"><a href="{{ site.url }}/guide/havoc/overview.html">Далее:<br>Обзор</a></div>


