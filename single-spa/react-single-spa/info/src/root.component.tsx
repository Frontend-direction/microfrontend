import { animals } from '../src/data.js';

export default function Root() {
  const [_,queryId] = window.location.search.split('?');  
  const animal = animals.find(({id}) => id === parseInt(queryId, 10));

  return (
    <section>
      <div>You could download icon of { animal.name }:</div>
      <div>Description: { animal.desc }</div>
      <img src={animal.img} alt={animal.name} />
    </section>
  );
}
