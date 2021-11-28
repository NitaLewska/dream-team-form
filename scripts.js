
function switchPages() {
    document.getElementById("secondStep").classList.toggle('hidden');
    document.getElementById("firstStep").classList.toggle('hidden');
    
    if (document.querySelector("h3+p").innerHTML === "Шаг второй") {
        document.querySelector("h3+p").innerHTML = "Шаг первый"
    } else {
        document.querySelector("h3+p").innerHTML = "Шаг второй";
    }
}

document.querySelector("#toggleTest").addEventListener('click', switchPages);