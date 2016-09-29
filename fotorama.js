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
    {img:'/main/static/img/couples/beach.jpg',thumb:'/main/static/img/couples/thumbs/beach.png'},
    {img:'/main/static/img/couples/bungee3.jpg',thumb:'/main/static/img/couples/thumbs/bungee3.png'},
    {img:'/main/static/img/couples/dinner1.jpg',thumb:'/main/static/img/couples/thumbs/dinner1.png'},
    {img:'/main/static/img/couples/spa2.jpg',thumb:'/main/static/img/couples/thumbs/spa2.png'},
    {img:'/main/static/img/couples/ss1.jpg',thumb:'/main/static/img/couples/thumbs/ss1.png'},
    {img:'/main/static/img/couples/trekking2.jpg',thumb:'/main/static/img/couples/thumbs/trekking2.png'},
    {img:'/main/static/img/couples/massage1.jpg',thumb:'/main/static/img/couples/thumbs/massage1.png'},
    {img:'/main/static/img/couples/beach1.jpg',thumb:'/main/static/img/couples/thumbs/beach1.png'}

    ]
});

$('.accordion-head').on("click",function(e){
    var caller = this;
    var add_class_to = $(caller).parent().children('.accordion-body');
    add_class_to.toggleClass("collapse-accordion");
    add_class_to.toggleClass("restore-accordion");
    // add_class_to.css("display","none");
});