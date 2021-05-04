$(document).ready(function() {
  $("#profile").slideDown(800);
  /* Main Interface */
  let current_box;
  $("#about").click(function(){
    $("#profile-side").slideDown(800);
    $("#profile").slideUp(800,function(){
          $("#about-box").slideDown(800);
    });
    $("#side-pointer").css({'top':'60px'}).show();
    current_box = "about";
  });

  $("#exp").click(function(){
    $("#profile-side").slideDown(800);
    $("#profile").slideUp(800,function(){
          $("#exp-box").slideDown(800);
    });
    $("#side-pointer").css({'top':'260px'}).show();
    current_box = "exp"
  });

  $("#involvement").click(function(){
    $("#profile-side").slideDown(800);
    $("#profile").slideUp(800,function(){
          $("#involvement-box").slideDown(800);
    });
    $("#side-pointer").css({'top':'360px'}).show();
    current_box = "involvement"
  });

  $(".back").click(function(){
    $("#profile-side").slideUp(800);
    switch (current_box) {
      case "about":
        $("#about-box").slideUp(800, function(){
          $("#profile").slideDown(800);
        });
        break;
      case "exp":
        $("#exp-box").slideUp(800, function(){
          $("#profile").slideDown(800);
        });
      break;
      case "involvement":
        $("#involvement-box").slideUp(800, function(){
          $("#profile").slideDown(800);
        });
      break;
    }
  });

  /* Side interface */
  $("#about-side").click(function(){
    $("#side-pointer").css({'top':'60px'}).show();
    switch (current_box) {
      case "about":
        $("#about-box").slideUp(800, function(){
          $("#about-box").slideDown(800);
        });
        current_box = "about";
        break;
      case "exp":
        $("#exp-box").slideUp(800, function(){
          $("#about-box").slideDown(800);
        });
        current_box = "about";
      break;
      case "involvement":
        $("#involvement-box").slideUp(800, function(){
          $("#about-box").slideDown(800);
        });
        current_box = "about";
      break;
    }
  });

  $("#exp-side").click(function(){
    $("#side-pointer").css({'top':'260px'}).show();
    switch (current_box) {
      case "about":
        $("#about-box").slideUp(800, function(){
          $("#exp-box").slideDown(800);
        });
        current_box = "exp";
        break;
      case "exp":
        $("#exp-box").slideUp(800, function(){
          $("#exp-box").slideDown(800);
        });
        current_box = "exp";
      break;
      case "involvement":
        $("#involvement-box").slideUp(800, function(){
          $("#exp-box").slideDown(800);
        });
        current_box = "exp";
      break;
    }
  });

  $("#involvement-side").click(function(){
    $("#side-pointer").css({'top':'360px'}).show();
    switch (current_box) {
      case "about":
        $("#about-box").slideUp(800, function(){
          $("#involvement-box").slideDown(800);
        });
        current_box = "involvement";
        break;
      case "exp":
        $("#exp-box").slideUp(800, function(){
          $("#involvement-box").slideDown(800);
        });
        current_box = "involvement";
      break;
      case "involvement":
        $("#involvement-box").slideUp(800, function(){
          $("#involvement-box").slideDown(800);
        });
        current_box = "involvement";
      break;
    }
  });

  /* Experience Animation */
  let current_exp;
  $("#exp-1").click(function(){
    $(".back").fadeOut(800);
    $("#exp-2").fadeOut(800);
    $("#exp-3").fadeOut(800);
    $("#exp-4").fadeOut(800,function(){
      $("#exp-back").fadeIn(800);
      $("#cp-1").fadeIn(800);
      current_exp = "cp1";
    });
  })

  $("#exp-2").click(function(){
    $(".back").fadeOut(800);
    $("#exp-1").fadeOut(800);
    $("#exp-3").fadeOut(800);
    $("#exp-4").fadeOut(800,function(){
      $("#exp-back").fadeIn(800);
      $("#cp-2").fadeIn(800);
      current_exp = "cp2";
    });
  })

  $("#exp-3").click(function(){
    $(".back").fadeOut(800);
    $("#exp-2").fadeOut(800);
    $("#exp-1").fadeOut(800);
    $("#exp-4").fadeOut(800,function(){
      $("#exp-back").fadeIn(800);
      $("#cp-3").fadeIn(800);
      current_exp = "cp3";
    });
  })

  $("#exp-4").click(function(){
    $(".back").fadeOut(800);
    $("#exp-2").fadeOut(800);
    $("#exp-3").fadeOut(800);
    $("#exp-1").fadeOut(800,function(){
      $("#exp-back").fadeIn(800);
      $("#cp-4").fadeIn(800);
      current_exp = "cp4";
    });
  })

  $("#exp-back").click(function(){
    switch (current_exp) {
      case "cp1":
        $("#exp-back").fadeOut(800);
        $("#cp-1").fadeOut(800,function(){
          $(".back").fadeIn(800);
          $("#exp-2").fadeIn(800);
          $("#exp-3").fadeIn(800);
          $("#exp-4").fadeIn(800);
        });
        break;
      case "cp2":
        $("#exp-back").fadeOut(800);
        $("#cp-2").fadeOut(800,function(){
          $(".back").fadeIn(800);
          $("#exp-1").fadeIn(800);
          $("#exp-3").fadeIn(800);
          $("#exp-4").fadeIn(800);
        });
        break;
      case "cp3":
        $("#exp-back").fadeOut(800);
        $("#cp-3").fadeOut(800,function(){
          $(".back").fadeIn(800);
          $("#exp-2").fadeIn(800);
          $("#exp-1").fadeIn(800);
          $("#exp-4").fadeIn(800);
        });
        break;
      case "cp4":
        $("#exp-back").fadeOut(800);
        $("#cp-4").fadeOut(800,function(){
          $(".back").fadeIn(800);
          $("#exp-2").fadeIn(800);
          $("#exp-3").fadeIn(800);
          $("#exp-1").fadeIn(800);
        });
        break;
    }
  });
});
