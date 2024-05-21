export const users = [
  {
    f_name: 'Heather',
    l_name: 'Holt',
    email: 'hol16046@byui.edu',
    password: 'Password123!',
    role: 'seller',
  },
  {
    f_name: 'Carol',
    l_name: 'Danvers',
    email: 'captainmarvel@avengers.org',
    password: 'HigherFurtherFaster2!',
    role: 'user',
  },
  {
    f_name: 'Steve',
    l_name: 'Rogers',
    email: 'captainamerica@avengers.org',
    password: 'Peggy-1945',
    role: 'user',
  },
  {
    f_name: 'Scott',
    l_name: 'Lang',
    email: 'ant-man@avengers.org',
    password: '4Ant-ony',
    role: 'seller',
  },
  {
    f_name: 'Stephen',
    l_name: 'Strange',
    email: 'doctor_strange@sanctum.net',
    password: 'Wong!keep0ut',
    role: 'user',
  },
  {
    f_name: 'Tony',
    l_name: 'Stark',
    email: 'iron_man@avengers.org',
    password: 'Jarvis.isMyC0pil0t',
    role: 'seller',
  },
];

export const sellers = [
  {
    user_id: 1,
    shop_name: "Heather's Handmade",
    shop_story:
      'I love to create beautiful things with my hands. I hope you enjoy my creations as much as I enjoy making them.',
    shop_logo: '../public/seller_images/handmade-logo.png',
  },
  {
    user_id: 5,
    shop_name: 'Tiny Stitches Leatherworks',
    shop_story:
      'My ability to get really small means my attention to detail is massive! Take a look at my fine leatherwork products.',
    shop_logo: '../public/seller_images/ant-logo.png',
    shop_profile: '../public/seller_images/leather-needle.jpeg',
  },
  {
    user_id: 4,
    shop_name: "Tony's Soapbox",
    shop_story:
      "When I'm not saving the world, I'm making soap. Check out my line of homemade soap products.",
    shop_logo: '../public/seller_images/soapbox-logo.jpeg',
  },
];

export const products = [
  {
    sellerId: 2,
    productName: 'Compact Leather Wallet',
    productDesc:
      'A slim, minimalist wallet that fits comfortably in your front pocket.',
    price: 45.0,
    stock: 3,
  },
  {
    sellerId: 2,
    productName: 'Black Leather Wallet',
    productDesc:
      'A classic black leather wallet with plenty of card slots and a billfold.',
    price: 65.0,
    stock: 1,
  },
  {
    sellerId: 2,
    productName: 'Blue Leather Wallet',
    productDesc:
      'A modern blue leather wallet with brown leather accents. Includes a coin pocket and RFID protection.',
    price: 70.0,
    stock: 2,
  },
  {
    sellerId: 2,
    productName: 'Colorful Striped Handbag',
    productDesc:
      'A modern handbag with colorful stripes and a detachable shoulder strap.',
    price: 125.0,
    stock: 1,
  },
  {
    sellerId: 2,
    productName: 'Colorful Pieced Handbag',
    productDesc:
      'A colorful, modern handbag with pieced leather and a detachable shoulder strap.',
    price: 150.0,
    stock: 1,
  },
  {
    sellerId: 2,
    productName: 'Custom Name-Stamped Tag - Add-On Only',
    productDesc:
      'A custom leather tag with your name stamped on it. Purchase this with another item from my store for a personalized touch. Add-on only.',
    price: 10.0,
    stock: 1,
  },
  {
    sellerId: 4,
    productName: 'Floral Embroidery on Burlap',
    productDesc:
      'A beautiful piece of floral embroidery on burlap. Perfect for framing or incorporating into your own craft project.',
    price: 25.0,
    stock: 2,
  },
  {
    sellerId: 4,
    productName: 'Rose Cross-Stitch',
    productDesc:
      'Cross-stiched roses with greenery and other flowers. Ideal for framing.',
    price: 50.0,
    stock: 1,
  },
  {
    sellerId: 3,
    productName: 'Vanilla Bean Soap',
    productDesc:
      'Vanilla bean soap with a rich, creamy lather and a warm, comforting scent.',
    price: 20.0,
    stock: 10,
  },
  {
    sellerId: 3,
    productName: 'Rose Scented Soap',
    productDesc:
      'Rose scented soap with a light, floral fragrance and a luxurious lather.',
    price: 20.0,
    stock: 15,
  },
];

