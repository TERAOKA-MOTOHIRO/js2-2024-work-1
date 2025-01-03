// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

const existingApp = document.querySelector('#app');
if (existingApp) {
    existingApp.remove();
}
//デフォルトページの無効化

// Create and append HTML structure dynamically
const app = document.createElement('div');
app.id = '#app';
document.body.appendChild(app);

app.innerHTML = `
    <div class="header">
        <img src="LoLTITLE1.webp" alt="League of Legends" class="logo-img" />
    </div>
    <h1>League of Legends Team Randomizer</h1>
    <div class="role-container">
        <div class="role" id="top">
            <h2>Top</h2>
            <button id="top-button">Pick Champion</button>
            <p id="top-champion">Champion: None</p>
            <p id="top-spell">Spell: None</p>
        </div>
        <div class="role" id="jungle">
            <h2>Jungle</h2>
            <button id="jungle-button">Pick Champion</button>
            <p id="jungle-champion">Champion: None</p>
            <p id="jungle-spell">Spell: None</p>
        </div>
        <div class="role" id="mid">
            <h2>Mid</h2>
            <button id="mid-button">Pick Champion</button>
            <p id="mid-champion">Champion: None</p>
            <p id="mid-spell">Spell: None</p>
        </div>
        <div class="role" id="adc">
            <h2>ADC</h2>
            <button id="adc-button">Pick Champion</button>
            <p id="adc-champion">Champion: None</p>
            <p id="adc-spell">Spell: None</p>
        </div>
        <div class="role" id="support">
            <h2>Support</h2>
            <button id="support-button">Pick Champion</button>
            <p id="support-champion">Champion: None</p>
            <p id="support-spell">Spell: None</p>
        </div>
    </div>
    <div class="reset-container">
      <button id="reset-button" class="reset">Reset</button>
    </div>
`;

// Add styles dynamically
const style = document.createElement('style');
style.textContent = `
    .header {
        display: flex;
        justify-content: center; /* 中央揃え */
        align-items: center; /* 垂直方向にも中央揃え */
        margin-bottom: 20px; /* タイトルとの間隔を調整 */
    }
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f4f4f9;
    }

    #app {
        text-align: center;
        background: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .logo-img {
        width: 600px; /* 画像の幅を指定、適宜変更 */
        height: auto; /* 高さは自動で調整 */

    }

    h1 {
        color: #333;
        text-align: center;
    }

    .role-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;
    }

    .role {
        background: #f9f9fc;
        padding: 15px;
        border-radius: 8px;
        width: 200px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    .role h2 {
        color: #444;
        font-size: 1.2em;
        margin-bottom: 10px;
    }

    button {
        padding: 10px 15px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }

    .reset {
        padding: 10px 15px;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .reset-container {
        display: flex;
        justify-content: center; /* ボタンを中央揃え */
        margin-top: 20px; /* 上の要素との間隔を調整 */
    }

    .reset:hover {
        background-color: #a71d2a;
    }

    p {
        margin: 10px 0;
        font-size: 0.9em;
        color: #555;
    }
`;
document.head.appendChild(style);

// Sample data for champions and summoner spells
const champions = {
    top: ["Garen", "Darius", "Shen"],
    jungle: ["Lee Sin", "Evelynn", "Amumu"],
    mid: ["Ahri", "Zed", "LeBlanc"],
    adc: ["Ashe", "Jinx", "Kai'Sa"],
    support: ["Thresh", "Lulu", "Nami"]
};

const summonerSpells = ["Flash", "Ignite", "Exhaust", "Heal", "Teleport", "Barrier", "Smite", "Cleanse", "Ghost"];

// Function to pick a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to pick a champion and summoner spell for a role
function pickChampion(role) {
    const champion = getRandomItem(champions[role]);
    const spell = getRandomItem(summonerSpells);

    document.getElementById(`${role}-champion`).textContent = `Champion: ${champion}`;
    document.getElementById(`${role}-spell`).textContent = `Spell: ${spell}`;
}

// Function to reset all picks
function resetPicks() {
    const roles = ["top", "jungle", "mid", "adc", "support"];
    roles.forEach(role => {
        document.getElementById(`${role}-champion`).textContent = "Champion: None";
        document.getElementById(`${role}-spell`).textContent = "Spell: None";
    });
}

// Add event listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('top-button').addEventListener('click', () => pickChampion('top'));
    document.getElementById('jungle-button').addEventListener('click', () => pickChampion('jungle'));
    document.getElementById('mid-button').addEventListener('click', () => pickChampion('mid'));
    document.getElementById('adc-button').addEventListener('click', () => pickChampion('adc'));
    document.getElementById('support-button').addEventListener('click', () => pickChampion('support'));

    // Reset button listener
    document.getElementById('reset-button').addEventListener('click', resetPicks);
});

// setupCounter(document.querySelector('#counter'))
