import {
  Container,
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { useState } from "react";
import styles from "./../styles/Works.module.css";
import Link from "next/link";
import kayExchange from "./../images/kay-xchange.jpg";
import adminEcommerce from "./../images/admin-ecommerce.jpg";
import kayEcommerce from "./../images/kay-ecommerce.jpg";
import damtimApi from "./../images/damtim-bakery-restful-api.jpg";
import myPortfolio from "./../images/my-portfolio.jpg";
import datagen from "./../images/datagen.png";
import homeloan from "./../images/homeloan.png";
import homeloanDashboard from "./../images/homeloanDashboard.png";
import babyLTC from "./../images/babyltc.jpeg";
import fredac from "./../images/fredac.jpg";
import dianox_landing from "./../images/dianox-landing.jpg";
import dianox_main from "./../images/main-dianox.jpg";
import prime_switch from "./../images/primeswitch.png";
import yourrider from "./../images/yourrider.jpg";
import mypic from "./../public/mypicture.jpg";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const Works = () => {
  const [myworks, setmyWorks] = useState([
    {
      image: homeloan,
      name: "Stanbic IBTC Homeloan",
      id: 1,
      info: "A Mortgage app where you can apply for mortgage",
      url: "https://homeloans.stanbicibtc.com/",
    },
    {
      image: homeloanDashboard,
      name: "Stanbic IBTC Homeloan Dashboard",
      id: 1,
      info: "A Mortgage app where you can apply for mortgage",
      url: "https://homeloans.stanbicibtc.com/login",
    },
    {
      image: datagen,
      name: "DATAGEN PROJECT",
      id: 1,
      info: "A crypto project that aims to bring an Upgrade to blockchain revolution",
      url: "https://www.b-datagray.com/",
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

    // {
    //   image: adminEcommerce,
    //   name: "Ecommerce admin page dashboard",
    //   id: 4,
    //   info: "An Ecommerce admin dashboard, built with React and Google's Firebase",
    //   url: "https://kay-store-admin-dashboard.netlify.app/",
    // },

    {
      image: yourrider,
      name: "Your-Rider",
      id: 6,
      info: " A web app built with Next.js to enable high quality SEO",
      url: "https://your-rider.vercel.app/",
    },
    // {
    //   image: damtimApi,
    //   name: "Damtim-Api",
    //   id: 7,
    //   info: "A restful API implementing backend services like, validation using JOI, authentication using json web token, Email services, backend payment services, project was built with MongoDB, Express, React, and Node",
    //   url: " https://damtim-api.herokuapp.com/damtim/api/cakes",
    // },
    {
      image: myPortfolio,
      name: "A web dev portfolio",
      id: 8,
      info: "A web dev portfolo built with Next.js to implement server side rendering thereby attaining SEO friendly web apps",
      url: "https://kay-portfolio.vercel.app/",
    },
    // {
    //   image: babyLTC,
    //   name: "Baby Litecoin",
    //   id: 3,
    //   info: "Baby Litecoin is a revolutionary, unique, game changing token built on the Binance Smart Chain, we are cornering the rewards system market by being the first and only token in the space that offers rewards in the form of LITECOIN, simply for holding $bLTC.",
    //   url: "https://baby-ltc.netlify.app/",
    // },
    {
      image: prime_switch,
      name: "Primeswitch",
      id: 5,
      info: "A full E-commerce platform, with Paystack enabled payment system, built with React and Google's Firebase",
      url: "https://primeswitch-mock.vercel.app/",
    },
    {
      image: kayEcommerce,
      name: "Ecommerce platform",
      id: 5,
      info: "A full E-commerce platform, with Paystack enabled payment system, built with React and Google's Firebase",
      url: "https://kay-store.netlify.app/",
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
      <Container maxWidth="lg">
        <div className={styles.work_heading}>
          <Typography variant="h4" gutterBottom>
            Past Projects
          </Typography>
        </div>
        {myworks.map((mywork) => {
          return (
            <Card key={mywork.id} className={styles.my_card}>
              <CardContent className={styles.my_card_content}>
                <Typography
                  className={styles.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {mywork.name}
                </Typography>
                <a href={mywork.url} target="_blank">
                  <img src={mywork.image} alt="" />
                </a>

                {/* <Typography
                  variant="body2"
                  className={styles.info}
                  component="p"
                >
                  {mywork.info}
                </Typography> */}
              </CardContent>
              <CardActions className={styles.my_card_actions}>
                <a href={mywork.url} target="_blank">
                  <button
                    style={{
                      cursor: 'pointer',
                      borderRadius: 6,
                      backgroundColor: "black",
                      borderWidth: 1,
                      borderColor: "white",
                      border: "1px solid white",
                      color: "white",

                    }}
                    size="small"
                  >
                    Visit page
                  </button>
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
                <ArrowBackIosIcon />
              </a>
            </Link>
            <Link href="/contact">
              <a className={styles.to_work}>
                <DoubleArrowIcon />
              </a>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Works;
