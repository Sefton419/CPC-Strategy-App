import React from 'react';

import List from './list.js'

const styles = {
  listContainer: {}
}

const ListContainer = ({ data, state, updateButtonsData, addCompanyArrayToQueryStrings, pushCurrentQueryString }) => {
  console.log('data in list container: ', data);
  return (
    <div>
      <div className="col-xs-10">
        <h4>TESTING</h4>
        <List
          data={data}
          state={state}
          updateButtonsData={updateButtonsData}
          addCompanyArrayToQueryStrings={addCompanyArrayToQueryStrings}
          pushCurrentQueryString={pushCurrentQueryString}
        />
      </div>
    </div>
  );
};

export default ListContainer;