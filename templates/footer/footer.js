const template = () => {
  return `
       <div class="">
    <hr class="border-t-2 border-blue-500 mb-6">
    <u class="text-2xl font-bold text-blue-500 mb-4 block">Paradox Tech BD Provides Innovative Software Solutions</u>
    <p class="text-gray-700 mb-4">Explore our services and learn more about what Paradox Tech BD can offer:</p>
    <ul class="list-disc ml-6 mb-6">
        <li><a href="https://paradox-bd.com" target="_blank" class="text-blue-500 hover:underline transition">Visit our website</a></li>
        <li class="mt-2">Contact Information:
            <ul class="list-disc ml-6">
                <li>Email: <a href="mailto:paradoxtechbd@outlook.com" class="text-blue-500 hover:underline transition">paradoxtechbd@outlook.com</a></li>
                <li>Phone: <a href="https://t.me/mrxx32" class="text-blue-500 hover:underline transition">+8801XXXXXXXXX</a></li>
            </ul>
        </li>
    </ul>
    <p class="text-gray-700 mb-4">Feel free to reach out if you have any questions or if there's anything else we can assist you with.</p>
    <p class="mb-0 text-gray-600">Best regards,<br>
        The Paradox BD Team.</p>
</div>

  `;
};

const footer = () => {
  const emailFooter = template();
  // console.log(emailFooter);
  return emailFooter;
};
// footer();
module.exports = footer;
