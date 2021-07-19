import Breadcrumbs from '../Components/Breadcrumbs';

const breadcrumbPaths = [
    { link: '/', title: 'Home' },
    { link: '/login', title: 'Login' },
 

];


function Register() {
    return (
        <div className="container">
            <div className="row">
                <div ClassName="col">
                <Breadcrumbs paths={breadcrumbPaths} />
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <h3>Register</h3>


                </div>
            </div>






        </div>
    )
}

export default Register;