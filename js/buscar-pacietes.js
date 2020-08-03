var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    var erroAjax = document.querySelector("#erro-ajax");

    xhr.addEventListener("load", function(){
        if (xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);

            pacientes.forEach(function(paciente){
                adicionaPaciente(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});