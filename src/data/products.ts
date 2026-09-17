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
  | 'fanvcake'
  | 'twinkling'
  | 'cakeitems'
  | 'giftbox'
  | 'aerial';

export interface Category {
  id: CategoryId | 'all';
  label: string;
  emoji: string;
  image: string;
}

export const categories: Category[] = [
  { id: 'all',         label: 'All Products',            emoji: '🎆', image: '/images/prod/multishot-cake.jpg' },
  { id: 'crackers',    label: 'Crackers',                    emoji: '🧨', image: '/images/prod/electric-sparkler.jpg' },
  { id: 'kids',        label: 'Kids Collection',         emoji: '🎠', image: '/images/prod/kids-fountain.jpg' },
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
  { id: 'twinkling',   label: 'Twinkling Star',           emoji: '✨', image: '/images/prod/color-sparkler.jpg' },
  { id: 'cakeitems',   label: 'Cake Items',               emoji: '🧁', image: '/images/prod/fan-cake.jpg' },
  { id: 'giftbox',     label: 'Gift Box',                 emoji: '🎁', image: '/images/prod/kids-fountain.jpg' },
  { id: 'aerial',      label: 'Aerial Nightouts',         emoji: '🌌', image: '/images/prod/big-shot.jpg' },
];

export const products: Product[] = [

  // ── CRACKERS ──────────────────────────────────────────────────────────
  { id: 'cr01', name: '3½ " Lakshmi',                   category: 'crackers',    price: 60,    image: '/images/prod/lakshmi-bomb.jpg',         inStock: true },
  { id: 'cr02', name: '4 " Laksmi',                     category: 'crackers',    price: 88,    image: '/images/prod/lakshmi-bomb.jpg',         inStock: true },
  { id: 'cr03', name: '2 3/4 Kuruvi',                   category: 'crackers',    price: 44,    image: '/images/prod/bijili.jpg',               inStock: true },
  { id: 'cr04', name: '4" Gold Lakshmi',                category: 'crackers',    price: 180,   image: '/images/prod/lakshmi-bomb.jpg',         inStock: true, tag: 'Bestseller' },
  { id: 'cr05', name: '2 Sound Crackers',               category: 'crackers',    price: 188,   image: '/images/prod/lakshmi-bomb.jpg',         inStock: true },
  { id: 'cr06', name: 'Red Bijili 50 pc',               category: 'crackers',    price: 88,    image: '/images/prod/bijili.jpg',               inStock: true },
  { id: 'cr07', name: 'Stripped Bijili',                category: 'crackers',    price: 168,   image: '/images/prod/bijili.jpg',               inStock: true },
  { id: 'cr08', name: '¼ kg Paper Bomb',                category: 'crackers',    price: 156,   image: '/images/prod/candy-crush.jpg',          inStock: true },
  { id: 'cr09', name: '½ kg Paper Bomb',                category: 'crackers',    price: 280,   image: '/images/prod/atom-bomb-cracker.jpg',    inStock: true },
  { id: 'cr10', name: '1 kg Paper Bomb',                category: 'crackers',    price: 560,   image: '/images/prod/hydro-bomb.jpg',           inStock: true },
  { id: 'cr11', name: '1K',                             category: 'crackers',    price: 0,     image: '/images/prod/bijili.jpg',               inStock: false },
  { id: 'cr12', name: '2K',                             category: 'crackers',    price: 0,     image: '/images/prod/bijili.jpg',               inStock: false },
  { id: 'cr13', name: '3K',                             category: 'crackers',    price: 0,     image: '/images/prod/bijili.jpg',               inStock: false },
  { id: 'cr14', name: '5K',                             category: 'crackers',    price: 0,     image: '/images/prod/bijili.jpg',               inStock: false },

  // ── NEW ARRIVALS ──────────────────────────────────────────────────────
  { id: 'na01', name: 'Golden Eye',                     category: 'crackers',    price: 0,     image: '/images/prod/color-fountain.jpg',       inStock: false },
  { id: 'na02', name: 'Kulfi',                          category: 'crackers',    price: 1180,  image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'na03', name: 'I Cone',                         category: 'crackers',    price: 1488,  image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'na04', name: 'Pom Pom',                        category: 'crackers',    price: 1088,  image: '/images/prod/butterfly.jpg',            inStock: true },
  { id: 'na05', name: 'Snake Eye',                      category: 'crackers',    price: 11472, image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Premium' },
  { id: 'na06', name: 'Ping Out',                       category: 'crackers',    price: 0,     image: '/images/prod/crackling-aerial.jpg',     inStock: false },
  { id: 'na07', name: 'Purple Rain',                    category: 'crackers',    price: 11472, image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Premium' },
  { id: 'na08', name: 'Titoo',                          category: 'crackers',    price: 0,     image: '/images/prod/kids-fountain.jpg',        inStock: false },
  { id: 'na09', name: 'Paris',                          category: 'crackers',    price: 0,     image: '/images/prod/color-fountain.jpg',       inStock: false },
  { id: 'na10', name: 'Silver Rain',                    category: 'crackers',    price: 0,     image: '/images/prod/crackling-aerial.jpg',     inStock: false },
  { id: 'na11', name: 'Roller Coaster',                 category: 'crackers',    price: 0,     image: '/images/prod/multishot-cake.jpg',       inStock: false },

  // ── PEACOCK ───────────────────────────────────────────────────────────
  { id: 'pk01', name: 'Peacock Feather 5 pc',           category: 'peacock',     price: 744,   image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'pk02', name: 'Peacock fountain',               category: 'peacock',     price: 900,   image: '/images/prod/peacock-display.jpg',      inStock: true },
  { id: 'pk03', name: 'Pada Peacock',                   category: 'peacock',     price: 1800,  image: '/images/prod/peacock-display.jpg',      inStock: true, tag: 'Premium' },
  { id: 'pk04', name: 'Mini Peacock',                   category: 'peacock',     price: 684,   image: '/images/prod/peacock-display.jpg',      inStock: true },

  // ── GROUND CHAKKARS ───────────────────────────────────────────────────
  { id: 'ch01', name: 'Ground Chakkar big',             category: 'chakkars',    price: 176,   image: '/images/prod/chakkar-spin.jpg',         inStock: true },
  { id: 'ch02', name: 'Ground Chakkar Asoka',           category: 'chakkars',    price: 412,   image: '/images/prod/chakkar-spin.jpg',         inStock: true },
  { id: 'ch03', name: 'Ground Chakkar Asoka (Small)',   category: 'chakkars',    price: 232,   image: '/images/prod/chakkar-spin.jpg',         inStock: true },
  { id: 'ch04', name: 'Spinner',                        category: 'chakkars',    price: 0,     image: '/images/prod/chakkar-spin.jpg',         inStock: false },
  { id: 'ch05', name: 'Wizz Chakkar',                   category: 'chakkars',    price: 900,   image: '/images/prod/chakkar-spin.jpg',         inStock: true },
  { id: 'ch06', name: 'Twister SPL',                    category: 'chakkars',    price: 0,     image: '/images/prod/rotating-sparkler.jpg',    inStock: false },
  { id: 'ch07', name: 'CockTail Spinner',               category: 'chakkars',    price: 0,     image: '/images/prod/chakkar-spin.jpg',         inStock: false },
  { id: 'ch08', name: 'Spin Master Mini',               category: 'chakkars',    price: 0,     image: '/images/prod/chakkar-spin.jpg',         inStock: false },
  { id: 'ch09', name: 'Maska Chaska',                   category: 'chakkars',    price: 0,     image: '/images/prod/rotating-sparkler.jpg',    inStock: false },
  { id: 'ch10', name: 'Euro Stars (6 IN 1 Jumping Chakkars)', category: 'chakkars', price: 0, image: '/images/prod/lotus-wheel.jpg',      inStock: false },
  { id: 'ch11', name: 'Scooby Doo (Double Golden Wheel)',category: 'chakkars',   price: 0,     image: '/images/prod/lotus-wheel.jpg',          inStock: false },

  // ── ATOM BOMBS ────────────────────────────────────────────────────────
  { id: 'ab01', name: 'Bullet Bomb',                    category: 'bombs',       price: 164,   image: '/images/prod/atom-bomb-cracker.jpg',    inStock: true },
  { id: 'ab02', name: 'Hydro Bomb',                     category: 'bombs',       price: 280,   image: '/images/prod/hydro-bomb.jpg',           inStock: true, tag: 'Loud' },
  { id: 'ab03', name: 'King Kong Bomb',                 category: 'bombs',       price: 372,   image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Loud' },
  { id: 'ab04', name: '555 bomb',                       category: 'bombs',       price: 684,   image: '/images/prod/hydro-bomb.jpg',           inStock: true },
  { id: 'ab05', name: 'Classic Bomb',                   category: 'bombs',       price: 496,   image: '/images/prod/atom-bomb-cracker.jpg',    inStock: true },

  // ── FLOWER POTS ───────────────────────────────────────────────────────
  { id: 'fp01', name: 'Flower Pots Big',                category: 'flowerpots',  price: 304,   image: '/images/prod/flower-pot-sparks.jpg',    inStock: true },
  { id: 'fp02', name: 'Flower Pots SPL',                category: 'flowerpots',  price: 412,   image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'fp03', name: 'Flower Pots ASOKA',              category: 'flowerpots',  price: 572,   image: '/images/prod/flower-pot-sparks.jpg',    inStock: true },
  { id: 'fp04', name: 'Color KOTI',                     category: 'flowerpots',  price: 964,   image: '/images/prod/color-fountain.jpg',       inStock: true, tag: 'Popular' },
  { id: 'fp05', name: 'Color KOTI SPL',                 category: 'flowerpots',  price: 1056,  image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'fp06', name: 'Mini Tri Color',                 category: 'flowerpots',  price: 0,     image: '/images/prod/color-fountain.jpg',       inStock: false },
  { id: 'fp07', name: 'Fire Drops',                     category: 'flowerpots',  price: 652,   image: '/images/prod/flower-pot-sparks.jpg',    inStock: true },
  { id: 'fp08', name: 'Flower Pots Dx',                 category: 'flowerpots',  price: 1132,  image: '/images/prod/color-fountain.jpg',       inStock: true },

  // ── ROCKETS ───────────────────────────────────────────────────────────
  { id: 'rk01', name: 'Rocket Bomb',                    category: 'rockets',     price: 360,   image: '/images/prod/atom-bomb-cracker.jpg',    inStock: true },
  { id: 'rk02', name: 'Lunik Rocket',                   category: 'rockets',     price: 524,   image: '/images/prod/sky-rocket.jpg',           inStock: true },
  { id: 'rk03', name: 'Whistiling Rocket',              category: 'rockets',     price: 900,   image: '/images/prod/whistling-rocket.jpg',     inStock: true, tag: 'Bestseller' },

  // ── PENCIL & TORCHES ──────────────────────────────────────────────────
  { id: 'pt01', name: '10" Pencil',                     category: 'pencil',      price: 300,   image: '/images/prod/pencil-firework.jpg',      inStock: true },
  { id: 'pt02', name: 'Master Blaster',                 category: 'pencil',      price: 0,     image: '/images/prod/pencil-firework.jpg',      inStock: false },
  { id: 'pt03', name: 'Selfie Stick',                   category: 'pencil',      price: 684,   image: '/images/prod/long-sparkler.jpg',        inStock: true, tag: 'Popular' },
  { id: 'pt04', name: 'Traffic Master',                 category: 'pencil',      price: 684,   image: '/images/prod/pencil-firework.jpg',      inStock: true },

  // ── KIDS CRACKLING BULLETS ────────────────────────────────────────────
  { id: 'kb01', name: 'Magic Pops',                     category: 'crackling',   price: 76,    image: '/images/prod/candy-crush.jpg',          inStock: true },
  { id: 'kb02', name: 'Tik Tak',                        category: 'crackling',   price: 372,   image: '/images/prod/crackling-sparkler.jpg',   inStock: true },
  { id: 'kb03', name: 'Electric Stone',                 category: 'crackling',   price: 372,   image: '/images/prod/crackling-sparkler.jpg',   inStock: true },
  { id: 'kb04', name: 'Lilly Put',                      category: 'crackling',   price: 280,   image: '/images/prod/color-sparkler.jpg',       inStock: true },

  // ── KIDS TOY FOUNTAINS ────────────────────────────────────────────────
  { id: 'tf01', name: 'Star Buds',                      category: 'toyfountain', price: 932,   image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'tf02', name: 'Spider Man',                     category: 'toyfountain', price: 932,   image: '/images/prod/spiderman-toy.jpg',        inStock: true },
  { id: 'tf03', name: 'Flippers',                       category: 'toyfountain', price: 932,   image: '/images/prod/butterfly.jpg',            inStock: true },
  { id: 'tf04', name: 'Chimpanzee',                     category: 'toyfountain', price: 1272,  image: '/images/prod/monkey-toy.jpg',           inStock: true },
  { id: 'tf05', name: 'Aliens',                         category: 'toyfountain', price: 1272,  image: '/images/prod/drone.jpg',                inStock: true },
  { id: 'tf06', name: 'Raavan',                         category: 'toyfountain', price: 1428,  image: '/images/prod/lotus-wheel.jpg',          inStock: true },
  { id: 'tf07', name: 'Thor',                           category: 'toyfountain', price: 0,     image: '/images/prod/whistling-rocket.jpg',     inStock: false },
  { id: 'tf08', name: 'Laughing Monkey',                category: 'toyfountain', price: 0,     image: '/images/prod/monkey-toy.jpg',           inStock: false },
  { id: 'tf09', name: 'Lion King',                      category: 'toyfountain', price: 0,     image: '/images/prod/lion-king.jpg',            inStock: false },
  { id: 'tf10', name: 'Naragasura',                     category: 'toyfountain', price: 1272,  image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'tf11', name: 'Tik Tok',                        category: 'toyfountain', price: 0,     image: '/images/prod/crackling-sparkler.jpg',   inStock: false },

  // ── REPEATING MULTI-COLOR SKY ─────────────────────────────────────────
  { id: 'ms01', name: 'Swat Cats',                      category: 'multishot',   price: 2544,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },
  { id: 'ms02', name: 'Mottu Patlu',                    category: 'multishot',   price: 2544,  image: '/images/prod/big-shot.jpg',             inStock: true },
  { id: 'ms03', name: 'Crack Jack',                     category: 'multishot',   price: 1428,  image: '/images/prod/multishot-cake.jpg',       inStock: true },
  { id: 'ms04', name: 'Crackling Max',                  category: 'multishot',   price: 2108,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },
  { id: 'ms05', name: '30 Peacock Dance',               category: 'multishot',   price: 2296,  image: '/images/prod/peacock-display.jpg',      inStock: true },
  { id: 'ms06', name: '12 Shot Raider',                 category: 'multishot',   price: 0,     image: '/images/prod/multishot-cake.jpg',       inStock: false },
  { id: 'ms07', name: '15 Shot',                        category: 'multishot',   price: 0,     image: '/images/prod/multishot-cake.jpg',       inStock: false },
  { id: 'ms08', name: '30 Shot',                        category: 'multishot',   price: 1800,  image: '/images/prod/multishot-cake.jpg',       inStock: true, tag: 'Popular' },
  { id: 'ms09', name: '50 Shot',                        category: 'multishot',   price: 3040,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },
  { id: 'ms10', name: '60 Shot',                        category: 'multishot',   price: 3596,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },
  { id: 'ms11', name: '120 shot',                       category: 'multishot',   price: 7192,  image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Premium' },
  { id: 'ms12', name: '150 shot',                       category: 'multishot',   price: 9920,  image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Premium' },
  { id: 'ms13', name: '240 Shot',                       category: 'multishot',   price: 14384, image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Premium' },

  // ── 4" SPL COLOR ──────────────────────────────────────────────────────
  { id: 'sc01', name: 'WOW Orange',                     category: 'spl4inch',    price: 1812,  image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'sc02', name: 'WOW Pink',                       category: 'spl4inch',    price: 1812,  image: '/images/prod/smoke-bomb.jpg',           inStock: true },
  { id: 'sc03', name: 'WOW Blue',                       category: 'spl4inch',    price: 1812,  image: '/images/prod/whistling-rocket.jpg',     inStock: true },
  { id: 'sc04', name: 'WOW Purple',                     category: 'spl4inch',    price: 1812,  image: '/images/prod/big-shot.jpg',             inStock: true },
  { id: 'sc05', name: 'Wolvorine',                      category: 'spl4inch',    price: 2204,  image: '/images/prod/crackling-aerial.jpg',     inStock: true },
  { id: 'sc06', name: '6 " SUPER',                      category: 'spl4inch',    price: 0,     image: '/images/prod/big-shot.jpg',             inStock: false },

  // ── AERIAL NIGHTOUTS ──────────────────────────────────────────────────
  { id: 'an01', name: 'Chotta Fancy',                   category: 'aerial',      price: 280,   image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'an02', name: '2"Fancy',                        category: 'aerial',      price: 492,   image: '/images/prod/flower-pot-sparks.jpg',    inStock: true },
  { id: 'an03', name: '3½ " Fancy',                     category: 'aerial',      price: 1228,  image: '/images/prod/sky-rocket.jpg',           inStock: true },
  { id: 'an04', name: '3½" Nayagra Falls',              category: 'aerial',      price: 1212,  image: '/images/prod/peacock-display.jpg',      inStock: true },
  { id: 'an05', name: '4"Jumbo  2 pc',                  category: 'aerial',      price: 4108,  image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Premium' },
  { id: 'an06', name: '6" Fancy',                       category: 'aerial',      price: 6512,  image: '/images/prod/big-shot.jpg',             inStock: true, tag: 'Premium' },
  { id: 'an07', name: 'Texon delight',                  category: 'aerial',      price: 1812,  image: '/images/prod/multishot-cake.jpg',       inStock: true },
  { id: 'an08', name: 'Seven shots color',              category: 'aerial',      price: 0,     image: '/images/prod/multishot-cake.jpg',       inStock: false },
  { id: 'an09', name: '7 up Magic stars',               category: 'aerial',      price: 0,     image: '/images/prod/crackling-aerial.jpg',     inStock: false },
  { id: 'an10', name: '123 speed balls',                category: 'aerial',      price: 1092,  image: '/images/prod/color-fountain.jpg',       inStock: true },
  { id: 'an11', name: 'Corby',                          category: 'aerial',      price: 1212,  image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'an12', name: 'SIREN Green',                    category: 'aerial',      price: 0,     image: '/images/prod/siren-green.jpg',          inStock: false },

  // ── KIDS COLLECTION (ADDITIONAL) ──────────────────────────────────────
  { id: 'kc01', name: 'Butterfly',                      category: 'kids',        price: 496,   image: '/images/prod/butterfly.jpg',            inStock: true },
  { id: 'kc02', name: 'Bampara',                        category: 'kids',        price: 620,   image: '/images/prod/color-sparkler.jpg',       inStock: true },
  { id: 'kc03', name: 'Tik Tok',                        category: 'kids',        price: 0,     image: '/images/prod/crackling-sparkler.jpg',   inStock: false },
  { id: 'kc04', name: 'Electric Stone',                 category: 'kids',        price: 52,    image: '/images/prod/crackling-sparkler.jpg',   inStock: true },
  { id: 'kc05', name: 'Photo Flash',                    category: 'kids',        price: 496,   image: '/images/prod/electric-sparkler.jpg',    inStock: true },
  { id: 'kc06', name: 'Mini Siren',                     category: 'kids',        price: 868,   image: '/images/prod/siren-green.jpg',          inStock: true },
  { id: 'kc07', name: 'Siren 2 Pcs',                    category: 'kids',        price: 808,   image: '/images/prod/siren-green.jpg',          inStock: true },
  { id: 'kc08', name: 'Siren 3 Pcs',                    category: 'kids',        price: 1116,  image: '/images/prod/siren-green.jpg',          inStock: true },
  { id: 'kc09', name: 'Drone',                          category: 'kids',        price: 992,   image: '/images/prod/drone.jpg',                inStock: true },
  { id: 'kc10', name: 'Helicopter',                     category: 'kids',        price: 560,   image: '/images/prod/helicopter.jpg',           inStock: true },
  { id: 'kc11', name: 'Chocolate bomb',                 category: 'kids',        price: 684,   image: '/images/prod/candy-crush.jpg',          inStock: true },
  { id: 'kc12', name: '4 x 4 Wheel',                    category: 'kids',        price: 744,   image: '/images/prod/lotus-wheel.jpg',          inStock: true },
  { id: 'kc13', name: 'Black Money',                    category: 'kids',        price: 1676,  image: '/images/prod/butterfly.jpg',            inStock: true },
  { id: 'kc14', name: 'Motu Patlu',                     category: 'kids',        price: 1900,  image: '/images/prod/helicopter.jpg',           inStock: true },
  { id: 'kc15', name: 'Shin Chan',                      category: 'kids',        price: 744,   image: '/images/prod/monkey-toy.jpg',           inStock: true },
  { id: 'kc16', name: 'Color Smoke',                    category: 'kids',        price: 932,   image: '/images/prod/smoke-bomb.jpg',           inStock: true },
  { id: 'kc17', name: 'TIN',                            category: 'kids',        price: 744,   image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'kc18', name: 'Color Magic',                    category: 'kids',        price: 684,   image: '/images/prod/smoke-bomb.jpg',           inStock: true },
  { id: 'kc19', name: 'RPG',                            category: 'kids',        price: 684,   image: '/images/prod/pencil-firework.jpg',      inStock: true },
  { id: 'kc20', name: 'AK 47',                          category: 'kids',        price: 684,   image: '/images/prod/pencil-firework.jpg',      inStock: true },
  { id: 'kc21', name: 'Lolly pop',                      category: 'kids',        price: 0,     image: '/images/prod/candy-crush.jpg',          inStock: false },

  // ── TWINKLING STAR ────────────────────────────────────────────────────
  { id: 'ts01', name: '1½ \' Twinkling star',           category: 'twinkling',   price: 164,   image: '/images/prod/color-sparkler.jpg',       inStock: true },
  { id: 'ts02', name: '4\' Twinkling star',             category: 'twinkling',   price: 372,   image: '/images/prod/long-sparkler.jpg',        inStock: true },

  // ── CAKE ITEMS ────────────────────────────────────────────────────────
  { id: 'ci01', name: 'Univer cell',                    category: 'cakeitems',   price: 19840, image: '/images/prod/fan-cake.jpg',             inStock: true, tag: 'Premium' },
  { id: 'ci02', name: 'G20',                            category: 'cakeitems',   price: 14260, image: '/images/prod/fan-cake.jpg',             inStock: true },
  { id: 'ci03', name: '10 cm Electric Sparkler',        category: 'cakeitems',   price: 132,   image: '/images/prod/electric-sparkler.jpg',    inStock: true },
  { id: 'ci04', name: '10 cm color sparkler',           category: 'cakeitems',   price: 152,   image: '/images/prod/color-sparkler.jpg',       inStock: true },
  { id: 'ci05', name: '15 cm ELectric sparkler',        category: 'cakeitems',   price: 300,   image: '/images/prod/electric-sparkler.jpg',    inStock: true },
  { id: 'ci06', name: '15 cm color sparkler',           category: 'cakeitems',   price: 324,   image: '/images/prod/crackling-sparkler.jpg',   inStock: true },
  { id: 'ci07', name: '30 cm electric sparkler',        category: 'cakeitems',   price: 300,   image: '/images/prod/long-sparkler.jpg',        inStock: true },
  { id: 'ci08', name: '30 cm color',                    category: 'cakeitems',   price: 324,   image: '/images/prod/crackling-sparkler.jpg',   inStock: true },
  { id: 'ci09', name: '50 cm electric',                   category: 'cakeitems',   price: 1180,  image: '/images/prod/giant-sparkler.jpg',       inStock: true },
  { id: 'ci10', name: 'Rotating sparkler',              category: 'cakeitems',   price: 964,   image: '/images/prod/rotating-sparkler.jpg',    inStock: true },
  { id: 'ci11', name: 'LAPTOP color match box',         category: 'cakeitems',   price: 1460,  image: '/images/prod/candy-crush.jpg',          inStock: true },

  // ── GIFT BOX ──────────────────────────────────────────────────────────
  { id: 'gb01', name: '20 Items',                       category: 'giftbox',     price: 1460,  image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'gb02', name: '30 Items',                       category: 'giftbox',     price: 2048,  image: '/images/prod/kids-fountain.jpg',        inStock: true, tag: 'Popular' },
  { id: 'gb03', name: '35 Items',                       category: 'giftbox',     price: 2668,  image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'gb04', name: '42 Items',                       category: 'giftbox',     price: 4092,  image: '/images/prod/kids-fountain.jpg',        inStock: true },
  { id: 'gb05', name: '50 Items',                       category: 'giftbox',     price: 5148,  image: '/images/prod/kids-fountain.jpg',        inStock: true, tag: 'Bestseller' },
  { id: 'gb06', name: 'Roll Caps',                      category: 'giftbox',     price: 0,     image: '/images/prod/bijili.jpg',               inStock: false },
  { id: 'gb07', name: 'Ring Caps',                      category: 'giftbox',     price: 0,     image: '/images/prod/bijili.jpg',               inStock: false },
  { id: 'gb08', name: 'Mega Matches',                   category: 'giftbox',     price: 0,     image: '/images/prod/electric-sparkler.jpg',    inStock: false },
];