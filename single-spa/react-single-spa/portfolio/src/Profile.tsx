const Profile = ({ user }) => {

  const icons = user.icons.map((icon, key) => {
    const image = require(`../src/assets/${icon}`);
    
    return <img src={image} alt="icon" key={key}/>
  });

  return (
    <div>
      <ul>
        <li>name: { user.name }</li>
        <li>address: { user.address }</li>
        <li>phone: { user.phone }</li>
        <li style={{ display: 'flex' }}>favorite icons: {icons}</li>
      </ul>
    </div>
  );
}


export default Profile;
