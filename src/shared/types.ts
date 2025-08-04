
export type LinkItem = {
    label: string;
    href: string;
}




// Products commerce

// Base type 
type Species = "dragon" | "mount-cukurukuk";
type Category = "egg" | "mount" | "accessory"

// Base Product
export interface IBaseProduct {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    category: Category;
    price: number;
    stock: number;
    tags?: string[]
}

// Egg Product
export interface IEggProduct extends IBaseProduct {
    category: "egg";
    species: Species;
}

// Mount Product
export interface IMountProduct extends IBaseProduct {
    category: "mount";
    mountType: "krucukrider" | "drupilot";
    rideable: boolean;
    speed: number;
    age: number;
}

export interface IAccessoryProduct extends IBaseProduct {
  category: "accessory";
  compatibleWith: Species[];
  effect: string;
}


// Interface Cart

export interface ICartItem {
    prodId: string;
    quantity: number;
    selectedVariant?: string;
}

export interface Icart {
    userId: string;
    items: ICartItem[];
    totalPrice: number;
}

export interface IWhishList {
    userId: string;
    prodIds: string[];
}

// PROMO
type PromoType = "fixed" | "percentage";

export interface IPromo {
    id: string;
    code: string;
    description: string;
    promoType: PromoType;
    value: number; // percentage 20 or fixed price cth: 15000
    minimumPurchase?: number;
    applicableCategories?: Category[];
    isActive: boolean;
    expiredDate: string;
}


// CHECKOUT
// Contact Info

export interface IShippingInfo {
    recipientName: string;
    address: string;
    city: string;
    phone: number;
    postalCode: string;
    note?: string;
}

type PaymentMethod = "bank_transfer" | "QRIS" | "cod"

export interface IPaymentInfo {
    transactionId: string;
    method: PaymentMethod;
    isPaid: boolean;
    paidAt?: string;
}

export interface IApliedPromo {
    promoId: string;
    discountAmount: number;

}

export interface IOrderItem {
    prodId: string;
    name: string;
    quantity: number;
    unitprice: number;
    subtotal: number;
}

export interface ICheckout {
    orderId: string;
    userId: string;
    items: IOrderItem[];
    shipping: IShippingInfo;
    payment: IPaymentInfo;
    promo?: IApliedPromo;
    totalBeforeDiscount: number;
    totalAfterDiscount:number;
    shippingFee: number;
    totalPrice: number;
    status: "pending" | "paid" | "shipped" | "completed";
    createdAt: string;
}