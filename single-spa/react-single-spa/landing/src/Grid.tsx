import { animals } from '../src/data.js';
import { useNavigate  } from "react-router-dom";

export const Grid = () => {
  let navigate = useNavigate();

  const showDetailt = ({ id }) => {
    navigate(`/icons/?${id}`);
  }

  const style = {
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr',
    'grid-template-rows': '100px',
    'grid-gap': '20px',
    'padding': '15px',
    'justify-items': 'center',
    'align-items': 'center'
  }

  const grid = animals.map((animal, i) => {
    return (
      <div key={i} onClick={() => showDetailt(animal)} style={{ cursor: 'pointer'}}>
        <div>{animal.name}</div>
        <div>{animal.decs}</div>
        <img src={animal.img} alt={animal.name} style={{ height: '50px' }}></img>
      </div>
    )
  })
  return (
    <div style={style}>{grid}</div>
  )
}