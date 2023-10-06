let songIndex=0;
let audioElement=new Audio('audio/awara.mpeg');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let songitems= Array.from(document.getElementsByClassName("songitem"))
let songs=[
    {songName:"Awara", filePath:"audio/awara.mpeg",coverPath:"images/awara.jpeg"},
    {songName:"Baatein yeh kabhi na", filePath:"audio/bykn.mpeg",coverPath:"images/bykn.jpeg"},
    {songName:"Naam Dil Rakh Diya", filePath:"audio/naam.mpeg",coverPath:"images/dil.jpeg"},
    {songName:"Kabhi Tumhe Yaad", filePath:"audio/kty.mpeg",coverPath:"images/kty.jpeg"},
    {songName:"Jiya Dhadhak jaaye", filePath:"audio/jiya.mpeg",coverPath:"images/jdj.jpeg"},
    {songName:"Teri Khusboo Aur Teri Saasein", filePath:"audio/tktb.mpeg",coverPath:"images/tkts.jpeg"},
    {songName:"Tu mujhe Soach Kabhi", filePath:"audio/tmsk.mpeg",coverPath:"images/tmsk.jpeg"},
    
]
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
 })
 
//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
   
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
   audioElement.currentTime=myprogressbar.value*audioElement.duration/100;

})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e) => {
       //console.log(e.target);
       makeAllPlays();
       index = parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src=`audio/${index}.mpeg`;
       //masterSongName.innerText=songs[songIndex-1].songName
      audioElement.currentTime = 0;
       audioElement.play();
        //masterPlay.classList.remove('fa-play-circle');
       //masterPlay.classList.add('fa-pause-circle');
      })
   })