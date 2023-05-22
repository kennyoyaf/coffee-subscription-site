import kopi1 from "./kopi1.png";
import kopi2 from "./kopi2.png";
import kopi3 from "./kopi3.png";
import kopi4 from "./kopi4.png";
import BoxShape from "./Box-Shape.svg";
import BusShape from "./Bus-Shape.svg";
import NutShape from "./Nut-Shape.svg";
import Uk from "./United-kingdom.png";
import Can from "./Canada.png";
import Aus from "./Australia.png";

const collection = [
  {
    image: kopi1,
    heading: "Gran Espresso",
    text: "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    image: kopi2,
    heading: "Planalto",
    text: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    image: kopi3,
    heading: "Piccollo",
    text: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
  },
  {
    image: kopi4,
    heading: "Danche",
    text: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

const box = [
  {
    image: NutShape,
    heading: "Best quality",
    text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    image: BoxShape,
    heading: "Exclusive benefits",
    text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    image: BusShape,
    heading: "Free shipping",
    text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

const list = [
  {
    number: 1,
    heading: "Pick your coffee",
    text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: 2,
    heading: "Choose the frequency",
    text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: 3,
    heading: "Receive and enjoy!",
    text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

const country = [
  {
    image: Uk,
    country: "United Kingdom",
    address: "68  Asfordby Rd",
    city: "Alcaston",
    postnumber: "SY6 1YA",
    number: "+44 1241 918425",
  },
  {
    image: Can,
    country: "Canada",
    address: "1528  Eglinton Avenue",
    city: "Toronto",
    postnumber: "Ontario M4P 1A6",
    number: "+1 416 485 2997",
  },
  {
    image: Aus,
    country: "Australia",
    address: "36 Swanston Street",
    city: "Kewell",
    postnumber: "Victoria",
    number: "+61 4 9928 3629",
  },
];

const delivery = [
  {
    question: "How do you drink your coffee?",
    heading1: "Capsule",
    option1: "Compatible with Nespresso systems and similar brewers",
    heading2: "Filter",
    option2: "For pour over or drip methods like Aeropress, Chemex, and V60",
    heading3: "Espresso",
    option3:
      "Dense and finely ground beans for an intense, flavorful experience",
  },
  {
    question: "What type of coffee?",
    heading1: "Single Origin",
    option1: "Distinct, high quality coffee from a specific family-owned farm",
    heading2: "Decaf",
    option2: "Just like regular coffee, except the caffeine has been removed",
    heading3: "Blended",
    option3:
      "Combination of two or three dark roasted beans of organic coffees",
  },
  {
    question: "How much would you like?",
    heading1: "250g",
    option1: "Perfect for the solo drinker. Yields about 12 delicious cups.",
    heading2: "500g",
    option2: "Perfect option for a couple. Yields about 40 delectable cups.",
    heading3: "1000g",
    option3: "Perfect for offices and events. Yields about 90 delightful cups.",
  },
  {
    question: "Want us to grind them?",
    heading1: "Wholebean",
    option1: "Best choice if you cherish the full sensory experience",
    heading2: "Filter",
    option2: "For drip or pour-over coffee methods such as V60 or Aeropress",
    heading3: "Cafetiére",
    option3: "Course ground beans specially suited for french press coffee",
  },
  {
    question: "How often should we deliver?",
    heading1: "Every week",
    option1: "$7.20 per shipment. Includes free first-class shipping.",
    heading2: "Every 2 weeks",
    option2: "$9.60 per shipment. Includes free priority shipping.",
    heading3: "Every month",
    option3: "$12.00 per shipment. Includes free priority shipping.",
  },
];

const boxData = [
  {
    heading: "Capsule",
    text: "Compatible with Nespresso systems and similar brewers",
  },
  {
    heading: "Filter",
    text: "For pour over or drip methods like Aeropress, Chemex, and V60",
  },
  {
    heading: "Espresso",
    text: "Dense and finely ground beans for an intense, flavorful experience",
  },
  {
    heading: "Single Origin",
    text: "Distinct, high quality coffee from a specific family-owned farm",
  },
  {
    heading: "Decaf",
    text: "Just like regular coffee, except the caffeine has been removed",
  },
  {
    heading: "Blended",
    text: "Combination of two or three dark roasted beans of organic coffees",
  },
  {
    heading: "250g",
    text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
  },
  {
    heading: "500g",
    text: "Perfect option for a couple. Yields about 40 delectable cups.",
  },
  {
    heading: "1000g",
    text: "Perfect for offices and events. Yields about 90 delightful cups.",
  },
  {
    heading: "Wholebean",
    text: "Best choice if you cherish the full sensory experience",
  },
  {
    heading: "Filter",
    text: "For drip or pour-over coffee methods such as V60 or Aeropress",
  },
  {
    heading: "Cafetiére",
    text: "Course ground beans specially suited for french press coffee",
  },
  {
    heading: "Every week",
    text: "$7.20 per shipment. Includes free first-class shipping.",
  },
  {
    heading: "Every 2 weeks",
    text: "$9.60 per shipment. Includes free priority shipping.",
  },
  {
    heading: "Every month",
    text: "$12.00 per shipment. Includes free priority shipping.",
  },
];

export { collection, box, list, country, delivery, boxData };
