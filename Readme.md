## Project setup guide

- Step 1: Star this repo 🌟 and follow me 👨‍💻
- Step 2: Fork this repo and clone it to your local machine.
- Step 3: Open the project in your favourite code editor and install all the dependencies by running the command `npm install` or `yarn install`.
- Step 4: Create a file `.env.local` in the root directory of the project. This file should contain the following environment variables.
  - `PORT` - Port number on which the server will run.
  - `EMAIL_TITLE` - Title of the email.
  - `EMAIL_FROM` - Email address from which the email will be sent.
  - `EMAIL_PASSWORD` - Password of the email address from which the email will be sent.
  - `EMAIL_HOST` - Host from which the email will be sent.
  - `EMAIL_PORT` - Port of the host from which the email will be sent.
  - `EMAIL_SECURE` - Whether the host from which the email will be sent is SSl/TLS secured or not.
    - Example:
      ```
      PORT=5000
      EMAIL_TITLE= "Paradox BD Team"
      EMAIL_FROM= "yourmail@outlook.com"
      EMAIL_PASSWORD= "yourpassword"
      EMAIL_HOST=smtp-mail.outlook.com
      EMAIL_PORT=587
      EMAIL_SECURE=false
      ```
    - Note: If you are using gmail, then you have to allow less secure apps to access your account. You can do that by going to [https://myaccount.google.com/lesssecureapps](https://myaccount.google.com/lesssecureapps) and turning on the option.
- Step 5: Run the command `npm run dev` or `yarn dev` to start the server.
- Step 6: Open your browser and go to `http://localhost:5000/` to see the server running.
- Step 7: Start working from the `templates` folder. Happy Hacking! 🎉🎉
