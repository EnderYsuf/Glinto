const facts = [
    "Bananas are 103% banana.",
    "If you stack two lasagnas, you still have one lasagna.",
    "The average cloud weighs more than a million pounds but still floats.",
    "A group of flamingos is called a 'flamboyance,' but they refuse to acknowledge it.",
    "Sharks existed before trees, but trees never took it personally.",
    "The moon is moving away from Earth at 3.8 cm per year, like a teenager avoiding chores.",
    "If you remove all the space from an atom, the human race could fit into a sugar cube.",
    "Butterflies taste with their feet, which makes them terrible food critics.",
    "The Eiffel Tower grows over 15 cm in summer due to heat expansion.",
    "Goats have rectangular pupils, so they can see into parallel dimensions (probably).",
    "Cows have best friends, and they get stressed when separated, just like humans and Wi-Fi.",
    "A species of jellyfish is biologically immortal, but it refuses to share its secret.",
    "Lightning is five times hotter than the surface of the sun, yet we worry about sunscreen.",
    "Raisins bounce in carbonated drinks, proving they enjoy roller coasters.",
    "Wombat poop is cube-shaped, and scientists still don’t fully understand why.",
    "Octopuses have three hearts, and they break all of them at once when they fall in love.",
    "Pigs cannot look straight up, meaning they’ve never seen a shooting star.",
    "Honey never spoils. Archaeologists found 3000-year-old honey, and it was still edible.",
    "Suppressing a sneeze can rupture a blood vessel, but sneezing too hard can break a rib.",
    "Bananas are berries, but strawberries are not. The fruit world is full of lies.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "Some fish communicate by farting, making underwater conversations quite awkward.",
    "A single spaghetti noodle is called a 'spaghetto.'",
    "The hashtag symbol (#) is called an octothorpe, but nobody uses that word.",
    "There is enough DNA in the human body to stretch from Earth to the sun and back 600 times.",
    "A day on Venus is longer than a year on Venus.",
    "Sloths can hold their breath longer than dolphins but prefer to keep it a secret.",
    "A shrimp's heart is in its head, meaning it truly thinks with its heart.",
    "The word 'swims' looks the same upside down.",
    "A group of crows is called a 'murder,' but they’ve never been convicted.",
    "Pineapples take up to three years to grow, making them the slowest surprise party decoration.",
    "There is a town in Norway called Hell, and it freezes over every winter.",
    "Giraffes only sleep for about 30 minutes a day and still look tired.",
    "Mosquitoes have existed longer than dinosaurs and refuse to go extinct.",
    "The world's largest desert is Antarctica, proving that deserts aren't always hot.",
    "Jellyfish are 95% water, making them slightly more hydrated than the average college student.",
    "Snails can sleep for up to three years, making them the true masters of procrastination.",
    "If you folded a piece of paper 42 times, it would reach the moon.",
    "There are more fake flamingos in the world than real ones.",
    "The shortest war in history lasted 38 to 45 minutes.",
    "There's a species of fungus that turns ants into zombies.",
    "Sea cucumbers can eject their internal organs as a defense mechanism and regrow them later.",
    "The M’s in M&M’s stand for Mars and Murrie, the founders.",
    "Octopuses can taste things just by touching them.",
    "You can’t hum while holding your nose (try it).",
    "Bubble wrap was originally invented to be wallpaper.",
    "Vending machines kill more people per year than sharks.",
    "It rains diamonds on Jupiter and Saturn.",
    "Sloths move so slowly that algae grow on their fur.",
    "A duel between three people is called a truel.",
    "Cows moo with different accents depending on their region.",
    "The smell of freshly cut grass is actually the plant screaming in distress.",
    "There's a bridge for squirrels in the Netherlands.",
    "A group of porcupines is called a prickle.",
    "You are always technically traveling at the speed of the Earth’s rotation.",
    "Ants stretch when they wake up, just like humans.",
    "The inventor of the microwave only realized it could heat food when a chocolate bar melted in his pocket.",
    "The dot over a lowercase ‘i’ or ‘j’ is called a tittle.",
    "Some turtles can breathe through their butts.",
    "A cat’s meow is its way of talking to humans—cats don’t meow at each other.",
    "There's a village in Wales with a name that’s 58 letters long.",
    "Elephants can’t jump, but they’re still pretty good at dancing.",
    "Bees can recognize human faces, so don’t upset them.",
    "The average person will spend six months of their life waiting for red lights to turn green.",
    "The letter ‘E’ is the most commonly used letter in the English language.",
    "A jiffy is an actual unit of time—1/100th of a second.",
    "Your stomach gets a new lining every few days to prevent digesting itself.",
    "Horses can’t vomit, so they have to be extra careful about what they eat.",
    "Water can boil and freeze at the same time under the right conditions.",
    "The longest hiccuping spree lasted 68 years.",
    "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
    "The ‘Q’ in Q-tips stands for ‘quality.’",
    "The smell of chocolate increases brain waves, making you feel relaxed.",
    "You can’t breathe and swallow at the same time (try it).",
    "Worms can regrow parts of their body if cut correctly.",
    "Tigers have striped skin, not just striped fur.",
    "A crocodile can't stick its tongue out.",
    "The human brain can hold about 2.5 petabytes of information, but still forgets why it walked into a room.",
    "A jellyfish doesn’t have a brain, heart, or bones, and yet it still lives a more peaceful life than most people.",
    "The phrase 'the quick brown fox jumps over the lazy dog' uses every letter in the English alphabet.",
    "Some penguins propose to their mates with pebbles.",
    "Cats can rotate their ears 180 degrees, making them the ultimate eavesdroppers.",
    "You share about 60% of your DNA with bananas, which explains why you sometimes feel a little fruity.",
    "A kangaroo can’t walk backward, but it doesn’t care because it’s always moving forward.",
    "The world’s largest snowflake ever recorded was 15 inches wide.",
    "Coca-Cola would be green if coloring wasn’t added.",
    "The Guinness World Record for the most socks worn on one foot is 184.",
    "There are more stars in the universe than grains of sand on Earth, but only one of them decided to give us a sunburn.",
    "If you shuffle a deck of cards properly, the order has likely never existed before in the history of the universe.",
    "Your nose can remember 50,000 different scents, most of them food-related.",
    "An ostrich’s eye is bigger than its brain, which explains a lot about their decision-making.",
    "The unicorn is the national animal of Scotland, proving they take fantasy very seriously.",
    "A day on Mercury lasts 1,408 hours, ideal for procrastinators.",
    "Peanuts aren't nuts; they’re legumes pretending to be something they’re not.",
    "The average person walks the equivalent of five times around the Earth in their lifetime—without earning frequent walker miles.",
    "Tomatoes have more genes than humans, and possibly more drama.",
    "Koalas have fingerprints almost identical to humans, so don't trust them at a crime scene.",
    "Goldfish can remember things for months, despite the rumors of their 3-second memory.",
    "Saturn would float in water, making it the solar system’s most massive pool toy.",
    "The world’s quietest room is so silent, you can hear your own organs working—try not to panic.",
    "Some frogs can freeze solid in winter and thaw back to life like tiny amphibian popsicles.",
    "The average person produces enough saliva in a year to fill two bathtubs—please don’t test this.",
    "The inventor of the Pringles can is buried in one. That’s commitment to branding.",
    "Male seahorses give birth, making them the unexpected MVPs of fatherhood.",
    "Apples float because 25% of their volume is air—just like most meetings.",
    "There's a species of spider that can “surf” on water, possibly to impress other spiders.",
    "Pigeons can do math at the same level as monkeys, and yet still walk in front of cars.",
    "There's a cloud in space that smells like rum and tastes like raspberries. NASA has confirmed the party is in space.",
    "Some lizards squirt blood from their eyes as a defense mechanism. Drama level: maximum.",
    "A group of frogs is called an army, but they rarely invade anything.",
    "The plastic ends of shoelaces are called aglets, and they deserve more appreciation.",
    "The original Monopoly game was circular. So were the arguments it caused.",
    "Earthquakes can turn water into solid ground temporarily, which sounds backwards, but science says okay.",
    "Crocodiles can’t sweat, so they open their mouths to cool off, basically panting like scaly dogs.",
    "The dot at the end of a sentence is technically called a “full stop,” but it never gets invited to parties.",
    "Humans are bioluminescent, but the light is too weak for our eyes to see. So technically, you're glowing.",
    "A full head of human hair could support the weight of two elephants. Please don’t try this at home.",
    "A banana is a herb, and your breakfast just got botanically confusing.",
    "Dogs can understand up to 250 words and gestures—more than your average toddler.",
    "You can smell rain coming. It’s called petrichor and it's oddly comforting.",
    "Octopuses can escape through holes the size of a coin. They’re basically ocean Houdinis.",
    "The longest English word without a vowel is 'rhythms.' Good luck singing it.",
    "There’s a basketball court on the top floor of the U.S. Supreme Court. It’s called the highest court in the land.",
    "Some turtles can live over 100 years, making them the ultimate slow and steady champions.",
    "Parrots will give names to their chicks. Polly really does want a cracker *and* recognition.",
    "The heart of a blue whale is the size of a small car. Road trip, anyone?",
    "Penguins have knees. They’re just hidden under all that tuxedo fluff.",
    "The word “bookkeeper” has three consecutive double letters. It’s showing off.",
    "A blob of toothpaste is called a “nurdle.” Use that word today. You’re welcome.",
    "Dolphins have names for each other and probably gossip more than we do.",
    "A sneeze travels up to 100 mph. Gesundheit... or speed trap?",
    "Wombats run surprisingly fast. Never underestimate a cube-pooper.",
    "If the sun were the size of a white blood cell, the Milky Way would be the size of the continental U.S.",
    "Banging your head against a wall for an hour burns 150 calories. There are better ways.",
    "Some fungi glow in the dark and probably have better nightlife than you.",
    "The average pencil can draw a line 35 miles long, or write 'I’m bored' a thousand times.",
    "Rats laugh when tickled. Yes, researchers found this out on purpose.",
    "There’s a planet made of diamond out there. So yes, space is blingy.",
    "Turtles breathe through their butts in some cases. Nature is weirdly efficient.",
    "Rain has a smell, and it’s mostly plant oils being released into the air.",
    "Earth is hit by over 100 tons of space dust every day. Cosmic dandruff.",
    "The word 'nerd' was first used by Dr. Seuss.",
    "Crabs communicate by waving their claws and drumming. Basically, they’re percussionists.",
    "Your brain uses the same amount of energy as a 10-watt lightbulb when awake.",
    "Some goats faint when scared. They just drama-quit life for a second.",
    "Slugs have four noses. That’s three more than necessary.",
    "The Mantis Shrimp can punch with the speed of a bullet. And it *does.*",
    "Bats always turn left when exiting a cave. They might just be stubborn.",
    "You burn more calories frowning than smiling, but smiling feels better.",
    "Sea otters hold hands when they sleep so they don’t drift apart. Relationship goals.",
    "Horses can express emotions with their ears. Drama with style.",
    "You can hear rhubarb grow if you're quiet and patient enough. It’s the ASMR of plants.",
    "Trees can talk to each other using underground fungi networks. Plant gossip is real.",
    "Mice sing ultrasonic love songs. Tiny rodent serenades—who knew?",
    "The Guinness World Record for the longest time holding breath is over 24 minutes.",
    "Ducks sleep with one eye open. Paranoia level: pro.",
    "A baby puffin is called a puffling, and that’s adorable.",
    "Ants don’t have lungs; they breathe through tiny holes. Minimalist breathing.",
    "Humans glow more at night. You’re basically a reverse firefly.",
    "Most lipsticks contain fish scales for shimmer. Beauty is weird.",
    "A day on Pluto is 6.4 Earth days long—perfect for long naps.",
    "The Eiffel Tower can lean away from the sun due to heat expansion.",
    "Moonbows are real. They’re rainbows at night. Magical and mysterious.",
    "The average person will eat 70,000 bugs in their sleep over a lifetime. Sleep tight.",
    "Your belly button is home to thousands of bacteria. It’s basically a pocket-sized jungle.",
    "The longest English word is 189,819 letters long and takes over three hours to say.",
    "A zebra’s stripes are as unique as fingerprints.",
    "A snail’s mouth is no bigger than a pinhead, but it can have thousands of teeth.",
    "Mosquitoes are attracted to people who just ate bananas. Rude.",
    "Butterflies remember being caterpillars. Metamorphosis doesn’t erase memories.",
    "The moon has moonquakes, which is just the moon being dramatic.",
    "Kangaroos can’t fart. Their digestive system is strangely polite.",
    "Camels have three eyelids to protect themselves from sand. Fashion and function.",
    "A group of jellyfish is called a smack. Not as cute as a 'flamboyance.'",
    "Tardigrades can survive in space, boiling water, and freezing cold. Tiny superheroes.",
    "Venus spins backward. It’s just quirky like that.",
    "There are more trees on Earth than stars in the Milky Way.",
    "Zebrafish can regrow their hearts. Scientists are taking notes.",
    "A shrimp’s brain is located in its throat. Not ideal, but it works.",
    "Chameleons don't change color to blend in—they do it to express mood.",
    "Flamingos are born gray and turn pink from their food. True glow-up.",
    "The inventor of the Super Soaker was a NASA engineer.",
    "Fish can drown if there’s not enough oxygen in the water.",
    "Humans are the only animals with chins, and no one really knows why.",
    "There’s a breed of chicken that lays blue eggs.",
    "A cloud can weigh over a million pounds, but it still floats like a marshmallow.",
    "Owls have eyeballs that can’t move, so they rotate their heads 270 degrees.",
    "You’re taller in the morning than in the evening—gravity squishes you.",
    "You just read 100 more facts. Your brain may be full, but now you’re officially wiser and weirder.",
    "This is the final fact. Knowing it may not change your life, but at least you made it to the end, which is an accomplishment in itself."
];

