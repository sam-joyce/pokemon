import React, { Component } from 'react';
import './App.css';
import CardList from '../../components/CardList/CardList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CardList />
      </div>
    );
  }
}

