function Artists(_parent,_name,_path,_img){
this.parent=_parent;
this.name=_name;
this.path = _path;
this.img=_img;
}

Artists.prototype.addartiststohtml = function(){
    let newbox = $(`<div class="col-6 border border-secondary d-flex btn btn-dark">`);
    $(this.parent).append(newbox);
    $(newbox).append(`<img src="${this.img}" alt="" width="150" height="150" class="m-2 border">`)
    $(newbox).append(`<h3 class="text-center text-white">${this.name}</h3>`);
    $(newbox).on("click",function(){
        showlist(this.path,this.name);
    }.bind(this));
}

function Song(_parent,_img,_title,_name,_vidurl){
    this.parent = _parent;
    this.img = _img;
    this.title = _title;
    this.name = _name;
    this.url = _vidurl;
}
Song.prototype.addsongstohtml = function(){
    let newbox = $(`<div class="col-12 border btn btn-primary m-2">`);
    $(this.parent).append(newbox);
    $(newbox).append(`<div class="float-right">`);
    $(newbox).append(`<img width="125" src="${this.img}" alt="" class="float-left m-2">`);
    $(newbox).append(`<h3>${this.name}</h3>`);
    $(newbox).append(`<h6>${this.title}</h6>`);
    $(newbox).on("click",function(){
        playsong(this.title,this.url);
    }.bind(this))
}