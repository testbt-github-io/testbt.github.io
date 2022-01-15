---
layout: guide
title: Ротация
description: Гайд Ротация для Охотников на Демонов Истребление 9.1.5 PvE Shadowlands
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
<a href="{{ site.url }}/guide/havoc/kyrian.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_sigil_kyrian.jpg"> Кирии</a>
<a href="{{ site.url }}/guide/havoc/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/havoc/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_mekkatorque_bot_bluegear.jpg"><span style="color: white;"> Ротация</span></a>
<a href="{{ site.url }}/guide/havoc/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/havoc/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/havoc/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/havoc/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/havoc/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"> Сокращения</a>
</div>
<br>

<a href="https://www.patreon.com/bePatron?u=43917749"  data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>

## Готовые билды:

<div id="smooth-nav-guide">

<a href="/guide/havoc/rotation.html" id="rana_eb_mom" class="c12 cta-button btn-outline" style="border-color: #a330c9" data-border="strong" data-markup-content-target="1" data-icon="true" title="Жгучая рана Имульс"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_fire_felhellfire.jpg">Жгучая рана Имульс</a>

<a href="/guide/havoc/rotation.html" id="rana_eb_meme" class="c12 cta-button btn-outline" style="border-color: #a330c9" data-border="strong" data-markup-content-target="1" data-icon="true" title="Жгучая рана Демоник"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_fire_felhellfire.jpg">Жгучая рана Демоник</a>

<a href="/guide/havoc/rotation.html" id="agony_demo" class="c12 cta-button btn-outline" style="border-color: #a330c9" data-border="strong" data-markup-content-target="1" data-icon="true" title="Терзающий взгляд"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_revendreth_demonhunter.jpg">Терзающий взгляд</a>

<a href="/guide/havoc/rotation.html" id="boon_demo" class="c12 cta-button btn-outline" style="border-color: #a330c9" data-border="strong" data-markup-content-target="1" data-icon="true" title="Медальон"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_jewelry_necklace_53.jpg">Медальон</a>

<a href="/guide/havoc/rotation.html" id="blazing_mom" class="c12 cta-button btn-outline" style="border-color: #a330c9" data-border="strong" data-markup-content-target="1" data-icon="true" title="Пылающая бойня"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_ardenweald_demonhunter.jpg">Пылающая бойня</a>

<a href="/guide/havoc/rotation.html" id="ca_mom_eb" class="c12 cta-button btn-outline" style="border-color: #a330c9" data-border="strong" data-markup-content-target="1" data-icon="true" title="Всеобщая тоска"><img src="https://wow.zamimg.com/images/wow/icons/medium/artifactability_havocdemonhunter_anguishofthedeceiver.jpg">Всеобщая тоска</a>

<a href="/guide/havoc/rotation.html" id="ct_dem_fb" class="c12 cta-button btn-outline" style="border-color: #a330c9" data-border="strong" data-markup-content-target="1" data-icon="true" title="Теория хаоса"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_glaive_1h_artifactaldrochi_d_03dual.jpg">Теория хаоса</a>

</div>

<br>


<link type="text/css" href="https://wow.zamimg.com/css/basic.css?16" rel="stylesheet">
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous">
</script>

## Динамическая таблица талантов

