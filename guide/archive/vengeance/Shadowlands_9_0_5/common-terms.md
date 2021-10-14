---
layout: page
title: Обзор
description: ДХ Месть 9.0.5 PvE гайд Shadowlands
last_update: 2020-03-22 09:00:00
game_version: 9.0.5 Shadowlands
author: Rodriguezz
toc: true
---

<div id="smooth-nav-outer">
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/quick_faq.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Кратко и Быстро</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/overview.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_misc_spyglass_02.jpg"> Обзор</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/beginners.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_lifegivingseed.jpg"> Новичкам</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/talent-builds.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg"> Таланты и Билды</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/rotation-priority.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ротация</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/stats.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_inscription_80_warscroll_intellect.jpg"> Характеристики</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/gear.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_chest_chain_03.jpg"> Бис лист</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/covenant.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/wow_token01.jpg"> Ковенанты</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/consumables.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_potion_92.jpg"> Расходники</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/macros-addons.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/inv_eng_gearspringparts.jpg"> Макросы и Аддоны</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/weakauras.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg"> WeakAuras</a>
<a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/common-terms.html"><img src="https://wow.zamimg.com/images/wow/icons/medium/ui_chat.jpg"><span style="color: white;"> Сокращения</span></a>
</div>
<br>
## Общие сокращения

|Havoc, Хавок| Охотник на Демонов в специализации «Истребление».|
|Vengeance, Veng, VDH, ВДХ| Охотник на Демонов в специализации «Месть».|
|DPS, ДПС| Damage per Second, Урон в секунду.|
|HPS, ХПС| Healing per Second, Лечение в секунду.|
|AoE| Area of Effect, урон по области. Заклинания с уроном по области, например {{ site.data.spell.Immolation_Aura }}, а также бой против множества целей.|
|ST, Single Target, Соло цель, СТ | бой против одной цели.|
|Cleave, Клив| обычно применяется в контексте боя против 2–3 рядом стоящих целей, а также заклинания с таким действием.|
|Funneling| Клив разрозненных целей, бой с несколькими разрозненными целями.|
|Spread, Спред| рассредоточенность по области.|
|СС, Crowd Control, Контроль| заклинания и способности, которые лишают цели способности действовать, двигаться или как-либо участвовать в бою, например {{ site.data.spell.Imprison }}.|
|Opener, Опенер| порядок использования способностей на первых секундах боя, открывающая ротация.|
|Diminishing Returns, Диминишинг| прогрессивное снижение эффективности какого–либо параметра. Может применяться как к контролю, так и к характеристикам.|
|Stats, Статы| Характеристики.|
|Haste, Хаст| Скорость.|
|Vers, Верса| Универсальность.|
|Crit, Крит| Критический удар.|
|Mastery, Мастери| Искусность.|
|Spell Power, SP, SPD, СП, СПД| Сила заклинаний.|
|Cap, Кап| Максимальное значение определенного параметра.|
|BiS, БиС| Лучшая вещь, какую можно надеть в данный слот.|
|CD, КД| Время восстановления.|
|GCD, ГКД| Общее время восстановления, вызываемое почти всеми способностями.|
|HP, ХП| Уровень здоровья.|
|DoT, Дот| Damage over Time – Способность, наносящая урон в течение времени.|
|HoT, Хот| Healing over Time – Способность, восстанавливающая здоровье в течение времени.|
|Cast, Каст| заклинание, процесс чтения, применения заклинания.|
|Interrupt, Интерапт, кик| прерывание заклинания, например {{ site.data.spell.Disrupt }}.|
|Smart Heal, Смарт Хил| АоЕ заклинания лечения, которые в первую очередь выбирают наиболее раненых союзников.|
|Alt, Альт| второй (третий, четвёртый) и не основной персонаж.|
|LFG, ЛФГ| Looking for Group - Инструмент в игре, используемый для поиска групп.|
|LFR, ЛФР| Looking for Raid - Самая легкая в игре сложность рейдов, группы случайным образом собираются в очередь и автоматически формируют рейд.|

