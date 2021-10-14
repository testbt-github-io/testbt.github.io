---
layout: highcharts_page
title: Ковенанты
description: Гайд для Охотников на Демонов Истребление 9.1.0 PvE Shadowlands
last_update: 2021-06-24 09:00:00
game_version: 9.1.0 Shadowlands 
author: Rodriguezz и Gaussiana
toc: true
image:
    path: assets/img/blog/prev/conduits_logo.png
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Кратко и Быстро</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"><span style="color: white;"> Ковенанты</span></a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>
## Что такое Ковенанты?

Одной из ключевых новинок World of Warcraft Shadowlands станут ковенанты. Это своеобразные фракции, которые вобрали в себя лучшие идеи системы классовых оплотов и перенесли их на новый уровень. Занимаясь улучшением отношений с ними, игроки будут получать дополнительные способности в свой арсенал, пассивные бонусы и косметические награды, открывать масштабные сюжетные кампании. Узнать больше о ковенантах можно в статье <a href="{{ site.url }}/blog/2020/10/22/covenant-abilities-shadowlands.html">Обзор Ковенантов</a>.

<div style="text-align: -webkit-center;">
<table class="grid" style="width: 500px;">
<tbody>
<tr>
<td style="width: 33%;"></td>
<td style="width: 33%;"><b>Рейд</b></td>
<td style="width: 33%;"><b>Мифик+</b></td>
</tr>
<tr><td><span class="c8">Кирии</span></td>
<td>Хороший</td>
<td><b>Низкие ключи</b>: Сильный<br><b>Высокие ключи</b>: Хороший</td>
</tr>
<tr><td><span class="c10">Некролорды</span></td>
<td>Хороший</td><td>Слабый</td>
</tr>
<tr><td><span class="c12">Ночной народец</span></td><td>Сильный</td>
<td><b>Низкие ключи</b>: Слабый<br><b>Высокие ключи</b>: Хороший</td>
</tr>
<tr><td><span class="c6">Вентиры</span>
</td><td>Сильный</td>
<td><b>Низкие ключи</b>: Хороший<br><b>Высокие ключи</b>: Хороший</td>
</tr>
</tbody>
</table>
</div>

## Ковенат Вентиров
<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/ventyr_logo.png"> </p>

<span style="color:#ff4040;font-size:1em;"><img src="{{ site.url }}/assets/img/guide/archive/havoc/Shadowlands_9_1_0/venthyr.png" width="16" height="24"> <b>Вентиры</b></span> хороший ковенант, {{ site.data.covenant.Sinful_Brand }} наносит большой урон по одной цели, что будет полезно в рейдовом контенте.

После вступления в ковенант нам откроются две способности:

{{ site.data.covenant.Sinful_Brand }} - Отмечает противника клеймом вентиров, которое наносит урон от темной магии в течение 8 сек, так же снижая скорость атаки и скорость произнесения заклинаний цели на 30%. Клеймо греха ДоТ, а это значит, что количество "тиков" зависит от параметра скорости. {{ site.data.covenant.Sinful_Brand }} накладывается на всех противников по кому вы попадете "прыжком" {{ site.data.spell.Metamorphosis }}. 
Данная способность наносит сильный урон в одну цель и очень сильный урон в АоЕ, т.к. он не имеет ограничения целей. 
Этот ковенант может стать неплохим выбором для Рейдов.

{{ site.data.covenant.Door_of_Shadows }} - Способность дающая нам дополнительную мобильность, с ее помощью можно пропускать группы мобов.

### Наджия 

