<h5>Use example</h5>

       var DiarizationModule = require('diarization_client');
       var btoa = require('btoa');
       const util = require('util');
       var session = new DiarizationModule.SessionApi();
       var auth = new DiarizationModule.AuthRequestDto("user", 261, "password");
       var diarizationCallback = function(error, data, response) {
           if (error) {
               console.error(error);
           } else {
               console.log('API called successfully');
               console.log(util.inspect(data.speakers, false, null, true));
           }
       };
       var startSessionCallback = function(error, data, response) {
           if (error) {
               console.error(error);
           } else {
               console.log('API called successfully. Returned data: ' + data.session_id);
               var sessionId = data.session_id;
               var diarizationApi = new DiarizationModule.DiarizationApi();
               var fs = require('fs'),
                   path = require('path'),
                   filePath = path.join('test.wav');
               var contents = fs.readFileSync(filePath, 'utf8');
               var base64 = btoa(contents);
               var diarizationAudio = new DiarizationModule.AudioDto(base64);
               diarizationApi.diarization(sessionId, diarizationAudio, diarizationCallback);
           }
       };
       session.login(auth, startSessionCallback);
