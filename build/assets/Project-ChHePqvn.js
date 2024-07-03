import{P as t,j as e,M as n,L as a}from"./index-C6cgQBGM.js";import{d as r}from"./dayjs.min--JjsIglT.js";const o=[{title:"AeroRhythm Enhanced",subtitle:"Final Year Project",image:"/images/projects/aerorhythm.jpg",link:"https://github.com/athulSreenivas/AeroRhythm",date:"2023-07-01",desc:"AeroRhythm Enhanced builds upon the original gesture-controlled music player by integrating personalized gesture profiles. It offering a highly interactive and personalized music experience.."},{title:"SecureEval ProctorSuit",subtitle:"Advanced AI-Powered Online Exam Proctoring System",image:"/images/projects/secureeval_proctorsuit.jpg",date:"2024-02-15",desc:"Developed an AI-driven proctoring system that integrates facial recognition, emotion prediction, and object detection to ensure secure and fair online examinations. SecureEval ProctorSuit addresses authentication, monitoring, and exam management challenges, providing a comprehensive solution for the evolving needs of digital education."},{title:"Gemini Clone",subtitle:"A Gemini clone built using React and Vite",link:"https://github.com/athulSreenivas/GeminiClone",image:"/images/projects/gemini.png",date:"2024-05-29",desc:"Developed a Gemini clone application using React and Vite .The project utilizes the Gemini API for real-time data and employs modern web technologies like Redux and Bootstrap to deliver a seamless and intuitive user experience."},{title:"Spotify Clone",subtitle:"A Spotify clone built using React and Vite",link:"https://github.com/athulSreenivas/spotify-clone",image:"/images/projects/spotify_.png",date:"2024-06-15",desc:"Created a Spotify clone application using React and Vite, featuring user authentication, music playback, playlist management, and a responsive design. The project leverages the Spotify Web API for music data and incorporates modern web technologies like Redux and Tailwind CSS to provide a seamless user experience."}],s=({data:i})=>e.jsx("div",{className:"cell-container",children:e.jsxs("article",{className:"mini-post",children:[e.jsxs("header",{children:[e.jsx("h3",{children:e.jsx("a",{href:i.link,children:i.title})}),e.jsx("time",{className:"published",children:r(i.date).format("MMMM, YYYY")})]}),e.jsx("a",{href:i.link,className:"image",children:e.jsx("img",{src:`http://localhost:5173/${i.image}`,alt:i.title})}),e.jsx("div",{className:"description",children:e.jsx("p",{children:i.desc})})]})});s.propTypes={data:t.shape({title:t.string.isRequired,link:t.string,image:t.string.isRequired,date:t.string.isRequired,desc:t.string.isRequired}).isRequired};const d=()=>e.jsx(n,{title:"Projects",description:"Learn About Athul Sreenivas projects",children:e.jsxs("article",{className:"post",id:"projects",children:[e.jsx("header",{children:e.jsx("div",{className:"title",children:e.jsx("h2",{children:e.jsx(a,{to:"/projects",children:"Projects"})})})}),o.map(i=>e.jsx(s,{data:i},i.title))]})});export{d as default};
