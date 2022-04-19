<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  let scrEl1 = document.getElementById("scr-el1")
  scrEl1.addEventListener('scroll', event => {
    let scrolled = (scrEl1.scrollLeft / (scrEl1.scrollWidth - scrEl1.clientWidth) ) * 100
    document.getElementById("myBar1").style.width = scrolled + "%"
  });



    let scrEl2 = document.getElementById("scr-el1")
    scrEl2.addEventListener('scroll', event => {
      let scrolled2 = (scrEl2.scrollTop / (scrEl2.scrollHeight - scrEl2.clientHeight) ) * 100
      document.getElementById("myBar2").style.height = scrolled2 + "%"
    });



$('#right-button').click(function() {
    event.preventDefault();
    $('#scr-el1').animate({
    scrollLeft: "+=200px"
    }, "medium");
});

$('#left-button').click(function() {
    event.preventDefault();
    $('#scr-el1').animate({
    scrollLeft: "-=200px"
    }, "medium");
});