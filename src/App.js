import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'
import RenderPropsPattern from './renderPropsPattern/Index'
import HigherOrderCmpPattern from './higherOrderCmpPattern/Index'

class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => { 
          return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character]})
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <h1>characters list1</h1>
        <Table characterData={characters} 
               removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
        <hr/>
        
        <h1>Render Props Design Pattern</h1>
        <RenderPropsPattern />
        <hr/>

        <h1>High Order Components Design Pattern</h1>
        <HigherOrderCmpPattern />
      </div>
    )
  }
}

export default App;