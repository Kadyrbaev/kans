import styled from "styled-components"

const Header = () => {
  return (
    <HeaderStyle>
      <div className="logo-container">
          <h1>Kalem</h1>
          <a href="https://api.whatsapp.com/send/?phone=996990704008&text&type=phone_number&app_absent=0">
            <WhatsappIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="" />
          </a>
      </div>
      <div className="search-container">
        <div className="burger-menu"></div>
        <div className="input-container">
          <div className="search-img">
            <input type="text" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aKJ9AbwvP0MGcEyOeOw_4XGgMktjq1WMsA&s" alt="" />
          </div>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.header`

    .logo-container{
        display: flex;
        justify-content: space-between;
        padding: 14px 0px ;
    }

    .search-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }
    .burger-menu{
      border: 2px solid grey;
      width: 50px;
      height: 50px;
      border-radius: 7px;
    }
    .search-container img{
      width: 20px;
    }
    .input-container{
      width: 80%;
    }
    .search-img input{
      border: none;
      outline: none;
      padding: 10px 10px;
      font-size: 20px;
      width: 86%;
    }
    .search-img:active{
      border: 1px solid blue;
    }
    .search-img{
      border: 1px solid grey;
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding: 0px 14px 0px 0px;
      border-radius: 6px;
    }
`
const WhatsappIcon = styled.img`
    width: 40px;
`