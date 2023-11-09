export async function getInformation(edad,tiempo,presupuesto,motivo) {
    try {
      const response = await fetch('src/data.json')
      const data = await response.json()
      if (!response.ok) {
          throw new ('Paso algo mal')
      }
      return data.find(item => {
        if (edad === item.Edad && tiempo === item.Tiempo && presupuesto === item.Presupuesto && motivo === item.Motivo) {
          return item
        }
      } )
            
    } catch (error) {
        console.log(error.message);
        
    }
  
  }
  