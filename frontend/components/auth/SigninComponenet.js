//import Router from 'next/dist/next-server/server/router'
import React from 'react'
import {useState} from 'react'
import {signin, authenticate} from '../../actions/auth'
import Router from 'next/router'

const SigninComponent = () => {

    const [values, setValues] = useState({
        email: 'mizan@gmail.com',
        password: '124578', 
        error: '', 
        loading: false, 
        message: '', 
        showForm: true 
    })

    const {email, password, error, loading, message, showForm} = values

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log({name, email, password, error, loading, message, showForm}) 
        setValues({...values, error: false, loading: false})

        const user = {email, password}

        signin(user)
        .then(data => {
            
            if(data.error){
                setValues({...values, error: data.error})
            } else {
                //save user token to cookie
                //save user info to localstorage
                //authenticate user

                authenticate(data, () => {
                    Router.push(`/`)
                })

                   
            //console.log(user)
            }
        }) 
        
    }
    const handleChage = name => e => {
       
        setValues({...values, error: false, [name]:e.target.value})
    }

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div>: '')
    const showError = () => (error? <div className="alert alert-danger">{error}</div> : '')
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div>:'')

    const signinForm = () => {

        return (
            <form onSubmit={handleSubmit}>
               
                <input onChange={handleChage('email')} value={email} type="email" className="form-control" placeholder="Type Your Email"/>
                <input onChange={handleChage('password')} value={password} type="password" className="form-control" placeholder="Type Your Password"/>

                <div>
                    <button className="btn btn-primary">Signup</button>
                </div>
            </form>
        )
    }
    
    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signinForm()}
        </React.Fragment>
    )
}

export default SigninComponent; 