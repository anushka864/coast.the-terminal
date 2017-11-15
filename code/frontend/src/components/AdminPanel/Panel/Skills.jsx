import React from 'react';
import PropTypes from 'prop-types';
import PanelWrapper from './PanelWrapper.js';
import * as TYPES from '../../../constants/input-types.js';

function Skills({ onReturn }) {
  const initialState = {
    inputs: {
      name: {
        title: 'Name',
        type: TYPES.TEXT,
        value: '',
        selected: ''
      },
      description: {
        title: 'Description',
        type: TYPES.TEXT,
        value: '',
        selected: ''
      },
      type: {
        title: 'Type',
        type: TYPES.TEXT,
        selected: '',
        value: ''
      }
    }
  };
  return <PanelWrapper initialState={initialState} header={'Skills'} submitButtonText={'Add New Skill'} tableName={'skills'} onReturn={onReturn} />;
}

Skills.propTypes = {
  onReturn: PropTypes.func.isRequired
};

export default Skills;
