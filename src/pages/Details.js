import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';


export class Details extends Component {

  render() {
    return (
      <>
        <main className="main">

          <section className="site">
            <div id="site__bg"></div>
            <div className="left">
              <label className="site__label">Episode #1</label>
              <h1 className="site__title site__title--separator">Linda Watkins</h1>
            </div>
            <div className="right">
              <img src="assets/images/photos/original/1.png" alt="" className="episode__image" />


              <ReactAudioPlayer
                src="assets/audio/example.mp3"
                autoPlay
                controls
              />


              {/* <div className="audio-player site__playbar">
                <div className="loading">
                  <div className="spinner"></div>
                </div>
                <button className="play-pause-btn play"></button>
                <div className="controls">
                  <span className="current-time">0:00</span>
                  <div className="slider" data-direction="horizontal">
                    <div className="progress">
                      <div className="pin" id="progress-pin" data-method="rewind"></div>
                    </div>
                  </div>
                  <span className="total-time">0:00</span>
                </div>

                <audio preload="true">
                  <source src="assets/audio/example.ogg" type="audio/ogg" />
                  <source src="assets/audio/example.mp3" type="audio/mpeg" />
                </audio>
              </div> */}

              <h4 className="site__secondary_title">Show Notes</h4>
              <p className="site__description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the <Link to="/">industry's standard</Link>
                dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised
            in the <Link to="/">1960s</Link> with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type
            and scrambled it to make <Link to="/">a type specimen book</Link>.
                        It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
          </p>

              <div className="site__navigation">

                {/* toggle on the previous as needed */}
                <Link to="/" className="site__navigation_items site__navigation_items--left hidden">
                  <label>Previous Episode</label>
                  <h4>Dylan Perry</h4>
                </Link>
                <Link to="/" className="site__navigation_items site__navigation_items--right">
                  <label>Next Episode</label>
                  <h4>Dylan Perry</h4>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Details;