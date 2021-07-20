
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
            </div>
        </div>

       
        <div className="row">
        <span class="border border-secondary rounded dark" style={{backgroundColor: 'black'}}>
        <div className="col-md-12  offset-3 pt-5">
        <div className="row">
            <div className="col-md-5 form-group" style={{marginBottom: '10px', overflow: 'scroll'}}>
             
                    <input type="text" style={{height: '70px'}} className="form-control form-control-sm" placeholder=""/>

        
           <input style={{height: '300px'}} className="form-control form-control-lg" placeholder=""/>
       </div>
   </div>
   <div className="row">
            <div className="col-md-2 form-group" style={{marginBottom: '10px'}}>
                <label style={{color: 'white', textDecoration: 'bold', paddingBottom: '12px'}}>Username:</label>
                    <input className="form-control form-control-sm" placeholder=""/>

                </div>
            </div>
                    <div className="row">
            <div className="col-md-5 form-group " style={{marginBottom: '10px'}}>
                    <label style={{color: 'white', textDecoration: 'bold', paddingBottom: '12px'}}>Message:</label>
                    <textarea className="form-control form-control-lg" placeholder=""></textarea>
                    </div>
                    <div className="col-md-5 form-group " style={{padding: '60px'}}>
                    <button type="button" className="btn btn-primary">Send</button>

                    </div>
               
            </div>
        </div>
        </span>
         </div>
        </div>
    )
}

export default Chat;


