function cadastrarTurma(){


	var nome = document.form1.username.value;
	var disciplina = document.form1.disc.value;
	var dados ='<tr><td></td><td><label for="id_username">'+nome+'</label></td><td><label for="id_disciplina">'+disciplina+'</label></td><td><a title="Editar" href="#"><img  class="icon-edit"></a><a href="#" title="Remover"><img  class="icon-remove"></a></td></tr>';

	document.getElementById("table_turmas").innerHTML += dados;
	
	document.form1.usarname.value = "";
	document.form1.disc.value = "";   
}

function crossedOut(item) {
	document.getElementById(item).className = "checked-off";
}

function cadastrarProfessor(){


	var nome = document.form1.username.value;
	var mat = document.form1.matricula.value;
	var disciplina = document.form1.disc.value;
	var data = document.form1.data.value;
	var disc = document.form1.disc.value;

	var dados ='<tr><td></td><td><label for="id_username">'+nome+'</label></td><td><label for="id_disciplina">'+disciplina+'</label></td><td><label for="id_mat">'+mat+'</label></td><td><label for="id_disciplina">'+data+'</label></td><td><a title="Editar" href="#"> <img  class="icon-edit"></a> <a href="#" title="Remover">  <img  class="icon-remove"></a></td></tr>';

	document.getElementById("table_prof").innerHTML += dados;
	
	document.form1.username.value = "";
	document.form1.matricula.value = "";
	document.form1.disc.value = "";
	document.form1.data.value = "";
	document.form1.disc.value = "";  
}

function crossedOut(item) {
	document.getElementById(item).className = "checked-off";











}