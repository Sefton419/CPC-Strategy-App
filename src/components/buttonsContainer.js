import React from 'react';

const styles = {
  sidebarButtons: {
    width: '100%', 
  }
}

const ButtonsContainer = (props) => {

  // method and variables pertaining to clicking buttons in child components

    return (
      <div>
        <button style={styles.sidebarButtons}>Companies</button>
        <button style={styles.sidebarButtons}>Products</button>
        <button style={styles.sidebarButtons}>Keywords</button>

      </div>
    )

}

export default ButtonsContainer;
