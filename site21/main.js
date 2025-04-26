const messages = [
    "You were not supposed to wake up.",
    "The thing in the walls has learned your name.",
    "Your shadow is one step behind where it should be.",
    "Do not answer the knock at 3:12 AM.",
    "You blinked. It moved.",
    "Something is living in your reflection.",
    "They whispered your name last night. Who?",
    "Every night, your bed shifts an inch closer to the door.",
    "The static on the radio is trying to form words.",
    "You can hear breathing, but you are alone.",
    "There is a second voice on this call.",
    "You woke up with dirt under your nails.",
    "Something behind you just smiled.",
    "Your phone vibrated, but there’s no notification.",
    "You never bought that doll.",
    "Why do you have memories of a place you've never been?",
    "The mirror showed a different version of your room.",
    "There’s an extra door in your house today.",
    "You are in a photograph you do not remember taking.",
    "There are footprints leading to your bed. Only leading.",
    "A voice whispered, 'Almost time,' as you fell asleep.",
    "The stars rearranged themselves last night.",
    "You feel something tugging at your blanket when you sleep.",
    "The power went out, but the TV is still on.",
    "Something in the drain is whispering.",
    "Your shadow flickered.",
    "Your name was carved into a tree that was just planted.",
    "There’s a room in your house you don’t remember existing.",
    "You keep waking up facing the closet.",
    "The elevator stopped at a floor that doesn’t exist.",
    "Your reflection lags behind you for just a second.",
    "You heard footsteps, but the hallway was empty.",
    "The old baby monitor turned on by itself.",
    "Your pet won’t enter the room anymore.",
    "Something just ran behind you in the dark.",
    "There’s a face in the fogged-up bathroom mirror. It’s not yours.",
    "The radio played a song in a language you don’t know.",
    "Your shadow isn’t facing the same way as the light.",
    "Every night, the old rocking chair moves on its own.",
    "You heard someone call your name, but the house is empty.",
    "You locked the door before bed. It’s open now.",
    "A child’s laughter echoed from the attic.",
    "You found a note under your pillow: 'Leave now.'",
    "Someone knocked on the window. But you live on the 10th floor.",
    "There’s a whisper coming from the air vents.",
    "The numbers on your digital clock flickered into symbols.",
    "A stranger waved at you from a distance. You swear it was you.",
    "The TV shows a channel that shouldn’t exist.",
    "You answered the phone, but no one was there. Just breathing.",
    "The old photograph on the wall now has one more person in it.",
    "You saw yourself outside. But you're inside.",
    "Your favorite shirt was folded neatly on the floor. You didn’t fold it.",
    "There's a new contact in your phone named 'Me'.",
    "The basement light turns on whenever you mention it.",
    "You woke up with your shoes on, covered in mud.",
    "You keep dreaming of the same unfamiliar face.",
    "There’s a sound coming from under the bed. It’s breathing.",
    "You left the window closed. Now it's open—and something is inside.",
    "A voice called your name from inside the mirror.",
    "The painting blinked.",
    "You found a photo of yourself sleeping. You live alone.",
    "There’s a tapping on the wall. It’s following you.",
    "The ceiling fan turns even when it's unplugged.",
    "You looked outside. The moon had eyes.",
    "You opened the closet. Something exhaled.",
    "You hear footsteps behind you, matching your pace.",
    "You woke up in the hallway with the front door wide open.",
    "Something is knocking from inside the wardrobe.",
    "The nightlight turns off when you try to look at it.",
    "The book on your shelf has a new chapter you didn’t write.",
    "You were dreaming. Or so you thought. The scratches are real.",
    "You saw yourself sleeping, from the corner of the room.",
    "Your voicemail has a message from your own number.",
    "The family photo has someone in it you don’t know.",
    "You tried to scream in your sleep. Something held your mouth shut.",
    "The calendar flipped itself to a date that doesn’t exist.",
    "The mirror fogged up—and a handprint appeared from the inside.",
    "The footsteps upstairs stop when you listen.",
    "You felt a hand brush your shoulder, but no one was there.",
    "You keep waking up with the door slightly more open each night.",
    "The music box plays at midnight, on its own.",
    "You saw someone under the bed. They smiled.",
    "You dropped your phone. When you picked it up, the wallpaper had changed.",
    "You caught your reflection watching you.",
    "You said goodbye to your friend—but they never visited.",
    "Your toothbrush was wet. You hadn’t used it yet.",
    "The answering machine has messages from the past. Before you were born.",
    "You saw writing on the wall. It disappeared when you turned the light on.",
    "The doorknob turned slowly, but no one was there.",
    "You turned off the light. The silhouette stayed."
];

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

function drawStrangeSymbols(text) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    const startX = 20;
    const startY = canvas.height / 4;
    let x = startX;
    let y = startY;
    const size = 30; 
    const spacing = 40; 
    const lineHeight = 50;
    let letters = getLetters(text);
    letters.forEach(letter => {
    drawSymbol(letter, x, y);
        x += spacing;
        if (x > canvas.width - spacing) {
            x = startX;
            y += lineHeight;
        }
    });
    function drawSymbol(letter, x, y) {
    ctx.save();

    let seed = letter.charCodeAt(0);
    let symbolSize = size + (seed % 15);
    let angle = (seed % 360) * Math.PI / 180;
    ctx.translate(x, y);
    ctx.rotate(angle);

    ctx.beginPath();

    let type = seed % 5;
    
    switch (type) {
        case 0: // Zigzag
            for (let i = 0; i < 3; i++) {
                let dx = (i % 2 === 0 ? 1 : -1) * (symbolSize / 2);
                let dy = (i + 1) * 5;
                ctx.lineTo(dx, dy);
            }
            break;
        case 1: // Triangular lines
            for (let i = 0; i < 3; i++) {
                let offsetX = Math.sin(seed + i) * (symbolSize / 2);
                let offsetY = Math.cos(seed + i) * (symbolSize / 2);
                ctx.moveTo(0, 0);
                ctx.lineTo(offsetX, offsetY);
            }
            break;
        case 2: // Arcs
            for (let i = 0; i < 2; i++) {
                let arcX = Math.sin(seed + i) * (symbolSize / 3);
                let arcY = Math.cos(seed + i) * (symbolSize / 3);
                ctx.moveTo(arcX + symbolSize / 4, arcY);
                ctx.arc(arcX, arcY, symbolSize / 4, 0, Math.PI * 2);
            }
            break;
        case 3: // Crossed lines
            ctx.moveTo(-symbolSize / 2, -symbolSize / 2);
            ctx.lineTo(symbolSize / 2, symbolSize / 2);
            ctx.moveTo(symbolSize / 2, -symbolSize / 2);
            ctx.lineTo(-symbolSize / 2, symbolSize / 2);
            break;
        case 4: // Square and dot
            ctx.strokeRect(-symbolSize / 4, -symbolSize / 4, symbolSize / 2, symbolSize / 2);
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, 2 + (seed % 4), 0, Math.PI * 2);
            break;
    }

    ctx.stroke();
    ctx.restore();
    }
}

drawStrangeSymbols("Hello world!");
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getLetters(message) {
  return message.split('');
}

window.onload = function() {
    canvas.clearRect;
    setInterval(() => {
        canvas.clearRect;
        drawStrangeSymbols(messages[randomValue(0, messages.length-1)]);
    }, randomValue(1, 20)*1000);
}