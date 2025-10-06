import React from "react";
import { motion } from "framer-motion";
import collab1 from '../../assets/images/Collaboration/collab1.jpg';
import collab2 from '../../assets/images/Collaboration/collab2.png';
import collab3 from '../../assets/images/Collaboration/collab3.png';
import collab4 from '../../assets/images/Collaboration/collab4.png';
import Title from "../Title/Title";

const collaborationData = [
    {
        image:
            collab1,
    },
    {
        image:
            collab2,
    },
    {
        image:
            collab3,
    },
    {
        image:
            collab4,
    },
];


const HomeCollaboration = () => {
    return (
        <div className="bg-bglight dark:bg-bgdark">
            <Title title="Our Collaboration" description="Explore our range of IT solutions and executive training programs." />

            <div className="container overflow-hidden  pt-5 pb-10">

                <motion.div
                    className="flex gap-20"
                    animate={{ x: ["0%", "-120%"] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    {[...collaborationData, ...collaborationData, ...collaborationData].map((item, index) => (
                        <div key={index} className="flex-shrink-0 bg-white">
                            <img
                                src={item.image}
                                alt={`collab-${index}`}
                                className="h-32 md:h-40 w-auto object-contain rounded-sm shadow-lg shadow-lightpara dark:shadow-darkpara"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default HomeCollaboration;
