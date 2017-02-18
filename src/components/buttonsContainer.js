import React from 'react';

const styles = {
  sidebarButtons: {
    width: '100%', 
  }
}

const ButtonsContainer = (props) => {

  // method and variables pertaining to clicking buttons in child components

    return (
      <div className="btn-group-vertical" id="width100">
        <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Companies</button>
        <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Products</button>
        <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Keywords</button>
      </div>
    )

}

export default ButtonsContainer;
