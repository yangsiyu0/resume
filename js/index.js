var swiperRender=(function(){
    function change(example){
        var slideAry=example.slides,
        activeIndex=example.activeIndex;
        $.each(slideAry,function(index,item){
            if(index===activeIndex){
                item.id="page"+activeIndex;
            }else{
                item.id=null;
            }
        });
    }
    return{
        init:function(index){
            var mySwiper=new Swiper('.swiper-container',{
                effect:'coverflow',
                onTransitionEnd: change,
                onInit:change
            })
            index=index||0;
            mySwiper.slideTo(index);
        }
    }
})();
swiperRender.init(0);


// music
~function(){
    var music=document.getElementById('music'),
    musicAudio=document.getElementById('musicAudio');
music.addEventListener('click',function(){
    if(musicAudio.paused){//->暂停
        musicAudio.play();
        music.className='music move';
        return;
    }
    musicAudio.pause();
    music.className='music';
},false);

function controlMusic(){
    musicAudio.play();
    musicAudio.addEventListener('canplay',function(){
        music.style.display='block';
        music.className='music move';

    },false);
}
window.setTimeout(controlMusic,1000);
}();