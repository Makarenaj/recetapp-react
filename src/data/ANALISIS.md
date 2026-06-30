# Análisis simple de la app de recetas

## Tabla de uso de React en la aplicación

| Elemento | ¿Dónde se usará en la app? | Frase corta |
|---|---|---|
| Componente | Se usará para dividir la app en partes más pequeñas, como el filtro, la lista de recetas y cada tarjeta. | Cada parte de la app tendrá su propio componente. |
| JSX | Se usará para escribir la estructura visual de la app con etiquetas como h1, button, img y section. | JSX permite mostrar la interfaz en pantalla. |
| Props | Se usarán para enviar datos de un componente padre a uno hijo, como la lista de recetas o el nombre de la categoría. | Las props llevan información de un lado a otro. |
| Estado (useState) | Se usará para guardar cambios, por ejemplo la categoría seleccionada o las recetas que se muestran. | useState guarda datos que pueden cambiar. |
| Renderizado de listas (.map + key) | Se usará para mostrar muchas recetas desde un arreglo, una debajo de otra. | .map recorre la lista y muestra cada receta. |
| Renderizado condicional | Se usará para mostrar un mensaje cuando no haya recetas en una categoría. | Si no hay datos, se muestra un aviso. |

## ¿Por qué dividir la app en componentes?

Es más claro y más ordenado. Si todo está en un solo archivo, se vuelve largo y difícil de leer. Al separar la app en componentes, cada parte hace una sola tarea y es más fácil corregir o cambiar algo.

## Diferencia entre props y estado

Las props sirven para recibir información desde afuera. El estado sirve para guardar información que cambia dentro del componente.

### Ejemplo simple de props

En la app, el componente ListaRecetas puede recibir una lista de recetas como prop desde App. Eso permite mostrar las recetas sin escribir todo dentro del mismo archivo.

### Ejemplo simple de estado

En App se puede guardar con useState la categoría que el usuario eligió. Cuando cambia esa categoría, la app vuelve a mostrar solo las recetas correctas.

## Justificación simple

Esta forma de trabajar ayuda a construir una app más organizada. También hace que el código sea más fácil de entender, probar y modificar. En una app de recetas, esto es útil porque hay varias partes: filtro, lista, tarjetas y contenido de cada receta.
