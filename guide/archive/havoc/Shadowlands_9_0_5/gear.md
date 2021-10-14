---
layout: highcharts_page
title: Бис Лист
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
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"><span style="color: white;"> Бис лист</span></a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ковенанты</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>
## Рекомендуемое снаряжение

<p style="color:#ff4040;font-size:1.7em;">Предоставленная тут информация является справочной, всегда используйте симкрафт</p>

### Что такое БиС лист?

БиС лист (BiS = Best in Slot) - это список из лучшего снаряжения, доступного в игре из всех источников.

Снаряжение не вошедшее в этот список, может быть столь же хорошими, поэтому вам следует ссылаться на приоритеты характеристик, указанные на странице <a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/stats.html"> Характеристики</a> и наше руководство по <a href="{{ site.url }}/guide/general/raidbots.html"> Raidbots</a>, которое поможет определить лучший набор снаряжения на основе того, что находится у вас в инвентаре.	

<div class="tabs">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">Мифик+</a>
      <a class="tabs__link" href="#content-2">Замок Нафрия</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">

<div class="tabs_in">
<table>
    <tr>
        <td>Тип</td>
        <td>Название</td>
        <td>Босс</td>
        <td>Зона</td>
    </tr>
    <tr>
        <td>Шлем</td>
        <td>{{ site.data.item.Hood_of_Refracted_Shadows }}</td>
        <td>{{ site.data.mplus.Halkias }}</td>
        <td>{{ site.data.mplus.Halls_of_Atonement }}</td>
    </tr>
    <tr>
        <td>Шея</td>
        <td>{{ site.data.item.Sin_Stained_Pendant }}</td>
        <td>{{ site.data.mplus.Halkias }}</td>
        <td>{{ site.data.mplus.Halls_of_Atonement }}</td>
    </tr>
    <tr>
        <td>Наплечники</td>
        <td>{{ site.data.item.Far_Travelers_Shoulderpads }}</td>
        <td>{{ site.data.mplus.Dealer_Xyexa }}</td>
        <td>{{ site.data.mplus.De_Other_Side }}</td>
    </tr>
    <tr>
        <td>Плащ</td>
        <td>{{ site.data.item.Drape_of_Twisted_Loyalties }}</td>
        <td>{{ site.data.mplus.Devos }}</td>
        <td>{{ site.data.mplus.Spires_of_Ascension }}</td>
    </tr>
    <tr>
        <td>Грудь</td>
        <td>{{ site.data.item.Vest_of_Concealed_Secrets }}</td>
        <td>{{ site.data.mplus.Dessia_the_Decapitator }}</td>
        <td>{{ site.data.mplus.Theater_of_Pain }}</td>
    </tr>
    <tr>
        <td>Наручи</td>
        <td>{{ site.data.item.Bands_of_the_Undergrowth }}</td>
        <td>{{ site.data.mplus.Tredova }}</td>
        <td>{{ site.data.mplus.Mists_of_Tirna_Scithe }}</td>
    </tr>
    <tr>
        <td>Кисти рук</td>
        <td>{{ site.data.item.Gloves_of_Obscure_Rituals }}</td>
        <td>{{ site.data.mplus.Margrave_Stradama }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Пояс</td>
        <td>{{ site.data.item.Girdle_of_Shattered_Dreams }}</td>
        <td>{{ site.data.mplus.Kultharok }}</td>
        <td>{{ site.data.mplus.Theater_of_Pain }}</td>
    </tr>
    <tr>
        <td>Ноги</td>
        <td>{{ site.data.item.Fearless_Challengers_Leggings }}</td>
        <td>{{ site.data.mplus.Xav_the_Unfallen }}</td>
        <td>{{ site.data.mplus.Theater_of_Pain }}</td>
    </tr>
    <tr>
        <td>Сапоги</td>
        <td>{{ site.data.item.Sinsoaked_Waders }}</td>
        <td>{{ site.data.mplus.Executor_Tarvold }}</td>
        <td>{{ site.data.mplus.Sanguine_Depths }}</td>
    </tr>
    <tr>
        <td>Кольцо</td>
        <td>{{ site.data.item.Arachnid_Cipher_Ring }}</td>
        <td>{{ site.data.mplus.Domina_Venomblade }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Кольцо</td>
        <td>{{ site.data.item.Bloodoath_Signet }}</td>
        <td>{{ site.data.mplus.Dessia_the_Decapitator }}</td>
        <td>{{ site.data.mplus.Theater_of_Pain }}</td>
    </tr>
    <tr>
        <td>Правая рука</td>
        <td>{{ site.data.item.Poxstorm_Longsword_of_Pestilence }}</td>
        <td>{{ site.data.mplus.Margrave_Stradama }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Левая рука</td>
        <td>{{ site.data.item.Poxstorm_Longsword_of_Pestilence }}</td>
        <td>{{ site.data.mplus.Margrave_Stradama }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Аксессуар</td>
        <td>{{ site.data.item.Phial_of_Putrefaction }}</td>
        <td>{{ site.data.mplus.Doctor_Ickus }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Аксессуар</td>
        <td>{{ site.data.item.Inscrutable_Quantum_Device }}</td>
        <td>{{ site.data.mplus.Dealer_Xyexa }}</td>
        <td>{{ site.data.mplus.De_Other_Side }}</td>
    </tr>
</table>
</div>	  
      </div>
      <div class="tabs__pane" id="content-2">
 <div class="tabs_in">
	  <table>
    <tr>
        <td>Тип</td>
        <td>Название</td>
        <td>Босс</td>
    </tr>
    <tr>
        <td>Шлем</td>
        <td>{{ site.data.item.Sadists_Sinister_Mask }}</td>
        <td>{{ site.data.mplus.Sire_Denathrius }}</td>
    </tr>
    <tr>
        <td>Шея</td>
        <td>{{ site.data.item.Nobles_Birthstone_Pendant }}</td>
        <td>{{ site.data.mplus.Castellan_Niklaus }}</td>
    </tr>
    <tr>
        <td>Наплечники</td>
        <td>{{ site.data.item.Wicked_Flankers_Gorget }}</td>
        <td>{{ site.data.mplus.General_Kaal }}</td>
    </tr>
    <tr>
        <td>Плащ</td>
        <td>{{ site.data.item.Crest_of_the_Legionnaire_General }}</td>
        <td>{{ site.data.mplus.General_Kaal }}</td>
    </tr>
    <tr>
        <td>Грудь</td>
        <td>{{ site.data.item.Corset_of_the_Deft_Duelist }}</td>
        <td>{{ site.data.mplus.Castellan_Niklaus }}</td>
    </tr>
    <tr>
        <td>Наручи</td>
        <td>{{ site.data.item.Precisely_Calibrated_Chronometer }}</td>
        <td>{{ site.data.mplus.Artificer_Xymox }}</td>
    </tr>
    <tr>
        <td>Кисти рук</td>
        <td>{{ site.data.item.Gloves_of_Phantom_Shadows }}</td>
        <td>{{ site.data.mplus.Lady_Inerva_Darkvein }}</td>
    </tr>
    <tr>
        <td>Пояс</td>
        <td>{{ site.data.item.Spell_Woven_Tourniquet }}</td>
        <td>{{ site.data.mplus.Artificer_Xymox }}</td>
    </tr>
    <tr>
        <td>Ноги</td>
        <td>{{ site.data.item.Chiropteran_Leggings }}</td>
        <td>{{ site.data.mplus.Shriekwing }}</td>
    </tr>
    <tr>
        <td>Сапоги</td>
        <td>{{ site.data.item.Enchanted_Toe_Tappers }}</td>
        <td>{{ site.data.mplus.Castellan_Niklaus }}</td>
    </tr>
    <tr>
        <td>Кольцо</td>
        <td>{{ site.data.item.Ritualists_Treasured_Ring }}</td>
        <td>{{ site.data.mplus.Lady_Inerva_Darkvein }}</td>
    </tr>
    <tr>
        <td>Кольцо</td>
        <td>{{ site.data.item.Most_Regal_Signet_of_Sire_Denathrius }}</td>
        <td>{{ site.data.mplus.Sire_Denathrius }}</td>
    </tr>
    <tr>
        <td>Правая рука</td>
        <td>{{ site.data.item.Abominable_Anima_Spherule }}</td>
        <td>{{ site.data.mplus.Sire_Denathrius }}</td>
    </tr>
    <tr>
        <td>Левая рука</td>
        <td>{{ site.data.item.Abominable_Anima_Spherule }}</td>
        <td>{{ site.data.mplus.Sire_Denathrius }}</td>
    </tr>
    <tr>
        <td>Аксессуар</td>
        <td>{{ site.data.item.Skulkers_Wing }}</td>
        <td>{{ site.data.mplus.Shriekwing }}</td>
    </tr>
    <tr>
        <td>Аксессуар</td>
        <td>{{ site.data.item.Stone_Legion_Heraldry }}</td>
        <td>{{ site.data.mplus.General_Kaal }}</td>
    </tr>
</table>
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

#### Ниже представлен БиС набор предметов из рейда и подземелий.

<div class="tabs">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">Мифик+</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">
<div class="tabs_in">
<table>
    <tr>
        <td>Тип</td>
        <td>Название</td>
        <td>Босс</td>
        <td>Зона</td>
    </tr>
    <tr>
        <td>Шлем</td>
        <td>{{ site.data.item.Sadists_Sinister_Mask }}</td>
        <td>{{ site.data.mplus.Sire_Denathrius }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Шея</td>
        <td>{{ site.data.item.Azure_Venom_Choker }}</td>
        <td>{{ site.data.mplus.Kin_Tara }}</td>
        <td>{{ site.data.mplus.Spires_of_Ascension }}</td>
    </tr>
    <tr>
        <td>Наплечники</td>
        <td>{{ site.data.item.Wicked_Flankers_Gorget }}</td>
        <td>{{ site.data.mplus.General_Kaal }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Плащ</td>
        <td>{{ site.data.item.Crest_of_the_Legionnaire_General }}</td>
        <td>{{ site.data.mplus.General_Kaal }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Грудь</td>
        <td>{{ site.data.item.Anima_Splattered_Hide }}</td>
        <td>{{ site.data.mplus.Kryxis_the_Voracious }}</td>
        <td>{{ site.data.mplus.Sanguine_Depths }}</td>
    </tr>
    <tr>
        <td>Наручи</td>
        <td>{{ site.data.legendary.Collective_Anguish }}</td>
        <td>{{ site.data.mplus.General_Kaal }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Кисти рук</td>
        <td>{{ site.data.item.Gloves_of_Obscure_Rituals }}</td>
        <td>{{ site.data.mplus.Margrave_Stradama }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Пояс</td>
        <td>{{ site.data.item.Girdle_of_Shattered_Dreams }}</td>
        <td>{{ site.data.mplus.Kultharok }}</td>
        <td>{{ site.data.mplus.Theater_of_Pain }}</td>
    </tr>
    <tr>
        <td>Ноги</td>
        <td>{{ site.data.item.Fearless_Challengers_Leggings }}</td>
        <td>{{ site.data.mplus.Xav_the_Unfallen }}</td>
        <td>{{ site.data.mplus.Theater_of_Pain }}</td>
    </tr>
    <tr>
        <td>Сапоги</td>
        <td>{{ site.data.item.Sinsoaked_Waders }}</td>
        <td>{{ site.data.mplus.Executor_Tarvold }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Кольцо</td>
        <td>{{ site.data.item.Entwined_Gorger_Tendril }}</td>
        <td>{{ site.data.mplus.Kryxis_the_Voracious }}</td>
        <td>{{ site.data.mplus.Sanguine_Depths }}</td>
    </tr>
    <tr>
        <td>Кольцо</td>
        <td>{{ site.data.item.Ritual_Commanders_Ring }}</td>
        <td>{{ site.data.mplus.Nalthor_the_Rimebinder }}</td>
        <td>{{ site.data.mplus.The_Necrotic_Wake  }}</td>
    </tr>
    <tr>
        <td>Правая рука</td>
        <td>{{ site.data.item.Poxstorm_Longsword_of_Pestilence }}</td>
        <td>{{ site.data.mplus.Margrave_Stradama }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Левая рука</td>
        <td>{{ site.data.item.Poxstorm_Longsword_of_Pestilence }}</td>
        <td>{{ site.data.mplus.Margrave_Stradama }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Аксессуар</td>
        <td>{{ site.data.item.Phial_of_Putrefaction }}</td>
        <td>{{ site.data.mplus.Doctor_Ickus }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Аксессуар</td>
        <td>{{ site.data.item.Skulkers_Wing }}</td>
        <td>{{ site.data.mplus.Shriekwing }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
</table>
    </div>    </div>    </div>  </div> 

<br>

<div class="tabs">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">Рейд СТ</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">
 <div class="tabs_in">
<table>
    <tr>
        <td>Тип</td>
        <td>Название</td>
        <td>Босс</td>
        <td>Зона</td>
    </tr>
    <tr>
        <td>Шлем</td>
        <td>{{ site.data.item.Sadists_Sinister_Mask }}</td>
        <td>{{ site.data.mplus.Sire_Denathrius }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Шея</td>
        <td>{{ site.data.item.Nobles_Birthstone_Pendant }}</td>
        <td>{{ site.data.mplus.Castellan_Niklaus }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Наплечники</td>
        <td>{{ site.data.item.Wicked_Flankers_Gorget }}</td>
        <td>{{ site.data.mplus.General_Kaal }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Плащ</td>
        <td>{{ site.data.item.Crest_of_the_Legionnaire_General }}</td>
        <td>{{ site.data.mplus.General_Kaal }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Грудь</td>
        <td>{{ site.data.item.Corset_of_the_Deft_Duelist }}</td>
        <td>{{ site.data.mplus.Castellan_Niklaus }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Наручи</td>
        <td>{{ site.data.item.Bands_of_the_Undergrowth }}</td>
        <td>{{ site.data.mplus.Tredova }}</td>
        <td>{{ site.data.mplus.Mists_of_Tirna_Scithe }}</td>
    </tr>
    <tr>
        <td>Кисти рук</td>
        <td>{{ site.data.legendary.Chaos_Theory }}</td>
        <td>{{ site.data.mplus.Sire_Denathrius }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Пояс</td>
        <td>{{ site.data.item.Girdle_of_Shattered_Dreams }}</td>
        <td>{{ site.data.mplus.Kultharok }}</td>
        <td>{{ site.data.mplus.Theater_of_Pain }}</td>
    </tr>
    <tr>
        <td>Ноги</td>
        <td>{{ site.data.item.Fearless_Challengers_Leggings }}</td>
        <td>{{ site.data.mplus.Xav_the_Unfallen }}</td>
        <td>{{ site.data.mplus.Theater_of_Pain }}</td>
    </tr>
    <tr>
        <td>Сапоги</td>
        <td>{{ site.data.item.Sinsoaked_Waders }}</td>
        <td>{{ site.data.mplus.Executor_Tarvold }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Кольцо</td>
        <td>{{ site.data.item.Most_Regal_Signet_of_Sire_Denathrius }}</td>
        <td>{{ site.data.mplus.Sire_Denathrius }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Кольцо</td>
        <td>{{ site.data.item.Ritualists_Treasured_Ring }}</td>
        <td>{{ site.data.mplus.Lady_Inerva_Darkvein }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
    <tr>
        <td>Правая рука</td>
        <td>{{ site.data.item.Abominable_Anima_Spherule }}</td>
        <td>{{ site.data.mplus.Sire_Denathrius }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Левая рука</td>
        <td>{{ site.data.item.Abominable_Anima_Spherule }}</td>
        <td>{{ site.data.mplus.Sire_Denathrius }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Аксессуар</td>
        <td>{{ site.data.item.Phial_of_Putrefaction }}</td>
        <td>{{ site.data.mplus.Doctor_Ickus }}</td>
        <td>{{ site.data.mplus.Plaguefall }}</td>
    </tr>
    <tr>
        <td>Аксессуар</td>
        <td>{{ site.data.item.Skulkers_Wing }}</td>
        <td>{{ site.data.mplus.Shriekwing }}</td>
        <td>{{ site.data.mplus.Castle_Nathria }}</td>
    </tr>
</table>
    </div>    </div>    </div>   </div>
	
<p style="color:#ff4040;font-size:1.7em;">Предоставленная тут информация является справочной, всегда используйте симкрафт</p>

## Легендарные предметы

### Рейд
 
**СТ**

* {{ site.data.legendary.Chaos_Theory }}  —  {{ site.data.spell.Blade_Dance }} с вероятностью 30% накладывает на персонажа эффект “Клинки Хаоса”, который повышает урон от {{ site.data.spell.Chaos_Strike }} на 50%, а вероятность восполнения гнева - дополнительно на 60%. Время действия эффекта - 8 сек. 
> Можно применить на пояс или перчатки

Рецепт на этот легендарный предмет добывается с последнего босса {{ site.data.mplus.Sire_Denathrius }} рейда {{ site.data.mplus.Castle_Nathria }}.

**Клив/АоЕ**

* {{ site.data.legendary.Collective_Anguish }}  — При использовании {{ site.data.spell.Eye_Beam }} Охотник на Демонов призывает союзника, который использует {{ site.data.spell.Fel_Devastation }}.
> Можно применить на плащ или наручи.

Рецепт на этот легендарный предмет добывается с предпоследнего босса {{ site.data.mplus.General_Kaal }} рейда {{ site.data.mplus.Castle_Nathria }}.

### Мифик+

* {{ site.data.legendary.Collective_Anguish }} — При использовании {{ site.data.spell.Eye_Beam }} Охотник на Демонов призывает союзника, который использует {{ site.data.spell.Fel_Devastation }}.
> Можно применить на плащ или наручи.

Рецепт на этот легендарный предмет добывается с предпоследнего босса {{ site.data.mplus.General_Kaal }} рейда {{ site.data.mplus.Castle_Nathria }}.

## Аксессуар

* {{ site.data.item.Skulkers_Wing }} - Прожимной аксессуар с огромным уроном.
* {{ site.data.item.Phial_of_Putrefaction }} - Наносит высокий урон и показывает высокий оверолл.

### Patchwerk
<div id="bloodmallet_patchwerk" class="bloodmallet_chart" data-wow-class="demon_hunter" data-wow-spec="havoc" data-font-color="#eee" data-background-color="#222" data-language="ru" data-entries="10">Loading...</div>

### Hectic Add Cleave
<div id="bloodmallet_hecticaddcleave" class="bloodmallet_chart" data-wow-class="demon_hunter" data-wow-spec="havoc" data-fight-style="hecticaddcleave" data-font-color="#eee" data-background-color="#222" data-language="ru">Loading...</div>


## Уровни предметов в 1 сезоне эпохальных+ подземелий Shadowlands

<table class="grid" style="max-width:750px">
<tbody>
<tr>
<td style="text-align: center;"><b>Уровень ключа</b></td>
<td style="text-align: center;"><b>В конце подземелья</b></td>
<td style="text-align: center;"><b>В недельном сундуке</b></td>
</tr>
<tr><td>Эпохальный 2</td>
<td style="text-align: center;">187</td>
<td style="text-align: center;">200</td>
</tr>
<tr><td>Эпохальный 3</td>
<td style="text-align: center;">190</td>
<td style="text-align: center;">203</td>
</tr>
<tr>
<td>Эпохальный 4</td>
<td style="text-align: center;">194</td>
<td style="text-align: center;">207</td>
</tr>
<tr><td>Эпохальный 5</td>
<td style="text-align: center;">194</td>
<td style="text-align: center;">210</td>
</tr>
<tr>
<td>Эпохальный 6</td>
<td style="text-align: center;">197</td>
<td style="text-align: center;">210</td>
</tr>
<tr>
<td>Эпохальный 7</td>
<td style="text-align: center;">200</td>
<td style="text-align: center;">213</td>
</tr>
<tr>
<td>Эпохальный 8</td>
<td style="text-align: center;">200</td>
<td style="text-align: center;">216</td>
</tr>
<tr>
<td>Эпохальный 9</td>
<td style="text-align: center;">200</td>
<td style="text-align: center;">216</td>
</tr>
<tr>
<td>Эпохальный 10</td>
<td style="text-align: center;">204</td>
<td style="text-align: center;">220</td>
</tr>
<tr>
<td>Эпохальный 11</td>
<td style="text-align: center;">204</td>
<td style="text-align: center;">220</td>
</tr>
<tr>
<td>Эпохальный 12</td>
<td style="text-align: center;">207</td>
<td style="text-align: center;">223</td>
</tr><tr><td>Эпохальный 13</td>
<td style="text-align: center;">207</td>
<td style="text-align: center;">223</td>
</tr>
<tr>
<td>Эпохальный 14</td>
<td style="text-align: center;">207</td>
<td style="text-align: center;">226</td>
</tr>
<tr>
<td>Эпохальный 15+</td>
<td style="text-align: center;">210</td>
<td style="text-align: center;">226</td>
</tr>
</tbody>
</table>

## Уровни предметов в рейде Замок Нафрия

<table class="grid" style="max-width:750px">
<tbody>
<tr>
<td style="text-align: center;"><b>Сложность</b></td>
<td style="text-align: center;"><b>Первые 8 боссов</b></td>
<td style="text-align: center;"><b>Последние 2 босса</b></td>
</tr>
<tr><td>ЛФР</td>
<td style="text-align: center;">187</td>
<td style="text-align: center;">194</td>
</tr>
<tr><td>Обычная</td>
<td style="text-align: center;">200</td>
<td style="text-align: center;">207</td>
</tr>
<tr>
<td>Героическая</td>
<td style="text-align: center;">213</td>
<td style="text-align: center;">220</td>
</tr>
<tr><td>Эпохальный</td>
<td style="text-align: center;">226</td>
<td style="text-align: center;">233</td>
</tr>
</tbody>
</table>


<div class="minibox minibox-left"><a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/stats.html">Назад:<br>Характеристики</a></div> 
<div class="minibox"><a href="{{ site.url }}/guide/archive/havoc/Shadowlands_9_0_5/covenant.html">Далее:<br>Ковенанты</a></div>
