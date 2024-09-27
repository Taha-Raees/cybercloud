// gamesData.ts
export interface Game {
    id: number;
    title: string;
    categories: string[];
    image: string;
    backgroundImage: string;
    trailer: string;  // New field for the trailer URL
    releaseDate: string; // format: YYYY-MM-DD
    isTrending: boolean;
    isNew: boolean;
    screenshots?: string[];   // New field for marking new games
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
      backgroundImage:'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/6zhGBKQpPrlLNI2a7EfALNs1.png',
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
      backgroundImage:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5fdb2caa-50df-4b3b-8c32-18da0044d5e4/di0sprn-4bcb28a6-dde5-4aca-81cd-6e8fa05eefb4.png/v1/fill/w_1920,h_1077,q_80,strp/black_myth_wukong___wallpaper___game_art_by_thesurrealsynth_di0sprn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmZGIyY2FhLTUwZGYtNGIzYi04YzMyLTE4ZGEwMDQ0ZDVlNFwvZGkwc3Bybi00YmNiMjhhNi1kZGU1LTRhY2EtODFjZC02ZThmYTA1ZWVmYjQucG5nIiwiaGVpZ2h0IjoiPD0xMDc3Iiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNWZkYjJjYWEtNTBkZi00YjNiLThjMzItMThkYTAwNDRkNWU0XC90aGVzdXJyZWFsc3ludGgtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.z_9Q43PUCnF5Z2eMFA80C8d0IF0-SHbaQ0EnqTFaeKc',
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
      backgroundImage:'https://live.staticflickr.com/65535/50542067131_762c2f45e2_o.png',
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
      backgroundImage:'https://cdn1.epicgames.com/offer/f640a0c1648147fea7e81565b45a3003/EGS_Warhammer40000SpaceMarine2_SaberInteractive_S1_2560x1440-975214651d1d1bc6c6e5779b53958840',
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
      backgroundImage:'https://image.api.playstation.com/vulcan/ap/rnd/202010/0100/iLBYSuHyeGG5CVXTkSm4MKTo.png',
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
      backgroundImage:'https://image.api.playstation.com/vulcan/img/rnd/202103/1515/bOxozhgjBmccslZkWaPqURA7.png',
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
      backgroundImage:'https://www.cyberpunk.net/build/images/pre-order/buy-b/keyart-ue-en@2x-cd66fd0d.jpg',
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
        backgroundImage:'https://m.media-amazon.com/images/M/MV5BMjI1NTM4MDQ0OF5BMl5BanBnXkFtZTgwNDE0MTY0MzI@._V1_.jpg',
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
        backgroundImage:'https://media.gq-magazine.co.uk/photos/65aa84391d032c3830093eb5/master/pass/the-last-of-us-part-ii-remastered-blogroll-1705535028411.jpg',
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
        backgroundImage:'https://www.gamewallpapers.com/download.php?img=wallpaper_grand_theft_auto_6_01_1920x1080.jpg',
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
        backgroundImage:'https://s.yimg.com/ny/api/res/1.2/55ZLCHdBTHz1oiWVPRb8Mg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NjY-/https://s.yimg.com/os/creatr-uploaded-images/2023-10/192fcd90-6c2f-11ee-9ef4-d91f503fafaa',
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
        backgroundImage:'https://i.dailymail.co.uk/i/pix/2015/10/05/00/2D18A10D00000578-0-image-a-11_1444001883364.jpg',
      },
  ];
  