import { IMountProduct } from "@/shared/types";
// import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  try {
    const mountProduct: IMountProduct[] = [
      {
        id: "mount-001",
        name: "Chickirider Blaze",
        description: "Ayam tunggangan dengan aksen api, cepat dan garang.",
        imageUrl: "/images/chickirider-blaze.png",
        category: "mount",
        price: 200000,
        stock: 5,
        mountType: "krucukrider",
        rideable: true,
        speed: 35,
        age: 10,
      },
      {
        id: "mount-002",
        name: "Chickirider Snow",
        description: "Ayam tunggangan berbulu putih dan stamina tinggi.",
        imageUrl: "/images/chickirider-snow.png",
        category: "mount",
        price: 180000,
        stock: 8,
        mountType: "krucukrider",
        rideable: true,
        speed: 28,
        age: 15,
      },
      {
        id: "mount-003",
        name: "Chickirider Retro",
        description: "Tunggangan ayam bergaya klasik, cocok untuk parade.",
        imageUrl: "/images/chickirider-retro.png",
        category: "mount",
        price: 160000,
        stock: 10,
        mountType: "krucukrider",
        rideable: true,
        speed: 25,
        age: 10,
      },
      {
        id: "mount-004",
        name: "Chickirider Swift",
        description:
          "Ayam mount ringan dan sangat cepat, kurang cocok untuk jarak jauh.",
        imageUrl: "/images/chickirider-swift.png",
        category: "mount",
        price: 195000,
        stock: 4,
        mountType: "krucukrider",
        rideable: true,
        speed: 42,
        age: 10,
      },
      {
        id: "mount-005",
        name: "Chickirider Luxe",
        description: "Tunggangan ayam edisi mewah dengan aksesori bawaan.",
        imageUrl: "/images/chickirider-luxe.png",
        category: "mount",
        price: 250000,
        stock: 3,
        mountType: "krucukrider",
        rideable: true,
        speed: 32,
        age: 9,
      },
    ];

    return new Response(
      JSON.stringify({ message: "GET request successful", data: mountProduct }),
      {
        status: 200,
      }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: "Failed to handle GET request" }),
      {
        status: 500,
      }
    );
  }
}
