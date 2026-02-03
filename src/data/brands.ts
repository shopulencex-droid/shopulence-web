// Slug for URL: lowercase, spaces/special to hyphen
export function getBrandSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s*&\s*/g, '-')
    .replace(/\s+/g, '-')
    .replace(/['']/g, '')
    .replace(/é/g, 'e')
    .replace(/[^a-z0-9-]/g, '');
}

export const categories = [
  'Household Cleaning',
  'Kitchen & Cooking',
  'Home Fragrance',
  'Personal Care',
  'First Aid',
  'Pet Treats & Toys',
  'D.I.Y.',
  'Gardening & Pest',
  'Car Care',
  'Hair & Grooming',
  'Haberdashery',
  'Stationery & Craft',
  'Shoe Care',
  'Books'
];

export interface Brand {
  name: string;
  category: string;
  logo: string;
  slug: string;
}

const brandList: Omit<Brand, 'slug'>[] = [
  { name: 'Elbow Grease', category: 'Household Cleaning', logo: '/assets/leftovers/35.png' },
  { name: 'Duzzit', category: 'Household Cleaning', logo: '/assets/leftovers/36.png' },
  { name: 'Swirl', category: 'Household Cleaning', logo: '/assets/leftovers/37.png' },
  { name: 'Oven Brite', category: 'Household Cleaning', logo: '/assets/leftovers/38.png' },
  { name: 'Lime Away', category: 'Household Cleaning', logo: '/assets/leftovers/41.png' },
  { name: 'Pan Aroma Household', category: 'Household Cleaning', logo: '/assets/leftovers/45.png' },
  { name: 'Seal-A-Pack', category: 'Kitchen & Cooking', logo: '/assets/leftovers/46.png' },
  { name: 'Home Maid', category: 'Kitchen & Cooking', logo: '/assets/leftovers/48.png' },
  { name: 'Simply Eggs', category: 'Kitchen & Cooking', logo: '/assets/leftovers/49.png' },
  { name: 'Pan Aroma', category: 'Home Fragrance', logo: '/assets/leftovers/45.png' },
  { name: 'Waxworks', category: 'Home Fragrance', logo: '/assets/leftovers/50.png' },
  { name: 'Fun Time', category: 'Personal Care', logo: '/assets/leftovers/58.png' },
  { name: 'Masterplast', category: 'First Aid', logo: '/assets/leftovers/60.png' },
  { name: 'Hygienics', category: 'First Aid', logo: '/assets/leftovers/61.png' },
  { name: 'Easy Read', category: 'First Aid', logo: '/assets/leftovers/62.png' },
  { name: 'Munch & Crunch', category: 'Pet Treats & Toys', logo: '/assets/leftovers/64.png' },
  { name: 'Pride & Groom', category: 'Pet Treats & Toys', logo: '/assets/leftovers/63.png' },
  { name: 'Feed Me!', category: 'Pet Treats & Toys', logo: '/assets/leftovers/65.png' },
  { name: 'Chatsworth', category: 'Gardening & Pest', logo: '/assets/leftovers/66.png' },
  { name: 'PestShield', category: 'Gardening & Pest', logo: '/assets/leftovers/59.png' },
  { name: 'Eazifeed', category: 'Gardening & Pest', logo: '/assets/leftovers/67.png' },
  { name: 'Car Pride', category: 'Car Care', logo: '/assets/leftovers/81.png' },
  { name: 'Chupa Chups', category: 'Car Care', logo: '/assets/leftovers/82.png' },
  { name: 'Rolls Razor', category: 'Hair & Grooming', logo: '/assets/leftovers/68.png' },
  { name: 'Head Funk', category: 'Hair & Grooming', logo: '/assets/leftovers/69.png' },
  { name: 'Enrico Shonalli', category: 'Hair & Grooming', logo: '/assets/leftovers/70.png' },
  { name: 'Jolly Good Grooming', category: 'Hair & Grooming', logo: '/assets/leftovers/71.png' },
  { name: 'Sewing Box', category: 'Haberdashery', logo: '/assets/leftovers/74.png' },
  { name: 'Chiltern Wove', category: 'Stationery & Craft', logo: '/assets/leftovers/76.png' },
  { name: 'Jump', category: 'Shoe Care', logo: '/assets/leftovers/77.png' },
  { name: 'Out & About', category: 'Shoe Care', logo: '/assets/leftovers/78.png' },
  { name: 'Urban Kicks', category: 'Shoe Care', logo: '/assets/leftovers/79.png' },
  { name: 'L\'Oréal', category: 'Hair & Grooming', logo: '/assets/otherbrands/L\'Oréal.png' },
  { name: 'DARIYA', category: 'Hair & Grooming', logo: '/assets/otherbrands/DARIYA.png' },
  { name: 'Miche Bloomin', category: 'Hair & Grooming', logo: '/assets/otherbrands/Miche Bloomin.png' },
  { name: 'Always', category: 'Personal Care', logo: '/assets/otherbrands/Always.png' },
  { name: 'Nivea', category: 'Personal Care', logo: '/assets/otherbrands/Nivea.png' },
  { name: 'Oral b', category: 'Personal Care', logo: '/assets/otherbrands/Oral b.png' },
  { name: 'BEAUTY OF JOSEON', category: 'Personal Care', logo: '/assets/otherbrands/BEAUTY OF JOSEON.png' },
  { name: 'Kisocare', category: 'Personal Care', logo: '/assets/otherbrands/Kisocare.png' },
  { name: 'KOSE', category: 'Personal Care', logo: '/assets/otherbrands/KOSE.png' },
  { name: 'medicube', category: 'Personal Care', logo: '/assets/otherbrands/medicube.png' },
  { name: 'mixsoon', category: 'Personal Care', logo: '/assets/otherbrands/mixsoon.png' },
  { name: 'numbuzin', category: 'Personal Care', logo: '/assets/otherbrands/numbuzin.png' },
  { name: 'Purito SEOUL', category: 'Personal Care', logo: '/assets/otherbrands/Purito SEOUL.png' },
  { name: 'SKIN1004', category: 'Personal Care', logo: '/assets/otherbrands/SKIN1004.png' },
  { name: 'TIRTIR', category: 'Personal Care', logo: '/assets/otherbrands/TIRTIR.png' },
  { name: 'TOCOBO', category: 'Personal Care', logo: '/assets/otherbrands/TOCOBO.png' },
  { name: 'Nespresso', category: 'Kitchen & Cooking', logo: '/assets/otherbrands/Nespresso.png' },
  { name: 'Nestle', category: 'Kitchen & Cooking', logo: '/assets/otherbrands/Nestle.png' },
  { name: 'Tassimo', category: 'Kitchen & Cooking', logo: '/assets/otherbrands/Tassimo.png' },
  { name: 'Pan Macmillan', category: 'Books', logo: '/assets/bookswholesaler/1.png' },
  { name: 'Gardners Books', category: 'Books', logo: '/assets/bookswholesaler/2.png' },
  { name: 'Penguin Random House (PRH)', category: 'Books', logo: '/assets/bookswholesaler/3.png' },
  { name: 'Ingram Content Group', category: 'Books', logo: '/assets/bookswholesaler/4.png' },
  { name: 'Hachet Livre UK', category: 'Books', logo: '/assets/bookswholesaler/5.png' }
];

export const brands: Brand[] = brandList.map(b => ({ ...b, slug: getBrandSlug(b.name) }));

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(b => b.slug === slug);
}
