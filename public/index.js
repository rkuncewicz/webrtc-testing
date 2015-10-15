var recordRTC;
var recordVideo, recordAudio;
var videoPreview = document.getElementById('video-preview');

var isFirefox = !!navigator.mozGetUserMedia;
var videoFile = isFirefox ? 'video.gif' : 'video.webm';

document.querySelector('#start-recording').onclick = function() {
	this.disabled = true;
	navigator.getUserMedia({
		audio: true,
		video: true
	}, function(stream) {
		videoPreview.src = window.URL.createObjectURL(stream);
		videoPreview.play();

		/*recordAudio = RecordRTC(stream, {
			type: isFirefox ? 'video' : 'audio',
			recorderType: isFirefox ? null : StereoAudioRecorder // force WebAudio for all browsers even for Firefox/MS-Edge
		});*/

		recordVideo = RecordRTC(stream, {
			type: videoFile.indexOf('gif') == -1 ? 'video' : 'gif'
		});

		if (isFirefox) {
            //recordAudio.startRecording();
            return;
        }

        recordVideo.initRecorder(function() {
            //recordAudio.initRecorder(function() {
                recordVideo.startRecording();
                //recordAudio.startRecording();
            //});
        });
	}, function(error) { throw error;} );
};

document.querySelector('#stop-recording').onclick = function() {
	this.disabled = true;
	recordVideo.stopRecording(function(url, type) {
		document.querySelector('#replay-video').src = url;
        document.querySelector('#replay-video').play();
        console.log(url);
	})
	//recordAudio.stopRecording(function() {
	//	console.log("stopped"); 
	//});
};