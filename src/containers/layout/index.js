import React from 'react';
import {Route,Link} from 'react-router-dom'
import HomeComponent from '../home'
import AboutComponent from '../about'
import config from '../../config';



class Layout extends React.Component {


    render() {

        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <main>
                    <Route exact path={config.basePath} component={HomeComponent}/>
                    <Route exact path={config.basePath + 'about'} component={AboutComponent}/>
                </main>
            </div>
        );
    }
}
export default Layout;