import styled from 'styled-components'

export const SectionStyled = styled.section`
  padding: 40px 40px;

  h2 {
    font-size: 22px;
    color: white;
    margin-bottom: 22px;
    margin-left: 22px;
  }

  ul {
    display: flex;

    li {
      margin-left: 32px;
      transition: transform 0.2s;

      img {
        width: 250px;
        height: 150px;
        border-radius: 12px;
        cursor: pointer;
      }

      .infos {
        background-color: #353b48;
        width: 250px;
        padding: 12px;
        display: none;
        border-radius: 9px;
        position: absolute;

        h2 {
          font-size: 16px;
        }

        span {
          color: #2ecc71;
          font-size: 12px;
        }

        p {
          font-size: 12px;
          color: white;
          font-weight: bold;
        }
      }

      .buttons {
        padding: 12px 0;

        ul {
          list-style: none;

          li {
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }

      &:hover {
        transform: scale(1.1, 1.1);

        .infos {
          display: block;
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
