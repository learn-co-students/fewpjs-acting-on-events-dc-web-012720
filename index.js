// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#00ff00";

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
      let rightNumbers = dodger.style.left.replace("px", "");
      let right = parseInt(rightNumbers, 10);

      if (right < 360) {
          dodger.style.left = `${right + 5}px`;
      }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });