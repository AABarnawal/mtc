import React from 'react'
import Crousel from './MyCarousel';
import MyComponent from './About';
import MissionMsg from './MissionMsg';
import ToolsPage from './tools/toolsPage';
import ImagePopups from './ImagePopups';
import Login from '../Popups/Login';
import JharkhandMap from './JharkhandMap';
function MainPage() {
  return (
    <div>
      <div id="home"><Crousel /></div>
      <div id="about"><MyComponent /></div>
      <div id="message"><MissionMsg /></div>
      <ToolsPage />
      <JharkhandMap />
      {/* <ImagePopups /> */}
    </div>
  )
}

export default MainPage;
