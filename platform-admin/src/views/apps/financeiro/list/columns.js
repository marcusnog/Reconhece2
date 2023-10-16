import moment from 'moment'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { deleteUser, editUser } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Edit2, MoreVertical, Trash2, Check } from 'react-feather'

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  return <Avatar color={color || 'primary'} className='mr-1' content={row.nickname} initials />
}

const statusObj = {
  true: 'light-success',
  false: 'light-secondary'
}

export const columns = [
  {
    name: 'Participante',
    minWidth: '150px',
    maxWidth: '290px',
    selector: 'name',
    sortable: false,
    cell: row => (
      <div className='d-flex flex-grow-1 justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <span className='font-weight-bold'>{row.nickname}</span>
        </div>
      </div>
    )
  },
  {
    name: 'Cpf',
    //minWidth: '297px',
    maxWidth: '290px',
    selector: 'email',
    sortable: false,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        <div className='d-flex flex-column'>
          <span className='font-weight-bold'>{row.email}</span>
        </div>
      </div>
    )
  },
  {
    name: 'Campanha',
    maxWidth: '120px',
    //minWidth: '297px',
    selector: 'fullName',
    sortable: false,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        <div className='d-flex flex-column'>
          <span className='font-weight-bold'>{(moment(row.creationDate).format('DD/MM/YYYY'))}</span>
        </div>
      </div>
    )
  },
  {
    name: 'ID-Cliente',
    minWidth: '50px',
    maxWidth: '120px',
    selector: 'status',
    sortable: false,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.active]} pill>
        {(!!row.active ? 'Ativo' : 'Inativo')}
      </Badge>
    )
  },
  {
    name: 'Valor Recarga',
    minWidth: '50px',
    maxWidth: '160px',
    selector: 'fullName',
    sortable: false,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        <div className='d-flex flex-column'>
          <span className='font-weight-bold'>{row.profileName}</span>
        </div>
      </div>
    )
  },
  {
    name: 'Valor Taxa',
    minWidth: '50px',
    maxWidth: '160px',
    selector: 'fullName',
    sortable: false,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        <div className='d-flex flex-column'>
          <span className='font-weight-bold'>{row.profileName}</span>
        </div>
      </div>
    )
  },
  {
    name: 'Valor Pontos',
    minWidth: '50px',
    selector: 'fullName',
    sortable: false,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        <div className='d-flex flex-column'>
          <span className='font-weight-bold'>{row.profileName}</span>
        </div>
      </div>
    )
  }
]
