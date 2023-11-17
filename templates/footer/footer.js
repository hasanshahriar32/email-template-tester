const template = () => {
  return `
        <div>
        <hr></hr>
        <u style="color: #3498db;">Paradox Tech BD Provide Innovative Software Solutions</u>
        <p>Explore our services and learn more about what Paradox Tech BD can offer:</p>
        <ul>
            <li><a href="https://paradox-bd.com" target="_blank" style="color: #3498db; text-decoration: none;">Visit our website</a></li>
            <li>Contact Information:
                <ul>
                    <li>Email: <a href="mailto:paradoxtechbd@outlook.com">paradoxtechbd@outlook.com</a></li>
                    <li>Phone: <a href="https://t.me/mrxx32">+8801XXXXXXXXX</a></li>
                </ul>
            </li>
        </ul>
        <p>Feel free to reach out if you have any questions or if there's anything else we can assist you with.</p>
        <p style="margin-bottom: 0;">Best regards,<br>
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
