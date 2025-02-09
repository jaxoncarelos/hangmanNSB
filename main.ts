const args = discord.variables.__args[0];

if (args === undefined) {
    return console.log("please provide an initial character")
}
const words = [["elephant", "big animal"], ["giraffe", "tall animal"], ["kangaroo", "animal with a pouch"], ["tiger", "striped animal"], ["crocodile", "reptile"], ["rhinoceros", "animal with a horn"], ["dolphin", "aquatic mammal"], ["cheetah", "fast animal"], ["penguin", "flightless bird"], ["zebra", "striped horse-like animal"], ["avocado", "green fruit"], ["watermelon", "juicy fruit"], ["pomegranate", "red seeded fruit"], ["cheeseburger", "fast food"], ["croissant", "pastry"], ["sushi", "japanese food"], ["pineapple", "tropical fruit"], ["cucumber", "vegetable"], ["spaghetti", "pasta"], ["pancake", "breakfast food"], ["mountain", "natural elevation"], ["volcano", "lava eruption"], ["avalanche", "snowfall disaster"], ["desert", "dry area"], ["ocean", "large body of water"], ["waterfall", "flowing water"], ["forest", "wooded area"], ["thunderstorm", "storm with lightning"], ["computer", "electronic device"], ["laptop", "portable computer"], ["software", "computer program"], ["science", "study of nature"], ["programming", "writing code"], ["technology", "modern devices"], ["algorithm", "problem solving steps"], ["java", "programming language"], ["android", "mobile operating system"], ["blockchain", "digital ledger"], ["library", "book collection"], ["restaurant", "place to eat"], ["museum", "place for exhibits"], ["park", "outdoor space"], ["beach", "coastal area"], ["city", "urban area"], ["island", "land surrounded by water"], ["skyscraper", "tall building"], ["village", "small settlement"], ["football", "team sport"], ["basketball", "court sport"], ["tennis", "racket sport"], ["baseball", "bat and ball sport"], ["soccer", "football in some countries"], ["golf", "club and ball sport"], ["volleyball", "team sport played with a net"], ["cricket", "bat and ball sport"], ["hockey", "ice or field sport"], ["rugby", "contact sport"], ["butterfly", "insect"], ["alligator", "reptile"], ["eagle", "bird of prey"], ["platypus", "egg-laying mammal"], ["wolverine", "fierce animal"], ["panda", "bear-like animal"], ["horse", "equine animal"], ["camel", "desert animal"], ["hummingbird", "small bird"], ["peacock", "colorful bird"], ["koala", "australian mammal"], ["ostrich", "large bird"], ["coyote", "wild dog"], ["pangolin", "scaly mammal"], ["sparrow", "small bird"], ["dromedary", "single-humped camel"], ["bat", "flying mammal"], ["octopus", "sea creature"], ["swordfish", "fish with long bill"], ["parrot", "colorful bird"], ["shark", "predatory fish"], ["rabbit", "hopping mammal"], ["scorpion", "arachnid"], ["tortoise", "slow reptile"], ["turtle", "water-dwelling reptile"], ["chameleon", "color-changing lizard"], ["mammoth", "extinct elephant-like animal"], ["flamingo", "pink bird"], ["sloth", "slow mammal"], ["jellyfish", "marine animal"], ["squid", "marine mollusk"], ["whale", "large marine mammal"], ["dinosaur", "extinct reptile"], ["lobster", "marine crustacean"], ["seahorse", "small marine animal"], ["mole", "underground mammal"], ["raccoon", "masked animal"], ["swan", "graceful waterfowl"], ["crow", "black bird"], ["lynx", "wild cat"], ["badger", "burrowing animal"], ["otter", "aquatic mammal"], ["leopard", "spotted big cat"], ["monkey", "primate"], ["llama", "south american animal"], ["aardvark", "night-dwelling mammal"], ["bison", "large grazing mammal"], ["polarbear", "arctic mammal"], ["gorilla", "large primate"], ["baboon", "primate with red rear"], ["caterpillar", "larval stage of insect"], ["dragonfly", "insect with long wings"], ["ladybug", "small red insect"], ["grasshopper", "jumping insect"], ["beetle", "hard-shelled insect"], ["moth", "nocturnal insect"], ["spider", "eight-legged arachnid"], ["firefly", "bioluminescent insect"], ["ant", "small insect"], ["mosquito", "biting insect"], ["fly", "flying insect"], ["tick", "bloodsucking insect"], ["hornet", "aggressive wasp"], ["wasp", "flying insect"], ["mantis", "predatory insect"], ["millipede", "many-legged insect"], ["centipede", "hundred-legged insect"], ["scorpion", "poisonous arachnid"], ["cloud", "sky phenomenon"], ["rain", "precipitation"], ["sunshine", "bright weather"], ["snow", "frozen precipitation"], ["hail", "frozen rain"], ["wind", "moving air"], ["fog", "low visibility"], ["tornado", "cyclonic wind"], ["earthquake", "ground tremor"], ["lightning", "electric discharge"], ["thunder", "sound from lightning"], ["flood", "overflow of water"], ["fire", "hot, burning phenomenon"], ["landslide", "soil and rock movement"], ["hurricane", "powerful storm"], ["meteor", "space rock"], ["star", "shining celestial body"], ["planet", "orbital celestial body"], ["moon", "earth's satellite"], ["comet", "space ice ball"], ["astronaut", "space explorer"], ["spacecraft", "vehicle for space travel"], ["satellite", "orbiting object"], ["galaxy", "group of stars"], ["universe", "all of space"], ["gravity", "attraction force"], ["blackhole", "singularity in space"], ["lightyear", "distance light travels in a year"], ["solarsystem", "our system of planets"], ["astronomy", "study of celestial bodies"], ["physics", "study of matter and energy"], ["chemistry", "study of matter and reactions"], ["biology", "study of living organisms"], ["geology", "study of earth"], ["math", "study of numbers and shapes"], ["history", "study of past events"], ["geography", "study of earth's features"], ["literature", "written works"], ["music", "art of sound"], ["art", "creative expression"], ["philosophy", "study of existence and knowledge"], ["economics", "study of resources and wealth"], ["psychology", "study of the mind"], ["sociology", "study of society"], ["law", "system of rules"], ["medicine", "science of healing"], ["nursing", "caregiving profession"], ["surgery", "medical operation"], ["dentistry", "study of teeth"], ["veterinary", "animal medicine"], ["pharmacy", "study of drugs"], ["healthcare", "system for medical care"], ["therapy", "treatment for health issues"], ["diagnosis", "identification of disease"], ["treatment", "medical intervention"], ["doctor", "medical professional"], ["nurse", "caregiver in healthcare"], ["patient", "person receiving care"], ["hospital", "place for medical care"], ["clinic", "smaller medical facility"], ["prescription", "doctor's medicine order"], ["medication", "medicine for treatment"], ["treatment", "medical care for disease"]];

