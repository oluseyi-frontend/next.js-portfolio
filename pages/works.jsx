import { Container, Card, Typography, Button, CardContent, CardActions } from "@material-ui/core";
import { useState } from "react";
import styles from "./../styles/Works.module.css";
import Link from 'next/link'
import kayExchange from "./../images/kay-xchange.jpg";
import adminEcommerce from "./../images/admin-ecommerce.jpg";
import kayEcommerce from "./../images/kay-ecommerce.jpg";
import damtimApi from "./../images/damtim-bakery-restful-api.jpg";
import myPortfolio from "./../images/my-portfolio.jpg";
import datagen from './../images/datagen.png'
import babyLTC from './../images/babyltc.jpeg'
import fredac from "./../images/fredac.jpg";
import dianox_landing from './../images/dianox-landing.jpg'
import dianox_main from './../images/main-dianox.jpg'
import yourrider from './../images/yourrider.jpg'
import mypic from './../public/mypicture.jpg'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Works = () => {
  const [myworks, setmyWorks] = useState([
    {
      image: datagen,
      name: "DATAGEN PROJECT",
      id: 1,
      info: "A crypto project that aims to bring an Upgrade to blockchain revolution",
      url: "https://b-datagray.com/",
    },
    {
      image: dianox_landing,
      name: "Dianox",
      id: 9,
      info: "Landing page for a medical tech product that uses the latest advances in deep biotechnology to push the boundaries of healthcare.",
      url: "https://www.dianox.com/",
    },
    {
      image: dianox_main,
      name: "Dianox main",
      id: 10,
      info: "E commerce platform built with Next.js for the main Dianox product (Tell) ",
      url: "https://www.ordertell.com/en",
    },
    
    {
      image: kayExchange,
      name: "Crypto exchange platform",
      id: 2,
      info: "A crypto exchange platform built with react and Google's Firebase",
      url: "https://kay-xchange.netlify.app/",
    },
    {
      image: babyLTC,
      name: "Baby Litecoin",
      id: 3,
      info: "Baby Litecoin is a revolutionary, unique, game changing token built on the Binance Smart Chain, we are cornering the rewards system market by being the first and only token in the space that offers rewards in the form of LITECOIN, simply for holding $bLTC.",
      url: "https://baby-ltc.netlify.app/",
    },
    {
      image: adminEcommerce,
      name: "Ecommerce admin page dashboard",
      id: 4,
      info: "An Ecommerce admin dashboard, built with React and Google's Firebase",
      url: "https://kay-store-admin-dashboard.netlify.app/",
    },
    {
      image: kayEcommerce,
      name: "Ecommerce platform",
      id: 5,
      info: "A full E-commerce platform, with Paystack enabled payment system, built with React and Google's Firebase",
      url: "https://kay-store.netlify.app/",
    },
    {
      image: yourrider,
      name: "Your-Rider",
      id: 6,
      info: " A web app built with Next.js to enable high quality SEO",
      url: "https://your-rider.vercel.app/",
    },
    {
      image: damtimApi,
      name: "Damtim-Api",
      id: 7,
      info: "A restful API implementing backend services like, validation using JOI, authentication using json web token, Email services, backend payment services, project was built with MongoDB, Express, React, and Node",
      url: " https://damtim-api.herokuapp.com/damtim/api/cakes",
    },
    {
      image: myPortfolio,
      name: "A web dev portfolio",
      id: 8,
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
        <div className={styles.work_heading}>
          <Typography variant="h4" gutterBottom>
Past Projects
          </Typography>
        </div>
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
                <Typography variant="body2" className={styles.info} component="p">
                  {mywork.info}
                </Typography>
              </CardContent>
              <CardActions>
                <a href={mywork.url} target='_blank'>
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
              <a className={styles.to_work}>
                <ArrowBackIosIcon/>
              </a>
            </Link>
            <Link href="/contact">
              <a className={styles.to_work}>
                <DoubleArrowIcon/>
              </a>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Works;