<table class="table table-bordered table-light talents-table">
  <tbody>

  <tr class="rotation_switches">
    <th scope="row">15</th> 
    <td class="rotation_switch" id="rotation_switch_bf">
      <input type="radio" name="15" id="bf-radio" style="display:none;" checked="">
      <label for="bf-radio">
     	 <a href="https://ru.wowhead.com/spell=203550" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_bosskilrogg_deadeye.jpg&quot;);"></ins><del></del></span><span>Слепая ярость</span></a>
      </label>
    </td>
    <td class="rotation_switch" id="rotation_switch_da">
      <input type="radio" name="15" id="da-radio" style="display:none;">
      <label for="da-radio">
     	 <a href="https://ru.wowhead.com/spell=206478" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/bility_creature_poison_01_purple.jpg&quot;);"></ins><del></del></span><span>Демонический аппетит</span></a>
      </label>
    </td>
    <td class="rotation_switch talent-active" id="rotation_switch_fb">
      <input type="radio" name="15" id="fb-radio" style="display:none;" checked="">
      <label for="fb-radio">
     	 <a href="https://ru.wowhead.com/spell=232893" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_demonhunter_felblade.jpg&quot;);"></ins><del></del></span><span>Клинок Скверны</span></a>
      </label>
    </td>
  </tr>

  <tr class="rotation_switches">
    <th scope="row">25</th>
    <td class="rotation_switch" id="rotation_switch_ih">
      <input type="radio" name="25" id="ih-radio" style="display:none;">
      <label for="ih-radio">
     	 <a href="https://ru.wowhead.com/spell=258876" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_hungerforblood.jpg&quot;);"></ins><del></del></span><span>Неутолимый голод</span></a>
      </label>
    </td>
    <td class="rotation_switch talent-active" id="rotation_switch_bh">
      <input type="radio" name="25" id="bh-radio" style="display:none;" >
      <label for="bh-radio">
      	 <a href="https://ru.wowhead.com/spell=320374" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_demonhunter_immolation.jpg&quot;);"></ins><del></del></span><span>Пылающая ненависть</span></a>
      </label>
    </td>
    <td class="rotation_switch" id="rotation_switch_db">
      <input type="radio" name="25" id="db-radio" style="display:none;" checked="">
      <label for="db-radio">
     	 <a href="https://ru.wowhead.com/spell=203555" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/inv_weapon_shortblade_92.jpg&quot;);"></ins><del></del></span><span>Демонические клинки</span></a>
      </label>
    </td>
  </tr>

  <tr class="rotation_switches">
    <th scope="row">30</th>
    <td class="rotation_switch" id="rotation_switch_tor">
      <input type="radio" name="30" id="tor-radio" style="display:none;">
      <label for="tor-radio">
     	 <a href="https://ru.wowhead.com/spell=258881" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_demonhunter_bladedance.jpg&quot;);"></ins><del></del></span><span>Остатки разрушений</span></a>
      </label>
    </td>
    <td class="rotation_switch" id="rotation_switch_uh">
      <input type="radio" name="30" id="uh-radio" style="display:none;" checked="">
      <label for="uh-radio">
     	 <a href="https://ru.wowhead.com/spell=347461" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/artifactability_vengeancedemonhunter_painbringer.jpg&quot;);"></ins><del></del></span><span>Необузданный хаос</span></a>
      </label>
	</td>
    <td class="rotation_switch" id="rotation_switch_gt">
      <input type="radio" name="30" id="gt-radio" style="display:none;">
      <label for="gt-radio">
      	 <a href="https://ru.wowhead.com/spell=342817" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/inv_glaive_1h_artifactazgalor_d_06dual.jpg&quot;);"></ins><del></del></span><span>Буря клинков</span></a>
      </label>
    </td>
  </tr>

  <tr class="rotation_switches">
    <th scope="row">35</th>
    <td class="rotation_switch talent-active" id="rotation_switch_sr">
      <input type="radio" name="35" id="sr-radio" style="display:none;">
      <label for="sr-radio">
     	 <a href="https://ru.wowhead.com/spell=204909" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_demonhunter_soulcleave2.jpg&quot;);"></ins><del></del></span><span>Раздирание души</span></a>
      </label>
    </td>
    <td class="rotation_switch" id="rotation_switch_di">
      <input type="radio" name="35" id="di-radio" style="display:none;">
      <label for="di-radio">
     	 <a href="https://ru.wowhead.com/spell=205411" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_manafeed.jpg&quot;);"></ins><del></del></span><span>Инстинкт самосохранения</span></a>
      </label>
    </td>
    <td class="rotation_switch" id="rotation_switch_nether">
      <input type="radio" name="35" id="nether-radio" style="display:none;" checked="">
      <label for="nether-radio">
     	 <a href="https://ru.wowhead.com/spell=196555" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/spell_warlock_demonsoul.jpg&quot;);"></ins><del></del></span><span>Путь Пустоты</span></a>
      </label>
    </td>
  </tr>

  <tr class="rotation_switches">
    <th scope="row">40</th>
    <td class="rotation_switch" id="rotation_switch_coh">
      <input type="radio" name="40" id="coh-radio" style="display:none;">
      <label for="coh-radio">
     	 <a href="https://ru.wowhead.com/spell=258887" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_ironmaidens_whirlofblood.jpg&quot;);"></ins><del></del></span><span>Цикл ненависти</span></a>
      </label>
    </td>
    <td class="rotation_switch" id="rotation_switch_fbald">
      <input type="radio" name="40" id="fbald-radio" style="display:none;">
      <label for="fbald-radio">
      	 <a href="https://ru.wowhead.com/spell=206416" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_deathwing_bloodcorruption_death.jpg&quot;);"></ins><del></del></span><span>Первая кровь</span></a>
      </label>
    </td>
    <td class="rotation_switch" id="rotation_switch_eb">
      <input type="radio" name="40" id="eb-radio" style="display:none;" checked="">
      <label for="eb-radio">
      	 <a href="https://ru.wowhead.com/spell=258860" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_ritualofsacrifice.jpg&quot;);"></ins><del></del></span><span>Разрыв сущности</span></a>
      </label>
    </td>
  </tr>
  <tr class="rotation_switches">
    <th scope="row">45</th>
    <td class="rotation_switch" id="rotation_switch_up">
      <input type="radio" name="45" id="up-radio" style="display:none;">
      <label for="up-radio">
      	 <a href="https://ru.wowhead.com/spell=206477" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_demonhunter_chaosnova.jpg&quot;);"></ins><del></del></span><span>Освобожденная сила</span></a>
      </label>
    </td>
    <td class="rotation_switch" id="rotation_switch_fele">
      <input type="radio" name="45" id="fele-radio" style="display:none;" checked="">
      <label for="fele-radio">
      	 <a href="https://ru.wowhead.com/spell=203556" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/inv_glaive_1h_demonhunter_a_01.jpg&quot;);"></ins><del></del></span><span>Мастер боевого клинка</span></a>
      </label>
    </td>
    <td class="rotation_switch" id="rotation_switch_feleruption">
      <input type="radio" name="45" id="feleruption-radio" style="display:none;">
      <label for="feleruption-radio">
      	 <a href="https://ru.wowhead.com/spell=211881" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_bossfellord_felspike.jpg&quot;);"></ins><del></del></span><span>Извержение Скверны</span></a>
      </label>
    </td>
  </tr>

  <tr class="rotation_switches">
    <th scope="row">50</th>
    <td class="rotation_switch" id="rotation_switch_dem">
      <input type="radio" name="50" id="dem-radio" style="display:none;">
      <label for="dem-radio">
      	 <a href="https://ru.wowhead.com/spell=213410" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_demonform.jpg&quot;);"></ins><del></del></span><span>Демонизм</span></a>
      </label>
    </td>
    <td class="rotation_switch" id="rotation_switch_mom">
      <input type="radio" name="50" id="mom-radio" style="display:none;" checked="">
      <label for="mom-radio">
      	 <a href="https://ru.wowhead.com/spell=206476" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_foundryraid_demolition.jpg&quot;);"></ins><del></del></span><span>Импульс</span></a>
      </label>
      </td>
    <td class="rotation_switch" id="rotation_switch_felb">
      <input type="radio" name="50" id="felb-radio" style="display:none;">
      <label for="felb-radio">
      	 <a href="https://ru.wowhead.com/spell=258925" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/inv_felbarrage.jpg&quot;);"></ins><del></del></span><span>Обстрел Скверны</span></a>
      </label>
    </td>
  </tr>
  </tbody>
