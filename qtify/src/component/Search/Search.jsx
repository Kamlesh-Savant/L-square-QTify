import React from 'react';
import {ReactComponent as SearchComponent} from '../../assets/Search-icon.svg'
import styles from './Search.module.css'

function Search({placeholder}) {

    const onSubmit = (e)=>{
        e.preventDefault();
    }
  return (
<form onSubmit={onSubmit} className={styles.wraper}>
    <input type="text" required className={styles.search} placeholder={placeholder}/>
    <button type='submit' className={styles.button}>
    <SearchComponent />
    </button>
</form>
  )
}

export default Search