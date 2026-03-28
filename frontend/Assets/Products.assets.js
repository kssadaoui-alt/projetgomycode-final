const products = [
  // Featured
  {
    id: 1,
    type: "Laptop",
    name: "BenQ PD3205U 32″ 4K UHD Monitor",
    originalPrice: "89130",
    status: "Top Rated",
    brand: "Samsung",
    availability: "In Stock",
    image_1:
      "https://mdcomputers.lk/wp-content/uploads/2025/01/E40AAz0j0bMqWtAguABsGY4jwlLlYVOJwqh0wwxl.png",
    image_2:
      "https://mdcomputers.lk/wp-content/uploads/2025/01/E40AAz0j0bMqWtAguABsGY4jwlLlYVOJwqh0wwxl.png",
    image_3:
      "https://mdcomputers.lk/wp-content/uploads/2025/01/E40AAz0j0bMqWtAguABsGY4jwlLlYVOJwqh0wwxl.png",
    tag: "Featured",
  },
  {
    id: 2,
    name: "Asus Vivobook 15 X1504VAP – Core 3L",
    originalPrice: "89130",
    discountedPrice: "82000",
    availability: "Discontinued",
    type: "Mobile Phone",
    status: "-8% ",
    brand: "Asus",
    image_1:
      "https://www.laptop.lk/wp-content/uploads/2025/01/Asus-Vivobook-15-X1504VAP-%E2%80%93-Core-3-1.jpg",
    image_2:
      "https://www.laptop.lk/wp-content/uploads/2025/01/Asus-Vivobook-15-X1504VAP-%E2%80%93-Core-3-1.jpg",
    image_3:
      "https://www.laptop.lk/wp-content/uploads/2025/01/Asus-Vivobook-15-X1504VAP-%E2%80%93-Core-3-1.jpg",
    tag: "Featured",
  },
  {
    id: 3,
    name: "Joystick – Logitech F310 Gamepad",
    originalPrice: "18700",
    availability: "Available Soon",
    status: "Low Stock",
    type: "Desktop Computer",
    brand: "Logitech",
    image_1: "https://www.laptop.lk/wp-content/uploads/2021/03/A-1.jpg",
    image_2: "https://www.laptop.lk/wp-content/uploads/2021/03/A-1.jpg",
    image_3: "https://www.laptop.lk/wp-content/uploads/2021/03/A-1.jpg",
    tag: "Featured",
  },
  {
    id: 4,
    name: "Corsair HS50 Pro Stereo Gaming Headset",
    originalPrice: "18700",
    availability: "In Stock",
    type: "Gaming Accessories",
    status: "Flash Sale",
    brand: "Corsair ",
    image_1: "https://www.laptop.lk/wp-content/uploads/2021/07/sds.jpg",
    image_2: "https://www.laptop.lk/wp-content/uploads/2021/07/sds.jpg",
    image_3: "https://www.laptop.lk/wp-content/uploads/2021/07/sds.jpg",
    tag: "Featured",
  },
  {
    id: 5,
    name: "ASUS TUF GAMING A15  RYZEN 7 7000 SERIES RTX 2050",
    originalPrice: "275000",
    discountedPrice: "250000",
    type: "TELEVISION",
    availability: "In Stock",
    status: "-20%",
    brand: "ASUS ",
    image_1:
      "https://www.nanotek.lk/storage/products/1029/9uoznDWsho39Xp7CImxJc7VwRIey5QuggDHCwv3N.png",
    image_2:
      "https://www.nanotek.lk/storage/products/1029/9uoznDWsho39Xp7CImxJc7VwRIey5QuggDHCwv3N.png",
    image_3:
      "https://www.nanotek.lk/storage/products/1029/9uoznDWsho39Xp7CImxJc7VwRIey5QuggDHCwv3N.png",
    tag: "Featured",
  },
  {
    id: 6,
    name: "MSI MAG CH120 X GAMING CHAIR",
    availability: "In Stock",
    originalPrice: "86000",
    discountedPrice: "80000",
    status: "Special Offer",
    brand: "MSI ",
    type: "Gaming Chair",
    image_1:
      "https://www.nanotek.lk/storage/products/52/VVPsKi0ZFox8hjnDfxluNYnvywH9CWXqUhcM2Vch.png",
    image_2:
      "https://www.nanotek.lk/storage/products/52/VVPsKi0ZFox8hjnDfxluNYnvywH9CWXqUhcM2Vch.png",
    image_3:
      "https://www.nanotek.lk/storage/products/52/VVPsKi0ZFox8hjnDfxluNYnvywH9CWXqUhcM2Vch.png",
    tag: "Featured",
  },

  // Best Deals
  {
    id: 7,
    name: "LENOVO YOGA 7 2-in-1 14IML9 Core Ultra 7 14th GEN",
    originalPrice: "359000",
    discountedPrice: "320000",
    availability: "Limited Stock",
    status: "Special Offer",
    brand: "LENOVO  ",
    type: "Laptop",
    image_1:
      "https://www.nanotek.lk/storage/products/791/I3PYBCJaSt4lBAyVXGyrrvR7OJ1QbMtG9pDs5yiR.png",
    image_2:
      "https://www.nanotek.lk/storage/products/791/I3PYBCJaSt4lBAyVXGyrrvR7OJ1QbMtG9pDs5yiR.png",
    image_3:
      "https://www.nanotek.lk/storage/products/791/I3PYBCJaSt4lBAyVXGyrrvR7OJ1QbMtG9pDs5yiR.png",
    tag: "Best-Deal",
  },
  {
    id: 8,
    name: "ASUS 27' VY279HGR 1920 x 1080 IPS 120Hz",
    originalPrice: "48500",
    discountedPrice: "36000",
    status: "-22%",
    brand: "ASUS  ",
    availability: "In Stock",
    type: "Monitor",
    image_1:
      "https://www.nanotek.lk/storage/products/1143/jaSPuWW0qBgEPq1Vyz6WfgcpF5uQ0eFhEbeDoVsU.png",
    image_2:
      "https://www.nanotek.lk/storage/products/1143/jaSPuWW0qBgEPq1Vyz6WfgcpF5uQ0eFhEbeDoVsU.png",
    image_3:
      "https://www.nanotek.lk/storage/products/1143/jaSPuWW0qBgEPq1Vyz6WfgcpF5uQ0eFhEbeDoVsU.png",
    tag: "Best-Deal",
  },
  {
    id: 9,
    name: " Samsung 43' DU7500 Crystal 4K UHD Smart TV",
    originalPrice: "199000",
    availability: "In Stock",
    status: "Free Shipping",
    brand: "Samsung  ",
    type: "TELEVISION",
    image_1:
      "https://www.nanotek.lk/storage/products/1196/69VRIYkgQtfA26qYnEkd2BVWXU7rhQVH5DWRpZ4z.png",
    image_2:
      "https://www.nanotek.lk/storage/products/1196/69VRIYkgQtfA26qYnEkd2BVWXU7rhQVH5DWRpZ4z.png",
    image_3:
      "https://www.nanotek.lk/storage/products/1196/69VRIYkgQtfA26qYnEkd2BVWXU7rhQVH5DWRpZ4z.png",
    tag: "Best-Deal",
  },
  {
    id: 10,
    name: "SOUNDPEATS Life Lite True Wireless Earbuds",
    originalPrice: "199000",
    availability: "In Stock",

    status: "Top Rated",
    brand: "SoundPEATS  ",
    type: "Earbuds",
    image_1:
      "https://www.nanotek.lk/storage/products/368/MqhOgFlXYIvPsHqix2D9THqeUoLfKvIL1ErYoehw.png",
    image_2:
      "https://www.nanotek.lk/storage/products/368/MqhOgFlXYIvPsHqix2D9THqeUoLfKvIL1ErYoehw.png",
    image_3:
      "https://www.nanotek.lk/storage/products/368/MqhOgFlXYIvPsHqix2D9THqeUoLfKvIL1ErYoehw.png",
    tag: "Best-Deal",
  },
  {
    id: 11,
    name: "ASUS TUF GAMING F15 FX507VI i7 13th GEN RTX 4070 8GB",
    originalPrice: "199000",
    availability: "Out of Stock",
    discountedPrice: "169000",
    status: "-15%",
    brand: "ASUS  ",
    type: "Laptop",
    image_1:
      "https://www.nanotek.lk/storage/products/696/KYFpvThr2Cqvrbn5bsJjNSXo2WsVLdDIEsxhB0nM.png",
    image_2:
      "https://www.nanotek.lk/storage/products/696/KYFpvThr2Cqvrbn5bsJjNSXo2WsVLdDIEsxhB0nM.png",
    image_3:
      "https://www.nanotek.lk/storage/products/696/KYFpvThr2Cqvrbn5bsJjNSXo2WsVLdDIEsxhB0nM.png",
    tag: "Best-Deal",
  },
  {
    id: 12,
    name: "Fantech ALTO MH91 Gaming Headset",
    originalPrice: "7500",
    availability: "In Stock",
    status: "Low Stock",
    brand: "Fantech  ",
    type: "Gaming Accessories",
    image_1:
      "https://www.nanotek.lk/storage/products/1206/PauVKA3lk7yvuwcFlYyzw1uAZpyJ3qY2recvPemq.png",
    image_2:
      "https://www.nanotek.lk/storage/products/1206/PauVKA3lk7yvuwcFlYyzw1uAZpyJ3qY2recvPemq.png",
    image_3:
      "https://www.nanotek.lk/storage/products/1206/PauVKA3lk7yvuwcFlYyzw1uAZpyJ3qY2recvPemq.png",
    tag: "Best-Deal",
  },
  {
    id: 13,
    name: "UGREEN M751 MULTI MODE WIRELESS MOUSE - 45792",
    availability: "Pre-Order",
    originalPrice: "5000",
    status: "Available Soon",
    brand: "UGREEN  ",
    type: "Mouse",
    image_1:
      "https://www.nanotek.lk/storage/products/592/riDQG7UdOwMIrOOSY9J11WD1f4jhQseOk57GIcU6.png",
    image_2:
      "https://www.nanotek.lk/storage/products/592/riDQG7UdOwMIrOOSY9J11WD1f4jhQseOk57GIcU6.png",
    image_3:
      "https://www.nanotek.lk/storage/products/592/riDQG7UdOwMIrOOSY9J11WD1f4jhQseOk57GIcU6.png",
    tag: "Best-Deal",
  },
];

export default products;
