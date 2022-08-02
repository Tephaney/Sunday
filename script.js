  /* === FAQ Accordion === */
  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
  
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

/* Contact Me */

document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });


  /* === Why parents love this book BOX */

//   $('.box').on('mouseenter', function() {
//     $(this).find('h1').text('Bye.');
//   })
  
//   $('.box').on('mouseleave', function() {
//     $(this).find('h1').text('Hi.');
//   })



