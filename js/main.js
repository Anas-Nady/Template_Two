
$(function(){

    $('body').css("paddingTop", $(".navbar").innerHeight())

});


// btn Scroll 
window.onscroll = function() {

    if (window.pageYOffset >= 800) {
    btnScroll.style.display = 'block'
    }
    else{
    btnScroll.style.display = 'none'
    }

}

btnScroll.onclick = function() {
    window.scrollTo({
        top:0,
        left:0,
    })
}