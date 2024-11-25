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

      > img {
        width: 250px;
        height: 400px;
        margin-left: 30px;
        border-radius: 12px;
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1, 1.1);
        }
      }

      .more {
        position: absolute;

        ul {
          list-style: none;
          display: flex;

          li {
            margin-left: 12px;
            img {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }
  }
`
