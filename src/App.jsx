import './App.css'
import ListaRecetas from './components/listaRecetas'
import { recetas } from './data/recetas'

function App() {
  return (
    <main style={{ padding: '24px 16px 40px' }}>
      <h1 style={{ marginBottom: '8px' }}>Recetapp</h1>
      <p style={{ marginBottom: '24px', color: '#475569' }}>
        Lista de recetas renderizada desde un array con componentes y key.
      </p>

      <ListaRecetas recetas={recetas} />
    </main>
  )
}

export default App
