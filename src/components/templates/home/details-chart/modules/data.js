export const generateChartData = ({
    productsLength,
    usersLength,
    ticketsLength,
    adminsLength
}) => [
  {
    name: "تعداد محصولات",
    value: productsLength,
  },
  {
    name: "تعداد کاربران",
    value: usersLength,
  },
  {
    name: "تعداد تیکت‌ها",
    value: ticketsLength,
  },
  {
    name: "تعداد مدیران",
    value: adminsLength,
  },
];
