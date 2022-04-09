const llenarCombo =()=> {
       let contenidoCombo =""

       fetch('https://jsonplaceholder.typicode.com/users')
       
       .then(response => response.json())
       .then(data => {
              data.forEach(user => {
                     contenidoCombo += "<option value=" + user.id +">" +user.name+"</option>"; 
              })
              document.getElementById("combo").innerHTML =    contenidoCombo;
       })
}
window.addEventListener("load",llenarCombo);

const obtenerTitulos =() => {
       event.preventDefault();
       let userId = document.getElementById('combo').value;

       fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/albums')
       .then(response => response.json())
       .then (data => {
              let contenidoTabla = "";

              data.forEach(tabla => {
                     contenidoTabla += "<tr><td><input type='checkbox'></td><td>"+ tabla.id + "</td><td>";
                     contenidoTabla += tabla.userId +"</td><td>" + tabla.title + "</td></tr>";
              }
              )
              document.getElementById("contenidoTabla").innerHTML = contenidoTabla;
       })
}
document.getElementById("combo").addEventListener("change",obtenerTitulos)



