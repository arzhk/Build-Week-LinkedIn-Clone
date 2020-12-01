import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "./SideBar.css"


class SideBar extends React.Component {
    state={
        connectionsArray: [],
    }

    
    getData = () =>{
        fetch("https://striveschool-api.herokuapp.com/api/profile/ ", {
        'method': 'GET',
        headers: new Headers({
            "Content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzEwNmVkMjY2ODAwMTcwZWEzZDAiLCJpYXQiOjE2MDY3MzA2MTYsImV4cCI6MTYwNzk0MDIxNn0.0SA5BuCxgs7H-mWOcIfvvED6ga9_s3jGPIvujZ4KSbA"
        })
      })
     .then((res) => {
         return res.json()
     })
     .then((data) => {
         console.log("this my data", data)
         this.setState({
             connectionsArray: data
         })
         
       })
       .catch((err) => {
           console.error(err)
       })
    }

    componentDidMount=() => {
        this.getData()
    }
    render(){
        console.log("i set data in state so", this.state.connectionsArray[0])
        return(
            <>
                <div className="side-bar">
                    <Container className="side pt-3 mb-3">
                        <h4>People also viewed</h4>
                        {this.state.connectionsArray.splice(0, 6).map((people) => (
                            <div className="d-flex justify-content-between mb-2 pb-3" style={{borderBottom: "1px solid grey"}}>
                                <div className="d-flex">
                                    <Link className="d-flex myLink">
                                        <img className="image" src={people.image}/>
                                        <div className="d-flex flex-column">
                                            <Link className="name-link">
                                                <div className="d-flex name">
                                                    <p>{people.name}</p>
                                                    <p>{people.surname}</p>
                                                </div>
                                            </Link>
                                            <p>1st</p>
                                            <p>{people.title}</p>
                                        </div>
                                    </Link>
                                </div>
                                <button>
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        ))}
                    </Container>

                        <Container className="side pt-3">
                        <h4>People you may know</h4>
                        {this.state.connectionsArray.splice(11, 5).map((people) => (
                                <div className="d-flex justify-content-between mb-2 pb-3" style={{borderBottom: "1px solid grey"}}>
                                    <div className="d-flex">
                                        <Link className="d-flex myLink">
                                            <img className="image" src={people.image}/>
                                            <div className="d-flex flex-column">
                                                <Link className="name-link">
                                                    <div className="d-flex name">
                                                        <p>{people.name}</p>
                                                        <p>{people.surname}</p>
                                                    </div>
                                                </Link>
                                                <p>1st</p>
                                                <p>{people.title}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <button>
                                        <i class="fas fa-user-plus" ></i>
                                    </button>
                                </div>
                            ))}
                        </Container>
                        
               </div>
            </>   
        )
    }
}
export default SideBar