const countDate = new Date("Jan 10 2022 13:05:55").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();

    let distance = countDate - now;

    let d = Math.floor(distance / (1000 *60*60*24));
    let hrs = Math.floor((distance % (1000 * 60 * 60 * 24))/ (1000 * 60 *60));
    let min = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
    let sec = Math.floor(distance % (1000 * 60 * 60) / 1000);

    //getting  the and attach to the i dof timer
    document.getElementById('timer').innerHTML = d + "d " + hrs + "h " + min + "m " + sec + "s "

    if(distance < 0){
        clearInterval(x);
        document.getElementById('timer').innerHTML = "Time's up"
    }
})