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
import { useNavigate } from "react-router-dom";

import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import {data} from "autoprefixer";

function HomeScreen() {
    const [loading, setLoading] = useState(true);
    const { logOut, user } = UserAuth();
    const [posts, setPosts] = useState([]);
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



    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // set loading to true when you start fetching data
                const { snapshots } = await FirebaseFirestore.getCollection({
                    reference: "posts"
                });
                const postData = [];

                for (const snapshot of snapshots) {
                    const data = snapshot.data;
                    const authorData = await fetchAuthorData(data.postAuthor);
                    postData.push({
                        id: snapshot.id,
                        authorName: authorData ? authorData.displayName : "",
                        authorIntro: authorData ? authorData.bio : "",
                        authorImg: authorData ? authorData.photoURL : "",
                        ...data,
                    });
                }

                setPosts(postData);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching posts:", error);
                setLoading(false); // set loading to false even on an error
            }
        };

        fetchData();
    }, []);

    const fetchAuthorData = async (authorId) => {
        const { snapshot } = await FirebaseFirestore.getDocument({
            reference: `users/${authorId}`
        });
        if (data) {
            return data;
        } else {
            console.log(`No such user with authorId: ${authorId}`);
            return null;
        }
    };
    return (
        <div className="min-h-screen bg-light py-[4.625rem]">
            <div className="mx-m-15">
                <TitleBold text="ONGOING PROJECT" />
                {/* <div
          onClick={navigateOngoingProject}
          className="flex justify-center rounded-md bg-white py-[40px]"
        >
          <p className="text-center font-lexend text-content font-content">
            Choose a Project Now
          </p>
        </div> */}
                <div
                    onClick={navigateOngoingProject}
                    className="flex w-full flex-col justify-center rounded-lg bg-white p-s-15"
                >
                    <p className="font-lexend text-content font-content">
                        Secure Password Generator
                    </p>
                    <ProgressBar
                        className="mt-m-10 w-full"
                        completed={180}
                        height="0.625rem"
                        isLabelVisible={false}
                        bgColor="#219653"
                        maxCompleted={200}
                    />
                    <p className="ml-auto mt-m-10 font-lexend text-content-body font-content-body text-text-light">
                        4 Tasks Left
                    </p>
                </div>
                {/* empty project div */}

                <TitleBold text="FROM OUR COMMUNITY" />
                <div className="">
                    <div className="items-center justify-center space-y-2 py-5 md:space-y-4 ">
                        {loading ? (
                            <div className="flex items-center justify-center py-5">
                                <SphereSpinner size={30} color="#2E7CF6" loading={loading} />
                            </div>
                        ) : (
                            posts.map((post) => (
                                <CardPostItem
                                    key={post.id}
                                    postId={post.id}
                                    authorName={post.authorName}
                                    authorIntro={post.authorIntro}
                                    postTitle={post.postTitle}
                                    postContent={post.postContent}
                                    imgSrc={post.authorImg}
                                    likesCount={post.likesCount}
                                />
                            ))
                        )}
                    </div>
                </div>

                {/* <TitleBold text="SUPPORT" />
        <button onClick={handleSignOut}>Logout</button> */}
            </div>
            <FloatingActionButton />
        </div>
    );
}

export default HomeScreen;
