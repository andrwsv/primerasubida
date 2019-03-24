let myData = {
	cursos:[
		{
			idx: 1,
			nombre:'Cantabilidad',
			duracion: '5 meses',
			valor: 1200000
		},
		{
			idx: 2,
			nombre:'Programacion',
			duracion: '5 meses',
			valor: 1500000
		},
		{
			idx: 3,
			nombre:'Agropecuaria',
			duracion: '3 meses',
			valor: 1000000
		},
	]
};

let mostrarCursos=(data, callback)=>{
	var aumentartime=2000;
	for (let i = 0; i < data.cursos.length; i++) {
		setTimeout(function(){
			//console.log(data.cursos[0]);
			callback(data.cursos[i]);
		},aumentartime);
		aumentartime+=2000;
	}

}


/*mostrarCursos(myData, function(result){
	console.log ("Seleccione el curso a inscribirse: \n");
	console.log("Curso con id "+result.id+" se llama "+result.nombre+" tiene una duracion de "+result.duracion+" y un valor de $"+result.valor);

});*/

let obtenerNombre=(data, id)=>{
	for (let i = 0; i < data.cursos.length; i++) {
		if(data.cursos[i].idx === id){
			return data.cursos[i].nombre;
		}
	}
};

let obtenerCurso=(data, id, nombre, duracion, valor )=>{
	for (let i = 0; i < data.cursos.length; i++) {
		//console.log("curso"+data.cursos[i].idx+" == "+id);
		if(data.cursos[i].idx === id){
			return data.cursos[i];
		}
		if(data.cursos[i].nombre === nombre){
			return data.cursos[i];
		}
		if(data.cursos[i].duracion === duracion){
			return data.cursos[i];
		}
		if(data.cursos[i].valor === valor){
			return data.cursos[i];
		}
	}
	return false;
};

module.exports = {
	myData, obtenerNombre, mostrarCursos, obtenerCurso
}