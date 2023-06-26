import React, { FunctionComponent, useState } from 'react'
import InventoryButton from './InventoryButton';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Company } from '../../../models/company';
import { CompanyEmptyState } from '../../../../redux/states/company.state';
import EditCompanyForm from '../CompanyForm/EditCompany';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../../redux/store';
import { AdminAccount } from '../../../models/accounts';

type Props = {
    companies: Company[]
}

const CompanyListContainer:FunctionComponent<Props> = (props) => {

    const [selectedItem, setSelectedItem] = useState<Company>(CompanyEmptyState)

    const userLogged = useSelector((store: AppStore) => store.loggedUser)

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
                    <div className='flex sm:justify-around justify-between w-full sm:p-6 p-2 bg-slate-100 rounded-full items-center gap-6'>
                        <p className='font-medium'>{company.name}</p>
                        <InventoryButton path='/inventory/' id={company.nit} />
                    </div>
                    {userLogged.email === AdminAccount.email &&
                        <div className='flex justify-around w-96'>
                            <div className='h-6 w-6' onClick={() => handleClick(company)}>
                                <PencilSquareIcon />
                            </div>
                            <div className='h-6 w-6'>
                                <TrashIcon />
                            </div>
                        </div>
                    }
                </div>
            )
        })
        }
        <EditCompanyForm isOpen={isOpen} closeModal={closeModal} selectedItem={selectedItem} />
    </div>
  )
}

export default CompanyListContainer