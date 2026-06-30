/**
 * Props esperadas para la tarjeta de receta:
 * - nombre: nombre de la receta
 * - origen: lugar o cultura de la receta
 * - porciones: cantidad de personas que rinde
 * - categoria: tipo de receta, por ejemplo entrada o postre
 * - descripcion: resumen breve de la receta
 * - ingredientes: lista de ingredientes en arreglo o texto separado por comas
 */

const getCategoryStyle = (categoria = '') => {
  const categoriaNormalizada = categoria.toLowerCase().trim()

  if (categoriaNormalizada === 'entrada') {
    return {
      borderColor: '#16a34a',
      background: '#f0fdf4',
      tagBackground: '#22c55e',
      tagColor: '#ffffff',
    }
  }

  if (categoriaNormalizada === 'postre') {
    return {
      borderColor: '#db2777',
      background: '#fdf2f8',
      tagBackground: '#ec4899',
      tagColor: '#ffffff',
    }
  }

  return {
    borderColor: '#64748b',
    background: '#f8fafc',
    tagBackground: '#475569',
    tagColor: '#ffffff',
  }
}

const normalizarIngredientes = (ingredientes) => {
  if (Array.isArray(ingredientes)) {
    return ingredientes.filter(Boolean)
  }

  if (typeof ingredientes === 'string') {
    return ingredientes
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
  }

  return []
}

function RecetaCard({
  nombre = 'Receta sin nombre',
  origen = 'Origen no registrado',
  porciones = 'Porciones no indicadas',
  categoria = 'General',
  descripcion = 'Descripción pendiente.',
  ingredientes = [],
}) {
  const estilos = getCategoryStyle(categoria)
  const listaIngredientes = normalizarIngredientes(ingredientes)

  return (
    <article
      style={{
        border: `2px solid ${estilos.borderColor}`,
        background: estilos.background,
        borderRadius: '16px',
        padding: '20px',
        maxWidth: '420px',
        margin: '24px auto',
        boxShadow: '0 8px 20px rgba(15, 23, 42, 0.08)',
        textAlign: 'left',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '6px 10px',
            borderRadius: '999px',
            background: estilos.tagBackground,
            color: estilos.tagColor,
            fontSize: '0.85rem',
            fontWeight: '700',
            textTransform: 'capitalize',
          }}
        >
          {categoria}
        </span>
        <span style={{ color: '#475569', fontSize: '0.95rem' }}>{origen}</span>
      </div>

      <h3 style={{ margin: '14px 0 8px', color: '#0f172a' }}>{nombre}</h3>
      <p style={{ margin: '0 0 10px', color: '#334155', lineHeight: 1.5 }}>{descripcion}</p>

      <p style={{ margin: '0 0 12px', fontWeight: '600', color: '#1e293b' }}>
        Porciones: {porciones}
      </p>

      <h4 style={{ margin: '0 0 8px', color: '#0f172a' }}>Ingredientes</h4>
      {listaIngredientes.length > 0 ? (
        <ul style={{ margin: '0', paddingLeft: '20px', color: '#334155' }}>
          {listaIngredientes.map((ingrediente, index) => (
            <li key={`${ingrediente}-${index}`} style={{ marginBottom: '4px' }}>
              {ingrediente}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ margin: '0', color: '#64748b' }}>Sin ingredientes registrados.</p>
      )}
    </article>
  )
}

export default RecetaCard
