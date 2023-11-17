const template = () => {
  return `
        <div>
        <hr></hr>
        <u style="color: #3498db;">Bangladeshi Software Provide Innovative Software Solutions</u>
        <p>Explore our services and learn more about what Bangladeshi Software can offer:</p>
        <ul>
            <li><a href="https://www.bangladeshisoftware.com" target="_blank" style="color: #3498db; text-decoration: none;">Visit our website</a></li>
            <li>Contact Information:
                <ul>
                    <li>Email: admin@bangladeshisoftware.com</li>
                    <li>Phone: <a href="https://api.whatsapp.com/send?phone=+8801719182586&text=Hi,%20is%20anyone%20available%20here?">+8801719182586</a></li>
                </ul>
            </li>
        </ul>
        <p>Feel free to reach out if you have any questions or if there's anything else we can assist you with.</p>
        <p style="margin-bottom: 0;">Best regards,<br>
            The Bangladeshi Software Team.</p>  
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
