import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Num1: '', Num2: '', Result: '' };
  }

  Add = () => {
    var n1 = parseInt(this.state.Num1);
    var n2 = parseInt(this.state.Num2);
    var sum = n1 + n2;
    this.setState({ Result: sum });
  }

  render() {
    return (
      // <div>
      //   <h1 data-testid="MyHeading">Welcome to JEST</h1>
      //   <br></br>
      //   <b data-testid="MyBold">Hello Kathir</b>
      // </div>
      <div className='form container-fluid'>
        <h1 data-testid="Heading">Addition of Two numbers</h1>
        <br></br>
        <label data-testid="lblNumOne" className='h3'>Enter no one</label><input data-testid="txtNumOne" type='number' value={this.state.Num1} onChange={(e) => { this.setState({ Num1: e.target.value }); }} />
        <br></br>
        <label data-testid="lblNumTwo" className='h3'>Enter no two</label><input data-testid="txtNumTwo" type='number' value={this.state.Num2} onChange={(e) => { this.setState({ Num2: e.target.value }); }} />
        <br></br>
        <input data-testid="btnSubmit" type='submit' value="Addition" className='btn btn-success' onClick={this.Add} />
        <br></br>
        <b data-testid="Result" className='display-1'>Sum : {this.state.Result}</b>
      </div>
    );
  }
}
export default App;
