const INFLUENCER_DATA = [
    {
      handle: 'arianagrande',
      name: 'Ariana Grande',
      followers: 263,
      highestBid: 8.0, // in ETH
      timeLeft: 29288, // in seconds
      imageUrl: 'https://i.ibb.co/bPjs6tM/cadfbd38e105024bf475bd1a4f113932.jpg',
      id: 1,
      linkUrl: 'influencer/arianagrande'
    },
    {
      handle: 'kyliejenner',
      name: 'Kylie Jenner',
      followers: 263,
      highestBid: 8.0,
      timeLeft: 29288,
      imageUrl: 'https://i.pinimg.com/originals/86/5f/b2/865fb2a5589c3dbb3cfd58f5762d1e0f.jpg',
      id: 2,
      linkUrl: 'influencer/kyliejenner'
    },
    {
        handle: 'selenagomez',
        name: 'Selena Gomez',
        followers: 257,
        highestBid: 8.0,
        timeLeft: 29288,
        imageUrl: 'https://i.ibb.co/2gsmWzf/Selena-Gomez-models-bikini-for-her-friends-line-La-Mariette.png',
        id: 3,
        linkUrl: 'influencer/selenagomez'
      },
      {
        handle: 'kimkardashian',
        name: 'Kim Kardashian',
        followers: 249,
        highestBid: 8.0,
        timeLeft: 29288,
        imageUrl: 'https://i.ibb.co/L0kfCkz/Kim-Kardashian-wedding-ringhttps-www-instagram-com-p-CJq781-MA-M1-Credit-Kim-Kardashian-Instagram.jpg',
        id: 4,
        linkUrl: 'influencer/kimkardashian'
      },
      {
        handle: 'beyonce',
        name: 'Beyoncé',
        followers: 204,
        highestBid: 8.0,
        timeLeft: 29288,  
        imageUrl: 'https://i.ibb.co/GRsrX87/longform-original-15836-1410955737-23.jpg',
        id: 5,
        linkUrl: 'influencer/beyonce'
      },
      {
        handle: 'kendalljenner',
        name: 'Kendall Jenner',
        followers: 263,
        highestBid: 8.0,
        timeLeft: 29288,  
        imageUrl: 'https://i.ibb.co/cy6JThj/2127418-kendall-1577699033.jpg',
        id: 6,
        linkUrl: 'influencer/kendalljenner'
      }        
  ];
  
  export default INFLUENCER_DATA

/*

const SHOP_DATA = {
    Lele_Pons: {
      id: 1,
      handle: 'Lele Pons',
      routeName: 'lele_pons',
      followers: 44,
      items: [
        {
          id: 1,
          name: 'Leoperd Outing',
          imageUrl: 'https://i.ibb.co/smtTFmS/tumblr-pn93kkewb-M1w56ai7o1-1280.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Seismic Twins',
          imageUrl: 'https://i.ibb.co/j6LcrQ8/tumblr-pnals2-Nw6-G1w56ai7o1-1280.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'Beach Run',
          imageUrl: 'https://i.ibb.co/KcPLGvG/tumblr-pnalvnfhfd1w56ai7o1-1280.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'Elevated',
          imageUrl: 'https://i.ibb.co/VHLhxQJ/tumblr-pnamck-Kl8p1w56ai7o1-1280.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Back On The Boat',
          imageUrl: 'https://i.ibb.co/vzm2c8C/tumblr-pnamqbj-K3u1w56ai7o1-1280.jpg',
          price: 18
        },
        {
            id: 6,
            name: 'Leoperd Outing',
            imageUrl: 'https://i.ibb.co/smtTFmS/tumblr-pn93kkewb-M1w56ai7o1-1280.jpg',
            price: 25
          },
          {
            id: 7,
            name: 'Seismic Twins',
            imageUrl: 'https://i.ibb.co/j6LcrQ8/tumblr-pnals2-Nw6-G1w56ai7o1-1280.jpg',
            price: 18
          },
          {
            id: 8,
            name: 'Beach Run',
            imageUrl: 'https://i.ibb.co/KcPLGvG/tumblr-pnalvnfhfd1w56ai7o1-1280.jpg',
            price: 35
          },
          {
            id: 9,
            name: 'Elevated',
            imageUrl: 'https://i.ibb.co/VHLhxQJ/tumblr-pnamck-Kl8p1w56ai7o1-1280.jpg',
            price: 25
          },
          {
            id: 10,
            name: 'Back On The Boat',
            imageUrl: 'https://i.ibb.co/vzm2c8C/tumblr-pnamqbj-K3u1w56ai7o1-1280.jpg',
            price: 18
          }
      ]
    },
    Amanda_Cerny: {
      id: 2,
      handle: 'Amanda Cerny',
      routeName: 'amanda_cerny',
      followers: 25,
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    jackets: {
      id: 3,
      handle: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    womens: {
      id: 4,
      handle: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    mens: {
      id: 5,
      handle: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  }
  
  export default INFLUENCER_DATA
  */