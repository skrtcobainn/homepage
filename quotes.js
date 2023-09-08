const quotes = [
    "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    "The happiness of your life depends upon the quality of your thoughts.",
    "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    "Waste no more time arguing about what a good man should be. Be one.",
    "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
    "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love ...",
    "The best revenge is to be unlike him who performed the injury.",
    "The soul becomes dyed with the colour of its thoughts.",
    "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
    "It is not death that a man should fear, but he should fear never beginning to live.",
    "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    "Our life is what our thoughts make it.",
    "Whenever you are about to find fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?",
    "If someone is able to show me that what I think or do is not right, I will happily change, for I seek the truth, by which no one was ever truly harmed. It is the person who continues in his self-deception and ignorance who is harmed.",
    "I have often wondered how it is that every man loves himself more than all the rest of men, but yet sets less value on his own opinion of himself than on the opinion of others.",
    "If it is not right do not do it; if it is not true do not say it.",
    "The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.",
    "Very little is needed to make a happy life; it is all within yourself in your way of thinking.",
    "When you wake up in the morning, tell yourself: the people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous and surly. They are like this because they can't tell good from evil. But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer has a nature related to my own - not of the same blood and birth, but the same mind, and possessing a share of the divine. And so none of them can hurt me. No one can implicate me in ugliness. Nor can I feel angry at my relative, or hate him. We were born to work together like feet, hands and eyes, like the two rows of teeth, upper and lower. To obstruct each other is unnatural. To feel anger at someone, to turn your back on him: these are unnatural.",
    "The best revenge is not to be like your enemy.",
    "Reject your sense of injury and the injury itself disappears.",
    "When another blames you or hates you, or people voice similar criticisms, go to their souls, penetrate inside and see what sort of people they are. You will realize that there is no need to be racked with anxiety that they should hold any particular opinion about you.",
    "How much more grievous are the consequences of anger than the causes of it.",
    "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
    "Here is a rule to remember in the future, when anything tempts you to feel bitter: not 'This is misfortune,' but 'To bear this worthily is good fortune.'",
    "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look.",
    "Think of yourself as dead. You have lived your life. Now, take what's left and live it properly. What doesn't transmit light creates its own darkness.",
    "How much time he gains who does not look to see what his neighbor says or does or thinks, but only at what he does himself, to make it just and holy.",
    "You always own the option of having no opinion. There is never any need to get worked up or to trouble your soul about things you can't control. These things are not asking to be judged by you. Leave them alone."
];


  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  const randomQuote = getRandomQuote();
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = randomQuote;