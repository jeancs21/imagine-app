import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { AppStore } from '../../../redux/store'
import CardList from './CardList'
import EmptyInventoryMessage from './EmptyInventoryMessage'
import { Company } from '../../models/company'

type Props = {
    company: Company
}

const ProductFetcher:FunctionComponent<Props> = (props) => {

    const productList = useSelector((store: AppStore) => store.product)
    const filteredProducts = productList.filter(product => product.company === props.company.nit)

  return (
    <>
        <div className='flex flex-col justify-center'>
            <h1 className='text-3xl self-center p-8'>Lista de productos</h1>
            <div className='self-center container p-8 rounded-md'>
                {filteredProducts.length > 0 ?
                    <CardList products={filteredProducts}/>
                    :
                    <EmptyInventoryMessage />
                }
            </div>
        </div>
    </>
  )
}

export default ProductFetcher