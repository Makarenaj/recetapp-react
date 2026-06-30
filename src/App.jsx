import './App.css'
import RecetaCard from './components/RecetaCard'

function App() {
  return (
    <main style={{ padding: '24px 16px 40px' }}>
      <h1 style={{ marginBottom: '8px' }}>Recetapp</h1>
      <p style={{ marginBottom: '24px', color: '#475569' }}>
        Ejemplo visual de una tarjeta de receta con props y estilos según la categoría.
      </p>

      <RecetaCard
        nombre="Tostadas de palta"
        origen="Chile"
        porciones={2}
        categoria="Entrada"
        descripcion="Una entrada fresca y fácil de preparar con palta, tomate y pan tostado."
        ingredientes={['Palta', 'Tomate', 'Pan', 'Limón', 'Sal']}
      />

      <RecetaCard
        nombre="Torta de chocolate"
        origen="Argentina"
        porciones={8}
        categoria="Postre"
        descripcion="Un postre húmedo y muy agradable para compartir en familia."
        ingredientes={['Harina', 'Azúcar', 'Cacao', 'Huevos', 'Leche']}
      />
    </main>
  )
}

export default App
