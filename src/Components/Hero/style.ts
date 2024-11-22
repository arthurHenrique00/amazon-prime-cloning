import { styled } from 'styled-components'

export const HeroStyled = styled.div`
  div {
    position: relative;
    #hero {
      width: 100%;
      display: block;
    }

    .content {
      position: absolute;
      z-index: 1;
      margin-left: 50px;
      top: 50px;
      left: 26px;

      .logos {
        margin-bottom: 64px;

        img {
          display: block;
        }
      }

      .about {
        display: block;

        span {
          font-weight: bold;
          color: #2ecc71;
        }

        p {
          margin-top: 12px;
          font-weight: bold;
          color: white;
          width: 650px;
        }
      }

      .interaction {
        margin-top: 32px;

        ul {
          display: flex;

          li {
            list-style: none;
            padding: 12px;
            margin-right: 12px;

            > a {
              text-decoration: none;
              color: white;
              font-weight: bold;
              font-size: 18px;
              background-color: #636e72;
              padding: 12px;
              border-radius: 9px;

              img {
                width: 18px;
                height: 18px;
                margin-right: 12px;
              }

              &:hover {
                background-color: white;
                color: black;
                border-radius: 9px;
                padding: 12px;

                img {
                  filter: brightness(0%);
                }
              }
            }
          }
        }

        .more {
          display: flex;
          padding: 12px;

          img {
            width: 40px;
            height: 40px;
          }

          a {
            border-radius: 50%;
            width: 40px;
            height: 40px;
            padding: 6px;
            transition: transform 0.2s;
            display: flex;

            &:hover {
              background-color: white;
              border-radius: 50%;
              padding: 6px;

              img {
                filter: brightness(0%);
              }
            }
          }
        }
      }
    }
  }

  #rotate {
    transition: transform 1s ease-in-out;

    &:hover {
      transform: rotate(360deg);
    }
  }
`
