import prog_logo from '../Assets/icons/Prog_logo.jpg'
import hdfcergo_logo from '../Assets/icons/hdfcergo_logo.svg'
const ReactIcon = 'https://img.icons8.com/color/48/react-native.png'
const VuetifyIcon = 'https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo-atom.svg'
const MUIIcon = 'https://img.icons8.com/color/32/material-ui.png'
const GTMIcon = 'https://img.icons8.com/color/48/google-tag-manager.png'
const GAIcon = 'https://img.icons8.com/color/48/google-analytics.png'
const NodeIcon = 'https://img.icons8.com/color/48/nodejs.png'
const MongoDBIcon = 'https://img.icons8.com/color/48/mongodb.png'
const ExpressIcon = 'https://img.icons8.com/color/48/express-js.png'
const VueIcon = 'https://img.icons8.com/color/48/vue-js.png'

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
    { component: GAIcon, name: 'Google Analytics' },
    { component: GTMIcon, name: 'Google Tag Manager' },
]

const ExperienceInfo = [
    {
        Months: 'Jan 2024 - Present',
        CompanyName: 'HDFC ERGO General Insurance Company Ltd.',
        Role: 'Web Developer Intern',
        CompanyLogo: hdfcergo_logo,
        Description:
            'Build HR recruitment Platform. Collaborated with Digital Banca Team for frontend. Implemented Google Tag Manager to streamline data collection and enhance tracking capabilities in Google. Researched AI tools for social media management, marketing, audio content creation, and chatbots.',
        TechIcon: icons2,
        CompanyLink: 'https://www.hdfcergo.com/',
        Place: 'Bhandup, Mumbai, MH',
    },
    {
        Months: 'Nov 2022 - May 2023',
        CompanyName: 'Progneur Technologies Pvt. Ltd.',
        Role: 'Software Development Engineer Intern',
        CompanyLogo: prog_logo,
        Description:
            'Build Part Number System. Collaborated for LMS project. Collaborated for Memory Card Game.',
        TechIcon: icons,
        CompanyLink: 'https://www.progneur.com/',
        Place: 'Work From Home',
    },
]

export default ExperienceInfo
