import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PokeDetail.module.css';

import Card from '../../../components/Card/Card';
import Loading from '../../../components/Loading/Loading';

const PokeDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const [charaDetails, setCharaDetails] = useState({});
  const [sprites, setSprites] = useState({});
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);

  console.log(props);

     useEffect( () => {
        async function fetchData() {

           const id = props.match.params.charaId;
           const lists = [];

           const url= `https://pokeapi.co/api/v2/pokemon/${id}`;
           console.log(url);
             const res = await axios(url,);

              setCharaDetails(res.data);
              setStats(res.data.stats);
              setTypes(res.data.types);

           setLoading(false);
         }
         fetchData();
       },[]);

    return (
        <div className={styles.pokeDetail}>
            <Card size="detail" className={styles.detailContainer}>
            {loading ? (
              <Loading loadingAnimation="detailsLoading"/>
            ) : (
              <React.Fragment>
              <p className={styles.image}>
              <img
                src={charaDetails.sprites.front_default} alt={charaDetails.name}
                />
              </p>

              <h2 className={styles.name}>{charaDetails.name.charAt(0).toUpperCase() + charaDetails.name.slice(1)}</h2>
              <div className={styles.typeContainer}>
                <div className={styles.typeHeading}>Type :</div>
                {types.map((type, i) => {
                    return (
                      <React.Fragment　key={i}>
                        {(() => {
  
                        switch (type.type.name) {
                          case 'normal':
                            return (
                              <div className={styles.normal}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'fighting':
                            return (
                              <div className={styles.fighting}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'flying':
                            return (
                              <div className={styles.flying}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'poison':
                            return (
                              <div className={styles.poison}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'ground':
                            return (
                              <div className={styles.ground}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'rock':
                            return (
                              <div className={styles.rock}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'bug':
                            return (
                              <div className={styles.bug}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'ghost':
                            return (
                              <div className={styles.ghost}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'steel':
                            return (
                              <div className={styles.steel}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'fire':
                            return (
                              <div className={styles.fire}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'water':
                            return (
                              <div className={styles.water}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'grass':
                            return (
                              <div className={styles.grass}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'electric':
                            return (
                              <div className={styles.electric}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'psychic':
                            return (
                              <div className={styles.psychic}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'ice':
                            return (
                              <div className={styles.ice}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'dragon':
                            return (
                              <div className={styles.dragon}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'dark':
                            return (
                              <div className={styles.dark}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'fairy':
                            return (
                              <div className={styles.fairy}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          case 'shadow':
                            return (
                              <div className={styles.shadow}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                          default:
                            return (
                              <div className={styles.type}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )
                        }

                      })()}
                      
                     

                      
                      </React.Fragment>
                    )
                  })}
                </div>
                <div className={styles.tableContainer}>
                  <table>
                    <tbody>
                      {stats.map((stat, i) => {
                          return (
                            <React.Fragment　key={i}>
                            <tr>
                            <th className={styles.statName}>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</th>

                            <td>{stat.base_stat}</td>
                            </tr>
                            </React.Fragment>
                          )
                        })}
                    </tbody>
                  </table>
                </div>
                <Link className={styles.goBack} to="/">Go Back</Link>
                </ React.Fragment>
                )}
            </Card>
        </div>
      );
  }

  PokeDetail.propTypes = {
      children: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.node,
      ]),
  }

export default PokeDetail;
