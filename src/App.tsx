import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  type ImageModule = {default:string};
  const images = import.meta.glob<ImageModule>('./assets/photos/*.webp', {eager: true});
  const imageList = Object.values(images).map((img) => img.default);
  return (
    <div>
      <div>
      <h1 className="hideoutHelper">
          <strong>
              Hideout Helper
          </strong>
      </h1>
      <h4 className="helperMessage">
          Enter what hideout upgrades you have and it will automatically list the amount of items needed to complete the hideout to the max level.  
      </h4>
      </div>
    </div>
  )
}

export default App
