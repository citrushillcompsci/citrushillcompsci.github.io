let a = function(places) {
    let c = 1;
    for(i=2;i<=places;i++){
        c+=(1/i**2);
    };
    return c;
}

$("#btn_gen").click(function(){
    let x = $("#textin").val();
    if(x<2){
        alert("Integers less than 2 are not permited.");
    } else {
        $("#output").text(a(x))
    }
});
