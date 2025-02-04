import AWSImg from '../Assets/Images/AWS_Academy_Cloud_Foundations.jpg'
import AWSlogo from '../Assets/icons/aws-logo.svg'
import AWSMLimg from '../Assets/Images/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_Foundations.jpg'
import IOcert from '../Assets/Images/IOcert.jpg'
import IOlogo from '../Assets/icons/IOlogo.png'
import Udemylogo from '../Assets/icons/Udemy.svg'
import UdemyImg from '../Assets/Images/Image Processing Udemy_pages-to-jpg-0001.jpg'
import UdemyImg1 from '../Assets/Images/udemyImg.jpeg'
import Dyplogo from '../Assets/icons/d_y_patil_college_of_engineering__technology_kasaba_bawada_logo.jpg'
import DypImage from '../Assets/Images/ quiz_competition_cert.jpeg''

const CertificatesInfo = [
    {
        id: 1,
        ava_icon: Dyplogo,
        link: 'https://www.linkedin.com/in/pradeep-mokashi/details/certifications/',
        title: '2nd Prize in Quiz Competition',
        subheader:
            'D. Y. Patil College of Engineering and Techonology, Kolhpaur',
        img: DypImage,
    },
    {
        id: 2,
        ava_icon: AWSlogo,
        link: 'https://www.credly.com/go/veuWgVBf',
        title: 'AWS Academy Cloud Foundations',
        subheader: 'Amazon Web Services Training and Certification',
        img: AWSImg,
    },
    {
        id: 3,
        ava_icon: AWSlogo,
        link: 'https://www.credly.com/badges/fb21fe16-a1a5-4fdd-a22f-ffb300a773df/public_url',
        title: 'AWS Academy Machine Learning',
        subheader: 'Amazon Web Services Training and Certification',
        img: AWSMLimg,
    },
    {
        id: 4,
        ava_icon: Udemylogo,
        link: 'https://ude.my/UC-485e29eb-edfe-4ff0-96a1-7392b3a72c27',
        title: 'Image Processing and Computer Vision with Python & OpenCV',
        subheader: 'Udemy',
        img: UdemyImg,
    },
    {
        id: 5,
        ava_icon: Udemylogo,
        link: 'https://ude.my/UC-2fd7c466-3b66-440a-a8dc-75dad97bec55',
        title: 'Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2023',
        subheader: 'Udemy',
        img: UdemyImg1,
    },

    {
        id: 6,
        ava_icon: IOlogo,
        link: 'https://www.linkedin.com/in/pradeep-mokashi/details/certifications/',
        title: 'Certified Cyber Crime Intervention Officer',
        subheader: 'National Security Database',
        img: IOcert,
    },
]

export default CertificatesInfo
