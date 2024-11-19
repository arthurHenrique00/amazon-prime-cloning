import styled from 'styled-components'

export const HeaderSite = styled.header`
  background: black;
  padding: 9px 22px;

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
          width: 70px;
          height: 30px;
          margin-left: 22px;
        }
      }
    }
  }

  .configs {
    ul {
      display: flex;
      li {
        img {
          width: 25px;
          height: 25px;
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
