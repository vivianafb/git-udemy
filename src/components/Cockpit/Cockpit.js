import React,{useEffect} from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  useEffect(() =>{
    console.log('[Cockpit.js] useEffect');
    toggleBtnRef.current.click();
    return() =>{
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  },[]);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    };
  });
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>Hola xd</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Switch Name</button>
        </div>
    );
};
export default React.memo(Cockpit);