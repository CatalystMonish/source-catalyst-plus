import React, { useEffect, useState } from "react";
import TitleBold from "../components/TitleBold";
import DomainCard from "../components/DomainCard";
import ProjectCard from "../components/ProjectCard";
import ProjectItemCard from "../components/ProjectItemCard";
import { UserAuth } from "../context/AuthContext";
import FloatingActionButton from "../components/FloatingActionButton";
import CardPostItem from "../components/CardPostItem";
import { SphereSpinner } from "react-spinners-kit";
import ProgressBar from "@ramonak/react-progress-bar";
import OngoingCard from "../components/OngoingCard.jsx";
import { useNavigate } from "react-router-dom";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import LoadingModal from '../components/LoadingModal.jsx';
import { useLoading } from '../context/LoadingContext.jsx';
import ProjectCardFinal from "../components/ProjectCardFinal.jsx";
import ImageDisplay from "../components/ImageDisplay.jsx";
import FirestoreCRUD from "../components/FirestoreCRUD.jsx";



function HomeScreen() {
    const { isLoading, setIsLoading } = useLoading();
    const { logOut, user } = UserAuth();

    const navigate = useNavigate();

    const navigateOngoingProject = async () => {
        navigate("/ongoing");
    };

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <div className="min-h-screen bg-light py-[4.625rem]">
            <div className="mx-m-15">
                <TitleBold  text="ONGOING PROJECT" />
                <OngoingCard />
                <LoadingModal isOpen={isLoading} />
                <TitleBold  text="LATEST PROJECTS" />
                <FirestoreCRUD/>
                <ScrollMenu>
                <ProjectCardFinal/>
                    <ProjectCardFinal/>
                    <ProjectCardFinal/>
                    <ProjectCardFinal/>
                    <ProjectCardFinal/>
                    <ProjectCardFinal/>

                </ScrollMenu>
                </div>
                {/*<ImageDisplay/>*/}
            </div>

    );
}

export default HomeScreen;
