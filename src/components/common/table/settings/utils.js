// export const generateHeadrows = (ItemsArray = []) => {
//   return ItemsArray.map((item) => ({
//     id: crypto.randomUUID(),
//     title: item,
//   }));
// };

export const items = [
  {
    id: crypto.randomUUID(),
    title: "آیفون 17 پرومکس نارنجی",
    isPublished: true,
    price: 289_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "Samsung S24 Ultra",
    isPublished: false,
    price: 260_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "Xiaomi Note 14 Pro",
    isPublished: true,
    price: 190_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "Google Pixel 9 Pro",
    isPublished: true,
    price: 210_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "OnePlus 13",
    isPublished: false,
    price: 170_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "Oppo Find X8 Pro",
    isPublished: true,
    price: 160_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "آیفون 16",
    isPublished: true,
    price: 250_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "Samsung S23",
    isPublished: false,
    price: 200_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "Xiaomi Note 13",
    isPublished: true,
    price: 150_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "آیفون 12",
    isPublished: true,
    price: 150_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "Nokia 3310",
    isPublished: false,
    price: 10_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "Xiaomi Note 8",
    isPublished: true,
    price: 50_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "Huawei P50 Pro",
    isPublished: false,
    price: 180_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "Sony Xperia 1 VI",
    isPublished: true,
    price: 220_000_000,
  },
  {
    id: crypto.randomUUID(),
    title: "LG Velvet 2 Pro",
    isPublished: false,
    price: 140_000_000,
  },
];

export const classNames = {
    isPublished: "text-green-500 bg-green-500/10",
    isPrivate: "bg-red-500/10 text-red-500",
    defaultBadge: "text-xs px-1 py-0.5 rounded-md border max-w-max cursor-pointer select-none hover:opacity-80 max-h-max"
  };
  