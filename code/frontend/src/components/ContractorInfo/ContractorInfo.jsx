import React from 'react';
import PropTypes from 'prop-types';
import css from './contractorinfo.css';
import Table from './Table.jsx';

function ContractorInfoComponent({tabledata, handleEditContractor}) {
  return (<div className={css.wrapper}>
    <h1>Contractor Information</h1>
    <br/>
    <Table tabledata={tabledata} handleEditContractor={handleEditContractor}/>
  </div>);
}

ContractorInfoComponent.PropTypes = {
  tabledata: PropTypes.array.isRequired,
  handleEditContractor: PropTypes.func.isRequired
};

export default ContractorInfoComponent;