export const product_images = [
  {
    productId: 1,
    imageFile: '/product_images/wallet.jpeg',
    altText: 'A brown leather wallet with a slim profile and a few card slots.',
  },
  {
    productId: 1,
    imageFile: '/product_images/wallet-closeup.jpeg',
    altText:
      'Close-up of a brown leather wallet with a slim profile and a few card slots.',
  },
  {
    productId: 1,
    imageFile: '/product_images/wallet-use.jpeg',
    altText: "A compact brown leather wallet in a man's hands.",
  },
  {
    productId: 2,
    imageFile: '/product_images/black-wallet.jpeg',
    altText:
      'A black leather wallet with white stitching on a white background.',
  },
  {
    productId: 3,
    imageFile: '/product_images/blue-wallet.jpeg',
    altText:
      'A blue leather wallet with brown leather accents on a wooden surface',
  },
  {
    productId: 4,
    imageFile: '/product_images/colorful-striped-handbag.jpeg',
    altText: 'A striped handbag using different colors of leather.',
  },
  {
    productId: 5,
    imageFile: '/product_images/colorful-pieced-handbag.jpeg',
    altText: 'A pieced handbag using triangles in different colors of leather.',
  },
  {
    productId: 6,
    imageFile: '/product_images/custom-tag.jpeg',
    altText:
      'A closeup photo of a stamped leather tag with the name "Hope" on it.',
  },
  {
    productId: 7,
    imageFile: '/product_images/floral-embroidery.jpeg',
    altText: 'A closeup of blue flowers embroidered on burlap.',
  },
  {
    productId: 8,
    imageFile: '/product_images/rose-cross-stitch.jpeg',
    altText:
      'A close up of cross-stitched red and pink roses with greenery and other blue flowers.',
  },
  {
    productId: 9,
    imageFile: '/product_images/vanilla-bean-soap.jpeg',
    altText: 'White soap wrapped in brown paper on a dark background.',
  },
  {
    productId: 10,
    imageFile: '/product_images/colorful-striped-handbag.jpeg',
    altText:
      'Whtie soap with pink accents wrapped in brown paper. Flower petals are scattered on and around the soap. ',
  },
];

export const ratings = [
  {
    userId: 6,
    productId: 1,
    rating: 5,
    review:
      'This wallet is perfect for my needs. It fits in my pocket and holds everything I need, even a picture of my girl.',
  },
  {
    userId: 3,
    productId: 10,
    rating: 4,
    review:
      "The soap has a nice texture and lathers well. The scent is a bit strong for me, but it's not overpowering.",
  },
  {
    userId: 2,
    productId: 1,
    rating: 3,
    review:
      "I like the wallet, but it's a bit too small for my needs. I wish it had more card slots.",
  },
];

export const categories = [
  {
    categoryName: 'Wallets',
  },
  {
    categoryName: 'Handbags',
  },
  {
    categoryName: 'Leather Goods',
  },
  {
    categoryName: 'Embroidery',
  },
  {
    categoryName: 'Soap',
  },
];

export const product_categories = [
  {
    productId: 1,
    categoryId: 1,
  },
  {
    productId: 2,
    categoryId: 1,
  },
  {
    productId: 3,
    categoryId: 1,
  },
  {
    productId: 4,
    categoryId: 2,
  },
  {
    productId: 5,
    categoryId: 2,
  },
  {
    productId: 6,
    categoryId: 3,
  },
  {
    productId: 1,
    categoryId: 3,
  },
  {
    productId: 2,
    categoryId: 3,
  },
  {
    productId: 3,
    categoryId: 3,
  },
  {
    productId: 4,
    categoryId: 3,
  },
  {
    productId: 5,
    categoryId: 3,
  },
  {
    productId: 6,
    categoryId: 3,
  },
  {
    productId: 7,
    categoryId: 4,
  },
  {
    productId: 8,
    categoryId: 4,
  },
  {
    productId: 9,
    categoryId: 5,
  },
  {
    productId: 10,
    categoryId: 5,
  },
];

export const keywords = [
  {
    keyword: 'wallet',
  },
  {
    keyword: 'handbag',
  },
  {
    keyword: 'leather',
  },
  {
    keyword: 'embroidery',
  },
  {
    keyword: 'soap',
  },
  {
    keyword: 'vanilla',
  },
  {
    keyword: 'rose',
  },
  {
    keyword: 'blue',
  },
  {
    keyword: 'red',
  },
];

export const product_keywords = [
  {
    productId: 1,
    keywordId: 1,
  },
  {
    productId: 2,
    keywordId: 1,
  },
  {
    productId: 3,
    keywordId: 1,
  },
  {
    productId: 4,
    keywordId: 2,
  },
  {
    productId: 5,
    keywordId: 2,
  },
  {
    productId: 6,
    keywordId: 3,
  },
  {
    productId: 1,
    keywordId: 3,
  },
  {
    productId: 2,
    keywordId: 3,
  },
  {
    productId: 3,
    keywordId: 3,
  },
  {
    productId: 4,
    keywordId: 3,
  },
  {
    productId: 5,
    keywordId: 3,
  },
  {
    productId: 7,
    keywordId: 4,
  },
  {
    productId: 8,
    keywordId: 4,
  },
  {
    productId: 9,
    keywordId: 5,
  },
  {
    productId: 10,
    keywordId: 5,
  },
  {
    productId: 9,
    keywordId: 6,
  },
  {
    productId: 10,
    keywordId: 7,
  },
  {
    productId: 8,
    keywordId: 7,
  },
  {
    productId: 7,
    keywordId: 8,
  },
  {
    productId: 8,
    keywordId: 8,
  },
  {
    productId: 3,
    keywordId: 8,
  },
  {
    productId: 8,
    keywordId: 9,
  },
];
