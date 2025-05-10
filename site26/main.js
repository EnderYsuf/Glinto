// horoscope forecasts
const beginnings = [
  "The stars suggest",
  "It seems likely that",
  "Whispers of destiny hint that",
  "Ancient forces imply",
  "Invisible tides suggest",
  "The cosmic winds foretell",
  "Mysterious energies indicate",
  "Hidden vibrations reveal",
  "Universal patterns show",
  "Celestial murmurs whisper",
  "Old echoes predict",
  "Subtle signs point toward",
  "The alignment of planets hints at",
  "Unseen hands guide",
  "The twilight air carries word that",
  "The sleeping earth murmurs about",
  "A forgotten prophecy reveals",
  "Ancient scrolls mention",
  "Invisible scripts foretell",
  "Hidden runes suggest",
  "The shifting sands speak of",
  "The moon’s reflection suggests",
  "Eternal patterns imply",
  "The secret language of the stars says",
  "The deep silence conveys",
  "Mystical portals reveal",
  "Cosmic tides predict",
  "An invisible chorus hums about",
  "The sky’s breath implies",
  "Timeless echoes murmur",
  "Galactic whispers suggest",
  "The wind through the branches says",
  "Lost tomorrows hint at",
  "Dreaming shadows point toward",
  "Subatomic whispers indicate",
  "Quantum entanglements suggest",
  "The river of time carries hints of",
  "The heartbeat of the world implies",
  "Distant horizons shine for",
  "Mysterious constellations warn about",
  "The misty dawn predicts",
  "The eternal flame flickers for",
  "The orbit of forgotten stars shows",
  "Ancient mountains hum about",
  "Celestial rivers carve signs for",
  "The songs of invisible realms describe",
  "Timeless reflections expose",
  "The silent guardians hint at",
  "The endless twilight promises",
  "The ashes of yesterday whisper about"
];

const subjects = [
  "a forgotten opportunity",
  "an unexpected turn",
  "a familiar stranger",
  "a secret ambition",
  "a silent revelation",
  "an invisible change",
  "a distant memory",
  "an unopened door",
  "a misplaced hope",
  "an unspoken dream",
  "a fleeting thought",
  "a hidden message",
  "a blurred decision",
  "a chance encounter",
  "an overlooked treasure",
  "a veiled truth",
  "a misread signal",
  "a gentle hesitation",
  "a camouflaged risk",
  "a shy whisper",
  "a displaced wish",
  "a wandering idea",
  "a forgotten name",
  "a missing puzzle piece",
  "a misunderstood signal",
  "an unseen ally",
  "a melted boundary",
  "an untamed spark",
  "a shadowed intention",
  "an echoing promise",
  "a flickering emotion",
  "a fragile belief",
  "a mirrored hope",
  "a stifled laugh",
  "a trembling certainty",
  "a buried map",
  "an astray opportunity",
  "an unopened invitation",
  "a cracked mirror",
  "an orphaned plan",
  "a drifting desire",
  "a shimmering illusion",
  "an uncertain path",
  "a gentle fracture",
  "a stubborn doubt",
  "an unborn adventure",
  "a sleepy secret",
  "a missed letter",
  "an invisible gift",
  "a backward glance"
];

const actions = [
  "will cross your path",
  "may alter your plans",
  "could brighten your day",
  "might challenge your patience",
  "will shift unnoticed",
  "might stir ancient feelings",
  "could unlock hidden strength",
  "may reveal hidden truths",
  "might leave subtle clues",
  "could drift into your orbit",
  "will dance in the corner of your eye",
  "might ripple through your thoughts",
  "could echo in forgotten corridors",
  "will brush against your dreams",
  "may tilt your perspective",
  "might fracture your routine",
  "could sweeten your silence",
  "may cloud your clarity",
  "might weave into your words",
  "will tug at the edges of your day",
  "could nudge your destiny slightly",
  "might sparkle in your reflection",
  "will stumble into your solitude",
  "may hide behind familiar faces",
  "might leave footprints in your plans",
  "could repaint your expectations",
  "will unlock a dusty memory",
  "might trigger a restless yearning",
  "could scatter yesterday’s certainty",
  "may slip under your radar",
  "might hum in today’s silence",
  "will carve a wrinkle into your routine",
  "could fold your timeline gently",
  "might entangle two paths at once",
  "could reveal a door inside a door",
  "might sow questions into answers",
  "will sketch laughter into your day",
  "could ignite a paused ambition",
  "might heal a bruised intention",
  "could soften sharp decisions",
  "may cast light into forgotten corners",
  "might echo beyond your understanding",
  "will skip stones across your future",
  "could lend courage at an odd moment",
  "might press a hidden button",
  "may tickle yesterday's plans",
  "might rearrange your seasons",
  "could slip a key into your pocket",
  "will write a secret in your steps"
];

const timings = [
  "when the moment feels still",
  "before you recognize it",
  "under a quiet sky",
  "as you glance away",
  "while you seek something else",
  "after a second thought",
  "at an unlikely hour",
  "between two heartbeats",
  "before the day fully awakens",
  "while yesterday still lingers",
  "at the bend of a silent road",
  "as dreams fade into morning",
  "just beyond your comfort zone",
  "while the clocks hold their breath",
  "in the sigh between words",
  "at the hush of twilight",
  "as unnoticed hours slip by",
  "before your doubts settle",
  "while the rain hesitates to fall",
  "in the shadow of your smile",
  "during a conversation with yourself",
  "while the stars blink unseen",
  "when your hands are busy elsewhere",
  "just before certainty solidifies",
  "at the edge of a forgotten moment",
  "between unfinished thoughts",
  "when your back is turned",
  "as the horizon softens",
  "during a silent negotiation",
  "as the wind steals your attention",
  "while hopes change color",
  "beneath the surface of laughter",
  "in the folds of quiet habits",
  "while ordinary things shimmer",
  "after the music fades",
  "at the pause before commitment",
  "as the world stirs awake",
  "when nobody is watching",
  "before you find the missing piece",
  "just outside the spotlight",
  "during the drift between plans",
  "while colors deepen unseen",
  "under the weight of an old wish",
  "as tides change without warning",
  "when reflections distort softly",
  "at the moment you least expect",
  "in the silence left by a word",
  "while you chase a vanishing thought",
  "before the puzzle reshapes itself",
  "as dust settles on old dreams"
];
// seed things
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

function getDailySeed() {
  const now = new Date();
  const seed = Number(
    now.getFullYear().toString() +
    (now.getMonth() + 1).toString().padStart(2, '0') +
    now.getDate().toString().padStart(2, '0')
  );
  return seed;
}
// forecast generator
function generateForecast() {
  let sign = document.getElementById("sign").value;
  if (sign != "") {
    let hash = simpleHash(sign);
    let index1 = randomIndex(createSeededRNG(hash+getDailySeed()), beginnings.length-1);
    let index2 = randomIndex(createSeededRNG(hash+getDailySeed() * 64), subjects.length-1);
    let index3 = randomIndex(createSeededRNG(hash+getDailySeed() * 128), actions.length-1);
    let index4 = randomIndex(createSeededRNG(hash+getDailySeed() * 256), timings.length-1);
    document.getElementById("forecast").textContent = `${beginnings[index1]} ${subjects[index2]} ${actions[index3]} ${timings[index4]}, but i'm not sure this gonna happen.`
  }
}