// categories
const catsNames = ["world", "politics", "tech", "sports"];
// titles
const topics = {
  world: [
    "Climate Change",
    "Space Exploration",
    "Economic Crisis",
    "Global Politics",
    "Natural Disasters",
    "Military Conflicts",
    "Environmental Protection",
    "Public Health",
    "Scientific Discoveries",
    "Education Reforms",
    "Mental Health Awareness",
    "Job Market",
    "Renewable Energy",
    "Water Scarcity",
    "Migration Trends",
    "Human Rights",
    "International Aid",
    "Urbanization",
    "Food Security",
    "Terrorism",
    "Cultural Preservation",
    "Poverty Reduction",
    "Disease Outbreaks",
    "Ocean Pollution",
    "Nuclear Disarmament",
    "Global Trade",
    "Wildlife Conservation",
    "Diplomatic Relations",
    "Air Quality",
    "Artificial Intelligence Ethics",
    "Gender Equality",
    "Youth Activism",
    "Refugee Crisis",
    "Censorship",
    "Social Justice",
    "Corruption Scandals",
    "Space Debris",
    "Financial Regulations",
    "Population Growth",
    "Climate Policy"
  ],
  politics: [
    "Global Politics",
    "Elections",
    "Education Reforms",
    "Economic Crisis",
    "Military Conflicts",
    "Public Health",
    "Privacy Concerns",
    "Diplomatic Talks",
    "Government Transparency",
    "Budget Allocations",
    "National Security",
    "Judicial Reforms",
    "Civil Rights",
    "Campaign Financing",
    "Impeachment Proceedings",
    "Trade Agreements",
    "Constitutional Amendments",
    "Foreign Policy",
    "Whistleblower Protection",
    "Border Control",
    "Voting Rights",
    "Corruption Investigations",
    "Parliamentary Debates",
    "International Sanctions",
    "Defense Spending",
    "Lobbying Influence",
    "Public Protests",
    "Media Censorship",
    "Policy Making",
    "Humanitarian Aid",
    "Surveillance Laws",
    "Tax Reforms",
    "Environmental Legislation",
    "Health Care Policy",
    "Gun Control",
    "Freedom of Speech",
    "Civil Disobedience",
    "Migration Policy",
    "Police Reform",
    "Political Polarization"
  ],
  tech: [
    "AI Technology",
    "Tech Innovations",
    "Cybersecurity Threats",
    "Robotics",
    "Smartphones",
    "Video Games",
    "Privacy Concerns",
    "Quantum Computing",
    "Virtual Reality",
    "Augmented Reality",
    "Blockchain Technology",
    "5G Networks",
    "Self-Driving Cars",
    "Cloud Computing",
    "Big Data",
    "Machine Learning",
    "Wearable Devices",
    "Space Tech",
    "Biotechnology",
    "Internet of Things",
    "Digital Assistants",
    "Data Breaches",
    "Mobile Apps",
    "Tech Startups",
    "Open Source Projects",
    "E-Waste Management",
    "Programming Languages",
    "Smart Home Devices",
    "Tech Patents",
    "Social Media Algorithms",
    "Tech Regulations",
    "Online Privacy",
    "Smart Cities",
    "Digital Currency",
    "Facial Recognition",
    "Tech in Education",
    "Streaming Services",
    "Cloud Gaming",
    "Neural Interfaces",
    "Satellite Internet"
  ],
  sports: [
    "Sports Events",
    "Olympic Games",
    "World Cup",
    "Athlete Transfers",
    "Injury Reports",
    "Training Camps",
    "Championships",
    "League Matches",
    "Team Rankings",
    "Retirement Announcements",
    "Stadium Developments",
    "Fan Culture",
    "Sponsorship Deals",
    "Coaching Changes",
    "Sports Psychology",
    "Performance Enhancements",
    "Youth Leagues",
    "Paralympics",
    "Doping Scandals",
    "Sports Politics",
    "Hall of Fame Inductions",
    "Record-Breaking Moments",
    "Contract Negotiations",
    "Player Suspensions",
    "Sports Documentaries",
    "Fantasy Sports",
    "International Tournaments",
    "Post-Game Analysis",
    "Sports Commentary",
    "Pre-Season Preparations",
    "Historic Matches",
    "Athlete Endorsements",
    "Game Highlights",
    "Live Broadcasts",
    "Ticket Sales",
    "Referee Decisions",
    "Sports Technology",
    "Fan Protests",
    "Esports Competitions"
  ]
};
// news
const sentences = [
  "Experts warn of significant changes ahead.",
  "Analysts are debating the long-term effects.",
  "The public remains divided over the issue.",
  "Protests have erupted in multiple cities.",
  "New regulations may be introduced soon.",
  "Critics argue that the move is too drastic.",
  "Supporters claim this is a step forward.",
  "Social media is buzzing with reactions.",
  "Authorities are investigating the situation.",
  "No official statement has been released yet.",
  "The event shocked the international community.",
  "Industry leaders are taking note.",
  "Many fear a potential backlash.",
  "Public figures are speaking out.",
  "This has sparked global conversation.",
  "The development is gaining traction.",
  "Several countries are responding cautiously.",
  "Public trust is being tested.",
  "Some claim it's a political maneuver.",
  "The market reacted immediately.",
  "Experts highlight the risks involved.",
  "The situation is developing rapidly.",
  "Concerns over safety have emerged.",
  "This could impact millions.",
  "A solution is being discussed.",
  "Activists are demanding answers.",
  "New data sheds light on the issue.",
  "Officials are calling for calm.",
  "The community is rallying together.",
  "Backlash has grown over the past week.",
  "International leaders are watching closely.",
  "Public opinion remains uncertain.",
  "There has been a mixed response.",
  "Opposition parties are criticizing the move.",
  "The timeline for action is unclear.",
  "This marks a turning point.",
  "Repercussions could be long-lasting.",
  "A legal challenge is expected.",
  "Funding remains a major issue.",
  "The initiative has stalled.",
  "This is now a top priority.",
  "Campaigns have begun nationwide.",
  "Local leaders are urging restraint.",
  "Voter turnout could be affected.",
  "Diplomatic talks are underway.",
  "Tensions are rising in the region.",
  "There is no consensus yet.",
  "A new report just dropped.",
  "Communities are bracing for change.",
  "Experts say history is repeating itself.",
  "The latest study shows surprising results.",
  "Authorities are stepping up security measures.",
  "The economy has shown signs of recovery.",
  "Activism is gaining momentum in several cities.",
  "Government officials are under pressure.",
  "New alliances are being formed in the region.",
  "Relief efforts are underway after the disaster.",
  "Many fear the worst is yet to come.",
  "Social unrest continues to spread.",
  "Politicians are calling for unity.",
  "A breakthrough is expected soon.",
  "The issue is causing significant debate among experts.",
  "Diplomatic tensions are escalating.",
  "Several key figures are expected to testify.",
  "Public reactions have been mixed at best.",
  "International organizations are offering support.",
  "Leaders are calling for international cooperation.",
  "The economy could face new challenges ahead.",
  "The situation is being monitored closely.",
  "Public health concerns are rising.",
  "There are calls for transparency from the government.",
  "A wave of protests is expected in the coming days.",
  "The initiative has sparked a wave of support.",
  "New research is shedding light on the topic.",
  "The development has divided the nation.",
  "Media outlets are closely following the situation.",
  "The administration is defending its stance.",
  "The public is anxiously awaiting a resolution.",
  "Reform efforts are underway."
];
// news with placeable
const blank= [
  "The recent developments in ___ have drawn global attention.",
  "Citizens are rallying in support of ___.",
  "New research has surfaced regarding ___.",
  "International leaders have expressed concerns about ___.",
  "Public opinion on ___ is deeply divided.",
  "The government is preparing new policies on ___.",
  "Debates over ___ continue to intensify.",
  "The future of ___ remains uncertain.",
  "Massive protests erupted following news about ___.",
  "Funding for ___ has been cut dramatically.",
  "The impact of ___ is being felt worldwide.",
  "Young people are taking to the streets over ___.",
  "Legislators are split on how to handle ___.",
  "The latest scandal involving ___ has gone viral.",
  "Data reveals alarming trends in ___.",
  "Local businesses are affected by ___.",
  "Online platforms are flooded with posts about ___.",
  "Celebrities have spoken out about ___.",
  "Rumors surrounding ___ are spreading quickly.",
  "A growing number of experts are warning about ___.",
  "Documentaries focusing on ___ are gaining popularity.",
  "The tech world is abuzz with news about ___.",
  "Critics are calling for a boycott over ___.",
  "Global initiatives to address ___ are gaining support.",
  "Recent events have put ___ back in the spotlight.",
  "New breakthroughs could change the future of ___.",
  "Schools are incorporating discussions about ___.",
  "There’s a heated debate on the future of ___.",
  "A major summit will address ___ next month.",
  "Startups are emerging to tackle issues in ___.",
  "Surveys show growing concern over ___.",
  "The entertainment industry is shifting due to ___.",
  "A high-profile case linked to ___ is ongoing.",
  "This week’s headlines are dominated by ___.",
  "Public figures are demanding transparency about ___.",
  "Recent disasters have highlighted the need for action on ___.",
  "Lawsuits are being filed in relation to ___.",
  "A viral video related to ___ has sparked controversy.",
  "Debates in parliament today centered on ___.",
  "Campaigns aimed at solving ___ are being launched.",
  "Experts are concerned about the long-term effects of ___.",
  "Tensions between countries over ___ are escalating.",
  "The debate over ___ has reached a boiling point.",
  "New regulations regarding ___ are set to be announced.",
  "The environmental consequences of ___ are becoming more evident.",
  "High-profile figures are calling for action on ___.",
  "The public outcry over ___ is growing louder.",
  "Scientists are making significant discoveries related to ___.",
  "The rise in ___ has raised questions about its impact on society.",
  "The economy is being heavily influenced by ___.",
  "___ has become a focal point in this year’s elections.",
  "Governments worldwide are tightening restrictions on ___.",
  "International aid for ___ is being mobilized.",
  "A surge in demand for ___ is shaking the market.",
  "Social media is abuzz with reactions to ___.",
  "___ continues to dominate the headlines in the tech world.",
  "The cultural impact of ___ cannot be underestimated.",
  "A new report sheds light on the challenges facing ___.",
  "___ has sparked a nationwide debate on ethics.",
  "The government is under fire for its handling of ___.",
  "Proposals to address ___ are being met with skepticism.",
  "The controversy surrounding ___ has reached new heights.",
  "Young activists are leading the charge against ___.",
  "The global community is rallying to combat ___.",
  "The latest statistics show a sharp increase in ___.",
  "The effects of ___ are becoming more visible across the globe.",
  "Efforts to mitigate the damage caused by ___ are underway.",
  "___ is expected to have a major influence on upcoming elections.",
  "Scientists are working to find a solution to the crisis caused by ___.",
  "The future of ___ is uncertain due to growing political tensions.",
  "The investigation into ___ is making headlines.",
  "___ is being hailed as a breakthrough in the fight against climate change.",
  "The rise in ___ is prompting calls for more regulation.",
  "A new study reveals troubling insights into ___.",
  "Calls for stricter laws regarding ___ are gaining momentum.",
  "A new documentary sheds light on the hidden side of ___.",
  "___ is a key topic of discussion at this year’s global summit.",
  "Experts are debating the ethical implications of ___.",
  "Political leaders are divided on how to address the issue of ___.",
  "The rise of ___ is challenging traditional industry standards.",
  "___ is having a profound impact on the global economy.",
  "A new survey shows widespread concern about the future of ___.",
  "___ is quickly becoming a major issue in international relations.",
  "Research suggests that ___ may be linked to long-term health problems.",
  "The effects of ___ are being felt most strongly in developing countries.",
  "___ has become a symbol of resistance for many activists.",
  "Major corporations are facing backlash over their involvement in ___.",
  "___ is causing a shift in global power dynamics.",
  "The future of ___ is at risk due to recent developments.",
  "International organizations are stepping up efforts to tackle ___."
];
// utility func
function getDailySeed() {
  const now = new Date();
  const seed = Number(
    now.getFullYear().toString() +
    (now.getMonth() + 1).toString().padStart(2, '0') +
    now.getDate().toString().padStart(2, '0')
  );
  return seed;
}

