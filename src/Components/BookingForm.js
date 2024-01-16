import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

// props -> name

const BookingForm = (props) => {
    const { name } = props

    const [userDetail, setUserDetail] = useState({
        name: "",
        email: ""
    })

    const [showForm, setShowForm] = useState(false)

    function handleChange(e) {
        setUserDetail({
            ...userDetail, [e.target.name]: e.target.value
        })
    }

    function handleBookNow() {
        // it will do the logic of opening the form on user click
        setShowForm(true)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        // it will stor the user movie booking details in session storage
         if(userDetail.name==0 || userDetail.email){
            alert('Please Provide All Fields!')
            
         }else{
        let movieBookingDetail = {
            MovieName: name,
            userDetail
        }
        // if no stored data in session
        // get access to array from session storge and add new date to it and then store it again
        let sessionStorageMoviesData = sessionStorage.movieBookingDetail
        console.log("movieBookingDetail:-", movieBookingDetail);
        if (!sessionStorageMoviesData) {
            // add data into aaray and store
            sessionStorage.setItem('movieBookingDetail', JSON.stringify([movieBookingDetail]));
        }
        else {
            let parseArray = JSON.parse(sessionStorageMoviesData)
            let newArrayStorage = [
                ...parseArray, movieBookingDetail
            ]
            sessionStorage.setItem('movieBookingDetail', JSON.stringify(newArrayStorage));
        }
        setUserDetail({
            name: "",
            email: ""
        })
        alert('You Booked your ticket succefully!')
    }
    }

    return (
        <>
            {
                !showForm ?
                    <Button onClick={handleBookNow} variant="primary" type="submit">
                        Book Now
                    </Button>
                    :
                    
                    
                    <div className="Book-form-container">
                    
                    <form>
                      <label>
                        Username:
                        <input
                          type="text"
                          validate={(value) => value.length > 0}
                          value={userDetail.name}
                          onChange={(e) => setUserDetail(e.target.value)}
                          required
                        />
                      </label>
                      <label>
                        Email:
                        </label>
                        <input
                          validate={(value) => value.length > 0}
                          type="email"
                          value={userDetail.email}
                          onChange={(e) => setUserDetail(e.target.value)}
                          
                        />
                      
                      <button type="button" onClick={handleFormSubmit}>
                        Book Now
                      </button>
                    </form>
                  </div>

            }
        </>
    )
}

export default BookingForm;