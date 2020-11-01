import { Container, Card, Typography, Button, CardContent, CardActions } from "@material-ui/core";
import { useState } from "react";
import styles from "./../styles/Works.module.css";
import Link from 'next/link'
import kayExchange from "./../images/kay-xchange.jpg";
import adminEcommerce from "./../images/admin-ecommerce.jpg";
import kayEcommerce from "./../images/kay-ecommerce.jpg";
import damtimApi from "./../images/damtim-bakery-restful-api.jpg";
import myPortfolio from "./../images/my-portfolio.jpg";
import fredac from "./../images/fredac.jpg";
import mypic from './../public/mypicture.jpg'
const Works = () => {
  const [myworks, setmyWorks] = useState([
    {
      image: kayExchange,
      name: "Crypto exchange platform",
      id: 1,
      info: "A crypto exchange platform built with react and Google's Firebase",
      url: "https://kay-xchange.netlify.app/",
    },

    {
      image: adminEcommerce,
      name: "Ecommerce admin page dashboard",
      id: 2,
      info: "An Ecommerce admin dashboard, built with React and Google's Firebase",
      url: "https://kay-store-admin-dashboard.netlify.app/",
    },
    {
      image: kayEcommerce,
      name: "Ecommerce platform",
      id: 3,
      info: "A full E-commerce platform, with Paystack enabled payment system, built with React and Google's Firebase",
      url: "https://kay-store.netlify.app/",
    },
    {
      image: damtimApi,
      name: "Damtim-Api",
      id: 4,
      info: "A restful API implementing backend services like, validation using JOI, authentication using json web token, Email services, backend payment services, project was built with MongoDB, Express, React, and Node",
      url: "https://damtim-api.herokuapp.com/damtim/api/cakes",
    },
    {
      image: myPortfolio,
      name: "A web dev portfolio",
      id: 5,
      info: "A web dev portfolo built with Next.js to implement server side rendering thereby attaining SEO friendly web apps",
      url: "https://kay-portfolio.vercel.app/",
    },
  ]);
  return (
      <div className={styles.works}>
           <div className={styles.heading}>
                    <Link href="/">
          <a>
            <img src={mypic} alt="" />
                            Kayode
                        </a>
                    </Link>
                </div>
      <Container maxWidth="sm">
        {myworks.map((mywork) => {
          return (
            <Card key={mywork.id} className={styles.my_card}>
              <CardContent>
                <Typography
                  className={styles.title}
                  color="textSecondary"
                  gutterBottom
                      >
              
                  {mywork.name}
                </Typography>
                <img src={mywork.image} alt="" />
                <Typography variant="body2" className={styles.info}  component="p">
                  {mywork.info}
                </Typography>
              </CardContent>
              <CardActions>
                <a href={mywork.url}>
                  <Button size="small">Visit page</Button>
                </a>
              </CardActions>
            </Card>
          );
        })}
      </Container>
      <div className={styles.footer}>
                  <Container maxWidth="md">     
                      <div className={styles.footer_content}>
                         <Link href="/about">
                        <a className={styles.to_work}>To About</a>
                        </Link>
            <Link href="/contact">
                        <a className={styles.to_work}>To Contact</a>
                        </Link>
                      </div>                    
                   </Container>                
                </div>
    </div>
  );
};

export default Works;
