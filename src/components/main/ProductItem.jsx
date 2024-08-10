import React from 'react'
import styled from 'styled-components'

const ProductItem = (props) => {
  return (
    <ProductItemStyle>
        <img src={props.img} alt="" />
        <div>
            <h1>{props.title}</h1>
            <h2>{props.price} сом</h2>
            <p>{props.description}</p>
        </div>
    </ProductItemStyle>
  )
}

export default ProductItem

const ProductItemStyle = styled.div`
    /* padding: 20px; */
    /* width: ; */
    text-align: center;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0.60px;

    img{
        width: 140px;
        height: 150px;
    }
`