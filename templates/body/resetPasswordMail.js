const template = (name, subject) => {
  name = name || "User";
  subject = subject || "Welcome to Paradox Tech BD";
  const recipient_name = "User";
  const verifyToken = 123456;
  const verificationLink = `${process.env.FrontendUrl}/onboarding?secret=${verifyToken}`;
  return `
        <h1 style="color: #0F6CBD;">${subject}</h1>
        <p>Dear ${recipient_name},</p>
        <p style="color: #666; margin-bottom: 20px;">
          We have accepted your password update request. To complete the verification
          process, please click the button below:
        </p>
        <a
          href="${verificationLink}"
          type="button"
          style="display: inline-block; padding: 10px 20px; font-size: 16px; text-decoration: none; background-color: #87CEEB; color: #fff; border-radius: 5px;"
        >
          Verify Account
        </a>

        <p style="color: #666;">
          If you did not create an account, please ignore this email.
        </p>
  `;
};

const resetPasswordMail = (name, subject) => {
  const body = template(name, subject);
  //   console.log(body);
  return body;
};
// resetPasswordMail();

module.exports = resetPasswordMail;
