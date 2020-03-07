import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from "../Card/Card";
import { firestore } from "../../firebase";
import SearchBar from "./SearchBar/SearchBar";

export default class CardList extends Component {

  state = {
    pokemon: [],
    searchText: "",
    filteredPokemon: []
  }

  setSearchText = (event)  => {
    const searchText = event.target.value;
    this.setState({ searchText }, this.filteredPokemon)
  }

  filteredPokemon = () => {
    let filteredPokemon = this.state.pokemon.filter(pokemon => {
      return pokemon.name.includes(this.state.searchText);
    })
    this.setState({ filteredPokemon })
  }

  componentDidMount() {
    firestore
      .collection("pokedex")
      .get()
      .then((query) => {
        const pokemon = query.docs.map(doc => doc.data());
        this.setState({
          pokemon: pokemon,
          filteredPokemon: pokemon
        });
      })
  }

  render() {
    console.log(this.SearchText);
    return(
      <>
        <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText}/>
        <section className={styles.cardz}>
          {this.state.filteredPokemon.map((poke, index) => (
            <Card cardData={poke} key={index} />
          ))}
        </section>
      </>
    );
  }
}