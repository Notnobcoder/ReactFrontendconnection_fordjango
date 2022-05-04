import logo from './logo.svg';
import axios from "axios"
import {useEffect, useState} from "react"
import './App.css';

function App() {
  const [students,setStudents]=useState([])
  useEffect(()=>{
    async function getAllStudents(){
      try{
        const students=await axios.get("http://localhost:8000/api/student/")
        console.log(students.data);
        setStudents(students.data)
        }catch(error){
          console.log(error)
        } 
    }
    getAllStudents()
  },[])
  return (
    <div className="App">
      <h1>Connect teact with django</h1>
      <h3>{students[0].stuname}</h3>
      <h3>{students[0].email}</h3>

    </div>
  );
}

export default App;
