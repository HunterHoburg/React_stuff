var FormComp = React.createClass({
  submitOveride: function(e) {
    e.preventDefault();
    console.log("SO AWESOME!!");
  },
  printKeyCode: function(e) {
    console.log(e.keyCode);
  },
  printNativeEvent: function(e) {
    console.log(e);
  },
  render: function() {
    return (
      <form id="awesome" onSubmit={this.submitOveride}>
        <input id='textStuff' type="text" onKeyDown={this.printKeyCode}/>
        <input type="checkbox" onChange={this.printNativeEvent}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div>
        <FormComp />
        <button onClick={alert.bind(null, "hello there")}>Button</button>
      </div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById('entry-point'));