</table>

<table class="table table-bordered table-light talents-table">
  <tbody>
  <tr class="rotation_switches">
    <td class="rotation_switch covenants" id="rotation_switch_kyr" style="border-bottom: 2px solid #68ccef;">
      <input type="radio" name="covenants" id="kyr-radio" style="display:none;" covenant="kyrian">
      <label for="kyr-radio">
         <a href="https://ru.wowhead.com/spell=306830" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_bastion_demonhunter.jpg&quot;);"></ins><del></del></span><span>Элизийский декрет</span></a>
      </label>
    </td>
    <td class="rotation_switch covenants" id="rotation_switch_vt" style="border-bottom: 2px solid #ff4040;">
      <input type="radio" name="covenants" id="vt-radio" style="display:none;" covenant="venthyr">
      <label for="vt-radio">
         <a href="https://ru.wowhead.com/spell=317009" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_revendreth_demonhunter.jpg&quot;);"></ins><del></del></span><span>Клеймо греха</span></a>
      </label>
    </td>
    <td class="rotation_switch covenants talent-active" id="rotation_switch_nf" style="border-bottom: 2px solid #a330c9;">
      <input type="radio" name="covenants" id="nf-radio" style="display:none;" covenant="fae" checked="">
      <label for="nf-radio">
         <a href="https://ru.wowhead.com/spell=323639" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_ardenweald_demonhunter.jpg&quot;);"></ins><del></del></span><span>Охота</span></a>
      </label>
    </td>
    <td class="rotation_switch covenants" id="rotation_switch_nl" style="border-bottom: 2px solid #40bf40;">
      <input type="radio" name="covenants" id="nl-radio" style="display:none;" covenant="necrolords">
      <label for="nl-radio">
         <a href="https://ru.wowhead.com/spell=350570" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_maldraxxus_demonhunter.jpg&quot;);"></ins><del></del></span><span>Подпитка для пламени</span></a>
      </label>
    </td>
  </tr>
  </tbody>
</table>

