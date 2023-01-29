console.log("scripted running");

$( document ).ready(function() {
    console.log( "ready!" );
    function provoquer() {
        alert("Cessez de me cliquez dessus je vous prie !")
    }
    document.getElementById("avatar").addEventListener('click',function(){ provoquer();})
});


