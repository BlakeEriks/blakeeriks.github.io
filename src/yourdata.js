// Skills Icons
import codeIcon from "./images/code.svg"
import cssIcon from "./images/css.svg"
import designIcon from "./images/design.svg"
// Social Icon
import githubIcon from "./images/github.svg"
import htmlIcon from "./images/html.svg"
import instagramIcon from "./images/instagram.svg"
import jsIcon from "./images/javascript.svg"
import reactIcon from "./images/react.svg"
import twitterIcon from "./images/twitter.svg"
import linkedInIcon from "./images/linkedin.svg"
import stylit from "./images/stylit.png"
import bitsi from "./images/bitsi.png"
import poddle from "./images/poddle.png"
import profile from "./images/profile.jpg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Blake",
  headerTagline: [
    //Line 1 For Header
    "A digital native building",
    //Line 2 For Header
    "the future of our interactions",
    //Line 3 For Header
    "with technology",
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

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
    // {
    //   title: "Project Four",
    //   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   url: "http://BlakeEriks.com/",
    // },
    // {
    //   title: "Project Five",
    //   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   url: "http://BlakeEriks.com/",
    // },
    // {
    //   title: "Project Six",
    //   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   url: "http://BlakeEriks.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
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
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
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
