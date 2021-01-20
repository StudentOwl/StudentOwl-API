# StudentOwl-API

## API del proyecto

## Nueva estructura del proyecto

Se _reescribio_ todo el codigo, para dar uso de las nuevas caracteristicas de **JavaScript moderno**, se implemento manejadores de **errores** y **Loggers**, ademas de configurar `.env` correctamente.

## Comandos

### Install depedencies

Para poder usar el proyecto se debe instalar las depensendias

```bash
npm install
```

Si NPM no instala las dependencias de desarrollo como `babel-core`, ejecuta el siguiente comando:

```bash
npm install --dev
```

Ademas de configurar las variables de entorno.

Crearemos un archivo `.env` a nivel del proyecto.

> En el archivo `.env.dist` se enecuentra la plantilla de las variables de etorno.

Ya est listo para continuar...

### Development

Para ejecutar el servidor en modo desarrollo ejecutar:

```bash
npm run dev
```

### Test

Para comprobar las pruebas unitarias

```bash
npm run test
```

### Build

Para compilar el proyecto ejecutar:

```bash
npm run build
```

## Ruta de Endpoints

A continuación se muestra el diagrama del estado actual de los endpoints existentes:

![Endpoints diagram](./docs/StundentOwl-API-Endpoints.png)

### Variables

`:component`: Codigo del componente academico -> `AAAA00`

`:code`: Codigo del componente academico -> `AAAA00`

`:student`: Id del estudiante -> `ablopez`

`:msStart`: Fecha inicial de busqueda en ms -> `1234567890123`

`:msStart`: Fecha final de busqueda en ms -> `1234567890123`

### Definicion de los endpoints

Comprueba que la API este _online_

> `/api/v1.0/ping`

Devuelve todos los componentes academicos

> `/api/v1.0/components/all`

Crea un nuevo componente academico

> `/api/v1.0/components/new`

Devuelve un componente academico

> `/api/v1.0/components/AAAA00`

Devuelve todos los _logs_

> `/api/v1.0/logs/all`

Filtra los _logs_ por componente, estudiante y tiempo

> `/api/v1.0/logs/all?component=AAAA00`

> `/api/v1.0/logs/all?student=ablopez`

> `/api/v1.0/logs/all?component=AAAA00&student=ablopez`

> `/api/v1.0/logs/all?msStart=1234567890123`

> `/api/v1.0/logs/all?msStart=1234567890123&msEnd=1234567890123`

> `/api/v1.0/logs/all?component=AAAA00&student=ablopez&msStart=1234567890123&msEnd=1234567890123`

Registra una lista de nuevos _logs_

> `/api/v1.0/logs/new`

Devuelve todos los _logs_ del componente AAAA00

> `/api/v1.0/logs/AAAA00`

Filtra los _logs_ del componente AAAA00 por tiempo

> `/api/v1.0/logs/AAAA00?msStart=1234567890123`

> `/api/v1.0/logs/AAAA00?msStart=1234567890123&msEnd=1234567890123`

Devuelve todos los _logs_ del componente AAAA00 pertenecientes al estudiante ablopez

> `/api/v1.0/logs/AAAA00/ablopez`

Filtra los _logs_ del componente AAAA00 pertenecientes al estudiante ablopez segun un periodo temporal

> `/api/v1.0/logs/AAAA00/ablopez?msStart=1234567890123`

> `/api/v1.0/logs/AAAA00/ablopez?msStart=1234567890123&msEnd=1234567890123`

## Deploy in

[`Heroku`](https://api-studentowl.herokuapp.com/)
