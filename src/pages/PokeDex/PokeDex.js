import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './PokeDex.module.css';

import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';

const PokeDex = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [charaDetails, setCharaDetails] = useState([]);
  const lists = [];

  useEffect(() => {

     async function fetchData() {

      const response = await axios('https://pokeapi.co/api/v2/pokemon?limit=151',);
        console.log(response.data.results);
        setCharacters(response.data.results);

        for (var i = 0; i< response.data.results.length; i++) {
            const res = await axios.get(response.data.results[i].url,);

            lists.push(res.data);
            setCharaDetails(lists);
          }

        setLoading(false);
      }
        fetchData();
      }, []);

    return (
      <div className={styles.pokeDex}>
        <React.Fragment>
        {characters.map((character,i) =>{
          return(
          <Card size="grid" key={i}>
            {loading ? (
              <Loading loadingAnimation="listLoading" />
            ):(
              <React.Fragment>
              {charaDetails.map((charaDetail, index) =>{
                return(
                  character.name == charaDetail.name && (
                    <React.Fragment key={index} >
                    <p className={styles.image}>

                      <img
                        src={charaDetail.sprites.front_default} alt={characters[i].name}
                        />
                    </p>
                    <Link className={styles.link} to={`/${charaDetail.id}`}></Link>
                    </React.Fragment>
                  )

                )
              })}
                <h2 className={styles.name}>{character.name.charAt(0).toUpperCase() + character.name.slice(1)}</h2>
              </React.Fragment>
            )}
          </Card>
        )
        })}
        </React.Fragment>
      </div>
    );
}

export default PokeDex;
