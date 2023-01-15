import styles from "./../styles/About.module.css";
import Link from "next/link";
import {
  Container,
  Paper,
  LinearProgress,
  Typography,
  Grid,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import bootstrap from "./../public/icons8-bootstrap.svg";
import css3 from "./../public/icons8-css3.svg";
import html from "./../public/icons8-html-5.svg";
import jquery from "./../public/icons8-jquery.svg";
import firebase from "./../public/icons8-firebase.svg";
import graphql from "./../public/icons8-graphql.svg";
import javascript from "./../public/icons8-javascript.svg";
import materialUi from "./../public/icons8-material-ui.svg";
import mongodb from "./../public/icons8-mongodb.svg";
import node from "./../public/icons8-nodejs.svg";
import react from "./../public/icons8-react.svg";
import mypic from "./../public/mypicture.jpg";
import nextImg from "./../public/nextimg.svg";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import solidity from "./../public/solidity.svg";
import web3 from "./../public/Web3.svg";

const About = () => {
  const [decider, setDecider] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDecider(true);
    }, 0);
  }, []);

  return (
    <div className={styles.my_about}>
      <div className={styles.heading}>
        <Link href="/">
          <a>
            <img src={mypic} alt="" />
            Kayode
          </a>
        </Link>
      </div>
      <Container maxWidth="lg">
        <div className={styles.about_banner}>
          <Grid container spacing={3} className={styles.outer_grid}>
            <Grid item md={12} className={styles.inner_grid}>
              <div className={styles.about_left_content}>
                <div
                  className={
                    decider
                      ? styles.about_left_content_text_active
                      : styles.about_left_content_text
                  }
                >
                  <Typography className={styles.about_heading} variant="h1">
                    I design & <br /> build SEO <br /> friendly websites
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div className={styles.about_body}>
        <Container maxWidth="sm">
          <div className={styles.about_me_text}>
            <Typography variant="h4">About</Typography>
            <Typography variant="body2" className={styles.info} component="p">
              My name is <strong>Olukayode Oluseyi </strong>, a self taught
              fullstack developer. using the latest tech on the market right now
              to build SEO friendly websites.
            </Typography>
            <Typography variant="body2" className={styles.info} component="p">
              Fueled by high energy levels and boundless enthusiasm, I’m easily
              inspired and more then willing to follow my fascinations wherever
              they take me. I’m passionate, expressive, multi-talented spirit
              with a natural ability to entertain and inspire. I’m never s
              atisfied to just come up with ideas. Instead I have an almost
              impulsive need to act on them.
            </Typography>
            <Typography variant="body2" className={styles.info} component="p">
              I will be more than capable to assist your company/individual by
              bringing real life implementation experience in API based
              integration, Visual layout development and UI design
              implementations. I believe with my skills I should be able to
              exploit, take advantage and fully develop any sales opportunity I
              will be presented with.
            </Typography>

            <Typography variant="body2" className={styles.info} component="p">
              My core includes, but are not limitd to: Identifying design flaws
              in software, and providing solutions to better improve them,
              Ability to work and deliver on time, Implementing and integrating
              required services to projects
            </Typography>
          </div>

          <div className={styles.my_skills}>
            <Typography variant="h4">Skills</Typography>

            <div className={styles.skill}>
              <Grid container spacing={3}>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={html} alt="" />
                  <Typography>HTML</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={css3} alt="" />
                  <Typography>CSS</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={javascript} alt="" />
                  <Typography>Javascript</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={jquery} alt="" />
                  <Typography>JQUERY</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={bootstrap} alt="" />
                  <Typography>Bootstrap</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={materialUi} alt="" />
                  <Typography>Material UI</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={react} alt="" />
                  <Typography>React</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={react} alt="" />
                  <Typography>React Native</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={javascript} alt="" />
                  <Typography>Express JS</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={node} alt="" />
                  <Typography>Node</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={nextImg} alt="" />
                  <Typography>Next.js</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <div className={styles.solidity}>
                    <img src={solidity} alt="" />
                  </div>
                  <Typography> Solidity</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <div className={styles.solidity}>
                    <img src={web3} alt="" />
                  </div>
                  <Typography>Web3</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={firebase} alt="" />
                  <Typography>Firebase</Typography>
                </Grid>
                <Grid className={styles.my_grid} item xs={4} sm={3}>
                  <img src={mongodb} alt="" />
                  <Typography>MongoDB</Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
        <div className={styles.footer}>
          <Container maxWidth="md">
            <div className={styles.footer_content}>
              <Link href="/works">
                <a className={styles.to_work}>
                  {" "}
                  <DoubleArrowIcon />
                </a>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default About;
