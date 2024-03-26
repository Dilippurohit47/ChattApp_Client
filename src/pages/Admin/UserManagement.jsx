import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table.jsx'


const columns =[{
  field:"id",
  headerName:"ID",
  headerClassName:"table-header",
  width:200,
}]

const UserManagement = () => {

const [rows,setrows] = useState([]);
return (<AdminLayout>
<Table heading={"All users"} rows={rows}  columns={columns} />
  </AdminLayout>)
}

export default UserManagement
