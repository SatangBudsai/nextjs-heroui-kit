import React, { Fragment, ReactElement, useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from '@/components/heroui'
import MainLayout from '@/layouts/main-layout'

const TableTest = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set<string>())

  const users = [
    {
      id: 1,
      name: 'Tony Reichert',
      role: 'CEO',
      team: 'Management',
      status: 'active',
      age: '29',
      avatar: '/images/@mock/200x200.jpg',
      email: 'tony.reichert@example.com'
    },
    {
      id: 2,
      name: 'Zoey Lang',
      role: 'Technical Lead',
      team: 'Development',
      status: 'paused',
      age: '25',
      avatar: '/images/@mock/200x200.jpg',
      email: 'zoey.lang@example.com'
    },
    {
      id: 3,
      name: 'Jane Fisher',
      role: 'Senior Developer',
      team: 'Development',
      status: 'active',
      age: '22',
      avatar: '/images/@mock/200x200.jpg',
      email: 'jane.fisher@example.com'
    },
    {
      id: 4,
      name: 'William Howard',
      role: 'Community Manager',
      team: 'Marketing',
      status: 'vacation',
      age: '28',
      avatar: '/images/@mock/200x200.jpg',
      email: 'william.howard@example.com'
    }
  ]

  const renderCell = (user: any, columnKey: string) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case 'name':
        return (
          <div className='flex items-center gap-2'>
            <Image src={user.avatar} alt={user.name} className='h-8 w-8 rounded-full' width={32} height={32} />
            <div>
              <p className='font-medium'>{user.name}</p>
              <p className='text-sm text-gray-500'>{user.email}</p>
            </div>
          </div>
        )
      case 'role':
        return (
          <div>
            <p className='font-medium'>{user.role}</p>
            <p className='text-sm text-gray-500'>{user.team}</p>
          </div>
        )
      case 'status':
        return (
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              user.status === 'active'
                ? 'bg-green-100 text-green-800'
                : user.status === 'paused'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
            }`}>
            {user.status}
          </span>
        )
      default:
        return cellValue
    }
  }

  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Table Components Test</h1>

        {/* Basic Table */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Table</h2>
          <Table aria-label='Example table with dynamic content'>
            <TableHeader>
              <TableColumn key='name'>NAME</TableColumn>
              <TableColumn key='role'>ROLE</TableColumn>
              <TableColumn key='status'>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{renderCell(user, 'name')}</TableCell>
                  <TableCell>{renderCell(user, 'role')}</TableCell>
                  <TableCell>{renderCell(user, 'status')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Selectable Table */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Selectable Table</h2>
          <Table
            aria-label='Table with selection'
            selectionMode='multiple'
            selectedKeys={selectedKeys}
            onSelectionChange={keys => setSelectedKeys(new Set(Array.from(keys).map(String)))}>
            <TableHeader>
              <TableColumn key='name'>NAME</TableColumn>
              <TableColumn key='role'>ROLE</TableColumn>
              <TableColumn key='status'>STATUS</TableColumn>
              <TableColumn key='age'>AGE</TableColumn>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{renderCell(user, 'name')}</TableCell>
                  <TableCell>{renderCell(user, 'role')}</TableCell>
                  <TableCell>{renderCell(user, 'status')}</TableCell>
                  <TableCell>{user.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className='text-sm text-gray-600'>Selected: {Array.from(selectedKeys).join(', ')}</p>
        </div>

        {/* Compact Table */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Compact Table</h2>
          <Table aria-label='Compact table' isCompact>
            <TableHeader>
              <TableColumn>ID</TableColumn>
              <TableColumn>NAME</TableColumn>
              <TableColumn>EMAIL</TableColumn>
              <TableColumn>ROLE</TableColumn>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Striped Table */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Striped Table</h2>
          <Table aria-label='Striped table' isStriped>
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>TEAM</TableColumn>
              <TableColumn>EMAIL</TableColumn>
              <TableColumn>AGE</TableColumn>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.team}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Table with Custom Styling */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Table with Custom Styling</h2>
          <Table
            aria-label='Custom styled table'
            className='min-h-[200px]'
            classNames={{
              wrapper: 'max-h-[382px]'
            }}>
            <TableHeader>
              <TableColumn key='name' className='bg-primary text-white'>
                NAME
              </TableColumn>
              <TableColumn key='role' className='bg-primary text-white'>
                ROLE & TEAM
              </TableColumn>
              <TableColumn key='status' className='bg-primary text-white'>
                STATUS
              </TableColumn>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{renderCell(user, 'name')}</TableCell>
                  <TableCell>{renderCell(user, 'role')}</TableCell>
                  <TableCell>{renderCell(user, 'status')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Empty Table */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Empty Table</h2>
          <Table aria-label='Empty table'>
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>EMAIL</TableColumn>
              <TableColumn>ROLE</TableColumn>
            </TableHeader>
            <TableBody emptyContent={'No users to display.'}>{[]}</TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default TableTest

TableTest.auth = false

TableTest.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}
