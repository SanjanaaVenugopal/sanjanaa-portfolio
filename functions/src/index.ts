/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions";

import textToSpeech, {protos} from "@google-cloud/text-to-speech";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

setGlobalOptions({maxInstances: 10});

admin.initializeApp();

const client = new textToSpeech.TextToSpeechClient();

export const sayHi = functions.https.onRequest(async (req, res) => {
  const request:
protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest =
    {
      input: {text: "Hi, I'm Sanjanaa"},
      voice: {
        languageCode: "en-US",
        ssmlGender:
protos.google.cloud.texttospeech.v1.SsmlVoiceGender.FEMALE,
      },
      audioConfig: {audioEncoding: "MP3"},
    };

  const [response] = await client.synthesizeSpeech(request);

  res.set("Content-Type", "audio/mpeg");
  res.send(response.audioContent);
});
