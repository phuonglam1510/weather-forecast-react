import React from 'react';
import { Breadcrumb } from 'antd';
// import { AuthContext } from 'context/AuthProvider';
// import { useHistory, Link, useLocation } from 'react-router-dom';

interface Props {}

const BreadcrumbComponent: React.FunctionComponent<Props> = () => {
  //   const authContext = useContext(AuthContext);
  // const appContext = useContext(AppContext);
  //   const history = useHistory();
  //   const location = useLocation();

  return (
    <Breadcrumb style={{ background: 'white', padding: 20 }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