<table class="table table-bordered table-light talents-table">
  <tbody>
  <tr class="rotation_switches">
    <td class="rotation_switch covenants" id="rotation_switch_bw">
      <input type="radio" name="legendaries" id="bw-radio" style="display:none;" checked="">
      <label for="bw-radio" checked="">
         <a href="https://ru.wowhead.com/spell=346279" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/spell_fire_felhellfire.jpg&quot;);"></ins><del></del></span><span>Жгучая рана</span></a>
      </label>
    </td>
    <td class="rotation_switch covenants" id="rotation_switch_boon">
      <input type="radio" name="legendaries" id="boon-radio" style="display:none;">
      <label for="boon-radio">
         <a href="https://ru.wowhead.com/spell=337534" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_thunderking_thunderstruck.jpg&quot;);"></ins><del></del></span><span>Дар созерцателя тьмы</span></a>
      </label>
    </td>
    <td class="rotation_switch covenants" id="rotation_switch_ca">
      <input type="radio" name="legendaries" id="ca-radio" style="display:none;">
      <label for="ca-radio">
         <a href="https://ru.wowhead.com/spell=337504" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/artifactability_havocdemonhunter_anguishofthedeceiver.jpg&quot;);"></ins><del></del></span><span>Всеобщая тоска</span></a>
      </label>
    </td>
    <td class="rotation_switch covenants talent-active" id="rotation_switch_ct">
      <input type="radio" name="legendaries" id="ct-radio" style="display:none;">
      <label for="ct-radio">
         <a href="https://ru.wowhead.com/spell=337551" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/inv_glaive_1h_artifactaldrochi_d_03dual.jpg&quot;);"></ins><del></del></span><span>Теория хаоса</span></a>
      </label>
    </td>
  </tr>
  <tr class="rotation_switches">
    <td class="rotation_switch covenants" >
    </td>
    <td class="rotation_switch covenants" id="rotation_switch_ag" style="border-bottom: 2px solid #ff4040;">
      <input type="radio" name="legendaries" id="ag-radio" style="display:none;" covenant="venthyr">
      <label for="ag-radio">
         <a href="https://ru.wowhead.com/spell=355886" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_revendreth_demonhunter.jpg&quot;);"></ins><del></del></span><span>Терзающий взгляд</span></a>
      </label>
    </td>
    <td class="rotation_switch covenants" id="rotation_switch_blazing" style="border-bottom: 2px solid #a330c9;">
      <input type="radio" name="legendaries" id="blazing-radio" style="display:none;" covenant="fae">
      <label for="blazing-radio">
         <a href="https://ru.wowhead.com/spell=355890" target="blank"  data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/ability_ardenweald_demonhunter.jpg&quot;);"></ins><del></del></span><span>Пылающая бойня</span></a>
      </label>
    </td>
    <td class="rotation_switch covenants">
    </td>
  </tr>
  </tbody>
</table>

<table class="table table-bordered table-light talents-table" style="width: 50%;" align="center">
  <tbody>
  <tr class="rotation_switches"> 
    <td class="rotation_switch covenants" id="rotation_switch_ne" style="border-bottom: 2px solid #0070dd;">
      <input type="radio" name="race" id="ne-radio" style="display:none;">
      <label for="ne-radio">
         <a href="https://ru.wowhead.com/night-elf" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/race_nightelf_female.jpg&quot;);"></ins><del></del></span><span>Ночные Эльфы</span></a>
      </label>
    </td>
    <td class="rotation_switch covenants talent-active" id="rotation_switch_be" style="border-bottom: 2px solid #ff0000;">
      <input type="radio" name="race" id="be-radio" style="display:none;" checked="">
      <label for="be-radio">
         <a href="https://ru.wowhead.com/blood-elf" target="blank" data-wh-icon-size="medium" data-wh-rename-link="true" class="switch-link" data-wh-icon-added="true"><span class="iconmedium"><ins style="background-image: url(&quot;https://wow.zamimg.com/images/wow/icons/medium/race_bloodelf_female.jpg&quot;);"></ins><del></del></span><span>Эльф крови</span></a>
      </label>
    </td>
  </tr>
  </tbody>
</table>

### Опенер:

<div class="tabs__content">
      <div class="tabs_in">
