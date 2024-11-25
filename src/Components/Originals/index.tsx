import { Original } from './style'
import batman from '../../amazon-img/exclusives/batman-exclusives.png'
import carnival from '../../amazon-img/exclusives/carnival-exclusives.png'
import detective from '../../amazon-img/exclusives/detective-exclusives.png'
import lock from '../../amazon-img/exclusives/lock-bock-exclusives.png'
import night from '../../amazon-img/exclusives/night-sky-exclusives.png'
import plus from '../../amazon-img/plus.png'
import info from '../../amazon-img/info_circle.png'
import play from '../../amazon-img/play.png'

const Originals = () => {
  return (
    <Original>
      <h2>Orignais e exclusivos</h2>
      <div className="exclusives-originals">
        <div className="exclusive-item">
          <img src={batman} />
          <div className="more">
            <ul>
              <li>
                <img src={play} />
                Assista agora
              </li>
              <li>
                <img src={info} />
              </li>
              <li>
                <img src={plus} />
              </li>
            </ul>
          </div>
        </div>
        <div className="exclusive-item">
          <img src={carnival} />
          <div className="more">
            <ul>
              <li>
                <img src={play} />
              </li>
              <li>
                <img src={info} />
              </li>
              <li>
                <img src={plus} />
              </li>
            </ul>
          </div>
        </div>
        <div className="exclusive-item">
          <img src={detective} />
          <div className="more">
            <ul>
              <li>
                <img src={play} />
              </li>
              <li>
                <img src={info} />
              </li>
              <li>
                <img src={plus} />
              </li>
            </ul>
          </div>
        </div>
        <div className="exclusive-item">
          <img src={lock} />
          <div className="more">
            <ul>
              <li>
                <img src={play} />
              </li>
              <li>
                <img src={info} />
              </li>
              <li>
                <img src={plus} />
              </li>
            </ul>
          </div>
        </div>
        <div className="exclusive-item">
          <img src={night} />
          <div className="more">
            <ul>
              <li>
                <img src={play} />
              </li>
              <li>
                <img src={info} />
              </li>
              <li>
                <img src={plus} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Original>
  )
}

export default Originals
