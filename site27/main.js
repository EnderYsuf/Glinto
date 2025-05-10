// words
const dict = [
  "apple", "breeze", "candle", "dragon", "echo", "flame", "glide", "hazel", "iceberg", "jungle",
  "karma", "lantern", "meadow", "nimbus", "ocean", "puzzle", "quartz", "raven", "sapphire", "thunder",
  "umbrella", "violet", "whistle", "xenon", "yonder", "zephyr", "acorn", "blizzard", "cactus", "daisy",
  "ember", "feather", "goblin", "harvest", "island", "jester", "koala", "lemon", "magnet", "nectar",
  "opal", "pebble", "quiver", "ripple", "shadow", "twig", "unicorn", "valley", "willow", "xylophone",
  "yolk", "zodiac", "armor", "bamboo", "cliff", "dust", "elm", "frost", "groove", "hollow", "ivy",
  "jade", "knight", "lunar", "moss", "nest", "owl", "parrot", "quilt", "reef", "stone",
  "torch", "undead", "vine", "wave", "xerox", "yeti", "zebra", "amber", "blade", "crystal",
  "drizzle", "ember", "fable", "grape", "howl", "ink", "jewel", "kite", "lava", "mirror",
  "nectar", "oak", "pearl", "quartz", "rain", "snow", "trail", "under", "vapor", "wind",
  "axis", "yellow", "zone", "alpha", "brisk", "cloud", "delta", "eagle", "flare", "gold",
  "hill", "iron", "jungle", "knot", "leaf", "mud", "north", "pond", "quiet", "ridge",
  "sun", "tree", "unit", "view", "wood", "xenial", "year", "zip", "arch", "beacon",
  "chalk", "dock", "echo", "flute", "gap", "horn", "inkling", "jam", "keel", "loop",
  "maple", "net", "orb", "peak", "quay", "root", "sky", "tile", "up", "veil",
  "wing", "xylem", "yarn", "zen", "ash", "bite", "cave", "dune", "edge", "fin",
  "grit", "heap", "iris", "jammer", "keep", "latch", "mine", "nut", "ox", "pit",
  "quack", "ranch", "sip", "top", "urn", "vast", "wick", "xeno", "yam", "zinc",
  "angle", "brush", "coil", "dip", "elbow", "fish", "grin", "hook", "item", "jig",
  "kick", "line", "march", "noon", "oil", "plug", "quest", "rope", "step", "tool",
  "unit", "vote", "web", "xray", "yawn", "zest", "arc", "bun", "cape", "dart",
  "egg", "fan", "gap", "hat", "inkpot", "jar", "kit", "lid", "mug", "nap",
  "oak", "pen", "quiz", "rug", "sip", "tap", "urn", "vat", "wax", "yak",
  "zenith", "algae", "blade", "chess", "deer", "ember", "fang", "glow", "hornet", "isle",
  "joke", "kite", "lamp", "moat", "nook", "orbit", "pawn", "quest", "root", "sleet",
  "twig", "unit", "vane", "whale", "xmas", "yule", "zone", "aqua", "brim", "creek",
  "dusty", "eve", "forge", "grain", "herb", "itch", "jog", "kickoff", "lash", "mire"
];
// elements
const input = document.getElementById("input");
const output = document.getElementById("output");
// utility funcs
function countWords(str) {
    const words = str.trim().split(/\s+/);
    return words.length;
}

function createSeededRNG(seed) {
    return function () {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return (seed >>> 0) / 4294967296;
    };
}

function randomIndex(rng, arrayLength) {
    return Math.floor(rng() * arrayLength);
}

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

// main part
function translate(string) {
    const tokens = string.match(/\w+|[^\s\w]+/g); // split into words and punctuation
    const wordMap = {}; // cache for word translations

    let translated = [];
    let capitalizeNext = true;

    for (let token of tokens) {
        if (/^\w+$/.test(token)) {
            const baseWord = token.toLowerCase();

            // Build a deterministic RNG for each unique word
            if (!wordMap[baseWord]) {
                const wordHash = simpleHash(baseWord);
                const wordRng = createSeededRNG(wordHash);
                wordMap[baseWord] = dict[randomIndex(wordRng, dict.length)];
            }

            let translatedWord = wordMap[baseWord];

            // Capitalize if needed
            if (capitalizeNext) {
                translatedWord = translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
                capitalizeNext = false;
            }

            translated.push(translatedWord);
        } else {
            translated.push(token);
            if (/[.!?]/.test(token)) capitalizeNext = true;
        }
    }

    // Join tokens with appropriate spacing
    return translated
        .map((token, i) => {
            if (i === 0) return token;
            if (/^[.,!?]/.test(token)) return token;
            return ' ' + token;
        })
        .join('');
}

input.addEventListener("input", () => {
  output.value = translate(input.value);
})