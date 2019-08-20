$(function(){
    addartists();
})
function addartists(){
    for(let i in artists_ar){
        let item = artists_ar[i];
        var artists = new Artists(id_parent,item.name,item.json_path,item.img)
        artists.addartiststohtml();
    }
}
function showlist(path,name){
    $(frame1).css("display","none");
    $(frame2).fadeIn(500);
    $(backlist).on("click",function(){
        $(frame1).fadeIn(500);
        $(frame2).css("display","none");
    })
    $.ajax({
        url: `/_json/${path}`,
        crossDomain: true,
        dataType: "json",
        success: function (data) {
          $(id_parent_list).html("");
          for(let i in data){
              let item = data[i].snippet;
              var addsong = new Song(id_parent_list,item.thumbnails.default.url,item.title,name,item.resourceId.videoId);
              addsong.addsongstohtml();
          }
        }
    })
}
function playsong(title,url){
var name = title;
var fixedurl = `https://www.youtube.com/embed/${url}`;
$(frame3).fadeIn(800);
$(".darksong").css("display","flex");
let newbox = $(`<div class="songbox p-2 justify-content-center">`);
$(frame3).html("");
let exitbutton = $(`<img src="_images/exit.png" alt="" class="exit">`);
$(frame3).append(newbox);
$(newbox).append(exitbutton);
$(newbox).append(`<h5 class="h5 text-center">${title}</h5>`);
$(newbox).append(`<iframe width="400" height="200" src="${fixedurl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
$(exitbutton).on("click",function(){
    $(frame3).css("display","none");
})
}