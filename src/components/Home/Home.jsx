import React from 'react';
import Carousal from '../Carousal/Carousal';
import Explore from "../Explore/Explore";
import {HiMagnifyingGlass} from "react-icons/hi2";
import "./Home.scss";

const Home = () => {
  return (
    <>
     <div className='home-container'>
        <Carousal />

        <main>
          <div className='search-container d-flex flex-col'>
            <div className='heading-content'>
              <h1 className='font-semibold text-8xl tracking-normal antialiased'>Discover</h1>
              <h1 className='font-medium text-5xl tracking-normal subpixel-antialiased'>amazing startups</h1>
              <p>Find great startups curated by our experts for investing.</p>
            </div>
            <div className='search-bar d-flex'>
              <div className='search-input w-5/12 mr-10 p-3' style={{border: "1px solid red"}}>
              <p>Startup Name</p>
              <input type="text" placeholder="Ex: Nearbygrocer, Nykaa, etc" />
              </div>
              <button className='rounded-none bg-red-500 p-4 text-2xl text-white rounded-lg d-flex items-center hover:bg-red-600'>
                <HiMagnifyingGlass className='mr-2 text-3xl' />
                Search
              </button>
            </div>
          </div>

          <Explore />
        </main>
     </div>
    </>
  )
}

export default Home;