// Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. 
// Render this component to the div tag in index.html with an id of app

// GroceryList Component

var GroceryList = (props) => ( // Extends
  <ul>
    {props.items.map(item => <GroceryListItem item = {item} />
    )}
  </ul>
);

// var GroceryListItem = (props) => (
//   <li> {props.item} </li>
// );

// GroceryListItem Component (Class)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };

  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  hoverOn() {
    this.setState({
      hover: true
    })
  }

  hoverOff() {
    this.setState({
      hover: false
    })
  }
  
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} 
      onMouseEnter={this.hoverOn.bind(this)} onMouseLeave={this.hoverOff.bind(this)}> {this.props.item} </li>
    );
  }

}

// <GroceryList groceries={['Cucumbers', 'Kale']}/> creates an instance of the `GroceryList` component

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Cucumbers', 'Kale']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));