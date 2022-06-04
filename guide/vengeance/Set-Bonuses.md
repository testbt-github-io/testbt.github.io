---
layout: guide
title:  Сетовый набор
description: Гайд Сетовый набор для Охотников на Демонов Месть 9.2 PvE Shadowlands
last_update: 2022-02-18 09:00:00
game_version: 9.2 Shadowlands 
author: Rodriguezz
image:
    path: assets/img/blog/prev/spec_logo_VDH.png
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/vengeance/changes-patch.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Изменения в патче 9.2</a>
<a href="{{ site.url }}/guide/vengeance/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/vengeance/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/achievement_mythicdungeons_shadowlands.jpg"> Лучший ковенант</a>
<a href="{{ site.url }}/guide/vengeance/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/vengeance/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/vengeance/legendaries-shadowlands.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/runesmith_icon.jpg"> Легендарные предметы</a>
<a href="{{ site.url }}/guide/vengeance/Set-Bonuses.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"><span style="color: white;"> Осколки господства</span></a>
<a href="{{ site.url }}/guide/vengeance/conduits-shadowlands.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_rollthebones02.jpg"> Проводники (Кондуиты)</a>
<a href="{{ site.url }}/guide/vengeance/night-fae.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_nightfae.jpg"> Ночной Народец</a>
<a href="{{ site.url }}/guide/vengeance/necrolord.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_necrolord.jpg"> Некролорды</a>
<a href="{{ site.url }}/guide/vengeance/venthyr.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_venthyr.jpg"> Вентиры</a>
<a href="{{ site.url }}/guide/vengeance/kyrian.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_kyrian.jpg"> Кирии</a>
<a href="{{ site.url }}/guide/vengeance/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/vengeance/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/vengeance/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/vengeance/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/vengeance/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/vengeance/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>

<a href="https://www.patreon.com/bePatron?u=43917749"  data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>

