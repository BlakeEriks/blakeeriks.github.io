import bitsi from "./images/bitsi.png"
import githubIcon from "./images/logos/github.svg"
import instagramIcon from "./images/logos/instagram.svg"
import linkedInIcon from "./images/logos/linkedin.svg"
import twitterIcon from "./images/logos/twitter.svg"
import poddle from "./images/poddle.png"
import profile from "./images/profile.jpg"
import stylit from "./images/stylit.png"

const data = {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Blake",
  headerTagline: [
    //Line 1 For Header
    "A fullstack developer",
    //Line 2 For Header
    "ready to take your project",
    //Line 3 For Header
    "to the next level",
  ],

  //Contact Email
  contactEmail: "blakeeriks.dev@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "💄Stylit",
      para: "Developer platform for creating, discovering and saving CSS-styled HTML components",
      img: stylit,
      tools: ["React", "NextJS", "TypeScript", "TailwindCSS", "MongoDB Cloud", "Firebase"],
      url: "https://stylit.netlify.app/",
      repo: "https://github.com/BlakeEriks/stylit",
      blog: "https://blog.blakeeriks.dev/introducing-stylit"
    },
    {
      title: "🕷️Bitsi",
      para: "Simulated exchange app where users can invest an imaginary million dollars 💸 into a variety of crypto assets",
      img: bitsi,
      tools: ["React", "Express", "Styled-components", "MongoDB Cloud", "Nivo"],
      url: "https://bitsi.netlify.app/",
      repo: "https://github.com/BlakeEriks/bitsi",
    },
    {
      title: "🎵Poddle",
      para: "Podcast discovery tool for finding and saving podcasts based on the users' genres of interest",
      img: poddle,
      tools: ["React", "Ruby on Rails", "TailwindCSS", "Listen Notes"],
      url: "https://poddle.netlify.app/",
      repo: "https://github.com/BlakeEriks/poddle",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage: profile,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      para: "HTML",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png",
      para: "CSS",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      para: "JS",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
      para: "React",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
      para: "TypeScript",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/414px-Nextjs-logo.svg.png",
      para: "NextJS",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/640px-Ruby_On_Rails_Logo.svg.png",
      para: "Ruby on Rails",
    },
    {
      img: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
      para: "Java",
    },
    {
      img: "https://i.pinimg.com/736x/a2/dc/32/a2dc3249364449a49f01a6275d277b8c.jpg",
      para: "C++",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
      para: "Python",
    },
    {
      img: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
      para: "Bootstrap",
    },
    {
      img: "https://www.netgains.org/wp-content/uploads/2014/01/node_js.png",
      para: "Node",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      para: "Express",
    },
    {
      img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      para: "MongoDB",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      para: "SQL",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
      para: "PostgreSQL",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      para: "GitHub",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
      para: "Heroku",
    },
    {
      img: "https://media.zeemly.com/media/product/vercel.png",
      para: "Vercel",
    },
    {
      img: "https://www.netlify.com/v3/img/components/logomark.png",
      para: "Netlify",
    },
    {
      img: "http://assets.stickpng.com/images/5fb6d3336e2d460004a5e31f.png",
      para: "Notion",
    },
    {
      img: "https://logos-world.net/wp-content/uploads/2021/02/Trello-Emblem.png",
      para: "Trello",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/9/9f/2015_Final_Cut_Pro_Logo.png",
      para: "Final Cut Pro",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/1200px-Adobe_Photoshop_Lightroom_CC_logo.svg.png",
      para: "Adobe Lightroom",
    },

  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  social: [
    // Add Or Remove The Link Accordingly
    { 
      img: githubIcon, 
      url: "https://github.com/BlakeEriks" 
    },
    { 
      img: twitterIcon, 
      url: "https://twitter.com/blakeeriks" 
    },
    { 
      img: linkedInIcon, 
      url: "https://www.linkedin.com/in/blake-eriks/" 
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/blakeeriks",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@BlakeEriks.com
export default data