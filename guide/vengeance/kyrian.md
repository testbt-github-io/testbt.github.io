---
layout: highcharts_page
title: Ковенант Кирии
description: Гайд Ковенант Кирии для Охотников на Демонов Месть 9.1.5 PvE Shadowlands
last_update: 2021-11-15 09:00:00
game_version: 9.1.5 Shadowlands 
author: Rodriguezz
image:
    path: assets/img/blog/prev/spec_logo_VDH.png
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/vengeance/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Кратко и Быстро</a>
<a href="{{ site.url }}/guide/vengeance/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/vengeance/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/achievement_mythicdungeons_shadowlands.jpg"> Лучший ковенант</a>
<a href="{{ site.url }}/guide/vengeance/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/vengeance/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/vengeance/legendaries-shadowlands.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/runesmith_icon.jpg"> Легендарные предметы</a>
<a href="{{ site.url }}/guide/vengeance/domination-set-bonuses.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Осколки господства</a>
<a href="{{ site.url }}/guide/vengeance/conduits-shadowlands.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_rollthebones02.jpg"> Проводники (Кондуиты)</a>
<a href="{{ site.url }}/guide/vengeance/night-fae.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_nightfae.jpg"> Ночной Народец</a>
<a href="{{ site.url }}/guide/vengeance/necrolord.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_necrolord.jpg"> Некролорды</a>
<a href="{{ site.url }}/guide/vengeance/venthyr.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_venthyr.jpg"> Вентиры</a>
<a href="{{ site.url }}/guide/vengeance/kyrian.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_kyrian.jpg"><span style="color: white;"> Кирии</span></a>
<a href="{{ site.url }}/guide/vengeance/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/vengeance/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/vengeance/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/vengeance/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/vengeance/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/vengeance/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
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

## Ковенант Кирии

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/blog/conduits/kiri_logo.png"> </p>

