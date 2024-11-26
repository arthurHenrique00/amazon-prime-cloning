import styled from 'styled-components'

export const Original = styled.section`
  padding: 40px 40px;

  h2 {
    font-size: 32px;
    color: white;
    margin-bottom: 22px;
  }

  .exclusives-originals {
    display: flex;

    .exclusive-item {
      color: white;
      position: relative;

      > img {
        width: 100%;
        border-radius: 12px;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1, 1.1);
        }
      }

      .more {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
        display: none;

        padding: 20px;
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0)
        );

        ul {
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;

          li {
            margin: 0 12px;

            img {
              width: 25px;
              height: 25px;
            }
          }
        }
      }

      &:hover {
        .more {
          display: block;
        }
      }
    }
  }

  #play {
    background-color: #636e72;
    padding: 6px;
    border-radius: 9px;
    font-weight: bold;
    align-items: center;
    display: flex;

    img {
      margin-right: 12px;
    }
  }
`
