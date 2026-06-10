# DOCUMENTACIÓN COMPLETA - Actividad: (Sistema de Tickets de Soporte)

## 📋 ÍNDICE

1. [Introducción](#-introducción)
2. [Requisitos Previos](#-requisitos-previos)
3. [Creación del Proyecto desde Cero](#-creación-del-proyecto-desde-cero)
4. [Estructura de Archivos](#-estructura-de-archivos)
5. [Configuración del Despliegue Automático](#-configuración-del-despliegue-automático)
6. [Activar GitHub Pages](#️-activar-github-pages)
7. [Verificación Final](#-verificación-final)
8. [Comandos de Referencia Rápida](#-comandos-de-referencia-rápida)

---

## 🎯 INTRODUCCIÓN

Este proyecto es un **Sistema Rápido de Incidencias (Tickets de Soporte)** desarrollado con HTML, CSS y JavaScript Vanilla.

Permite registrar equipos con problemas, mostrarlos en una lista visual y llevar un contador automático de tickets abiertos.

### Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Manipulación del DOM)
* Git
* GitHub
* GitHub Pages (Despliegue automático)

### URL del proyecto desplegado

https://AlexaBuilds.github.io/simulacro/

---

## ✅ REQUISITOS PREVIOS

Antes de comenzar, asegúrate de tener:

* ✅ Cuenta de GitHub activa
* ✅ GitHub CLI (`gh`) instalado y autenticado
* ✅ Git instalado en tu sistema
* ✅ Acceso a terminal (Ubuntu, Debian, PowerShell, etc.)
* ✅ Editor de código (VS Code recomendado)

---

## 🚀 CREACIÓN DEL PROYECTO DESDE CERO

### PASO 1: Crear el repositorio en GitHub desde la terminal

```bash
# Ir al directorio principal
cd ~

# Crear la carpeta del proyecto
mkdir simulacro

# Entrar en la carpeta
cd ~/simulacro

# Inicializar Git
git init

# Crear el repositorio en GitHub usando GitHub CLI
gh repo create simulacro --public --source=. --remote=origin
```

### PASO 2: Crear los archivos del proyecto

```bash
touch index.html style.css script.js
```

**Nota:** El contenido de cada archivo está disponible en este repositorio.

### PASO 3: Subir los archivos iniciales a GitHub

```bash
# Añadir todos los archivos al staging
git add .

# Crear commit inicial
git commit -m "feat: estructura y logica completa del simulacro de examen"

# Asegurar rama principal
git branch -M main

# Subir a GitHub
git push -u origin main
```

---

## 📁 ESTRUCTURA DE ARCHIVOS

La estructura final del proyecto es:

```text
simulacro/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── style.css
├── script.js
└── README.md
```

### Descripción de archivos

| Archivo    | Descripción                              |
| ---------- | ---------------------------------------- |
| index.html | Estructura HTML del formulario y lista   |
| style.css  | Estilos CSS del proyecto                 |
| script.js  | Lógica JavaScript y manipulación del DOM |
| deploy.yml | Configuración de despliegue automático   |
| README.md  | Documentación del proyecto               |

---

## 🌐 CONFIGURACIÓN DEL DESPLIEGUE AUTOMÁTICO

Se utiliza GitHub Actions para desplegar automáticamente el sitio en GitHub Pages cada vez que se realiza un push a la rama `main`.

### PASO 1: Crear la estructura para GitHub Actions

```bash
cd ~/simulacro

mkdir -p .github/workflows
```

**Importante:** GitHub busca obligatoriamente los workflows dentro de `.github/workflows`.

### PASO 2: Crear el archivo deploy.yml

```bash
touch .github/workflows/deploy.yml
```

Abre el archivo y pega el siguiente contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### PASO 3: Subir la configuración a GitHub

```bash
cd ~/simulacro

git add .github/workflows/deploy.yml

git commit -m "ci: agregar workflow para despliegue en GitHub Pages"

git push origin main
```

---

## ⚙️ ACTIVAR GITHUB PAGES

1. Accede al repositorio en GitHub.
2. Ve a **Settings**.
3. Selecciona **Pages**.
4. En **Build and deployment → Source**, selecciona:

```text
GitHub Actions
```

Guarda los cambios si GitHub lo solicita.

---

## ✅ VERIFICACIÓN FINAL

### Verificar el despliegue

1. Ir a la pestaña **Actions**.
2. Esperar a que el workflow finalice correctamente.
3. Confirmar que aparece el indicador verde de éxito.

### Comprobar la aplicación

Abrir:

```text
https://AlexaBuilds.github.io/simulacro/
```

Realizar las siguientes pruebas:

* Crear un ticket válido.
* Verificar que aparece en la lista.
* Confirmar que el contador aumenta.
* Verificar que los campos se limpian tras enviar.
* Intentar enviar campos vacíos.
* Comprobar que se muestra el mensaje de alerta correspondiente.

---

## 📝 COMANDOS DE REFERENCIA RÁPIDA

### Crear el proyecto completo desde cero

```bash
# Crear repositorio local
cd ~
mkdir simulacro
cd ~/simulacro

# Inicializar Git
git init

# Crear repositorio remoto
gh repo create simulacro --public --source=. --remote=origin

# Crear archivos principales
touch index.html style.css script.js

# Crear estructura de GitHub Actions
mkdir -p .github/workflows
touch .github/workflows/deploy.yml

# Subir proyecto
git add .
git commit -m "feat: proyecto completo con despliegue automático"
git branch -M main
git push -u origin main
```

### Actualizar el proyecto tras realizar cambios

```bash
cd ~/simulacro

git add .

git commit -m "fix: descripción del cambio realizado"

git push origin main
```

---

## 📌

Proyecto desarrollado utilizando HTML, CSS, JavaScript, Git, GitHub y GitHub Pages.
