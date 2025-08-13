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
