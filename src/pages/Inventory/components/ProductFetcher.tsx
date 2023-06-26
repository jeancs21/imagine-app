import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { AppStore } from '../../../redux/store'
import CardList from './CardList'
import EmptyInventoryMessage from './EmptyInventoryMessage'
import { Company } from '../../models/company'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type Props = {
    company: Company
}

const ProductFetcher:FunctionComponent<Props> = (props) => {

    const productList = useSelector((store: AppStore) => store.product)
    const filteredProducts = productList.filter(product => product.company === props.company.nit)

    const downloadInventoryAsPDF = async () => {
        const inventoryContainer = document.getElementById('inventory-container');
        if (!inventoryContainer) {
          return;
        }
    
        const canvas = await html2canvas(inventoryContainer);
    
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save('inventory.pdf');
      };

  return (
    <>
        <div className='flex flex-col justify-center'>
            <div className='flex justify-between'>
                <h1 className='text-3xl self-center p-8'>Lista de productos</h1>
                <button className='p-2 w-46 bg-slate-300 rounded-md' onClick={downloadInventoryAsPDF}>Descargar inventario en PDF</button>
            </div>
            <div className='self-center container p-8 rounded-md'>
                {filteredProducts.length > 0 ?
                    <>
                        <div id='inventory-container'>
                            <CardList products={filteredProducts}/>
                        </div>
                    </>
                    :
                    <EmptyInventoryMessage />
                }
            </div>
        </div>
    </>
  )
}

export default ProductFetcher