# Proyecto base para la creación de API Rest con TypeScript

> 💡 Pesando para proyectos de pequeña escala (**folder-by-type**).

Features:

- Ejemplo CRUD de api de diarios
- Validación de datos con express-validator
- Layer architecture (folder-by-type)
- Implementación y configuración de Jest (Unit Tests)
- Utility types (interfaces y enums)
- Implementación y configuración de ESlint y Prettier
- Configuración de scripts en package.json

## Correr la App

```
#Instalar las dependencias
npm install

#Correr el proyecto en puerto 3000
npm run dev

#Generar el build
npm run tsc

#Correr el build generado
npm run start
```

## Test

```
#Ejecutar los tests unitarios use:
npm run test
```

Linting:

```
#Ejecutar el linter use:
npm run lint:check

# Para realizar correcciones
npm run lint:fix
```