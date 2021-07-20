
import Breadcrumbs from '../Components/Breadcrumbs';
import './Chat.css';

const breadcrumbPaths = [
    { link: '/', title: 'Home' },
    { title: 'Chat' },
];

// const divStyle = {
//     color: 'blue',
//     background: 'bold',
//   };

//   function HelloWorldComponent() {
//     return <div className="row">
//     <div className="col-md-5 form-group" style={{marginBottom: '10px', overflow: 'scroll'}}>
     
//             <input style={{height: '70px'}} className="form-control form-control-sm" placeholder=""/>


//    <input style={{height: '300px'}} className="form-control form-control-lg" placeholder=""/>
// </div>
// </div>;
//   }



function Chat() {
    return (
        <div className="container">
        <div className="row">
            <div ClassName="col">
            <Breadcrumbs paths={breadcrumbPaths} />
            <h3>Chat</h3>  
            </div>
        </div>
        <div className="row">
        <div className=".col-md-3 .offset-md-3" style={{paddingLeft: '20px'}}>
       
        <div className="row">
        <span class="border  border-secondary rounded" style={{backgroundColor: '#E9F7EF', height: '570px'}}>
        <div className="col-md-12  offset-3 pt-5">
        <div className="row">
            <div className="col-md-5 form-group" style={{marginBottom: '10px', overflow: 'scroll'}}>
             
                    <input style={{border: 'solid 2px #739C80', height: '70px'}} type="text" className="form-control form-control-sm" placeholder=""/>

        
           <input style={{height: '200px', border: 'solid 2px #739C80'}} className="form-control form-control-lg" placeholder=""/>
       </div>
   </div>
   <div className="row">
            <div className="col-md-2 form-group" style={{marginBottom: '10px'}}>
                <label style={{color: 'black', textDecoration: 'bold', paddingBottom: '12px'}}>Username:</label>
                    <input style={{border: 'solid 2px #739C80'}} className="form-control form-control-sm" placeholder=""/>

                </div>
            </div>
                    <div className="row">
            <div className="col-md-5 form-group " style={{marginBottom: '10px'}}>
                    <label style={{color: 'black', textDecoration: 'bold', paddingBottom: '12px'}}>Message:</label>
                    <textarea  style={{border: 'solid 2px #739C80'}}className="form-control form-control-lg" placeholder=""></textarea>
                    </div>
                    <div className="col-md-5 form-group  btn-rounded" style={{padding: '70px'}}>
                    <button type="button" style={{backgroundColor: '#16A085', border: 'solid 2px #E8F6F3', textDecorationLine: 'bold', width: '150px'}} className="btn btn">Send</button>

                    </div>
               
            </div>
        </div>
        </span>
         </div>
        </div>
        </div>
        </div>
    )
}

export default Chat;


