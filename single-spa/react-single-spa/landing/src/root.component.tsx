import { Grid } from "./Grid";
import { BrowserRouter } from 'react-router-dom';

export default function Root(props) { 
  const style = {
    'padding-top': '20px',
    'display': 'flex',
    'justify-content': 'center',
    'font-weight': 'bold'
  }
  return (
    <section>
      <BrowserRouter>
        <div style={style}>Get you best animal icon</div>
        <Grid></Grid>
      </BrowserRouter>
    </section>
  );
}
