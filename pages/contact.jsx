import styles from "./../styles/Contact.module.css";
import { Container, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import Link from "next/link";
import mypic from './../public/mypicture.jpg'
const Contact = () => {
  const [decider, setDecider] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDecider(true);
    }, 500);
  });
  return (
    <div className={styles.contact}>
      <div className={styles.heading}>
        <Link href="/">
          <a>
            <img src={mypic} alt="" />Kayode</a>
        </Link>
      </div>
      <Container>
        <div className={styles.contact_banner}>
          <div
            className={
              decider
                ? styles.about_left_content_text_active
                : styles.about_left_content_text
            }
          >
            <Typography className={styles.contact_heading} variant="h1">
              Contact me <br />
              let's make <br />
              something superb !
            </Typography>
          </div>
        </div>
      </Container>
          <Container maxWidth="sm">
              <div className={styles.contact_body}>
                  <Typography variant='h3'>Contact</Typography>
                     <Typography variant="body2" className={styles.info}  component="p">
                      I'm seeking out opportunities to collaborate 
                      with companies / agencies / individuals, 
                      not just work for them. I want to bring my 
                      collective skills to the table 
                      where we can work together to solve real 
                      life-problems in a way that optimizes 
                      all of our respective experience and knowledge.
			
                    </Typography>
                     <Typography variant="body2" className={styles.info}  component="p">                     
                      I want to avoid subjective pissing-matches, and 
                      favor open-minded 
                      collaborators where egos are out of the equation. 
                      If that all sounds about right, then lets for 
                      sure chat about how we can work together.
                    </Typography>
                     <Typography variant="body2" className={styles.info}  component="p">
                    Feel free to reach out through any platforms bellow:

                    </Typography>
                  <div className={styles.contact_links}>
                      <a href="mailto: alawiyeolukayode@gmail.com">Email</a>
                      <a href="https://www.linkedin.com/in/alawiye-olukayode-aa365298/">Linkedin</a>
            <a href="https://t.me/kay2425">Telegram</a>
               <a href="https://www.facebook.com/alawiye.kayode">Facebook</a>
            <a href="https://www.twitter.com/_oluseyi__">Twitter</a>
            <a href="https://api.whatsapp.com/send?phone=8114426271">Whatsapp</a>
                  </div>
              </div>
          </Container>
          <Container maxWidth="md">
<div className={styles.footer_content}>
            <Link href="/works">
                        <a className={styles.to_work}>To Works</a>
                        </Link>
                      </div>    
          </Container>
    </div>
  );
};

export default Contact;
