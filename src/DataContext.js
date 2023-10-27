import React, { useState ,createContext} from 'react'


export const DataContext=createContext();




export const DataProvider = (props)=>{
    const [data,setData]=useState([
        {
            name:"Places around the world",
            color:"#CAF8FF",
            isBookmarked:false,
            posts:[
                {
                    id:"p1",
                    subject:"Galapagos Islands, Ecuador",
                    date:"25th July",
                    image:require("./img/cardImage.png"),
                    isBookmarked:false,
                    isLiked:false,
                    comment:`The Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing. A province of Ecuador, it lies about 1,000km off its coast. Its isolated terrain shelters a diversity of plant and animal species, many found nowhere else. Charles Darwin visited in 1835, and his observation of Galápagos' species later inspired his theory of evolution.`,
                },
                {
                    id:"p2",
                    subject:"Galapagos Islands, Ecuador",
                    date:"25th July",
                    image:require("./img/cardImage.png"),
                    isBookmarked:true,
                    isLiked:false,
                    comment:`The Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing. A province of Ecuador, it lies about 1,000km off its coast. Its isolated terrain shelters a diversity of plant and animal species, many found nowhere else. Charles Darwin visited in 1835, and his observation of Galápagos' species later inspired his theory of evolution.`
                },
                {
                    id:"p3",
                    subject:"Galapagos Islands, Ecuador",
                    date:"25th July",
                    image:require("./img/cardImage.png"),
                    isBookmarked:false,
                    isLiked:true,
                    comment:`The Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing. A province of Ecuador, it lies about 1,000km off its coast. Its isolated terrain shelters a diversity of plant and animal species, many found nowhere else. Charles Darwin visited in 1835, and his observation of Galápagos' species later inspired his theory of evolution.`
                },
                {
                    id:"p4",
                    subject:"Galapagos Islands, Ecuador",
                    date:"25th July",
                    image:require("./img/cardImage.png"),
                    isBookmarked:false,
                    isLiked:false,
                    comment:`The Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing. A province of Ecuador, it lies about 1,000km off its coast. Its isolated terrain shelters a diversity of plant and animal species, many found nowhere else. Charles Darwin visited in 1835, and his observation of Galápagos' species later inspired his theory of evolution.`
                },
                {
                    id:"p5",
                    subject:"Galapagos Islands, Ecuador",
                    date:"25th July",
                    image:require("./img/cardImage.png"),
                    isBookmarked:true,
                    isLiked:true,
                    comment:`The Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing. A province of Ecuador, it lies about 1,000km off its coast. Its isolated terrain shelters a diversity of plant and animal species, many found nowhere else. Charles Darwin visited in 1835, and his observation of Galápagos' species later inspired his theory of evolution.`
                }
            ]
        },
        {
            name:"My car collection",
            color:"#FFEDC1",
            isBookmarked:true,
            posts:[
                {
                    id:"p1",
                    subject:"Galapagos Islands, Ecuador",
                    date:"25th July",
                    image:require("./img/cardImage.png"),
                    isBookmarked:true,
                    comment:`The Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing. A province of Ecuador, it lies about 1,000km off its coast. Its isolated terrain shelters a diversity of plant and animal species, many found nowhere else. Charles Darwin visited in 1835, and his observation of Galápagos' species later inspired his theory of evolution.`
                },
                {
                    id:"p2",
                    subject:"Galapagos Islands, Ecuador",
                    date:"25th July",
                    image:require("./img/cardImage.png"),
                    isBookmarked:false,
                    isLiked:true,
                    comment:`The Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing. A province of Ecuador, it lies about 1,000km off its coast. Its isolated terrain shelters a diversity of plant and animal species, many found nowhere else. Charles Darwin visited in 1835, and his observation of Galápagos' species later inspired his theory of evolution.`
                }
            ]
        },
        {
            name:"Doodle doodle ^_^",
            color:"#FFAEC0",
            isBookmarked:false,
            posts:[
                {
                    id:"p1",
                    subject:"Galapagos Islands, Ecuador",
                    date:"25th July",
                    image:require("./img/cardImage.png"),
                    isBookmarked:false,
                    isLiked:false,
                    comment:`The Galápagos Islands is a volcanic archipelago in the Pacific Ocean. It's considered one of the world's foremost destinations for wildlife-viewing. A province of Ecuador, it lies about 1,000km off its coast. Its isolated terrain shelters a diversity of plant and animal species, many found nowhere else. Charles Darwin visited in 1835, and his observation of Galápagos' species later inspired his theory of evolution.`
                }
            ]
        },
        {
            name:"Restraunts to visit",
            isBookmarked:false,
            color:"#C5C5FC",
            posts:[]
        },
        {
            name:"Anime to watch",
            isBookmarked:true,
            color:"#FFAEC0",
            posts:[]
        }
    ])
    return(
        <DataContext.Provider value={[data,setData]}>
            {props.children}
        </DataContext.Provider>

    );
}