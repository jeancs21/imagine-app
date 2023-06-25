import React, { FunctionComponent, useState } from 'react'
import InventoryButton from './InventoryButton';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Company } from '../../../models/company';
import { CompanyEmptyState } from '../../../../redux/states/company.state';
import EditCompanyForm from '../CompanyForm/EditCompany';

type Props = {
    companies: Company[]
}

const CompanyListContainer:FunctionComponent<Props> = (props) => {

    const [selectedItem, setSelectedItem] = useState<Company>(CompanyEmptyState)

    const [isOpen, setOpen] = useState(false)

    const [isHovering, setHovering] = useState(false);

    const handleMouseOver = () => {
        setHovering(true)
    }

    const handleMouseOut = () => {
        setHovering(false)
    }

    const handleClick = (item: Company) => {
        setSelectedItem(item)
        setOpen(true)
        console.log("item", item)
    }

    const closeModal = () => {
        setOpen(false)
    }
  return (
    <div className='container flex flex-col p-8  border border-slate-400 rounded-lg gap-4'>
        {props.companies.map((company, i) => {
            return (
                <div
                    key={i}
                    className='flex w-full p-4 justify-between  items-center rounded-md'
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <div className='flex justify-around w-full p-6 bg-slate-100 rounded-full items-center'>
                        <p className='font-medium'>{company.name}</p>
                        <InventoryButton path='/inventory/' id={company.nit} />
                    </div>
                    <div className='flex justify-around w-96'>
                        <div className='h-6 w-6' onClick={() => handleClick(company)}>
                            <PencilSquareIcon />
                        </div>
                        <div className='h-6 w-6'>
                            <TrashIcon />
                        </div>
                    </div>
                </div>
            )
        })
        }
        <EditCompanyForm isOpen={isOpen} closeModal={closeModal} selectedItem={selectedItem} />
    </div>
  )
}

export default CompanyListContainer