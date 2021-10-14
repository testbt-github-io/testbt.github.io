---
layout: page
title: Макросы и Аддоны
description: ДХ Истребление 9.0.5 PvE гайд Shadowlands
last_update: 2021-03-19 09:00:00
game_version: 9.0.5 Shadowlands
author: Rodriguezz
toc: true
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Кратко и Быстро</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ковенанты</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"><span style="color: white;"> Макросы и Аддоны</span></a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>
## Макросы
	   
Макрос — это маленькая программа, написанная на скриптовом языке, предназначенная для решения следующих (к примеру) задач:
> Каждый класс в WoW имеет гораздо больше заклинаний, чем может помещаться на панелях команд. Макросы позволяют объединять несколько умений в одну «кнопку» на панели команд, а сами умения будут использоваться с дополнительными модификаторами (клавишами Shift, Alt, Ctrl). Используя макросы, вы можете повесить до 24 заклинаний всего на 6 кнопок.<br>
> Макросы позволяют объединять несколько умений, активируя их нажатием одной кнопки, что может экономить время. Но данная возможность работает, только если не более чем одно из заклинаний имеет время каста или является мгновенным, но имеет гкд (GCD – общее время восстановления).<br>
> Также макросы могут выполнять множество других задач, например, рассчитывать эвойденс, если вы танк, или сообщать вам, когда в зоне вашей видимости появился затерянный во времени протодракон, пока вы летите по Грозовой Гряде. (Это достаточно сложные макросы и выходят за рамки нашей темы, но для любопытных они включены для примера в конце)

	   
 <li> Чтобы открыть интерфейс макроса в игре, введите «/ macro» или «/ m».</li>
 <li> Выберите между вкладками «Общие» и «Макросы для конкретного персонажа». Затем нажмите кнопку «Создать» в окне макроса.</li>
 <li> Выберите имя и значок, чтобы вы могли легко узнать свой макрос, затем нажмите «ОК».</li>
 <li> Выберите новый макрос и используйте текстовый редактор ниже, чтобы написать команду для макроса. Также вы можете скопировать готовый макрос и просто его вставить..</li>
 <li> Нажмите кнопку «Сохранить» и перетащите значок макроса на панель заклинаний чтобы использовать его, как любое другое заклинание из вашей книги заклинаний.</li>
 <li> Чтобы закрыть окно, нажмите «Выход» или просто нажмите Escape.</li> 
<br>
 Для получения дополнительной информации о создании макросов, включая полные списки условных операторов, модификаторов и других настроек команд, которые вы можете использовать, ознакомьтесь с нашим полным руководством по <a href="{{ site.url }}/guide/general/macros_guide.html"> Макросам</a>.

## Макрос на отмену заклинания
    
<pre>
<code class="language-less">
#showtooltip
/stopmacro [channeling:Пронзающий взгляд]
/stopmacro [channeling:Обстрел Скверны]
/cast [SPELLNAME]
</code>
</pre>

>Просто замените [SPELLNAME] желаемой способностью из вашей книги заклинаний. Этот макрос не позволяет вам отменить применение Пронзающиего взгляда и Обстрела Скверны.

## Макросы для автоматической замены талантов

Эти макросы позволят вам иметь одну кнопку, которая будет работать с любым выбранным вами талантом или заклинанием. Во многих случаях это не особо полезно, но бывает полезен при частой смене талантов.

### Клинок Скверны / Укус демона

Мы в большинстве случаев используем {{ site.data.talent.Felblade }} в паре с {{ site.data.talent.Demon_Blades }}, то мы можем добавить в один макрос {{ site.data.talent.Felblade }} и {{ site.data.spell.Demons_Bite }}.

<pre>
<code class="language-less">
#showtooltip 
/stopmacro [channeling:Пронзающий взгляд]
/stopmacro [channeling:Обстрел Скверны]
/cast [talent:1/3]Клинок Скверны; Укус демона
</code>
</pre>

### Макрос для Метаморфозы

Вот два популярных макроса для {{ site.data.spell.Metamorphosis }}.
>Применяет {{ site.data.spell.Metamorphosis }} в место, где находится курсор.

<pre>
<code class="language-less">
#showtooltip 
/stopmacro [channeling:Пронзающий взгляд]
/stopmacro [channeling:Обстрел Скверны]
/cast [@cursor] Метаморфоза
</code>
</pre>

