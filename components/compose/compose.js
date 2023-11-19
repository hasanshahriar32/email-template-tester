const template = () => {
  const Urls = [];
  Urls.push("/compose/ai?type=ai");
  Urls.push("/compose/manual?type=manual");
  Urls.push("/?type=home");
  const modifiedUrlsHtml = Urls.map((url) => {
    return `
    <a href="${url}" class="transition-transform transform hover:scale-105">
      <div class="max-w-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg overflow-hidden shadow-lg m-4">
        <div class="p-6">
          <h5 class="text-2xl mb-0">${url?.split("=")[1]?.split(".")[0]}</h5>
        </div>
      </div>
    </a>
  `;
  });
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
      ${modifiedUrlsHtml.join("")}
    </div>
  </body>
  </html>
  `;
};

const compose = () => {
  const compose = template();
  // console.log(compose);
  return compose;
};
// header();
module.exports = compose;
