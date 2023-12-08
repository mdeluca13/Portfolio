// Importing project images
import pythonNewsfeed from '../../assets/images/python-newsfeed.jpg';
import codingEmpireConference from '../../assets/images/coding-empire-conference.jpg';
import textEditor from '../../assets/images/text-editor.jpg';
import socialNetworkAPI from '../../assets/images/social-network-api.jpg';
import employeeTracker from '../../assets/images/employee-tracker.jpg';
import eCommerceBackend from '../../assets/images/e-commerce-backend.jpg';
import weatherDashboard from '../../assets/images/weather-dashboard.jpg';
import voltwheels from '../../assets/images/voltwheels.jpg';

// Adding all projects to display
const projects = [
    {
        id: 1,
        title: 'Voltwheels',
        deployed: 'https://mdeluca-voltwheels-12524d181b8f.herokuapp.com/',
        github: 'https://github.com/mdeluca13/voltwheels',
        image: voltwheels,
    },
    {
        id: 2,
        title: 'Python Newsfeed',
        deployed: 'https://mdeluca-python-newsfeed-ff90091350ec.herokuapp.com/',
        github: 'https://github.com/mdeluca13/python-newsfeed',
        image: pythonNewsfeed,
    },
    {
        id: 3,
        title: 'Coding Empire Conference',
        deployed: 'https://github.com/mdeluca13/coding-empire-conference',
        github: 'https://github.com/mdeluca13/coding-empire-conference',
        image: codingEmpireConference,
    },
    {
        id: 4,
        title: 'Text Editor',
        deployed: 'https://github.com/mdeluca13/text-editor',
        github: 'https://github.com/mdeluca13/text-editor',
        image: textEditor,
    },
    {
        id: 5,
        title: 'Social Network API',
        deployed: 'https://github.com/mdeluca13/social-network-api',
        github: 'https://github.com/mdeluca13/social-network-api',
        image: socialNetworkAPI,
    },
    {
        id: 6,
        title: 'Employee Tracker',
        deployed: 'https://github.com/mdeluca13/employee-tracker',
        github: 'https://github.com/mdeluca13/employee-tracker',
        image: employeeTracker,
    },
    {
        id: 7,
        title: 'E-Commerce Backend',
        deployed: 'https://github.com/mdeluca13/e-commerce-backend',
        github: 'https://github.com/mdeluca13/e-commerce-backend',
        image: eCommerceBackend,
    },
    {
        id: 8,
        title: 'Weather Dashboard',
        deployed: 'https://mdeluca13.github.io/weather-dashboard/',
        github: 'https://github.com/mdeluca13/weather-dashboard',
        image: weatherDashboard,
    }
];
  
export default projects;