const template = (templateName) => {
  return `
         <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); font-family: 'Arial', sans-serif; line-height: 1.6; color: #333;">
        


        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">

        
        <form action="/template/send?type=${templateName}" method="POST">
        <label for="name">Name: </label>
        <input type="text" id="name" name="name" placeholder="Recipient name ">
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="Recipient email address.. ">
        <br></br>
        <label for="subject">Subject: </label>
        <input type="text" id="subject" name="subject" placeholder="Email subject here: ">
        <br></br>
        
        <button type="submit">Send</button>
        </form>


        <a href="/">Back to home</a>

        </div>
 
        </div>
  `;
};

const navigationBar = (templateName) => {
  const navigationBar = template(templateName);
  // console.log(navigationBar);
  return navigationBar;
};
// header();
module.exports = navigationBar;
