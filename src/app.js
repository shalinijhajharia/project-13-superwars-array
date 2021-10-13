const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    players.map((player,i) => {
        let detail={};
        detail["name"]=player;
        detail["strength"]=getRandomStrength();
        detail["image"]= "images/super-"+(i+1)+".png";
        detail["type"]=getRandomStrength()>50?"hero":"villain";
        detailedPlayers.push(detail);
    });

    // Instead of forloop use Map method
    // Code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    players.filter(player=>{
        return player.type===type;
    }).map((player,i) =>{
        
        fragment=fragment+`<div class="player"><img src="${player.image}" alt=""><div class="name">${player.name}</div><div class="strength">${player.strength}</div></div>`;
    });

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}