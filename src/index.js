import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Layout from './containers/layout'

import registerServiceWorker from './registerServiceWorker';
import 'sanitize.css/sanitize.css'
import './css/app.css';


render(<Provider store={store}>
    <Layout />
</Provider>, document.getElementById('root'));
registerServiceWorker();
