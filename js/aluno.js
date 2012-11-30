function abrir(){
	document.getElementById('novo').style.display='none';
	document.getElementById('cadastro').style.display='block';
}
function cadastrar(){


	var nome = document.formulario.nome.value;
	var matricula = document.formulario.matricula.value;
	var dados = '<tr><td>'+nome+  '</td>'+
					 '<td>'+matricula+  '</td><td> <a title="Editar" href="#"> <img  class="icon-edit"></a> <a href="#" title="Remover">  <img  class="icon-remove"></a> <a href="#"></td></tr>';
    document.getElementById("tabela_alunos").innerHTML += dados;
	document.formulario.nome.value = "";
	document.formulario.matricula.value="";   



}