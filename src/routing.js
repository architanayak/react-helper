import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './header/header';
import SimpleFileUploadEx from './SimpleFileUpload/SimpleFileUploadEx'
import FilePondEx from './FilePond/FilePond';
import {Index} from './ReduxDemo/index'

const routing = (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/upload-image' component={SimpleFileUploadEx} />
      <Route path='/upload-image-npm' component={FilePondEx} />
      <Route path='/example-using-redux' component={Index} />
    </Switch>
  </BrowserRouter>
)
export default routing;