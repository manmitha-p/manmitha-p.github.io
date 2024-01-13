

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// HERE ALL THE DATA FROM THE WEB PAGE WILL BE INSERTED
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//=========================================
// INTRODUCTION
//=========================================
export const introductionData = {
    // Hi, my name is....
    yourName: "Manmitha Pantangi", // Insert your name
    socialNetwork: [
        {
            icon: "fa fa-envelope-o",  // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Email",  // label name
            url: "pantangi.m@northeastern.edu"  //  url of the Social Network
        },
        {
            icon: "fa fa-linkedin-square", // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Linkedin",
            url: "https://www.linkedin.com/in/manmitha-pantangi/"
        },
        {
            icon: "fa fa-github-alt",   // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Github",
            url: "https://github.com/manmitha-p"
        }


    ],

    // Page session direction
    nav: [
        {
            optionNav: "About me",
            idSection: "about"    // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Skills",
            idSection: "skills"   // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Projects",
            idSection: "projects"  // If it changes, check the session id in <index.html> ;
        }


    ]

}


//=========================================
//                ABOUT ME
//=========================================
export const aboutMeData = {
    title: "About Me",
    description: "As a data analyst enthusiast, I am deeply passionate about harnessing the power of data to drive innovative business solutions. My education and hands-on experience have honed my skills in data interpretation and visualization, enabling me to craft compelling narratives from raw data. My expertise lies in transforming raw data into impactful narratives and persuasive visualizations, allowing me to effectively communicate insights to a variety of audiences. Please feel free to contact me if you're interested in working together or just want to chat about the potential of data analytics. ",
    titleURL: "Resume",
    urlCV: "https://drive.google.com/file/d/1TKHQVgB0NSCox3JpjJDdChcJOEK-T-jQ/view?usp=sharing"
}




//=========================================
//                 SKILLS 
//=========================================
export const skillsData = [


    {
        img: "assets/python.svg",  // card image  > insert the svg image in the assets folder
        nameSkill: "Python"      //  card name
    },
    {
        img: "assets/java.svg",
        nameSkill: "Java"
    },
    {
        img: "assets/js.svg",
        nameSkill: "JavaScript"
    },
    {
        img: "assets/js.svg",
        nameSkill: "JavaScript"
    }

]
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
    {
        title: "PROJECT TITLE",    // card image  > insert the svg image in the assets folder
        describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
        url: "#",  // url of the Github repository
        img: "assets/project1.jpg"  //image Project
    },
    {
        title: "PROJECT TITLE",
        describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
        url: "#",
        img: "assets/project1.jpg"
    },
    {
        title: "PROJECT TITLE",
        describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
        url: "#",
        img: "assets/project1.jpg"
    }
]
