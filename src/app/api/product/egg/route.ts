import { IEggProduct } from "@/shared/types";

export async function GET() {
  try{
    const eggProduct: IEggProduct[] = [
      {
        id: "egg-001",
        name: "Gheni Egg",
        description: "Telur naga api wyvern. Siap menetas dalam 7 hari.",
        imageUrl: "/images/gheni-egg.png",
        category: "egg",
        price: 150000,
        stock: 12,
        species: "dragon",
      },
      {
        id: "egg-002",
        name: "Atis Egg",
        description: "Telur naga dingin yang tenang dan elegan.",
        imageUrl: "/images/atis-egg.png",
        category: "egg",
        price: 120000,
        stock: 20,
        species: "dragon",
      },
      {
        id: "egg-003",
        name: "Pitikrider Egg",
        description: "Telur ayam yang bisa ditunggangi saat dewasa.",
        imageUrl: "/images/pitikrider-egg.png",
        category: "egg",
        price: 75000,
        stock: 30,
        species: "mount-cukurukuk",
      },
      {
        id: "egg-004",
        name: "Naga Kate Egg",
        description: "Telur naga mungil lucu seprti kucing",
        imageUrl: "/images/kate-egg.png",
        category: "egg",
        price: 135000,
        stock: 10,
        species: "dragon",
      },
      {
        id: "egg-005",
        name: "Abang Jago",
        description:
          "Telur ayam mount versi edisi khusus dengan bulu merah menyala.",
        imageUrl: "/images/jago-egg.png",
        category: "egg",
        price: 90000,
        stock: 18,
        species: "mount-cukurukuk",
      },
    ];

    return new Response(JSON.stringify({ message: 'GET request successful', data: eggProduct }), {
      status: 200,
    });
  }catch{
    return new Response(JSON.stringify({ error: 'Failed to handle GET request' }), {
      status: 500,
    });
  }
}
