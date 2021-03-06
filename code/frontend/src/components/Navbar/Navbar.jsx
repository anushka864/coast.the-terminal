import React from 'react';
import PropTypes from 'prop-types';
import css from './navbar.css';
import * as TABS from '../../constants/tabs.js';

/**
 * creates html component for navbar
 * @param isAdmin - boolean that returns true if user has admin privileges
 * @param tab - the tab that is currently selected
 * @param onClick - function that is called when the tab is clicked
 * @return React component for Navbar
 */
function NavbarComponent({isAdmin, tab, onClick}) {
  return (
    <div className={css.wrapper}>
      <div className={css.usertype}>
        <img className={css.logo} src={require('../../../../../design/Coast.png')} alt="logo"/>
      </div>
      <div>
        <ul>
          <li data-qa="dashboard-nav" className={getClassName(tab, TABS.DASHBOARD)}
            name={TABS.DASHBOARD}
            onClick={onClick}>
            <img name={TABS.DASHBOARD}
              className={css.dash}
              src={require('../../../../../design/home.png')}
              alt="home"/>
            <p name={TABS.DASHBOARD}>Dashboard</p>
          </li>
          <li data-qa="filter-nav" className={getClassName(tab, TABS.FILTERING)}
            name={TABS.FILTERING}
            onClick={onClick}>
            <img name={TABS.FILTERING}
              className={css.filter}
              src={require('../../../../../design/filter.png')}
              alt="home"/>
            <p name={TABS.FILTERING}>Data Filtering System</p>
          </li>
          <li data-qa="add-nav" className={getClassName(tab, TABS.ADD_CONTRACTOR)}
            name={TABS.ADD_CONTRACTOR}
            onClick={onClick}>
            <img name={TABS.ADD_CONTRACTOR}
              className={css.add}
              src={require('../../../../../design/add.png')}
              alt="home"/>
            <p name={TABS.ADD_CONTRACTOR}>Add Contractor</p>
          </li>
          <li data-qa="info-nav" className={getClassName(tab, TABS.CONTRACTOR_INFO)}
            name={TABS.CONTRACTOR_INFO}
            onClick={onClick}>
            <img name={TABS.CONTRACTOR_INFO}
              className={css.info}
              src={require('../../../../../design/info.png')}
              alt="home"/>
            <p name={TABS.CONTRACTOR_INFO}>Contractor Information</p>
          </li>
          <li data-qa="reports-nav" className={getClassName(tab, TABS.REPORTS)}
            name={TABS.REPORTS}
            onClick={onClick}>
            <img name={TABS.REPORTS}
              className={css.rep}
              src={require('../../../../../design/repoorts.png')}
              alt="home"/>
            <p name={TABS.REPORTS}>Reports</p>
          </li>
          {
            isAdmin
              ? <li data-qa="admin-nav" className={getClassName(tab, TABS.ADMIN_PANEL)}
                name={TABS.ADMIN_PANEL}
                onClick={onClick}>
                <img name={TABS.ADMIN_PANEL}
                  className={css.admin}
                  src={require('../../../../../design/admin.png')}
                  alt="home"/>
                <p name={TABS.ADMIN_PANEL}>Admin Panel</p>
              </li>
              : null
          }
        </ul>
      </div>
    </div>
  );
}

/**
 * returns classname based on which tab is selected
 * @param selectedTab - tab that is selected
 * @param currentTab - tab that is to be selected
 * @return {*}
 */
function getClassName(selectedTab, currentTab) {
  return selectedTab === currentTab ? css.selected : css.option;
}

NavbarComponent.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  tab: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NavbarComponent;
