import React, { useEffect, useState } from 'react';
import './Postview.css';
import Header from './components/header';
import Card from './components/Card';


const Postview = () => {
  // const [data, setData] = useState([]);  
  const [people, setPeople] = useState([]);
  const getUserData = () => {
    fetch("http://localhost:3004/user")
    .then(response=>response.json())
    .then(res=> setPeople(res))
    .catch(error=>console.log(error))
  }
  useEffect(() => {
    getUserData();
  }, [])
 
  return (
    <>
      <Header></Header>
      <Card people={people}></Card>
      <div className="site-container">
      </div>
    </>
  );
}
//async, await, fetch, set time out, set interval, life cycles methods in react, useEffect, useState, class component/functional component,state & props, react native


export default Postview;