var defaultPlayerName = 'Baabulaal';

var adjectives = ["Jugaadu","Namoona","Dhakkan","Bindaas","Desi","Masaledar","Fatafati", "Shandaar",
    "Ghanchakkar","Jhakaas", "Chakachak","Pataka","Bakwas","Jhakkas","Dhinchak","Fuddu","ChappanTikli","Gaunthhi","Gawaar",
    "Hatke","Item","Mast","Nautanki","Paisa Vasool","Rapchik","Sasta","Thanda","Vella","Yaarana","Zabardast",
];
var nouns = ["Chaiwala","Bhelpuri","Dabbawala","Babu","Yogini","Raja","Rani","Sanyasi","Bhasam",
    "Auto-wallah","Noobda","Samosa","Guru","Yogi","Pandit","Sadhu","Neta","Suwar","Kurta",
    "Budbak","Bindi","Bangali","Lassi","Normie","Chutney","Takla","Gendaa","Saand","Bhains",
    "Baba",
];

function randomNoun(generator){
    generator = generator || Math.random;

    return nouns[Math.floor(generator()*nouns.length)];
}

function randomAdjective(generator){
    generator = generator || Math.random;

    return adjectives[Math.floor(generator()*adjectives.length)];
}

function desiNames(){
    var noun1 = randomNoun();
    var noun2 = randomNoun();
    noun2 = noun2.substring(0, 1).toUpperCase() + noun2.substring(1);
    var adjective = randomAdjective();
    return adjective + noun1 + ' ' + noun2;
}

module.exports = desiNames;
module.exports.randomNoun = randomNoun;
module.exports.randomAdjective = randomAdjective;