const syllables = [
    "ka", "zu", "mo", "ra", "ti", "vo", "xe", "lu", "fi", "ba", 
    "do", "me", "sa", "jo", "ne", "qi", "wa", "re", "si", "po",
    "tu", "go", "ni", "ze", "xa", "fu", "mi", "ke", "ri", "ho",
    "ya", "co", "nu", "de", "vi", "to", "ba", "je", "qu", "so",
    "yu", "fa", "hi", "la", "wa", "mo", "se", "pi", "do", "ro",
    "ge", "no", "ki", "za", "xu", "ma", "te", "yo", "bo", "su",
    "pa", "lo", "ha", "xe", "ju", "fi", "ne", "ri", "va", "da",
    "mu", "co", "ze", "qi", "ta", "wi", "me", "lu", "ro", "ka",
    "hi", "sy", "gu", "vo", "xi", "je", "wo", "ku", "bo", "ye",
    "do", "za", "fu", "ne", "pi", "ru", "va", "ta", "xi", "go",
    "dra", "chi", "kae", "syo", "bra", "kyo", "tho", "zai", "dro", "gle",
    "kra", "vyo", "sho", "gru", "swa", "nau", "plo", "kli", "blo", "sni",
    "twa", "tri", "ska", "gri", "slo", "tra", "fra", "zhe", "kru", "cli",
    "tio", "pya", "nra", "kla", "tho", "zio", "blu", "kra", "pru", "spi",
    "sqi", "quo", "pho", "smo", "vli", "snar", "jra", "fro", "tro", "shy",
    "dwe", "thra", "cru", "gno", "zro", "ylo", "qra", "sne", "bri", "kze",
    "dru", "plo", "tlu", "gra", "zla", "dro", "sty", "sru", "wro", "chu",
    "pry", "dra", "yra", "joa", "gle", "fro", "klu", "bro", "gre", "spo",
    "fra", "gne", "que", "phy", "kra", "bno", "gli", "flai", "vro", "sai",
    "nli", "blo", "pry", "zlu", "voe", "kra", "sai", "wae", "gha", "dyo",
    "sro", "slo", "plo", "tre", "vla", "shai", "kna", "qwe", "kro", "zhy",
    "sla", "zwi", "tra", "ywi", "qei", "zoi", "sla", "bre", "cro", "klai",
    "zmu", "dwe", "quo", "tri", "vle", "gri", "dra", "sto", "voa", "twe",
    "pha", "zra", "qra", "glai", "kli", "pru", "gla", "tyo", "zwi", "kla",
    "shi", "sli", "bri", "kli", "glio", "spae", "gro", "cru", "zre", "fla",
    "tye", "kwo", "pne", "nro", "jwa", "sbo", "dro", "cha", "gle", "syo",
    "flo", "zgo", "voe", "twi", "sra", "blo", "quy", "sko", "zha", "squ",
    "vno", "kyo", "fru", "zhy", "sro", "plu", "zya", "tho", "kra", "sha"
];

const nameElement = document.getElementById("name");

function generateName() {
    let newName = "";
    let nameLength = Math.floor(Math.random() * 4) + 2;
    for (let i = 0; i < nameLength; i++) {
        let nextSyllable = syllables[Math.floor(Math.random() * syllables.length)];
        if (i === 0) {
            nextSyllable = nextSyllable.charAt(0).toUpperCase() + nextSyllable.slice(1);
        }
        newName += nextSyllable;
    }
    nameElement.innerHTML = newName;
}