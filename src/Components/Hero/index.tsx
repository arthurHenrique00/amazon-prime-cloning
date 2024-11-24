import { HeroStyled } from './style'
import prime from '../../amazon-img/prime-logo-emphasis.png'
import the_boys_logo from '../../amazon-img/the_boys_emphasis.png'
import play from '../../amazon-img/play.png'
import info from '../../amazon-img/info_circle.png'
import plus from '../../amazon-img/plus.png'
import the_boys from '../../amazon-img/emphasis2.jpg'

const Hero = () => {
  return (
    <HeroStyled>
      <div>
        <img id="hero" src={the_boys} />
        <div className="content">
          <div className="logos">
            <img style={{ marginBottom: '24px' }} src={prime} />
            <img src={the_boys_logo} />
          </div>
          <div className="about">
            <span>Top #10 dos mais assistidos no Brasil</span>
            <p>
              The Boys é uma série de TV baseada nos quadrinhos de Garth Ennis e
              Darick Robertson, que desconstrói o conceito de super-heróis com
              um toque ácido e brutal. Ambientada em um mundo onde super-heróis
              são celebridades corporativas.
            </p>
          </div>
          <ul className="play">
            <li>
              <a href="">
                <img src={play} />
                Assista agora
              </a>
            </li>
            <div>
              <li className="more">
                <a href="">
                  <img src={info} />
                </a>
                <a href="">
                  <img id="rotate" src={plus} />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </HeroStyled>
  )
}

export default Hero
