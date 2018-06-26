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
      comment: lorem_ipsum,
      image: 'the_witcher_3_wild_hunt_cover.jpg'
    },
    {
      title: 'Yakuza 0',
      release_year: 2017,
      comment: lorem_ipsum,
      image: 'yakuza_0_cover.jpg'
    },
    {
      title: 'Bloodborne',
      release_year: 2015,
      comment: lorem_ipsum,
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
