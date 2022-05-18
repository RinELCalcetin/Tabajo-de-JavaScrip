
// movimiento calamares


$(document).ready(function(){
    animarDiv();
    
});

function nuevaPosicionM(){
    
    // Get viewport dimensions (remove the dimension of the div)
    let h = $('.movimiento').height() - 300;
    let w = $('.movimiento').width() - 200;
    
    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animarDiv(){
    let newq = nuevaPosicionM();
    let oldq = $('#cmorado').offset();
    let velocidad = calcVel([oldq.top, oldq.left], newq);
    
    $('#cmorado').animate({ top: newq[0], left: newq[1] }, velocidad, function(){
        animarDiv();        
    });
    
};

function calcVel(prev, next) {
    
    let x = Math.abs(prev[1] - next[1]);
    let y = Math.abs(prev[0] - next[0]);
    
    let greatest = x > y ? x : y;
    
    let speedModifier = 0.3;
    
    let velocidad = Math.ceil(greatest/speedModifier);
    
    return velocidad;
    
};
function agarrar(){
    if($('#cmorado').click() == true){
        $('#cmorado').draggable() = true
        console.log("Tocando");

    }
    else{
        $('.movimiento') = false
    }
    
    
    
}

$(".cajon").droppable()