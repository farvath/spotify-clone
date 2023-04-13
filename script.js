console.log("welcome to spotify")


let songIndex=0;
let audioElement=new Audio('songs/5.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
{songName:"WARRIYO",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
{songName:"CEILO",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
{songName:"DIFFERENT HEAVEN",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
{songName:"HEROS",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
{songName:"RABBA",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
{songName:"SAKHIYAAN",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},]



songitem.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;

})

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
    //console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value=progress;

})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})

const makeallplays=()=>{

    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
       element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })


}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        gif.style.opacity=1;
        
        makeallplays();
        
        songIndex=parseInt(e.target.id);
        
        mastersongname.innerText=songs[songIndex].songName;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src='songs/${songIndex+1}.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })

})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>5){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    mastersongname.innerText=songs[songIndex].songName;
    gif.style.opacity=1;
    audioElement.src='songs/${songIndex+1}.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    gif.style.opacity=1;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.src='songs/${songIndex+1}.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})