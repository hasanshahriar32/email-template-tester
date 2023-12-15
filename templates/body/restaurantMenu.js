const template = (name, subject) => {
  name = name || "User";
  subject = subject || "Welcome to Paradox Tech BD";
  const recipient_name = "User";
  const verifyToken = 123456;
  const verificationLink = `${process.env.FrontendUrl}/onboarding?secret=${verifyToken}`;
  return `

<main class="p-6 bg-gray-100 space-y-8"><div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"><div class="flex flex-col space-y-1.5 p-6"><h3 class="tracking-tight text-center text-xl font-semibold">Welcome to Our Restaurant</h3><p class="text-muted-foreground text-center text-sm">Discover the taste of quality</p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Main Courses</h3></div><div class="p-6"><p class="text-sm">
      Classic Beef Burger with Fries - $10
    </p><p class="text-sm">
      Margherita Pizza - $9
    </p><p class="text-sm">
      Grilled Salmon - $15
    </p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Desserts</h3></div><div class="p-6"><p class="text-sm">
      Chocolate Brownie - $5
    </p><p class="text-sm">
      Vanilla Ice Cream - $4
    </p><p class="text-sm">
      Fruit Salad - $6
    </p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Drinks</h3></div><div class="p-6"><p class="text-sm">
      House Wine (Red / White) - $7
    </p><p class="text-sm">
      Local Beer - $5
    </p><p class="text-sm">
      Soft Drinks - $3
    </p></div></div><div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"><div class="flex flex-col space-y-1.5 p-6"><h3 class="text-2xl font-semibold leading-none tracking-tight">Contact Us</h3></div><div class="p-6 space-y-2"><p class="text-sm">
      For reservations, please call us at:
    </p><a class="text-blue-500 underline" href="#">
      +1 234 567 890
    </a><p class="text-sm">
      or email us at:
    </p><a class="text-blue-500 underline" href="#">
      contact@restaurant.com
    </a></div></div><div class="flex justify-center"><button class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">Book Now</button></div></main>
  `;
};

const restaurantMenu = (name, subject) => {
  const body = template(name, subject);
  //   console.log(body);
  return body;
};
// restaurantMenu();

module.exports = restaurantMenu;
