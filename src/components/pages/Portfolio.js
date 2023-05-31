import React from 'react';
import gatherNow from '../../assets/gatherNow.png';
import lyricsLegend from '../../assets/lyricsLegend.png'
import ecommBackend from '../../assets/ecommBackend.png'
import svgLogogen from '../../assets/svgLogogen.png'
import weatherApp from '../../assets/weatherApp.png'
import socialNetwork from '../../assets/socialNetwork.png'

export default function Portfolio() {
  return (
    <div className = 'd-flex row justify-content-center gap-5'>
      <div className="portfolioImage col-lg-5">
          <img className="image" src={gatherNow} alt="Gather Now" style={{ width: '100%', height: 'auto' }}/>
        <div className="imageOverlay">
          <div className="imageDescription">
          <a href="https://github.com/Olive-Provencio-Johnson/GatherNow">
            Gather Now is a planning web application
          </a>
          </div>
        </div>
      </div>
      <div className="portfolioImage col-lg-5">
          <img className="image" src={lyricsLegend} alt="Lyrics Legend" style={{ width: '100%', height: 'auto' }}/>
        <div className="imageOverlay">
          <div className="imageDescription">
          <a href="https://github.com/whitneywishart/project-one-lyrics-legend">
            Lyrics Legend is an application that displays lyrics for songs
          </a>
          </div>
        </div>
      </div>
      <div className="portfolioImage col-lg-5">
          <img className="image" src={ecommBackend} alt="Ecommerce Backend" style={{ width: '100%', height: 'auto' }}/>
        <div className="imageOverlay">
          <div className="imageDescription">
          <a href="https://github.com/blayne-04/EComm_backend">
            Ecommerce Backend built using sequelize in node
          </a>
          </div>
        </div>
      </div>
      <div className="portfolioImage col-lg-5">
          <img className="image" src={svgLogogen} alt="svgLogogen" style={{ width: '100%', height: 'auto' }}/>
        <div className="imageOverlay">
          <div className="imageDescription">
          <a href="https://github.com/blayne-04/svg_logoGen">
            SVG logo generator made using inquirer, includes tests
          </a>
          </div>
        </div>
      </div>
      <div className="portfolioImage col-lg-5">
          <img className="image" src={weatherApp} alt="Weather App" style={{ width: '100%', height: 'auto' }}/>
        <div className="imageOverlay">
          <div className="imageDescription">
          <a href="https://github.com/blayne-04/weather_app">
            Weather application, uses openWeatherApi with javascript
          </a>
          </div>
        </div>
      </div>
      <div className="portfolioImage col-lg-5">
          <img className="image" src={socialNetwork} alt="Social Network API" style={{ width: '100%', height: 'auto' }}/>
        <div className="imageOverlay">
          <div className="imageDescription">
          <a href="https://github.com/blayne-04/social_network_api">
            Social network API built using mongoose and node
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
