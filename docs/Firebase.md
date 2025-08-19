## Firebase for small storages like visitor count

1. You Own the Data - Firebase stores your visitor stats in your own Firestore database, under your Google Cloud project.
2. Security & Abuse Prevention - We can write security rules so only requests from your domain count.
3. Extensibility
   Today: just store a visitor count.
   Tomorrow:
   Track page views per project.
   Record contact form submissions.
   Store feedback / bug reports directly in the DB.
   Keep timestamps for trends over time.
   All of this can use the same Firebase instance.
4. Real-time Updates - Firebase Firestore supports live listeners. Your visitor count could update instantly while someone is on your site without a refresh.
5. Low Effort, Free Tier - Free for up to 50,000 reads/writes per day — more than enough for a personal portfolio.

Easy integration into React without needing to manage your own backend.

## Firebase project - https://console.firebase.google.com/project/sanjanaa-portfolio/overview

## Firestore - https://console.firebase.google.com/project/sanjanaa-portfolio/firestore/databases/-default-/data/~2Fportfolio~2FvisitorCount

### Command - npm install firebase

PS Security rules have been enabled for all reads and writes for my use case. However, we can make it more secure by adding auth or by using firebase cloud functions. Not required for a portfolio visitor count.

## Firebase functions

Setting up firebase functions to setup the backend and use that as the proxy to call Google cloud TTS [Google TTS requires me to add a card to my firebase :(]

### Installation

npm install -g firebase-tools
npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead

added 715 packages in 34s

82 packages are looking for funding
run `npm fund` for details

D:\GitHub\sanjanaa-portfolio>firebase --version
14.12.1

#### Login using snjoo123@gmail.com and use the existing project

D:\GitHub\sanjanaa-portfolio>firebase login
i The Firebase CLI’s MCP server feature can optionally make use of Gemini in Firebase. Learn more about Gemini in Firebase and how it uses your data: https://firebase.google.com/docs/gemini-in-firebase#how-gemini-in-firebase-uses-your-data
√ Enable Gemini in Firebase features? No

i Firebase optionally collects CLI and Emulator Suite usage and error reporting information to help improve our products. Data is collected in accordance with Google's privacy policy (https://policies.google.com/privacy) and is not used to identify you.
√ Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? Yes

i To change your preferences at any time, run `firebase logout` and `firebase login` again.

Visit this URL on this device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=234504094&redirect_uri=http%3A%2F%2Flocalhost%3A9005

Waiting for authentication...

- Success! Logged in as snjoo123@gmail.com

D:\GitHub\sanjanaa-portfolio>firebase init functions

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

D:\GitHub\sanjanaa-portfolio

√ Are you ready to proceed? Yes

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

√ Please select an option: Use an existing project
√ Select a default Firebase project for this directory: sanjanaa-portfolio (sanjanaa-portfolio)
i Using project sanjanaa-portfolio (sanjanaa-portfolio)

=== Functions Setup
Let's create a new codebase for your functions.
A directory corresponding to the codebase will be created in your project
with sample code pre-configured.

See https://firebase.google.com/docs/functions/organize-functions for
more information on organizing your functions using codebases.

Functions can be deployed with firebase deploy.

√ What language would you like to use to write Cloud Functions? TypeScript
√ Do you want to use ESLint to catch probable bugs and enforce style? Yes

- Wrote functions/package.json
- Wrote functions/.eslintrc.js
- Wrote functions/tsconfig.dev.json
- Wrote functions/tsconfig.json
- Wrote functions/src/index.ts
- Wrote functions/.gitignore
  √ Do you want to install dependencies with npm now? Yes
  npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
  npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
  npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
  npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
  npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
  npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
  npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.

added 692 packages, and audited 693 packages in 54s

162 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities

- Wrote configuration info to firebase.json
- Wrote project information to .firebaserc

- Firebase initialization complete!

#### Download packages for google TTS

Command- cd functions
npm install @google-cloud/text-to-speech
Install types - npm install --save-dev @types/node

#### Deploy firebase functions

From the root -
firebase deploy --only functions
Error: Your project sanjanaa-portfolio must be on the Blaze (pay-as-you-go) plan to complete this command. Required API cloudbuild.googleapis.com can't be enabled until the upgrade is complete. To upgrade, visit the following URL:
https://console.firebase.google.com/project/sanjanaa-portfolio/usage/details

#### Fix eslint errors

cd functions
npm run lint -- --fix
