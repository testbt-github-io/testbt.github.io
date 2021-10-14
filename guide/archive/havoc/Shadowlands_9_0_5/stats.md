---
layout: page
title: Характеристики
description: ДХ Истребление 9.0.5 PvE гайд Shadowlands
last_update: 2021-03-19 09:00:00
game_version: 9.0.5 Shadowlands
author: Rodriguezz и Gaussiana
toc: true
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Кратко и Быстро</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"><span style="color: white;"> Характеристики</span></a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ковенанты</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>

## Характеристики

Ловкость - ваша основная характеристика, и ее можно найти на кожаном снаряжении. Ловкость увеличивает вашу силу атаки и урон, наносимый способностями.

Что касается второстепенных характеристик:

<ul>
<li> Критический удар: Поскольку все способности могут нанести критический урон, это может значительно увеличить наш урон.</li>
<li> Скорость: Уменьшает глобальное время восстановления, также уменьшает время восстановления некоторых способностей</li>
<li> Искусность: Этот показатель увеличивает наносимый нами урон от магии Хаоса, а также нашу скорость передвижения. Масштабирование характеристики довольно плохое, что делает ее нежелательной, хотя на первый взгляд она кажется очень интересной.</li>
<li> Универсальность: Универсальная характеристика, увеличивает наносимый урон и уменьшает получаемый. </li>
</ul>

## Приоритет характеристик для Охотника на Демонов Истребление

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/guide/sim.gif"> </p>

**Почему веса статов "не имеют смысла", и почему лучше пользоваться Top Gear.**

Представьте, что функция описывающая ДПС выглядит следующим образом: 
DPS = a1 х Crit+a2 х Haste+a3 х Mastery+a4 х Versatility+a5 х Agility + а6 х MH_DPS + a7 x OH_DPS. Значения крита, хасты, и т.д. получаются исходя из вашей экипировки, а веса статов, это коэффициенты (а1, а2, а3... а7). Чтобы получить эти самые коэффициенты ребята из симкрафта особо не заморачиваются и применяют простейшую множественную линейную регрессию для получения этих самых весов. Сложно объяснить вообще не вдаваясь в подробности, по этому кратко: значения всех статов будут варьироваться на небольшую величину (оставаясь по прежнему вблизи ваших текущим значений) и основываясь на этом будут получены веса статов).  Т.е. программа не такая уж и умная как нам хотелось бы, не будет она искать никакого "баланса в статах". "Максимум" что вы получаете из весов статов, это то, изменение какого стата влечет к наибольшему/наименьшему увеличению вашего ДПС. Так же веса статов покажут, если у вас (речь не о ДХ) катастрофически мало, скажем крита, то программа может заметить, что даже малое повышение крита вам дает "огромный" прирост ДПС - она и влепит, что вам "надо добрать крита", т.е. выдаст, что вес крита выше, чем у остальных статов. 
Веса статов, это простая математическая модель, которая не берет в расчет смену талантов, легендарок, медиумов, проводников. Лучшее решение, которые вы можете принять в вопросе выбора лучшего предмета экипировки - использовать Top Gear.

#### Для каждого персонажа приоритет характеристик индивидуальный, всегда используйте <a href="https://www.raidbots.com/simbot">RaidBots</a> чтобы использовать актуальную для вас экипировку.

 

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/rotation-priority.html">Назад:<br>Ротация</a></div> 
<div class="minibox"><a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/gear.html">Далее:<br>Бис лист</a></div>

