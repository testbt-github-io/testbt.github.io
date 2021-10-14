---
layout: page
title: Таланты и Билды
description: Гайд для Охотников на Демонов Месть 9.1.0 PvE Shadowlands
last_update: 2021-06-24 09:00:00
game_version: 9.1.0 Shadowlands 
author: Airithez и Rodriguezz
image:
    path: assets/img/blog/prev/spec_logo_VDH.png
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/vengeance/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Кратко и Быстро</a>
<a href="{{ site.url }}/guide/vengeance/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/vengeance/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/vengeance/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"><span style="color: white;"> Таланты и Билды</span></a>
<a href="{{ site.url }}/guide/vengeance/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/vengeance/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/vengeance/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/vengeance/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ковенанты</a>
<a href="{{ site.url }}/guide/vengeance/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/vengeance/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/vengeance/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/vengeance/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>
# Лучший набор талантов для Охотника на Демонов Месть

<div class="tabs">
<div class="tabs__nav">
<a class="tabs__link tabs__link_active" href="#content-1">Клеймобилд</a>
<a class="tabs__link" href="#content-2">ДПС Билд</a>
</div>

<div class="tabs__content">
<div class="tabs__pane tabs__pane_show" id="content-1" >

<div class="tabs_in" markdown="1">

Клеймобилд с высокой выживаемостью через легендарный эффект {{ site.data.legendary.Fiery_Soul }}. Основной билд ВДХ в высокие ключи и мифик рейд

{% include FierySoul.html %} 
<br>
> {{ site.data.talent.Quickened_Sigils }} перманентный выбор только с ковенантом <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирий.

</div>
</div>

<div class="tabs__pane" id="content-2">
   
<div class="tabs_in"  markdown="1">

ДПС вариант через {{ site.data.talent.Spirit_Bomb }}. Выживаемость в этом варианте на порядок ниже.
При игре с ковенантом <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирий используем легендарный предмет {{ site.data.legendary.Razelikhs_Defilement }}, с остальными ковенантами - {{ site.data.legendary.Sephuzs_Proclamation }} либо {{ site.data.legendary.Darkglare_Boon }}.

{% include RazelikhsDefilement.html %}
<br>
> {{ site.data.talent.Quickened_Sigils }} перманентный выбор только с ковенантом <img src="{{ site.url }}/assets/img/guide/havoc/kyrian.png" width="16" height="24"> Кирий.

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
<li>{{ site.data.talent.Abyssal_Strike }}: Талант дает 2 дополнительных {{ site.data.spell.Infernal_Strike }} в минуту за счет уменьшения времени восстановления до 12 секунд, а также бесплатный {{ site.data.spell.Sigil_of_Flame }}. Это означает, что у вас будет 5 зарядов {{ site.data.spell.Infernal_Strike }} в минуту. Талант обеспечивает максимальный прирост мобильности, увеличение урона в AoE, а также делает талант конкурентоспособным для СТ.</li> 
<li>{{ site.data.talent.Agonizing_Flames }} Талант продлевает время действия {{ site.data.spell.Immolation_Aura }} на 50% и увеличивает скорость передвижения на 20%. Талант проигрывает по мобильности {{ site.data.talent.Abyssal_Strike }} но вместе с <a href="{{ site.url }}/blog/2020/10/22/soulbind-Conduits-demon-hunter.html"> проводником </a> {{ site.data.conduits.Growing_Inferno }} показывает отличные цифры как в АоЕ так и СТ. </li>
<li>{{ site.data.talent.Felblade }} В теории талант может быть сильным выбором в СТ, но все же по урону проигрывает первым двум, а гнев, генерируемый талантом, не является столь необходимым ресурсом для ВДХ.</li>
</ul>

### Таланты второго тира (25 Уровень)

<ul>
<li>{{ site.data.talent.Feast_of_Souls }} Использование способности {{ site.data.spell.Soul_Cleave }} накладывает на вас эффект постепенного исцеления, обеспечивая постоянный источник исцеления. Общее исцеление при этом крайне не впечатляет, поскольку оно зависит от силы атаки, а не от получаемого урона, этот талант никогда не используется.</li> 
<li>{{ site.data.talent.Fallout }} Получая первоначальный урон от {{ site.data.spell.Immolation_Aura }}, противники могут оставить малые фрагменты души. По оценкам этот шанс примерно составляет 60-70%. Если у вас больше 5 душ, все дополнительные души, созданные этим талантом, автоматически расходуются, так что это огромное увеличение выживаемости. Это предпочтительный талант для увеличения урона в этом тире при игре с {{ site.data.talent.Spirit_Bomb }}.</li>
<li>{{ site.data.talent.Burning_Alive }} Раз в 2 сек. {{ site.data.spell.Fiery_Brand  }} распространяется на находящегося рядом противника. Каждый раз, когда он распространяется, он имеет полную продолжительность {{ site.data.spell.Fiery_Brand  }}. ДоТ, наложенный этим талантом, применяется ко всем противникам, находящимся под действием {{ site.data.spell.Fiery_Brand  }}. Также распространяется снижение урона на 40%. Способность перестает распространяться, если основная цель умирает, поэтому на практике этот талант никогда не используют.</li>
</ul>

### Таланты третьего тира (30 Уровень)

<ul>
<li>{{ site.data.talent.Infernal_Armor }} Не самый лучший выбор в тире так как дает не так и много брони и проигрывает {{ site.data.talent.Spirit_Bomb }}.</li> 
<li>{{ site.data.talent.Charred_Flesh }} Увеличение длительности {{ site.data.spell.Fiery_Brand  }} от этого таланта минимально и обычно бесполезно, особенно в когда нужно AoE.</li>
<li>{{ site.data.talent.Spirit_Bomb }} Основной талант тира. Много урона, много хила.</li>
</ul>

