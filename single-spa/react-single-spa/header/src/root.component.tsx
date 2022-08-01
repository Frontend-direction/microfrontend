import Header from "./Header";
import UserProfile from "./UserProfile";
import { BrowserRouter } from 'react-router-dom';


export default function Root(props) {
  return (
    <section>
      <BrowserRouter>
        <Header>
          <UserProfile></UserProfile>
        </Header>
      </BrowserRouter>
    </section>
  );
}
