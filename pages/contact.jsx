import styles from "./../styles/Contact.module.css";
import { Container, Typography, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import Link from "next/link";
import mypic from "./../public/mypicture.jpg";
import github from "./../images/github.svg";
import fb from "./../images/icons8-facebook (1).svg";
import twitter from "./../images/icons8-twitter (1).svg";
import linkedin from "./../images/icons8-linkedin (2).svg";
import tele from "./../images/icons8-telegram-app.svg";
import mail from "./../images/email.svg";
import whatsapp from "./../images/icons8-whatsapp (1).svg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

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
            <img src={mypic} alt="" />
            Kayode
          </a>
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
          <Typography variant="h4">Contact</Typography>
          <Typography variant="body2" className={styles.info} component="p">
            I'm seeking out opportunities to collaborate with companies /
            agencies / individuals, not just work for them. I want to bring my
            collective skills to the table where we can work together to solve
            real life-problems in a way that optimizes all of our respective
            experience and knowledge.
          </Typography>
          <Typography variant="body2" className={styles.info} component="p">
            I want to avoid subjective pissing-matches, and favor open-minded
            collaborators where egos are out of the equation. If that all sounds
            about right, then lets for sure chat about how we can work together.
          </Typography>
          <Typography variant="body2" className={styles.info} component="p">
            Feel free to reach out through any platforms below:
          </Typography>
          <div className={styles.contact_links}>
            <Grid container spacing={3}>
              <Grid className={styles.my_grid} item xs={4} sm={3}>
                <a href="mailto: alawiyeolukayode@gmail.com" target="_blank">
                  {" "}
                  <img src={mail} alt="" />
                </a>
              </Grid>
              <Grid className={styles.my_grid} item xs={4} sm={3}>
                <a
                  href="https://www.linkedin.com/in/alawiye-olukayode-aa365298"
                  target="_blank"
                >
                  {" "}
                  <img src={linkedin} alt="" />
                </a>
              </Grid>
              <Grid className={styles.my_grid} item xs={4} sm={3}>
                <a
                  href="https://github.com/oluseyi-frontend?tab=repositories"
                  target="_blank"
                >
                  {" "}
                  <img src={github} alt="" />
                </a>
              </Grid>
              <Grid className={styles.my_grid} item xs={4} sm={3}>
                <a href="https://t.me/kay2425" target="_blank">
                  {" "}
                  <img src={tele} alt="" />
                </a>
              </Grid>
              <Grid className={styles.my_grid} item xs={4} sm={3}>
                <a
                  href="https://www.facebook.com/alawiye.kayode"
                  target="_blank"
                >
                  {" "}
                  <img src={fb} alt="" />
                </a>
              </Grid>
              <Grid className={styles.my_grid} item xs={4} sm={3}>
                <a href="https://www.twitter.com/_oluseyi__" target="_blank">
                  {" "}
                  <img src={twitter} alt="" />
                </a>
              </Grid>
              <Grid className={styles.my_grid} item xs={4} sm={3}>
                <a
                  href="https://api.whatsapp.com/send?phone=+2348114426271"
                  target="_blank"
                >
                  {" "}
                  <img src={whatsapp} alt="" />
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
      <Container maxWidth="md">
        <div className={styles.footer_content}>
          <Link href="/works">
            <a className={styles.to_work}>
              <ArrowBackIosIcon />
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
