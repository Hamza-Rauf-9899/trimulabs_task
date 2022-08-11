import './App.css';
import 'antd/dist/antd.css';
import React from 'react'
import Jobform from './Components/Jobform';
import Joblist from './Components/Joblist';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Form, Input, Select ,Button} from 'antd';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
  uri: 'https://api.graphql.jobs',
  }),
});


function App() {

  return (
    <Router>
    <div className="App" >
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" icon={<MailOutlined />}>
    <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="mail" icon={<AppstoreOutlined />}>
    <Link to="/joblist">Joblist</Link>
    </Menu.Item>
    </Menu>
    <div><h1 style={{color: 'purple',fontSize:'50px'}}>Job Posting App</h1></div>
    {/* <ul className="App">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/joblist">Joblist</Link>
              </li>
            </ul>  */}
           <Routes>
                             
                 <Route exact path='/' element={
                  <ApolloProvider client={client}>
                  < Jobform />
                  </ApolloProvider>}></Route>
                 <Route exact path='/joblist' element={< Joblist />}></Route>                
          </Routes>
             </div>
    </Router>
  );
}

export default App;