<div class="apl" style="max-width: 100%;" markdown="0">
    <ol>
      <li class="be-apl" style="display: none;"> Используйте {{ site.data.rotation.ArcaneTorrent }} за 2 секунды до начала боя</li>
      <li class="kyr-apl" style="display: none;"> {{ site.data.rotation.ElysianDecree }} прекастом</li>
	  	<li>Используйте за 0.5 секунд до начала боя {{ site.data.rotation.ImmolationAura }} </li>
      <li class="mom-apl tor-apl" style="display: none;"> Используйте {{ site.data.rotation.FelRush }} </li>
      <li class="mom-apl gt-apl" style="display: none;"> Используйте {{ site.data.rotation.FelRush }} </li>
      <li class="uh-apl" style="display: none;"> Используйте {{ site.data.rotation.FelRush }} для нанесения повышенного урона благодаря таланту {{ site.data.rotation.UnboundChaos }}</li>
      <li class="vt-apl ag-apl" style="display: none;"> Используйте {{ site.data.rotation.SinfulBrand }}</li>
      <li class="bf-apl ne-apl" style="display: none;"> Используйте {{ site.data.rotation.DemonsBite }}</li>
		  <li class="fb-apl ne-apl" style="display: none;"> Используйте {{ site.data.rotation.Felblade }}</li>
      <li>Используйте {{ site.data.rotation.EyeBeam }}</li>
      <li class="nf-apl be-apl fb-apl" style="display: none;"> Используйте {{ site.data.rotation.TheHunt }}</li>
      <li class="nf-apl ne-apl fb-apl" style="display: none;"> Используйте {{ site.data.rotation.TheHunt }}</li>
      <li class="vt-apl ct-apl" style="display: none;"> Используйте {{ site.data.rotation.SinfulBrand }}</li>
      <li class="vt-apl ca-apl" style="display: none;"> Используйте {{ site.data.rotation.SinfulBrand }}</li>
      <li class="vt-apl boon-apl" style="display: none;"> Используйте {{ site.data.rotation.SinfulBrand }}</li>
      <li class="vt-apl bw-apl" style="display: none;"> Используйте {{ site.data.rotation.SinfulBrand }}</li>
      <li class="bf-apl ih-apl mom-apl nf-apl" style="display: none;"> Используйте {{ site.data.rotation.TheHunt }}</li>
      <li class="bf-apl ih-apl dem-apl nf-apl" style="display: none;"> Используйте {{ site.data.rotation.TheHunt }}</li>
      <li class="fb-apl tor-apl" style="display: none;"> Используйте {{ site.data.rotation.Felblade }}</li>
      <li class="fb-apl gt-apl" style="display: none;"> Используйте {{ site.data.rotation.Felblade }}</li>
        <ul>
         <li class="boon-apl dem-apl" style="display: none;"> Если прокнула лега.</li> 
         <li class="boon-apl dem-apl" style="display: none;"> I. Сливаем гнев до 60 способностью {{ site.data.rotation.Annihilation }}</li> 
         <li class="boon-apl dem-apl" style="display: none;"> II. Используйте {{ site.data.rotation.EyeBeam }}</li>
         <li class="boon-apl dem-apl" style="display: none;"> В случат повторного прока повторяем I и II пункт до тех пор пока {{ site.data.rotation.EyeBeam }} не уйдет на КД, после чего продолжайте выполнять Опенер</li>
        </ul> 
      <li class="bf-apl" style="display: none;"> Сливаем гнев до 60 способностью {{ site.data.rotation.Annihilation }}</li> 
      <li class="ih-apl fb-apl" style="display: none;"> Используйте {{ site.data.rotation.DemonsBite }} если меньше 30 единиц гнева.</li>
      <li class="gt-apl" style="display: none;"> Используйте {{ site.data.rotation.GlaiveTempest }}</li>
      <li class="fbald-apl" style="display: none;"> Используйте {{ site.data.rotation.DeathSweep }}</li>
      <li class="mom-apl" style="display: none;"> Используйте {{ site.data.rotation.VengefulRetreat }}</li>
      <li class="boon-apl dem-apl" style="display: none;"> Если длительность бафа меты составляет менее 9 секунд используйте {{ site.data.rotation.Metamorphosis }}</li>
      <li class="boon-apl mom-apl" style="display: none;"> Используйте {{ site.data.rotation.Metamorphosis }}</li>
      <li> Используйте {{ site.data.rotation.Metamorphosis }}</li>
        <ul>
          <li class="ag-apl vt-apl" style="display: none;"> Используйте метаморфозу в сторону от цели чтоб не обновить баф {{ site.data.rotation.SinfulBrand }}</li>
        </ul> 
      <li class="fbald-apl" style="display: none;"> Используйте {{ site.data.rotation.DeathSweep }}</li> 
      <li class="vt-apl ag-apl" style="display: none;"> Используйте {{ site.data.rotation.FelRush }} Если далеко от цели</li>
      <li>Используйте {{ site.data.rotation.EyeBeam }}</li>
      <li class="eb-apl" style="display: none;"> Используйте {{ site.data.rotation.EssenceBreak }}</li>
      <li class="mom-apl" style="display: none;"> Используйте {{ site.data.rotation.FelRush }}</li>
      <li class="fb-apl bf-apl" style="display: none;"> Используйте {{ site.data.rotation.Felblade }}</li>
    </ol>
</div>  
  </div>     
    </div>
<br>

### Список приоритетов:

<div class="tabs__content">
      <div class="tabs_in">
<div class="apl" style="max-width: 100%; text-align:justify;" markdown="0">
    <ol>
      <li> {{ site.data.rotation.Metamorphosis }} если до {{ site.data.rotation.EyeBeam }} больше 5 секунд</li>
      <li class="mom-apl tor-apl" style="display: none;"> {{ site.data.rotation.FelRush }}</li>
      <li class="mom-apl gt-apl" style="display: none;"> {{ site.data.rotation.FelRush }} </li>
      <li class="kyr-apl" style="display: none;"> {{ site.data.rotation.ElysianDecree }}</li>
      <li class="uh-apl" style="display: none;"> {{ site.data.rotation.FelRush }} если есть бафф {{ site.data.rotation.UnboundChaos }}</li>
      <li> {{ site.data.rotation.EyeBeam }}</li>
      <li class="nf-apl" style="display: none;"> {{ site.data.rotation.TheHunt }}</li>
      <li class="vt-apl" style="display: none;"> {{ site.data.rotation.SinfulBrand }}</li>
      <li class="eb-apl" style="display: none;"> {{ site.data.rotation.EssenceBreak }}</li>
      <li class="mom-apl" style="display: none;"> {{ site.data.rotation.VengefulRetreat }}</li>
      <li class="mom-apl" style="display: none;"> {{ site.data.rotation.FelRush }} </li>
      <li class="felb-apl" style="display: none;"> {{ site.data.rotation.FelBarrage }} </li>
      <li class="uh-apl" style="display: none;"> {{ site.data.rotation.ImmolationAura }}</li>
      <li class="fbald-apl" style="display: none;"> {{ site.data.rotation.DeathSweep }}</li> 
      <li class="gt-apl" style="display: none;"> {{ site.data.rotation.GlaiveTempest }}</li>
      <li class="fbald-apl" style="display: none;"> {{ site.data.rotation.BladeDance }}</li>
      <li class="fb-apl" style="display: none;"> {{ site.data.rotation.Felblade }} если у вас меньше 80 единиц гнева</li>
      <li> {{ site.data.rotation.Annihilation }} / {{ site.data.rotation.ChaosStrike }} </li>
      <li class="ih-apl" style="display: none;"> {{ site.data.rotation.DemonsBite }}</li>
      <li class="bh-apl" style="display: none;"> {{ site.data.rotation.DemonsBite }}</li>
      <li> {{ site.data.rotation.ThrowGlaive }}</li>
    </ol>
