import React, { Component } from 'react';

const styles = {
  header: {
    color: 'white',
    background: 'black',
    height: 75
  }
}

const Header = () => {
  // methods and variables go here...
  return (
    <div className="col-md-12" style={styles.header}>
      <div className="col-md-12">
        CPC Strategy
      </div>
      <div className="row" />
      <div className="row">
        <div className="col-md-2" />
          <div className="col-lg-4">
              <div className="input-group">
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Go!</button>
                </span>
                <input type="text" className="form-control" placeholder="Search for..." />
              </div>
            </div>
        </div>
    </div>

  );
};

export default Header;
