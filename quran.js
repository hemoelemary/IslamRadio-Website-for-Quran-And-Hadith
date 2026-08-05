$(document).ready(()=>{
    var sound = null;
    $.get('https://www.mp3quran.net/api/v3/radios?language=ar',function(data){
    const radios = data['radios']
    for(let i =0;i<176;i++){
        $('.readers').append(`
            <div class="card shadow-lg" style="width: 300px;height: 15rem;">
                    <div class="card-img-top" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77GsefcF0MTOm9bNVCtr8xlP7J3AqBb5Qd2K35IyKLA&s=10');"></div>
                    <div class="card-body">
                        <div class="card-title fs-4 text-success text-center">${radios[i]['name']}</div>
                        <div class="card-text">
                            <div class="d-flex justify-content-center">
                            <button class="btn btn-success listen" listen='${radios[i]['url']}' sh='${radios[i]['name']}' >استمع</button>
                            </div>
                        </div>
                    </div>
                </div>
            `)
    }
});
$(document).on('click','.listen',function(){
    if(sound){
        sound.pause();
        $('.play').text('استمع');

    }
    let api = $(this).attr('listen');
    sound = new Audio(api)
    if(sound){
    sound.play()
    $('.control').addClass('bi-pause')
    $('.control').removeClass('bi-play-fill')
    let name = $(this).attr('sh')
    $('.sheikh').text(name)

    $(this).toggleClass('play listen')
    .text('جاري الاستماع')
}
$(document).on('click','.play',()=>{
        sound.pause()
        $('.control').toggleClass('bi-play-fill bi-pause');
        $('.control').removeClass('bi-pause')
        $('.control').addClass('bi-play-fill')
        $('.play').toggleClass('play listen')
        .text('استمع')


})
    
})
$(document).on('click','.bi-pause',function(){
    sound.pause();
    sound.currentTime=0;
    $('.control').toggleClass('bi-play-fill bi-pause')
    $('.play').text('استمع')
})

$(document).on('click','.bi-play-fill',function(){

    if(sound){
        sound.play();
        $('.control').toggleClass('bi-play-fill bi-pause')

    }
})

const src = {
    1:'https://i.ytimg.com/vi/AzWz1GOGmvM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASH9zY7CcJDSlqWmxCBRuMX7i0sw'
    ,0:'https://png.pngtree.com/png-vector/20260122/ourmid/pngtree-ornate-wooden-quran-stand-with-open-book-png-image_18593561.webp'
    ,2:'https://file.aiquickdraw.com/imgcompressed/img/compressed_cef93771d94615df400f60979231eca5.webp'
}
let counter = 0 ;
setInterval(function(){
$('.img').fadeOut(2500,function(){

    counter+=1;
    console.log(counter)
    if(counter>=Object.keys(src).length){
        counter=0
    }
    $(this).css({
        'background-image':`url("${src[counter]}")`
    }).fadeIn(2500)
})

},4500)
$('.bi-sun-fill').on('click',function(){
    $('body').toggleClass('bg-dark')
    $('header').toggleClass('bg-dark')
    $('.card-body').toggleClass('bg-dark')
    $(this).toggleClass('bi-sun-fill bi-moon')
})
$('a').on('mouseenter',function(){
$(this).toggleClass('text-success')    

$('a:hover').css('color','black')
}).on('mouseleave',function(){
$(this).toggleClass('text-success')    

})


})
