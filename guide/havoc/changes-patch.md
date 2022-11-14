---
layout: guide
title: Изменения в патче 10.0
description: Изменения в патче Гайд для Охотников на Демонов Истребление 10.0 PvE Dragonflight
last_update: 2022-10-09 09:00:00
game_version: 10.0 Dragonflight
author: Rodriguezz
toc: true
image:
    path: assets/img/blog/prev/spec_logo.png
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/havoc/changes-patch.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"><span style="color: white;"> Изменения в патче</span></a>
<a href="{{ site.url }}/guide/havoc/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/havoc/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/havoc/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/havoc/set-bonuses.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Сет бонусы</a>
<a href="{{ site.url }}/guide/havoc/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/havoc/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_mekkatorque_bot_bluegear.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/havoc/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/havoc/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/havoc/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/havoc/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/havoc/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>

<a href="https://www.patreon.com/bePatron?u=43917749"  data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>

## Главные изменения Охотников на Демонов в патче 10.0

1. Изменена формула нанесения урона способности [Пронзающий взгляд](https://wowhead.com/ru/spell=198013).
1. Изменен талант [Демонические клинки](https://wowhead.com/ru/spell=203555), теперь он восстанавливает 7-12 ед. гнева за каждое попадание, раньше восстанавливал гнев с шансом 60%. 
1. Измененный талант [Первая кровь](https://wowhead.com/ru/spell=206416/), теперь не уменьшает стоимость [Танца клинков](https://wowhead.com/ru/spell=188499/), а только увеличивает урон, а урон стает магией хаоса.
1. Измененный талант [Импульс](https://www.wowhead.com/ru/spell=206476), теперь у него больше источников для активации бонуса, но бафф урона был уменьшен с 15% до 8%, а время действия с 6 сек. до 5 сек.
1. Сетовый бонус
* 2 предмета: шанс критического удара [Удар Хаоса](https://wowhead.com/ru/spell=162794/)/[Аннигиляция](https://wowhead.com/ru/spell=201427) и [Танец клинков](https://wowhead.com/ru/spell=188499)/[Смертоносный взмах](https://www.wowhead.com/ru/spell=210152) увеличен на 5%, а их критический урон увеличен на 10%.
* 4 предмета: [Удар Хаоса](https://wowhead.com/ru/spell=162794/)/[Аннигиляция](https://wowhead.com/ru/spell=201427) и [Танец клинков](https://wowhead.com/ru/spell=188499)/[Смертоносный взмах](https://www.wowhead.com/ru/spell=210152) с вероятностью 20% увеличивают наносимый вами урон на 8% на 6 секунд. Ваши критические удары увеличивают этот шанс.
1. Полностью переделанное дерево талантов, которое добавляет гибкости для билдов и геймплея. 
> подробнее <a href="{{ site.url }}/guide/havoc/talent-builds.html"><b>Таланты и Билды</b></a>
1. Добавлено классовое дерево талантов


У Истребления есть несколько возможных билдов, но основные концепции игры остаются прежними. Использование [Пронзающего взгляда](https://wowhead.com/ru/spell=198013) приводит нас к использовании [Метаморфозы](https://www.wowhead.com/ru/spell=191427/) через талант [Демонизм](https://www.wowhead.com/ru/spell=213410/), поэтому мы будем использовать его в качестве небольшого буртс окна, накопив гнев, чтобы его было почти максимум после использования [Пронзающего взгляда](https://wowhead.com/ru/spell=198013), чтобы потратить на [Аннигиляция](https://wowhead.com/ru/spell=201427) и [Смертоносный взмах](https://www.wowhead.com/ru/spell=210152).

У нас появилось много ротационных способностей с коротким временем восстановления, таких как [Обжигающий жар](https://wowhead.com/ru/spell=258920), [Танец клинков](https://wowhead.com/ru/spell=188499) и [Охота](https://www.wowhead.com/ru/spell=370965). В итоге мы получаем множество кулдаунов, которые нужно отслеживать и использовать для оптимизации урона. С изменением таланта [Демонические клинки](https://wowhead.com/ru/spell=203555) мы будем ему отдавать большее предпочтение, что лишает нас способности к постоянной ручной генерации гнева.

### Охотник на Демонов Истребления в Dragonflight

Охотник на Демонов Истребления получил много приятных изменений, которые должны сделать его сильным в дополнении Dragonflight. Наше вторичное характеристик получили невероятно большой скачок, несколько талантов масштабирующихся от критического удара: [Критический хаос](https://www.wowhead.com/ru/spell=320413/), [Огненной бездны](https://www.wowhead.com/ru/spell=388107) и [Врага нужно знать в лицо](https://www.wowhead.com/ru/spell=388118), очень сильно повышают ценность критического удара. Теперь повышение уровня экипировки будет лучше прибавлять ДПС, чего Истреблению не хватало в предыдущих двух дополнениях.

Наша искусность так же переработана и стала чрезвычайно мощной. Урон [Первой крови](https://wowhead.com/ru/spell=206416/) был изменена на урон хаосом при попадании по основной цели, что позволяет нашей искусности напрямую повышать урон [Первой крови](https://wowhead.com/ru/spell=206416/), что некоторое время было больной проблемой для класса. Для AoE мы можем использовать любые способности, конвертируя весь наш нефизический урон в урон Хаоса. Это позволяет невероятно сильно масштабировать искусность.

Охотник на Демонов Истребления получают больший бурст урон за счет следующих изменений, [Пронзающий взгляд](https://ruwowhead.com/ru/spell=198013) теперь имеет время восстановление 40 сек., это сократит время работы [Метаморфозы](https://www.wowhead.com/ru/spell=191427/) с талантом [Демонизм](https://www.wowhead.com/ru/spell=213410/), но также позволит удобно комбинировать его с [Разрывом сущности](https://www.wowhead.com/ru/spell=258860/) и [Инициативой](https://www.wowhead.com/ru/spell=388108) для нанесения большого урона за один 40 сек. цикл. Мы также получили возможность использовать [Метаморфозу](https://www.wowhead.com/ru/spell=191427/) как 2 мин. бурст с талантом [Первый из иллидари](https://www.wowhead.com/ru/spell=235893), это позволит нам выровнять наши кулдауны с кулдаунами других классов в определенных рейдовых боях или, возможно, в определенных эпохальных+ подземельях. Так же наличие [Охота](https://www.wowhead.com/ru/spell=370965) и [Элизийский декрет](https://www.wowhead.com/ru/spell=390163) имеют небольшое КД, что значительно увеличивает АоЕ в сочетании с талантом [Любыми средствами](https://www.wowhead.com/ru/spell=388114).

Мы также можем получить в свое распоряжение [Печать страдания](https://www.wowhead.com/ru/spell=207684), но для [Извержения Скверны](https://wowhead.com/ru/spell=211881) очень непросто найти свободное очко талантов, от чего может показаться, что мы потеряли наш потенциал в контроле. Теперь проще взять талант [Мастер боевого клинка](https://www.wowhead.com/ru/spell=389763) с потенциальными билдом через [Бросок боевого клинка](https://wowhead.com/ru/spell=185123) мы можем постоянно обеспечивать полезное замедление в АоЕ боях.

Наша выживаемость также улучшилась по сравнению с Shadowlands. Доступ к [Раздирание души](https://www.wowhead.com/ru/spell=204909), [Обугленные боевые клинки](https://www.wowhead.com/ru/spell=213010) и [Знание иллидари](https://www.wowhead.com/ru/spell=389696) которые мы берем в общих талантах обеспечивают хорошее снижение урона и самоисцеление. [Путь Пустоты](https://wowhead.com/ru/spell=196555) теперь ситуационный талант, мы будем его брать в тех случаях когда он на будет необходим для выполнения механики. [Демонический аппетит](https://wowhead.com/ru/spell=206478/) дополнительно повысит нашу выживаемость, если это будет необходимо, а [Всеобщая тоска](https://www.wowhead.com/ru/spell=390152/) являются дополнительным источником самоисцеления. Существенная часть самоисцеления приходится на дебафф [Охоты](https://www.wowhead.com/ru/spell=370965). И того мы имеем 19% снижение получаемого магического урона вместе с способностью [Демонические обереги](https://www.wowhead.com/ru/spell=278386) и очень сильное самоисцеление, из-за чего нас будет трудно убить, кроме как с одного удара.


В AoE мы будем использовать билд через [Импульс](https://www.wowhead.com/ru/spell=206476) — также сочетать [Разрыв сущности](https://www.wowhead.com/ru/spell=258860/) с [Пронзающим взглядом](https://wowhead.com/ru/spell=198013) для активации [Демонизма](https://www.wowhead.com/ru/spell=213410/) и [Коварное отступление](https://www.wowhead.com/ru/spell=198793) для активации баффа [Инициативы](https://www.wowhead.com/ru/spell=388108). На 80% усиленный урон от [Смертоносного взмаха](https://www.wowhead.com/ru/spell=210152) с увеличенным множителем критического удара наносит очень много урона. Мы также будем использовать талант в [Жгучая рана](https://www.wowhead.com/ru/spell=391189) и [Огненная бездна](https://www.wowhead.com/ru/spell=388107). [Жгучая рана](https://www.wowhead.com/ru/spell=391189) была изменена: по сравнению с версией Shadowlands теперь может быть только не более 3 ДоТ одновременно, [Бросок боевого клинка](https://wowhead.com/ru/spell=185123) тоже накладывает на цель ДоТ. Это позволяет [Обжигающему жару](https://wowhead.com/ru/spell=258920) наносить значительный урон в АоЕ и накапливать приличный урон для [Огненной бездны](https://www.wowhead.com/ru/spell=388107) в больших запулах. [Танец клинков](https://wowhead.com/ru/spell=188499) и [Смертоносный взмах](https://www.wowhead.com/ru/spell=210152) будем использовать почти на КД, за исключением тех случаев, когда его использование нужно придержать для активации [Демонизма](https://www.wowhead.com/ru/spell=213410/), что является хорошим отличием от нашей АоЕ ротации в Shadowlands.


### Основные таланты Охотников на Демонов Истребления

Наше дерево талантов можно разделить на три части. Левая сторона строиться из старого импульса через [Импульс](https://www.wowhead.com/ru/spell=206476), [Инициатива](https://www.wowhead.com/ru/spell=388108), [Тактическое отступление](https://www.wowhead.com/ru/spell=389688) и [Необузданный хаос](https://www.wowhead.com/ru/spell=347461). Центральный ряд увеличение времени работы [Пронзающего взгляда](https://wowhead.com/ru/spell=198013) и [Демонизма](https://www.wowhead.com/ru/spell=213410/), с большим уклоном на СТ урон через [Яростный взор](https://www.wowhead.com/ru/spell=343311), [Цикл ненависти](https://www.wowhead.com/ru/spell=258887/) и [Расколотая судьба](https://www.wowhead.com/ru/spell=388116/). Правая сторона дает нам АоЕ/Клив урон через [Нарастающий жар преисподней](https://www.wowhead.com/ru/spell=390158), [Жгучая рана](https://www.wowhead.com/ru/spell=391189), [Огненная бездна](https://www.wowhead.com/ru/spell=388107), [Раздирание души](https://www.wowhead.com/ru/spell=388106) и [Любыми средствами](https://www.wowhead.com/ru/spell=388114).

#### Основные таланты, которые меняют наш стиль игры:

* [Инициатива](https://www.wowhead.com/ru/spell=388108) - увеличивает урон при правильной активации таланта.
* [Врага нужно знать в лицо](https://www.wowhead.com/ru/spell=388118) - позволяет нам масштабировать наш критический урон.
* [Любыми средствами](https://www.wowhead.com/ru/spell=388114) - для АоЕ, за счет отличного скалирования искусности.
* [Расколотая судьба](https://www.wowhead.com/ru/spell=388116/) и [Цикл ненависти](https://www.wowhead.com/ru/spell=258887/) - значительно увеличивают время работы [Демонизма](https://www.wowhead.com/ru/spell=213410/), что позволит наносить больше урона в СТ боях.
* [Раздирание души](https://www.wowhead.com/ru/spell=388106) - дает нам большой АоЕ урон, а также масштабируется за счет критического удара и искусности, когда взяты таланты [Врага нужно знать в лицо](https://www.wowhead.com/ru/spell=388118) и [Любыми средствами](https://www.wowhead.com/ru/spell=388114).
* У нас также есть исключительно сильная синергия Клив урона способности [Бросок боевого клинка](https://wowhead.com/ru/spell=185123) через таланты [Неистовые броски](https://www.wowhead.com/ru/spell=393029), [Ускоряющийся клинок](https://www.wowhead.com/ru/spell=391275) и [Раздирание души](https://www.wowhead.com/ru/spell=388106/).

<hr>

<div class="minibox"><a href="{{ site.url }}/guide/havoc/overview.html">Далее:<br>Обзор</a></div>

<br>
 