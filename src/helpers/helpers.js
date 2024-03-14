import food from "../Icons/food.svg";
import vegetables from "../Icons/vegetables.svg";
import fruits from "../Icons/fruits.svg";
import grocery from "../Icons/grossery.svg";
import foodImage from "../Icons/food/foodImage.svg";
import apple from "../Icons/fruits/apple.svg";
import orange from "../Icons/fruits/orange.jpeg";
import banana from "../Icons/fruits/banana.jpeg";
import grapes from "../Icons/fruits/grapes.jpeg";
import guava from "../Icons/fruits/guava.jpeg";
import carrot from "../Icons/vegetable/carrot.jpeg";
import beetroot from "../Icons/vegetable/beetroot.jpeg";
import radish from "../Icons/vegetable/radish.jpeg";
import cabbage from "../Icons/vegetable/cabbage.jpeg";
import couliflower from "../Icons/vegetable/cauliflower.jpeg";
import briyani from "../Icons/food/briyani.jpeg";
import panner from "../Icons/food/panner.jpeg";
import parotta from "../Icons/food/parotta.jpeg";
import meals from "../Icons/food/meals.jpeg";
import curd from "../Icons/food/curd.jpeg";
import television from "../Icons/electronics/television.jpeg";
import fridge from "../Icons/electronics/fridge.jpeg";
import mobile from "../Icons/electronics/phone.jpeg";
import tv from "../Icons/electronics/tv.jpeg";
import trimmer from "../Icons/electronics/trimmer.jpeg";

export const Category = [
  {
    name: "Fruits",
    id: "cat_1",
    image: fruits,
    list_items: [
      {
        name: "Apple",
        id: "cat_1_item_1",
        count: 0,
        image: apple,
        amount: 10,
      },
      {
        name: "Orange",
        id: "cat_1_item_2",
        count: 0,
        image: orange,
        amount: 20,
      },
      {
        name: "Banana",
        id: "cat_1_item_3",
        count: 0,
        image: banana,
        amount: 10,
      },
      {
        name: "Grapes",
        id: "cat_1_item_4",
        count: 0,
        image: grapes,
        amount: 20,
      },
      {
        name: "Guava",
        id: "cat_1_item_5",
        count: 0,
        image: guava,
        amount: 20,
      },
    ],
  },
  {
    name: "Vegetables",
    id: "cat_2",
    image: vegetables,
    list_items: [
      {
        name: "Carrot",
        id: "cat_2_item_1",
        count: 0,
        amount: 20,
        image: carrot,
      },
      {
        name: "Beetroot",
        id: "cat_2_item_2",
        count: 0,
        amount: 20,
        image: beetroot,
      },
      {
        name: "Radish",
        id: "cat_2_item_3",
        count: 0,
        amount: 20,
        image: radish,
      },
      {
        name: "Cabbage",
        id: "cat_2_item_4",
        count: 0,
        amount: 20,
        image: cabbage,
      },
      {
        name: "Cauliflower",
        id: "cat_2_item_5",
        count: 0,
        amount: 20,
        image: couliflower,
      },
    ],
  },
  {
    name: "Food",
    id: "cat_3",
    image: food,
    list_items: [
      {
        name: "Briyani",
        id: "cat_3_item_1",
        count: 0,
        amount: 20,
        image: briyani,
      },
      {
        name: "Panner Butter Masala",
        id: "cat_3_item_2",
        count: 0,
        amount: 20,
        image: panner,
      },
      {
        name: "Parotta",
        id: "cat_3_item_3",
        count: 0,
        amount: 20,
        image: parotta,
      },
      {
        name: "Meals",
        id: "cat_3_item_4",
        count: 0,
        amount: 20,
        image: meals,
      },
      {
        name: "Curd Rice",
        id: "cat_3_item_5",
        count: 0,
        amount: 20,
        image: curd,
      },
    ],
  },
  {
    name: "Electronics",
    id: "cat_4",
    image: television,
    list_items: [
      {
        name: "Television",
        id: "cat_4_item_1",
        count: 0,
        amount: 20000,
        image: tv,
      },
      {
        name: "Fridge",
        id: "cat_4_item_2",
        count: 0,
        amount: 30000,
        image: fridge,
      },
      {
        name: "Trimmer",
        id: "cat_4_item_3",
        count: 0,
        amount: 30000,
        image: trimmer,
      },
      {
        name: "Mobile",
        id: "cat_4_item_4",
        count: 0,
        amount: 30000,
        image: mobile,
      },
    ],
  },
];
export const StaticContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum. cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.";

export const generateId = (length) => {
  return [...Array(length)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
};
