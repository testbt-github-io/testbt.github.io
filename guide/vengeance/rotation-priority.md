---
layout: page
title: Ротация
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
<a href="{{ site.url }}/guide/vengeance/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/vengeance/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"><span style="color: white;"> Ротация</span></a>
<a href="{{ site.url }}/guide/vengeance/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/vengeance/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/vengeance/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ковенанты</a>
<a href="{{ site.url }}/guide/vengeance/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/vengeance/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/vengeance/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/vengeance/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>
## Базовые способности

* {{ site.data.spell.Shear }}: Наносит урон одной цели и создает {{ site.data.spell.Soul_Fragment }}. Это ваш генератор гнева и {{ site.data.spell.Soul_Fragment }} он генерирует один фрагмент души и 10 ярости, повышается до 2 фрагментов души и 30 ярости во время {{ site.data.spell.MetamorphosisVDH }}. Он используется только с {{ site.data.talent.Feed_the_Demon }}, поскольку взятие {{ site.data.talent.Fracture }} заменяет его.
* {{ site.data.spell.Immolation_Aura }}: Каждую секунду в течение 6 секунд наносит урон ближайшим целям и генерирует гнев.
* {{ site.data.spell.Fel_Devastation }}: Фронтальное конусное AoE, которое наносит урон всем целям перед вами и исцеляет, пока вы наносите урон хотя бы одной цели. Хороший источник бурстового урона, а также активирует {{ site.data.spell.MetamorphosisVDH }} с талантом {{ site.data.talent.DemonicVDH }}.
* {{ site.data.spell.Sigil_of_Flame }}: Размещаете печать которая наносит урон через 2 сек. Способность востанавливается 30 сек, способность используется по кулдауну.
* {{ site.data.spell.Soul_Cleave }}: Потребляет 30 гнева и наносит урон 5 целям перед вами, а также исцеляет Охотника на демонов, одновременно поглощая 2 ближайших фрагмента души. Это ваша основная способность для использования гнева, когда вы не играете с {{ site.data.talent.Spirit_Bomb }}. Он наносит урон по дуге 180 ° перед вашим персонажем и является основным талантом для удержания аггро когда в бою много целей. Когда вы играете с {{ site.data.talent.Spirit_Bomb }}, никогда не следует использовать {{ site.data.spell.Soul_Cleave }}, если у вас есть души.
* {{ site.data.spell.Throw_GlaiveVDH }}: Генератор аггро дальнего боя с коротким кулдауном.
* {{ site.data.spell.Infernal_Strike }}: Это способность которая обеспечивает нам мобильность. Дальность прыжка составляет 30 метров и имеет 2 заряда с перезарядкой 20 секунд. Время востановления можно сократить до 12 секунд с помощью {{ site.data.talent.Abyssal_Strike }}. У этой способности нет ГКД, поэтому вы должны использовать ее вместе с другими заклинания для дополнительного урона и угрозы, сохраняя при этом один заряд способности. Никогда не перепрыгиваете группу врагов, с которой сражаетесь, так как вы не можете уклоняться или парировать со спины, когда вы совершите прыжок через группу мобов вы дадите им возможность бить вас в спину.


## Защитные способности

* {{ site.data.spell.Demon_Spikes }}: Эта способность имеет 2 заряда и снижает получаемый физический урон в течении 6 секунд. Это ваша основная способность которая уменьшает входящий урон. Она увеличивает количество вашей брони на процент от вашей ловкости, а также увеличивает шанс парирования атак на 15%, пока способность активна. Не используйте способность когда у вас активна{{ site.data.spell.MetamorphosisVDH }}.
* {{ site.data.spell.Fiery_Brand }}: Защитная способность которая применяется к 1 цели, цель к которой применено заклинание наносит вам на 40% меньше урона в течении 8 сек. Вы можете использовать эту способность по кулдауну, если в скором времени нет механик где вам она понадобится. В эпохальных подземельях используйте способность на самого опасного врага в группе.
* {{ site.data.spell.MetamorphosisVDH }}: Увеличивает ваше максимальное количество здоровья на 50% и броню на 200%, а ваши {{ site.data.spell.Shear }} и {{ site.data.talent.Fracture }} будут генерировать дополнительно 20 гнева и фрагмент души. Пока вы находитесь в {{ site.data.spell.MetamorphosisVDH }}, вас практически невозможно убить. У способности 3-х минутный кулдаун, способность используется чтоб пережить сложные механики.


