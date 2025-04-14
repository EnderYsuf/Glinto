const subjects = [
    "The cat", "A shadow", "Your left shoe", "An old book", "The wind", "A forgotten key", 
    "Time", "A strange whisper", "The number seven", "A blinking light", "A lost message", 
    "A hidden door", "The moonlight", "A mysterious figure", "A rustling leaf", "A crack in reality", 
    "The clock hands", "An ancient riddle", "A misplaced sock", "An invisible force", "A flickering candle", 
    "A broken mirror", "A secret tunnel", "A nameless voice", "The ticking sound", "An abandoned house", 
    "A missing puzzle piece", "A floating feather", "A reversed reflection", "The fading sun", 
    "An unopened letter", "The whispering trees", "A forgotten song", "The echo in the hallway", 
    "A silent observer", "The locked chest", "A scribbled note", "A painting that watches", 
    "A sudden chill", "A flickering streetlight", "A backward clock", "The absence of sound", 
    "A buried memory", "The scent of something familiar", "A door without a handle", 
    "A single red thread", "An impossible coincidence", "The empty chair", "A missing shadow", "A distant bell",
    "The shadow of a cloud", "A forgotten map", "The last star in the sky", "A rusted key", 
    "A ticking clock", "The moon’s reflection in water", "A hidden smile", "A crack in the sidewalk", 
    "The smell of old books", "A flickering flame", "A forgotten prayer", "A half-eaten apple", 
    "A long-forgotten legend", "A whisper in the wind", "A silent scream", "The old oak tree", 
    "A half-closed door", "The first snowfall", "A mysterious footprint", "A wilting flower", 
    "A pale hand in the dark", "The glimmer of a distant light", "A forgotten dream", "A broken clock", 
    "A trail of breadcrumbs", "A hidden compartment", "A forgotten tune", "The faded photograph", 
    "A sleeping cat", "A hollow echo", "A hidden path", "The echo of footsteps", "A broken compass", 
    "The rustle of pages", "A whisper from the past", "A distant mountain peak", "The faintest touch", 
    "A blurry figure in the distance", "The feeling of being watched", "A shifting shadow", "The sound of water dripping"
];

const actions = [
    "holds the answer", "knows the secret", "is not what it seems", "vanished at midnight", 
    "is watching you", "will guide the way", "hides in plain sight", "was never here", 
    "is just a distraction", "waits in silence", "whispers forgotten truths", "controls the unseen", 
    "hides in the shadows", "exists in a paradox", "appears when least expected", "fades into nothingness", 
    "echoes through time", "has already spoken", "keeps the balance", "reveals itself in dreams", 
    "blinks when you're not looking", "moves without moving", "only exists in reflections", 
    "distorts reality", "holds infinite possibilities", "can only be seen from the corner of your eye", 
    "remembers what was forgotten", "was written in the stars", "follows the rules of the unknown", 
    "disappears when acknowledged", "reveals its purpose when needed", "connects the unconnected", 
    "can be found in the silence", "was erased from history", "appears in moments of doubt", 
    "opens doors to nowhere", "can be heard but not understood", "is the key to something bigger", 
    "is older than time itself", "was meant to be forgotten", "changes depending on who looks at it", 
    "never truly existed", "awaits the right moment", "sings a song of lost stories", 
    "holds the weight of the unseen", "reflects a hidden reality", "is caught between past and future", 
    "belongs to another world", "remains unsolved", "marks the beginning of the end",
    "holds the key to a forgotten world", "is waiting for someone to ask the right question", 
    "has a voice that is never heard", "is hidden in plain sight", "guides lost souls", 
    "only exists when you’re not looking", "holds a piece of the universe", "shifts between dimensions", 
    "reveals its true form in the dark", "exists only in memory", "waits for the perfect moment", 
    "whispers secrets to those who listen", "is tied to a moment lost in time", "never leaves its place", 
    "is part of a forgotten story", "appears when hope fades", "doesn’t belong here", 
    "can’t be seen, but always felt", "exists outside of logic", "is a dream without a name", 
    "holds the silence between breaths", "is tied to the stars themselves", "is bound to a place you’ll never visit", 
    "is a fragment of something bigger", "will never be understood", "moves through time like a shadow", 
    "was once something else entirely", "holds the weight of a thousand secrets", "is always just out of reach", 
    "is part of something lost", "appears when it’s too late", "was never meant to be known", 
    "shifts when you blink", "will disappear when you speak of it", "is something you’ve always known but never understood"
];

const details = [
    "but only on Tuesdays.", "when the moon is full.", "if you listen carefully.", "in an alternate reality.", 
    "but only in your dreams.", "where no one looks.", "right behind you.", "but you already missed it.", 
    "if you read between the lines.", "under the right conditions.", "when time stands still.", "just before dawn.", 
    "but never in the same place twice.", "if the wind whispers your name.", "when the stars align.", 
    "but only if you believe.", "when the clock strikes thirteen.", "if you're holding a silver coin.", 
    "when the last petal falls.", "if the candle flickers twice.", "when the air feels heavy.", 
    "in the space between seconds.", "if the mirror cracks by itself.", "when you close your eyes.", 
    "if you turn left three times.", "when the music stops suddenly.", "in a place that does not exist.", 
    "if you dream of rain.", "when the birds fly backward.", "if you count to seven backwards.", 
    "under a blood-red sky.", "if the cat stares too long.", "when silence becomes deafening.", 
    "if you see your reflection blink.", "in a book that was never written.", "when the wind stops blowing.", 
    "if you follow the wrong path.", "in a forgotten language.", "when reality bends slightly.", 
    "if the shadow moves on its own.", "in the time between heartbeats.", "if the clock hands reverse.", 
    "when you hear a voice with no source.", "if the sun sets too quickly.", "when the floor creaks without weight.", 
    "if the door is slightly open.", "in the moment before waking.", "when you look at the sky and feel watched.", 
    "if the old radio turns on by itself.", "when the past reaches forward.",
    "when the sun’s light fades.", "if you wait long enough.", "but only in the fog.", 
    "in the blink of an eye.", "when the stars are hidden by clouds.", "if you follow the sound of the river.", 
    "when the echoes start to fade.", "if you’re standing still for long enough.", 
    "when the night is too quiet.", "if you find the right book.", "when you hear nothing at all.", 
    "in the space between breaths.", "if you walk the same path twice.", "when the moon is out of sight.", 
    "if you stumble upon the forgotten.", "when the world stands still.", "in the moments just before sleep.", 
    "if the wind whispers a name.", "when the trees stop moving.", "if the shadow of a bird crosses your path.", 
    "when a door you’ve never seen before appears.", "if you follow the trail of dust.", "in the space where no one looks.", 
    "when the last leaf falls.", "if the clock strikes midnight.", "if you walk in circles.", 
    "when the air turns cold.", "if the ground trembles underfoot.", "when a storm is just about to begin.", 
    "if you look over your shoulder.", "when the light bends around you.", "if you dream of the ocean.", 
    "when the sun rises and no one is awake.", "if the sky cracks open.", "in the moments before you wake up.", 
    "if you hear the wind hum a tune.", "when the birds stop singing.", "if you stare too long at the horizon.", 
    "when the world tilts slightly.", "if the clock doesn’t move.", "in the stillness of an empty room.", 
    "if you feel the ground beneath you shift."
];

function generateHint() {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const detail = details[Math.floor(Math.random() * details.length)];
    return `${subject} ${action} ${detail}`;
}

function applyHint() {
    document.getElementById("hint").innerHTML = generateHint();
}