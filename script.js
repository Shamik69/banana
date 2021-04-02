function width() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}
function list_return(list_len) {
    x = '';
    for (let i = 0; i < list_len; i++) {
        x += '<li id="f'.concat(i).concat('"class= "f">');
        x += 'fact '.concat(i+1);
        x += '</li>'
    }
    $("#lftlist").html(x);
}
function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function paragen(paraCount = Math.floor(Math.random() * 10)) {
    let i=0;
    let x= '';
    while (i<=paraCount) {
        x+=makeid(5).concat('<br>');
        i+=1;
    }
    $("#rit").html(x);
}

function wordgen() {
    let x = '';
    let i = 0;
    while (i <= Math.floor(Math.random() * 100)) {
        x += makeid(Math.floor(Math.random() * 10))
        i += 1;
    }
    return x;
}
function mouseOver(id) {
    $(id).on('mouseenter', function () {
        $(id).css('color', '#2a6496');
        $(id).css('text-decoration','underline');
        $.ajax({
            url: 'php/facts.php',
            method: 'post',
            data: {0:id},
            success: function (response) {
                x = `<span class= 'dyk'>Did You Know<br></span>
                <span class= 'fact'>`+response+`</span>`;
                $('#rit').append(x);
            }
        })
        $('.fact').hide();
        $('.dyk').hide();
        // $(id).append(x);
    })
    $(id).on('mouseout', function () {
        $(id).css('color', '#323a41');
        $(id).css('text-decoration', 'none');
        // $('.fact').hide();
    })
}
$(document).ready(function () {
    width();
    $(window).on('resize', function () {
        // w= $(window).width;
        // h= $(window).height;
        // th= h*0.5;
        // tw= w * 0.5;
        // $('#tbl').css('height', th);
        // $('#tbl').css('width', tw);
        // $('.f').css('width', tw/4);
    })
    list_return(10);
    // paragen();
    var x= '';
    var i = 0;
    $("#midtxt").html(
        "<span class= 'reasons'>5 Reasons Why</span>"
    );
    while (i <=4) {
        $.ajax({
            url: 'php/reasons.php',
            data: {0: i},
            method: 'post',
            success: function (response){
                console.log(response);
                $('#midtxt').append(
                    `<li class= "midli">`+
                    response
                    +`</li>`
                )
            }
        })
        i+=1;
    }
    var i= 0;
    while (i <= $("#lftlist li").length) {
        id= '#f'.concat(i);
        mouseOver(id);
        i+=1;
    }
    console.log($("#lftlist li").length);
})
