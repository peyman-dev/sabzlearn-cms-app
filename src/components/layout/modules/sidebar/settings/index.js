import { HiOutlineChatBubbleLeftRight, HiOutlineHome, HiOutlineShoppingCart, HiOutlineUsers } from "react-icons/hi2";

export const menus = [
    {
        id: crypto.randomUUID(),
        title: "منو اصلی",
        items: [
            {
                id: crypto.randomUUID(),
                href: "/",
                title: "داشبورد",
                Icon: HiOutlineHome,
            },
            {
                id: crypto.randomUUID(),
                href: "/products",
                title: "محصولات",
                Icon: HiOutlineShoppingCart,
            },
            {
                id: crypto.randomUUID(),
                href: "/users",
                title: "کابران",
                Icon: HiOutlineUsers,
            },
            {
                id: crypto.randomUUID(),
                href: "/tickets",
                title: "تیکت ها",
                Icon: HiOutlineChatBubbleLeftRight,
            },
        ]
    }
]