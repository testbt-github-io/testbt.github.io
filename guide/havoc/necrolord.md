---
layout: highcharts_page
title: Ковенант Некролордов
description: Гайд Ковенант Некролордов для Охотников на Демонов Истребление 9.1.5 PvE Shadowlands
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
<a href="{{ site.url }}/guide/havoc/necrolord.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_necrolord.jpg"><span style="color: white;"> Некролорды</span></a>
<a href="{{ site.url }}/guide/havoc/venthyr.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_venthyr.jpg"> Вентиры</a>
<a href="{{ site.url }}/guide/havoc/kyrian.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_kyrian.jpg"> Кирии</a>
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

<details>
 <summary><i>История изменений</i></summary>
    <details open>
     <summary><i>Патч 9.1</i></summary>
      <ul>
        <li>Легендарный предмет ковенанта <span class="covenant-necrolord">Некролордов</span> <a href="https://ru.wowhead.com/spell=355996">Демоническая клятва</a>: Когда демон, призванный <a href="https://ru.wowhead.com/spell=329554">Подпиткой для пламени</a>, взрывается, к 5 находящемуся рядом противнику применяется <a href="https://ru.wowhead.com/spell=178940">Огненное клеймо</a>. Время действия – 5 секунд. Кроме того, время действия <a href="https://ru.wowhead.com/spell=178940">Огненное клеймо</a> увеличивается на 8 секунд.</li> 
      </ul>
    </details>
</details>
<br>

## Ковенант Некролордов
<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/necrolord_logo.png"> </p>

<span style="color:#40bf40;font-size:1em;"><img src="{{ site.url }}/assets/img/guide/havoc/nekrolords.png" width="16" height="24"> <b>Некролорды</b></span> - предлагают, наверное, самые скучные таланты среди всех ковенантов. {{ site.data.covenant.Fodder_to_the_Flame }} призывает моба которого нужно убить, это отнимает много времени, но баф который мы получаем очень сильный и его можно совмещать с {{ site.data.spell.Metamorphosis }}. 

