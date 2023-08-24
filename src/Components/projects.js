const projectList = [
    {
       id:1,
       projectName:"Ask-me-anything",
       image:"https://res.cloudinary.com/dau2bi3nn/image/upload/v1692346085/ask-me-anything.2_kcib8k.jpg",
       description:"Implemented ChatGPT application that uses OpenAI API to provide prompt responses to user-entered questions without delay. The application allows users to type in a question, which is sent to the server, where it is processed by the OpenAI API to generate a response. The response is then sent back to the client and displayed on the screen.",
       points:["Implemented server-side logic in Node.js with Express.js framework, which handles incoming requests and interacts with OpenAI API to generate responses.","Implemented client-side logic in React.js with functional components. Used fetch API to send HTTP POST requests to the server with user-entered value as JSON body."],
       technologies:["HTML", "CSS", "JS", "REST API Calls","React.js", "Node.js", "Express", "OpenAI model"],
       githubrepolink:"https://github.com/JalagariJayanth/Ask-me-anything.git",
       sliderimages:["https://res.cloudinary.com/dau2bi3nn/image/upload/v1692412139/Screenshot_391_ebctoz.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692189164/Screenshot_385_uqqgbt.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692412025/Screenshot_390_pkqnbv.png"],

    },
    {
        id:2,
        projectName:"Books-Hub",
        image:"https://res.cloudinary.com/dau2bi3nn/image/upload/v1687011716/Rectangle_1467_w9thn2.png",
        description:"Implemented responsive Goodreads Clone where users can log in and see a list of books, bookshelves like all shelves (books sorted by rating), completed reading shelf, currently reading shelf, want to read shelf , and user can also search books with author's name and book's name",
        points:["Utilized React Router, React Rating Stars, React Select, and fetch APIs to bring the platform to life."," Designed a stunning UI with Figma and Bootstrap, and ensured secure access with client storage authentication."],
        technologies:[ "HTML", "CSS", "JavaScript"," ReactJS", "Bootstrap","Figma", "clientStorage"],
        githubrepolink:"https://github.com/JalagariJayanth/BookHubApp.git",
        demolink:"https://projectbookshub.ccbp.tech/login",
        sliderimages:["https://res.cloudinary.com/dau2bi3nn/image/upload/v1692432339/bookhub.4_tutad7.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692430971/bookhub.3_ca74ph.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692430986/bookhub.2_bp0hgg.png"]
    },
    {

        id:3,
        projectName:"Nxttrendz",
        image:"https://res.cloudinary.com/dau2bi3nn/image/upload/v1692358693/lll_3_mprsjf.jpg",
        description:"Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
        points:["Implemented Different pages and routes for Login, Products, Product details using React Router components Route, Switch, Link, props, state, lists, event handlers, form inputs.","Authenticating and authorizing users by taking username, password and doing login POST HTTP API Call and implementing filters by sending them as query parameters to product api calls with persisted user login state"],
        technologies:[ "ReactJS", "JS", "CSS", "Bootstrap", "Routing", "REST API Calls", "LocalStorage", "JWTToken", "Authorization", "Authentication"],
        githubrepolink:"https://github.com/JalagariJayanth/Nxttrendz.git",
        demolink:"https://nxttrendzshop.ccbp.tech/login",
        sliderimages:["https://res.cloudinary.com/dau2bi3nn/image/upload/v1692435961/n_ypblq5.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692435981/n.2_hjixds.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692435993/n.3_kbhkrq.png"],

    },
    {
        id:4,
        projectName:"NxtWatch",
        image:"https://res.cloudinary.com/dau2bi3nn/image/upload/v1692359212/watch.2_j88jvk.png",
        description:"Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark).",
        points:[" Implemented Different pages and routes like Login, Home, Trending, Gaming, Saved videos using React components, props, state, lists, event handlers, form inputs."," Authenticating by taking username, password and doing login post HTTP API Call.Persisted user login state by keeping jwt token in local storage, Sending it in headers of further API calls to authorize the user"],
        technologies:[ "ReactJS", "JS", "CSS", "Bootstrap", "Routing", "REST API Calls", "LocalStorage", "JWTToken", "Authorization", "Authentication"],
        githubrepolink:"https://github.com/JalagariJayanth/NxtWatch.git",
        demolink:"https://utubecloneapp.ccbp.tech/login",
        sliderimages:["https://res.cloudinary.com/dau2bi3nn/image/upload/v1692441740/u_gnhufx.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692441774/u.2_rpanic.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692441809/u.1_ojzou1.png"],

    },
    {
        id:5,
        projectName:"Twitter clone-API",
        image:"https://res.cloudinary.com/dau2bi3nn/image/upload/v1692359633/twitter.2_ycnc9y.jpg",
        description:"In Node.js, an API (Application Programming Interface) refers to a set of functions and protocols that allows different software applications to communicate and interact with each other.APIs in Node.js can be used to create and expose web services that enable clients (such as web browsers or mobile applications) to consume data or perform actions on the server.",
        points:["Node.js APIs are created by using frameworks like Express.js.These APIs define the routes, HTTP methods (GET, POST, PUT, DELETE), request handling logic, and response generation.","They provide endpoints that clients can call to access or manipulate data stored on the server, perform CRUD operations, or execute specific actions."],
        technologies:["NodeJS","ExpressJS","API"],
        githubrepolink:"https://github.com/JalagariJayanth/twitterclone.git",
        sliderimages:["https://res.cloudinary.com/dau2bi3nn/image/upload/v1692442661/t_aczooa.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692442698/t.1_tfezwt.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692443133/Screenshot_405_dhklkc.png"],

    },
    {
        id:6,
        projectName:"Wikipedia-search",
        image:"https://res.cloudinary.com/dau2bi3nn/image/upload/v1692357519/wiki.2_m0grie.jpg",
        description:"Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result",
        points:[" Displayed list of search results with HTML list elements with hyperlink as url,styled list using CSS, Bootstrap and implemented responsiveness using Flex properties and CSS Box model.","Fetched search results from server asynchronously using fetch GET HTTP API call. When a user clicks on a particular result, opens the website in a new tab by using the target attribute of the anchor tag in HTML."],
        technologies:["HTML", "CSS", "JS", "REST API Calls", "Bootstrap"],
        demolink:"https://minisearchwiki.ccbp.tech/",
        sliderimages:["https://res.cloudinary.com/dau2bi3nn/image/upload/v1692444075/w_eq3p5u.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692444080/w.1_sr1t3f.png"],
    },
    {
        id:7,
        projectName:"Food-munch",
        image:"https://res.cloudinary.com/dau2bi3nn/image/upload/v1692357352/food-munch.2_e4aszr.jpg",
        description:"Discover the world of food with this responsive website that showcases a comprehensive list of food items.",
        points:[" Designed with a user-centric approach, this website features HTML structure elements and Bootstrap components to ensure a seamless experience.","Get a closer look at the food items with product videos, available at the click of a button"],
        technologies:["HTML","CSS","Bootstrap"],
        demolink:"https://foodmunch45.ccbp.tech/",
        sliderimages:["https://res.cloudinary.com/dau2bi3nn/image/upload/v1692444097/f_oxrozc.png","https://res.cloudinary.com/dau2bi3nn/image/upload/v1692444105/f.1_nx4e8n.png"],

    }
]
export default projectList
