# AppNtd

> Aplicación web para el registro de clientes y venta de productos de un negocio predeterminado.


## Instrucciones de ejecución

Luego de clonar el repositorio, realizar: 

`npm update`

Para utilizarlo por medio de firebase, cambiar la configuración en environments.ts.

## Build

Realizar el build del proyecto con `ng build --prod`

Posteriormente, hacer `firebase deploy`

## Local

Para ejecutar el proyecto localmente, `ng serve -o`

El proyecto se cargará en `http://localhost:4200/`

## Version de angular utilizada:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Manual de usuario

Luego de ejecutar la aplicación, ingresar en el navegador, bien sea en local o en la url de firebase

![Alt Text](https://raw.github.com/Alonsso/ntd-proyectofinal/master/src/assets/images/1.png)

Por ser la primera vez que ingresa, proceder a registrarse.

*Ingresar por medio de registrarse en la barra de navegación*

![Alt Text](https://raw.github.com/Alonsso/ntd-proyectofinal/master/src/assets/images/2.png)

Llenar los datos de registro.

![Alt Text](https://raw.github.com/Alonsso/ntd-proyectofinal/master/src/assets/images/3.png)

La aplicación lo devuelve al inicio de sesión, y procede a ingresar.

![Alt Text](https://raw.github.com/Alonsso/ntd-proyectofinal/master/src/assets/images/4.png)

En primer lugar, estaremos en la página de productos.

Allí verá cada uno de los productos en venta.

![Alt Text](https://raw.github.com/Alonsso/ntd-proyectofinal/master/src/assets/images/5.png)

Al selecionar un producto, será redirigido a la página de detalle del producto

![Alt Text](https://raw.github.com/Alonsso/ntd-proyectofinal/master/src/assets/images/6.png)

Podrá seleccionar la cantidad deseada.

![Alt Text](https://raw.github.com/Alonsso/ntd-proyectofinal/master/src/assets/images/7.png)

Y agregar el carrito de compras.

Luego, al ingresar al carrito de compras, tendrá los productos seleccionados con su cantidad y precio a pagar.

![Alt Text](https://raw.github.com/Alonsso/ntd-proyectofinal/master/src/assets/images/8.png)

Por último, se llenan los datos de envío, y con el boton *IR A PAGAR*, seremos dirigidos a la página de compra que se desse implementar luego.

![Alt Text](https://raw.github.com/Alonsso/ntd-proyectofinal/master/src/assets/images/9.png)
