window.onload = function() {
  var images = document.querySelectorAll('.clothing');
  
  var selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];

  images.forEach(function(image) {
    if (selectedItems.includes(image.src)) {
      image.classList.add('highlighted');
    }
  });

  images.forEach(function(image) {
    image.addEventListener('click', function(event) {
      var clickedImageSrc = event.target.src;

      // Toggle the 'highlighted' class and store the state
      event.target.classList.toggle('highlighted');

      if (event.target.classList.contains('highlighted')) {
        selectedItems.push(clickedImageSrc);
      } else {
        selectedItems = selectedItems.filter(function(item) {
          return item !== clickedImageSrc;
        });
      }

      localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    });
  });

  var input = document.getElementById("nameInput");
  var greeting = document.getElementById("greeting");

  window.sayHi = function() {
    var name = input.value;
    if (name) {
      greeting.innerText = "Hi " + name + "! Welcome to your closet!";
    }
  };
};
