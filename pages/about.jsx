import styles from "./../styles/About.module.css";
import Link from "next/link";
import { Container, Paper, LinearProgress,Typography, Grid } from "@material-ui/core";
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
import mypic from './../public/mypicture.jpg'

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
                <Typography className={styles.about_heading} variant='h1'>I design & <br/> build SEO <br/> friendly websites</Typography>
              </div>
            </div>
          </Grid>
          
        </Grid>
        </div>
         </Container>
      <div className={styles.about_body}>
        <Container maxWidth="sm">
          <div className={styles.about_me_text}>
            <Typography variant='h3'>About</Typography>
              <Typography variant="body2" className={styles.info}  component="p">
             My name is  <strong>Olukayode Oluseyi </strong>, a Graduate 
              of the Federal University of Technology, Minna, Nigeria. 
              My state of origin being Osun State, i reside in 
              Ibadan, Oyo state. i am a self taught developer.
              </Typography>
              <Typography variant="body2" className={styles.info}  component="p">
            My skills are above average and I will be more than 
              capable to assist your company by bringing real life implementation 
              experience in API based integration, Visual layout development 
              and UI design implementations. I believe with my skills I should 
              be able to exploit, take advantage and
              fully develop any sales opportunity I will be presented with.
              </Typography>
           
              <Typography variant="body2" className={styles.info}  component="p">
            My core includes, but are not limitd to:Identifying design flaws in software, and providing 
                solutions to better improve them, Ability to work and deliver on time, Implementing and integrating required services to projects
              </Typography>

          </div>

          <div className={styles.my_skills}>
            <h1>Skills</h1>
            <Paper className={styles.paper}>
                            <div className={styles.skill}>
                            <label className="html" htmlFor="">
                                <img src={html} alt=""/> HTML 
                            </label>
                            <LinearProgress color='secondary' variant="determinate" value={90} />
                            </div>
                            <div className={styles.skill}>
                            <label className="css" htmlFor="">
                                <img src={css3} alt=""/> CSS
                            </label>
                            <LinearProgress color='secondary' variant="determinate" value={80} />
                            </div>
                            <div className={styles.skill}>
                            <label className="javascript" htmlFor="">
                                <img src={javascript} alt=""/> Javascript
                            </label>
                              <LinearProgress color='secondary' variant="determinate" value={60} />
                            </div>
                            <div className={styles.skill}>
                            <label className="jquery" htmlFor="">
                                <img src={jquery} alt=""/> JQuery
                            </label>
                               <LinearProgress color='secondary' variant="determinate" value={50} />
                            </div>
                            <div className={styles.skill}>
                            <label className="bootstrap" htmlFor="">
                                <img src={bootstrap} alt=""/> Bootstrap
                            </label>
                               <LinearProgress color='secondary' variant="determinate" value={80} />
                            </div>
                            <div className={styles.skill}>
                            <label className="bootstrap" htmlFor="">
                            <img src={materialUi} alt=""/> Material Ui
                            </label>
                               <LinearProgress color='secondary' variant="determinate" value={90} />
                            </div>
                            <div className={styles.skill}>
                            <label className="react" htmlFor="">
                                <img src={react} alt=""/> React
                            </label>
                              <LinearProgress color='secondary' variant="determinate" value={80} />
                            </div>
                            <div className={styles.skill}>
                            <label className="react" htmlFor="">
                                <img src={javascript} alt=""/> Express
                            </label>
                              <LinearProgress color='secondary' variant="determinate" value={80} />
                            </div>
                            <div className={styles.skill}>
                            <label className="react" htmlFor="">
                            <img src={node} alt=""/> Node
                            </label>
                             <LinearProgress color='secondary' variant="determinate" value={60} />
                            </div>
                            <div className={styles.skill}>
                            <label className="react" htmlFor="">
                                 <img src={react} alt=""/> Next.js
                            </label>
                               <LinearProgress color='secondary' variant="determinate" value={60} />
                            </div>
                            <div className={styles.skill}>
                            <label className="react" htmlFor="">
                            <img src={graphql} alt=""/> GraphQL
                            </label>
                              <LinearProgress color='secondary' variant="determinate" value={30} />
                            </div>
                            <div className={styles.skill}>
                            <label className="react" htmlFor="">
                                <img src={firebase} alt=""/> Firebase
                            </label>
                              <LinearProgress color='secondary' className={styles.my_progress} variant="determinate" value={70} />
                            </div>
                            <div className={styles.skill}>
                            <label className="react" htmlFor="">
                            <img src={mongodb} alt=""/> MongoDB
                            </label>
                   <LinearProgress color='secondary' variant="determinate" value={60} />
               
                            </div>
                        </Paper>
                  </div>
                 
              </Container>
              <div className={styles.footer}>
                  <Container maxWidth="md">     
                      <div className={styles.footer_content}>
                        <Link href="/works">
                        <a className={styles.to_work}>To Works</a>
                        </Link>
                      </div>                    
                   </Container>                
                </div>
          </div>
         
    </div>
  );
};

export default About;
