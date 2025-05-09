window.onload = function() {
  var selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];

  var lookContainer = document.getElementById("lookContainer");
  lookContainer.innerHTML = ''; 

  selectedItems.forEach(function(item) {
    var img = document.createElement("img");
    img.src = item;
    img.classList.add("clothing");
    lookContainer.appendChild(img);
  });
};
