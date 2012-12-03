var codigo = 2;
var codigoTurma = 2;
var codigoAluno = 2;
var codigoUsuario = 2;


function crossedOut(item) {
	document.getElementById(item).className = "checked-off";
}



function cadastrarProfessor(){
	codigo++;

	var nome = document.form1.username.value;
	var mat = document.form1.matricula.value;
	var disciplina = document.form1.disc.value;
	var data = document.form1.data.value;

	var dados ='<tr><td></td><td><label for="id_username">'+nome+'</label><input type="hidden" value="'+nome+'" id="nome'+codigo+'"></td><td><label>'+disciplina+'</label><input type="hidden" value="'+disciplina+'" id="disciplina'+codigo+'"></td><td><label>'+mat+'</label><input type="hidden" value="'+mat+'" id="matricula'+codigo+'"></td><td><label>'+data+'</label><input type="hidden" value="'+data+'" id="data'+codigo+'"></td><td><a title="Editar" href="#" onclick="editarProfessor('+codigo+')"> <img  class="icon-edit"></a> <a href="#" title="Remover">  <img  class="icon-remove" onclick="removerProfessor(this.parentNode.parentNode.parentNode.rowIndex)"></a></td></tr>';
	document.getElementById("body_prof").innerHTML += dados;
	
	document.form1.username.value = "";
	document.form1.matricula.value = "";
	document.form1.disc.value = "";
	document.form1.data.value = "";
}


function editarProfessor(codigo){

	var nome = document.getElementById("nome"+codigo).value;
	var mat = document.getElementById("matricula"+codigo).value;
	var disciplina = document.getElementById("disciplina"+codigo).value;
	var data = document.getElementById("data"+codigo).value;
	
	document.form1.username.value = nome;
	document.form1.matricula.value = mat;
	document.form1.disc.value = disciplina;
	document.form1.data.value = data;
	removerProfessor(codigo);
}

function removerProfessor(codigo){
	document.getElementById("table_prof").deleteRow(codigo);
}


function cadastrarTurmas(){
	codigoTurma++;

	var nome = document.form1.nome.value;
	var disciplina = document.form1.disc.value;

	var dados ='<tr><td></td><td><label>'+nome+'</label><input type="hidden" value="'+nome+'" id="nome'+codigoTurma+'" /></td><td><label>'+disciplina+'</label><input type="hidden" value="'+disciplina+'" id="disciplina'+codigoTurma+'"></td><td>																																																<a title="Editar" href="#" onClick="editarTurmas('+codigoTurma+')"> <img  class="icon-edit"></a><a href="#" title="Remover"> <img  class="icon-remove" onClick="removerTurmas(this.parentNode.parentNode.parentNode.rowIndex)"></a></td></tr>';


	document.getElementById("body_prof").innerHTML += dados;
	
	document.form1.nome.value = "";
	document.form1.disc.value = "";
}


function editarTurmas(codigoTurma){

	var nome = document.getElementById("nome"+codigoTurma).value;
	var disciplina = document.getElementById("disciplina"+codigoTurma).value;
	
	document.form1.nome.value = nome;
	document.form1.disc.value = disciplina;
	removerTurmas(codigoTurma);
}

function removerTurmas(codigoTurma){
	document.getElementById("table_prof").deleteRow(codigoTurma);
}


