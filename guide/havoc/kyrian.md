---
layout: highcharts_page
title: Ковенант Кирии
description: Гайд Ковенант Кирии для Охотников на Демонов Истребление 9.1.5 PvE Shadowlands
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
<a href="{{ site.url }}/guide/havoc/kyrian.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_kyrian.jpg"><span style="color: white;"> Кирии</span></a>
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

## Новинки патча 9.1.5

* [Слепая вера](https://ru.wowhead.com/spell=355893) - теперь за малый фрагмент души,  ваша универсальность (а не искусность) повышается на 1%, и вы получаете 10 ед. гнева.

<details>
 <summary><i>История изменений</i></summary>
    <details open>
     <summary><i>Патч 9.1</i></summary>
      <ul>
        <li>Легендарный предмет ковенанта <span class="covenant-kyrian">Кирии</span> <a href="https://ru.wowhead.com/spell=355893">Слепая вера</a>: <a href="https://ru.wowhead.com/spell=306830">Элизийский декрет</a> откалывает еще 2 малый фрагмент души и дает вам эффект <a href="https://ru.wowhead.com/spell=355893">Слепая вера</a> на 20 секунд. За каждый малый фрагмент души, поглощенный во время действия <a href="https://ru.wowhead.com/spell=355893">Слепой веры</a>, вы получаете 10 ед. гнева, а ваша искусность повышается на 1%.</li> 
      </ul>
    </details>
</details>
<br>

## Ковенант Кирий
<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/kiri_logo.png"> </p>

<span style="color:#68ccef;font-size:1em;"><img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> <b>Кирии</b></span> сильный ковенант для Мифик+ 
контента из-за {{ site.data.covenant.Elysian_Decree }} который дает высокий АоЕ бурст и сильными защитными свойствами {{ site.data.covenant.Phial_of_Serenity }}, 
который не только может восстановить ваше здоровье но и развеять вредоносные эффекты, особенно будет полезен когда группе нет персонажа способного сдиспелить определенный тип вредоносного эффекта.

После вступления в ковенант нам откроются две способности:
* {{ site.data.covenant.Elysian_Decree }} - Размещает в указанном месте кирийскую печать, которая активируется через 2 сек. Печать наносит сильный АоЕ урон, который можно усилить баффом от {{ site.data.talent.Momentum }}. После взрыва печати появляются 3 {{ site.data.spell.Shattered_SoulsHDH }}, это немного повышает нашу выживаемость.
* {{ site.data.covenant.Summon_Steward }} - Вы зовете распорядителя, который приносит вам {{ site.data.covenant.Phial_of_Serenity }}, восполняющий 20% здоровья и снимающий проклятия, болезни, яды и эффекты кровотечения. Очень полезный флакон, сильно упрощает жизнь в ключах, снимает даже стаки аффикса {{ site.data.mplus.Necrotic }}.

* <span class="q5"><strong>[Слепая вера](https://ru.wowhead.com/spell=355893)</strong></span> прекрасно сочетается с талантом [Демоническим аппетитом](https://ru.wowhead.com/spell=206478/), но этот талант в настоящее время довольно слаб по сравнению со [Слепой яростью](https://ru.wowhead.com/spell=203550) и [Клинком Скверны](https://ru.wowhead.com/spell=213241), с переработкой легендарного предмета он станет более полезным, но не выйдет в лидеры.

## Лучшие Медиумы

<div class="tabs" id="tabs-2">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-33">СТ</a>
      <a class="tabs__link" href="#content-44">АоЕ</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-33">
        <a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/pelagos/demon-hunter/AwaWZpYTBS0fCBUszwgldg4IIxUq-gglKu8INXYACA" target="blank">anything</a>
      </div>
      <div class="tabs__pane" id="content-44">
        <a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/forgelite-prime-mikanikos/demon-hunter/AwaWapYBBStvCBIFLR8IJS-3CCMVKvoIJSrvCDV2AAg" target="blank">anything</a>
      </div>
    </div>
  </div>
<br>

## Медиумы Ковенанта Кирии

<div class="tabs" id="tabs-1">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-2">Пелагий</a>
      <a class="tabs__link" href="#content-1">Клея</a>
	  <a class="tabs__link" href="#content-3">Верховный автоматург Миканикос</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-2">
<div class="tabs_in" markdown="1">	  
* использование {{ site.data.covenant.Elysian_Decree }} - активирует способность нашего медиума {{ site.data.covenant.Combat_Meditation }} и дает нам бафф искусности на 10 сек, который можно продлевать собирая сферы "Печальных воспоминаний", тем самым усиливая наши способности которые используют Хаос, например такие как {{ site.data.spell.Chaos_Strike }} или {{ site.data.spell.Eye_Beam }}.
* {{ site.data.covenant.Let_Go_of_the_Past }} - постоянный баф на снижение магического урона.
* [Вместе лучше](https://ru.wowhead.com/spell=351146) - опять бафф искусности, но в АоЕ то количиство которые мы получаем от связей Пелагия имеет ощутимое значение.
* [Новообретенная стойкость](https://ru.wowhead.com/spell=351149) - вам нужно отслеживать появления ваших копий, чтоб быстро расправится с ними, так как 12% ловкости это довольно сильный бафф.

Рекомендуемое дерево развития медиума Пелагий:
<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/pelagos/demon-hunter/AwaWZpYTBS0fCBUszwgldg4IIxUq-gglKu8INXYACA" target="blank">anything</a>
</div>      
	  </div>
      <div class="tabs__pane" id="content-1">
<div class="tabs_in" markdown="1">	
Неплохой медиум который повышает нашу выживаемость.

* {{ site.data.covenant.Valiant_Strikes }} - Хорошее исцеление, особенно если учесть как быстро мы можем накопить 20 стаков в групповом контенте.
* {{ site.data.covenant.Cleansing_Rites }} - Будет не очень полезным в рейде, но в мифик+ контенте принесет много пользы так как повысит нашу выживаемость.
* {{ site.data.covenant.Pointed_Courage }} - очень мощный баф крита, он отлично сочетается с {{ site.data.covenant.Valiant_Strikes }}.
* [Копье Архонта](https://ru.wowhead.com/spell=351488) - скорость передвижения нам не так важна, но 3% крита очень хороший бафф
* [Освещение пути](https://ru.wowhead.com/spell=351491) - связь с сильной синергией с {{ site.data.covenant.Valiant_Strikes }}.

Рекомендуемое дерево развития медиума Клея:

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/kleia/demon-hunter/AwaWapYBBStvCBIFLR8IJSzPCCMVKvoIJSrvCDV2AAg" target="blank">anything</a>
</div>     
	 </div>
	  <div class="tabs__pane" id="content-3">
<div class="tabs_in" markdown="1">
Верховный автоматург Миканикос обладает очень интересными трейтами, которые потенциально могут стать очень сильными, когда мы их полностью откроем.

* {{ site.data.covenant.Brons_Call_to_Action }} - призывает стража который наносит небольшой урон.
* {{ site.data.covenant.Forgelite_Filter }} - Трейт хорош тем, что он активирует {{ site.data.covenant.Phial_of_Serenity }} даже когда он перезаряжается, при этом не обновляя время восстановления. Если на момент срабатывания трейта {{ site.data.covenant.Phial_of_Serenity }} был доступен к использованию, то это запустит перезарядку.
* {{ site.data.covenant.Hammer_of_Genesis }} - очень сильный трейт практически в любых ситуациях так как может вам дать от 3-15% скорости.
* [Бурный акселератор анимы](https://ru.wowhead.com/spell=352186) - очень мощный талант для М+ и для боссов с частым появлением адов

Рекомендуемое дерево развития медиума Верховный автоматург Миканикос:

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/forgelite-prime-mikanikos/demon-hunter/AwaWapYBBStvCBIFLR8IJS-3CCMVKvoIJSrvCDV2AAg" target="blank">anything</a>
</div>      
	  </div>
    </div>
  </div>
<br>

## Сим от Bloodmallet 

<div class="bloodmallet_chart" id="wowhead-guid-1634795572276-1634795567000-1277055173-4" data-wow-class="demon_hunter" data-wow-spec="havoc" data-axis-color="#9d9d9d" data-background-color="#242424" data-chart-mode="nodes" data-covenant="Kyrian" data-font-color="#ccc" data-type="soul_binds" data-highcharts-chart="0" style="overflow: hidden; height: 410px;" data-language="ru" data-entries="10">Loading...</div>

<hr>

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/havoc/venthyr.html">Назад:<br>Вентиры</a></div> 
<div class="minibox"><a href="{{ site.url }}/guide/havoc/beginners.html">Далее:<br>Новичкам</a></div>

<br>

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

    (function () {
      var
        nameKey = 'mytabs2',
        mytabs = {},
        mytabsStorage = {},
        listTabs = document.querySelectorAll('.tabs');

      for (var i = 0, length = listTabs.length; i < length; i++) {
        if (listTabs[i].id) {
          mytabs[listTabs[i].id] = $tabs(listTabs[i]);
        }
      }
      if (localStorage.getItem(nameKey)) {
        mytabsStorage = JSON.parse(localStorage.getItem(nameKey));
        for (var key in mytabsStorage) {
          if (mytabs.hasOwnProperty(key)) {
            mytabs[key].showTab(document.querySelector('[href="' + mytabsStorage[key] + '"]'));
          }
        }
      }
      document.addEventListener('tab.show', function (e) {
        mytabsStorage[e.detail.closest('.tabs').getAttribute('id')] = e.detail.querySelector('.tabs__link_active').getAttribute('href');
        localStorage.setItem(nameKey, JSON.stringify(mytabsStorage));
      })
    })();
</script>	
