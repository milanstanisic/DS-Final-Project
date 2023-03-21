import { MachineConfig, send, Action, assign } from "xstate";

var zodiac_descriptions: Array<string> = ["It uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, it derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac. Do you know what sign it is?", "Balance, harmony, and justice define its energy. It is represented by the scales, an association that reflects its fixation on establishing equilibrium. It is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart. Do you know what sign it is?", "It is climbing the mountain straight to the top and knows that patience, perseverance, and dedication are the only way to scale. It is skilled at navigating both the material and emotional realms. Do you know what sign it is?", "Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, it dives headfirst into even the most challenging situations—and they'll make sure they always come out on top! Do you know what sign it is?", "No other sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread! It is an earth sign represented by the bull. Like their celestial spirit animal, it enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors. Do you know what sign it is?", "Represented by the crab, it seamlessly weaves between the sea and shore representing the ability to exist in both emotional and material realms. It is highly intuitive and their psychic abilities manifest in tangible spaces. Do you know what sign it is?", "Passionate, loyal, and infamously dramatic, it is the king of the celestial jungle. It is delighted to embrace their royal status: Vivacious, theatrical, and fiery, it loves to bask in the spotlight and celebrate… well, themselves. Do you know what sign it is?", "It is logical, practical, and systematic in its approach to life. It is an earth sign historically represented by the goddess of wheat and agriculture. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice. Do you know what sign it is?", "This fire sign knows no bounds. Represented by the archer, it is always on a quest for knowledge. The last fire sign of the zodiac, it launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures. Do you know what sign it is?", "Innovative, progressive, and shamelessly revolutionary, it is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, it is the most humanitarian astrological sign. At the end of the day, it is dedicated to making the world a better place. Do you know what sign it is?", "It is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, it has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions. Do you know what sign it is?"];

var zodiac_actual: Array<string> = ["scorpio", "libra", "capricorn", "aries", "taurus", "cancer", "leo", "virgo", "sagittarius", "aquarius", "pisces"];

function future_tell(){
  let predictions: Array<string> = ["Lucky you! The stars say that lots of good things are going to happen, and that you will be fulfilled in this aspect. All you need to do is wait, and this won't take long!", "With a little effort, things are going to take a great turn. Do not hesitate to take the advantage of the planetary movements, this is the right moment to take an action. All your efforts will be rewarded sooner than you expect!", "Jupiter's gravity force is exceptionally strong right now. This gravitational attraction attracts major changes in this aspect of your life. You'd better get ready for a major twist of events which will happen very soon.", "Be careful with your decisions if you don't want to have troubles in this aspect. Do not make any sudden decisions without thinking, the star constellations in the sky tell that stability is the key. Disturbing the current state with any sudden decisions and actions will have tragic consequences.", "I see nothing but stability. Your life will remain stable in this area, I expect no major breakthroughs or troubles to arise."];
  return predictions[Math.floor(Math.random() * (4 - 0 + 1))];
}

const add_one = (context: SDSContext) => {
  return (context.count + 1);
};

const compare = (context: SDSContext) => {
  let a = 0;
  for (let i = 0; i <= context.count; i++) {
    if (context.zodiac_answers[i] === zodiac_actual[i]) {
      a = a + 1;
    }
  }
  return a;
};

const evaluator = (context: SDSContext) => {
  if (context.score === 0) {
    return "I sadly see that you don't know any of them. Improve yourself.";
  }
  if (context.score === 11) {
    return "Wow! I'm impressed - you know all of them!";
  }
  if (context.score > 0 && context.score < 6) {
    return "You know a tiny bit, you should expand your knowledge!"; 
  }
  if (context.score > 5 && context.score < 11) {
    return "Well done! Seems like you know quite a few!"; 
  }
};

function say(text: string): Action<SDSContext, SDSEvent> {
  return send((_context: SDSContext) => ({ type: "SPEAK", value: text }));
}

const getNLUResult = (context: SDSContext) => {
  let nlu_result = context.nluResult.prediction.topIntent;
  return nlu_result;
};

interface Grammar {
  [index: string]: {
    intent: string;
    entities: {
      [index: string]: string;
    };
  };
}

