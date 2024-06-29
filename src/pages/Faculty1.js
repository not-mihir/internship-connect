import  logo from "../img/logo.webp"
import React, { Component } from 'react'
//import {useSpring,animated} from 'react-spring';

import Navbar from '../components/Navbar'
import abhishek from '../img/Abhishek-Jindal.jpg';
import './StylePages.css'


export default class FacultyPage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div class="container">

            <div class="row">
                <div class="col"> 
                    <div class="row-4 d-flex align-items-center justify-content-center">
                        <img src={abhishek} class="img-fluid border rounded-2 shadow-lg mt-5" alt="Example image" loading="lazy"/>
                    </div>
                    <h1 class="fs-5 fs-lg-1 text-center fw-light">Abhishek Jindal</h1>
                    <div class="py-2 my-5 rounded-4">
                        <h1 class="fs-5 fs-lg-1 text-center fw-light">PhD (Wireless Communications), IIT Delhi</h1>

                    </div>
                </div>
                
                <div class="col-8 px-0">

                    <div class="py-2 mt-5 rounded-4">
                        <h1 class="fs-5 fs-lg-1 text-left fw-bold">Biography:-</h1>
                    </div>
                    <p class="text1">I received the B. Tech. and M. Tech. degrees from the Jaypee Institute of Information Technology (JIIT) Noida, India. Thereafter, I obtained my Ph.D. from the Bharti School of Telecommunication Technology and Management at the Indian Institute of Technology Delhi (IIT Delhi), New Delhi, India. I was a postdoctoral research associate in the Department of Computer Science, University of Texas at Dallas, USA during 2017-2018. For a brief duration, I was a research assistant professor at the Atria Institute of Technology (affiliated to Visvesvaraya Technological University (VTU), Belagavi) in Bengaluru, India. Since June, 2019, I am an assistant professor at DA-IICT.</p>
                    <div class="py-2 mt-5 rounded-4">
                        <h1 class="fs-5 fs-lg-1 text-left fw-bold">Specialization:-</h1>
                    </div>
                    <p class="text1">Reinforcement Learning, Deep Learning for Finance and Cyber Security, Wireless Communication, Cyber-Physical Systems, Information Security</p>
                    <div class="row mt-1">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Apply</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Application Form</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Student Name:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Student ID:</label>
                                            <input type="number" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Email ID:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Project Idea:</label>
                                            <textarea class="form-control" id="message-text"></textarea>
                                        </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    
            </div>
        </div>
      </div>
    )
  }
}
