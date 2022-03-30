import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
 const {name,location,age,bloodGroup,profileImg} = props.employee;
    
return(
  <div className="container">
  {/* Start your React code here */}
  <div className="image">
    <img src = {profileImg} alt="image"></img>
  </div>
  <div className = "data">
    <h2>{name}</h2>
    <br></br>
    <p>Location</p>
    <h3>{location}</h3>
    <br></br>
    <p>Blood Group</p>
    <h3>{bloodGroup}</h3>
    <br></br>
    <p>Age</p>
    <h3>{age}</h3>
  </div>

</div>
)
}



export default App;
