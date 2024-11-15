const contenedor = document.querySelector("#contenedor");
const template  = document.querySelector("#template");
const footer = document.querySelector("#footer");
const templateFooter = document.querySelector("#templateFooter");
const fragment = document.createDocumentFragment();

let carrito = [];

const AgregarProductoCarrito = (e) =>{
 const producto ={
    id:e.target.dataset.fruta,
    titulo:e.target.dataset.fruta,
    cantidad:1,
    precio:e.target.dataset.precio,   
 };
 const posicion = carrito.findIndex((item) => item.titulo === producto.titulo);
 if (posicion === -1){
     carrito.push(producto);
 } else {
     carrito[posicion].cantidad++;
 };

 mostrarCarrito();

};

const mostrarCarrito = () => {
    contenedor.textContent = "";
    carrito.forEach((item) => {
      const clone = template.content.cloneNode(true);
      clone.querySelector(".list-group-item .lead").textContent = item.titulo;
      clone.querySelector(".badge").textContent = item.cantidad;
      clone.querySelector(".lead span").textContent = item.precio * item.cantidad;
      clone.querySelector(".btn-success").dataset.fruta = item.titulo
      clone.querySelector(".btn-danger").dataset.fruta = item.titulo

      fragment.appendChild(clone);
   
    }); 

contenedor.appendChild(fragment);

 mostrarFooter();  

};

const mostrarFooter = () => {
    footer.textContent = "";
  const total =carrito.reduce((acc, current) =>{ 
    return acc + current.cantidad * current.precio;
  },0)
  console.log(total)
   const clone = templateFooter.content.cloneNode(true);
   clone.querySelector(".lead span").textContent = total;

   footer.appendChild(clone);
};

const btnAumentar = (e) =>{
    carrito.forEach((item) =>{
       if (e.target.dataset.fruta === item.titulo) {
          item.cantidad ++;
       } 
    });
  
   mostrarCarrito();

};
const btnQuitar = (e) => {
   carrito = carrito.filter((item)=>{
    if (e.target.dataset.fruta === item.titulo) {
        item.cantidad--;
      if (item.cantidad === 0) return;
    }
     return item;
   })

mostrarCarrito();

};

document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-primary")) {
      AgregarProductoCarrito(e);
    };   
   if (e.target.matches(".btn-success")) {
       btnAumentar(e);
   };  
   if (e.target.matches(".btn-danger")) {
      btnQuitar(e);
   };   
});


