import React from 'react';
import '../assets/css/dashboardComponent.scss';
import  styles from '../assets/css/jenish.module.css'

function DashboardComponent() {
  return (
    <>
      {/* Variable Example */}
      <h1 className={styles.x}>This is a variable example</h1>
     
     {/* Nested Rules */}
     <div id="nested">
        <h3>This is a nested rules example</h3>
     </div>

     {/* Interpolation Example */}
       <p className="interpolation" classsName={styles.y}>Interpolation Example.</p>

       {/* Function Example */}
       <div id="function">
       <h3>This is a function example</h3>
       </div>

       {/* Mixin Example */}
      <div id="mixin">
      <p>This is mixin Example</p>
      </div>
    </>
  );
}

export default DashboardComponent;