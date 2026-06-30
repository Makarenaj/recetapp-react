function FiltroCategoria({ filtroActual, onCambiarFiltro, busqueda, onCambiarBusqueda }) {
  const categorias = ['todas', 'entrada', 'fondo', 'postre']

  return (
    <div style={{ marginBottom: '20px', display: 'grid', gap: '12px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        {categorias.map((categoria) => {
          const seleccionada = filtroActual === categoria
          return (
            <button
              key={categoria}
              type="button"
              onClick={() => onCambiarFiltro(categoria)}
              style={{
                padding: '8px 12px',
                borderRadius: '999px',
                border: `1px solid ${seleccionada ? '#2563eb' : '#cbd5e1'}`,
                background: seleccionada ? '#dbeafe' : '#ffffff',
                color: seleccionada ? '#1d4ed8' : '#334155',
                fontWeight: 600,
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
            >
              {categoria}
            </button>
          )
        })}
      </div>

      <input
        type="text"
        value={busqueda}
        onChange={(event) => onCambiarBusqueda(event.target.value)}
        placeholder="Buscar por nombre"
        style={{
          padding: '10px 12px',
          borderRadius: '10px',
          border: '1px solid #cbd5e1',
          maxWidth: '320px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />
    </div>
  )
}

export default FiltroCategoria
