import React,{ useEffect }from 'react';
import Cesium from "cesium/Cesium";
import buildModuleUrl from 'cesium/Core/buildModuleUrl';

import 'cesium/Widgets/widgets.css'
import './App.css';

buildModuleUrl.setBaseUrl('./');

function App() {
  useEffect(() => {
    new Cesium.Viewer('cesiumContainer');
  }, []);
  return (
    <div id="cesiumContainer" />
  );
}

export default App;
