import { FC } from "react";
import { Size } from "chillhood"

export interface SizeMeasuresProps {
  sizes: Size[]
}


export const SizeMeasures: FC<SizeMeasuresProps> = ({ sizes }) => {
  return (
    <div className="measures">
      <table>
        <tbody>
          <tr>
            <th>Talla</th>
            {sizes.map((size, index) => <td key={index}>{size.label}</td>)}
          </tr>
          <tr>
            <th>Largo (cm)</th>
            {sizes.map((size, index) => <td key={index}>{size.body}</td>)}
          </tr>
          <tr>
            <th>Ancho (cm)</th>
            {sizes.map((size, index) => <td key={index}>{size.chest}</td>)}
          </tr>
          <tr>
            <th>Mangas (cm)</th>
            {sizes.map((size, index) => <td key={index}>{size.sleeve}</td>)}
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        .measures {
          width: 100%; 
          display: flex;
          justify-content: center;
        }
        table {
          width: 95%;
          border-collapse: collapse;
        }
        th {
          text-align: left;
          text-transform: uppercase;
          font-size: 0.6rem;
          font-weight: var(--font-weight);
          padding: 0.3rem;
        }
        td {
          padding: 0.3rem;
          font-weight: var(--font-weight);
          font-size: 0.6rem;
        }

        tr {
          border-bottom: 1px solid var(--border-light);
        }

       
        
      `}</style>
    </div>
  )
}

export default SizeMeasures