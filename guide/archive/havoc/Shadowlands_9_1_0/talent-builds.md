---
layout: guide
title: Таланты и Билды
description: Гайд для Охотников на Демонов Истребление 9.1.0 PvE Shadowlands
last_update: 2021-06-24 09:00:00
game_version: 9.1.0 Shadowlands 
author: Rodriguezz и Gaussiana
toc: true
image:
    path: assets/img/blog/prev/spec_logo.png
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Кратко и Быстро</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"><span style="color: white;"> Таланты и Билды</span></a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ковенанты</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>
## Лучший набор талантов для Охотника на Демонов Истребление

Ищете краткую информацию о билде дпс дх? Тогда эта статья специально для вас! Тем не менее, если вас интересует что-то более специфичное, например, серьёзный рейдинг или мифик+, вас заинтересуют билды ниже.

<div class="tabs">
<div class="tabs__nav">
<a class="tabs__link tabs__link_active" href="#content-1">АоЕ М+ билд Медальон </a>
<a class="tabs__link" href="#content-2">АоЕ М+ Тоска </a>
<a class="tabs__link" href="#content-3">СТ билд Рана</a>
<a class="tabs__link" href="#content-4">СТ ФБ Теория</a>
<a class="tabs__link" href="#content-5">СТ билд Рана+Разрыв Сущности</a>
</div>

<div class="tabs__content">
<div class="tabs__pane tabs__pane_show" id="content-1">

<div class="tabs_in" markdown="1">

{% include DarkglareBoon.html %}             
 
<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">
На **35** уровне можете брать любой талант который подходит больше по стилю вашей игры.
</span></p>

</div>
</div>

<div class="tabs__pane" id="content-2" >
   
<div class="tabs_in" markdown="1">

{% include CollectiveAnguish.html %}  

<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">
На **35** уровне можете брать любой талант который подходит больше по стилю вашей игры.
<br>
В последнем тире талантов можно использовать {{ site.data.talent.Demonic }} 
</span></p>

</div>
</div>
      
<div class="tabs__pane" id="content-3">

<div class="tabs_in" markdown="1">

{% include BurningWound.html %} 

<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">
На **35** уровне можете брать любой талант который подходит больше по стилю вашей игры.
</span></p>

</div>
</div>


<div class="tabs__pane" id="content-4">
<div class="tabs_in" markdown="1">

{% include ChaosTheory.html %} 

<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">
На **35** уровне можете брать любой талант который подходит больше по стилю вашей игры.

</span></p>

</div>
</div>

<div class="tabs__pane" id="content-5">
<div class="tabs_in" markdown="1">

{% include BW_Essence-break.html %}

<br>

<p class="tanknotes-section-success" markdown="1"><span style="font-weight: 400;">
На **35** уровне можете брать любой талант который подходит больше по стилю вашей игры.
</span></p>

</div>
</div>

</div>
</div>

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

    var mytabs = $tabs('.tabs');
    if (localStorage.getItem('mytabs')) {
      mytabs.showTab(document.querySelector('[href="' + localStorage.getItem('mytabs') + '"]'));
    }

    document.addEventListener('tab.show', function (e) {
      localStorage.setItem('mytabs', e.detail.querySelector('.tabs__link_active').getAttribute('href'));
    })
</script>

<br>
  
## Обзор талантов

### Таланты первого тира (15 Уровень)

<ul>
<li>{{ site.data.talent.BlindFury }} Чрезвычайно хороший талант, усиливающий одно из наших лучших заклинаний на 50% и генерирующий много гнева.</li> 
<li>{{ site.data.talent.Demonic_Appetite }} С изменением возмещения гнева за {{ site.data.spell.Chaos_Strike }} в BFA этот талант сильно изменился. Генерирует примерно 6 душ в минуту. </li>
<li>{{ site.data.talent.Felblade }} Очень конкурентоспособный талант, дает много гнева, имеет небольшое время восстановления. </li>
</ul>

### Таланты второго тира (25 Уровень)

<ul>
<li>{{ site.data.talent.Insatiable_Hunger }} Достаточно простой талант {{ site.data.spell.Demons_Bite }} генерирует от 5 до 10 ед. дополнительного гнева за применение.</li> 
<li>{{ site.data.talent.Burning_Hatred }} Дополнительно накапливает 30 ед. гнева за 6 сек. Универсальный талант как для СТ так и АоЕ.</li>
<li>{{ site.data.talent.Demon_Blades }} Позволяет генерировать гнев пассивно.</li>
</ul>

### Таланты третьего тира (30 Уровень)

<ul>
<li>{{ site.data.talent.Trail_of_Ruin }} Очень простой талант, последний удар способности {{ site.data.spell.Blade_Dance }} вешает на врагов ДоТ, который наносит урон от магии Хаоса в течение 4 сек.</li> 
<li>{{ site.data.talent.Unbound_Chaos }} увеличивает урон нашего {{ site.data.spell.Fel_Rush }} после применения {{ site.data.spell.Immolation_Aura }}, очень слабый талант и не найдет применения в игре.</li>
<li>{{ site.data.talent.Glaive_Tempest }} Возвращается еще одна старая способность - способность артефакта Легиона. Скорость  восстановления зависит от рейтинга скорости персонажа. Больше скорости, значит быстрее восстанавливается способность.
</li>
</ul>

