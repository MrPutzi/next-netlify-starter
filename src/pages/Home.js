import React, { Component } from 'react'
import PhotoCarousel from '../components/Carousel'
import JFCard from '../components/JFCard'
import Subscribe from "../components/Subscribe";
import Cta from "../components/Cta";
import TryModels from "../components/TryModels";
import CheckModels from "../components/CheckModels";
import {TretiGrid} from "../components/TretiGrid";
import Carousel from "../components/Carousel";



export default class Home extends Component {
  render() {
    return (
           <div className="w-screen h-screen  ">
               <JFCard/>
             <div className="     mt-36 ">

                 <div className="grid grid-cols-3 grid-rows -3 gap-4 ">
                      <div className="pl-32 pr-32 pb-32 pt-32 "><TryModels/></div>
                      <div className="pl-32 pr-32 pb-32 pt-32  "><CheckModels/></div>
                      <div className="col-span-1 "><TretiGrid/></div>
                 </div>
              
             </div>
           </div>
    );
  }
}