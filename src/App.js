import React,{ useEffect }from 'react';
import * as Cesium from 'cesium';

import 'cesium/Source/Widgets/widgets.css';
import './App.css';

function App() {
  useEffect(() => {
    Cesium.buildModuleUrl.setBaseUrl('./');
    new Cesium.Viewer('cesiumContainer');
  }, []);
  return (
    <div id="cesiumContainer" />
  );
}

export default App;
