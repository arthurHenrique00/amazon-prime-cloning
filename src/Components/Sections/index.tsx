import { useState } from 'react'
import { SectionStyled } from './style'
import room from '../../amazon-img/horror/1408-banner.jpg'
import room_2 from '../../amazon-img/horror/1408-2.jpg'
import files_x from '../../amazon-img/horror/x-files-banner.webp'
import files_x_2 from '../../amazon-img/horror/x-files-2.jpg'
import supernatural from '../../amazon-img/horror/supernatural-banner.jpg'
import supernatural_2 from '../../amazon-img/horror/supernatural-2.jpg'
import evil_dead from '../../amazon-img/horror/evil-dead-banner.jpg'
import evil_dead_2 from '../../amazon-img/horror/evil-dead-2.png'
import hellraiser from '../../amazon-img/horror/hellraiser-banner.jpg'
import hellraiser_2 from '../../amazon-img/horror/hellraiser-2.jpg'
import plus from '../../amazon-img/plus.png'
import info from '../../amazon-img/info_circle.png'

const Sections = () => {
  const [horro1, setHorror1] = useState(room)
  const [horror2, setHorror2] = useState(files_x)
  const [horror3, setHorror3] = useState(supernatural)
  const [horror4, setHorror4] = useState(evil_dead)
  const [horror5, setHorror5] = useState(hellraiser)

  return (
    <SectionStyled>
      <h2>Seção de Terror</h2>
      <div>
        <ul>
          <li>
            <div>
              <img
                src={horro1}
                onMouseEnter={() => setHorror1(room_2)}
                onMouseOut={() => setHorror1(room)}
              />
              <div className="infos">
                <h2>Quarto 1408</h2>
                <span>&copy;Ganhador de melhores adaptações</span>
                <div className="buttons">
                  <ul>
                    <li>
                      <img id="rotate" src={plus} />
                    </li>
                    <li>
                      <img src={info} />
                    </li>
                  </ul>
                </div>
                <p>
                  Quarto 1408 foi um filme inspirado em um livro do Stephen King
                </p>
              </div>
            </div>
          </li>
          <li>
            <img
              src={horror2}
              onMouseEnter={() => setHorror2(files_x_2)}
              onMouseOut={() => setHorror2(files_x)}
            />
          </li>
          <li>
            <img
              src={horror3}
              onMouseEnter={() => setHorror3(supernatural_2)}
              onMouseOut={() => setHorror3(supernatural)}
            />
          </li>
          <li>
            <img
              src={horror4}
              onMouseEnter={() => setHorror4(evil_dead_2)}
              onMouseOut={() => setHorror4(evil_dead)}
            />
          </li>
          <li>
            <img
              src={horror5}
              onMouseEnter={() => setHorror5(hellraiser_2)}
              onMouseOut={() => setHorror5(hellraiser)}
            />
          </li>
        </ul>
      </div>
    </SectionStyled>
  )
}

export default Sections