</div>  
  </div>     
    </div>
<br>


## Важные моменты

<div class="apl" style="max-width: 100%; text-align:justify;" markdown="0">
    <ol>
      <li class="be-apl" style="display: none;"> У Эльфов крови есть уникальная возможность начинать бой с гневом которого будет достаточно для применения {{ site.data.rotation.EyeBeam }}. не стоит игнорировать расовую способность {{ site.data.rotation.ArcaneTorrent }} как в опенере так и в дальнейшем бою</li>
<!-- /ВМ Терзающий взгляд Вентиры  -->      
      <li class="ag-apl vt-apl" style="display: none;"> Не задерживайте нажатие {{ site.data.rotation.EyeBeam }} если до отката {{ site.data.rotation.SinfulBrand }} больше 8 сек.</li>
      <li class="ag-apl vt-apl" style="display: none;"> Если {{ site.data.rotation.EyeBeam }} или {{ site.data.rotation.SinfulBrand }} восстановятся в течении 5 сек., стоит дождаться восстановления. </li>
      <li class="ag-apl vt-apl" style="display: none;"> Никогда не используйте повторно {{ site.data.rotation.SinfulBrand }} если она уже есть на цели и ее таймер больше 8 сек.</li>
<!-- /ВМ Терзающий взгляд Вентиры -->      
      <li class="fbald-apl" style="display: none;"> Если вы решили играть с талантом {{ site.data.rotation.FirstBlood }}, вам стоит взят проводник силы {{ site.data.rotation.DancingwithFate }}</li>
      <li class="uh-apl mom-apl" style="display: none;"> Не спешите использовать усиленный  {{ site.data.rotation.FelRush }} талантом {{ site.data.rotation.UnboundChaos }}, используйте его в комбинации с {{ site.data.rotation.Felblade }} или после окончания действия {{ site.data.rotation.ImmolationAura }}</li>
      <li class="nf-apl dem-apl" style="display: none;"> Используйте {{ site.data.rotation.TheHunt }}</li>
<!-- /Медальон -->  
      <li class="boon-apl dem-apl" style="display: none;"> Всегда отслеживайте оставшееся время баффа {{ site.data.rotation.Metamorphosis }}, потому длительность баффа будет перезаписана, то если у вас осталось 20 сек. баффа и вы нажмете {{ site.data.rotation.Metamorphosis }} вы получите 38 сек. баффа. Потому нудно всегда ее сдавать когда у баффа остается меньше 8 сек.</li>
<!-- /Медальон -->        
    </ol>
</div>

## Использование Импульса

{{ site.data.talent.Momentum }} - это талант, который требует особого внимания, чтобы правильно его реализовать. Основной игровой процесс включает в себя использование в паре {{ site.data.spell.Fel_Rush }} и {{ site.data.spell.Vengeful_Retreat }}, чтобы связать окна баффа урона вместе, для реализации максимальной выгоды от баффа на урон. Всё остальное время используется стандартная ротация. Есть несколько ключевых моментов для правильного использования этого таланта:
<ul>
<li> Прочтите "Правильное позиционирование" о котором написано ниже.</li>
<li> {{ site.data.spell.Vengeful_Retreat }} нужно всегда использовать по кулдауну. Можно сделать WeakAuras чтоб она вас предупреждала, когда способность готова к использованию.</li>
<li> Заряды {{ site.data.spell.Fel_Rush }} никогда не следует тратить просто так.</li>
<li> Вы всегда должны держать хотя бы один заряд {{ site.data.spell.Fel_Rush }} на перезарядке.</li>
</ul>

Как указано выше, остальная часть ротации Охотника на Демонов не изменится слишком сильно. Основные изменения заключаются в следующем:
<ul>
<li> Все ваши способности с временем восстановления должны использоваться когда действует бафф от {{ site.data.talent.Momentum }}. </li>
<li> Вы должны копить гнев, когда нет баффа от {{ site.data.talent.Momentum }}, а когда бафф от {{ site.data.talent.Momentum }} есть, вы должны тратить ваш запас гнева. </li>
</ul>  
  
## Оптимизация игры через Импульс
  
