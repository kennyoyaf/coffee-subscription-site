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

export { collection, box, list, country };
