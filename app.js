function handleKeyPress(event) {
    if (event.keyCode === 13) { 
      var input = document.getElementById("inputText");
      var label = document.getElementById("inputLabel");
      var output = document.getElementById("output");
      
      output.innerText = input.value;
      input.style.display = "none"; 
      label.style.display = "none"; 
  
      event.preventDefault(); 
    }
  }