const grammar: Grammar = {
  "it's libra": {
    intent: "None",
    entities: { sign: "libra" },
  },
  "it's scorpio": {
    intent: "None", 
    entities: { sign: "scorpio" },
  },
  "it's capricorn": {
    intent: "None", 
    entities: { sign: "capricorn" },
  },
  "it's pisces": {
    intent: "None",
    entities: { sign: "pisces" },
  },
  "it's aquarius": {
    intent: "None", 
    entities: { sign: "aquarius" },
  },
  "it's sagittarius": {
    intent: "None", 
    entities: { sign: "sagittarius" },
  },
  "it's virgo": {
    intent: "None",
    entities: { sign: "virgo" },
  },
  "it's leo": {
    intent: "None", 
    entities: { sign: "leo" },
  },
  "it's cancer": {
    intent: "None", 
    entities: { sign: "cancer" },
  },
  "it's aries": {
    intent: "None",
    entities: { sign: "aries" },
  },
  "it's taurus": {
    intent: "None", 
    entities: { sign: "taurus" },
  },
  libra: {
    intent: "None",
    entities: { sign: "libra" },
  },
  scorpio: {
    intent: "None", 
    entities: { sign: "scorpio" },
  },
  capricorn: {
    intent: "None", 
    entities: { sign: "capricorn" },
  },
  pisces: {
    intent: "None",
    entities: { sign: "pisces" },
  },
  aquarius: {
    intent: "None", 
    entities: { sign: "aquarius" },
  },
  sagittarius: {
    intent: "None", 
    entities: { sign: "sagittarius" },
  },
  virgo: {
    intent: "None",
    entities: { sign: "virgo" },
  },
  leo: {
    intent: "None", 
    entities: { sign: "leo" },
  },
  cancer: {
    intent: "None", 
    entities: { sign: "cancer" },
  },
  aries: {
    intent: "None",
    entities: { sign: "aries" },
  },
  taurus: {
    intent: "None", 
    entities: { sign: "taurus" },
  },
  health: {
    intent: "None",
    entities: { aspect: "health" },
  },
  career: {
    intent: "None",
    entities: { aspect: "career" },
  },
  love: {
    intent: "None",
    entities: { aspect: "love" },
  },
  friendship: {
    intent: "None",
    entities: { aspect: "friendship" },
  },
};

const getEntity = (context: SDSContext, entity: string) => {
  // lowercase the utterance and remove tailing "."
  let u = context.recResult[0].utterance.toLowerCase().replace(/\.$/g, "");
  if (u in grammar) {
    if (entity in grammar[u].entities) {
      return grammar[u].entities[entity];
    }
  }
  return false;
};

