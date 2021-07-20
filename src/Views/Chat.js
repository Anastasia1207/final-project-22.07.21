
import Breadcrumbs from '../Components/Breadcrumbs';

const breadcrumbPaths = [
    { link: '/', title: 'Home' },
    { title: 'Chat' },
 

];



function Chat() {
    return (
        <div className="container">
        <div className="row">
            <div ClassName="col">
            <Breadcrumbs paths={breadcrumbPaths} />
            </div>
        </div>


        <div className="row">
            <div className="col">
                <h3>Chat</h3> 


      </div>
        </div>

        </div>
    )
}

export default Chat;