## Вспомогательные способности

* {{ site.data.spell.Torment }}: Использование провокации заставляет цель атаковать вас и генерировать в четыре раза больше угрозы в течение 3 секунд. Не имеет ГКД, при использовании способности вы должны применять сильные способности, чтоб получить много угрозы.
* {{ site.data.spell.Disrupt }}: Способность позволяет вам прерывать заклинания врагов и генерирует 30 гнев, имеет перезарядку 15 секунд. Используйте его, чтобы как можно чаще прерывать опасные заклинания врагов.
* {{ site.data.spell.Consume_Magic }}: Поглощает 1 магический эффект у вашей цели и дает вам 20 гнева.
* {{ site.data.spell.Sigil_of_Silence }}: Все пораженные печатью противники теряют способность творить заклинания на 6 sec.
* {{ site.data.spell.Sigil_of_Misery }}: Поражая противников, печать заставляет их съежиться от страха, дезориентируя на 20 sec. Можно использовать для прерывания заклинаний.
* {{ site.data.spell.Imprison }}: Контроль который действует на демона, животное или гуманоида в течение одной минуты. Не вводит в бой, можно использовать для пропуска групп мобов в подземельях.
* {{ site.data.spell.Spectral_Sight }}: Способность позволяет вам видеть скрытых и невидимых врагов. Вы можете использовать ее, чтобы увидеть невидимые патрули, а также разбойников, друидов, охотников и магов в скрытности или невидимости.


## Пассивные способности

* {{ site.data.spell.Soul_Fragment }}: Наш основной ресурс. У нас может быть максимум 5 душ и каждая из них излечит 8% урона полученного в течение последних 5 секунд. При игре с {{ site.data.talent.Spirit_Bomb }} они являются основным источником урона. Все созданные  души после 5, автоматически поглощаются. Кроме того, вы можете поглотить их, двигаясь рядом с ними, поэтому старайтесь меньше двигаться. Если они находятся на расстоянии более ~ 40 метров, их больше нельзя поглощать способностями {{ site.data.talent.Soul_Cleave }} и {{ site.data.talent.Spirit_Bomb }}. Максимальное время существования 30 секунд, а максимальное расстояние ~ 80-100 метров, после чего они будут автоматически поглощены.
* {{ site.data.spell.Demonic_Wards }}: Уменьшает весь получаемый урон на 15% как магические, так и физические.
{{ site.data.spell.Thick_Skin }}: Повышает выносливость на 65% и увеличивает броню на 100%. Это невероятно мощный пассивный эффект, который позволяет нам танковать.
* {{ site.data.spell.Riposte }}: Ваша вероятность парирования повышается на 100% от бонуса критического удара, который дает экипировка.
* {{ site.data.spell.masteryVdh }}: {{ site.data.spell.Demon_Spikes }} дополнительно уменьшают физический урон и увеличивает силу атаки в зависимости от рейтинга искусности.

## Активные способности талантов

* {{ site.data.talent.Fracture }}: Заменяет {{ site.data.spell.Shear }}. Способность наносит больше урона, создает 2 {{ site.data.spell.Soul_Fragment }} и генерирует 25 гнева, усиливается {{ site.data.spell.MetamorphosisVDH }} и создает до 3 {{ site.data.spell.Soul_Fragment }} и 45 гнева, но имеет 2 заряда, время перезарядки уменьшается за счет скорости.
* {{ site.data.talent.Spirit_Bomb }}: Способность наносит урон AoE в качестве ресурса использует {{ site.data.spell.Soul_Fragment }}.
* {{ site.data.talent.Sigil_of_Chains }}: Притягивает врагов к центру печати через 2 секунды после ее размещения, прерывая большинство заклинаний и замедляя врагов. Очень сильная способность, особенно в эпохальных подземельях.
* {{ site.data.talent.Felblade }}: Генератор гнева и дает дополнительную мобильность.
* {{ site.data.talent.Soul_Barrier }}: Способность создает щит зависящий от количества поглощенных душ. В настоящее время в большинстве случаев это не самый лучший выбор, но его можно использовать в качестве дополнительной защиты.


