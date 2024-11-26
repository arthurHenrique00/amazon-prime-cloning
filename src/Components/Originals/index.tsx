import { Original } from './style'
import batman_ex from '../../amazon-img/exclusives/batman-exclusives.png'
import carnival_ex from '../../amazon-img/exclusives/carnival-exclusives.png'
import detective_ex from '../../amazon-img/exclusives/detective-exclusives.png'
import lock_ex from '../../amazon-img/exclusives/lock-bock-exclusives.png'
import night_ex from '../../amazon-img/exclusives/night-sky-exclusives.png'
import batman_2 from '../../amazon-img/exclusives/batman-2.jpg'
import carnival_2 from '../../amazon-img/exclusives/carnival-2.jpg'
import detective_2 from '../../amazon-img/exclusives/detective.png'
import lock_2 from '../../amazon-img/exclusives/look-bock-2.jpg'
import night_2 from '../../amazon-img/exclusives/night-2.jpg'
import plus from '../../amazon-img/plus.png'
import info from '../../amazon-img/info_circle.png'
import play from '../../amazon-img/play.png'
import { useState } from 'react'

const Originals = () => {
  const [batman, setBatman] = useState(batman_ex)
  const [carnival, setCarnival] = useState(carnival_ex)
  const [detective, setDetective] = useState(detective_ex)
  const [lock, setLock] = useState(lock_ex)
  const [night, setNight] = useState(night_ex)

  return (
    <Original>
      <h2>Orignais e exclusivos</h2>
      <div className="exclusives-originals">
        <div className="exclusive-item">
          <img
            src={batman}
            onMouseEnter={() => setBatman(batman_2)}
            onMouseLeave={() => setBatman(batman_ex)}
          />
          <div className="more">
            <h2>Batman</h2>
            <ul>
              <li id="play">
                <img src={play} />
                <p>Assista agora</p>
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
          <img
            src={carnival}
            onMouseEnter={() => setCarnival(carnival_2)}
            onMouseLeave={() => setCarnival(carnival_ex)}
          />
          <div className="more">
            <h2>Carnival Row</h2>
            <ul>
              <li id="play">
                <img src={play} />
                <p>Assista agora</p>
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
          <img
            src={detective}
            onMouseEnter={() => setDetective(detective_2)}
            onMouseLeave={() => setDetective(detective_ex)}
          />
          <div className="more">
            <h2>Detetive Alex</h2>
            <ul>
              <li id="play">
                <img src={play} />
                <p>Assista agora</p>
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
          <img
            src={lock}
            onMouseEnter={() => setLock(lock_2)}
            onMouseLeave={() => setLock(lock_ex)}
          />
          <div className="more">
            <h2>Lock Bock</h2>
            <ul>
              <li id="play">
                <img src={play} />
                <p>Assista agora</p>
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
          <img
            src={night}
            onMouseEnter={() => setNight(night_2)}
            onMouseLeave={() => setNight(night_ex)}
          />
          <div className="more">
            <h2>Night Sky</h2>
            <ul>
              <li id="play">
                <img src={play} />
                <p>Assista agora</p>
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
