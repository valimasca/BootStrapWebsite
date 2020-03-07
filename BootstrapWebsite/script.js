// //Time out function
// const thingToDoWhenTimeoutIsOver = () => alert('Timeout completed');
// setTimeout(thingToDoWhenTimeoutIsOver, 5000);

// //Another timeout function
// const later = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
//             later(1000)
//                 .then(() => {
//                 console.log('After 1 second');
//                 return later(1000);
//              })
//              .then(() => {
//                 console.log('After 2 second');
//                 return later(1000);
//                  })
//             .then(() => {
//                 console.log('After 3 second');
//                 return later(1000);
//             })
//             .then(() => {
//                 console.log('Vali is amazing');
//                 return later(2000);
//             })


// // fetch a URL
// fetch("https://api.github.com/search/repositories?q=react")
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log("Error fetching query"));


//Bootstrap form
 // Self-executing function
 (function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$('.carousel-inner').carousel-inner({
    interval: 2000
  })