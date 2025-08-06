import { IAccessoryProduct } from "@/shared/types";
// import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  try{
    const accessoryProduct: IAccessoryProduct[] = [
      {
        id: "acc-001",
        name: "Dragon Pendant",
        description: "Kalung ajaib untuk naga, meningkatkan fire resistance.",
        imageUrl: "/images/dragon-pendant.png",
        category: "accessory",
        price: 50000,
        stock: 25,
        compatibleWith: ["dragon"],
        effect: "boost fire resistance",
      },
      {
        id: "acc-002",
        name: "Chicki Goggles",
        description:
          "Kacamata lucu untuk Chickirider, tambah gaya + ketahanan debu.",
        imageUrl: "/images/chicki-goggles.png",
        category: "accessory",
        price: 40000,
        stock: 30,
        compatibleWith: ["mount-cukurukuk"],
        effect: "increase stamina in dusty areas",
      },
      {
        id: "acc-003",
        name: "Tail Ribbon",
        description:
          "Pita ekor yang bisa dipakai semua hewan, menaikkan 'cuteness'.",
        imageUrl: "/images/tail-ribbon.png",
        category: "accessory",
        price: 35000,
        stock: 50,
        compatibleWith: ["dragon", "mount-cukurukuk"],
        effect: "increase cuteness",
      },
      {
        id: "acc-004",
        name: "Saddle Boost",
        description:
          "Sadel khusus untuk Chickirider agar lebih nyaman ditunggangi.",
        imageUrl: "/images/saddle-boost.png",
        category: "accessory",
        price: 55000,
        stock: 15,
        compatibleWith: ["mount-cukurukuk"],
        effect: "enhance ride comfort",
      },
      {
        id: "acc-005",
        name: "Wing Enhancer",
        description: "Aksesori untuk naga agar bisa terbang lebih jauh.",
        imageUrl: "/images/wing-enhancer.png",
        category: "accessory",
        price: 65000,
        stock: 10,
        compatibleWith: ["dragon"],
        effect: "boost flying range",
      },
    ];

    return new Response(JSON.stringify({ message: 'GET request successful', data: accessoryProduct }), {
      status: 200,
    });
  } catch {
     return new Response(JSON.stringify({ error: 'Failed to handle GET request' }), {
      status: 500,
    });
  }
}
