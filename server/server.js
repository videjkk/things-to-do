const cors = require("cors");
const express = require("express");


const app = express();
const PORT = 4000;


const list = [];


const tasks = [
    "Attend at least one major sporting event: the Super Bowl, the Olympics, the U.S. Open.",
    "Throw a huge party and invite every one of your friends.",
    "Swim with a dolphin.",
    "Skydive.",
    "Have your portrait painted.",
    "Learn to speak a foreign language and make sure you use it.",
    "Go skinny-dipping at midnight in the South of France.",
    "Watch the launch of the space shuttle.",
    "Spend a whole day eating junk food without feeling guilty.",
    "Be an extra in a film.",
    "Tell someone the story of your life, sparing no details.",
    "Make love on a forest floor.",
    "Make love on a train.",
    "Learn to rollerblade.",
    "Own a room with a view.",
    "Brew your own beer.",
    "Learn how to take a compliment.",
    "Buy a round-the-world air ticket and a rucksack, and run away.",
    "Grow a beard and leave it for at least a month.",
    "Give your mother a dozen red roses and tell her you love her.",
    "Be a member of the audience in a TV show.",
    "Put your name down to be a passenger on the first tourist shuttle to the moon.",
    "Send a message in a bottle.",
    "Ride a camel into the desert.",
    "Get to know your neighbors.",
    "Plant a tree.",
    "Learn not to say yes when you really mean no.",
    "Write a fan letter to your all-time favorite hero or heroine.",
    "Visit the Senate and the House of Representatives to see how Congress really works.",
    "Learn to ballroom dance properly.",
    "Eat jellied eels from a stall in London.",
    "Be the boss.",
    "Fall deeply in love -- helplessly and unconditionally.",
    "Ride the Trans-Siberian Express across Asia.",
    "Sit on a jury.",
    "Write the novel you know you have inside you.",
    "Go to Walden Pond and read Thoreau while drifting in a canoe.",
    "Stay out all night dancing and go to work the next day without having gone home (just once).",
    "Drink beer at Oktoberfest in Munich.",
    "Be someone's mentor.",
    "Shower in a waterfall.",
    "Ask for a raise.",
    "Learn to play a musical instrument with some degree of skill.",
    "Teach someone illiterate to read.",
    "Be one of the first to take a flight on the new Airbus A380.",
    "Spend a night in a haunted house -- by yourself.",
    "Write down your personal mission statement, follow it, and revise it from time to time.",
    "See a lunar eclipse.",
    "Spend New Year's in an exotic location.",
    "Get passionate about a cause and spend time helping it, instead of just thinking about it.",
    "Experience weightlessness.",
    "Sing a great song in front of an audience.",
    "Ask someone you've only just met to go on a date.",
    "Drive across America from coast to coast.",
    "Make a complete and utter fool of yourself.",
    "Own one very expensive but absolutely wonderful business suit.",
    "Write your will.",
    "Sleep under the stars.",
    "Take a ride on the highest roller coaster in the country.",
    "Learn how to complain effectively -- and do it!",
    "Go wild in Rio during Carnival.",
    "Spend a whole day reading a great novel.",
    "Forgive your parents.",
    "Learn to juggle with three balls.",
    "Drive the Autobahn.",
    "Find a job you love.",
    "Spend Christmas on the beach drinking pina coladas.",
    "Overcome your fear of failure.",
    "Raft through the Grand Canyon.",
    "Donate money and put your name on something: a college scholarship, a bench in the park.",
    "Buy your own house and then spend time making it into exactly what you want.",
    "Grow a garden.",
    "Spend three months getting your body into optimum shape.",
    "Drive a convertible with the top down and music blaring.",
    "Accept yourself for who you are.",
    "Learn to use a microphone and give a speech in public.",
    "Scuba dive off Australia's Great Barrier Reef.",
    "Go up in a hot-air balloon.",
    "Attend one really huge rock concert.",
    "Kiss someone you've just met on a blind date.",
    "Be able to handle: your tax forms, Jehovah's Witnesses, your banker, telephone solicitors.",
    "Give to a charity -- anonymously.",
    "Lose more money than you can afford at roulette in Vegas.",
    "Let someone feed you peeled, seedless grapes.",
    "Kiss the Blarney stone and develop the gift of gab.",
    "Fart in a crowded space.",
    "Make love on the kitchen floor.",
    "Go deep sea fishing and eat your catch.",
    "Create your own web site.",
    "Visit the Holy Land.",
    "Make yourself spend a half-day at a concentration camp and swear never to forget.",
    "Run to the top of the Statue of Liberty.",
    "Create your Family Tree.",
    "Catch a ball in the stands of a major league baseball stadium.",
    "Make a hole-in-one.",
    "Ski a double-black diamond run.",
    "Learn to bartend.",
    "Run a marathon.",
    "Look into your child's eyes, see yourself, and smile.",
    "Reflect on your greatest weakness, and realize how it is your greatest strength.",
];

const priority = [
    'minor',
    'critical'
];
const createTasks = (amount) => {
    let count = 1
    let i = 0;
  while (count <= amount) {
    list.push({
        id: i++,
        title: tasks[Math.trunc(Math.random()*100)],
        status: Math.random()*10 < 4 ? true : false,
        priority: priority[Math.round(Math.random()*100)]
    });
    count++;
  }
  return list;
};

app.use(cors());

createTasks(200);

app.get("/", (_req, res) => {
  res.json(list);
});

app.listen(PORT, () => {
  console.log("Server is running. Port: " + PORT);
});
