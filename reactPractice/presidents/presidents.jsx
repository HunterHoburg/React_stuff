var PresidentList = React.createClass({
  getInitialState: function() {
    return {
      presidents: ["Washington", "Adams", "Jefferson", "H. Clinton", "Trump", "Mickey Mouse", "Homer Simpson"]
    }
  },
  setPres: function(e) {
    this.setState({
      newPres: e.target.value
    });
  },
  addPres: function(e) {
    e.preventDefault();
    this.state.presidents.push(this.state.newPres);
    console.log(this.state.presidents);
    e.target.reset();
    e.target.focus();
    this.forceUpdate();
  },
  render: function() {
    var presidentComp = this.state.presidents.map(function(president, index) {
      return <President key={index} presidentName={president}/>
    });
    return (
      <div>
        <ul>
          {presidentComp}
        </ul>
        <AddPresident addPres={this.addPres} setPres={this.setPres}/>
      </div>
    )
  }
});

var AddPresident = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.props.addPres}>
        <input type='text' name='presName' onChange={this.props.setPres}/>
        <input type='submit' name="submit"/>
      </form>
    )
  }
});

var President = React.createClass({
  render: function() {
    return <li>{this.props.presidentName}</li>
  }
});




ReactDOM.render(<PresidentList />, document.getElementById('entry-point'));
