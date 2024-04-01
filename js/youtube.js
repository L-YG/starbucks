 // 1. This code loads the IFrame Player API code asynchronously.
 let tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 2. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.

 function onYouTubeIframeAPIReady () {
  //  player 요소 선택
   new YT.Player('player', {
     height: '360',
     width: '640',
     videoId: 'EJF919p_hb0', //최초 재생할 유튜브 ID 입력
     playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생자
      playlist: 'EJF919p_hb0', //반복 재생할 유튜브 영상 ID 목록
     },
     events: {
      onReady: function(event){
        event.target.mute() // 음소거
      }
     },
   });
 }