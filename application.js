$(document).ready(function(){
  $(".submit").click (function(){
    var section1 = $(".entry").val();
    var section2 = $('<div class="items"></div>').text(section1);

    section2.on('click', function(){
      $(this).toggleClass("lineThrough");
    });

    section2.on('dblclick', function(){
      $(this).fadeOut('slow');
    });

    if (section1!=""){
      $("#append").append(section2);
      $(".entry").val("");
    }

    else{alert("Enter item")}
  });
  
  $(document).keypress(function(e){
    if(e.which == 13){
      var section1 = $(".entry").val();
      var section2 = $('<div class="items"></div>').text(section1);

      section2.on('click', function(){
        $(this).toggleClass("lineThrough");
      });

      section2.on('dblclick', function(){
        $(this).fadeOut('slow');
      });

      if (section1!="")
      {
        $("#append").append(section2);
        $(".entry").val("");
      }

      else 
      {
        alert("Enter item")
      }
    }
  });
    $('.click').click (function(){
      $('.ins p').toggle('slow');
    })

    $('.click').on({
      mouseover:function(){
          $('.click').addClass('hover');
          $('.submit').addClass('hover');
      },
      mouseleave:function(){
          $('.click').removeClass('hover');
          $('.submit').removeClass('hover');
      }
    })
});