## Активная защита

{{ site.data.spell.Demon_Spikes }} - ваша способность активной защиты. Она снижает физический урон во время своего действия, а также увеличивает шанс парирования. В идеале вы должны стремиться к тому, чтобы эта способность была активна не менее 30% всей продолжительности боя.

Примечание: вы всегда должны использовать хотя бы один заряд способности, чтобы один ее заряд был всегда на восстановлении при активном танковании.

## Ротация

**Опенер**

1. Прекаст {{ site.data.spell.Sigil_of_Flame }}  
1. {{ site.data.spell.Torment }} вместе с {{ site.data.spell.Fiery_Brand }}
1. {{ site.data.spell.Infernal_Strike }} вместе с {{ site.data.spell.Immolation_Aura }}
1. {{ site.data.covenant.Elysian_Decree }} / {{ site.data.covenant.The_Hunt }} / {{ site.data.covenant.Sinful_Brand }}
1. {{ site.data.talent.Fracture }}  
1. {{ site.data.spell.Soul_Cleave }} - если у вас есть души
1. {{ site.data.spell.Fel_Devastation }} - если у вас есть Гнев

**Ротация**

1. {{ site.data.spell.Infernal_Strike }} если у вас 2 заряда
1. {{ site.data.spell.Fiery_Brand }} - по готовности
1. {{ site.data.spell.Fel_Devastation }} - если у вас есть 50 Ярости
1. {{ site.data.spell.Soul_Cleave }} - если у вас есть души
1. {{ site.data.covenant.Elysian_Decree }} / {{ site.data.covenant.The_Hunt }} / {{ site.data.covenant.Sinful_Brand }} - по готовности
1. {{ site.data.spell.Immolation_Aura }} - по готовности
1. {{ site.data.talent.Fracture }} - если у вас нет капа душ и/или Гнева
1. {{ site.data.spell.Sigil_of_Flame }} - по готовности
1. {{ site.data.spell.Throw_GlaiveVDH }} - когда все способности восстанавливаются


### Взрывная душа и Разлом

<div class="tabs">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">СТ</a>
      <a class="tabs__link" href="#content-2">АоЕ</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">
 <div class="tabs_in">
 1. {{ site.data.spell.Infernal_Strike }} если у вас 2 заряда<br>
 2. {{ site.data.spell.Fiery_Brand }} по кулдауну<br>
 3. {{ site.data.talent.Spirit_Bomb }} если доступно 4+ душ<br>
 4. {{ site.data.spell.Fel_Devastation }} если у вас 50+ гнева<br>
 5. {{ site.data.talent.Fracture }} если у вас меньше 3 душ<br>
 6. {{ site.data.spell.Immolation_Aura }} если нет капа душ<br>
 7. {{ site.data.spell.Soul_Cleave }} чтоб потратить лишний гнев<br>
 8. {{ site.data.spell.Sigil_of_Flame }} по кулдауну<br>
 9. {{ site.data.spell.Throw_Glaive }} если вы кайтите или нужно заполнить простои в ротации<br>
 </div>
      </div>
      
	  <div class="tabs__pane" id="content-2">
 <div class="tabs_in">
 1. {{ site.data.spell.Infernal_Strike }} если у вас 2 заряда<br>
 2. {{ site.data.spell.Fiery_Brand }} в самого опросного противника в начале боя<br>
 3. {{ site.data.talent.Spirit_Bomb }} если доступно 4+ душ<br>
 4. {{ site.data.spell.Fel_Devastation }} если у вас 50+ гнева<br>
 5. {{ site.data.talent.Fracture }} если у вас меньше 3 душ<br>
 6. {{ site.data.spell.Immolation_Aura }} если нет капа душ<br>
 7. {{ site.data.spell.Soul_Cleave }} чтоб потратить лишний гнев<br>
 8. {{ site.data.spell.Sigil_of_Flame }} по кулдауну<br>
 9. {{ site.data.spell.Throw_Glaive }} если вы кайтите или нужно заполнить простои в ротации<br>
      </div></div>
	  
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
## Оптимизация защитных способностей

