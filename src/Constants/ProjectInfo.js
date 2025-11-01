import RedBImage from '../Assets/icons/Picture2.png'

const HtmlIcon = 'https://img.icons8.com/fluency/48/html-5.png'
const CssIcon = 'https://img.icons8.com/fluency/48/css3.png'
const JsIcon = 'https://img.icons8.com/color/48/javascript--v2.png'
const ReactIcon = 'https://img.icons8.com/color/48/react-native.png'
const PythonIcon = 'https://img.icons8.com/color/48/python--v1.png'
const CIcon = 'https://img.icons8.com/color/48/c-programming.png'
const VueIcon = 'https://img.icons8.com/color/48/vue-js.png'
const VuetifyIcon = 'https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo-atom.svg'
const MUIIcon = 'https://img.icons8.com/color/32/material-ui.png'
const NodeIcon = 'https://img.icons8.com/color/48/nodejs.png'
const MongoDBIcon = 'https://img.icons8.com/color/48/mongodb.png'
const ExpressIcon = 'https://img.icons8.com/color/48/express-js.png'
const MLIcon = 'https://img.icons8.com/pastel-glyph/64/brain-3--v1.png'
const pacmanicon = 'https://img.icons8.com/fluency/48/pacman.png'

const icons = [
    { component: VueIcon, name: 'Vue.js' },
    { component: JsIcon, name: 'Javascript' },
    { component: NodeIcon, name: 'Node.js' },
    { component: MongoDBIcon, name: 'MongoDB' },
    { component: ExpressIcon, name: 'Express.js' },
    { component: VuetifyIcon, name: 'Vuetify' },
]

const icons2 = [
    { component: ReactIcon, name: 'React.js' },
    { component: JsIcon, name: 'Javascript' },
    { component: NodeIcon, name: 'Node.js' },
    { component: MongoDBIcon, name: 'MongoDB' },
    { component: ExpressIcon, name: 'Express.js' },
    { component: MUIIcon, name: 'Material UI' },
]

const icons1 = [{ component: CIcon, name: 'C' }]

const icons3 = [
    { component: PythonIcon, name: 'Python' },
    { component: MLIcon, name: 'Machine Learning' },
    {
        component:
            'https://www.djangoproject.com/m/img/logos/django-logo-positive.png',
        name: 'Django',
    },
    { component: HtmlIcon, name: 'HTML5' },
    { component: CssIcon, name: 'CSS3' },
]

const ProjectInfo = [
    {
        AvatarIcon: RedBImage,
        Title: 'RedB',
        SubHeader:
            'Intelligent blood Management System for Hospitals and Blood Banks',
        src: 'https://res.cloudinary.com/dmy7eqzxr/video/upload/v1761607704/RedB_drp0vl.m3u8',
        Description:
            'RedB is a new generation technology that connects hospital administration with blood banks. RedB is a platform that connects hospital administration with blood banks. This innovative platform is designed to streamline blood bank operations and improve patient safety by ensuring timely access to blood products when needed',
        TechIcon: icons,
        Project_link: 'https://redb.vercel.app/',
    },
    {
        AvatarIcon: ReactIcon,
        Title: 'HR Management',
        SubHeader: 'Associated with HDFC ERGO General Insurance Company Ltd.',
        src: 'https://res.cloudinary.com/dmy7eqzxr/video/upload/v1761607750/HR_management_p0icab.m3u8',
        Description: `This web application is designed to streamline Human Resource (HR) processes for organizations. It utilizes the MERN stack for development and offers several functionalities for both admins and users.`,
        TechIcon: icons2,
        github_link: 'https://github.com/PolyMokashi',
    },
    {
        AvatarIcon: VueIcon,
        Title: 'Part Number System',
        SubHeader: 'Associated with Progneur Technologies Pvt. Ltd.',
        project_image: 'https://iili.io/KscHyOu.md.png',
        Description:
            'A part number system is a method for uniquely identifying and organizing interchangeable parts within a supply chain or inventory management system. It helps track parts, streamline ordering, and ensure efficient assembly. Build a RESTful API with Node.js and Express.js to manage part numbers in a MongoDB database. Create a Vue.js frontend for viewing, adding, editing, and deleting part numbers with functionalities.',
        TechIcon: icons,
        github_link: 'https://github.com/PolyMokashi',
    },
    {
        AvatarIcon: pacmanicon,
        Title: 'Pacman using C Programming',
        SubHeader: 'A classic Pacman game implemented in C',
        src: 'https://res.cloudinary.com/dmy7eqzxr/video/upload/v1761607750/Pacman_bs8oss.m3u8',
        Description:
            'The outcome of this Pacman project is a fully functional and interactive game that provides users with an engaging experience as they maneuver Pacman through a maze, collect pellets, and strategize to avoid ghosts while aiming to achieve a high score. The project showcases effective game development skills in C.',
        github_link: 'https://github.com/PolyMokashi/Pacman_using_C',
        TechIcon: icons1,
    },
    {
        AvatarIcon: PythonIcon,
        Title: 'Face Democracy- Next Generation Voting',
        SubHeader: 'Online Voting System Using Facial Recognition',
        project_image: 'https://iili.io/KscHsV4.md.jpg',
        Description:
            'In the digital era, electronic voting machines (EVMs) have emerged to address traditional voting challenges, offering faster tabulation and reduced human error. However, concerns about their security and accuracy persist, especially highlighted during the COVID-19 pandemic, which underscored the need for contactless voting methods. Integrating face-detection technology, a field of artificial intelligence and computer vision, into EVMs presents a promising solution. This technology, proven effective in various sectors for precise identification, can enhance security by verifying voter identities and preventing fraud such as impersonation and multiple voting. This integration aims to revolutionize the electoral process, making it more secure, efficient, and trustworthy.',
        TechIcon: icons3,
        github_link: 'https://github.com/PolyMokashi',
    },
]

export default ProjectInfo