function cadastrarAluno(node){
	

	var nome = document.form1.nome.value;
	var matricula = document.form1.matricula.value;
	var data = document.form1.data.value;

	if (nome == "") {
		document.getElementById('nome_vazio').style.display='block';
		setTimeout(function () { 
			document.getElementById('nome_vazio').style.display='none';	
		}, 2000);
		return;
	};
	if (matricula == "") {
		document.getElementById('matricula_vazia').style.display='block';
		setTimeout(function () { 
			document.getElementById('matricula_vazia').style.display='none';	
		}, 2000);

		return;
	};
	
	codigoAluno++;
	var dados ='<tr><td></td><td><label>'+nome+'</label><input type="hidden" value="'+nome+'" id="nome'+codigoAluno+'" /></td><td><label>'+matricula+'</label><input type="hidden" value="'+matricula+'" id="matricula'+codigoAluno+'" /></td><td><label>'+data+'</label><input type="hidden" value="'+data+'" id="data'+codigoAluno+'" /> </td><td><a title="Editar" onClick="editarAluno(this);"> <img  class="icon-edit" /></a> <a title="Remover"><img  class="icon-remove" onClick="removerAluno(this)"></a></td></tr>';

	// var dados ='<tr><td></td><td><label>'
	// +nome+'</label><input type="hidden" value="'
	// +nome+'" id="nome'+codigoAluno+'" /></td><td><label>'
	// +matricula+'</label><input type="hidden" value="'
	// +matricula+'" id="matricula'+codigoAluno+'" /></td><td><label>'
	// +data+'</label><input type="hidden" value="'+data+'" id="data'
	// +codigoAluno+'" /> </td><td><a title="Editar" 
	// onClick="editarAluno('+codigoAluno+')"> 
	// <img  class="icon-edit" /></a> <a title="Remover">
	// <img  class="icon-remove" onClick="removerAluno(this)"></a></td></tr>';

	document.getElementById("body_prof").innerHTML += dados;
	
	document.form1.nome.value = "";
	document.form1.matricula.value = "";
	document.form1.data.value = "";
}


function editarAluno(node){

	var indexnode = node.parentNode.parentNode.rowIndex;
	var nome = document.getElementById('nome'+indexnode).value;
	var matricula = document.getElementById('matricula'+indexnode).value;
	var data = document.getElementById('data'+indexnode).value;

	document.form1.nome.value = nome;
	document.form1.matricula.value = matricula;
	document.form1.data.value = data;
	removerTurmas(codigoAluno);
}

function removerAluno(node){
	var indexnode = node.parentNode.parentNode.parentNode.rowIndex;
	if (node.parentNode.parentNode.rowIndex == 1) {
		indexnode = node.parentNode.parentNode.rowIndex;
	};
	if (node.parentNode.parentNode.rowIndex == 2) {
		indexnode = node.parentNode.parentNode.rowIndex;
	};
	
	
	document.getElementById("table_prof").deleteRow(indexnode);
}

function cadastrarUsuario(){
	codigoUsuario++;

	var nome = document.form1.nome.value;
	var data = document.form1.data.value;
	var email = document.form1.email.value;
	var login = document.form1.login.value;

	var dados ='<tr><td></td><td><label>'+nome+'</label><input type="hidden" value="'+nome+'" id="nome'+codigoUsuario+'" /></td><td><label>'+data+'</label><input type="hidden" value="'+data+'" id="data'+codigoUsuario+'" /></td><td><label>'+email+'</label><input type="hidden" value="'+email+'" id="email'+codigoUsuario+'" /></td><td><label>'+login+'</label><input type="hidden" value="'+login+'" id="login'+codigoUsuario+'" /></td><td><a title="Editar" onClick="editarUsuario('+codigoUsuario+')"> <img  class="icon-edit" /></a><a title="Remover"> <img  class="icon-remove" onClick="removerusuario(this.parentNode.parentNode.rowIndex)"></a></td></tr>';

	document.getElementById("body_prof").innerHTML += dados;
	
	 document.form1.nome.value = "";
	 document.form1.data.value = "";
	 document.form1.email.value = "";
	 document.form1.login.value = "";
	 document.form1.senha.value = "";
}


function editarUsuario(codigoUsuario){

	var nome = document.getElementById("nome"+codigoUsuario).value;
	var email = document.getElementById("email"+codigoUsuario).value;
	var data = document.getElementById("data"+codigoUsuario).value;
	var login = document.getElementById("login"+codigoUsuario).value;
	document.form1.nome.value = nome;
	document.form1.email.value = email;
	document.form1.login.value = login;
	document.form1.data.value = data;

	removerUsuario(codigoUsuario);
}

function removerUsuario(codigoUsuario){
	document.getElementById("table_prof").deleteRow(codigoUsuario);
}
