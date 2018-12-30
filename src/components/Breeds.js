import React from 'react';

class Breeds extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

 render() {
  console.log(this.props.breeds)
  return (
   <div></div>
  );
 }
}


export default Breeds;
