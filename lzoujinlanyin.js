const element = document.querySelector('.third p');
element.addEventListener('mouseover', function() {
  $('.third img').css('height', '100%')
  $('.third img').css('width', '100%')
});

window.addEventListener('scroll',function(){
    let top = this.window.scrollY;
    if(top >3900){
        $('.third .title').css('transform', 'translateY(0px)')
        $('.third .title').css('opacity', '1')
        $('.third .box1').css('transform', 'translateY(0px)')
        $('.third .box1').css('opacity', '1')
        $('.third .box2').css('transform', 'translateY(0px)')
        $('.third .box2').css('opacity', '1')
    }
    else {
        $('.third .title').css('transform', 'translateY(500px)')
        $('.third .title').css('opacity', '0')
        $('.third .box1').css('transform', 'translateY(500px)')
        $('.third .box1').css('opacity', '0')
        $('.third .box2').css('transform', 'translateY(500px)')
        $('.third .box2').css('opacity', '0')
    }
})