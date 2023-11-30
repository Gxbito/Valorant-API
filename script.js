// ALMACENAMOS EN VARIABLES

// INPUT CONTAINER (FORM)
const inputContainer = document.querySelector(".input-container");

// INPUT
const input = document.querySelector("#agent-name");

// CONTAINER DE TODA LA INFO DE AGENTE
const infoContainer = document.querySelector(".web-agent-content-container");

async function searchAgent(e) {
  e.preventDefault();
  agentData = await response();
  agentSelected = await agentData.find(
    (item) => input.value === item.displayName
  );
//   abilitySelected = agentSelected.trim("");
  console.log(agentSelected)
  agentTemplate(agentSelected);
  // infoContainer.innerHTML = agentTemplate(agentSelected)
}

function agentTemplate(data) {
    const {displayName, fullPortrait, } = data

    console.log(data)
    return `
    <!-- CONTAINER DEL LADO IZQUIERDO (PC) O LADO DE ABAJO(MOVIL) -->
          <div class="web-agent-info-container">
            <!-- CONTAINER DE DATOS DE PERSONAJE -->
            <div class="agent-text-container">
  
            <!-- CONTAINER DE NOMBRE Y DESCRIPCION DE PERSONAJE -->
            <div class="agent-name-desc-container">
  
            <!-- NOMBRE DE PERSONAJE -->
            <h3></h3>
  
            <!-- DESCRIPCION DE PERSONAJE -->
            <p>
                              “The bionic Swede Breach fires powerful, targeted kinetic blasts to aggressively clear a
                              path
                              through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.”
              </p>
  
            <!-- </div> -->
  
            <!-- CONTAINER DE NOMBRE Y DESCRIPCION DE HABILIDAD DE PERSONAJE -->
            <div class="agent-ability-desc-container">
  
            <!-- NOMBRE DE HABILIDAD DE PERSONAJE -->
            <h3>FLASHPOINT</h3>
  
            <!-- DESCRIPCION DE HABILIDAD DE PERSONAJE -->
            <p>
                              EQUIP a Blinding charge. FIRE the charge to set a fast-acting burst through the wall. The
                              charge
                              detonates to Blind all players looking at it.
                          </p>
  
            </div>
  
            </div>
  
            <!-- CONTAINER DE CAMBIADOR DE HABILIDADES DE PERSONAJE (SE CAMBIA CON UN CLICK EN CADA ICONO) -->
            <div class="agent-ability-changer-container">
  
            <!-- CONTAINER DE HABILIDAD 1 -->
            <div class="agent-ability-1 ability">
  
            <!-- IMAGEN DE HABILIDAD -->
            <img src="/img/Ability-1-icon.svg" alt="">
  
            </div>
  
            <!-- CONTAINER DE HABILIDAD 2 -->
            <div class="agent-ability-2 ability">
  
            <!-- IMAGEN DE HABILIDAD -->
            <img src="/img/Ability-2-icon.svg" alt="">
  
            </div>
  
            <!-- CONTAINER DE HABILIDAD 3 (GRANADA) -->
            <div class="agent-ability-3 ability">
  
            <!-- IMAGEN DE HABILIDAD -->
            <img src="/img/Grenade-icon.svg" alt="">
  
            </div>
  
            <!-- CONTAINER DE HABILIDAD 4 (ULTIMATE) -->
            <div class="agent-ability-4 ability">
  
            <!-- IMAGEN DE HABILIDAD -->
            <img src="/img/Ultimate-icon.svg" alt="">
  
            </div>
            </div>
          </div>
  
          <!-- CONTAINER DE LADO DERECHO (PC) O LADO DE ABAJO (MOVIL) -->
          <div class="web-agent-img-container">
  
          <!-- IMAGEN DE PERSONAJE -->
          <div class="agent-img"></div>
  
          <!-- TEXTO DE FONDO DE LA IMAGEN -->
          <p>BREACH</p>
  
          </div>
    `;

}

function init() {
  inputContainer.addEventListener("submit", searchAgent);
}

init();