function createSeededRNG(seed) {
  return function () {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return (seed >>> 0) / 4294967296;
  };
}

function randomIndex(rng, max) {
  return Math.floor(rng() * (max - 1 + 0.9999999));
}

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// news generator
function generateNews(category) {
  let currTitles = [];
  const topicList = topics[category];
  if (!topicList) return;

  let quantity = randomValue(10, 20);
  let newsGrid = document.getElementById("newsGrid");
  newsGrid.innerHTML = '';

  for (let i = 0; i < quantity; i++) {
    let title = topicList[randomValue(0, topicList.length - 1)];
    if (!currTitles.includes(title)) {
      let newNews = document.createElement("article");
      let titleEl = document.createElement("h3");
      titleEl.textContent = title;
      currTitles.push(title);
      newNews.appendChild(titleEl);
      newNews.classList.add("news-card");
      let newsEl = document.createElement("p");
      let length = randomValue(5, 15);

      let newsText = '';
      let currSentences = [];
      for (let j = 0; j < length; j++) {
        let nextSentence = randomValue(0, 1);
        let text;
        if (nextSentence === 0) {
          text = sentences[randomValue(0, sentences.length - 1)];
        } else {
          text = blank[randomValue(0, blank.length - 1)].replace("___", title.toLowerCase());
        }
        if (!currSentences.includes(text)) {
          newsText += ' ' + text;
          currSentences.push(text);
        } else {
          j--;
        }
      }

      newsEl.textContent = newsText.trim();
      newNews.appendChild(newsEl);
      newsGrid.appendChild(newNews);
    } else {
      i--;
    }
  }
}