* 2 части: [Burning Hunger](https://ptr.wowhead.com/spell=364454) - каждый раз, когда [Обжигающий жар](https://ru.wowhead.com/spell=258920) наносит урон, с вероятностью 10% создастся малый [Малый фрагмент души](https://ru.wowhead.com/spell=215393).
* 4 части: [Хищный голод](https://ru.wowhead.com/spell=363737) - поглощение [Малого фрагмента души](https://ru.wowhead.com/spell=215393) сокращает восстановления [Обжигающего жара](https://ru.wowhead.com/spell=258920) или [Опустошения Скверной](https://ru.wowhead.com/spell=212084) на 1 сек.


#### Главные изменения 

В последней сборке на PTR 9.2 бонус от сетового набора из 4 предметов для Мести [Ненасытный голод](https://ptr.wowhead.com/spell=363737), теперь вместо продления [Обжигающий жар](https://ru.wowhead.com/spell=258920) на 2 секунды за каждый фрагмент [Малого фрагмента души](https://ru.wowhead.com/spell=215393), он сокращает время восстановления [Обжигающего жара](https://ru.wowhead.com/spell=258920) или [Опустошения Скверной](https://ru.wowhead.com/spell=212084) на 1 секунду за каждый поглощенный [Малый фрагмент души](https://ru.wowhead.com/spell=215393).

Это изменение устраняет две основные проблемы с первой вариации сетового набора:
1. Взаимодействие "cancelaur" с нашим талантом [Жаркий выброс](https://ru.wowhead.com/spell=227174/) больше не существует, поэтому мы больше не можем получать абсурдно большое количество стаков [Слепой веры](https://ru.wowhead.com/spell=356070), делающие нас фактически бессмертными в любых ситуациях.
1. Мы больше не можем продлевать время действия [Обжигающего жара](https://ru.wowhead.com/spell=258920) до бесконечности, поэтому наш урон от [Нарастающего жара преисподней](https://ru.wowhead.com/spell=339231) уже не такой высокий.

#### Слабые и сильные стороны

Мы можем обобщить сильные и слабые стороны этого сетового набора: новый сет из 4 предметов по-прежнему очень силен для AoE, но дает очень мало преимуществ в СТ или Кливе.

#### Рандом

У сета есть 3 основных источника рандома:

1. Каждая поглощенная [душа](https://ru.wowhead.com/spell=215393) случайным образом сокращает время восстановления либо [Обжигающего жара](https://ru.wowhead.com/spell=258920), либо [Опустошения Скверной](https://ru.wowhead.com/spell=212084), если обе способности находятся на перезарядке. Если только одна способность на перезарядке, она всегда будет уменьшать свое время восстановления.
1. Генерация от набора из двух сетовых предметов, а так же талантом [Жаркий выброс](https://ru.wowhead.com/spell=227174/) имеют процентный шанс срабатывания и способствуют конфликту ресурсов в нашей ротации.
1. [Дар созерцателя тьмы](https://ru.wowhead.com/spell=337534) имеет процентный шанс срабатывания и влияет на нашу ротацию

#### Одна цель

В СТ сет дает меньший прирост урона, чем текущая система Осколков господства. Учитывая, что наш урон от СТ является одним из самых низких, если не самым низким среди всех танков, это создает проблему при игре с вторым танком у которого высоким ДПС, например Паладин Защити, поскольку нам будет сложнее удерживать угрозу, когда у них есть доступные кулдауны. В настоящее время Кровавый сет дает около 15-20% общего урона в СТ, в то время как [Обжигающий жар](https://ru.wowhead.com/spell=258920) дает около 8-10%. С увеличением времени работы благодаря сетовому набору из 4 предметов мы сможем увеличить действие [жара](https://ru.wowhead.com/spell=258920) примерно на 30% в большинстве ситуаций, что означает, что расчетное значение бонуса набора составляет где-то около 3% увеличения ДПС, чтобы максимизировать ценность ГКД и тиков [Нарастающего жара преисподней](https://ru.wowhead.com/spell=339231), мы будем использовать [Обжигающий жар](https://ru.wowhead.com/spell=258920), когда истечет его время действия. Поэтому нужно отслеживали продолжительность действия бафа, а не нажимать [Обжигающий жар](https://ru.wowhead.com/spell=258920), как только он стает доступен, так как его использование сбрасывает стаки [Нарастающего жара преисподней](https://ru.wowhead.com/spell=339231).

С точки зрения защиты это неплохой бафф, так как увеличивает длительность [Метаморфозы](https://ru.wowhead.com/spell=18782) с ~26% до ~35% при обычной игре и до ~43% при игре с максимальной защитой. 

#### Клив от 2-9 целей

При небольшом количестве целей бонус от набора приличный, но не супер сильный. Мы можем ожидать, что будем получать примерно 4 души каждое второе ГКД из всех источников вместе взятых, учитывая хороший урон от [Взрывная душа](https://ru.wowhead.com/spell=247454), а также достойную выживаемость за счет генерации дополнительных душ и увеличения времени работы [Метаморфозы](https://ru.wowhead.com/spell=18782). В этом случае раннее нажатие [Обжигающего жара](https://ru.wowhead.com/spell=258920) больше не приносит такого вреда, поскольку бонусные души, генерируемые [Жарким выбросом](https://ru.wowhead.com/spell=227174/), позволяют использовать чаще [Взрывную душу](https://ru.wowhead.com/spell=247454), компенсируя потерянный урон от последних тиков [Нарастающего жара преисподней](https://ru.wowhead.com/spell=339231), обеспечивая при этом ускоренное восстановление способностей. Подобно СТ, ожидание, пока не закончатся тики [Жаркого выброса](https://ru.wowhead.com/spell=227174/), немного лучше для защиты, поскольку это обеспечивает большее сокращение времени восстановления [Опустошения Скверной](https://ru.wowhead.com/spell=212084), что позволяет увеличить общее время работы [Метаморфозы](https://ru.wowhead.com/spell=18782).

#### АоЕ 10+ целей

Как только мы количество целей доходит до 10 и более, именно здесь сетовый бонус становится слишком сильным. Из-за 2-кратного масштабирования бонуса в зависимости от количества целей мы эффективно генерируем достаточное количество душ каждое ГКД, чтобы нажимать только [Взрывную душу](https://ru.wowhead.com/spell=247454) и обновлять [Элизийский декрет](https://ru.wowhead.com/spell=306830), [Обжигающий жар](https://ru.wowhead.com/spell=258920) и [Опустошения Скверной](https://ru.wowhead.com/spell=212084) по мере необходимости, никогда не нажимая наш единственный генератор душ [Разлом](https://ru.wowhead.com/spell=263642), поскольку он просто не работает. Сгенерированные дополнительные души также обеспечивают большее сокращение времени восстановления способностей, позволяя нам поддерживать до 50% времени постоянной работы [Метаморфозы](https://ru.wowhead.com/spell=18782), значительно повышают нашу универсальность во время использования [Элизийского декрета](https://ru.wowhead.com/spell=306830) и обеспечивать хорошее исцеления, делая нас более устойчивыми при большом количестве целей, по мере уменьшения количества целей мы становимся более уязвимыми.

### Взаимодействие
#### Ковенант

<span class="q8">Кирии</span> — явный победитель в боях с несколькими целями, поскольку универсальность и гнев которые обеспечивает [Слепая вера](https://ru.wowhead.com/spell=355893), позволяют использовать почти бесконечный цикл траты сгенерированных душ, а также обеспечивают довольно стабильное снижение урона. <span class="q10">Вентиры</span> могут быть конкурентоспособны в боях с одной целью, потенциально превосходя Кирии, но они не так постоянны.

#### Таланты

У нас будет несколько наборов талантов в зависимости от ситуации, но главное изменение заключается в том, что [Жаркий выброс](https://ru.wowhead.com/spell=227174/) становится значительно сильнее, чем другие таланты в этом ряду, а [Взрывная душа](https://ru.wowhead.com/spell=247454), вероятно, станет выбором по умолчанию.

<div class="tabs" id="tabs-1">
<div class="tabs__nav">
<a class="tabs__link tabs__link_active" href="#content-3">Стандартный</a>
<a class="tabs__link " href="#content-4">Максимум Меты</a>
<a class="tabs__link " href="#content-5">Клеймо</a>
</div>
<div class="tabs__content">
<div class="tabs__pane tabs__pane_show" id="content-3">
<div class="tabs_in" markdown="1">	

Это стандартный набор талантов, наиболее гибкий для большинства ситуаций. Он обеспечивает хорошее сочетание урона и живучести. В ключах с аффиксом укрепленный, где все еще возможны большие пуллы, может быть предпочтительнее брать талант [Кормление демона](https://ru.wowhead.com/spell=218612/) для большего времени работы защитных способностей, поскольку потеря урона не особенно высока в AoE.

{% include RazelikhsDefilement.html %} 

</div>      
</div>
<div class="tabs__pane" id="content-4">
<div class="tabs_in" markdown="1">

Этот набор талантов обеспечит максимальное время постоянной работы [Метаморфозы](https://ru.wowhead.com/spell=18782) за счет нашего ДПС. Как ни странно, третий ряд талантов становится совершенно бесполезным, потому что вы никогда не будете нажимать другие кнопки, кроме [Элизийский декрет](https://ru.wowhead.com/spell=306830), [Опустошения Скверной](https://ru.wowhead.com/spell=212084) или [Иссечения](https://ru.wowhead.com/spell=203782), чтобы максимизировать генерацию душ для уменьшения времени восстановления [Опустошения Скверной](https://ru.wowhead.com/spell=212084).

{% include max_meta.html %} 

</div>
</div>

<div class="tabs__pane" id="content-5">
<div class="tabs_in" markdown="1">

Стандартная набор талантов для большого времени постоянной работы [Огненное клеймо](https://ru.wowhead.com/spell=204021/), которая хорошо себя показывает в боях с магическим уроном.

{% include brand_magic.html %} 

</div>
</div>
</div>
</div>

<br>

#### Легендарные предметы

Предполагая, что мы используем ковенант <span class="q8">Кирии</span> и стандартный набор талантов для большинства ситуаций, мы продолжим использовать [Осквернение Разелиха](https://ru.wowhead.com/spell=337544) для максимального урона в CТ, [Пылающая душа](https://ru.wowhead.com/spell=337547) для магической защиты с билдом на клеймо и [Дар созерцателя тьмы](https://ru.wowhead.com/spell=337534) для максимального времени постоянной работы [Метаморфозы](https://ru.wowhead.com/spell=18782). Если <span class="q10">Вентиры</span> окажутся сильнее, мы, скорее всего, будем использовать [Дар созерцателя тьмы](https://ru.wowhead.com/spell=337534) и будем надеяться на частые проки, чтобы как можно больше продлить время действия [Клеймо греха](https://ru.wowhead.com/spell=317009).

Нашим самым эффективным легендарным предметом в AoE, скорее всего, станет [Дар созерцателя тьмы](https://ru.wowhead.com/spell=337534), поскольку из-за конфликта ГКД мы не можем тратить большую часть нашего гнева, поскольку генерация и расход душ становятся более важной. Это означает, что [Раскалывание душ](https://ru.wowhead.com/spell=228477) не используется, поэтому [Осквернение Разелиха](https://ru.wowhead.com/spell=337544) и [Пылающая душа](https://ru.wowhead.com/spell=337547) дают очень мало пользы. Несмотря на то, что она случайно срабатывает, количество использований увеличивается из-за сокращения времени восстановления от сетового набора.

#### Конфликт ресурсов и ГКД

Из-за притока гнева от [Слепой веры](https://ru.wowhead.com/spell=355893) и большего времени постоянной работы [Обжигающего жара](https://ru.wowhead.com/spell=258920), а также увеличения количества душ от [Burning Hunger](https://ptr.wowhead.com/spell=364454) и [Жаркий выброс](https://ru.wowhead.com/spell=227174/), мы часто будем получать оверкап гнева из-за того, что мы не можем достаточно быстро его потратить. Кроме того, дополнительные души означают, что мы нажимаем [Взрывная душа](https://ru.wowhead.com/spell=247454), а не [Раскалывание душ](https://ru.wowhead.com/spell=228477/), что снижает ценность наших легендарных предметов, зависящих от [Раскалывания души](https://ru.wowhead.com/spell=228477/). Вдобавок ко всему, из-за генерации дополнительных ресурсов у нас нет ни запасных ГКД, ни необходимости в наших генераторах ([Иссечения](https://ru.wowhead.com/spell=203782) или [Разлом](https://ru.wowhead.com/spell=263642)) в АоЕ боях. Хотя можно играть и без [Взрывной души](https://ru.wowhead.com/spell=247454), она становится нейтральной с при использовании таких легендарных предметов, как [Осквернение Разелиха](https://ru.wowhead.com/spell=337544), но при этом теряется возможность получить больше от других легендарных предметов. В качестве альтернативы, если вы играете в защитном билде, то просто игнорируете все ресурсы и максимально увеличиваете генерацию душ, что является довольно дегенеративным игровым процессом.

<p class="tanknotes-section-success" markdown="1">
<span style="font-weight: 400;">
Без каких-либо других изменений в нашей спецификации, этот бонус комплекта будет посредственным в рейде, закрепляя наш статус танка с самым низким ДПС и генерацией угрозы, но при этом давая мало полезных защитных преимуществ. 

В Mythic+ ситуация совершенно иная. Этот сет будет значительно увеличивать как выживаемость, так и урон, и я ожидаю, что Месть будет довольно приятным, особенно при запулах больших паков, поскольку набор сильно масштабируется, в таких условиях наш сет и таланты работают на полную и показывают отличный результат.
</span></p>

<hr>

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/vengeance/legendaries-shadowlands.html">Назад:<br>Легендарные предметы</a></div> 
<div class="minibox"><a href="{{ site.url }}/guide/vengeance/conduits-shadowlands.html">Далее:<br>Проводники (Кондуиты)</a></div>

<br>