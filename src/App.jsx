import { useMemo, useState } from 'react'
import './App.css'
import FiltroCategoria from './components/FiltroCategoria'
import ListaRecetas from './components/listaRecetas'
import { recetas } from './data/recetas'

function App() {
  const [filtro, setFiltro] = useState('todas')
  const [busqueda, setBusqueda] = useState('')

  const recetasFiltradas = useMemo(() => {
    const textoNormalizado = busqueda.trim().toLowerCase().slice(0, 30)

    return recetas.filter((receta) => {
      const coincideCategoria = filtro === 'todas' || receta.categoria.toLowerCase() === filtro
      const coincideBusqueda =
        textoNormalizado.length === 0 ||
        receta.nombre.toLowerCase().includes(textoNormalizado)

      return coincideCategoria && coincideBusqueda
    })
  }, [busqueda, filtro])

  return (
    <main style={{ padding: '24px 16px 40px' }}>
      <h1 style={{ marginBottom: '8px' }}>Recetapp</h1>
      <p style={{ marginBottom: '24px', color: '#475569' }}>
        Filtra recetas por categoría o busca por nombre.
      </p>

      <FiltroCategoria
        filtroActual={filtro}
        onCambiarFiltro={setFiltro}
        busqueda={busqueda}
        onCambiarBusqueda={setBusqueda}
      />

      {recetasFiltradas.length > 0 ? (
        <ListaRecetas recetas={recetasFiltradas} />
      ) : (
        <p style={{ textAlign: 'center', color: '#64748b', marginTop: '24px' }}>
          No hay recetas que coincidan
        </p>
      )}
    </main>
  )
}

export default App
