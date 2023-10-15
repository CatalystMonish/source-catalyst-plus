import * as React from 'react';
import {Flat, Heat, Nested} from '@alptugidin/react-circular-progress-bar'
import TaskAccordian from "../components/TaskAccordian";
import CurrentTask from "./CurrentTask.jsx";
import {useNavigate} from "react-router-dom";
import { useLoading } from '../context/LoadingContext.jsx';
import {useEffect} from "react";


function OngoingCard () {
    const { setIsLoading } = useLoading();
    const navigate = useNavigate();


    const navigateOngoingProject = async () => {
        setIsLoading(true); // Start the loading state

        setTimeout(() => {
            navigate('/ongoing'); // Navigate after 2 seconds
        }, 10);
    };





    return (
        <div className="bg-white rounded-[10px] flex flex-col  ">

            <div className="flex flex-row mx-m-15  ">
                <p className="text-content font-content font-lexend mt-m-20 mr-auto">Build your own AI Assistant using Python</p>
                <div className="w-[45px] h-[45px] ml-m-20 mt-m-20 z-0">
                <Flat
                    showMiniCircle={false}
                    progress={87}
                    range={{ from: 0, to: 100 }}
                    sign={{ value: '%', position: 'end' }}
                    showValue={true}
                    sx={{
                        strokeColor: '#2E7CF6',
                        barWidth: 10,
                        bgStrokeColor: '#ffffff',
                        bgColor: { value: '#939393' ,transparency: '10' },
                        shape: 'full',
                        valueSize: 30,
                        valueWeight: 'regular',
                        valueFamily: 'lexend',
                        valueColor: '#000000',
                        textSize: 10,
                        textColor: '#000000',
                        loadingTime: 1000,
                        valueAnimation: true,
                        intersectionEnabled: true
                    }}
                />
                </div>

            </div>
            <div className="mt-m-10 flex flex-col">
            <CurrentTask
                number={3}
                title="Resume your task"/>

            <button onClick={navigateOngoingProject} className="text-label font-lexend py-[0.625rem] mb-m-20  rounded-[10px] bg-primary text-white mx-m-10 hover:bg-hover active:bg-clicked">
                Continue
            </button>
            </div>
        </div>
    );
}

export default OngoingCard;