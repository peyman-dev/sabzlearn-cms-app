const STATIC_PRODUCT_IMG = "/images/product-img.png";

// جهت پاکیزگی کد - توضیحات در اینجا درج شده تا سورس کد خوانایی بهتری داشته باشد !
const STATIC_DESCRIPTION = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و`;

const tickets = Array.from({ length: 20 }, (_, index) => {
  const randomNames = ["علی", "رضا", "محمد", "زهرا", "سارا", "امیر"];
  const randomLastName = ["محمدی", "احمدی", "حسینی", "رضایی", "مرادی", "جلالی"];
  const randomName =
    randomNames[Math.floor(Math.random() * randomNames.length)];
  const randomFamily =
    randomLastName[Math.floor(Math.random() * randomLastName.length)];

  return {
    id: index + 1,
    fullName: `${randomName} ${randomFamily}`,
    title: `درخواست پشتیبانی ${crypto.randomUUID().slice(0, 6)}`,
    messages: [STATIC_DESCRIPTION],
    date: new Date().toLocaleDateString("fa-IR"),
    isAnswered: false,
  };
});

export const usersArray = Array.from({ length: 50 }, (_, index) => {
  const randomNames = ["علی", "رضا", "محمد", "زهرا", "سارا", "امیر"];
  const randomLastName = ["محمدی", "احمدی", "حسینی", "رضایی", "مرادی", "جلالی"];
  const randomName =
    randomNames[Math.floor(Math.random() * randomNames.length)];
  const randomFamily =
    randomLastName[Math.floor(Math.random() * randomLastName.length)];
  const randomEmail = `${randomName}.${randomFamily}@example.com`;

  const roles = ["admin", "support", "customer"];
  const randomRole = roles[Math.floor(Math.random() * roles.length)];

  return {
    id: crypto.randomUUID(),
    userName: `${randomName}${index + 1}`,
    fullName: `${randomName} ${randomFamily}`,
    phoneNumber: `0912${Math.floor(Math.random() * 90000000) + 10000000}`,
    email: randomEmail,
    role: randomRole,
  };
});

export { STATIC_PRODUCT_IMG, STATIC_DESCRIPTION, tickets };
