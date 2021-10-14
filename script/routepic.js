const affixes = [
  {
    name: "tyranical",
    href: "{% include Tyrannical-Bolstering-Necrotic.html %}"
  },
  {
    name: "bolstering",
    href: "{% include Tyrannical-Bolstering-Necrotic.html %}"
  },
  { name: "kekw", href: "{% include Tyrannical-Bolstering-Necrotic.html %}" },
  { name: "radryga", href: "{% include Tyrannical-Bolstering-Necrotic.html %}" }
];

const firstAffixStartDate = new Date("2021-04-21");
// Тут можно тестисть, вставляя разные даты в виде  YYYY-MM-DD, например
// const currentDate = new Date("2021-04-28");
const currentDate = new Date();
const diffTime = Math.abs(currentDate - firstAffixStartDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const diffInWeeks = Math.floor(diffDays / 7);
const affixeIndex = diffInWeeks % affixes.length;

console.log(
  "Affix for",
  currentDate.toUTCString(),
  "is",
  affixes[affixeIndex].name
);

document.querySelector("#affixes").innerHTML = affixes[affixeIndex].href;
