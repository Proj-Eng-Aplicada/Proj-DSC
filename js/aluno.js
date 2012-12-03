//varialvel para adicionar id em cada cadastro de aluno,
//assim o aluno eh editado pelo seu id
var index = 2;

function abrir(){
	document.getElementById('novo').style.display='none';
	document.getElementById('cadastro').style.display='block';
}
function cadastrar(node){
	index++;
	var nome = document.formulario.nome.value;
	var matricula = document.formulario.matricula.value;
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

	var dados = '<tr><td id="nome'+index+'" >'+nome+  '</td>'+
					 '<td id="mat'+index+'">'+matricula+  '<td> <a title="Editar" onclick="editar(this);" href="#"> <img  class="icon-edit"></a> <a href="#" onclick="remover(this);" title="Remover">  <img  class="icon-remove"></a></td>';
    document.getElementById("tabela_alunos").innerHTML += dados;
	document.formulario.nome.value = "";
	document.formulario.matricula.value="";
}	

function remover(codigo){
	var toDelete = codigo.parentNode.parentNode.rowIndex;
	document.getElementById("tabela_alunos").deleteRow(toDelete);
}
function editar(node){
	var indexnode = node.parentNode.parentNode.rowIndex;
	var nome = document.getElementById('nome'+indexnode).innerHTML;
	var mat = document.getElementById('mat'+indexnode).innerHTML;
	document.formulario.nome.value = nome;
	document.formulario.matricula.value = mat;
	remover(node);
}