### Таланты четвертого тира (35 Уровень)

<ul>
<li>{{ site.data.talent.Soul_Rending }} Талант дает нам 5% пассивного самоисцеления, что делает нас более живучими и помогает пережить различные механики. Хороший выбор, если не требуется иметь невосприимчивость к урону.</li> 
<li>{{ site.data.talent.Desperate_Instincts }} Неплохой талант за счет увеличения защитных свойств {{ site.data.spell.Blur }}, но применяется очень редко.</li>
<li>{{ site.data.talent.Netherwalk }} Очень сильный сейв кулдаун который позволяет игнорировать сложные механики боя.</li>
</ul>

### Таланты пятого тира (40 Уровень)

<ul>
<li>{{ site.data.talent.Cycle_of_Hatred }} Очень сильный талант в этом тире, игра с этим талантом полностью исключит {{ site.data.spell.Blade_Dance }} из СТ ротации.</li> 
<li>{{ site.data.talent.First_Blood }} Первая кровь хорошо сочетается с талантом из третьего тира {{ site.data.talent.Trail_of_Ruin }}.</li>
<li>{{ site.data.talent.Essence_Break }} Слабый талант, пока не нашел свое место для применения.</li>
</ul>

### Таланты шестого тира (45 Уровень)

<ul>
<li>{{ site.data.talent.Unleashed_Power }} Мы получаем бесплатный АоЕ стан.</li> 
<li>{{ site.data.talent.Master_of_the_Glaive }} Довольно слабый талант, но с {{ site.data.legendary.Fel_Bombardment }} может себя очень хорошо показать, также берется по умолчанию для СТ билда.</li>
<li>{{ site.data.talent.Fel_Eruption }} Таргетный стан, может быть полезным для контроля приоритетной цели.</li>
</ul>

### Таланты седьмого тира (50 Уровень)

<ul>
<li>{{ site.data.talent.Demonic }} Сильный талант, если вам нужен бурст каждые 30 секунд, хорош в AoE. Хорошо сочетается вместе с {{ site.data.talent.BlindFury }}.</li> 
<li>{{ site.data.talent.Momentum }} Усложняет игровой процесс. Игра с этим талантом подразумевает, что вы должны следить за бафом урона и за своим положением, чтобы не улететь за край карты или не спулить новую группу врагов. Является уникальным для специализации Истребление. Чрезвычайно эффективен для нескольких целей, поскольку его модификатор урона применяется ко всему наносимому вами урону.</li>
<li>{{ site.data.talent.Fel_Barrage }} Очень странное место для этого таланта в качестве замены {{ site.data.talent.Nemesis
 }}. Этот талант, по сути, мертвый талант в этом тире, если только его не усилят настолько, что он станет незаменим.</li>
</ul>

## Режим войны (War Mode)
<p style="text-indent: 20px;">
Новое изменение в BFA - добавление режима войны. Режим войны - это новая система мирового PvP , а также новая система чести и таланты чести. Теперь вы можете переключать режим войны, находясь в Штормграде или Оргриммаре, чтобы получить доступ к PvP-талантам в открытом мире, а также к другим бонусам, таким как увеличенные награды за выполнение локальных заданий и 10% дополнительного опыта. Обратной стороной является то, что вы всегда будете в режиме PvP, а награды уравновешивают этот риск.
Не все таланты одинаково полезны. Мы выбрали лучшие варианты, которые вы можете использовать при игре в открытом мире с включенным Режимом Войны. Имейте в виду, что это лучшие варианты для PvE, и они могут отличаться от тех, которые используются при сражениях с другими игроками.
Бонусы в режиме войны теперь могут увеличиваться до 30% в зависимости от того, насколько не сбалансирована PvP-ситуация против вашей фракции. Кроме того, вы сможете отключить режим войны в любой зоне отдыха, например, в небольших городах и тавернах, что позволит вам выйти из неблагоприятных ситуаций, если вы того пожелаете.
 </p>
 
 <ul>
<li>{{ site.data.talent.Demonic_Origins }} очень хороший талант для игры в открытом мире и стычках с другими игроками. Этот талант уменьшает время восстановления нашей {{ site.data.spell.Metamorphosis }} и помогает быстро расправляться с врагами</li> 
<li>{{ site.data.talent.Solitude }} еще один очевидный победитель. Увеличивает скорость атаки и генерирование гнева если рядом нет союзников. Это цена, которую я готов заплатить.</li>
<li>В последнем тире талантов можно взять любой на ваше усмотрение, но я советую брать {{ site.data.talent.Rain_from_Above }}, хороший талант который поможет выйти победителем из нежелательных PvP боев</li>
</ul>


<div class="minibox minibox-left"><a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/beginners.html">Назад:<br>Новичкам</a></div>
<div class="minibox"><a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_1_0/rotation-priority.html">Далее:<br>Ротация</a></div>








 