let currFacts = [];
var status = -1;
if (localStorage.currFacts) {
  currFacts = JSON.parse(localStorage.currFacts);
}

const fact = document.getElementById("fact");
const fact_button = document.getElementById("factButton");
const listEl = document.getElementById("list");

// fact list render
function renderFacts() {
  listEl.innerHTML = '';
  for (let i = 0; i < facts.length; i++) {
    const div = document.createElement('div');
    const hr = document.createElement('hr');
    div.dataset.index = i;
    div.textContent = currFacts.includes(i) ? facts[i] : '???';
    listEl.appendChild(div);
    listEl.appendChild(hr);
  }
}

// new fact
function showFact() {
  if (currFacts.length >= facts.length - 1) {
    fact.innerHTML = facts[facts.length - 1];
    fact_button.style.opacity = "0.0";
    setTimeout(() => {
      fact_button.remove();
    }, 600);
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * (facts.length - 1));
  } while (currFacts.includes(randomIndex));

  fact.innerHTML = facts[randomIndex];
  currFacts.push(randomIndex);
  localStorage.currFacts = JSON.stringify(currFacts);
  const el = listEl.querySelector(`div[data-index="${randomIndex}"]`);
  if (el) el.textContent = facts[randomIndex];
}

// debug
function clearFacts() {
  currFacts = [];
  localStorage.currFacts = JSON.stringify(currFacts);
  renderFacts();
  fact.innerHTML = "Click the button to get a fact!";
  if (!document.getElementById("factButton")) {
    const newBtn = document.createElement("button");
    newBtn.id = "factButton";
    newBtn.textContent = "Get New Fact";
    newBtn.onclick = showFact;
    document.body.insertBefore(newBtn, listEl);
  } else {
    fact_button.style.opacity = "1.0";
  }
}

// showing acquired facts
function show() {
    status *= -1;
    if (status == 1) {
        document.getElementById("btn").textContent = "Hide acquired facts";
        document.getElementById("factsWindow").style.height = "auto";
    } else {
        document.getElementById("btn").textContent = "Show acquired facts";
        document.getElementById("factsWindow").style.height = "45px";
    }
}
renderFacts();