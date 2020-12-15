import Layout from '../components/Layout'
import Link from 'next/link'
import SignupComponent from '../components/auth/SignComponents'

const Signup = () => {
    return <Layout>
        <h2 className="text-center pt-4 pb-4">Singup Page</h2>
        <div className="row">
            <di className="col-md-6 offset-md-3">
                <SignupComponent />
            </di>
        </div>
        
    </Layout>
}
export default Signup