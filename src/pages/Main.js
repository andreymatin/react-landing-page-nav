import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <main className="main">
        <section className="site">
          <h1 className="site__title site__title--separator"><Link to="/">Dropcast</Link></h1>
          <p className="site__description">A podcast discussing anything web related with the world’s experts</p>
        </section>
        <section className="episodes">
          <article className="episode">
            <h2 className="episode__number">01</h2>
            <div className="episode__media">
              <Link to="/details" className="episode__image" />
            </div>
            <div className="episode__detail">
              <Link to="/details" className="episode__title" >
                <h4>Linda Watkins</h4>
              </Link>
              <p className="episode__description">Linda talks about how machine learning models can be used as effective substitutes for classic data structures.</p>
            </div>
          </article>
          <article className="episode">
            <h2 className="episode__number">02</h2>
            <div className="episode__media">
              <Link to="/details" className="episode__image" />
            </div>
            <div className="episode__detail">
              <Link to="/details" className="episode__title">
                <h4>Dylan Perry</h4>
              </Link>
              <p className="episode__description">Dylan talks to us about how he started programming, challenges he has faced and what keeps him hooked till this day.</p>
            </div>
          </article>
          <article className="episode">
            <h2 className="episode__number">03</h2>
            <div className="episode__media">
              <Link to="/details" className="episode__image" />
            </div>
            <div className="episode__detail">
              <Link to="/details" className="episode__title">
                <h4>Olivia Valdez</h4>
              </Link>
              <p className="episode__description">Olivia talks about how machine learning models can be used as effective substitutes for classic data structures.</p>
            </div>
          </article>
          <article className="episode">
            <h2 className="episode__number">04</h2>
            <div className="episode__media">
              <Link to="/details" className="episode__image" />
            </div>
            <div className="episode__detail">
              <Link to="/details" className="episode__title">
                <h4>Samuel Chavezy</h4>
              </Link>
              <p className="episode__description">Sam talks to us about how he started programming and what keeps him hooked till this day.</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Main;