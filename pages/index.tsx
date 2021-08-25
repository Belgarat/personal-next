import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { Scrollchor } from "react-scrollchor";
import Skillbar from './Skillbar';
import Brand from "./Brand";
import Navbar from "./Navbar";
import PersonalCard from "./Personal-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import ArrowUp from "./ArrowUp";
import ArrowDown from "./ArrowDown";
import ScrollBar from "./ScrollBar";
import Slide from "./Slide";



const iconsList = [
  { label: "Debian logo", url: "http://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Openlogo-debianV2.svg/1200px-Openlogo-debianV2.svg.png" },
  { label: "Angular logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" },
  { label: "NgRx logo", url: "https://ngrx.io/assets/images/badge.svg" },
  { label: "NestJs logo", url: "https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png" },
  { label: "CSS3 logo", url: "https://www.grafoadv.it/public/images/programming/css3.png" },
  { label: "Javascript logo", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png" },
  { label: "Microsoft logo", url: "https://image.flaticon.com/icons/png/512/732/732221.png" },
]

const portfolio = [
  {
    id: 1,
    title: 'SmartRMS',
    image: '/SmartRMS.png',
    description1: 'Repair Menagment System (Open Beta).',
    description2: 'Per i professionisti che vogliono gestire le proprie riparazioni e interventi.',
    productUrl: ''
  },
  {
    id: 2,
    title: 'SimpleKiosk',
    image: '/SimpleKiosk.png',
    description1: 'Soluzione semplice ed economica per realizzare sistemi multimediali pubblicitari.',
    description2: 'Basato su Raspberry, Debian e Angular.',
    productUrl: ''
  },
  {
    id: 3,
    title: 'Wordpress support',
    image: '/GhostReader.png',
    description1: 'Supporto e personalizzazione di siti wordpress.',
    description2: '',
    productUrl: 'https://www.theghostreader.it'
  },
  {
    id: 4,
    title: 'Formazione per PA e PMI',
    image: 'https://www.reviviscar.it/wp-content/uploads/2017/08/Revi-Logo_Tavola-disegno-1-1.png',
    description1: 'Supporto e corsi di formazioni focalizzati sull\'applicazione pratica.',
    description2: 'Formazione sulla gestione documentale e la conservazione a norma per le PA.',
    productUrl: ''
  },
  {
    id: 5,
    title: 'SysAdmin',
    image: '/SysAdmin.jpg',
    description1: 'System manager nel datacenter provinciale della S.I.T.',
    description2: 'Gestione di webserver e application server.',
    productUrl: ''
  },
]


const Home: NextPage = () => {
  const setScroll = () => (typeof window !== 'undefined' ? window.scrollY : 0);
  const getY = () => (typeof window !== 'undefined' ? window.scrollY : 0);
  const [y, setY] = useState(0);
  const [h, setH] = useState(0);
  const [position, setPosition] = useState(0);
  const [mobMenu, setMobMenu] = useState(-350);
  let scrollAbout = 350;

  useEffect(() => {
    setY(setScroll());
    setH(document.body.clientHeight - window.screen.height);

    window.addEventListener("scroll", (e) => {
      setY(prev => {
        let window = (e.currentTarget as Window);
        return prev = window.scrollY;
      })
      setPosition(prev => {
        let window = (e.currentTarget as Window);
        return prev = window.scrollY;
      })
    }
    );

    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.addEventListener("scroll", (e) => {
        setY(prev => {
          let window = (e.currentTarget as Window);
          return prev = window.scrollY
        })
        setPosition(prev => {
          let window = (e.currentTarget as Window);
          return prev = window.scrollY;
        })
      })
    };
  }, [y]);

  return (
    <>
      <Head>
        <title>Marco Brunet - System administrator e Web Developer</title>
        <meta name="description" content="Marco Brunet - System administrator e Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id='top'>
        {h > 0 && <ScrollBar position={position} h={h}></ScrollBar>}
        {y > scrollAbout && <Scrollchor to='#top'><ArrowUp></ArrowUp></Scrollchor>}
        {y < scrollAbout && <Scrollchor to='#aboutme'><ArrowDown></ArrowDown></Scrollchor>}
        {/* navbar header */}
        <div className="nav-header">
          {y <= scrollAbout && <Navbar icons={iconsList}></Navbar>}
          <button className={`btn btn-link mnu`} onClick={(e) => setMobMenu(0)}><FontAwesomeIcon width={40} className="mobileMenu" icon={faBars}></FontAwesomeIcon></button>
          <div className="header-links">
            <ul>
              <li data-menuanchor="fourthPage"><Scrollchor className="nav-link" to='#contact'>CONTACT</Scrollchor></li>
              <li data-menuanchor="thirdPage"><Scrollchor className="nav-link" to='#portfolio'>PORTFOLIO</Scrollchor></li>
              <li data-menuanchor="secondPage"><Scrollchor className="nav-link" to='#aboutme'>ABOUT</Scrollchor></li>
            </ul>
          </div>
        </div>
        {/* end navbar header */}
        {/* sidebar slider */}
        <div className="nav-screen" style={{ right: mobMenu }}>
          <button className='btn btn-link mnu' onClick={(e) => setMobMenu(-350)}><FontAwesomeIcon className="mobileMenu" icon={faTimes}></FontAwesomeIcon></button>
          <div className="nav-container">
            <div className="nav-links">
              <ul id="myMenu">
                <li onClick={(e) => setMobMenu(-350)} data-menuanchor="secondPage"><Scrollchor className="nav-link" to='#aboutme'>ABOUT</Scrollchor></li>
                <li onClick={(e) => setMobMenu(-350)} data-menuanchor="thirdPage"><Scrollchor className="nav-link" to='#portfolio'>PORTFOLIO</Scrollchor></li>
                <li onClick={(e) => setMobMenu(-350)} data-menuanchor="fourthPage"><Scrollchor className="nav-link" to='#contact'>CONTACT</Scrollchor></li>
              </ul>
            </div>
          </div>
        </div>
        {/* end navbar slider */}
        {/* begin fullpage */}
        <div id="fullpage">
          {/* begin section */}
          <div className="section aboutme">

            <Brand name={'MARCO'} surname={'BRUNET'}></Brand>

            <i id="moveDown" className="fa fa-chevron-down fa-3x bounce" />
          </div>
          {/* end section */}
          {/* begin section */}

          <div className="section" data-anchor="skills" id="aboutme">
            <div className="content">
              <h1 className="wow fadeInDown" data-wow-delay="0.2s">ABOUT ME</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Io sono Marco Brunet, SysAdmin e Web Developer.
                Specializzato nel supporto e consulenza tecnologica, sviluppo soluzioni software web based per andare incontro alle esigenze dei miei collaboratori e partner.
                Dal 2018 formatore per la PA e PMI sulle nuove tecnologie e la gestione documentale.
              </p>
              {y > scrollAbout && <Skillbar perc={72} label={'Javasctript/ES6'} color={'#1A759F'}></Skillbar>}
              {y > scrollAbout && <Skillbar perc={75} label={'Angular'} color={'#168AAD'}></Skillbar>}
              {y > scrollAbout && <Skillbar perc={60} label={'RxJS'} color={'#34A0A4'}></Skillbar>}
              {y > scrollAbout && <Skillbar perc={40} label={'React'} color={'#4E99AD'}></Skillbar>}
              {y > scrollAbout && <Skillbar perc={60} label={'NestJs'} color={'#52B69A'}></Skillbar>}
              {y > scrollAbout && <Skillbar perc={75} label={'PHP'} color={'#76C893'}></Skillbar>}
              {y > scrollAbout && <Skillbar perc={85} label={'Linux'} color={'#B5E48C'}></Skillbar>}
              {y > scrollAbout && <Skillbar perc={80} label={'Windows Server'} color={'#D9ED92'}></Skillbar>}
            </div>
          </div>
          {/* end section */}
          {/* begin section */}
          <div className="section" data-anchor="projects" id="portfolio">
            <div className="content">
              <h1>PORTFOLIO</h1>
              <p>
                Alcuni dei miei lavori e progetti
              </p>
              <Slide opacity={1} data={portfolio}></Slide>
            </div>
          </div>
          {/* end section */}
          {/* begin section */}
          <div className="section" data-anchor="contact" id='contact'>
            <div className="content wow fadeInDown" data-wow-delay="0.2s">
              <h1>CONNECT WITH ME</h1>
              <p>Rimaniamo in contatto</p>
              <br />
              <PersonalCard name={'Marco'} surname={'Brunet'}></PersonalCard>
            </div>
          </div>
          {/* end section */}
        </div>
        {/* end fullpage */}
      </div>
    </>
  )
}

export default Home
