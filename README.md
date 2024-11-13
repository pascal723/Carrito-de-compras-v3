# Este es mi carrito de compra v3

## Sobre el proyecto:

Mi primer carrito de compra utilazando todo los conceptos de js que vimos hasta ahora en el curso 😁.

## Template

```html
       <template id="template">
			<li class="list-group-item text-uppercase bg-secondary text-white">
				<span class="badge bg-primary rounded-pill align-middle">14</span>
				<span class="lead align-middle">A list item</span>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<div>
					<p class="lead mb-0">Total: $<span>200</span></p>
				</div>
				<div>
					<button class="btn btn-sm btn-success">Agregar</button>
					<button class="btn btn-sm btn-danger">Quitar</button>
				</div>
			</li>
	   </template>
```

```js
const contenedor = document.querySelector("#contenedor");
const template  = document.querySelector("#template");
const footer = document.querySelector("#footer");
const templateFooter = document.querySelector("#templateFooter");
const fragment = document.createDocumentFragment();

const carrito = [];
```

