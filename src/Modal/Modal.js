import { useState } from 'react';
import './Modal.css';
const Modal = () => {
  const [active, setActive] = useState(0);
  return (
    <section>
      <h2 className='section-title'>Services</h2>
      <span className='section-subtitle'>What We Do</span>

      <div className='services-container'>
        {/* service 1 */}
        <div className='services-content'>
          <div>
            <i className='uil uil-web-grid services-icon'></i>
            <h3 className='services-title'>
              UI/UX <br />
              Designer
            </h3>
          </div>

          <span className='services-button' onClick={() => setActive(1)}>
            View More{' '}
            <i className='uil uil-arrow-right services-button-icon'></i>
          </span>

          <div className={`services-modal ${active === 1 ? 'active' : ''}`}>
            <div className='services-modal-content'>
              <h4 className='services-modal-title'>
                UI/UX <br /> Designer
              </h4>
              <i
                className='uil uil-times services-modal-close'
                onClick={() => setActive(0)}
              ></i>

              <ul className='services-modal-list'>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create a wireframing.</p>
                </li>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create a protoyping.</p>
                </li>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create a mobile app design.</p>
                </li>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create a web apps.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* services 2 */}
        <div className='services-content'>
          <div>
            <i className='uil uil-arrow services-icon'></i>
            <h3 className='services-title'>
              Frontend <br />
              Development
            </h3>
          </div>

          <span className='services-button' onClick={() => setActive(2)}>
            View More{' '}
            <i className='uil uil-arrow-right services-button-icon'></i>
          </span>

          <div className={`services-modal ${active === 2 ? 'active' : ''}`}>
            <div className='services-modal-content'>
              <h4 className='services-modal-title'>
                Frontend <br /> Development
              </h4>
              <i
                className='uil uil-times services-modal-close'
                onClick={() => setActive(0)}
              ></i>

              <ul className='services-modal-list'>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create website using react js.</p>
                </li>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create a Responsive Website.</p>
                </li>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create a landing pages.</p>
                </li>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create business branding.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* services 3 */}
        <div className='services-content'>
          <div>
            <i className='uil uil-pen services-icon'></i>
            <h3 className='services-title'>
              Backend <br />
              Development
            </h3>
          </div>

          <span className='services-button' onClick={() => setActive(3)}>
            View More{' '}
            <i className='uil uil-arrow-right services-button-icon'></i>
          </span>

          <div className={`services-modal ${active === 3 ? 'active' : ''}`}>
            <div className='services-modal-content'>
              <h4 className='services-modal-title'>
                Backend <br /> Development
              </h4>
              <i
                className='uil uil-times services-modal-close'
                onClick={() => setActive(0)}
              ></i>

              <ul className='services-modal-list'>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create website using php.</p>
                </li>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create database using mysql.</p>
                </li>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create an api using nodejs.</p>
                </li>
                <li className='services-modal-item'>
                  <i className='uil uil-check-circle'></i>
                  <p>We create web application.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