Если у вас взят талант {{ site.data.talent.Momentum }}, вы будете использовать {{ site.data.spell.Vengeful_Retreat }}. Следовательно, правильная игра за Охотника на Демонов Истребление требует от вас как планирования своего позиционирования, так и четкого контроля в отношении своего окружения.

### Правильное позиционирование

Поскольку выход из ближнего боя это неэффективно для нанесения урона, вы должны позиционировать себя так, чтобы минимизировать это как можно сильнее. При правильном позиционировании, вы можете избежать потери ГКД даже для целей с небольшим хитбоксом. Стойте с одного края хитбокса цели и двигайтесь прямо через него на другую сторону. Таким образом вы можете без особых усилий оставаться в пределах досягаемости цели на протяжении всего боя.

В бою с небольшими врагами, врагами с маленьким хитбоксом, не всегда получится оставаться в пределах его досягаемости. Вам понадобится практика, чтобы привыкнуть к хитбоксам цели и не терять ее с поля видимости надолго.

<ul>
<li>Для {{ site.data.spell.Fel_Rush }} используйте способность на максимальной дальности ближнего боя. После использования способности сразу возвращайтесь к цели, чтобы по окончании ГКД вы могли уже наносить цели урон. Вам нужно свести к минимуму время, проведенное за пределами зоны ближнего боя (и следовательно, потерянные автоатаки), поэтому не убегайте слишком далеко, если вам это не нужно.</li>
<li>Для {{ site.data.spell.Vengeful_Retreat }} с этой способностью все немного проще, так как вы будете использовать ее в паре с {{ site.data.spell.Fel_Rush }}. После использования {{ site.data.spell.Vengeful_Retreat }} используйте {{ site.data.spell.Fel_Rush }}, чтобы вернуться обратно к цели.</li>
</ul>

<p align="center" width="100%"> <img src="{{ site.url }}/assets/img/guide/havoc/impyls.jpg"> </p>

### Помните об опасности

Есть ли у цели конусные атаки? На земле рядом с вами огненная лужа? Вы на мосту или рядом с обрывом? Это все, о чем вы должны знать всегда. Иначе вы обнаружите, что умираете чаще, чем это, вероятно, должно быть. Это может вам показаться очевидным, но вы должны быть особенно осторожны, потому что они более опасны для вас, чем для любого другого наносящего урон персонажа.

Играя через импульс мы подвергаем себя большей опасности, т.к. может случится, что в нужный момент у нас будет рывок/отскок на КД.

<ul>
<li> Подумайте, в каких направлениях вы можете безопасно двигаться. Иногда такой способ не позволит вам нанести максимальный урон. Если слева от вас есть например стена из огня, возможно вы решите использовать {{ site.data.spell.Fel_Rush }} от лица босса за его спину, а не из стороны в сторону. </li>
<li> Планируйте и минимизируйте неудачные использования {{ site.data.spell.Fel_Rush }}. Использование {{ site.data.spell.Fel_Rush }} из стороны в сторону часто будет лучшим вариантом, но имейте в виду, что вместо этого легко случайно можете улететь вперед. Всегда стойте так, чтобы нападающий не убил вас, если это возможно. Используйте {{ site.data.spell.Fel_Rush }} лишь убедившись, что ваш персонаж смотрит в том направлении, в котором вы собрались использовать {{ site.data.spell.Fel_Rush }}, это значительно снизит вероятность того, что вы попадете в неожиданное место.</li>
</ul>

## Базовые способности

<ul>
<li>{{ site.data.spell.Metamorphosis }}: У вас должно быть как можно больше гнева, прежде использовать эту способность. Это очень мощный СТ и АоЕ кулдаун, заранее спланируйте в какую из фаз боя использование этой способности принесет максимальную выгоду, так как она находится на очень долгой перезарядке (4 минуты).</li>
<li>{{ site.data.spell.Demons_Bite }}: Наносит урон по одной цели и генерирует гнев.</li>
<li>{{ site.data.spell.Blade_Dance }}: Наносит урон ближайшим целям.</li>
<li>{{ site.data.spell.Chaos_Strike }}: Использует гнев и наносит урон одной цели, с 40% вероятностью восполнит 20 ед. гнева.</li>
<li>{{ site.data.spell.Eye_Beam }}: Использует гнев и наносит урон всем противникам перед вами. </li>
<li>{{ site.data.spell.Fel_Rush }}: Вы совершаете рывок вперед и наносите урон всем врагам на своем пути.</li>
<li>{{ site.data.spell.Immolation_Aura }}: Окутывает вас пламенем на 12 сек. нанося урон всем противникам в радиусе 8м.</li>
</ul>
	   
## Защитные способности

<ul>
<li>{{ site.data.spell.Blur }}: Снижает входящий урон на 20% и дает 50% уклонения, сильная защитная способность с небольшим кулдауном.</li>
<li>{{ site.data.spell.Darkness }}: У игроков в радиусе 8 местров есть шанс избежать всего урона от атак в течение 8 секунд. Очень хорошая защитная способность, наиболее эффективно используется при переодическом уроне по группе (АоЕ босса, АоЕ кливы босса), чтобы получить от нее максимальный эффект.</li>
</ul>

