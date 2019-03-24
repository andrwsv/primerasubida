const opciones ={
	id:{
		alias:'i',
		demand: true
	},
	nombre:{
		alias:'n',
		demand: true
	},
	cedula:{
		alias:'x',
		demand: true
	}
};

const opcionesbuscar ={
	id:{
		default:0,
		alias:'i',
	},
	nombre:{
		default:'',
		alias:'n',
	},
	duracion:{
		default:'',
		alias:'d',
	},
	valor:{
		default:0,
		alias:'v',
	}
};


const {myData, obtenerNombre, mostrarCursos, obtenerCurso} = require('./cursos');


const express = require('express')
const app = express()
 
let inscribir = (data)=>{
	texto = "El estudiante "+data.n+" con cedula "+data.x+" se a matriculado en el curso "+obtenerNombre(myData,data.i)+" ";
	
	app.get('/', function (req, res) {
	  res.send(texto)
	})
	 
	app.listen(3000)

	/*fs.writeFile('inscribir.txt',texto,(err)=>{
		if(err) throw(err);
		console.log("se creo el archivo");
	});*/
};

let buscar = (data) =>{
	//console.log(id.id);
	var result = obtenerCurso(myData,data.id,data.nombre,data.duracion,data.valor);
	//console.log(result);
	if(!result){
		console.log("No existe ese curso.");
	}else{
		inscribir(data);
		//console.log("Curso con id "+result.idx+" se llama "+result.nombre+" tiene una duracion de "+result.duracion+" y un valor de $"+result.valor);	
	}
}


const fs = require('fs');
const argv = require('yargs')
					.command('$0','Mostrar cursos', (argv) =>{}, (argv)=>{
																			mostrarCursos(myData, function(result){
																				//console.log(result.idx);
																				console.log ("Seleccione el curso a inscribirse: \n");
																				console.log("Curso con id "+result.idx+" se llama "+result.nombre+" tiene una duracion de "+result.duracion+" y un valor de $"+result.valor);

																			});
																	} 
							)
					.command('inscribir','Inscribir estudiante', opciones, (argv)=>{
																						buscar(argv);//inscribir(argv);
																					})
					/*.command('buscar','buscar curso', opcionesbuscar, (argv)=>{
																					buscar(argv);
																				})*/
					.argv