После вступления в ковенант нам откроются две способности:
* {{ site.data.covenant.Fodder_to_the_Flame }} - это классовая способность Некролордов для Охотников на Демонов. Она был усилена в патче 9.0.5, заменяя кнопку с 2 минутным временем восстановления на способность с шансом 
срабатывания, срабатывает примерно 1,5 раза в минуту, что в среднем делает его кд 90 секунд. Это очень долгожданный бафф, который сделал ковенант конкурентоспособным. 
Вы призываете демона, которого можете атаковать только вы, а его убийство дает [Душу демона](https://ru.wowhead.com/spell=347765) это очень мощный бафф, 
а благодаря проводнику [Мрачное пламя](https://ru.wowhead.com/spell=340063) вы можете продлить его действие на 11 секунд.
* {{ site.data.covenant.Fleshcraft }} - также был сильно усилен в 9.0.5, теперь во время использования способности вы получаете на 20% меньше урона, 
что сделало ее чрезвычайно мощным кулдауном. У этой способности есть несколько недостатков, которые не позволяют ей быть особенно полезной:
* Полный эффект от способности вы сможете получить только через 3 секунды каста.
* Без связи душ [Временная плоть Эмени](https://ru.wowhead.com/spell=341650) вы будете привязаны к месту во время использования способности.

* <span class="q5"><strong>[Демоническая клятва](https://ru.wowhead.com/spell=355996/demonic-oath)</strong></span> - Очень слабый легендарный предмет, он распространяет ДоТ [Огненного клейма](https://ru.wowhead.com/spell=204021) на 5 ближайших целей, что дает нам хорошую защиту, но ДоТ очень слабый и наносит незначительный урон. К тому же легендарный предмет ненадежен, так как его работа основана на проке [Подпитка для пламени](https://ru.wowhead.com/spell=329554), прок которого рандомен и мы не можем его контролировать.

## Лучшие Медиумы

<div class="tabs" id="tabs-2">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-33">СТ</a>
      <a class="tabs__link" href="#content-44">АоЕ</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-33">
        <a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/plague-deviser-marileth/demon-hunter/AwaWZr4BJStvCBMFLR8IFTBfCCUszwgiFSr6CCUq7wg" target="blank">anything</a>
      </div>
      <div class="tabs__pane" id="content-44">
        <a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/bonesmith-heirmir/demon-hunter/AwaW6pYBBStvCBIFLR8IJTBfCCMVKvoIJSrvCDV2AAg" target="blank">anything</a>
      </div>
    </div>
  </div>
<br>

## Медиумы Ковенанта Некролордов

<div class="tabs" id="tabs-1">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-2">Изобретатель чумы Марилет</a>
      <a class="tabs__link" href="#content-1">Эмени</a>
	  <a class="tabs__link" href="#content-3">Костоплав Гейрмир</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-2">
<div class="tabs_in" markdown="1">	  
Марилет обладает связями душ которые могут очень сильно усилить {{ site.data.covenant.Fleshcraft }}, но его применение так и останется очень затратным по времени.

* {{ site.data.covenant.Volatile_Solvent }} - принесет пользу в мифиик+ контенте, для рейда бесполезен.
* {{ site.data.covenant.Oozs_Frictionless_Coating }} - дает нам 15% щит каждые 30 сек. без какого либо увеличения урона, но позволяет выбрать в дереве 2 кондуита Силы.
* {{ site.data.covenant.Ultimate_Form }} - восстанавливает в общей сумме 16% здоровья и дает невосприимчевость к контролю на время 
использования {{ site.data.covenant.Fleshcraft }} и если вы полностью завершили его каст то дополнительно получите еще 4 сек. иммунитета к контролю.
* [Слизнюченыш Кевина](https://ru.wowhead.com/spell=352110) - неплохой бафф урона, а также неплохая защита, которая также действует на группу.

Рекомендуемое дерево развития медиума Изобретатель чумы Марилет:

<a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/plague-deviser-marileth/demon-hunter/AwaWZr4BJStvCBMFLR8IFTBfCCUszwgiFSr6CCUq7wg" target="blank">anything</a>
</div>      
	  </div>
      <div class="tabs__pane" id="content-1">
<div class="tabs_in" markdown="1">	
* {{ site.data.covenant.Lead_by_Example }} - дает до 20% основной характеристики при использовании {{ site.data.covenant.Fodder_to_the_Flame }} - К сожалению эффект длится недолго, но это мощный атакующий баф и дополнительный защитный эффект.
* {{ site.data.covenant.Gnashing_Chompers }} - Хороший трейт, в полную силу откроется в мифик+ или рейде на боссах с трешом.
* [Разгоняющие подошвы](https://ru.wowhead.com/spell=351089) - очень сильный бафф для группы где нужны частые передвижения.
* [Стойкие швы](https://ru.wowhead.com/spell=351093) - очень хороший защитный бафф, особенно в рейдах, где часто происходит магический урон.
* [Разрыв гнойника](https://ru.wowhead.com/spell=351094) - наносить довольно приличный урон.

Рекомендуемое дерево развития медиума Эмени:

<a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/emeni/demon-hunter/AwaWar4CBStvCCUrkwgSBS0fCCUwXwgiFSr6CCUq7wg" target="blank">anything</a>
</div>     
	 </div>
	  <div class="tabs__pane" id="content-3">
<div class="tabs_in" markdown="1">
* {{ site.data.covenant.Forgeborne_Reveries }} - не очень полезный трейт.
* {{ site.data.covenant.Serrated_Spaulders }} - очень мощный трейт наносящий значительный урон, у него есть внутреннее КД 1 сек поэтому он не может срабатывать сразу на нескольких врагов и он может обновлять свое действие на одном и том же враге, поэтому его ценность будет постепенно теряться если он будет срабатывать дважды на одной и той же цели. 
* {{ site.data.covenant.Heirmirs_Arsenal_Marrowed_Gemstone }} - приличный баф крита с хорошим аптаймом.
* [Мнемоническое снаряжение](https://ru.wowhead.com/spell=350936) - довольно сильная связь.

Рекомендуемое дерево развития медиума Костоплав Гейрмир:

<a href="https://ru.wowhead.com/soulbind-calc/embed/necrolord/bonesmith-heirmir/demon-hunter/AwaW6pYBBStvCBIFLR8IJTBfCCMVKvoIJSrvCDV2AAg" target="blank">anything</a>
</div>      
	  </div>
    </div>
  </div>
<br>

## Сим от Bloodmallet

<div class="bloodmallet_chart" id="wowhead-guid-1634795572276-1634795567000-1277055173-4" data-wow-class="demon_hunter" data-wow-spec="havoc" data-axis-color="#9d9d9d" 
data-background-color="#242424" data-chart-mode="nodes" data-covenant="Necrolord" data-font-color="#ccc" data-type="soul_binds" data-highcharts-chart="0" style="overflow: hidden; height: 410px;" 
data-language="ru" data-entries="10">Loading...</div>

<hr>

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/havoc/night-fae.html">Назад:<br>Ночной Народец</a></div> 
<div class="minibox"><a href="{{ site.url }}/guide/havoc/venthyr.html">Далее:<br>Вентиры</a></div>

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