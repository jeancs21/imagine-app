import { FunctionComponent } from 'react'
import { Product } from '../../models/product'
import Card from './Card'

type Props = {
    products: Product[]
}

const CardList:FunctionComponent<Props> = (props) => {
  return (
    <div className='flex flex-wrap'>
        {props.products.map((product, i) => {
            return (
                <Card
                    key={i}
                    id={product.id}
                    name={product.name}
                    quantity={product.quantity}
                    price={product.price}
                    description={product.description}
                />
            )
        })}
    </div>
  )
}

export default CardList