import Air from "../assets/MyImages/Air.jpg";
import coolBlack from "../assets/MyImages/coolBlack.jpg";
import baby from "../assets/MyImages/baby.jpg";
import white from "../assets/MyImages/white.jpg";
import Oscroh from "../assets/MyImages/Oscroh.jpg";
import HotBoy from "../assets/MyImages/HotBoy.jpg";
import framer from "../assets/MyImages/framer.jpg";
import blazing from "../assets/MyImages/blazing.png";
import Yo from "../assets/MyImages/Yo.jpg";
import Kev from "../assets/MyImages/Kev.jpg";
import Santos from "../assets/MyImages/Santos.jpg";
import myShoe from "../assets/MyImages/myShoe.png";
import myBaby from "../assets/MyImages/myBaby.png";


export const MyProducts = [
  {
    imgURL: Air,
    name: "Hot Sneaker",
    price: "55,090",
  },
  {
    imgURL: coolBlack,
    name: "Black Jordan",
    price: "65,300",
  },
 
  {
    imgURL: white,
    name: "White Airforce",
    price: "25,250",
  },
  {
    imgURL: Oscroh,
    name: "Oscroh",
    price: "45,000",
  },
];

export const matchShoes = [
  {
    imgURL: HotBoy,
    name: "Nike Revolve",
    price: "75,200",
  },
  {
    imgURL: baby,
    name: "Air Baby",
    price: "10,000",
  },
  {
    imgURL: framer,
    name: "Nike Sneaker",
    price: "23,000",
  },

  {
    imgURL: Yo,
    name: "Nike Blazers",
    price: "15,300",
  },
];

export const myShoes = [
  {
    goodShoe: myShoe,
  },
  {
    goodShoe: myBaby,
  },
  {
    goodShoe: blazing,
  },
];

export const reviews = [
  {
    imgURL: Kev,
    customerName: "Kelvin Tukor",
    rating: 4.5,
    feedback:
      "Bruv, these kicks? Mad ting! Stepped out in me fresh pair, and manz was turnin' heads like I just pulled up in a Lambo. Comfort’s top, style’s cold, and the grip? Bruv, I could sprint from feds and still look peng doin’ it. No long talk—if you ain’t rockin’ Thug Boys, you ain’t steppin’ proper. Get yours, init?",
  },
  {
    imgURL: Santos,
    customerName: "Santos Escobar",
    rating: 4.5,
    feedback:
      "Oi, listen yeah—these creps? Straight savage. Man copped a pair, and now I’m steppin’ like a boss. The fit’s mad comfy, the style’s drippy, and every time I touch road, gyaldem be clockin’. Man’s feelin’ too elite. Bruv, if you ain’t got Thug Boys on ya feet, you ain’t really outside. Levels to this, innit?",
  },
];

import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
