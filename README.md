# Portafolio Personal - Constanza Olivos Fernández

Este repositorio contiene el código fuente de mi portafolio personal, desarrollado con **Astro** y **Tailwind CSS v4**. El proyecto está estructurado para separar el código fuente de la versión compilada lista para producción.

## Tecnologías Utilizadas

* **Astro:** Framework web para optimización y velocidad.
* **Tailwind CSS (v4):** Estilizado moderno utilizando las nuevas directivas `@theme` y `@import`.
* **TypeScript:** Para un código más robusto y seguro.

## Estructura del Proyecto

El proyecto tiene una organización específica para mantener el orden:

## Instalación de Dependencias

Antes de ejecutar el proyecto, es necesario instalar las dependencias de Node.  
Asegúrate de estar dentro de la carpeta **codigo**, que es donde está el `package.json`.

```bash
cd codigo
npm install
```

Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo con:

```bash
cd codigo
npm run dev
```

Esto abrirá el sitio en modo local en:

http://localhost:4321

## Construcción (Build) para Producción

Cuando quieras generar la versión final del sitio (la que se sube a internet), ejecuta:

```bash
cd codigo
npm run build
```

## Link de la pagina

https://coniiii.github.io/Portafolio/

```text
/
├── codigo/             # <--- AQUÍ se trabaja (Source Code)
│   ├── src/            # Componentes, páginas y estilos (global.css)
│   ├── public/         # Assets públicos (CV, imágenes, SVGs)
│   ├── package.json    # Dependencias y scripts
│   └── astro.config.mjs # Configuración (apunta a ../web)
│
└── docs/                # <--- AQUÍ se genera el sitio (Build Output)
    └── (Archivos HTML/CSS/JS listos para publicar)

