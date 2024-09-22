// gamesData.ts
export interface Game {
    id: number;
    title: string;
    categories: string[];
    image: string;
    trailer: string;  // New field for the trailer URL
    releaseDate: string; // format: YYYY-MM-DD
    isTrending: boolean;
    isNew: boolean;  // New field for marking new games
  }
  
  export const games: Game[] = [
    {
      id: 1,
      title: 'God of War Ragnarök',
      categories: ["Fighting", "Action", "Role-playing", "Adventure"],
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBpKExUXYCIoaXavPJIX66YU3rQJg3Nldi9dwvO6vSIMcCVOgaWS-v8L6mzyQtrUepelpwDQ',
      trailer: 'https://www.youtube.com/embed/hfJ4Km46A-0',
      releaseDate: '2023-03-21',
      isTrending: true,
      isNew: true,
    },
    {
      id: 2,
      title: 'Black Myth: Wukong',
      categories: ['Action', 'Adventure', "Role-playing",],
      image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Black_Myth_Wukong_cover_art.jpg',
      trailer: 'https://www.youtube.com/embed/pnSsgRJmsCc',
      releaseDate: '2023-01-15',
      isTrending: false,
      isNew: true,
    },
    {
      id: 3,
      title: 'FINAL FANTASY XVI',
      categories: ['Action', 'Adventure'],
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/3007/lgFVhRm5BfoX02pRUt3lSmLV.png',
      trailer: 'https://www.youtube.com/embed/aPT26Dd3OzE',
      releaseDate: '2023-04-10',
      isTrending: true,
      isNew: true,
    },
    {
      id: 4,
      title: 'Warhammer 40,000: Space Marine 2',
      categories: ['Action', 'Adventure'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDEMHBcSo4bjV94OlPvkCmVFb6ULcqG0mR7Q&s',
      trailer: 'https://www.youtube.com/embed/DJkLNnum00I',
      releaseDate: '2022-11-01',
      isTrending: false,
      isNew: false,
    },
    {
      id: 5,
      title: 'The Evil Within 2',
      categories: ['Action', 'Adventure', "Horror","Shooting","Survival"],
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0100/iLBYSuHyeGG5CVXTkSm4MKTo.png',
      trailer: 'https://www.youtube.com/embed/f7JbFBq4NAo',
      releaseDate: '2021-10-05',
      isTrending: false,
      isNew: false,
    },
    {
      id: 6,
      title: 'It Takes Two Friend\'s Pass',
      categories: ['Action', 'Adventure'],
      image: 'https://image.api.playstation.com/vulcan/img/rnd/202103/1515/CIArS0HysgiS5pbwYtHLU9B0.png',
      trailer: 'https://www.youtube.com/embed/GAWHzGNcTEw',
      releaseDate: '2023-02-10',
      isTrending: true,
      isNew: false,
    },
    {
      id: 7,
      title: 'Cyberpunk 2077',
      categories: ["Open world", "Fighting", "Action","Role-playing", "Adventure"],
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png',
      trailer: 'https://www.youtube.com/embed/8X2kIfS6fb8',
      releaseDate: '2021-08-19',
      isTrending: false,
      isNew: false,
    },
    {
        id: 8,
        title: 'The Witcher 3: Wild Hunt',
        categories: ["Open world", "Fighting", "Action","Role-playing", "Adventure"],
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0714/ojKZ7l0T2M5egR9YHIjVhI0R.png',
        trailer: 'https://www.youtube.com/embed/1-l29HlKkXU',
        releaseDate: '2023-02-10',
        isTrending: true,
        isNew: true,
      },
    {
        id:  9,
        title: 'The Last of Us Part II',
        categories: ["Horror","Survival","Action","Adventure"],
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9ye_oF2iXEQLMerfjgQOvJUxG_xTyrISOzgiInh2aKiUURif9O28g3CwKJVNXB1iBC12V',
        trailer: 'https://www.youtube.com/embed/qPNiIeKMHyg',
        releaseDate: '2020-05-19',
        isTrending: true,
        isNew: false,
      },
    {
        id: 10,
        title: 'Grand Theft Auto V',
        categories: ["Open world","Role-playing","FPS"],
        image: 'https://img-s3.onedio.com/id-54bbd6ae76b0ad014ab5c0e2/rev-0/w-600/h-341/f-jpg/s-a67618fe2f417a1434bbb328dd9d0c5c5caa229e.jpg',
        trailer: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        releaseDate: '2013-09-17',
        isTrending: true,
        isNew: false,
      },
    {
        id: 11,
        title: "Marvel's Spider-Man 2",
        categories: ["Open world","Role-playing","Fighting"],
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg',
        trailer: 'https://www.youtube.com/embed/9fVYKsEmuRo',
        releaseDate: '2013-09-17',
        isTrending: true,
        isNew: true,
      },
    {
        id: 12,
        title: 'Rise of the Tomb Raider',
        categories: ["Survival","Action","Adventure","Stealth"],
        image: 'https://products.eneba.games/resized-products/IYithqt_350x200_1x-0.jpg',
        trailer: 'https://www.youtube.com/embed/1_FIyNcQSgA',
        releaseDate: '2013-09-17',
        isTrending: true,
        isNew: false,
      },
  ];
  