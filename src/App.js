import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode=()=>
  {
    if(mode=='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="textutils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>    
      <Alert alert={alert}/>
      {/* <Switch> */}
      {/* exact is very good */}
          {/* <Route exact path="/about">   
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm heading="Enter the text to analyze"/>
          {/* </Route>
        </Switch>
        </Router> */}
      </>
  );
}

export default App;
