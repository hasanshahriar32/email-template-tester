const template = (req, templateName) => {
  return `
         <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); font-family: 'Arial', sans-serif; line-height: 1.6; color: #333;">
        <div class="max-w-600 mx-auto font-sans text-base leading-6 text-gray-700">

    <div class="flex justify-between items-center mb-8">

        <form action="/template/send?type=${templateName}" method="POST">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-600">Name:</label>
                <input type="text" id="name" name="name" placeholder="Recipient name" class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300">
            </div>

            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-600">Email:</label>
                <input type="email" id="email" name="email" placeholder="Recipient email address" class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300">
            </div>

            <div class="mb-4">
                <label for="subject" class="block text-sm font-medium text-gray-600">Subject:</label>
                <input type="text" id="subject" name="subject" placeholder="Email subject here" class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300">
            </div>

            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Send</button>
        </form>

        <div>
            <a href="/" class="text-blue-500 hover:underline mr-4">Home</a>
            <a href="/compose" class="text-blue-500 hover:underline">Compose</a>
        </div>

    </div>

</div>

        </div>
  `;
};

const navigationBar = (req, templateName) => {
  const navigationBar = template(req, templateName);
  // console.log(navigationBar);
  return navigationBar;
};
// header();
module.exports = navigationBar;
