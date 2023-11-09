
import './App.css';
import Header from './Components/Header';
import House from './Components/House';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchFilter from './Components/SearchFilter';
import SearchResults from './Components/SearchResults';
import SearchedHouse from './Components/SearchedHouse';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Footer from './Components/Footer';
import axios from 'axios';
import EnquiryList from './Components/EnquiryList';
import Enquiry from './Components/Enquiry';


function App() {


  let [housesData, setHousesData] = useState([]);

  // to read houses.json and send one house obj to House.js
  useEffect(() => {
    console.log('in useEffect');
    const fetchData = async () => {
      let resp = await axios.get(process.env.REACT_APP_BACKENDURL);
      let data = await resp.data;
      // console.log(' date from json - ');
      console.log(data);
      setHousesData(data);
      // console.log('data from state');    
      console.log(housesData);
      //write the data to the state so we can use it anywhere in the component


    };
    fetchData();

  }, []);


  return (
    <div className='container-fluid'>
      <Header />
      <SearchFilter houses={housesData} />
      <Routes>
        <Route path='/' element={<House houseinfo={housesData[1]} />} />
        <Route path='searchresults/:county' element={<SearchResults houses={housesData} />} />
        <Route path='searchedHouse/:id' element={<SearchedHouse houses={housesData} />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='enquiry' element={<Enquiry />} />
        <Route path='enquiries' element={<EnquiryList />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
