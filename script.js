// ALMACENAMOS EN VARIABLES

// INPUT CONTAINER (FORM)
const inputContainer = document.querySelector(".input-container");

// INPUT
const input = document.querySelector("#agent-name");

// CONTAINER DE NOMBRE Y DESCRIPCION
const nameDescContainer = document.querySelector(".agent-name-desc-container");

// CONTAINER DE NOMBRE DE HABILIDAD Y DESCRIPCION DE HABILIDAD
const abilityDescContainer = document.querySelector(
  ".agent-ability-desc-container"
);

// CONTAINER DE SELECTOR DE HABILIDAD
const abilitySelectorContainer = document.querySelector(
  ".agent-ability-changer-container"
);

// CONTAINER DE RETRATO
const agentPortrairContainer = document.querySelector(
  ".web-agent-img-container"
);

async function searchAgent(e) {
  e.preventDefault();
  agentData = await response();
  agentSelected = await agentData.find(
    (item) => input.value === item.displayName
  );
  agentAbilities = agentSelected.abilities;
  abilityIcon = agentAbilities.map((item) => item.displayIcon);
  abilityDesc = agentAbilities.map((item) => item.displayIcon);

  nameDescContainer.innerHTML = agentTemplateNameAndDesc(agentSelected);
  abilityDescContainer.innerHTML = agentTemplateAbilitieAndDesc(agentAbilities);
  abilitySelectorContainer.innerHTML =
    agentTemplateAbilitySelector(abilityIcon);
  agentPortrairContainer.innerHTML = agentTemplatePortrait(agentSelected);
}

function agentTemplateNameAndDesc(data) {
  const { displayName, description } = data;

  return `
    <!-- NOMBRE DE PERSONAJE -->
    <h3>${displayName}</h3>

    <!-- DESCRIPCION DE PERSONAJE -->
    <p>
      “${description}”
    </p>
    `;
}

function agentTemplateAbilitieAndDesc(data) {
  abilityName = data.map((item) => item.displayName);
  abilityDesc = data.map((item) => item.description);

  console.log(abilityName);

  return `
    <!-- NOMBRE DE HABILIDAD DE PERSONAJE -->
    <h3>${abilityName[0]}</h3>

    <!-- DESCRIPCION DE HABILIDAD DE PERSONAJE -->
    <p>
      ${abilityDesc[0]}
    </p>
  `;
}

function agentTemplateAbilitySelector(data) {
  return `
    <!-- CONTAINER DE HABILIDAD 1 -->
    <div class="agent-ability-1 ability">

      <!-- IMAGEN DE HABILIDAD -->
      <img src=${data[0]} alt="" data-id="Ability1">

    </div>

    <!-- CONTAINER DE HABILIDAD 2 -->
    <div class="agent-ability-2 ability">

      <!-- IMAGEN DE HABILIDAD -->
      <img src=${data[1]} alt="" data-id="Ability2">

    </div>

    <!-- CONTAINER DE HABILIDAD 3 (GRANADA) -->
    <div class="agent-ability-3 ability">

      <!-- IMAGEN DE HABILIDAD -->
      <img src=${data[2]} alt="" data-id="Grenade">

    </div>

    <!-- CONTAINER DE HABILIDAD 4 (ULTIMATE) -->
    <div class="agent-ability-4 ability">

      <!-- IMAGEN DE HABILIDAD -->
      <img src=${data[3]} alt="" data-id="Ultimate">

    </div>
  `;
}

function agentTemplatePortrait(data) {
  const { fullPortrait, displayName } = data;

  return `
    <!-- TEXTO DE FONDO DE LA IMAGEN -->
    <div class="agent-img" style="background-image: url(${fullPortrait});"></div>
    <p>${displayName}</p>
  `;
}

function abilitySelected() {}

function init() {
  inputContainer.addEventListener("submit", searchAgent);
  abilitySelectorContainer.addEventListener("click", abilitySelected);
}

init();