function setCategory(category) {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("cat", category);
    window.location.href = currentUrl.toString();
}
// daily news aka featured
function dailyNews() {
  const featured = document.getElementById("feature");
  if (!featured) return;

  const seed = getDailySeed();
  const rng = createSeededRNG(seed);

  const categoryKeys = Object.keys(topics);
  const catIndex = randomIndex(rng, categoryKeys.length);
  const selectedCategory = categoryKeys[catIndex];
  const topicList = topics[selectedCategory];

  const newsCount = 1 + randomIndex(rng, 3);

  let usedTitles = [];

  for (let i = 0; i < newsCount; i++) {
    let title;
    do {
      title = topicList[randomIndex(rng, topicList.length)];
    } while (usedTitles.includes(title));
    usedTitles.push(title);

    const article = document.createElement("article");
    article.classList.add("news-card");

    const titleEl = document.createElement("h3");
    titleEl.textContent = title;
    article.appendChild(titleEl);

    const contentEl = document.createElement("p");
    let content = '';
    let usedSentences = new Set();

    const paragraphLength = 8 + randomIndex(rng, 11);
    for (let j = 0; j < paragraphLength; j++) {
      let useBlank = randomIndex(rng, 2);
      let sentence;
      if (useBlank) {
        sentence = blank[randomIndex(rng, blank.length)].replace("___", title.toLowerCase());
      } else {
        sentence = sentences[randomIndex(rng, sentences.length)];
      }

      if (!usedSentences.has(sentence)) {
        content += ' ' + sentence;
        usedSentences.add(sentence);
      } else {
        j--;
      }
    }

    contentEl.textContent = content.trim();
    article.appendChild(contentEl);
    featured.appendChild(article);
  }
}
// init
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("cat");
  const isValidCategory = catsNames.includes(category);

  if (category === null || category === "") {
    document.getElementById("newsGrid").style.display = "none";
  } else if (isValidCategory) {
    generateNews(category);
  } else {
    document.getElementById("error").style.display = "block";
  }
  dailyNews();
};