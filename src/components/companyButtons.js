import React from 'react';

const styles = {
  sidebarButtons: {
    width: '100%', 
  }
}

const CompanyButtons = (props) => (
  <div className="btn-group-vertical" id="width100">
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Company</button>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Company</button>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Company</button>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Company</button>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Company</button>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Company</button>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Company</button>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Company</button>
    <button className="btn btn-default" id="width100" style={styles.sidebarButtons}>Company</button>
  </div>
);

export default CompanyButtons;