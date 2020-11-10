# PortafolioAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Esquema general:

**src/app/components**
* Carpeta en la que he creado mis componentes

**src/app/routing.ts**
* Fichero que he creado para establecer las diferentes rutas

**src/app/app.component.ts**
* Fichero principal de Angular
* Relaciona componentes y rutas

**src/app/app.component.html**
* Es la vista

**src/assets/styles.scss**
* Creamos esta hoja de estilos
* Elimino la que me había creado angular por defecto
* Hay que especificar la ruta dentro de angular.json
* Las fuentes las importo en ester archivo con @font-face{}

**src/assets/fonts**
* Creo esta carpeta para meter las fuentes que quiero que tenga mi proyecto
* Importamos las fuentes en el archivo de estilos

**src/assets/img**
* Creo estar carpeta para meter las imágenes de proyecto

