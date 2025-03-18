# Amigo Secreto

## Descripción
Esta aplicación permite a los usuarios ingresar nombres de amigos en una lista y luego realizar un sorteo aleatorio para determinar quién es el "amigo secreto".

## Características
- **Agregar nombres**: Los usuarios pueden escribir nombres y agregarlos a una lista visible.
- **Validación de entrada**: Se asegura que el campo no esté vacío y se limita el número de participantes a 10.
- **Conteo regresivo**: Antes del sorteo, se muestra una cuenta regresiva de 3 segundos.
- **Sorteo aleatorio**: Se selecciona un nombre de forma aleatoria y se muestra en pantalla.
- **Nuevo sorteo**: Se permite realizar un nuevo sorteo usando la misma lista o reiniciar para ingresar nuevos nombres.

## Tecnologías Utilizadas
- **HTML**: Estructura del documento.
- **CSS**: Estilos y diseño responsivo.
- **JavaScript**: Lógica del sorteo y manipulación del DOM.

## Instalación y Uso
1. Clonar este repositorio:
   ```sh
   git clone https://github.com/usuario/amigo-secreto.git
   ```
2. Abrir el archivo `index.html` en un navegador.
3. Ingresar nombres y presionar "Añadir".
4. Una vez completada la lista, hacer clic en "Sortear Amigo".
5. Seguir las instrucciones para realizar un nuevo sorteo si se desea.

## Estructura del Proyecto
```
Amigo-Secreto/
├── assets/           # Imágenes y recursos
├── index.html        # Archivo principal
├── style.css         # Estilos de la aplicación
├── app.js            # Lógica de la aplicación
├── README.md         # Documentación
```

## Mejoras Futuras
- Permitir establecer restricciones de asignación entre amigos.
- Exportar la lista de amigos y resultados en un archivo.
- Agregar efectos visuales durante el sorteo.

## Autor
- **[Tu Nombre]** - Desarrollo y documentación.

## Licencia
Este proyecto se distribuye bajo la licencia MIT. Puedes ver más detalles en el archivo `LICENSE`.
