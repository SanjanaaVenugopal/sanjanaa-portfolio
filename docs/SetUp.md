1. Create a react App - https://create-react-app.dev/docs/getting-started
   Prereq - Node - v22.17.1
   npm & npx - v10.9.2

   Command - npx create-react-app sanjanaa-portfolio --template typescript

   npm start
   Starts the development server.

   npm run build
   Bundles the app into static files for production.

   npm test
   Starts the test runner.

   npm run eject
   Removes this tool and copies build dependencies, configuration files
   and scripts into the app directory. If you do this, you can’t go back!

2. Tailwind
   Install tailwind - npm install -D tailwindcss@^3.4.1 postcss autoprefixer
   [v4 did now work]
   Generate postcss.config.js and tailwind.config.js - npx tailwindcss init -p
   Import tailwind.config.js in index.css
   Use the gradients in components

3. Lucide react --- for some icons
   npm install lucide-react -- https://lucide.dev/guide/

4.Chakra UI
https://chakra-ui.com/docs/get-started/installation
Chakra v3 did not work, force installed v2
npm uninstall @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion

5. WEb speech API - https://webaudio.github.io/web-speech-api/#dom-speechsynthesisutterance-lang

6. EmailJS
   Service - https://dashboard.emailjs.com/admin
   Template - https://dashboard.emailjs.com/admin/templates/w8kfd5n
   Install - npm install emailjs-com