У Наджии доступно несколько очень сильных трейтов:
* {{ site.data.covenant.Thrill_Seeker }} - Сильный баф скорости с хорошим аптаймом в рейде и мифик+.
* {{ site.data.covenant.Agent_of_Chaos }} - теперь {{ site.data.covenant.Door_of_Shadows }} можно использовать для прерывания опасных заклинаний, очень сильный трейт для мифик+.
* {{ site.data.covenant.Exacting_Preparation }} - постоянный баф нашей химии, зачарований и еды.
* {{ site.data.covenant.Dauntless_Duelist }} - сильный трейт дающий нам 3% дополнительного урона по цели которую мы атакуем, очень сильный трейт для СТ боев. 
* [Греховное сохранение](https://ru.wowhead.com/spell=352405) - хороший защитный бафф, дает нам щит, когда мы используем зелье / камень здоровья.
* [Фатальный изъян](https://ru.wowhead.com/spell=352373) - очень сильный бафф, после окончания действия баффа скорости от {{ site.data.covenant.Thrill_Seeker }}, дает нам 20% крита или универсальности на 10 сек. ( смотря каких статов у вас больше).

Рекомендуемое дерево развития медиума Наджия:

<a href="https://ru.wowhead.com/soulbind-calc/embed/venthyr/nadjia-the-mistblade/demon-hunter/AwCWr5YDBStvABUrkwAlLM0AEgUtHwAlLM8AIRUq-gA" target="blank">anything</a>

### Безумный герцог Теотар

* {{ site.data.covenant.Soothing_Shade }} - сильный баф мастери с приличным аптаймом, из минусов вы будете привязаны к месту.
* {{ site.data.covenant.Refined_Palate }} - очень сильный трейт, так как боевые зелья очень сильны в Shadowlands.
* {{ site.data.covenant.Wasteland_Propriety }} - самый сильный трейт для нас, но к сожалению он скрыт за проводником Точности.
* [Всегда есть время пить чай](https://ru.wowhead.com/spell=351747) и [Жизнь – всего лишь закуска](https://ru.wowhead.com/spell=351748) - обе связи довольно слабые, но последний открывает путь к кондуиту Защиты, что делает его немного лучше.
* [Дух праздника](https://ru.wowhead.com/spell=351750) - довольно приятный бафф вторичных характеристик на 4 часа.

Рекомендуемое дерево развития медиума Безумный герцог Теотар:

<a href="https://ru.wowhead.com/soulbind-calc/embed/venthyr/theotar-the-mad-duke/demon-hunter/AwCW774BFStvABIFLR8AJSzPACMFKvoAFSrvADV2AAA" target="blank">anything</a>

### Генерал Дрейвен

* {{ site.data.covenant.Service_In_Stone }} - уменьшает входящий урон когда здоровье падает ниже 40%, очень сильный защитный трейт.
* {{ site.data.covenant.Enduring_Gloom }} - способность дает нам отличный щит, но тогда нам приодеться брать проводник Точности. 
* {{ site.data.covenant.Superior_Tactics }} - имеет потенциал в мифик+, в рейде не найдет места для применения.
* {{ site.data.covenant.Built_for_War }} - сильный баф основной характеристики, предположительно должен иметь высокий аптайм, но к сожалению он скрыт за проводником Точности.
* [Регенерирующая каменная кожа](https://ru.wowhead.com/spell=352365) и [Тактика устрашения](https://ru.wowhead.com/spell=352415) - обе связи довольно слабые, но последний открывает путь к кондуиту Защиты, что делает его немного лучше.
* [Боевая стать](https://ru.wowhead.com/spell=352417) - довольно слабая связь как для последней в дереве.

Рекомендуемое дерево развития медиума Генерал Дрейвен:

<a href="https://ru.wowhead.com/soulbind-calc/embed/venthyr/general-draven/demon-hunter/AwCW6pYBJStvABIFLR8AJSzPACMFKvoAFSrvACV2AAA" target="blank">anything</a>

## Ковенант Ночного Народца
<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/fae_logo.png"> </p>

<span style="color:#a330c9;font-size:1em;"><img src="{{ site.url }}/assets/img/guide/archive/havoc/Shadowlands_9_1_0/nightfae.png" width="16" height="24"> <b>Ночной народец</b></span> - {{ site.data.covenant.The_Hunt }} с является сильной способностью, которая наносит огромный прямой урон в одну цель и оставляет на ней ДоТ на 6 сек., что делает этот ковенант прекрасным выбором для ПвП и хорошим выбором для рейдов. Природа данной способности позволяет ей хорошо скейлится от крита и от скорости, однако АоЕ урон с данным ковенантом оставляет желать лучшего, т.к. способность имеет кап в 5 целей. Более того, попадание по пяти целям не является тривиальной задачей (в отличие от ковенанта Вентиров и Кирий), т.к. придется отойти от основной цели и просчитать траекторию полета таким образом, чтобы попасть по всем (пяти) мобам. Учитывайте, что в контексте м+ это действие может усложниться тем, что танк может в это время кайтить мобов.

После вступления в ковенант нам откроются две способности:
* {{ site.data.covenant.The_Hunt }} - Совершает рывок к цели, нанося урон от сил природы и обездвиживая ее на 1.5 сек., накладывая ДоТ на до 5 врагов на пути между вами и вашей целью. Преследование укрепляет вашу душу, в результате чего вы в течение 30 sec. восполняете здоровье в объеме 50% урона, который наносите цели "Охоты". Кондуит {{ site.data.conduits.Unnatural_Malice }} значительно увеличивает урон наносимый {{ site.data.covenant.The_Hunt }} по цели в вашем таргете, что делает этот ковенат хорошим выбором для СТ.
* {{ site.data.covenant.Soulshape }} - дополнительное увеличение мобильности, которая поможет уворачиваться от механик.

### Ния

* {{ site.data.covenant.Grove_Invigoration }} - не особо сильный баф Искусности и Здоровья.
* {{ site.data.covenant.Niyas_Tools_Burrs }} - наносит много урона, очень сильный трейт.
* {{ site.data.covenant.Niyas_Tools_Poison }} - подойдет для мифик+, в рейде не будет использоваться. 
* [Нацеленный выстрел](https://ru.wowhead.com/spell=352501) - хорошая связь но не эффективная для ДХ Истребление. Но она предоставит доступ для кондуита Защиты.
* [Клич выжившего](https://ru.wowhead.com/spell=352502) - очень хорошая защитная связь, но доступ к кондуиту Точности который нам откроется делает эту связь менее востребованной.
* [Связанные сердца](https://ru.wowhead.com/spell=352503) - небольшой хил и прок искусности.

Рекомендуемое дерево развития медиума Ния:

<a href="https://ru.wowhead.com/soulbind-calc/embed/night-fae/niya/demon-hunter/AwCWZZYBBStvABIFLR8AJSzPACMVKvoAJSrvADV2AAA" target="blank">anything</a>

### Творец Снов

Творец Снов обладает очень сильными связями душ на раннем развитии дерева, а также дает возможность получить 2 слота для кондуитов Силы раньше чем у кого либо, что будет полезно на освоении рейда.

* {{ site.data.covenant.Podtender }} - Дает нам читдес, но из-за того что мы после получения смертельного урона получаем стан на 10 сек. является огромным недостатком.
* {{ site.data.covenant.Social_Butterfly }} - дает нам постоянный баф Универсальности когда мы находимся в группе.
* {{ site.data.covenant.Field_of_Blossoms }} - 12% баф скорости с очень приличным аптаймом.
* [Сны наяву](https://ru.wowhead.com/spell=352779) - хорошая защитная связь, но доступ к кондуиту Точности который нам откроется делает эту связь менее востребованной.
* [Погружение в сны ](https://ru.wowhead.com/spell=352786) - хороший проковый урон который срабатывает от каждого нового врага.

Рекомендуемое дерево развития медиума Творец Снов:

<a href="https://ru.wowhead.com/soulbind-calc/embed/night-fae/dreamweaver/demon-hunter/Awaarr4BJStvABIFLR8AJUEmACMFKu8AFStpACUq-gA" target="blank">anything</a>

### Корейн

Корейн обладает очень сильными связями душ на раннем развитии дерева, а также дает возможность получить 2 слота для кондуитов Силы раньше чем у кого либо, что будет полезно на освоении рейда.

* {{ site.data.covenant.Wild_Hunt_Tactics }} - Очень сильный баф урона и скорости передвижения в начале боя и увеличенное исцеление когда у вас мало здоровья
* {{ site.data.covenant.Wild_Hunts_Charge }} - потенциально хороший талант для мифик+, позволяет начать бой со стана.
* {{ site.data.covenant.First_Strike }} - очень мощный бонус к урону который мы получаем в начале пулла.
* [Стратагема Дикой Охоты](https://ru.wowhead.com/spell=352805) - превращает {{ site.data.covenant.Wild_Hunt_Tactics }} в экзекют. Очень сильная связь.

Рекомендуемое дерево развития медиума Корейн:

<a href="https://ru.wowhead.com/soulbind-calc/embed/night-fae/korayn/demon-hunter/AwCaqpYBBStvABIFLR8AJSzPACMVKu8AJSr6ADV2AAA" target="blank">anything</a>

## Ковенант Некролорды
<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/necrolord_logo.png"> </p>

<span style="color:#40bf40;font-size:1em;"><img src="{{ site.url }}/assets/img/guide/archive/havoc/Shadowlands_9_1_0/nekrolords.png" width="16" height="24"> <b>Некролорды</b></span> - предлагают, наверное, самые скучные таланты среди всех ковенантов. {{ site.data.covenant.Fodder_to_the_Flame }} призывает моба которого нужно убить, это отнимает много времени, но баф который мы получаем очень сильный и его можно совмещать с {{ site.data.spell.Metamorphosis }}. 

После вступления в ковенант нам откроются две способности:
* {{ site.data.covenant.Fodder_to_the_Flame }} - Вы призываете демона которого можете атаковать только вы, его убийство дает {{ site.data.covenant.Empowered_Demon_Soul }}, хоть демон и убивается очень легко, все эти махинации отнимают много времени прежде чем вы начнете бить свою приоритетную цель, тем самым это будет ломать нашу ротацию и вносить дискомфорт в игру.
* {{ site.data.covenant.Fleshcraft }} - по описанию звучит как очень хорошая способность, но ее нужно применять 4 сек. чтоб получить щит максимального объема и без специальной связи душ вы не сможете двигаться пока щит "накачивается".

### Изобретатель чумы Марилет
Марилет обладает связями душ которые могут очень сильно усилить {{ site.data.covenant.Fleshcraft }}, но его применение так и останется очень затратным по времени.

* {{ site.data.covenant.Volatile_Solvent }} - принесет пользу в мифиик+ контенте, для рейда бесполезен.
* {{ site.data.covenant.Oozs_Frictionless_Coating }} - дает нам 15% щит каждые 30 сек. без какого либо увеличения урона, но позволяет выбрать в дереве 2 кондуита Силы.
* {{ site.data.covenant.Ultimate_Form }} - восстанавливает в общей сумме 16% здоровья и дает невосприимчевость к контролю на время 
использования {{ site.data.covenant.Fleshcraft }} и если вы полностью завершили его каст то дополнительно получите еще 4 сек. иммунитета к контролю.
* [Слизнюченыш Кевина](https://ru.wowhead.com/spell=352110) - неплохой бафф урона, а также неплохая защита, которая также действует на группу.

Рекомендуемое дерево развития медиума Изобретатель чумы Марилет:

<a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/plague-deviser-marileth/demon-hunter/AwCWZr4BJStvABMFLR8AFSzPACV2DgAiFSr6ACUq7wA" target="blank">anything</a>

### Эмени

* {{ site.data.covenant.Lead_by_Example }} - дает до 20% основной характеристики при использовании {{ site.data.covenant.Fodder_to_the_Flame }} - К сожалению эффект длится недолго, но это мощный атакующий баф и дополнительный защитный эффект.
* {{ site.data.covenant.Gnashing_Chompers }} - Хороший трейт, в полную силу откроется в мифик+ или рейде на боссах с трешом.
* [Разгоняющие подошвы](https://ru.wowhead.com/spell=351089) - очень сильный бафф для группы где нужны частые передвижения.
* [Стойкие швы](https://ru.wowhead.com/spell=351093) - очень хороший защитный бафф, особенно в рейдах, где часто происходит магический урон.
* [Разрыв гнойника](https://ru.wowhead.com/spell=351094) - наносить довольно приличный урон.

Рекомендуемое дерево развития медиума Эмени:

<a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/emeni/demon-hunter/AwCWar4CBStvACUrkwASBS0fACUszwAiFSr6ACUq7wA" target="blank">anything</a>

### Костоплав Гейрмир

* {{ site.data.covenant.Forgeborne_Reveries }} - не очень полезный трейт.
* {{ site.data.covenant.Serrated_Spaulders }} - очень мощный трейт наносящий значительный урон, у него есть внутреннее КД 1 сек поэтому он не может срабатывать сразу на нескольких врагов и он может обновлять свое действие на одном и том же враге, поэтому его ценность будет постепенно теряться если он будет срабатывать дважды на одной и той же цели. 
* {{ site.data.covenant.Heirmirs_Arsenal_Marrowed_Gemstone }} - приличный баф крита с хорошим аптаймом.
* [Мнемоническое снаряжение](https://ru.wowhead.com/spell=350936) - довольно сильная связь.

Рекомендуемое дерево развития медиума Костоплав Гейрмир:

<a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/bonesmith-heirmir/demon-hunter/AwCWapYBBStvABIFLR8AJSzPACMVKvoAJSrvADV2AAA" target="blank">anything</a>


## Ковенант Кирий
<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/kiri_logo.png"> </p>

<span style="color:#68ccef;font-size:1em;"><img src="{{ site.url }}/assets/img/guide/archive/havoc/Shadowlands_9_1_0/kyrian.png" width="16" height="24"> <b>Кирии</b></span> сильный ковенант для Мифик+ контента из-за {{ site.data.covenant.Elysian_Decree }} который дает высокий АоЕ бурст и сильными защитными свойствами {{ site.data.covenant.Phial_of_Serenity }}, который не только может восстановить ваше здоровье но и развеять вредоносные эффекты, особенно будет полезен когда группа может не иметь доступа к развеиванию определенного типа эффекта.

После вступления в ковенант нам откроются две способности:
* {{ site.data.covenant.Elysian_Decree }} - Размещает в указанном месте кирийскую печать, которая активируется через 2 сек. Печать наносит сильный АоЕ урон, который можно усилить баффом от {{ site.data.talent.Momentum }}. После взрыва печати появляются 3 {{ site.data.spell.Shattered_SoulsHDH }}, это немного повышает нашу выживаемость.
* {{ site.data.covenant.Summon_Steward }} - Вы зовете распорядителя, который приносит вам {{ site.data.covenant.Phial_of_Serenity }}, восполняющий 20% здоровья и снимающий проклятия, болезни, яды и эффекты кровотечения. Очень полезный флакон, сильно упрощает жизнь в ключах, снимает даже стаки аффикса {{ site.data.mplus.Necrotic }}.

### Пелагий

* использование {{ site.data.covenant.Elysian_Decree }} - активирует способность нашего медиума {{ site.data.covenant.Combat_Meditation }} и дает нам бафф искусности на 10 сек, который можно продлевать собирая сферы "Печальных воспоминаний", тем самым усиливая наши способности которые используют Хаос, например такие как {{ site.data.spell.Chaos_Strike }} или {{ site.data.spell.Eye_Beam }}.
* {{ site.data.covenant.Let_Go_of_the_Past }} - постоянный баф на снижение магического урона.
* [Вместе лучше](https://ru.wowhead.com/spell=351146) - опять бафф искусности, но в АоЕ то количиство которые мы получаем от связей Пелагия имеет ощутимое значение.
* [Новообретенная стойкость](https://ru.wowhead.com/spell=351149) - вам нужно отслеживать появления ваших копий, чтоб быстро расправится с ними, так как 12% ловкости это довольно сильный бафф.

Рекомендуемое дерево развития медиума Пелагий:
<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/pelagos/demon-hunter/AwCW5pYTBS0fABUszwAldg4AIxUq-gAlKu8ANXYAAA" target="blank">anything</a>

### Клея

Неплохой медиум который повышает нашу выживаемость.

* {{ site.data.covenant.Valiant_Strikes }} - Хорошее исцеление, особенно если учесть как быстро мы можем накопить 20 стаков в групповом контенте.
* {{ site.data.covenant.Cleansing_Rites }} - Будет не очень полезным в рейде, но в мифик+ контенте принесет много пользы так как повысит нашу выживаемость.
* {{ site.data.covenant.Pointed_Courage }} - очень мощный баф крита, он отлично сочетается с {{ site.data.covenant.Valiant_Strikes }}.
* [Копье Архонта](https://ru.wowhead.com/spell=351488) - скорость передвижения нам не так важна, но 3% крита очень хороший бафф
* [Освещение пути](https://ru.wowhead.com/spell=351491) - связь с сильной синергией с {{ site.data.covenant.Valiant_Strikes }}.

Рекомендуемое дерево развития медиума Клея:

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/kleia/demon-hunter/AwCWapYBBStvABIFLR8AJSzPACMVKvoAJSrvADV2AAA" target="blank">anything</a>

### Верховный автоматург Миканикос

Верховный автоматург Миканикос обладает очень интересными трейтами, которые потенциально могут стать очень сильными, когда мы их полностью откроем.

* {{ site.data.covenant.Brons_Call_to_Action }} - призывает стража который наносит небольшой урон.
* {{ site.data.covenant.Forgelite_Filter }} - Трейт хорош тем, что он активирует {{ site.data.covenant.Phial_of_Serenity }} даже когда он перезаряжается, при этом не обновляя время восстановления. Если на момент срабатывания трейта {{ site.data.covenant.Phial_of_Serenity }} был доступен к использованию, то это запустит перезарядку.
* {{ site.data.covenant.Hammer_of_Genesis }} - очень сильный трейт практически в любых ситуациях так как может вам дать от 3-15% скорости.
* [Бурный акселератор анимы](https://ru.wowhead.com/spell=352186) - очень мощный талант для М+ и для боссов с частым появлением адов

Рекомендуемое дерево развития медиума Верховный автоматург Миканикос:

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/forgelite-prime-mikanikos/demon-hunter/AwCW6pYBBStvABIFLR8AJSzPACMVKvoAJSrvADV2AAA" target="blank">anything</a>


## Симуляция медиумов и связей душ

<div id="bloodmallet_soul_binds" class="bloodmallet_chart" data-wow-class="demon_hunter" data-wow-spec="havoc" data-font-color="#eee" data-background-color="#222" data-fight-style="castingpatchwerk" data-type="soul_binds" data-entries="10000" data-language="ru">Loading...</div>

## Проводники (Кондуиты)

### Рейд

<img src="/assets/img/guide/archive/havoc/Shadowlands_9_1_0/potency.png" width="15" height="100%"> <u>Проводники силы</u>

* {{ site.data.conduits.Growing_Inferno }} — урон способности {{ site.data.spell.Immolation_Aura }} дополнительно увеличивается на 10-18% каждый раз, когда она наносит урон. 
Очень сильно увеличивает урон от {{site.data.spell.Immolation_Aura }}, **используем всегда**.
> Добыча: подземелье [Смертельная тризна](https://ru.wowhead.com/the-necrotic-wake) босс [Хирург Трупошов](https://ru.wowhead.com/npc=166882) и рейд [Святилище Господства](https://ru.wowhead.com/zone=13561) босс [Сильвана Ветрокрылая](https://ru.wowhead.com/npc=180828/) 

* [Неестественная злоба](https://ru.wowhead.com/spell=344358) — Увеличивает урон ДоТа "Охоты", на 25-45%.
> Добыча: рейд [Замок Нафрия](https://ru.wowhead.com/castle-nathria) босс [Сир Денатрий](https://ru.wowhead.com/npc=167406) и мировые боссы

* [Фрагмент адаптивной брони](https://ru.wowhead.com/spell=357902) При получении исцеления от другого игрока ваша основная характеристика повышается на 2-3,6% на 15 сек. Эффект срабатывает не чаще раза в 30 сек.
> Добыча: мировой босс [Мор'гет](https://ru.wowhead.com/npc=178958/) и рейд [Святилище Господства](https://ru.wowhead.com/zone=13561) босс [Стражница Предвечных](https://ru.wowhead.com/npc=175731/guardian-of-the-first-ones) 

* {{ site.data.conduits.Demons_Touch }} —  {{ site.data.spell.Chaos_Strike }} с вероятностью 5-9% сработает еще раз.
> Добыча: подземелье [Чумные каскады](https://ru.wowhead.com/plaguefall) босс [Домина Отравленный Клинок](https://ru.wowhead.com/npc=164266)

<img src="/assets/img/guide/archive/havoc/Shadowlands_9_1_0/endurance.png" width="15" height="100%"> <u>Проводники выносливости</u>

* {{ site.data.conduits.Viscous_Ink }} — {{ site.data.spell.Demonic_WardsHDH }} снижает получаемый вами урон от магии дополнительно на 6-13%. Очень сильный проводник, берем когда в бою присутствует магический урон.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ru.wowhead.com/zone=13577/) босс [So'azmi](https://ru.wowhead.com/npc=175806)

* {{ site.data.conduits.Fel_Defender }} — время восстановления вашей способности {{ site.data.spell.Blur }} уменьшается на 5-20 сек. Выбор по умолчанию в боях без магии.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ru.wowhead.com/zone=13577/) босс [So'leah](https://ru.wowhead.com/npc=180863/)

* [Конденсированная сфера анимы](https://ru.wowhead.com/spell=357888) — При получении любого урона вы восполняете 0.25-0.45% максимального запаса здоровья. Эффект срабатывает не чаще раза в 10 сек.
> Добыча: мировой босс [Мор'гет](https://ru.wowhead.com/npc=178958/)

<img src="/assets/img/guide/archive/havoc/Shadowlands_9_1_0/finesse.png" width="15" height="100%"> <u>Проводники точности</u>

* {{ site.data.conduits.Felfire_Haste }} — ваша скорость передвижения повышается на 5-20% после использования способности {{ site.data.spell.Fel_Rush }}. Дает дополнительную мобильность и без того мобильному классу. Все же является единственным универсальным выбором проводника в эту ячейку.
> Добыча: рейд [Святилище Господства](https://ru.wowhead.com/zone=13561/) босс [Сир Денатрий](https://ru.wowhead.com/npc=179390/)

* {{ site.data.conduits.Ravenous_Consumption }} — способность {{ site.data.spell.Consume_Magic }} получает 15-30% шанс рассеять дополнительный эффект.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ru.wowhead.com/zone=13577/) босс [P.O.S.T. Master](https://ru.wowhead.com/npc=175646)

### Мифик+

<img src="/assets/img/guide/archive/havoc/Shadowlands_9_1_0/potency.png" width="15" height="100%"> <u>Проводники силы</u>

* {{ site.data.conduits.Growing_Inferno }} — урон способности {{ site.data.spell.Immolation_Aura }} дополнительно увеличивается на 10-18% каждый раз, когда она наносит урон. 
Очень сильно увеличивает урон от {{site.data.spell.Immolation_Aura }}, **используем всегда**.
> Добыча: подземелье [Смертельная тризна](https://ru.wowhead.com/the-necrotic-wake) босс [Хирург Трупошов](https://ru.wowhead.com/npc=166882) и рейд [Святилище Господства](https://ru.wowhead.com/zone=13561) босс [Сильвана Ветрокрылая](https://ru.wowhead.com/npc=180828/) 

* {{ site.data.conduits.Demons_Touch }} —  {{ site.data.spell.Chaos_Strike }} с вероятностью 5-9% сработает еще раз.
> Добыча: подземелье [Чумные каскады](https://ru.wowhead.com/plaguefall) босс [Домина Отравленный Клинок](https://ru.wowhead.com/npc=164266)

* [Фрагмент адаптивной брони](https://ru.wowhead.com/spell=357902) При получении исцеления от другого игрока ваша основная характеристика повышается на 2-3,6% на 15 сек. Эффект срабатывает не чаще раза в 30 сек.
> Добыча: мировой босс [Мор'гет](https://ru.wowhead.com/npc=178958/) и рейд [Святилище Господства](https://ru.wowhead.com/zone=13561) босс [Стражница Предвечных](https://ru.wowhead.com/npc=175731/guardian-of-the-first-ones) 

* [Неестественная злоба](https://ru.wowhead.com/spell=344358) — Увеличивает урон ДоТа "Охоты", на 25-45%.
> Добыча: рейд [Замок Нафрия](https://ru.wowhead.com/castle-nathria) босс [Сир Денатрий](https://ru.wowhead.com/npc=167406) и мировые боссы

<img src="/assets/img/guide/archive/havoc/Shadowlands_9_1_0/endurance.png" width="15" height="100%"> <u>Проводники выносливости</u>

* {{ site.data.conduits.Viscous_Ink }} — {{ site.data.spell.Demonic_WardsHDH }} снижает получаемый вами урон от магии дополнительно на 6-13%. Очень сильный проводник, берем когда в бою присутствует магический урон.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ru.wowhead.com/zone=13577/) босс [So'azmi](https://ru.wowhead.com/npc=175806)

* {{ site.data.conduits.Fel_Defender }} — время восстановления вашей способности {{ site.data.spell.Blur }} уменьшается на 5-20 сек. Выбор по умолчанию в боях без магии.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ru.wowhead.com/zone=13577/) босс [So'leah](https://ru.wowhead.com/npc=180863/)

* [Конденсированная сфера анимы](https://ru.wowhead.com/spell=357888) — При получении любого урона вы восполняете 0.25-0.45% максимального запаса здоровья. Эффект срабатывает не чаще раза в 10 сек.
> Добыча: мировой босс [Мор'гет](https://ru.wowhead.com/npc=178958/)

<img src="/assets/img/guide/archive/havoc/Shadowlands_9_1_0/finesse.png" width="15" height="100%"> <u>Проводники точности</u>

* {{ site.data.conduits.Felfire_Haste }} — ваша скорость передвижения повышается на 5-20% после использования способности {{ site.data.spell.Fel_Rush }}. Дает дополнительную мобильность и без того мобильному классу. Все же является единственным универсальным выбором проводника в эту ячейку.
> Добыча: рейд [Святилище Господства](https://ru.wowhead.com/zone=13561/) босс [Fatescribe Roh-Kalo](https://ru.wowhead.com/npc=179390/)

* {{ site.data.conduits.Ravenous_Consumption }} — способность {{ site.data.spell.Consume_Magic }} получает 15-30% шанс рассеять дополнительный эффект.
> Добыча: подземелье [Tazavesh, the Veiled Market](https://ru.wowhead.com/zone=13577/) босс [P.O.S.T. Master](https://ru.wowhead.com/npc=175646)


<div class="minibox minibox-left"><a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/gear.html">Назад:<br>Бис лист</a></div>
<div class="minibox"><a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/consumables.html">Длаее:<br>Расходники</a></div>