>Применяет {{ site.data.spell.Metamorphosis }} на место, где находится персонаж.

<pre>
<code class="language-less">
#showtooltip 
/stopmacro [channeling:Пронзающий взгляд]
/stopmacro [channeling:Обстрел Скверны]
/cast [@cursor] Метаморфоза
</code>
</pre>

### Универсальные макросы

Полезные макросы, которые полезно иметь...

Применяет способность по вашему **ФОКУС (FOCUS)**, если он у вас есть. Если фокуса нет, то в вашу текущую цель.
Полезно для таких способностей, как {{ site.data.spell.Disrupt }}, {{ site.data.spell.Consume_Magic }} и {{ site.data.spell.Imprison }}.

<pre>
<code class="language-less">
#showtooltip
/cast [@focus,harm,nodead][SPELLNAME]
</code>
</pre>

## Аддоны

Аддоны - это мощные инструменты, которые можно использовать как для настройки игрового процесса, начиная от графических изменений, заменяющих панели действий и рамки юнитов / рейдов, так и до улучшений производительности, таких как напоминания о заклинаниях для помощи в выполнении ротации, отслеживание баффов / дебаффов, всплывающих подсказок о скором применении боссом способности. Вот некоторые из настоятельно рекомендуемых и часто используемых дополнений для Охотников на Демонов Истребления, которые безусловно, не требуются для игры, но могут помочь увеличить объем информации, доступной вам в бою или просто для более приятного ее отображения.

<a href="https://www.deadlybossmods.com/" target="_blank"> DeadlyBossMods</a> / <a href="https://www.curseforge.com/wow/addons/big-wigs" target="_blank"> BigWigs</a> - Эти дополнения покажут вам таймеры предстоящих способностей босса и предупредят вас, если вы стоите в огне. Я лично рекомендую использовать BigWigs, а также аддон для подземелий LittleWigs.

<a href="https://www.curseforge.com/wow/addons/weakauras-2" target="_blank"> WeakAuras 2</a> - это универсальный аддон, который позволяет отслеживать баффы, дебаффы и многое другое. Вы  можете сделать например панель ярости. Я очень рекомендую это аддон. Вы также можете легко импортировать ауры от других игроков.
>Вы всегда можете зайти на два крупнейших онлайн-репозитория - это <a href="https://wago.io/weakauras" target="_blank">wago.io</a> и <a href="https://www.weakauras.online/en" target="_blank">WeakAurasOnline</a>. На них люди выкладывают свои Ауры и вы всегда сможете отыскать то, что вам по душе.

**Счетчик урона:** <a href="https://www.wowace.com/projects/skada" target="_blank">Skada</a> или <a href="https://www.wowhead.com/details-damage-meter-addon-guide" target="_blank">Details</a> - идеальные дополнения, которые позволят вам проверить урон, который наносите вы и ваш участник группы или рейда. Эти дополнения также полезны для отслеживания прерываний, диспелов или смертей.

Вы можете с помощью аддонов полностью сменить пользовательский интерфейс. Чаще всего используют <a href="https://www.tukui.org/download.php?ui=elvui" target="_blank">ElvUI</a>. ElvUI полностью заменяет стандартный пользовательский интерфейс Blizzard, который очень легко настроить и который используют многие высококлассные рейдеры. Вы также можете найти готовые профили для ElvUI от других игроков на <a href="https://wago.io/elvui" target="_blank">wago.io</a>.

>Вы можете скачать приложение <a href="https://wowup.io/" target="_blank">WoWup</a>, чтобы всегда поддерживать ваши дополнения в актуальном состоянии.

### Рекомендуется

