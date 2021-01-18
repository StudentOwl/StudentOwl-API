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

- `/api/v1.0/ping`
- `/api/v1.0/components/all`
- `/api/v1.0/components/new`
- `/api/v1.0/components/AAAA00`
- `/api/v1.0/AAAA00`
- `/api/v1.0/AAAA00/1234567890123`
- `/api/v1.0/AAAA00/1234567890123-1234567890123`
- `/api/v1.0/AAAA00/ablopez`
- `/api/v1.0/AAAA00/ablopez/1234567890123`
- `/api/v1.0/AAAA00/ablopez/1234567890123-1234567890123`
