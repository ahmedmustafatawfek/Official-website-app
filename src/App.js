import React from "react";

function App() {

 const btnLinkedIn=() => {
  window.open('https://www.linkedin.com/in/ahmed-mustafa-8b980b135/')
 }

 const btnGitHub=() => {
  window.open('https://github.com/ahmedmustafatawfek')
 }
 
 const btnFaceBook=() => {
 window.open('https://www.facebook.com/profile.php?id=100002672558386')
  }


  return (
    <div className="app">
      <div className="container wp-block-cover-image-text"> 

         <div className="btn-position">
              <button onClick={btnLinkedIn} className="btn">LinkedIn</button> 
         </div>
         
         <div className="btn-position">
              <button onClick={btnGitHub} className="btn">GitHub</button>     
         </div>

         <div className="btn-position">
            <button onClick={btnFaceBook} className="btn">Facebook</button>    
         </div>
      </div>
    </div>
  );
}

export default App;
