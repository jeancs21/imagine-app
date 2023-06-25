import React, { FunctionComponent } from 'react'
import { Company } from '../../models/company'

type Props = {
    company: Company
}

const CompanyDetails:FunctionComponent<Props> = (props) => {
  return (
    <div className='flex flex-col gap-4 p-2'>
        <p className='font-medium text-xl'>{props.company.name}</p>
        <p>{`Dirección: ${props.company.address}`}</p>
        <p>{`NIT: ${props.company.nit}`}</p>
        <p>{`Teléfono: ${props.company.phone}`}</p>
    </div>
  )
}

export default CompanyDetails