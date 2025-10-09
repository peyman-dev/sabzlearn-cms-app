import { BiShoppingBag } from "react-icons/bi";
import { HiDocumentText, HiUsers } from "react-icons/hi2";

export const generateSummaries = ({
  productsLength,
  usersLength,
  ticketsLength,
  adminsLength,
}) => [
  {
    id: crypto.randomUUID(),
    title: "تعداد محصولات",
    value: productsLength,
    Icon: BiShoppingBag,
  },
  {
    id: crypto.randomUUID(),
    title: "تعداد کاربران",
    value: usersLength,
    Icon: HiUsers,
  },
  {
    id: crypto.randomUUID(),
    title: "تعداد تیکت‌ها",
    value: ticketsLength,
    Icon: HiDocumentText,
  },
  {
    id: crypto.randomUUID(),
    title: "تعداد مدیران",
    value: productsLength,
    Icon: BiShoppingBag,
  },
];
