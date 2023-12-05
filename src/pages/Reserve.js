import React, {Component} from 'react';
import ReserveSystem from "../components/ReserveSystem";
import JFCard from "../components/JFCard";
import TryModels from "../components/TryModels";
import CheckModels from "../components/CheckModels";
import {TretiGrid} from "../components/TretiGrid";

class Reserve extends Component {
    render() {
        return (
                <div className="w-screen h-screen  ">
                    <div className="     mt-36 ">
                        <div className="grid grid-cols-3 gap-4 ">
                            <div className=" col-span-1 "></div>
                            <div className="col-span-1 ">  </div>
                            <div className="col-span-1 "></div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default Reserve;