# React + Vite

Este proyecto usa una estructura modular por capas, inspirada en Feature-Sliced
Design. La organización agrupa el código por responsabilidad y funcionalidad,
para que la aplicación pueda crecer sin convertir `src` en una colección de
componentes y utilidades mezcladas.

## Estructura

```text
src/
├── app/                         # Arranque, composición global y configuración
│   ├── App.jsx
│   └── styles/
│       └── index.css
├── pages/                       # Pantallas asociadas a rutas
│   └── home/
│       └── ui/
│           ├── HomePage.jsx
│           └── HomePage.css
├── features/                    # Acciones/capacidades con valor de usuario
│   └── counter/
│       └── ui/
│           ├── Counter.jsx
│           └── Counter.css
├── shared/                      # Recursos agnósticos del dominio
│   └── assets/
└── main.jsx                     # Punto de entrada de Vite
```

## Reglas para mantener la arquitectura

- La dirección de dependencias va de arriba hacia abajo:
  `app → pages → widgets/features/entities → shared`.
- Una capa solo importa desde capas inferiores; `shared` nunca depende de una
  página ni de una funcionalidad.
- Cada funcionalidad mantiene junta su interfaz y su lógica. Si crece, puede
  incorporar carpetas `model/`, `api/` o `lib/` dentro de su propio módulo.
- Agrega `entities/` cuando existan conceptos de dominio reutilizados (por
  ejemplo, usuarios o productos), y `widgets/` para secciones grandes
  reutilizadas en varias páginas. No se crean capas o carpetas vacías por
  anticipado.
- `shared/` es solo para piezas verdaderamente genéricas y sin conocimiento del
  negocio; evita usarlo como cajón de sastre.
- Mantén estilos junto a su pantalla o funcionalidad. Los estilos base y tokens
  globales pertenecen a `app/styles/`.

## Desarrollo

```sh
npm run dev
npm run lint
npm run build
```

La aplicación conserva el punto de entrada de Vite y sus comandos habituales.
