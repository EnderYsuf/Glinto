#!/bin/bash

# Define an array of titles, descriptions, and folders
titles=(
    "Random Useful Facts"
    "Excuse Generator"
    "Advanced Name Generator"
    "Your Destiny"
    "Philosophy Questions"
    "Which Vegetable Are You?"
    "Helpful Hint Generator"
    "Forget-Me-Not AI"
    "Click Me!"
    "Rock"
    "Website"
    "Voting"
    "Award Winner"
    "Potato World"
    "Scroll to the Bottom"
    "Questions"
    "Nothing"
    "A Colorful Website"
    "Diagram"
    "Tetris"
    "?"
    "Glinto 2.0"
    "WakePedia"
    "ANN"
    "Daily Weather Forecast"
    "Lunar Horoscope"
    "Glinto Translator"
    "History of Website"
    "Visit Counter"
)

descriptions=(
    "Discover a collection of intriguing and practical facts that might surprise you and prove handy in everyday conversations."
    "Need a quick way out of a tricky situation? Generate creative, amusing, or even convincing excuses for any scenario."
    "Whether you're creating a character, brand, or project, this tool generates unique and memorable names tailored to your needs."
    "Unravel the mysteries of your future! This website provides cryptic yet intriguing insights into what fate may hold for you."
    "Challenge your mind with deep and thought-provoking philosophical questions that spark debates and expand perspectives."
    "Take this serious quiz to discover which vegetable best represents your personality based on your answers."
    "Receive practical, witty, and unexpected hints for everyday life situations, ranging from productivity tips to clever life hacks."
    "An AI that helps you remember forgotten things."
    "A mysterious button. What happens when you click it? Only one way to find out!"
    "rock"
    "A website about websites. Possibly the most self-aware web page you'll ever visit."
    "Cast your vote on the most serious and important topics. Democracy at its greatest!"
    "An exclusive website dedicated to winners. What award did you win? Click to find out!"
    "A world dedicated entirely to potatoes. Learn everything you never knew you needed to know about this humble vegetable."
    "Scroll down to the very bottom of the page and discover what awaits you there. Will you be surprised?"
    "Get different questions and answer them, from the most trivial to the most profound. Become smarter with every question!"
    "There is nothing to see"
    "Experience a vibrant explosion of colors that will dazzle your eyes and brighten your day."
    "Explore diagram to visualize your ideas clearly."
    "Play the classic game of Tetris and challenge your puzzle-solving skills."
    "?"
    "A search engine that delivers the most accurate results. Only relevance and comfort."
    "An encyclopedia of things you never thought you'd need to know. Curated knowledge with a infinite quantity of topics."
    "Stay informed with our news reports. The truth is our hobby."
    "Get a helpful forecast's of today’s weather—rain or shine, we’ve got you sort of covered."
    "Find out how the moon’s current phase might influence your mood, energy, and destiny today."
    "Translate anything into Glinto-speak—a language that’s accurate and poetic."
    "Explore the surprisingly rich history of this website, from the file creation to the tags being added."
    "Curious how many times have you been here? This site keeps count!"
)

folders=(
    "site1" "site2" "site3" "site4" "site5" "site6" "site7" "site8" "site9" "site10"
    "site11" "site12" "site13" "site14" "site15" "site16" "site17" "site18" "site19" "site20"
    "site21" "site22" "site23" "site24" "site25" "site26" "site27" "site28" "site29"
)

for i in "${!folders[@]}"; do
    folder="${folders[$i]}"
    desc="${descriptions[$i]}"
    filepath="$folder/index.html"

    if [[ -f "$filepath" ]]; then
        echo "Updating $filepath..."
        # Remove existing description meta tag if exists
        sed -i '/<meta name="description"/d' "$filepath"

        # Insert new meta tag just after <head> tag
        sed -i "/<head>/a <meta name=\"description\" content=\"${desc//\"/&quot;}\">" "$filepath"
    else
        echo "Skipping $filepath (not found)"
    fi
done