{{ site.data.covenant.Elysian_Decree }} - это классовая способность ковенанта <span class="covenant-kyrian">Кирии</span> для всех Охотников на Демонов. Он добавляет в наш арсенал новую печать, которая наносит огромный урон в большой области действия через 2 секунды после размещения и генерирует 3 души, если она поражает хотя бы одну цель. Урон уменьшается после 5 целей в соответствии с формулой sqrt (5/n) до 20 целей где n - количество целей.<br>
<br>
Это самая простая из всех способностей класса, так как она работает как любая другая печать, за исключением того, что она имеет больший радиус действия. Печать наносит очень большой урон и дает много угрозы за одного ГКД, что делает ковенат <span class="covenant-kyrian">Кирии</span> отличным выбором для любого контента.<br>
<br>
С помощью кондуита [Повторный указ](https://ru.wowhead.com/spell=339895), мы можем значительно увеличивает урон, наносимый [Элизийским декретом](https://ru.wowhead.com/spell=306830). Это самый сильный проводник силы для Ковенананских проводников, он создает автоматически вторую, более слабую копию секундой позже. Обратите внимание, что в настоящее время он не генерирует никаких дополнительных душ, поэтому это прямое увеличение урона без изменения выживаемости.<br>
<br>
{{ site.data.covenant.Summon_Steward }} - Вы зовете распорядителя, и он приносит вам {{ site.data.covenant.Phial_of_Serenity }}, восполняющий 20% здоровья и снимающий проклятия, болезни, яды и эффекты кровотечения. Очень полезная флакон, сильно упрощает жизнь в ключах, снимает даже стаки аффикса {{ site.data.mplus.Necrotic }}.<br>

* <span class="q5"><strong>[Слепая вера](https://ru.wowhead.com/spell=355893)</strong></span> [Элизийский декрет](https://ru.wowhead.com/spell=306830) откалывает еще 2 малый фрагмент души и дает вам эффект "Слепая вера" на 20 секунд. За каждый малый фрагмент души, поглощенный во время действия "Слепой веры", вы получаете 10 ед. гнева, а ваша универсальность повышается на 1%.

Новая легендарный предмет для ковенанта <span class="covenant-kyrian">Кирии</span> - вполне достойный легендарный предмет в целом. Он генерирует 2 дополнительных фрагмента души, которые хорошо сочетаются с основным эффектом повышения универсальности для каждой поглощенной души. Она обеспечивает наибольшее увеличение урона из доступных нам легендарных предметов, а также дает нам немного выживаемости.<br>
<br>

Есть еще один легендарный предмет, который усиливает [Элизийский декрет](https://ru.wowhead.com/spell=306830). [Осквернение Разелиха](https://ru.wowhead.com/spell=337544) сокращает время восстановления случайной печати всякий раз, когда используется [Раскалывание душ](https://ru.wowhead.com/spell=228477). Если используется только одина печать, он всегда будет уменьшать время восстановления использованной печати, поэтому мы можем значительно сократить время восстановления [Элизийского декрета](https://ru.wowhead.com/spell=306830), особенно когда он используется вместе с другими способностями которые уменьшают его время восстановления, например такими как связь душ Миканикоса [Бурный акселератор анимы](https://ru.wowhead.com/spell=353248) ( доступно на 57 уровне Известности) и [Ускоренные печати](https://ru.wowhead.com/spell=209281). В таблице ниже показано время восстановления с различными комбинациями заклинаний:

**Время отката {{ site.data.covenant.Elysian_Decree }}**

|Способность|Уменьшение времени восстановления|Время восстановления {{ site.data.covenant.Elysian_Decree }}|
|По умолчанию|0сек.|60сек.|
|[Ускоренные печати](https://ru.wowhead.com/spell=209281)|12 сек.|48 сек.|
|[Бурный акселератор анимы](https://ru.wowhead.com/spell=353248)|4 сек. за 1 цель, максимум 20 сек.|40-56 сек.|
|[Осквернение Разелиха](https://ru.wowhead.com/spell=337544)|2 сек. за 1 применение Раскалывание душ|Примерно 40-45 сек.|
|[Ускоренные печати](https://ru.wowhead.com/spell=209281) и [Бурный акселератор анимы](https://ru.wowhead.com/spell=353248)|12 сек. плюс 4 сек. за 1 цель, максимум 20 сек.|28-44 сек.|
|[Ускоренные печати](https://ru.wowhead.com/spell=209281) и [Осквернение Разелиха](https://ru.wowhead.com/spell=337544)|12 сек. плюс 2 сек. за 1 применение Раскалывание душ|Примерно 32-36 сек.|
|[Бурный акселератор анимы](https://ru.wowhead.com/spell=353248) и [Осквернение Разелиха](https://ru.wowhead.com/spell=337544)|2 сек. за 1 применение Раскалывание душ плюс 4 сек. за 1 цель, максимум 20 сек.|Примерно 30-43 сек.|
|[Ускоренные печати](https://ru.wowhead.com/spell=209281), [Бурный акселератор анимы](https://ru.wowhead.com/spell=353248) и [Осквернение Разелиха](https://ru.wowhead.com/spell=337544)|12 сек. плюс 2 сек. за 1 применение Раскалывание душ плюс 4 сек. за 1 цель, максимум 20 сек.|Примерно 15-43 сек.|

<div style="text-align: -webkit-center; text-align: -moz-center;">
<a class="c12 cta-button" href="{{ site.url }}/guide/vengeance/legendaries-shadowlands.html" data-border="strong" data-markup-content-target="1" data-icon="true">
<span class="cta-button-icon" style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/runesmith_icon.jpg&quot;);">
</span>Легендарные предметы Охотников на Демонов</a></div><br>

## Лучшие Медиумы

<div class="tabs" id="tabs-1">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">Миканикос АоЕ/М+</a>
      <a class="tabs__link" href="#content-2">Миканикос СТ</a>
	  <a class="tabs__link" href="#content-3">Пелагий</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">
<div class="tabs_in" markdown="1">	  

В боях где много магического урона, используйте [Вязкие чернила](https://ru.wowhead.com/spell=338682) вместо [Расколотое исцеление](https://ru.wowhead.com/spell=338793). Например в рейде **Святилище господства**.

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/forgelite-prime-mikanikos/demon-hunter/AwaW6r4CBStvCCUszQgSBS0fCCUvtwgiFSrvCCV2AAg" target="blank">anything</a>
</div>      
	  </div>
      <div class="tabs__pane" id="content-2">
<div class="tabs_in" markdown="1">
В боях где много магического урона, используйте [Вязкие чернила](https://ru.wowhead.com/spell=338682) вместо [Расколотое исцеление](https://ru.wowhead.com/spell=338793). Например в рейде **Святилище господства**.      
<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/forgelite-prime-mikanikos/demon-hunter/AwaW6pYBBStvCBIFLR8IJS-3CCMVKu8IJXYACDUraQg" target="blank">anything</a>
</div>     
	 </div>
	  <div class="tabs__pane" id="content-3">
<div class="tabs_in" markdown="1">
В боях где много магического урона, используйте [Вязкие чернила](https://ru.wowhead.com/spell=338682) вместо [Расколотое исцеление](https://ru.wowhead.com/spell=338793). Например в рейде **Святилище господства**.
<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/pelagos/demon-hunter/AwaW5pYTBS0fCBUvtwgldg4IIxUq7wgldgAANStpCA" target="blank">anything</a>
</div>      
	  </div>
    </div>
  </div>
<br>

## Медиумы Ковенанта Кирии

<div class="tabs" id="tabs-2">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-4">Пелагий</a>
      <a class="tabs__link" href="#content-5">Клея</a>
	  <a class="tabs__link" href="#content-6">Верховный автоматург Миканикос</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-4">
<div class="tabs_in" markdown="1">	  
* использование {{ site.data.covenant.Elysian_Decree }} активирует способность нашего медиума {{ site.data.covenant.Combat_Meditation }} и дает нам бафф искусности на 10 сек, который можно продлевать собирая сферы "Печальных воспоминаний", тем самым усиливая наши защитные способности и урон.
* {{ site.data.covenant.Let_Go_of_the_Past }} постоянный баф на снижение магического урона.
* [Вместе лучше](https://ru.wowhead.com/spell=351146) - хорош для усиления союзников, но не для нас.
* [Новообретенная стойкость](https://ru.wowhead.com/spell=351149) - вам нужно отслеживать появления ваших копий, чтоб быстро расправится с ними, так как 12% ловкости это довольно сильный бафф.

Рекомендуемое дерево развития медиума Пелагий:
<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/pelagos/demon-hunter/AwaW5pYTBS0fCBUvtwgldg4IIxUq7wgldgAANStpCA" target="blank">anything</a>

</div>      
	  </div>
      <div class="tabs__pane" id="content-5">
<div class="tabs_in" markdown="1">	
Неплохой медиум который повышает нашу выживаемость.

* {{ site.data.covenant.Valiant_Strikes }} - Хорошее исцеление, особенно если учесть как быстро мы можем накопить 20 стаков в групповом контенте.
* {{ site.data.covenant.Ascendant_Phial }} - очень сильный трейт который усиляет {{ site.data.covenant.Phial_of_Serenity }} после использования флакона мы получаем иммунитет к проклятиям, болезням, ядам и кровотечению 8 сек. Привыборе этого трета мы потеряем слот под кондуит Силы, что уменьшит наш урон.
* {{ site.data.covenant.Cleansing_Rites }} - Будет не очень полезным в рейде, но в мифик+ контенте принесет много пользы так как повысит нашу выживаемость.
* {{ site.data.covenant.Pointed_Courage }} - очень мощный баф крита, он отлично сочитается с {{ site.data.covenant.Valiant_Strikes }}.
* [Освещение пути](https://ru.wowhead.com/spell=351491) - связь с сильной синергией с {{ site.data.covenant.Valiant_Strikes }}.

> Клея на ранних стадия игры слабее Пелагоса, но на белее высокой стадии известности она станет сильней.

Рекомендуемое дерево развития медиума Клея:

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/kleia/demon-hunter/Awa-ar4CBStvCCUszQgRJS0fCCMFK2kIFSrvCCV2AAg" target="blank">anything</a>

</div>     
	 </div>
	  <div class="tabs__pane" id="content-6">
<div class="tabs_in" markdown="1">
Верховный автоматург Миканикос обладает очень интересными трейтами, которые потенциально могут стать очень сильными, когда мы их полностью откроем.

* {{ site.data.covenant.Brons_Call_to_Action }} - призывает стража который наносит небольшой урон.
* {{ site.data.covenant.Forgelite_Filter }} - Трейт хорош тем, что он активирует {{ site.data.covenant.Phial_of_Serenity }} даже когда он перезаряжается, при этом не обновляя время восстановления. Если на момент срабатывания трейта {{ site.data.covenant.Phial_of_Serenity }} был доступен к использованию, то это запустит перезарядку.
* {{ site.data.covenant.Resilient_Plumage }}  можно с помощью {{ site.data.spell.Infernal_Strike }} и двойного прыжка забираться на возвышености чтоб специально получить урон от падения перед запулом пака мобов.
* {{ site.data.covenant.Hammer_of_Genesis }} - очень сильный трейт практически в любых ситуациях так как может вам дать от 3-15% скорости.
* [Реактивная модификация](https://ru.wowhead.com/spell=352187) - В сумме дает 24% щита от вашего максимального запаса здоровья каждую минуту.
* [Бурный акселератор анимы](https://ru.wowhead.com/spell=352186) - сокращает время восстановления {{ site.data.covenant.Elysian_Decree }} на 20 секунд, если поражено 5 или более целей, что можно комбинировать с [Ускорением печатей](https://ru.wowhead.com/spell=209281) и [Осквернение Разелиха](https://ru.wowhead.com/spell=337544) для потенциального восстановления ~ 15-20 секунд!

> Если вы захотите получить максимум защиты с терйтом {{ site.data.covenant.Superior_Tactics }}, третьим кондуитом Выносливости берите {{ site.data.conduits.Fel_Defender }}.

Рекомендуемое дерево развития медиума Верховный автоматург Миканикос:

<a href="https://ru.wowhead.com/soulbind-calc/embed/kyrian/forgelite-prime-mikanikos/demon-hunter/AwaW6r4CBStvCCUszQgSBS0fCCUvtwgiFSrvCCV2AAg" target="blank">anything</a>
</div>      
	  </div>
    </div>
  </div>
<br>

<hr>

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/vengeance/venthyr.html">Назад:<br>Вентиры</a></div>
<div class="minibox"><a href="{{ site.url }}/guide/vengeance/rotation-priority.html">Далее:<br>Ротация</a></div>

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
