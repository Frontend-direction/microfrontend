import React from 'react';

const App = props => {
  const buttonClick = () => {
    const onClick = props.onClick;
    if (onClick) {
      onClick();
    } else {
      console.log('button is clicked');
    }
  };
  return (
    <div style={{padding: '50px 12px', display: 'flex'}}>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/react-firebase-basic.appspot.com/o/hotel1.jpg?alt=media&token=e1ffa47a-268a-42a1-8da4-8b954b9ffaa9'
      />
      <img
        src='https://firebasestorage.googleapis.com/v0/b/react-firebase-basic.appspot.com/o/hotel2.jpg?alt=media&token=45ec4e54-d2fe-442f-8b02-a841200c7f54'
      />
      <img
        image='https://firebasestorage.googleapis.com/v0/b/react-firebase-basic.appspot.com/o/hotel3.jpg?alt=media&token=6d10b7d1-e2b8-4c0a-bd7b-c4212530bc43'
      />
    </div>
  );
};

export default App;