## Сокращения способностей специализации Месть

### Основные способности

<table style="width:65%;">
  <tr>
    <td>Шипы, Спайки</td>
    <td>{{ site.data.spell.Demon_Spikes }}</td>
  </tr>
  <tr>
    <td>Клеймо</td>
    <td>{{ site.data.spell.Fiery_Brand }}</td>
  </tr>
  <tr>
    <td>Прыжок, ИС</td>
    <td>{{ site.data.spell.Infernal_Strike }}</td>
  </tr>
  <tr>
    <td>Девастейшн, Сварка</td>
    <td>{{ site.data.spell.Fel_Devastation }}</td>
  </tr>
  <tr>
    <td>Аура, Жар</td>
    <td>{{ site.data.spell.Immolation_Aura }}</td>
  </tr>
  <tr>
    <td>Мета</td>
    <td>{{ site.data.spell.MetamorphosisVDH }}</td>
  </tr>
  <tr>
    <td>Цепи, Грип,<br> Стяжка</td>
    <td>{{ site.data.spell.Sigil_of_Chains }}</td>
  </tr>
  <tr>
    <td>Фир</td>
    <td>{{ site.data.spell.Sigil_of_Misery }}</td>
  </tr>
  <tr>
    <td>Сало, Сайленс</td>
    <td>{{ site.data.spell.Sigil_of_Silence }}</td>
  </tr>
  <tr>
    <td>Клив, СК</td>
    <td>{{ site.data.spell.Soul_Cleave }}</td>
  </tr>
  <tr>
    <td>Глефа</td>
    <td>{{ site.data.spell.Throw_Glaive }}</td>
  </tr>
  <tr>
    <td>Шир</td>
    <td>{{ site.data.spell.Shear }}</td>
  </tr>
</table>

### Основные таланты
<table style="width:65%;">
  <tr>
    <td>АС</td>
    <td>{{ site.data.talent.Abyssal_Strike }}</td>
  </tr>
  <tr>
    <td>ПБ</td>
    <td>{{ site.data.talent.Agonizing_Flames }}</td>
  </tr>
  <tr>
    <td>Пиршество</td>
    <td>{{ site.data.talent.Feast_of_Souls }}</td>
  </tr>
  <tr>
    <td>БА</td>
    <td>{{ site.data.talent.Burning_Alive }}</td>
  </tr>
  <tr>
    <td>ИА </td>
    <td>{{ site.data.talent.Infernal_Armor }}</td>
  </tr>
  <tr>
    <td>ЦФ</td>
    <td>{{ site.data.talent.Charred_Flesh }}</td>
  </tr>
  <tr>
    <td>Бомба, СБ</td>
    <td>{{ site.data.talent.Spirit_Bomb }}</td>
  </tr>
  <tr>
    <td>Сосредоточие, СП</td>
    <td>{{ site.data.talent.Concentrated_Sigils }}</td>
  </tr>
    <tr>
    <td>УП</td>
    <td>{{ site.data.talent.Quickened_Sigils }}</td>
  </tr>
    <tr>
    <td>Страж, ВР</td>
    <td>{{ site.data.talent.Void_Reaver }}</td>
  </tr>
    <tr>
    <td>Барьер</td>
    <td>{{ site.data.talent.Soul_Barrier }}</td>
  </tr>
    <tr>
    <td>ЧД, Читдес</td>
    <td>{{ site.data.talent.Concentrated_Sigils }}</td>
  </tr>
    <tr>
    <td>Бастион</td>
    <td>{{ site.data.talent.Ruinous_Bulwark }}</td>
  </tr>
   <tr>
    <td>БЕ</td>
    <td>{{ site.data.talent.Bulk_Extraction }}</td>
  </tr>
</table>

<div class="minibox minibox-left"><a href="{{ site.url }}/guide/archive/vengeance/Shadowlands_9_0_5/weakauras.html">Назад:<br>WeakAuras</a></div> 
<div class="minibox"><a href="{{ site.url }}/patreon/thanks.html">Далее:<br>Авторы и благодарности</a></div>