export const dmMachine: MachineConfig<SDSContext, any, SDSEvent> = {
  initial: "idle",
  states: {
    idle: {
      on: {
        CLICK: "init",
      },
    },
    init: {
      on: {
        TTS_READY: "welcome",
        CLICK: "welcome",
      },
    },
    welcome: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "game",
            cond: (context) => getNLUResult(context) === "game",
            actions: [
              assign({count: 0}),
              assign({score: 0}),
              assign({zodiac_answers: []}),
            ],
          },
          {
            target: "future",
            cond: (context) => getNLUResult(context) === "future",
            actions: assign({ aspects: [] }),
          },
          {
            target: ".sayagain", 
            cond: (context) => getNLUResult(context) === "repeat", 
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: say(`Hello my child, nice to meet you!`),
          on: { ENDSPEECH: "description" },
        },
        description: {
          entry: say(`I am a fortune teller and I know what awaits you. This is thanks to my knowledge of zodiac signs, I bet you know them too. If you want to check how good your zodiac sign knowledge is, we can play a little guessing game to check it. If not, I can also tell what is waiting for you. What do you want to do?`),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        sayagain: {
          entry: say(`Sure! I will introduce myself again.`),
          on: { ENDSPEECH: "description" },
        },
        nomatch: {
          entry: say(`This is beyond my spiritual abilities. Please say again what you want to do - do you want to play a game or find out about your future?`),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    game: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "zodiacguess",
            cond: (context) => getNLUResult(context) === "yes",
          },
          {
            target: ".prompt",
            cond: ((context) => getNLUResult(context) === "no") || ((context) => getNLUResult(context) === "repeat"),
          },
          {
            target: ".nomatch"
          },
        ],
        TIMEOUT: ".quest",
      },
      states: {
        prompt: {
        entry: say(`The guessing game goes as follows: I will describe some traits of a person with a certain zodiac sign. Your task is to tell me what sign I am talking about. We will repeat it a few times, and then I will tell you if your knowledge is sound.`),
        on: { ENDSPEECH: "quest" },
        },
        quest: {
          entry: say(`Did you understand everything?`),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(`Please, my child, say it again, my ancient spirit didn't get that.`), 
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    zodiacguess: {
      initial: "letsgo",
      on: {
        RECOGNISED: [
          {
            target: ".next_announcement",
            cond: ((context) => !!getEntity(context, "sign")) && ((context) => context.count < 10),
            actions: [
              assign({count: (context) => add_one(context),}),
              assign({zodiac_answers: (context) => context.zodiac_answers.concat([getEntity(context, "sign")]),}),
            ],
          },
          {
            target: "evaluate",
            cond: ((context) => !!getEntity(context, "sign")) && ((context) => context.count >= 10),
            actions: [
              assign({score: (context) => compare(context),}),
              assign({zodiac_answers: (context) => context.zodiac_answers.concat([getEntity(context, "sign")]),}),
            ],
          },
          {
            target: "game", 
            cond: (context) => getNLUResult(context) === "help", 
          },
          {
            target: ".repeat", 
            cond: (context) => getNLUResult(context) === "repeat", 
          },
          { target: ".nomatch", },
        ],
        TIMEOUT: ".turn",
      },
      states: {
        turn: {
          entry: send((context) => ({
            type: "SPEAK",
            value: zodiac_descriptions[context.count],
          })),
          on: { ENDSPEECH: "ask" },
        },
        letsgo: {
          entry: say(`Great, let's go!`),
          on: { ENDSPEECH: "turn" },
        },
        next_announcement: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Okay, got it, here comes the next sign!`,
          })),
          on: { ENDSPEECH: "turn" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        repeat: {
          entry: say(`Sure! I will say it once again.`),
          on: { ENDSPEECH: "turn" },
        },
        nomatch: {
          entry: say(`I don't think it's a zodiac sign. Tell me a sign that exists.`), 
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    evaluate: {
      entry: send((context) => ({
        type: "SPEAK",
        value: `${evaluator(context)}`,
      })),
      on: { ENDSPEECH: "anythingelse" },
    },
    anythingelse: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "goodbye",
            cond: (context) => getNLUResult(context) === "no", 
          },
          {
            target: "evaluate",
            cond: (context) => getNLUResult(context) === "repeat", 
          },
          {
            target: ".what",
            cond: (context) => getNLUResult(context) === "yes",
          },
          {
            target: "zodiacguess",
            cond: (context) => getNLUResult(context) === "game",
            actions: [
              assign({count: 0}),
              assign({score: 0}),
              assign({zodiac_answers: []})
            ],
          },
          {
            target: "future", 
            cond: (context) => getNLUResult(context) === "future",
            actions: assign({ aspects: [] }),
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: say(`Do you want to do anything else, my child?`),
          on: { ENDSPEECH: "ask" },
        },
        what: {
          entry: say(`What do you want to do? Do you want to play again or shall I tell you your future?`),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        nomatch: {
          entry: say(`My child, please make your answers to my questions explicit and aligned with the options I'm giving you.`),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    future: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: ".choosedifferent", 
            cond: (context) => context.aspects.includes(getEntity(context, "aspect")),
          },
          {
            target: "foresee",
            cond: ((context) => !!getEntity(context, "aspect")),
            actions: [ 
              assign({ aspect: (context) => getEntity(context, "aspect"), }),
              assign({ aspects: (context) => context.aspects.concat([context.aspect]),}),
              assign({ tell: future_tell(), }),
            ],
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: say(`What aspect of your life do you want to find out about? Love, career, or maybe health?`),
          on: { ENDSPEECH: "ask" },
        },
        choosedifferent: {
          entry: say(`My child, you already asked about this. Please select some other aspect of your life.`),
          on: { ENDSPEECH: "ask" },
        },
        ask: {
          entry: send( "LISTEN" ),
        },
        nomatch: {
          entry: say(`My connection with the universe isn't strong enough to foresee events in this aspect of your life. Choose some other aspect my child.`),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    foresee: {
      initial: "prompt",
      on: {
        RECOGNISED: [
          {
            target: "future",
            cond: (context) => getNLUResult(context) === "yes",
          },
          {
            target: ".sayagain",
            cond: (context) => getNLUResult(context) === "repeat",
          },
          {
            target: "goodbye",
            cond: (context) => getNLUResult(context) === "no",
          },
          {
            target: ".nomatch",
          },
        ],
        TIMEOUT: ".prompt",
      },
      states: {
        prompt: {
          entry: send((context) => ({
            type: "SPEAK",
            value: `Now, speaking of your ${context.aspect}. ${context.tell}`,
            })),
          on: { ENDSPEECH: "quest" },
        },
        ask: {
          entry: send("LISTEN"),
        },
        quest: {
          entry: say(`Do you want to find out about any other aspect of your life?`),
          on: { ENDSPEECH: "ask" },
        },
        sayagain: {
          entry: say(`Of course I can say it again, my child.`),
          on: { ENDSPEECH: "prompt" },
        },
        nomatch: {
          entry: say(`I did not get what you mean my child. Say it again, please.`),
          on: { ENDSPEECH: "ask" },
        },
      },
    },
    goodbye: {
      entry: send((context) => ({
        type: "SPEAK",
        value: `Goodbye my child. May the stars be with you.`,
      })),
    },
  },
};