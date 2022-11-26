---
layout: guide
title: Изменения в патче 9.2
description: Обзор изменений Охотников на Демонов Месть 10.0 PvE Dragonflight
last_update: 2022-10-30 09:00:00
game_version: 10.0 Dragonflight
author: Rodriguezz
image:
    path: assets/img/blog/prev/spec_logo_VDH.png
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/vengeance/changes-patch.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"><span style="color: white;"> Изменения в патче </span></a>
<a href="{{ site.url }}/guide/vengeance/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/vengeance/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/vengeance/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/vengeance/Set-Bonuses.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Сетовый набор</a>
<a href="{{ site.url }}/guide/vengeance/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/vengeance/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/vengeance/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/vengeance/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/vengeance/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/vengeance/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>

<a href="https://www.patreon.com/bePatron?u=43917749"  data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>

## Главные изменения Охотников на Демонов в патче 10.0

1. Полностью переделанное дерево талантов, которое добавляет гибкости для билдов и геймплея. 
> подробнее <a href="{{ site.url }}/guide/vengeance/talent-builds.html"><b>Таланты и Билды</b></a>
1. Добавлено классовое дерево талантов.
1. Ковенанские способности были перенесены в таланты: [Охота](https://www.wowhead.com/ru/spell=370965), [Подпитка для пламени](https://www.wowhead.com/ru/spell=391429) и [Элизийский декрет](https://www.wowhead.com/ru/spell=390163).
1. В классовое дерево талантов добавлен талант [Всеобщая тоска](https://www.wowhead.com/ru/spell=390152/), в прошлом это была легендарная сила в Shadowlands.
1. В классовое дерево талантов добавлен талант [Дар созерцателя тьмы](https://www.wowhead.com/ru/spell=389708), немного переработана легендарная сила с Shadowlands.
1. Сетовый бонус
    * 2 части: [Demon Hunter Vengeance Class Set 2pc](https://www.wowhead.com/beta/spell=393630) - [Иссечение](https://www.wowhead.com/ru/spell=203782) наносит на 20% больше урона, генерирует на 20% больше гнева и с вероятностью 15% создает дополнительный [Фрагмент души](https://www.wowhead.com/ru/spell=204062)
    * 4 части: [Demon Hunter Vengeance Class Set 4pc](https://www.wowhead.com/beta/spell=393631/) - [Взрывная душа](https://www.wowhead.com/ru/spell=247454/) и [Раскалывание душ](https://www.wowhead.com/ru/spell=228477/) с вероятностью 12% наносят на 50% больше урона и накладывают на цель дебафф с которым она наносить вам на 15% меньше урона в течение 8 сек.
1. [Хрупкость](https://www.wowhead.com/ru/spell=389958) была сильно переработана, хоть базовый уровень таланта не такой сильный, но взаимодействие с другими талантами делает ее достаточно мощной.
1. [Страж Бездны](https://www.wowhead.com/ru/spell=268175) так же был изменен и срабатывает на всех врагов на которых действует [Хрупкость](https://www.wowhead.com/ru/spell=389958).

Как упоминалось выше, самым большим изменением в Охотников на Демонов Месть является введение [Хрупкости](https://www.wowhead.com/ru/spell=389958) и вспомогательных талантов, а не простое 10% самоисцеление, которое дает [Взрывная душа](https://www.wowhead.com/ru/spell=247454). Цикл игрового процесса будет полностью проходить вокруг стаков [Хрупкости](https://www.wowhead.com/ru/spell=389958), в то время как все остальное играет вспомогательную роль. К сожалению, оставшиеся части идентификации класса и специализации были несколько сведены на нет. У нас есть большое количество талантов, которые теперь улучшают текущие части нашего набора способностей, но из-за того, что эти таланты разделены на множество частей, мы вынуждены делать выбор между тем, что у нас было в Shadowlands, и вместо новых эффектов.

Хоть нам и дали новое утилити, которое раньше было только у Истребления, в то же время у нас отняли большую часть нашей ротации, и, чтобы ее вернуть, нужно потратить много очков талантов - а мы, к сожалению, не можем себе этого позволить. По сравнению с Shadowlands, в этом аддоне у Охотников на Демонов Месть почти не добавилось новых плюшек, ведь многие наши таланты просто усиливают старые способности, но не добавляют новые. 

В итоге, чтобы вернуть себе прежнюю функциональность в хоть каком-то виде, Охотникам на Демонов Месть придется тратить ценные очки талантов, чтобы заново собрать свою ротацию. К тому же, в талантах почти нет новых спеллов, так что даже если бы нам не пришлось возиться со сборкой ротации, очки талантов все равно не было бы куда потратить.

<hr>

<div class="minibox"><a href="{{ site.url }}/guide/vengeance/overview.html">Длаее:<br> Обзор</a></div>

<br>