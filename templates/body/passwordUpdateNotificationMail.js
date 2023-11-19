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
          Your password has been updated successfully.
        </p>
        
        <p style="color: #666;">
          If you did not update your password, please reset your password.
        </p>
  `;
};

const passwordUpdateNotificationMail = (name, subject) => {
  const body = template(name, subject);
  //   console.log(body);
  return body;
};
// passwordUpdateNotificationMail();

module.exports = passwordUpdateNotificationMail;
