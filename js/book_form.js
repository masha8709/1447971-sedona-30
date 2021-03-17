const bookingLink = document.querySelector('.booking-link');
const bookingForm = document.querySelector('.booking-form');

bookingLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingForm.classList.toggle("booking-form-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (bookingForm.classList.contains("booking-form-show")) {
      evt.preventDefault();
      bookingForm.classList.remove("booking-form-show");
    }
  }
});
