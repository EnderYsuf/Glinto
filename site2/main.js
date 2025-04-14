const excuses = {
    "I was late": {
        "My alarm didn’t go off": "I set it, but it never rang. Maybe it’s protesting against mornings.",
        "Traffic was terrible": "Even with my best effort, the road just didn’t cooperate.",
        "Public transport failed me": "The bus/train was delayed. I guess schedules are just suggestions now.",
        "I lost track of time": "One second, it was 7 AM, and suddenly, it was noon.",
        "I fell back asleep": "I woke up, but my pillow convinced me to stay a little longer.",
        "My car wouldn’t start": "I tried everything, but my car chose today to take a break."
    },
    "I didn’t do my homework": {
        "My computer crashed": "I finished it, but then my PC said ‘Nope’.",
        "My dog ate it": "It was on my desk, and now it’s in my dog’s stomach.",
        "Aliens took it": "I put it down for a second, and suddenly, it was gone.",
        "The universe was against me": "I tried, but the universe conspired against me."
    },
    "I missed the meeting": {
        "I was in the wrong meeting": "I sat through an entire meeting… but it wasn’t the right one.",
        "The Wi-Fi went out": "I was all set to join, and then my Wi-Fi ghosted me.",
        "My phone battery died": "I was about to join, but my phone shut off at 1%."
    },
    "I didn’t submit the report": {
        "My computer crashed": "Everything was ready, and then my laptop went ‘nope’.",
        "I spilled coffee on my laptop": "And now it’s permanently off.",
        "There was a power outage": "No power, no report."
    },
    "I didn’t clean my room": {
        "I was conducting an experiment": "I wanted to see how long it would take before the mess cleaned itself.",
        "I lost track of time": "I blinked, and suddenly it was bedtime."
    },
    "I forgot to reply to emails": {
        "My internet provider had an outage": "I was about to send them, but the internet disappeared.",
        "I was kidnapped by ninjas": "I had no choice but to go with them. Sorry."
    },
    "I didn't cook dinner": {
        "I lost track of time": "I was busy with something important. Like existing.",
        "The Wi-Fi went out": "No internet, no recipe, no dinner."
    },
    "I didn't go to the gym": {
        "My alarm didn’t go off": "Guess my body needed extra rest.",
        "My car wouldn’t start": "Looks like I got a pass today."
    },
    "I didn't wake up on time": {
        "My alarm didn’t go off": "It betrayed me.",
        "I fell back asleep": "Sleep was just too good."
    },
    "I didn't call my friend back": {
        "I lost track of time": "Time slipped away like my social life.",
        "My phone battery died": "I swear I was going to call!"
    },
    "I didn't study for the test": {
        "I was too busy panicking": "I spent all my study time stressing out.",
        "I thought it was next week": "Turns out, calendars are hard."
    },
    "I didn't water the plants": {
        "I forgot they were alive": "They just sit there so quietly.",
        "The watering can was missing": "Without it, I was helpless."
    },
    "I didn’t attend the class": {
        "I mixed up the schedule": "I thought it was tomorrow. Or yesterday.",
        "The Wi-Fi went out": "I was ready... until the signal vanished."
    },
    "I missed the deadline": {
        "My computer crashed": "Everything vanished just before I clicked send.",
        "There was a power outage": "Everything shut down. Including my hope."
    },
    "I forgot our anniversary": {
        "I thought it was next month": "I was only 30 days off!",
        "My phone didn’t remind me": "I trusted technology and was betrayed."
    },
    "I didn’t take out the trash": {
        "I didn’t see it": "It blended in with the decor.",
        "I was distracted by a squirrel": "It was a very intense moment."
    },
    "I was late for my flight": {
        "Traffic was terrible": "Even Google Maps gave up on me.",
        "I lost track of time": "Time doesn’t fly, but the plane did."
    },
    "I didn’t answer the call": {
        "My phone was on silent": "I swear I didn’t ignore you.",
        "I was in a tunnel": "Reception was terrible. Like, really terrible."
    },
    "I didn’t feed the pet": {
        "I thought someone else did": "Turns out, we all thought that.",
        "I was going to, then I sneezed and forgot": "Blame my allergies."
    },
    "I didn’t show up to work": {
        "I thought it was the weekend": "Surprise! It wasn’t.",
        "I had a wardrobe malfunction": "I couldn't leave like that."
    },
    "I didn't go shopping": {
        "I forgot my list": "No list, no idea what to buy.",
        "It was raining": "And I melt in the rain."
    },
    "I didn’t pick up the kids": {
        "I got stuck in traffic": "Every car in the city was out today.",
        "I forgot what time school ended": "Time is a tricky thing."
    }
};

const fallbackExcuses = [
    "I really tried, but fate had other plans.",
    "It was beyond my control, I swear!",
    "Everything that could go wrong, did go wrong.",
    "I had no choice, it was out of my hands!",
    "It’s a long story, but trust me, it was impossible.",
    "Even if I wanted to, the universe didn't let me.",
    "An unexpected series of events derailed my plans.",
    "I was just about to do it, and then—boom, disaster struck.",
    "Forces beyond my comprehension intervened.",
    "It’s a mystery even to me how it didn’t happen.",
    "I set everything up perfectly, and yet, here we are.",
    "I was caught in an unavoidable situation.",
    "Something urgent came up at the worst possible moment.",
    "If only time had cooperated, things would be different.",
    "The odds were stacked against me from the start.",
    "A sudden twist of fate prevented me.",
    "You wouldn’t believe me even if I told you.",
    "Reality glitched, and now we're here.",
    "I was seconds away from success before disaster struck.",
    "It’s a tragic tale of bad luck and unfortunate timing.",
    "All signs pointed to yes, but destiny screamed no.",
    "I was distracted by an existential crisis.",
    "The simulation lagged.",
    "Mercury is in retrograde, probably.",
    "I tripped over responsibility and fell into procrastination."
];

var x = 0;

function populateDropdowns() {
    const actionDropdown = document.getElementById("action");
    const blameDropdown = document.getElementById("blame");

    for (let action in excuses) {
        let option = document.createElement("option");
        option.value = action;
        option.textContent = action;
        actionDropdown.appendChild(option);
    }

    function updateBlameOptions() {
        blameDropdown.innerHTML = "";
        let selectedAction = actionDropdown.value;
        let blameOptions = new Set();

        for (let action in excuses) {
            for (let blame in excuses[action]) {
                blameOptions.add(blame);
            }
        }

        blameOptions.forEach(blame => {
            let option = document.createElement("option");
            option.value = blame;
            option.textContent = blame;
            blameDropdown.appendChild(option);
        });
    }

    actionDropdown.addEventListener("change", updateBlameOptions);
    updateBlameOptions();
}

function generateExcuse() {
    let action = document.getElementById("action").value;
    let blame = document.getElementById("blame").value;

    let excuseText = excuses[action] && excuses[action][blame]
        ? `${action} because ${excuses[action][blame]}`
        : `${action} because ${blame.toLowerCase()}. ${getRandomFallbackExcuse()}`;
    let excuseHolder = document.getElementById("excuse");
    excuseHolder.innerText = excuseText;
    let interval = setInterval(() => {
        x += 0.1;
        if (x != 1.1) {
            excuseHolder.style.opacity = x.toFixed(1);
        } else {
            clearInterval(interval);
        }
    },10)
}

function getRandomFallbackExcuse() {
    return fallbackExcuses[Math.floor(Math.random() * fallbackExcuses.length)];
}

document.addEventListener("DOMContentLoaded", populateDropdowns);