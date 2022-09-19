let songIndex=0;
let audioElement= new Audio('SleepAway.mp3');
let masterplay= document.getElementById('masterplay');
let ProgBar= document.getElementById('progressbar');
let gifvid= document.getElementById('gif');
let sip= document.getElementsByClassName('sip');
let msn= document.getElementById('masterSong');
let songTime= document.getElementById('currTime');
let songs=[
    {songname: "Sleep Away" ,filePath:"SleepAway.mp3", coverPath: "sleepaway.png"},
    {songname: "Indian Flute" ,filePath:"Indian-Flute-Bansuri.mp3", coverPath: "sleepaway.png"},
    {songname: "Sleep Away" ,filePath:"SleepAway.mp3", coverPath: "sleepaway.png"},
    {songname: "Sleep Away" ,filePath:"SleepAway.mp3", coverPath: "sleepaway.png"},
    {songname: "Sleep Away" ,filePath:"SleepAway.mp3", coverPath: "sleepaway.png"}
]

//listen to events
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gifvid.style.opacity= 1;
        
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gifvid.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress= parseFloat((audioElement.currentTime/audioElement.duration)*100.0);
    ProgBar.value= progress;
    songTime.innerText= parseInt(audioElement.currentTime/60)+":"+parseInt(audioElement.currentTime%60)+"/"+ parseInt(audioElement.duration/60)+":"+ parseInt(audioElement.duration%60);
})
ProgBar.addEventListener('change',()=>{
    audioElement.currentTime = (ProgBar.value*audioElement.duration)/100;
})

const makeAllPlays= () =>{
    Array.from(sip).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(sip).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= songs[songIndex].filePath;
        msn.innerText= songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    songIndex=(songIndex-1)%5;
    audioElement.src= songs[songIndex].filePath;
    msn.innerText= songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})
document.getElementById('next').addEventListener('click',()=>{
    songIndex=(songIndex+1)%5;
    audioElement.src= songs[songIndex].filePath;
    msn.innerText= songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
})
document.getElementById('fastback').addEventListener('click',()=>{
    audioElement.currentTime-=10;
})
document.getElementById('fastfor').addEventListener('click',()=>{
    audioElement.currentTime+=10;
})