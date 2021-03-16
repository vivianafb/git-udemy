import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import styles from '../containers/App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

  }
  state = {
    persons: [
      { id: "kjrew", name: 'Vivi', age: 20 },
      { id: "adsrew", name: 'Soledad', age: 20 },
      { id: "refrwef", name: 'Eduardo', age: 23 }
    ],
    showPersons: false,
    showCockpit: false,
    changeCounter: 0
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); // Obtener el index del objeto person

    const person = {
      ...this.state.persons[personIndex]
    }; //Copia del objeto person

    person.name = event.target.value;
    //Actualizar el name del person(objeto nuevo)

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    //Actualizar el objeto person

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });


  }

  togglePersonHanlder = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    console.log('[App.js] render')
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;

    }


    return (
      <Aux>
        <button onClick={() => {
          this.setState({ showCockpit: true });
        }}>Remove Cockpit</button>
        {this.state.showCockpit ?
          <Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHanlder}
          /> : null}
        {persons}
      </Aux>

    );



  }
}
export default withClass(App, styles.App);

