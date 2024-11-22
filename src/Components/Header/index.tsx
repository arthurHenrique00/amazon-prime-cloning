import { HeaderSite } from './style'
import prime_logo from '../../amazon-img/prime-logo.png'
import amazon from '../../amazon-img/amazonprime-logo.png'
import bloom from '../../amazon-img/bloom-icon.png'
import download from '../../amazon-img/download-icon.png'
import save from '../../amazon-img/save-icon.png'
import config from '../../amazon-img/config-icon.png'
import pfp from '../../amazon-img/fallout-pfp.jpg'

const Header = () => (
  <HeaderSite>
    <div className="search">
      <div>
        <img src={prime_logo} />
        <ul className="categories">
          <li>
            <a href="">
              <p>Início</p>
            </a>
          </li>
          <li>
            <a href="">
              <p>Filmes</p>
            </a>
          </li>
          <li>
            <a href="">
              <p>Séries</p>
            </a>
          </li>
          <li>
            <a href="">
              <p>Esportes</p>
            </a>
          </li>
        </ul>
        <div className="signatures">
          <ul>
            <li>
              <a href="">
                <img src={amazon} />
              </a>
            </li>
            <li>
              <a href="">
                <p>Assinaturas</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="configs">
        <ul>
          <li>
            <a href="">
              <img src={bloom} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={download} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={save} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={config} />
            </a>
          </li>
          <li>
            <a href="">
              <img style={{ width: '50px', height: '50px' }} src={pfp} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </HeaderSite>
)

export default Header
