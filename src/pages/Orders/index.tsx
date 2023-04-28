import {Card, CardContent, CardMedia, Grid, Typography, Container} from '@mui/material'

import { useEffect, useState } from 'react'
import { ProductData } from '@/models/product.model'
import { fecthProducts } from '@/services/serverService'
import { imageUrl } from '@/utils/common'
import { useDispatch, useSelector } from 'react-redux'
import { productSelector, setProducts } from '@/store/slices/productSlice'


const Orders = () => {
  const dispatch = useDispatch()
  const products = useSelector(productSelector)



  useEffect(()=>{
    fecthProducts()
    .then((response)=>dispatch(setProducts(response.data)))
    .catch((err)=>console.log(err))
  },[])
  return (
    <Container sx={{ py: 8 }} maxWidth='md'>
      {/* End hero unit */}
      <Grid container spacing={2}>
      {products && products.map((product) => (
          <Grid item key={product.product_id} xs={12} sm={6} md={3}>
            <Card className='h-full flex flex-col'
            >
              <CardMedia className='p-2'
                component='img'
                image={imageUrl(product.image)}
                alt='random'
              />
              <CardContent className='!p-[10px] bg-slate-100' sx={{ flexGrow: 1 }}>
                <Typography className='!text-md truncate'>
                {product.name}
                </Typography>
                <Typography>
                {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Orders
