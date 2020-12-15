import React from 'react'
import {useState} from 'react'
import {signup} from '../../actions/auth'

const SignupComponent = () => {

    const [values, setValues] = useState({
        name: 'mzian', 
        email: 'mizan@gmail.com',
        password: '124578', 
        error: '', 
        loading: false, 
        message: '', 
        showForm: true 
    })

    const {name, email, password, error, loading, message, showForm} = values

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log({name, email, password, error, loading, message, showForm}) 
        setValues({...values, error: false, loading: false})

        const user = {name, email, password}

        signup(user)
        .then(data => {
            console.log(data)
            // if(data.error){
            //     setValues({...values, error: data.error})
            // } else {
            //     setValues({...values, name:'', email:'', password:'', error:'', loading: false, message: data.message, showForm: false})
            // }
        }) 
        
    }
    const handleChage = name => e => {
       
        setValues({...values, error: false, [name]:e.target.value})
    }

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div>: '')
    const showError = () => (error? <div className="alert alert-danger">{error}</div> : '')
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div>:'')

    const signupForm = () => {

        return (
            <form onSubmit={handleSubmit}>
                <input onChange={handleChage('name')} value={name} type="text" className="form-control" placeholder="Type Your Name"/>
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
            {showForm && signupForm()}
        </React.Fragment>
    )
}

export default SignupComponent; 