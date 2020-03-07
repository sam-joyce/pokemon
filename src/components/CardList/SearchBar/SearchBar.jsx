import React, { Component } from "react";
import styles from "./SearchBar.module.scss";

export default class SearchBar extends Component {
  render() {
    // console.log('typing');
    return(
      <input 
        className={styles.searchBar}
        placeholder="Explore the Pokedex"
        value={this.props.searchText}
        onChange={this.props.setSearchText}
      />
    )
  }
}