Этот раздел предназначен для ситуаций, когда вам нужно получить максимальное исцеление. По мере того, как вы переходите к более сложному контенту, в котором вы чувствуете себя недостаточно живучим, вы вносите некоторые изменения в свой билд и стиль игры.


## Заметки по способностям

<h4>{{ site.data.talent.Fracture }}</h4>
{{ site.data.talent.Fracture }} имеет 2 заряда, кд уменьшается за счет скорости, и он генерирует 25 гнева и 2 души за каждое применение. При стандартном ротации вы сможете нажимать его каждое третье ГКД. Чтобы максимально раскрыть этот талант, вы не должны тратить впустую души или гнев. Используйте {{ site.data.spell.Soul_Cleave }} когда у вас 0 душ и много гнева, а если у вас есть 4 души то используйте {{ site.data.talent.Spirit_Bomb }}.

<h4>{{ site.data.talent.Spirit_Bomb }}</h4>
Используйте {{ site.data.talent.Spirit_Bomb }} когда у вас 4+ души, в идеале только на 5.
Обратите внимание, что вы не можете использовать души, пока они не приземлятся, поэтому есть небольшая задержка в использовании, а также у счетчика баффа фрагментов душ (который отслеживает большинство WeakAuras) есть задержка.

<h4>{{ site.data.spell.Soul_Fragments }}</h4>
Есть два вида фрагментов души. Меленькие и большие. Большие фрагменты души появляются при убийстве врагов. Это должен быть последний удар, то есть вы нанесли последний удар врагу. Малые фрагменты души появляются после использования {{ site.data.spell.Shear }}, {{ site.data.spell.Fracture }} и {{ site.data.spell.Fallout }}. У нас есть ограничение на 5 фрагментов души. Если вы превысите это ограничение, души будут автоматически потребляться до тех пор, пока душ не станет  станет равно 5. Так что, если вы превысите ограничение на 2, вы то автоматически употребится 2 старые души. 

<h4>{{ site.data.spell.Soul_Cleave }}</h4>
Если вы выбрали талант {{ site.data.talent.Spirit_Bomb }}, то используйте {{ site.data.spell.Soul_Cleave }}, когда у вас будет 60+ гнева и нет душ, чтобы использовать лишний гнев и максимально использовать ваше ГКД.

<h4>{{ site.data.spell.Fiery_Brand }}</h4>
{{ site.data.spell.Fiery_Brand }} находится на ГКД и наносит большой урон вашей цели, а также снижает урон на 40%. Использование этой способности зависит от механики сражения. Если по механике боя у цели есть фазы высокого урона, ее следует использовать в это время. Если в сражении нет таких механик то способность следует использовать по кулдауну при активном танковании босса, не желательно совмещать {{ site.data.spell.Demon_Spikes }} или {{ site.data.spell.MetamorphosisVDH }}, чтобы максимально увеличить окно баффа. Если вы чувствуете себя комфортно в бою и вам не нужно дополнительное снижение урона, можете использовать способность по кулдауну независимо от того кто танкует босса.


<div class="minibox minibox-left"><a href="{{ site.url }}/guide/vengeance/talent-builds.html">Назад:<br>Таланты и Билды</a></div>
 <div class="minibox"><a href="{{ site.url }}/guide/vengeance/stats.html">Далее:<br>Характеристики</a></div>















