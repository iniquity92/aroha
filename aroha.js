  $(function(){
    var data;
    $(window).on("load",function(){
        $.ajax({
            url:"aroha_data.json",
            dataType:"json",
            method:"GET",
            success:function(arg){
                data = arg;
            }
        });
        var day = 1;
        var glimpse = "";
        for(x=0;x<4;x++){
            glimpse += "<div class='accordion-wrapper'>";
            for(y=0;y<4;y++){
                var obj = data["day-"+day];
                var title = obj["id"];
                var nz_location = obj["location"];
                glimpse += "<div id='day-"+day+"' class='accordion'>"+
                       "<div class='accordion-head'>"+
                       "<p>"+ title +"</p>"+
                       "<span class='glyphicon glyphicon-map-marker'><span>"+nz_location+
                       "</div>";
                if(y===0){
                    glimpse += "<div class='accordion-body restore-accordion'>";
                }
                else{
                    glimpse += "<div class='accordion-body collapse-accordion'>";
                }
                glimpse += "<div class='overlay-text'>"+
                        "<button class='btn btn-activities' data-toggle='modal' data-target='#modal' data-title='day-1'>"+
                        "<span>Learn More</span>"+
                        "</button>"+
                        "</div>"+ //end overlay text
                        "</div>"+//end accordion body
                        "</div>";//end accordion
                day++;
            }
            glimpse += "</div>"; //end accordion wrapper
        }
        $(".glimpses-wrapper").html(glimpse);
    });
  $('.fotorama').fotorama({
      width:'100%',
      ratio:3/2,
      allowfullscreen:true,
      nav:'thumbs',
      navposition:'bottom',
      captions:true,
      loop:true,
      swipe:true,
      keyboard:true,
      spinner:{
      lines:13,
      color:'rgba(0,0,0,0.75)'
      },
      data:[
      {img:'uploads/aroha/img/couples/beach.jpg',thumb:'uploads/aroha/img/couples/thumbs/beach.png'},
      {img:'uploads/aroha/img/couples/bungee3.jpg',thumb:'uploads/aroha/img/couples/thumbs/bungee3.png'},
      {img:'uploads/aroha/img/couples/dinner1.jpg',thumb:'uploads/aroha/img/couples/thumbs/dinner1.png'},
      {img:'uploads/aroha/img/couples/spa2.jpg',thumb:'uploads/aroha/img/couples/thumbs/spa2.png'},
      {img:'uploads/aroha/img/couples/ss1.jpg',thumb:'uploads/aroha/img/couples/thumbs/ss1.png'},
      {img:'uploads/aroha/img/couples/trekking2.jpg',thumb:'uploads/aroha/img/couples/thumbs/trekking2.png'},
      {img:'uploads/aroha/img/couples/massage1.jpg',thumb:'uploads/aroha/img/couples/thumbs/massage1.png'},
      {img:'uploads/aroha/img/couples/beach1.jpg',thumb:'uploads/aroha/img/couples/thumbs/beach1.png'}

      ]
  });

//   $('.accordion-head').on("click",function(e){
//       var caller = this;
//       var add_class_to = $(caller).parent().children('.accordion-body');
//       add_class_to.toggleClass("collapse-accordion");
//       add_class_to.toggleClass("restore-accordion");
//       // add_class_to.css("display","none");
//   });

  //tabs//
 $("#tour,#team").on("click",function(e){
     var caller = e.target.id;
     var to_show;
     switch(caller){
         case "tour":
           to_show = "#tab1";
           break;
          case "team":
          to_show = "#tab2";
          break;
      }
      var hide_tab = $("div.active-tab")[0]['id'];
      var hide_li = $("li.active-list")[0]['id'];
      $("#"+hide_tab).removeClass("active-tab");
      $("#"+hide_tab).addClass("invisible-tab");
      $(to_show).removeClass("invisible-tab")
      $(to_show).addClass("active-tab");
      $("#"+hide_li).removeClass("active-list");
      $("#"+caller).addClass("active-list");
  });

 //changing the style of navigation upon scroll //
 $(window).on("scroll",function(e){
     if(window.scrollY===0){
         $(".navbar-aroha-transparent").css({
             "background-color":"transparent",
             "height":"100px",
             "font-size":"17px",
             "padding":"10px",
             "border-color":"#9c9c9c"
         });
         $(".navbar-collapse,.navbar-header").css({
             "margin-top":"15px"
         });

     }
     else{
        $(".navbar-aroha-transparent").css({
             "background-color":"black",
             "height":"75px",
             "font-size":"15px",
             "padding":"5px",
             "border-color":"black"
         });
         $(".navbar-collapse,.navbar-header").css({
             "margin-top":"7px"
         });
    
     }
});

$("#modal").on('show.bs.modal',function(e){
        var button = $(e.relatedTarget);
        var caller = button.data('title');
        var modal = $(this);
        var about = data[caller]['description']+"<hr>";
        var images = data[caller]['pics'];
        var out = "<div class='container-fluid'><div class='row'>";
        for(i=0;i<images.length;i++){
                out += "<div class='col-md-4' style='padding:5px;'>"+
                "<div class='modal-image-box'>"+
                "<div class='modal-image'>"+ 
                "<img src='" + images[i]['url'] + "' class='img-thumbnail' alt='"+ images[i]['name']+"' height='60' width='100'> "+
                /*"<div class='modal-image-overlay'>"+
                "</div>"+ //closed .modal-image-overlay
                "<div class='modal-image-overlay-text'>"+
                "<a href='" + images[i]['p_url'] + "'>"+
                "<button class='btn btn-modal-image'>"+
                "<span class='glyphicon glyphicon-search'></span>"+
                "</button>"+
                "</a>"+
                "</div>"+ // closed .modal-image-overlay-text*/
                "</div>"+ //closed .modal-image
                "<div class='modal-image-box-text'>"+
                "<h4>"+ images[i]['name']+"</h4>"+
                /*"<p>"+ images[i]['p_about']+"</p>"+*/
                "</div>"+ //closed .modal-image-box-text
                "</div>"+ //close .modal-image-box
                "</div>"; //close .col-md-4 
        }
        out += "</div></div>"; //close .row and .container-fluid
        about += out;
        modal.find('.modal-title').text(caller.toUpperCase());
        modal.find('.modal-body').html(about);
    });

    // beginning the slider //
   /* 
    // slider ends // */
});