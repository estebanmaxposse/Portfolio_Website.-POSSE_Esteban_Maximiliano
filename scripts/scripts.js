$(document).ready(function() {
  $('.logo-carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});

//Get the button:
back2TopBtn = document.getElementById("back2TopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    back2TopBtn.style.display = "block";
  } else {
    back2TopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let selectForm = document.getElementById('services');
let selectFormValue =  selectForm.options[selectForm.selectedIndex].text;
console.log(selectFormValue);

function sendEmail() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "estebanposse98@gmail.com",
    Password : "GetStuff8",
    To : 'estebanposse98@gmail.com',
    From : document.getElementById('email-form').value,
    Subject : "New Job Request" + document.getElementById('subject').value,
    Body : "Name: " + document.getElementById('name').value +  document.getElementById('last-name').value
    + "<br> Email: " + document.getElementById('email-form').value
    + "<br> Subject: " + document.getElementById('subject').value
    + "<br> Service: " + selectFormValue
    + "<br> Message: " + document.getElementById('message').text,
}).then(
  message => alert('Message sent!')
);
}
