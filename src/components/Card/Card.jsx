import React, { Component } from "react";
import styles from "./Card.module.scss";
import Skills from "./Skills/Skills";

export default class CardComponent extends Component {
  render() {
    return (
      <figure className={styles.card}>
        <div className={styles.card__image_container}>
          <img src="images" alt="Bellsprout" className={styles.card__image} />
        </div>

        <figcaption className={styles.card__caption}>
          <h1 className={styles.card__name}>{this.props.cardData.name}</h1>

          <h3 className={styles.card__type}>
            {this.props.cardData.type}
          </h3>

          <Skills skills={this.props.cardData.skills}/>

          <div className={styles.card__abilities}>
            <h4 className={styles.card__ability}>
              <span className={styles.card__label}>Ability</span>
              {this.props.cardData.ability}
            </h4>
            <h4 className={styles.card__ability}>
              <span className={styles.card__label}>Hidden Ability</span>
              {this.props.cardData.hidden_Ability}
            </h4>
          </div>
        </figcaption>
      </figure>
    )
  }
}