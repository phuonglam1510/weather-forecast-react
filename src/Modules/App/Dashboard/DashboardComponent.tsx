import React from 'react';
import './DashboardStyle.scss';

interface Props {}

const DashboardComponent: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <div className="Dashboard">
        <div className="Header">
          <h1>Dashboard</h1>
        </div>
        <div className="Container">body</div>
      </div>
    </div>
  );
};

export default DashboardComponent;
