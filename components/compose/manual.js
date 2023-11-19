const template = () => {
  return `
         <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/public/styles.css">
    <title>Nodejs Email template Tester</title>
    <link rel="shortcut icon" href="/public/icons/favicon.png" type="image/x-icon">
    <link rel="icon" href="/public/icons/favicon.png" type="image/x-icon">
  </head>
  <body class="font-sans bg-gradient-to-r from-blue-900 to-indigo-800 text-white min-h-screen flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <h2 class="text-2xl text-center text">Coming Soon!</h2>
    </div>
  </body>
  </html>
  `;
};

const manual = () => {
  const manual = template();
  // console.log(manual);
  return manual;
};
// header();
module.exports = manual;