### Таланты четвертого тира (35 Уровень)

<ul>
<li>{{ site.data.talent.Soul_Rending }} Самый бесполезный талант в тире - урон танкам снизили и вменяемый селфхил можно получить только в метаморфозе, которая и сама по себе сильный защитный кулдаун.</li> 
<li>{{ site.data.talent.Feed_the_Demon }} Поглощение {{ site.data.spell.Soul_Fragment  }} уменьшает время востановления {{ site.data.spell.Demon_Spikes  }} на 0.5 секунды. Потенциально сильный талант, имеет смысл использовать там, где нужна максимизация аптайма {{ site.data.spell.Demon_Spikes  }} и усиленный самоотхил не поможет.</li>
<li>{{ site.data.talent.Fracture }} Заменяет {{ site.data.spell.Shear  }}, имеет 2 заряда, базовый кулдаун в 4.5 секунды, дает больше боли и осколков за ГКД. По умолчанию лучший талант в тире - больше ресурсов это больше урона и хила. Да и урон таланта сильнее, чем урон базовой способности.</li>
</ul>

### Таланты пятого тира (40 Уровень)

<ul>
<li>{{ site.data.talent.Concentrated_Sigils }} Печать кидается под ноги и действует дольше. Основной выбор для увеличения урона на одиночной цели.</li> 
<li>{{ site.data.talent.Quickened_Sigils }} Печати активируются и откатываются быстрее. Талант был бы неплох в м+, если бы не следующий вариант.</li>
<li>{{ site.data.talent.Sigil_of_Chains }}  Аналог массовой стяжки дк, только не в таргет, а в радиусе печати. Основной выбор для М+.</li>
</ul>

### Таланты шестого тира (45 Уровень)

<ul>
<li>{{ site.data.talent.Void_Reaver }} Дебафф на снижение урона, которые наносят цели, получившие урон от {{ site.data.spell.Soul_Cleave }}. Хороший талант когда вы уверены, что не умрете. Однако он слабее {{ site.data.talent.DemonicVDH }}.</li> 
<li>{{ site.data.talent.DemonicVDH }} Этот талант дает вам 6 секунд {{ site.data.spell.MetamorphosisVDH }} всякий раз, когда применяется {{ site.data.spell.Fel_Devastation }}. Вы также находитесь в {{ site.data.spell.MetamorphosisVDH }} во время его применения, однако вы не можете уклоняться или парировать во время применения {{ site.data.spell.Fel_Devastation }}. Из-за увеличения общей продолжительности {{ site.data.spell.MetamorphosisVDH }} это единственный жизнеспособный талант в этом тире.</li>
<li>{{ site.data.talent.Soul_Barrier }} Этот талант дает вам небольшой щит, масштабируемый в зависимости от количества поглощенных душ. Возможно пригодится в боях, где магия составляет основную долю урона.</li>
</ul>

### Таланты седьмого тира (50 Уровень)

<ul>
<li>{{ site.data.talent.Last_Resort }} Основной выбор для ленивых или перестраховывающихся. Обман смерти, после срабатывания активирует Метаморфозу и  вешает дебафф на 8 минут (спадают после смерти). Не сработает, если урон в 2 раза выше максимального здоровья. Не вешает перезарядку на Метаморфозу с кнопки и не продляет ее длительность. Это может быть хорошим талантом для освоения боссов </li> 
<li>{{ site.data.talent.Ruinous_Bulwark }} С этим талантом {{ site.data.spell.Fel_Devastation }} лечит больше и дает щит за избыточное исцеление. Однако количество исцеления настолько мало, что этот талант не стоит расматривать.</li>
<li>{{ site.data.talent.Bulk_Extraction }} Исцеление длится слишком долго, чтобы быть полезным, но урон лучше, чем ничего, вы можете использовать этот талант для повышения вашего урона, где вы точно не умрете.</li>
</ul>

## Режим войны (War Mode)
<p style="text-indent: 20px;">
Новое изменение в BFA - добавление режима войны. Режим войны - это новая система мирового PvP , а также новая система чести и талантов чести. Теперь вы можете переключать режим войны, находясь в Штормграде или Оргриммаре, чтобы получить доступ к PvP-талантам в открытом мире, а также к другим бонусам, таким как увеличенные награды за выполнение локальных заданий и 10% дополнительного опыта. Обратной стороной является то, что вы всегда будете в режиме PvP, а награды уравновешивают этот риск.
Не все таланты одинаково полезны. Мы выбрали лучшие варианты, которые вы можете использовать при игре в открытом мире с включенным Режимом Войны. Имейте ввиду, что это лучшие варианты для PvE, и они могут отличаться от тех, которые используются при сражениях с другими игроками.
Бонусы в режиме войны теперь могут увеличиваться до 30% в зависимости от того, насколько не сбалансирована PvP-ситуация против вашей фракции. Кроме того, вы сможете отключить режим войны в любой зоне отдыха, например, в небольших городах и тавернах, что позволит вам выйти из неблагоприятных ситуаций, если вы того пожелаете.
 </p>
 
<ul>
<li>{{ site.data.talent.Cleansed_by_Flame }} </li> 
<li>{{ site.data.talent.Solitude }} </li>
<li>{{ site.data.talent.Jagged_Spikes }}</li>
</ul>


<div class="minibox minibox-left"><a href="{{ site.url }}/guide/vengeance/beginners.html">Назад:<br>Новичкам</a></div>
<div class="minibox"><a href="{{ site.url }}/guide/vengeance/rotation-priority.html">Длаее:<br>Ротация</a></div>















  
  