function selectrandomword() {
    const randomindex = Math.floor(Math.random() * words.length);
    return words[randomindex];
}
if (args.length == 1 && discord.storage.channel.isGameOn !== true) {
    console.log("inside")
    const randomword = selectrandomword();
    discord.storage.channel.wordSelect = randomword[0];
    discord.storage.channel.hint = randomword[1];
    discord.storage.channel.isGameOn = true;
    discord.storage.channel.errors = 0;
    discord.storage.channel.guesses = [];
}
const hangmanStages = [`\n ------\n |    |\n      |\n      |\n      |\n      |\n      |\n---------\n`, `\n ------\n |    |\n O    |\n      |\n      |\n      |\n      |\n---------\n`, `\n ------\n |    |\n O    |\n |    |\n      |\n      |\n      |\n---------\n`, `\n ------\n |    |\n O    |\n/|    |\n      |\n      |\n      |\n---------\n`, `\n ------\n |    |\n O    |\n/|\\   |\n      |\n      |\n      |\n---------\n`, `\n ------\n |    |\n O    |\n/|\\   |\n/     |\n      |\n      |\n---------\n`, `\n ------\n |    |\n O    |\n/|\\   |\n/ \\   |\n      |\n      |\n---------\n`];

function displayHangman() {
    const errors = discord.storage.channel.errors;
    return hangmanStages[errors];
}
const word = discord.storage.channel.wordSelect;
if (word.includes(args)) {
    discord.storage.channel.guesses.push(args);
} else {
    discord.storage.channel.errors++;
}
let guesses = discord.storage.channel.guesses;

let displayedWord = word.split('').map(char => guesses.includes(char) ? char : ' _ ').join('');
console.log(displayHangman);
console.log(displayedWord);