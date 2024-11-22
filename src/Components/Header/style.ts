import styled from 'styled-components'

export const HeaderSite = styled.header`
  background: black;
  padding: 0 22px;

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;

      img {
        width: 50px;
        height: 30px;
        margin-right: 46px;
      }

      .categories {
        display: flex;

        li {
          list-style: none;
        }
      }
    }

    .signatures {
      border-left: 2px solid gray;

      ul {
        display: flex;

        img {
          transition: transform 0.2s;
          margin-left: 22px;

          &:hover {
            background-color: blue;
            border-radius: 9px;
            transform: scale(1.1);
            padding: 6px;
          }
        }
      }
    }
  }

  .configs {
    ul {
      align-items: center;
      display: flex;

      li {
        list-style: none;
        padding: 12px;

        img {
          width: 25px;
          height: 25px;
          transition: transform 0.2s;

          &:hover {
            transform: scale(1.3);
            // background: white;
            // border-radius: 50%;
            // padding: 12px;
            // filter: grayscale(0);
          }
        }
      }
    }
  }

  a {
    text-decoration: none;

    font-weight: bold;
    color: white;
  }

  p {
    margin-right: 22px;
    box-sizing: border-box;
    transition: transform 0.2s;
    padding: 3px;

    &:hover {
      background-color: white;
      color: black;
      box-shadow: 0 0 0 px white;
      border-radius: 6px;
      transform: scale(1.1);
      padding: 3px;
    }
  }
`
