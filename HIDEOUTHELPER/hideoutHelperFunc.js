document.addEventListener("DOMContentLoaded", function() { 
    console.log("hi")
    // Get modal element
    var modal = document.getElementById("myModal");

    // Get open modal button
    var openModalBtn = document.getElementById("openModalBtn");

    // Get close button
    var closeBtn = document.getElementsByClassName("close")[0];

    // Listen for open click
    openModalBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Listen for close click
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Listen for outside click
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    const items = ["Screws", "Bolts", "Tape", "Nuts"];
    const itemsUl = document.getElementById('itemUl');
    for (let i = 0; i<items.length; i++) {
        let li = document.createElement('li');
        li.className = 'item';
        li.textContent = items[i];
        itemsUl.appendChild(li)
    }
});