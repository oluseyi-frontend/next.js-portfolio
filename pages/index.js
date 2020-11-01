import {useEffect, useState} from 'react'
import { Grid, Container } from '@material-ui/core'
import Axios from 'axios';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
const [changer, setChanger] = useState(false)
 
  const handleClick = (e) => {

    console.log(e.target)
  setChanger(!changer)
}

  return (
    <div onClick={handleClick} className={styles.home}>
      <Container className={styles.my_container}>
        <div className={styles.left_content}>
          <div className={changer ? styles.hello_active : styles.hello}>
            <h1>Hello.</h1>
            <div className={changer ? styles.about_active : styles.about}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
          </div>
          <div className={changer ? styles.hello_active : styles.hello}>
            <h1 style={{ color: "red" }}>i am</h1>
            <div className={changer ? styles.about_active : styles.about}>
              <Link href="/works">
                <a>Works</a>
              </Link>
            </div>
          </div>
          <div className={changer ? styles.hello_active : styles.hello}>
            <h1 style={{ color: "red" }}>Kayode</h1>
            <div className={changer ? styles.about_active : styles.about}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </div>
          </div>
          <div className={styles.tap}>
            <p onClick={handleClick}>Tap anywhere</p>
          </div>
        </div>
      </Container>
    </div>
  );
}


