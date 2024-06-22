import  logo from "../img/logo.webp"
import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import abhishek from '../img/Abhishek-Jindal.jpg';
import './StylePages.css'


export default class FacultyPage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>Faculty Information</h1>
        <div className="faculty-cards-container">
          <div className="card" style={{width: "20rem", height: "auto"}}>
            <img src={abhishek} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><a href="/" className="card-link">Abhishek Jindal</a></h5>
              <p className="card-text">PhD (Wireless Communications), IIT Delhi</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Specialization:-</b>
                <p>Wireless Communication, Cyber-Physical Systems and Information Security</p>
              </li>
            </ul>
          </div>
          <div className="card" style={{width: "18rem", height: "auto"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><a href="/" className="card-link">Aditya Tatu</a></h5>
              <p className="card-text">PhD (Computer Science), University of Copenhagen, Denmark</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Specialization:-</b>
                <p>Computer Vision, Image Processing, Pattern Recognition, Signal Processing</p>
              </li>
            </ul>
          </div>
          <div className="card" style={{width: "18rem", height: "auto"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><a href="/" className="card-link">Amit Mankodi</a></h5>
              <p className="card-text">PhD, DA-IICT Gandhinagar</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Specialization:-</b>
                <p>Embedded Systems, Computer Networks, High Performance Computing, Machine Learning</p>
              </li>
            </ul>
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
              <li className="list-group-item">
                <b>Specialization:-</b>
                <p>Applications of Image Processing, Fiber Optics and Optical Communication, High speed Semiconductor Devices, Nanoscience and Nanotechnology, Quantum Optics, Technologies for Humanitarian Challenges</p>
              </li>
            </ul>
          </div>
          <div className="card" style={{width: "18rem", height: "auto"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><a href="/" className="card-link">Anish Mathuria</a></h5>
              <p className="card-text">PhD (Computer Science), University of Wollongong, Australia</p>
            </div>
            <ul className="list-group list-group-flush">
              
              <li className="list-group-item">
                <b>Specialization:-</b>
                <p>Network Security, Privacy-Preserving Computation, System and Software Security</p>
              </li>
            </ul>
          </div>
          <div className="card" style={{width: "18rem", height: "auto"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><a href="/" className="card-link">Arnab Kumar Ray</a></h5>
              <p className="card-text">PhD (Physics), Jadavpur University, Kolkata</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Specialization:-</b>
                <p>Astrophysical Accretion, Fluid Dynamics, Nonlinear Systems</p>
              </li>
            </ul>
          </div>
        </div>      
        <div><p></p></div> 
        <div className="footer">
          <p>&copy; 2024 Internship Connect. All rights reserved.</p>
        </div>
      </div>
    )
  }
}
