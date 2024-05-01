const skill1Level = prompt('What\'s your level of html?');
const skill2Level = prompt('What\'s your level of css?');
const skill3Level = prompt('What\'s your level of JavaScript?');

const updateSkill = (id, level) => {
  document.querySelector(`#${id} .skill__value`).textContent = `${level} / 100`;
  document.querySelector(`#${id} .skill__progress`).style.width = `${level}%`;
}

updateSkill('skill1', skill1Level)
updateSkill('skill2', skill2Level)
updateSkill('skill3', skill3Level)
