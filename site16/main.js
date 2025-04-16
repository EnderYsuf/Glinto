const questionWords = [
  "What", "How", "Why", "Where", "When", "Who", "Which", "Is", "Are", "Can",
  "Do", "Does", "Did", "Could", "Would", "Should", "Has", "Have", "Had", "May", "Might",
  "Will", "Tell", "Explain", "Describe", "Name", "Give", "Find", "Make", "Create", "Help",
  "Could you", "Would you", "Should I", "Do you", "Is it", "How many", "How much", "Why do",
  "Where can", "What happens", "What is the", "When was", "What if", "How do",
  "When should", "Why does", "Can you", "How long", "Do I", "Is there", "Are we", "Shall we",
  "What are", "Why is", "Can I", "Did you", "Would it", "Have you", "Could it", "May I",
  "How far", "When will", "Does it", "Who was", "Can we", "Why not", "Where is", "Is there any",
  "Will it", "Could that", "Was it", "Shall I"
];

const subjects = [
  "your name", "the weather", "the capital of France", "the meaning of life", "the future", 
  "the internet", "a computer", "a cat", "a dog", "a car", "a book", "your favorite movie",
  "the economy", "the environment", "science", "history", "art", "music", "a holiday", "a dream",
  "your job", "your plans", "a smartphone", "the earth", "the galaxy", "a robot", "a spaceship", 
  "a mystery", "a superhero", "the sun", "a park", "the ocean", "a video game", "a poem", "a song",
  "a puzzle", "a person", "a location", "a restaurant", "a phone call", "the universe", "an adventure",
  "a forest", "an island", "a castle", "a dragon", "a wizard", "a portal", "a time machine", "a spaceship crew",
  "an alien", "a secret door", "a treasure", "a legend", "a myth", "a scientist", "a magician", "an idea",
  "a theory", "a cloud", "a mountain", "a city", "a village", "a school", "a library", "a factory", "a planet"
];

const answers = [
  "42", "Paris", "yes", "no", "a long time ago", "tomorrow", "unknown", "not sure", "maybe",
  "because it's complicated", "it depends", "a computer virus", "an astronaut", "a dog person",
  "a cat person", "in the past", "in the future", "on the moon", "it’s a secret", "it’s personal",
  "I don't know", "a dream", "a mystery", "with a twist", "unexpectedly", "by accident", "on purpose",
  "in the next decade", "when the time is right", "it could be worse", "I'll think about it", "let's find out",
  "it was a mistake", "I wish I knew", "we'll see", "in a few years", "who knows", "a long time ago", 
  "just like that", "nothing specific", "not available yet", "ask me later",
  "maybe someday", "the answer is unclear", "the stars didn't align", "just because", "through a portal",
  "behind the curtain", "it vanished", "in another dimension", "under the bed", "on a Tuesday",
  "inside a black hole", "it ran away", "encoded in DNA", "written in the stars", "it evolved",
  "it’s imaginary", "through trial and error", "after much debate", "left unsaid", "delayed indefinitely",
  "deep in thought", "in another life", "like magic", "out of nowhere", "a glitch", "by design"
];

let new_question;
let answer_1, answer_2;

var answer1_btn = document.getElementById("answer1");
var answer2_btn = document.getElementById("answer2");
var question = document.getElementById("question");

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
    return `${questionWords[randomValue(0, questionWords.length-1)]} ${subjects[randomValue(0, subjects.length-1)]}?`;
}

function getAnswers() {
    let answer1 = answers[randomValue(0, answers.length-1)];
    let answer2 = answers[randomValue(0, answers.length-1)];
    if (answer1 === answer2) {
        return getAnswers();
    } else {
        return { answer_1: answer1, answer_2: answer2 };
    }
}

function answer(n) {
    let new_answer = document.createElement("li");
    if (n === 1) {
        new_answer.innerHTML = `${new_question} : ${answer_1}`;
    } else {
        new_answer.innerHTML = `${new_question} : ${answer_2}`;
    }

    var logList = document.getElementById('logList');
    logList.insertBefore(new_answer, logList.firstChild);
    
    setQuestion();
}

function setQuestion() {
    new_question = generateQuestion();
    const { answer_1: new_answer_1, answer_2: new_answer_2 } = getAnswers();
    answer_1 = new_answer_1;
    answer_2 = new_answer_2;
    
    question.innerHTML = new_question;
    answer1_btn.innerHTML = answer_1;
    answer2_btn.innerHTML = answer_2;
}

window.onload = function() {
    setQuestion();
};