<li> <a href="https://www.tukui.org/download.php?ui=elvui" target="_blank">ElvUI</a> - Очень популярный аддон для полной настройки пользовательского интерфейса.</li>
<li> <a href="https://www.curseforge.com/WoW/addons/bartender4" target="_blank">Bartender4</a> - Настраиваемые панели действий, которые можно перемещать и организовывать так, как вам нравится.</li>
<li> <a href="https://www.wowace.com/projects/chatter" target="_blank">Chatter</a> - Изменение стандартного окна чата с настраиваемыми темами, шрифтами и функциями.</li>
<li> <a href="https://wow.curseforge.com/projects/dejacharacterstats" target="_blank">Deja Character Stats</a> -Добавляет дополнительную статистику на панель персонажа с настраиваемыми фильтрами.</li>
<li> <a href="https://www.wowace.com/projects/elkbuffbars" target="_blank">Elkano's Buff Bars</a> - Заменяет стандартные значки баффов / дебаффов упорядоченными списками, включая имена и длительность в виде гистограммы.</li>
<li> <a href="https://www.curseforge.com/wow/addons/mapster" target="_blank">Mapster</a> - Улучшение карты мира с добавлением координат, значков и т.д.</li>
<li> <a href="https://wow.curseforge.com/projects/move-anything" target="_blank">Move Anything</a> - Позволяет перемещать любую часть стандартного пользовательского интерфейса Blizzard.</li>
<li> <a href="https://wow.curseforge.com/projects/opie" target="_blank">OPie</a> - Специальная панель действий в стиле радиального меню, очень полезная для использования не часто используемых заклинаний или расходуемых предметов которым не всегда есть место ваших основных панелях.
</li>
<li> <a href="https://www.curseforge.com/wow/addons/sexymap" target="_blank">Sexy Map</a> - Делает вашу миникарту сексуальной!
</li>
<li> <a href="https://www.wowace.com/projects/shadowed-unit-frames" target="_blank"> Shadowed Unit Frames</a> - Настраиваемые рамки игрока, цели и рейда.
</li>
<li> <a href="https://wow.curseforge.com/projects/tidy-plates-threat-plates" target="_blank">ThreatPlates</a> - Настраивайте стили именных табличек и добавляйте различную информацию, включая баффы, дебаффы и индикаторы кастинга.
</li>
<li> <a href="https://www.curseforge.com/wow/addons/world-quests-list" target="_blank">World Quest List </a> - Показывает список активных локальных заданий, отфильтрованных по зонам на вашей карте.</li>

### Информация в бою

<li> <a href="https://www.wowhead.com/bigwigs-boss-mods-addon-guide" target="_blank">BigWigs Bossmods</a> - Легкий аддон для рейдов с открытым исходным кодом.</li> 
<li> <a href="https://www.wowhead.com/deadly-boss-mods-addon-guide" target="_blank">Deadly Boss Mods</a> - Более надежный аддон для подземелий, рейдов, PvP и многого другого.</li> 
<li> <a href="https://www.wowhead.com/guide=6112/details-damage-meter-addon-guide" target="_blank">Details</a> - Настраиваемый счетчик урона и исцеления</li> 
<li> <a href="https://wow.curseforge.com/projects/exorsus-raid-tools" target="_blank">Exorsus Raid Tools</a> - Модульный аддон, содержащий инструменты координации рейдов для руководителей и офицеров рейдов.</li> 
<li> <a href="https://www.curseforge.com/wow/addons/omen-threat-meter" target="_blank">Omen</a> - Счетчик угрозы.</li> 
<li> <a href="https://wow.curseforge.com/projects/pawn" target="_blank">Pawn</a> - показывает различия между вещами, которые надеты на вашего персонажа и теми, на которые вы навели мышкой.</li>
<li> <a href="https://www.wowhead.com/how-to-use-simulationcraft-and-pawn" target="_blank">SimulationCraft</a> - Упрощает симуляцию вашего персонажа, создавая внутриигровой скрипт для вставки в SimCraft или Raidbots.</li>
<li> <a href="https://www.wowhead.com/guide=5929/wa-guide-nnf" target="_blank">WeakAuras2 </a> - Очень мощный аддон, который может отображать огромное количество разнообразной информации, индикаторы использования заклинаний, предупреждения об опасных способностях рейдовых боссов и многое другое.</li>

>Конечно, эти рекомендации - не единственные полезные аддоны, есть сотни разнообразных аддонов. Если вы ищете что-то другое, можете воспользоваться <a href="https://wow.curseforge.com/addons" target="_blank">Curseforge</a> или <a href="https://wow.curseforge.com/addons" target="_blank">WoWInterface</a>, чтобы найти подходящий для вас аддон.

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/consumables.html">Назад:<br>Расходники</a></div> 
<div class="minibox"><a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/weakauras.html">Далее:<br>WeakAuras</a></div>