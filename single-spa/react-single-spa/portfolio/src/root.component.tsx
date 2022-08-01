import Profile from "./Profile";

export default function Root(props) {
  const user = {
    name: 'Vova',
    address: 'Lviv',
    phone: '888-999',
    icons: ['Crab.svg']
  }

  return (
    <section>
      <Profile user={user}/>
    </section>
  )
}
