const bodyCode = () => {
  return `
    <div data-state="closed" class="space-y-2">
      <div class="flex items-center justify-between space-x-4 px-4">
        <h4 class="text-sm font-semibold">Render HTML Code</h4>
      </div>
      <div class="rounded-md border border-gray-200 px-4 py-2 font-mono text-sm shadow-sm dark:border-gray-800">
        <div class="grid w-full gap-1.5">
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="html-render">Rendered HTML</label>
          <div id="html-render">
            <img src="https://generated.vusercontent.net/placeholder.svg" alt="Placeholder for rendered HTML" width="500" height="500" class="aspect-content overflow-hidden rounded-lg object-cover">
          </div>
        </div>
      </div>
    </div>
  `;
};

const handleClick = (event) => {
  event.preventDefault();
  // get the value of the textarea
  const htmlCode = document.getElementById("html-code").value;
  console.log(htmlCode);
};

const template = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nodejs Email template Tester</title>
        <link rel="shortcut icon" href="/public/icons/favicon.png" type="image/x-icon">
        <link rel="icon" href="/public/icons/favicon.png" type="image/x-icon">
        <link rel="stylesheet" type="text/css" href="../../public/styles.css">
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="font-sans bg-gradient-to-r min-h-screen flex items-center justify-center max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); font-family: 'Arial', sans-serif; line-height: 1.6; color: #333;">
        
        <main class="flex flex-col space-y-6 px-4 py-6 md:px-6 md:py-12 lg:py-16">
          <div data-state="closed" class="space-y-2">
            <div class="flex items-center justify-between space-x-4 px-4">
              <h4 class="text-sm font-semibold">Write HTML Code</h4>
            </div>
            <div class="rounded-md border border-gray-200 px-4 py-2 font-mono text-sm shadow-sm dark:border-gray-800">
              <form class="grid w-full gap-1.5">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="html-code">HTML Code</label>
                <textarea class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter your HTML code here." id="html-code" data-gramm="false" wt-ignore-input="true"></textarea>
                
                <!-- Convert HTML Button -->
                <div data-state="closed" class="space-y-2">
                  <div class="flex items-center justify-between space-x-4 px-4">
                    <h4 class="text-sm font-semibold">Convert Now</h4>
                  </div>
                  <div class="rounded-md border border-gray-200 px-4 py-2 font-mono text-sm shadow-sm dark:border-gray-800">
                    <div class="grid w-full gap-1.5">
                      <button onclick="${() =>
                        handleClick(
                          event
                        )}" class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3">
                        Convert HTML<span class="sr-only">Convert HTML</span>
                      </button>
                    </div>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
          
          <!-- Render HTML Code Section -->
          ${bodyCode()}
          
        </main>
      </body>
    </html>
  `;
};

exports.template = template;
