
let planilla = document.getElementById('planilla');

function generar(){
    let alumnos = Number(document.getElementById('alumnos').value);
    let notas = Number(document.getElementById('notas').value);

    //ciclo para crear filas
    for(let i = 1; i <= alumnos + 1; i++){
        let tr = document.createElement('tr');

        //validamos si la fila a crear es el encabezado
        if(i===1){
            //ciclo para crear columnas
            for(let j = 1; j <= notas + 3; j++){
                let th = document.createElement('th');
                let titulo;

                if(j===1){ //esta es la columna de orden
                     titulo = document.createTextNode('Orden');
                }else if(j===2){ //columna de estudiante
                    titulo = document.createTextNode('Estudiante');
                }else if(j===notas + 3){ //columna de definitva
                    titulo = document.createTextNode('Def');
                }else{
                    titulo = document.createTextNode('Nota ' + (j - 2));
                }

                th.appendChild(titulo);
                tr.appendChild(th);
            }

            planilla.appendChild(tr);
        }else{
            //ciclo para crear columnas
            for(let j = 1; j <= notas + 3; j++){
                let td = document.createElement('td');
                let elemento;

                if(j===1){ //esta es la columna de orden
                     elemento = document.createTextNode(i - 1);
                }else if(j===notas + 3){ //columna de definitva
                    elemento = document.createElement('span');
                }else{
                    elemento = document.createElement('input');
                }

                td.appendChild(elemento);
                tr.appendChild(td);
            }

            planilla.appendChild(tr);
        }
    }
}