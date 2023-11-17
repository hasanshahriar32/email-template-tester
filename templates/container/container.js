const template = (body) => {
  const header = require("../header/header");
  const footer = require("../footer/footer");
  return `
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); font-family: 'Arial', sans-serif; line-height: 1.6; color: #333;">
            ${header()}
            ${body()}	
            ${footer()}
        
        </div>
  `;
};

const container = (fileName) => {
  const body = require(`../body/${fileName}`);
  const emailContainer = template(body);
  // console.log(emailContainer);
  return emailContainer;
};
// container();
module.exports = container;