# stc-speechkit-node.js
Local development
To use the library locally, install the dependencies by changing into the directory containing package.json. For example CLOUD_CLIENT. Then run:
<h5>npm install</h5>

Next, link it globally in npm with the following, also from CLOUD_CLIENT:
<h5>npm link</h5>

Finally, switch to the directory you want to use the API client from, and run:
<h5>npm link \path\to\CLOUD_CLIENT_DIR</h5>

You should now be able to require('diarization_client'), require('tts_client'), require('asr_client') in javascript files from the directory you ran the last command above from.
