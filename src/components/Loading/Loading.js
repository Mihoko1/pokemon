import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.module.css';
import loadingImg from './loadingImg.gif';
import Card from '../../components/Card/Card';

const Loading = (props) => {
  const {loadingAnimation} = props;

  return(
    <div className={styles.loading} >
        <img className={styles[loadingAnimation]} src = {loadingImg} alt="Loading..." />
    </div>
  );
}

Loading.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
}

export default Loading;
