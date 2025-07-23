const makefon = document.getElementById("makefon");
const containerop = document.getElementById("obektmus");
const containerop1 = document.getElementById("obektb");
const containerop2 = document.getElementById("obektk");
makefon.addEventListener('click', function() {
    if (containerop.style.backgroundColor == 'green') {
        containerop.style.backgroundColor = null;
        containerop1.style.backgroundColor = null;
        containerop2.style.backgroundColor = null;
    } else {
        containerop.style.backgroundColor = 'green';
        containerop1.style.backgroundColor = 'green';
        containerop2.style.backgroundColor = 'green';
    }
});
