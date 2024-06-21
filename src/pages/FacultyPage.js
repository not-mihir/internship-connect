import  logo from "../img/logo.webp"
import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import abhishek from '../img/Abhishek-Jindal.jpg';
import './FacultyPage.css'

export default class FacultyPage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>Faculty Information</h1><div>
        <div className="faculty-cards-container">
        <div className="card" style={{width: "20rem", height: "auto"}}>
  <img src={abhishek} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><a href="/" className="card-link">Abhishek Jindal</a></h5>
    <p className="card-text">PhD (Wireless Communications), IIT Delhi</p>
  </div>
  <ul className="list-group list-group-flush">
    
    <li className="list-group-item"># 4101, FB-4, DA-IICT, Gandhinagar, Gujarat, India – 382007</li>
    <li className="list-group-item">abhishek_jindal@daiict.ac.in</li>
  </ul>
  <div className="card-body">
    <b>Specialization:-</b>
    <p>Wireless Communication, Cyber-Physical Systems and Information Security</p>
  </div>
</div>
<div className="card" style={{width: "18rem", height: "auto"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><a href="/" className="card-link">Aditya Tatu</a></h5>
    <p className="card-text">PhD (Computer Science), University of Copenhagen, Denmark</p>
  </div>
  <ul className="list-group list-group-flush">
    
    <li className="list-group-item">#1206, FB-1, DA-IICT, Gandhinagar, Gujarat, India – 382007</li>
    <li className="list-group-item">aditya_tatu@daiict.ac.in</li>
  </ul>
  <div className="card-body">
    <b>Specialization:-</b>
    <p>Computer Vision, Image Processing, Pattern Recognition, Signal Processing</p>
  </div>
</div>
<div className="card" style={{width: "18rem", height: "auto"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><a href="/" className="card-link">Amit Mankodi</a></h5>
    <p className="card-text">PhD, DA-IICT Gandhinagar</p>
  </div>
  <ul className="list-group list-group-flush">
    
    <li className="list-group-item"># 4205, FB-4, DA-IICT, Gandhinagar, Gujarat, India – 382007</li>
    <li className="list-group-item">amit_mankodi@daiict.ac.in</li>
  </ul>
  <div className="card-body">
    <b>Specialization:-</b>
    <p>Embedded Systems, Computer Networks, High Performance Computing, Machine Learning</p>
  </div>
</div>

</div>
        <div><p></p></div>
<div className="faculty-cards-container">
        <div className="card" style={{width: "20rem", height: "auto"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><a href="/" className="card-link">Anil Roy</a></h5>
    <p className="card-text">PhD (Physics), IIT Delhi</p>
  </div>
  <ul className="list-group list-group-flush">
    
    <li className="list-group-item"># 1104, FB-1, DA-IICT, Gandhinagar, Gujarat, India – 382007</li>
    <li className="list-group-item">anil_roy@daiict.ac.in</li>
  </ul>
  <div className="card-body">
    <b>Specialization:-</b>
    <p>Applications of Image Processing, Fiber Optics and Optical Communication, High speed Semiconductor Devices, Nanoscience and Nanotechnology, Quantum Optics, Technologies for Humanitarian Challenges</p>
  </div>
</div>
<div className="card" style={{width: "18rem", height: "auto"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><a href="/" className="card-link">Anish Mathuria</a></h5>
    <p className="card-text">PhD (Computer Science), University of Wollongong, Australia</p>
  </div>
  <ul className="list-group list-group-flush">
    
    <li className="list-group-item"># 1105, FB-1, DA-IICT, Gandhinagar, Gujarat, India – 382007</li>
    <li className="list-group-item">anish_mathuria@daiict.ac.in</li>
  </ul>
  <div className="card-body">
    <b>Specialization:-</b>
    <p>Network Security, Privacy-Preserving Computation, System and Software Security</p>
  </div>
</div>
<div className="card" style={{width: "18rem", height: "auto"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><a href="/" className="card-link">Arnab Kumar Ray</a></h5>
    <p className="card-text">PhD (Physics), Jadavpur University, Kolkata</p>
  </div>
  <ul className="list-group list-group-flush">
    
    <li className="list-group-item"># 2210, FB-2, DA-IICT, Gandhinagar, Gujarat, India – 382007</li>
    <li className="list-group-item">arnab_kumar@daiict.ac.in</li>
  </ul>
  <div className="card-body">
    <b>Specialization:-</b>
    <p>Astrophysical Accretion, Fluid Dynamics, Nonlinear Systems</p>
  </div>
</div>

</div>      
<div><p></p></div>  
        </div></div>
    )
  }
}
