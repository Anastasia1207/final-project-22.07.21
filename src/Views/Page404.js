import errorImg from '../Assets/Images/404.jpg';


function Page404() {
    return (
        <div className="container">
            <div className="row">
            <div className="col-6 mt-5 pb-5 pt-5 offset-3  ">
                
            <img src={errorImg} alt="Error" />
       
            </div>
            </div>

        </div>
    )
}

export default Page404;