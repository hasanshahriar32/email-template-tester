const template = (name, subject) => {
  subject = subject || "Welcome to Paradox Tech BD";
  const recipient_name = name || "User";
  return `
        <h1 style="color: #0F6CBD;">${subject}</h1>
        <p>Dear ${recipient_name},</p>
        <p>We are delighted to have you as a part of Paradox Tech BD. Our team is dedicated to providing high-quality software solutions tailored to meet your needs.</p>
  `;
};

const welcomeMail = (name, subject) => {
  const body = template(name, subject);
  //   console.log(body);
  return body;
};
// welcomeMail();

module.exports = welcomeMail;
