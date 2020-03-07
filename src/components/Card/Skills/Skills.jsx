import React, { Component } from "react";
import styles from "../Card.module.scss";

export default class Skills extends Component {
  render() {
    return (
      <table className={styles.card__stats}>
        <tbody>
          {Object.entries(this.props.skills).map((entry, index) => {
            return(<tr key={index}>
                    <th>{entry[0]}</th>
                    <td>{entry[1]}</td>
            </tr>)
          })}


          {/* <tr>
            <th>HP</th>
            <td>55</td>
          </tr>
          <tr>
            <th>Attack</th>
            <td>55</td>
          </tr>

          <tr>
            <th>Defense</th>
            <td>50</td>
          </tr>

          <tr>
            <th>Special Attack</th>
            <td>45</td>
          </tr>
          <tr>
            <th>Special Defense</th>
            <td>65</td>
          </tr>
          <tr>
            <th>Speed</th>
            <td>55</td>
          </tr> */}
        </tbody>
      </table>
    )
  }
}