//$(document).ready(function() {

  //});

$(document).ready(function() {

$('.question').click(function() {

  $(this).next().next().toggleClass('hide');
  $(this).next().next().toggleClass('answer');


  });

  $('.navbutton').click(function() {

    $('.menu').toggleClass('navshow');

        $('.menu').toggleClass('navhide');
            $('a, li').toggleClass('gayab');

    });
});
