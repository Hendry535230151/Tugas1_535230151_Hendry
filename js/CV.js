function openContent() {
    const container_main = document.getElementById("sub-container");
    const container_2 = document.getElementById("sub-container-2");

    container_main.classList.toggle("hide-content-1");
    container_2.classList.toggle("hide-content-2");
}

function changePage(id, b_id) {
    const active_buttons = document.querySelectorAll(".sub-container-3 .icon button"); //
    const focus_button = document.getElementById(b_id); //

    active_buttons.forEach(active_button => {
        active_button.classList.remove("active");
    });

    focus_button.classList.add("active");
    
    const contents = document.querySelectorAll(".sub-container-2 > div"); 
    const focus_content = document.getElementById(id); 

    contents.forEach(content => {
        content.classList.add("hide-content-3");
    });
    focus_content.classList.remove("hide-content-3");
}