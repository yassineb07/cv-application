import '/src/styles/App.css';
import CvCustom from './cvCustom';
import CvCanvas from './cvCanvas';

const userData = {
  personalInfo: {
    name: 'john doe',
    job: 'software engineer',
    email: 'john@doe',
    phone: '555 555 555',
    address: 'address',
  },
  education: [
    {
      univName: 'london uni',
      location: 'london',
      degree: 'cs',
      start: '2/9/2018',
      end: '25/7/2021',
    },
  ],
  experience: [
    {
      companyName: 'google',
      location: 'california',
      position: 'engineer',
      start: '2020',
      end: 'present',
    },
  ],
};

function App() {
  return (
    <div className="app">
      <CvCustom />
      <CvCanvas userData={userData} />
    </div>
  );
}

export default App;
