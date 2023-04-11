console.log("welcome to spotify")


let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');

let songs=[
{songName:"WARRIYO",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
{songName:"CEILO",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
{songName:"DIFFERENT HEAVEN",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
{songName:"HEROS",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
{songName:"RABBA",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
{songName:"SAKHIYAAN",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},]



//audioElement.play();

//handle play/pause button
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else
    {
        audioElement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})



//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value=progress;

})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})