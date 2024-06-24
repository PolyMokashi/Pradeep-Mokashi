import VueIcon from '../Images/vue-js.svg'
import NodeIcon from '../Images/nodejs.svg'
import MongoDBIcon from '../Images/mongodb.svg'
import ExpressIcon from '../Images/express-js.svg'
import ReactIcon from '../Images/react.svg'
import MUIIcon from '../Images/material-ui.svg'
import VuetifyIcon from '../Images/vuetify.svg'
import cIcon from '../Images/c-programming.svg'
import RedB from '../Images/RedB.mp4'
import PartImage from '../Images/Part_Number.png'
import Pacman1 from '../Images/Pacman.mp4'
import HRmanage from '../Images/HR_management.mp4'
import FaceDemocracy from '../Images/Face_democracy.jpg'
import PythonImage from '../Images/python.svg'
import HtmlIcon from '../Images/html.svg'
import CssIcon from '../Images/css.svg'

const icons = [
    { component: VueIcon, name: 'Vue.js' },
    { component: NodeIcon, name: 'Node.js' },
    { component: MongoDBIcon, name: 'MongoDB' },
    { component: ExpressIcon, name: 'Express.js' },
    { component: VuetifyIcon, name: 'Vuetify' },
]

const icons2 = [
    { component: ReactIcon, name: 'React.js' },
    { component: NodeIcon, name: 'Node.js' },
    { component: MongoDBIcon, name: 'MongoDB' },
    { component: ExpressIcon, name: 'Express.js' },
    { component: MUIIcon, name: 'Material UI' },
]

const icons1 = [{ component: cIcon, name: 'C' }]

const icons3 = [
    { component: PythonImage, name: 'Python' },
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
        AvatarIcon: 'https://i.ibb.co/xmQnySf/Picture2.png',
        Title: 'RedB',
        SubHeader:
            'Intelligent blood Management System for Hospitals and Blood Banks',
        src: RedB,
        Description:
            'RedB is a new generation technology that connects hospital administration with blood banks. RedB is a platform that connects hospital administration with blood banks. This innovative platform is designed to streamline blood bank operations and improve patient safety by ensuring timely access to blood products when needed',
        TechIcon: icons,
        Project_link: 'https://redb.vercel.app/',
    },
    {
        AvatarIcon: ReactIcon,
        Title: 'HR Management',
        SubHeader: 'Associated with HDFC ERGO General Insurance Company Ltd.',
        src: HRmanage,
        Description: `This web application is designed to streamline Human Resource (HR) processes for organizations. It utilizes the MERN stack for development and offers several functionalities for both admins and users.`,
        TechIcon: icons2,
        github_link: 'https://github.com/PolyMokashi',
    },
    {
        AvatarIcon: VueIcon,
        Title: 'Part Number System',
        SubHeader: 'Associated with Progneur Technologies Pvt. Ltd.',
        project_image: PartImage,
        Description:
            'A part number system is a method for uniquely identifying and organizing interchangeable parts within a supply chain or inventory management system. It helps track parts, streamline ordering, and ensure efficient assembly. Build a RESTful API with Node.js and Express.js to manage part numbers in a MongoDB database. Create a Vue.js frontend for viewing, adding, editing, and deleting part numbers with functionalities.',
        TechIcon: icons,
        github_link: 'https://github.com/PolyMokashi',
    },
    {
        AvatarIcon: 'https://i.ibb.co/qd6yWR9/pacman.png',
        Title: 'Pacman using C Programming',
        SubHeader: 'A classic Pacman game implemented in C',
        src: Pacman1,
        Description:
            'The outcome of this Pacman project is a fully functional and interactive game that provides users with an engaging experience as they maneuver Pacman through a maze, collect pellets, and strategize to avoid ghosts while aiming to achieve a high score. The project showcases effective game development skills in C.',
        github_link: 'https://github.com/PolyMokashi/Pacman_using_C',
        TechIcon: icons1,
    },
    {
        AvatarIcon: PythonImage,
        Title: 'Face Democracy- Next Generation Voting',
        SubHeader: 'Online Voting System Using Facial Recognition',
        project_image: FaceDemocracy,
        Description:
            'In the digital era, electronic voting machines (EVMs) have emerged to address traditional voting challenges, offering faster tabulation and reduced human error. However, concerns about their security and accuracy persist, especially highlighted during the COVID-19 pandemic, which underscored the need for contactless voting methods. Integrating face-detection technology, a field of artificial intelligence and computer vision, into EVMs presents a promising solution. This technology, proven effective in various sectors for precise identification, can enhance security by verifying voter identities and preventing fraud such as impersonation and multiple voting. This integration aims to revolutionize the electoral process, making it more secure, efficient, and trustworthy.',
        TechIcon: icons3,
        github_link: 'https://github.com/PolyMokashi',
    },
]

export default ProjectInfo
