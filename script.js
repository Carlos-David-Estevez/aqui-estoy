# Aquí estoy

Una página sencilla para que, según cómo se sienta tu pareja, suene un audio tuyo distinto pensado para ese momento.

## 1. Graba tus audios

Nombra los archivos exactamente así y colócalos dentro de la carpeta `audios/`:

| Momento en la web | Archivo que debe existir |
|---|---|
| "No paro de pensar" | `audios/agobiada-1.mp3` |
| "Algo me ha sobresaltado" | `audios/ruido-1.mp3` |
| "He mirado la hora" | `audios/tarde-1.mp3` |
| "Solo quiero oírte" | `audios/generico-1.mp3` |

Consejos rápidos para grabar (puedes usar el móvil):
- Graba en una habitación silenciosa, sin eco (una habitación con tela/ropa absorbe mejor el sonido que una vacía).
- Acerca el móvil a la boca (15–20 cm) y habla bajito, como si ya estuvieras susurrando para no despertarla.
- Habla despacio, con pausas largas. Más lento de lo que te sale natural.
- Exporta o guarda en formato `.mp3`. Si el móvil graba en `.m4a`, puedes convertirlo gratis en una web como CloudConvert, o simplemente cambia la ruta en `script.js` (ver punto 3).

## 2. Puedes añadir varios audios por momento

Si grabas más de una versión (por ejemplo dos noches distintas), añádelas todas: la web elegirá una al azar cada vez que se abra ese momento. Edita `script.js` y añade la ruta al array `tracks`, por ejemplo:

```js
agobio: {
  title: "No paro de pensar",
  desc: "Respira. Aquí tienes mi voz, solo para ti.",
  tracks: ["audios/agobiada-1.mp3", "audios/agobiada-2.mp3"],
  loop: true,
},
```

## 3. Cambiar nombres, textos o añadir un momento nuevo

Todo el contenido de texto y las rutas de audio están en `script.js`, en el objeto `MOMENTS` al principio del archivo. Para añadir un momento nuevo, cópialo también en `index.html` dentro de la sección `<section class="moments">` (copia uno de los botones `<button class="moment-card" ...>` que ya existen y cambia el `data-moment`, el icono, el título y la descripción).

## 4. Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser privado si prefieres que solo vosotros tengáis acceso, aunque ten en cuenta que GitHub Pages en repos privados requiere plan de pago; si es público, cualquiera con el enlace podrá reproducir los audios).
2. Sube **todos** estos archivos manteniendo la estructura de carpetas: `index.html`, `style.css`, `script.js`, `README.md` y la carpeta `audios/` con tus archivos `.mp3` dentro.
3. Ve a **Settings → Pages** en el repositorio.
4. En "Build and deployment", elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guarda.
5. Espera 1–2 minutos. GitHub te dará una URL del tipo `https://tu-usuario.github.io/tu-repositorio/`.
6. Comparte ese enlace con ella (o guárdalo en su móvil como acceso directo en la pantalla de inicio, así se abre como una app).

## Notas

- Los navegadores móviles no dejan reproducir audio automáticamente sin que la persona toque algo primero; por eso hay que tocar la tarjeta del momento, y a partir de ahí ya funciona el play/pausa normal.
- El temporizador de "apagar solo" baja el volumen poco a poco antes de pausar el audio, para que no corte de golpe.
- Si un archivo de audio no existe todavía o el nombre no coincide, la web lo avisa en pantalla en vez de fallar en silencio.
- Si quieres que el repositorio sea privado y aun así sea gratis, una alternativa es subir los mp3 a una carpeta compartida (Google Drive, etc.) y cambiar las rutas en `script.js` por esos enlaces directos — funciona igual, aunque perderás el aviso de "audio no encontrado" tan claro.
