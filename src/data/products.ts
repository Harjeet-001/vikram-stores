export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  image: string;
  inStock: boolean;
  tag?: string;
}

export type CategoryId =
  | 'crackers'
  | 'kids'
  | 'peacock'
  | 'chakkars'
  | 'bombs'
  | 'flowerpots'
  | 'rockets'
  | 'pencil'
  | 'crackling'
  | 'toyfountain'
  | 'multishot'
  | 'spl4inch'
  | 'fanvcake';

export interface Category {
  id: CategoryId | 'all';
  label: string;
  emoji: string;
  image: string;
}

export const categories: Category[] = [
  { id: 'all',         label: 'All Products',             emoji: '🎆', image: '/images/prod/multishot-cake.jpg' },
  { id: 'crackers',    label: 'Crackers',                 emoji: '🧨', image: '/images/prod/electric-sparkler.jpg' },
  { id: 'kids',        label: 'Kids Collection',          emoji: '🎠', image: '/images/prod/kids-fountain.jpg' },
  { id: 'peacock',     label: 'Peacock Varieties',        emoji: '🦚', image: '/images/prod/peacock-display.jpg' },
  { id: 'chakkars',    label: 'Ground Chakkars',          emoji: '🌀', image: '/images/prod/chakkar-spin.jpg' },
  { id: 'bombs',       label: 'Atom Bombs',               emoji: '💥', image: '/images/prod/atom-bomb-cracker.jpg' },
  { id: 'flowerpots',  label: 'Flower Pots',              emoji: '🌸', image: '/images/prod/flower-pot-sparks.jpg' },
  { id: 'rockets',     label: 'Rockets',                  emoji: '🚀', image: '/images/prod/sky-rocket.jpg' },
  { id: 'pencil',      label: 'Pencil & Torches',         emoji: '✏️', image: '/images/prod/pencil-firework.jpg' },
  { id: 'crackling',   label: 'Kids Crackling Bullets',   emoji: '⚡', image: '/images/prod/crackling-sparkler.jpg' },
  { id: 'toyfountain', label: 'Kids Toy Fountains',       emoji: '🦁', image: '/images/prod/lion-king.jpg' },
  { id: 'multishot',   label: 'Repeating Multi-Color Sky',emoji: '🌠', image: '/images/prod/big-shot.jpg' },
  { id: 'spl4inch',    label: '4" SPL Color',             emoji: '🎇', image: '/images/prod/crackling-aerial.jpg' },
  { id: 'fanvcake',    label: 'V-Shape Fan Cake',         emoji: '🎂', image: '/images/prod/fan-cake.jpg' },
];

