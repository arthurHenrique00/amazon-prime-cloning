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
import regular from '../../amazon-img/animation/apenas-um-show-banner.jpg'
import regular_2 from '../../amazon-img/animation/apenas-um-show-2.jpg'
import adventure from '../../amazon-img/animation/hora-de-aventura-banner.png'
import adventure_2 from '../../amazon-img/animation/hora-de-aventura-2.png'
import invincible from '../../amazon-img/animation/invincible.png'
import invincible_2 from '../../amazon-img/animation/invincible-2.png'
import steven from '../../amazon-img/animation/steven-universe.jpg'
import steven_2 from '../../amazon-img/animation/steven-universe-2.jpg'
import randm from '../../amazon-img/animation/rick-and-morty.webp'
import randm_2 from '../../amazon-img/animation/rick-and-morty-2.webp'

import big_bang from '../../amazon-img/sitcoms/big-bang-banner.jpg'
import big_bang_2 from '../../amazon-img/sitcoms/big-bang-2.webp'
import silicon from '../../amazon-img/sitcoms/sillicon-valley-banner.jpg'
import silicon_2 from '../../amazon-img/sitcoms/silicon-valley-2.jpeg'
import wife_and_kids from '../../amazon-img/sitcoms/patroa-e-as-criaca-banner.webp'
import wife_and_kids_2 from '../../amazon-img/sitcoms/eu-a-patroa-e-as-criancas-2.jpg'
import the_office from '../../amazon-img/sitcoms/the-office-banner.png'
import the_office_2 from '../../amazon-img/sitcoms/the-office-2.jpg'
import two_man from '../../amazon-img/sitcoms/two-half-man-banner.jpg'
import two_man_2 from '../../amazon-img/sitcoms/two-half-man-2.jpg'

const Sections = () => {
  const [horro1, setHorror1] = useState(room)
  const [horror2, setHorror2] = useState(files_x)
  const [horror3, setHorror3] = useState(supernatural)
  const [horror4, setHorror4] = useState(evil_dead)
  const [horror5, setHorror5] = useState(hellraiser)

  const [animation1, setAnimation1] = useState(regular)
  const [animation2, setAnimation2] = useState(adventure)
  const [animation3, setAnimation3] = useState(invincible)
  const [animation4, setAnimation4] = useState(steven)
  const [animation5, setAnimation5] = useState(randm)

  const [sitcom1, setSitcom1] = useState(big_bang)
  const [sitcom2, setSitcom2] = useState(silicon)
  const [sitcom3, setSitcom3] = useState(the_office)
  const [sitcom4, setSitcom4] = useState(two_man)
  const [sitcom5, setSitcom5] = useState(wife_and_kids)

  return (
    <>
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
                    Quarto 1408 foi um filme inspirado em um livro do Stephen
                    King
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
              <div className="infos">
                <h2>Arquivo X</h2>
                <span>#3 em séries sci-fi e horror</span>
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
                <p>Série baseada em qualquer tipo de teoria da conspiração</p>
              </div>
            </li>
            <li>
              <img
                src={horror3}
                onMouseEnter={() => setHorror3(supernatural_2)}
                onMouseOut={() => setHorror3(supernatural)}
              />
              <div className="infos">
                <h2>Sobrenatural</h2>
                <span>&copy;Mais assistidos do prime</span>
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
            </li>
            <li>
              <img
                src={horror4}
                onMouseEnter={() => setHorror4(evil_dead_2)}
                onMouseOut={() => setHorror4(evil_dead)}
              />
              <div className="infos">
                <h2>A morte do demônio</h2>
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
            </li>
            <li>
              <img
                src={horror5}
                onMouseEnter={() => setHorror5(hellraiser_2)}
                onMouseOut={() => setHorror5(hellraiser)}
              />
              <div className="infos">
                <h2>Hellraiser</h2>
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
            </li>
          </ul>
        </div>
      </SectionStyled>
      <SectionStyled>
        <h2>Seção de Animações</h2>
        <div>
          <ul>
            <li>
              <div>
                <img
                  src={animation1}
                  onMouseEnter={() => setAnimation1(regular_2)}
                  onMouseOut={() => setAnimation1(regular)}
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
                    Quarto 1408 foi um filme inspirado em um livro do Stephen
                    King
                  </p>
                </div>
              </div>
            </li>
            <li>
              <img
                src={animation2}
                onMouseEnter={() => setAnimation2(adventure_2)}
                onMouseOut={() => setAnimation2(adventure)}
              />
              <div className="infos">
                <h2>Arquivo X</h2>
                <span>#3 em séries sci-fi e horror</span>
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
                <p>Série baseada em qualquer tipo de teoria da conspiração</p>
              </div>
            </li>
            <li>
              <img
                src={animation3}
                onMouseEnter={() => setAnimation3(invincible_2)}
                onMouseOut={() => setAnimation3(invincible)}
              />
              <div className="infos">
                <h2>Sobrenatural</h2>
                <span>&copy;Mais assistidos do prime</span>
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
            </li>
            <li>
              <img
                src={animation4}
                onMouseEnter={() => setAnimation4(steven_2)}
                onMouseOut={() => setAnimation4(steven)}
              />
              <div className="infos">
                <h2>A morte do demônio</h2>
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
            </li>
            <li>
              <img
                src={animation5}
                onMouseEnter={() => setAnimation5(randm_2)}
                onMouseOut={() => setAnimation5(randm)}
              />
              <div className="infos">
                <h2>Hellraiser</h2>
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
            </li>
          </ul>
        </div>
      </SectionStyled>
      <SectionStyled>
        <h2>Seção de Sitcoms</h2>
        <ul>
          <li>
            <div>
              <img
                src={sitcom1}
                onMouseEnter={() => setSitcom1(big_bang_2)}
                onMouseOut={() => setSitcom1(big_bang)}
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
              src={sitcom2}
              onMouseEnter={() => setSitcom2(silicon_2)}
              onMouseOut={() => setSitcom2(silicon)}
            />
            <div className="infos">
              <h2>Arquivo X</h2>
              <span>#3 em séries sci-fi e horror</span>
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
              <p>Série baseada em qualquer tipo de teoria da conspiração</p>
            </div>
          </li>
          <li>
            <img
              src={sitcom3}
              onMouseEnter={() => setSitcom3(the_office_2)}
              onMouseOut={() => setSitcom3(the_office)}
            />
            <div className="infos">
              <h2>Sobrenatural</h2>
              <span>&copy;Mais assistidos do prime</span>
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
          </li>
          <li>
            <img
              src={sitcom4}
              onMouseEnter={() => setSitcom4(two_man_2)}
              onMouseOut={() => setSitcom4(two_man)}
            />
            <div className="infos">
              <h2>A morte do demônio</h2>
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
          </li>
          <li>
            <img
              src={sitcom5}
              onMouseEnter={() => setSitcom5(wife_and_kids_2)}
              onMouseOut={() => setSitcom5(wife_and_kids)}
            />
            <div className="infos">
              <h2>Hellraiser</h2>
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
          </li>
        </ul>
      </SectionStyled>
    </>
  )
}

export default Sections
