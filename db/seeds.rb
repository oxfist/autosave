Game.delete_all

lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed '\
              'do eiusmod tempor incididunt ut labore et dolore magna '\
              'aliqua. Ut enim ad minim veniam, quis nostrud exercitation '\
              'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis '\
              'aute irure dolor in reprehenderit in voluptate velit esse '\
              'cillum dolore eu fugiat nulla pariatur. Excepteur sint '\
              'occaecat cupidatat non proident, sunt in culpa qui officia '\
              'deserunt mollit anim id est laborum.'

Game.create!(
  [
    {
      title: 'The Witcher 3: Wild Hunt',
      release_year: 2015,
      comment: 'I don’t think I’ve ever played a video game where things felt '\
               'this real before. Now I finally understand all the buzz about '\
               'this game. The quest design enables you to experience real '\
               'consequences to your choices in this fantastic ficticious '\
               'world, but it also highlights the astonishingly well writter '\
               'characters. You can feel like they are real people, from '\
               'Geralt and the Bloody Baron to the most harmless peasant with '\
               'his starving way of living and seemingly mundane issues. But '\
               'keep in mind, nothing in The Witcher 3 is really mundane.',
      image: 'the_witcher_3_wild_hunt_cover.jpg'
    },
    {
      title: 'Yakuza 0',
      release_year: 2017,
      comment: 'The origins of the Dragon of Dojima. This was my first '\
               'encounter with the Yakuza franchise and it immediately blew '\
               'my mind. Over the top epic fights for pride and honor, and '\
               'cheesy but charming Japanese humor, is what this game is all '\
               'about. By the time I finished the first chapter I realized I '\
               'was playing a Japanese soap opera, and I never thought it '\
               'could be as good as it was. The side quests make both '\
               'protagonists shine, they’ll all be worth it. And what can be '\
               'said about Goro Majima, you just have to see it for yourself.',
      image: 'yakuza_0_cover.jpg'
    },
    {
      title: 'Bloodborne',
      release_year: 2015,
      comment: 'Inspired by Lovecraft’s cosmic horror Bloodborne creates a '\
               'world where nothing is laid out for you but at the same time '\
               'is eagerly waiting to be discovered. Every nook and cranny '\
               'hides a sad and dark story about characters dealing with the '\
               'unknown, driving themselves to madness each step of the way, '\
               'and the orchestrated soundtrack that goes with it is an '\
               'absolute masterpiece. This is a punishing video game where '\
               'you’ll die a lot, but the combat mechanics are so well '\
               'designed that the sense of reward when overcoming difficult '\
               'enemies by sheer skill is unmatched.',
      image: 'bloodborne_cover.jpg'
    },
    {
      title: 'Metal Gear Solid',
      release_year: 1998,
      comment: lorem_ipsum,
      image: 'metal_gear_solid_cover.png'
    },
    {
      title: 'Resident Evil 4',
      release_year: 2005,
      comment: lorem_ipsum,
      image: 'resident_evil_4_cover.jpg'
    },
    {
      title: 'Resident Evil',
      release_year: 2002,
      comment: lorem_ipsum,
      image: 'resident_evil_remake_cover.jpg'
    }
  ]
)
