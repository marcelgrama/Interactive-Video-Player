$('video').mediaelementplayer({
    features: ['playpause', 'current', 'progress', 'volume', 'fullscreen'],
    
});

const video = document.querySelector('video');
const spans = document.querySelectorAll('.transcript span');


video.addEventListener('timeupdate', function(){

const cTime = video.getCurrentTime();

for(let i=0 ; i< spans.length ; i+=1){
	const span = spans[i];
	const start = parseFloat(span.dataset.start);
	const end = parseFloat(span.dataset.end);
	if(cTime>start && cTime<end){
		span.classList.add("highlight");
	}
	else{
		span.classList.remove("highlight");
	}
}

});


for(let i=0 ; i< spans.length ; i+=1){
	const span = spans[i];
	const start = parseFloat(span.dataset.start);
	const end = parseFloat(span.dataset.end);
span.addEventListener('click', function() {

if(span){
 video.setCurrentTime(start);
 video.play();
}

});

}