export const products: Product[] = [

  // ── CRACKERS ──────────────────────────────────────────────────────────
  { id: 'cr01', name: 'Siren Green',                    category: 'crackers',    price: 130,  image: '/images/prod/siren-green.jpg',         inStock: true },
  { id: 'cr02', name: '10 cm Electric Sparkler',        category: 'crackers',    price: 13,   image: '/images/prod/electric-sparkler.jpg',    inStock: true },
  { id: 'cr03', name: '10 cm Color Sparkler',           category: 'crackers',    price: 16,   image: '/images/prod/color-sparkler.jpg',       inStock: true },
  { id: 'cr04', name: '15 cm Electric Sparkler',        category: 'crackers',    price: 37,   image: '/images/prod/electric-sparkler.jpg',    inStock: true },
  { id: 'cr05', name: '15 cm Crackling Sparkler',       category: 'crackers',    price: 39,   image: '/images/prod/crackling-sparkler.jpg',   inStock: true },
  { id: 'cr06', name: '30 cm Electric Sparkler',        category: 'crackers',    price: 37,   image: '/images/prod/long-sparkler.jpg',        inStock: true },
  { id: 'cr07', name: '30 cm Crackling Sparkler',       category: 'crackers',    price: 39,   image: '/images/prod/crackling-sparkler.jpg',   inStock: true },
  { id: 'cr08', name: '50 cm Electric Sparkler',        category: 'crackers',    price: 140,  image: '/images/prod/giant-sparkler.jpg',       inStock: true, tag: 'Popular' },
  { id: 'cr09', name: 'Rotating Sparkler',              category: 'crackers',    price: 190,  image: '/images/prod/rotating-sparkler.jpg',    inStock: true },
  { id: 'cr10', name: '2¾ Kuruvi',                      category: 'crackers',    price: 8,    image: '/images/prod/bijili.jpg',               inStock: true },
  { id: 'cr11', name: '2 Sound Crackers',               category: 'crackers',    price: 24,   image: '/images/prod/lakshmi-bomb.jpg',         inStock: true },
  { id: 'cr12', name: '3½\" Lakshmi',                   category: 'crackers',    price: 10,   image: '/images/prod/lakshmi-bomb.jpg',         inStock: true },
  { id: 'cr13', name: '4\" Gold Lakshmi',               category: 'crackers',    price: 25,   image: '/images/prod/lakshmi-bomb.jpg',         inStock: true, tag: 'Bestseller' },
  { id: 'cr14', name: '4\" Lakshmi',                    category: 'crackers',    price: 14,   image: '/images/prod/lakshmi-bomb.jpg',         inStock: true },
  { id: 'cr15', name: 'Candy Crush (Color Paper Bomb)', category: 'crackers',    price: 95,   image: '/images/prod/candy-crush.jpg',          inStock: true },
  { id: 'cr16', name: 'Paper Bomb (Small)',              category: 'crackers',    price: 45,   image: '/images/prod/atom-bomb-cracker.jpg',    inStock: true },
  { id: 'cr17', name: 'Paper Bomb (Large)',              category: 'crackers',    price: 90,   image: '/images/prod/hydro-bomb.jpg',           inStock: true },
  { id: 'cr18', name: 'Red Bijili 50 pc',               category: 'crackers',    price: 18,   image: '/images/prod/bijili.jpg',               inStock: true },
  { id: 'cr19', name: 'Stripped Bijili',                category: 'crackers',    price: 28,   image: '/images/prod/bijili.jpg',               inStock: true },

  // ── KIDS COLLECTION ───────────────────────────────────────────────────
  { id: 'kd01', name: '90 Watts',                       category: 'kids',        price: 125,  image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'kd02', name: 'Bampara',                        category: 'kids',        price: 75,   image: '/images/prod/color-sparkler.jpg',       inStock: true },
  { id: 'kd03', name: 'Black Money',                    category: 'kids',        price: 200,  image: '/images/prod/butterfly.jpg',            inStock: true, tag: 'Popular' },
  { id: 'kd04', name: 'Butterfly',                      category: 'kids',        price: 60,   image: '/images/prod/butterfly.jpg',            inStock: true },
  { id: 'kd05', name: 'Chocolate Bomb',                 category: 'kids',        price: 70,   image: '/images/prod/candy-crush.jpg',          inStock: true },
  { id: 'kd06', name: 'Drone',                          category: 'kids',        price: 115,  image: '/images/prod/drone.jpg',                inStock: true },
  { id: 'kd07', name: 'Electric Stone',                 category: 'kids',        price: 55,   image: '/images/prod/crackling-sparkler.jpg',   inStock: true },
  { id: 'kd08', name: 'Helicopter',                     category: 'kids',        price: 85,   image: '/images/prod/helicopter.jpg',           inStock: true },
  { id: 'kd09', name: 'Lotus Wheel',                    category: 'kids',        price: 130,  image: '/images/prod/lotus-wheel.jpg',          inStock: true },
  { id: 'kd10', name: 'Mini Siren',                     category: 'kids',        price: 95,   image: '/images/prod/siren-green.jpg',          inStock: true },
  { id: 'kd11', name: 'Motu Patlu + 9',                 category: 'kids',        price: 230,  image: '/images/prod/kids-fountain.jpg',        inStock: true, tag: 'Bestseller' },
  { id: 'kd12', name: 'Photo Flash',                    category: 'kids',        price: 55,   image: '/images/prod/electric-sparkler.jpg',    inStock: true },
  { id: 'kd13', name: 'Siren 2 Pcs',                   category: 'kids',        price: 95,   image: '/images/prod/siren-green.jpg',          inStock: true },
  { id: 'kd14', name: 'Siren 3 Pcs',                   category: 'kids',        price: 125,  image: '/images/prod/siren-green.jpg',          inStock: true },

  // ── PEACOCK ───────────────────────────────────────────────────────────
  { id: 'pk01', name: 'Bada Peacock',                   category: 'peacock',     price: 380,  image: '/images/prod/peacock-display.jpg',      inStock: true, tag: 'Premium' },
  { id: 'pk02', name: 'Mega Peacock',                   category: 'peacock',     price: 235,  image: '/images/prod/peacock-display.jpg',      inStock: true, tag: 'Popular' },
  { id: 'pk03', name: 'Mini Peacock 3 in 1',            category: 'peacock',     price: 100,  image: '/images/prod/peacock-display.jpg',      inStock: true },
  { id: 'pk04', name: 'Peacock Feather 5 pc',           category: 'peacock',     price: 95,   image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'pk05', name: 'Peacock Fountain',               category: 'peacock',     price: 155,  image: '/images/prod/flower-pot-sparks.jpg',    inStock: true },

  // ── GROUND CHAKKARS ───────────────────────────────────────────────────
  { id: 'ch01', name: 'CockTail Spinner',               category: 'chakkars',   price: 45,   image: '/images/prod/chakkar-spin.jpg',         inStock: true },
  { id: 'ch02', name: 'Euro Stars (6-in-1 Jumping)',    category: 'chakkars',   price: 135,  image: '/images/prod/lotus-wheel.jpg',          inStock: true, tag: 'Popular' },
  { id: 'ch03', name: 'Ground Chakkar Asoka',           category: 'chakkars',   price: 55,   image: '/images/prod/chakkar-spin.jpg',         inStock: true },
  { id: 'ch04', name: 'Ground Chakkar Big',             category: 'chakkars',   price: 28,   image: '/images/prod/chakkar-spin.jpg',         inStock: true },
  { id: 'ch05', name: 'Maska Chaska',                   category: 'chakkars',   price: 135,  image: '/images/prod/rotating-sparkler.jpg',    inStock: true },
  { id: 'ch06', name: 'Scooby Doo (Double Golden Wheel)',category: 'chakkars',  price: 95,   image: '/images/prod/lotus-wheel.jpg',          inStock: true },
  { id: 'ch07', name: 'Spin Master Mini',               category: 'chakkars',   price: 70,   image: '/images/prod/chakkar-spin.jpg',         inStock: true },
  { id: 'ch08', name: 'Twister SPL',                    category: 'chakkars',   price: 95,   image: '/images/prod/rotating-sparkler.jpg',    inStock: true },
  { id: 'ch09', name: 'Wizz Chakkar',                   category: 'chakkars',   price: 115,  image: '/images/prod/chakkar-spin.jpg',         inStock: true },

  // ── ATOM BOMBS ────────────────────────────────────────────────────────
  { id: 'ab01', name: 'Bullet Bomb',                    category: 'bombs',       price: 25,   image: '/images/prod/atom-bomb-cracker.jpg',   inStock: true },
  { id: 'ab02', name: 'Hydro Bomb',                     category: 'bombs',       price: 65,   image: '/images/prod/hydro-bomb.jpg',           inStock: true, tag: 'Loud' },
  { id: 'ab03', name: 'King Kong Bomb',                 category: 'bombs',       price: 110,  image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Loud' },

  // ── FLOWER POTS ───────────────────────────────────────────────────────
  { id: 'fp01', name: 'Color KOTI',                     category: 'flowerpots',  price: 140,  image: '/images/prod/color-fountain.jpg',       inStock: true, tag: 'Popular' },
  { id: 'fp02', name: 'Color KOTI SPL',                 category: 'flowerpots',  price: 210,  image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'fp03', name: 'Fire Drops',                     category: 'flowerpots',  price: 70,   image: '/images/prod/flower-pot-sparks.jpg',    inStock: true },
  { id: 'fp04', name: 'Flower Pots Asoka',              category: 'flowerpots',  price: 80,   image: '/images/prod/flower-pot-sparks.jpg',    inStock: true },
  { id: 'fp05', name: 'Flower Pots Big',                category: 'flowerpots',  price: 48,   image: '/images/prod/flower-pot-sparks.jpg',    inStock: true },
  { id: 'fp06', name: 'Flower Pots SPL',                category: 'flowerpots',  price: 65,   image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'fp07', name: 'Mini Tri Color',                 category: 'flowerpots',  price: 195,  image: '/images/prod/color-fountain.jpg',       inStock: true },

  // ── ROCKETS ───────────────────────────────────────────────────────────
  { id: 'rk01', name: 'New Twin Rose',                  category: 'rockets',     price: 1450, image: '/images/prod/whistling-rocket.jpg',     inStock: true, tag: 'Premium' },
  { id: 'rk02', name: 'New Spider Sound',               category: 'rockets',     price: 1450, image: '/images/prod/sky-rocket.jpg',           inStock: true, tag: 'Premium' },
  { id: 'rk03', name: 'New Sizzling',                   category: 'rockets',     price: 1450, image: '/images/prod/whistling-rocket.jpg',     inStock: true, tag: 'Premium' },
  { id: 'rk04', name: 'New Baby Violet',                category: 'rockets',     price: 1450, image: '/images/prod/sky-rocket.jpg',           inStock: true, tag: 'Premium' },
  { id: 'rk05', name: 'Lunik Rocket',                   category: 'rockets',     price: 90,   image: '/images/prod/sky-rocket.jpg',           inStock: true },
  { id: 'rk06', name: 'Rocket Bomb',                    category: 'rockets',     price: 45,   image: '/images/prod/atom-bomb-cracker.jpg',   inStock: true },
  { id: 'rk07', name: 'Whistling Rocket',               category: 'rockets',     price: 120,  image: '/images/prod/whistling-rocket.jpg',     inStock: true, tag: 'Bestseller' },

  // ── PENCIL & TORCHES ──────────────────────────────────────────────────
  { id: 'pt01', name: 'RPG',                            category: 'pencil',      price: 140,  image: '/images/prod/pencil-firework.jpg',      inStock: true },
  { id: 'pt02', name: 'Color Magic Smoke',              category: 'pencil',      price: 120,  image: '/images/prod/smoke-bomb.jpg',           inStock: true },
  { id: 'pt03', name: '10\" Pencil',                    category: 'pencil',      price: 43,   image: '/images/prod/pencil-firework.jpg',      inStock: true },
  { id: 'pt04', name: 'Master Blaster',                 category: 'pencil',      price: 135,  image: '/images/prod/pencil-firework.jpg',      inStock: true },
  { id: 'pt05', name: 'Selfie Stick',                   category: 'pencil',      price: 110,  image: '/images/prod/long-sparkler.jpg',        inStock: true, tag: 'Popular' },
  { id: 'pt06', name: 'Traffic Master',                 category: 'pencil',      price: 115,  image: '/images/prod/pencil-firework.jpg',      inStock: true },

  // ── KIDS CRACKLING BULLETS ────────────────────────────────────────────
  { id: 'kb01', name: 'Electric Stone',                 category: 'crackling',   price: 55,   image: '/images/prod/crackling-sparkler.jpg',   inStock: true },
  { id: 'kb02', name: 'Lilly Put',                      category: 'crackling',   price: 35,   image: '/images/prod/color-sparkler.jpg',       inStock: true },
  { id: 'kb03', name: 'Magic Pops',                     category: 'crackling',   price: 9,    image: '/images/prod/candy-crush.jpg',          inStock: true },
  { id: 'kb04', name: 'Tik Tak',                        category: 'crackling',   price: 27,   image: '/images/prod/crackling-sparkler.jpg',   inStock: true },

  // ── KIDS TOY FOUNTAINS ────────────────────────────────────────────────
  { id: 'tf01', name: '123 Color Speed Balls',          category: 'toyfountain', price: 195,  image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'tf02', name: 'Corby',                          category: 'toyfountain', price: 220,  image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'tf03', name: 'Aliens',                         category: 'toyfountain', price: 225,  image: '/images/prod/drone.jpg',                inStock: true },
  { id: 'tf04', name: 'Chimpanzee',                     category: 'toyfountain', price: 225,  image: '/images/prod/monkey-toy.jpg',           inStock: true },
  { id: 'tf05', name: 'Flippers',                       category: 'toyfountain', price: 155,  image: '/images/prod/butterfly.jpg',            inStock: true },
  { id: 'tf06', name: 'Laughing Monkey',                category: 'toyfountain', price: 250,  image: '/images/prod/monkey-toy.jpg',           inStock: true, tag: 'Popular' },
  { id: 'tf07', name: 'Lion King',                      category: 'toyfountain', price: 300,  image: '/images/prod/lion-king.jpg',            inStock: true, tag: 'Bestseller' },
  { id: 'tf08', name: 'Naragasura',                     category: 'toyfountain', price: 250,  image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'tf09', name: 'Raavan',                         category: 'toyfountain', price: 250,  image: '/images/prod/lotus-wheel.jpg',          inStock: true },
  { id: 'tf10', name: 'Spider Man',                     category: 'toyfountain', price: 155,  image: '/images/prod/spiderman-toy.jpg',        inStock: true },
  { id: 'tf11', name: 'Star Buds',                      category: 'toyfountain', price: 155,  image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'tf12', name: 'Thor',                           category: 'toyfountain', price: 190,  image: '/images/prod/whistling-rocket.jpg',     inStock: true },

  // ── REPEATING MULTI-COLOR SKY ─────────────────────────────────────────
  { id: 'ms01', name: 'Seven Shots',                    category: 'multishot',   price: 195,  image: '/images/prod/multishot-cake.jpg',       inStock: true },
  { id: 'ms02', name: '7 UP Magic Star',                category: 'multishot',   price: 210,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },
  { id: 'ms03', name: '12 Shot Raider',                 category: 'multishot',   price: 115,  image: '/images/prod/multishot-cake.jpg',       inStock: true },
  { id: 'ms04', name: '120 Shot',                       category: 'multishot',   price: 1450, image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Premium' },
  { id: 'ms05', name: '15 Shot',                        category: 'multishot',   price: 190,  image: '/images/prod/multishot-cake.jpg',       inStock: true },
  { id: 'ms06', name: '150 Shot',                       category: 'multishot',   price: 1550, image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Premium' },
  { id: 'ms07', name: '240 Shot',                       category: 'multishot',   price: 2600, image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Premium' },
  { id: 'ms08', name: '30 Peacock Dance',               category: 'multishot',   price: 390,  image: '/images/prod/peacock-display.jpg',      inStock: true },
  { id: 'ms09', name: '30 Shot',                        category: 'multishot',   price: 340,  image: '/images/prod/multishot-cake.jpg',       inStock: true, tag: 'Popular' },
  { id: 'ms10', name: '50 Shot',                        category: 'multishot',   price: 625,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },
  { id: 'ms11', name: '60 Shot',                        category: 'multishot',   price: 660,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },
  { id: 'ms12', name: 'Crack Jack',                     category: 'multishot',   price: 250,  image: '/images/prod/multishot-cake.jpg',       inStock: true },
  { id: 'ms13', name: 'Crackling Max',                  category: 'multishot',   price: 375,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },
  { id: 'ms14', name: 'Mottu Patlu',                    category: 'multishot',   price: 425,  image: '/images/prod/big-shot.jpg',             inStock: true },
  { id: 'ms15', name: 'Swat Cats',                      category: 'multishot',   price: 425,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },

  // ── 4" SPL COLOR ──────────────────────────────────────────────────────
  { id: 'sc01', name: 'HULK',                           category: 'spl4inch',    price: 410,  image: '/images/prod/hydro-bomb.jpg',           inStock: true },
  { id: 'sc02', name: 'Wolverine',                      category: 'spl4inch',    price: 410,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },
  { id: 'sc03', name: 'WOW Blue',                       category: 'spl4inch',    price: 380,  image: '/images/prod/whistling-rocket.jpg',     inStock: true },
  { id: 'sc04', name: 'WOW Orange',                     category: 'spl4inch',    price: 380,  image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'sc05', name: 'WOW Pink',                       category: 'spl4inch',    price: 380,  image: '/images/prod/smoke-bomb.jpg',           inStock: true },
  { id: 'sc06', name: 'WOW Purple',                     category: 'spl4inch',    price: 380,  image: '/images/prod/big-shot.jpg',             inStock: true },

  // ── V-SHAPE FAN CAKE ──────────────────────────────────────────────────
  { id: 'vc01', name: 'Big Bang 5×7 Crackling Shots',   category: 'fanvcake',    price: 1250, image: '/images/prod/fan-cake.jpg',             inStock: true, tag: 'Premium' },
  { id: 'vc02', name: 'Party Cakes',                    category: 'fanvcake',    price: 1000, image: '/images/prod/fan-cake.jpg',             inStock: true },
];
