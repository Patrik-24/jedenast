let colors = document.querySelectorAll(".green-lime")

colors.forEach(element => {
    console.log(element.innerText);

    if(element.innerText > 92){
        colors.style.color = "lime";
    }

    const value = parseFloat(element.innerText);
        if (value >= 92) {
        element.style.color = 'lime';
    }
});

const toggleBtn = document.getElementById("toggle-btn");
const toggleContent = document.getElementById("toggle-content");

toggleBtn.addEventListener("click", function() {
  toggleContent.classList.toggle("show");
});