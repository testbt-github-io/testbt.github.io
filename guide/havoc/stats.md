---
layout: guide
title: Характеристики
description: Гайд Характеристики для Охотников на Демонов Истребление 9.1.5 PvE Shadowlands
last_update: 2021-10-30 09:00:00
game_version: 9.1.5 Shadowlands 
author: Rodriguezz и Gaussiana
toc: true
image:
    path: assets/img/blog/prev/spec_logo.png
---

<div id="smooth-nav-outer">

<a href="{{ site.url }}/guide/havoc/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/havoc/best-covenant-shadowlands.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/achievement_mythicdungeons_shadowlands.jpg"> Лучший ковенант</a>
<a href="{{ site.url }}/guide/havoc/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/havoc/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/havoc/legendaries-shadowlands.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/runesmith_icon.jpg"> Легендарные предметы</a>
<a href="{{ site.url }}/guide/havoc/domination-set-bonuses.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Осколки господства</a>
<a href="{{ site.url }}/guide/havoc/conduits-shadowlands.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_rollthebones02.jpg"> Проводники (Кондуиты)</a>
<a href="{{ site.url }}/guide/havoc/night-fae.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_nightfae.jpg"> Ночной Народец</a>
<a href="{{ site.url }}/guide/havoc/necrolord.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_necrolord.jpg"> Некролорды</a>
<a href="{{ site.url }}/guide/havoc/venthyr.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_venthyr.jpg"> Вентиры</a>
<a href="{{ site.url }}/guide/havoc/kyrian.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_kyrian.jpg"> Кирии</a>
<a href="{{ site.url }}/guide/havoc/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/havoc/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_mekkatorque_bot_bluegear.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/havoc/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"><span style="color: white;"> Характеристики</span></a>
<a href="{{ site.url }}/guide/havoc/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/havoc/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/havoc/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/havoc/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>

<a href="https://www.patreon.com/bePatron?u=43917749"  data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>

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

<p class="tanknotes-section-success" markdown="1">
<span style="font-weight: 400;"> Если вы играете с сетом <span class="c7">Льда (Фрост)</span> осколков господства у вас будет Крит в приорритете, для всех остальных ситуаций испоьзуйте симкрафт
</span></p>

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/guide/sim.gif"> </p>

**Почему веса статов "не имеют смысла", и почему лучше пользоваться Top Gear.**

DPS = a1 х Crit+a2 х Haste+a3 х Mastery+a4 х Versatility+a5 х Agility + а6 х MH_DPS + a7 x OH_DPS. 
Значения крита, хасты, и т.д. получаются исходя из вашей экипировки, а веса статов, это коэффициенты (а1, а2, а3... а7). 
Чтобы получить эти самые коэффициенты ребята из симкрафта особо не заморачиваются и применяют простейшую множественную линейную регрессию для получения этих самых весов. 
Сложно объяснить вообще не вдаваясь в подробности, по этому кратко: значения каждого стата **по отдельности** будут варьироваться на 115 единиц (это делается по историческим причинам. 
когда-то давно эта вариации составляла 3.5% хасты, и отсюда и повелось).

Из этого следует, что симкрафт присваивает статам линейный рост и влияние на урон, а так же то, что в игре есть ситуация где вы сможете изменить лишь один стат никак не изменив другой. 
Очевидно, что оба этих "предположения" не точны. Более того, симкрафт не будет искать никакого "баланса в статах". Веса статов могут показать, если у вас (речь не о ДХ) катастрофически 
мало, скажем крита. Симкрафт может вычислить, что повышение крита вам дает "огромный" прирост ДПС. Тогда он влепит, что вам "надо добрать крита", т.е. выдаст, 
что вес крита выше, чем у остальных статов. В последнюю очередь, стоит так же уточнить, что веса статов, которые вы получаете не являются чем-то "точным и абсолютным". 
Значения, которые вы получаете являются средними значениями коэф. этой множественной линейной регресии (см. функцию из первого абзаца), которые применимы к достаточно 
большим изменениям в статах (если быть точнее к 115 единицам), именно по этому не совсем правильно говорить, что одна единица стата Х, вносит Y дпса. Гораздо правильнее говорить, 
что "при увеличении стата Х на 115 единиц, каждый стат в среднем внесет Y ДПС". 
 
В заключении: веса статов, это простая математическая модель, которая не берет в расчет смену талантов, легендарок, медиумов, проводников. 
Именно по этому **Лучшее решение, которые вы можете принять в вопросе выбора лучшего предмета экипировки это забыть напрочь о "приоритете статов" и использовать Top Gear.**

#### Для каждого персонажа приоритет характеристик индивидуальный, всегда используйте <a href="https://www.raidbots.com/simbot">RaidBots</a> чтобы использовать актуальную для вас экипировку.

<hr>

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/havoc/rotation-priority.html">Назад:<br>Ротация</a></div> 
<div class="minibox"><a href="{{ site.url }}/guide/havoc/consumables.html">Далее:<br>Расходники</a></div>

<br>