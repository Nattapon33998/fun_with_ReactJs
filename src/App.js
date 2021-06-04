import React, { Component } from 'react'

export default class App extends Component {
  render() {

    const var1 = 0;
    const var2 = "hi";
    const var3 = false;

    return (
      <div>
        <h1>Nattapon {var1}</h1>
        <h1>Nattapon {var2}</h1>
        <h1>Nattapon {var3 && "yes"}</h1>
        {var3 ? <h1>yes</h1> : <h1>No</h1>}
      </div>
    )
  }
}
