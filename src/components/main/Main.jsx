import React, { useState } from 'react'
import { products } from '../../contants/products'
import ProductItem from './ProductItem'
import styled from 'styled-components'


const Main = () => {
    const [sun, setSun] = useState(8)
    const results = products.slice(0,sun)
    console.log(results);
    
    const esheHandler=()=>{
        setSun(sun+8)
    }
  return (
    <div>
        <ProductContainer>
            {
                results.map((el)=>{
                    return <ProductItem key={el.id} title={el.title} price={el.price} description={el.discription} img={el.img} />
                })
            }
        </ProductContainer>
        {products.length>sun && <ButtonStyle onClick={esheHandler}>Позазать еще</ButtonStyle>}
    </div>
  )
}

export default Main

const ProductContainer = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 159px 159px;
    justify-content: space-between;
    gap: 20px;
`

const ButtonStyle = styled.button`
    padding: 6px 60px;
    background-color: white;
    border: 1px solid red;
    font-size: 18px;
    margin: auto;
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 40px;
`