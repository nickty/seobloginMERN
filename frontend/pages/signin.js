import Layout from '../components/Layout'
import SigninComponent from '../components/auth/SigninComponenet'

const Signin = () => {
    return <Layout>
        <h2 className="text-center pt-4 pb-4">Singin Page</h2>
        <div className="row">
            <di className="col-md-6 offset-md-3">
                <SigninComponent />
            </di>
        </div>
        
    </Layout>
}
export default Signin