## Вспомогательные способности

<ul>
<li>{{ site.data.spell.Imprison }}: Контроль, который действует на демона, животное или гуманоида в течение одной минуты.</li>
<li>{{ site.data.spell.Disrupt }}: Способность прерывает использование заклинаний врагов. Вы должны использовать ее по возможности, так как она генерирует 30 ед. гнева при каждом успешном прерывании.</li>
<li>{{ site.data.spell.Chaos_Nova }}: Оглушает ближайшие цели на 2 сек.</li>
<li>{{ site.data.spell.Vengeful_Retreat }}: Вы освобождаетесь от эффектов замедления и отпрыгиваете назад. Находящиеся рядом противники получают небольшой урон и замедляются на 70% на 3 сек.</li>
<li>{{ site.data.spell.Consume_Magic }}: Поглощает 1 магический эффект у вашей цели и дает вам 20 гнева.</li>
</ul>

## Пассивные способности

<ul>
<li>{{ site.data.spell.masterydh }}: Увеличивает наносимый урон от магии Хаоса и Скорость передвижения в зависимости от вашего рейтинга Искусности.</li>
<li>{{ site.data.spell.Chaos_Brand }}: Увеличивает весь получаемый магический целью урон на 5%.</li>
<li>{{ site.data.spell.Double_Jump }}: Вы можете совершать двойной прыжок.</li>
</ul>

<hr>

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/havoc/beginners.html">Назад:<br>Новичкам</a></div> 
<div class="minibox"><a href="{{ site.url }}/guide/havoc/stats.html">Далее:<br>Характеристики</a></div>

<br>

<script>
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
function listeners() {
    let inputs = document.getElementsByTagName("input");
    for (let i of inputs) {
        if (i.type == "radio") {
            change_listener(i);
            i.dispatchEvent(new Event("change"));
        }
    }
}

function pick_talents(talents) {
    talents.forEach(function(talent) {
        let input = document.getElementById(talent + "-radio");
        input.checked = true;
        input.dispatchEvent(new Event("change"));
    });
}

function change_listener(element) {
    element.addEventListener("change", function(e) {
        let siblings = document.getElementsByName(e.target.name);

        for (let radio of siblings) {
            if (radio.checked == true) {
                $("td#rotation_switch_" + radio.id.split('-')[0]).addClass("talent-active");
            } else {
                $("td#rotation_switch_" + radio.id.split('-')[0]).removeClass("talent-active");
            }
            let apl_elems = document.querySelectorAll("." + radio.id.split('-')[0] + "-apl, " + ".no-" + radio.id.split('-')[0] + "-apl");

            for (let item of apl_elems) {
                if (radio.checked == true) {
                    item.classList.remove("no-" + radio.id.split('-')[0] + "-apl");
                    item.classList.add(radio.id.split('-')[0] + "-apl");
                    item.style.display = "list-item";

                    for (let className of item.classList) {
                        if (className.includes("no-")) {
                            item.style.display = "none";
                            break;
                        }
                    }
                } else {
                    item.classList.remove(radio.id.split('-')[0] + "-apl");
                    item.classList.add("no-" + radio.id.split('-')[0] + "-apl");
                    item.style.display = "none";
                }
            }
        }

        if ($(this).is("input[covenant][name='legendaries']")) {
            let item = $("input[covenant='" + $(this).attr('covenant') + "'][name='covenants']")[0];
            if (this.checked && !item.checked) {
                item.checked = true;
                item.dispatchEvent(new Event("change"));
            }
        }
    });
}

listeners();

$('.switch-link').on('click touchend', function(e) {
    this.parentNode.click();
    e.stopPropagation();
    e.preventDefault();
});

$('a#rana_eb_mom').on('click', function(e) {
    pick_talents(["fb", "db", "uh", "nether", "eb", "fele", "mom", "bw"]);
    return false;
});

$('a#rana_eb_meme').on('click', function(e) {
    pick_talents(["fb", "db", "gt", "nether", "fbald", "fele", "dem", "bw"]);
    return false;
});

$('a#agony_demo').on('click', function(e) {
    pick_talents(["bf", "ih", "uh", "nether", "coh", "fele", "dem", "ag"]);
    return false;
});

$('a#boon_demo').on('click', function(e) {
    pick_talents(["bf", "ih", "uh", "nether", "coh", "fele", "dem", "boon"]);
    return false;
});

$('a#blazing_mom').on('click', function(e) {
    pick_talents(["fb", "db", "uh", "nether", "eb", "fele", "mom", "blazing"]);
    return false;
});

$('a#ca_mom_eb').on('click', function(e) {
    pick_talents(["fb", "db", "uh", "nether", "eb", "fele", "mom", "ca"]);
    return false;
});

$('a#ct_dem_fb').on('click', function(e) {
    pick_talents(["fb", "db", "uh", "nether", "fbald", "fele", "dem", "ct"]);
    return false;
});


</script>