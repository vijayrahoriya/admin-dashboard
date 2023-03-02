import "./userlist.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserList() {

    const handleClick = (id) =>{
        setData(data.filter((item)=> item.id !== id));
    }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user", headerName: "User", width: 200, renderCell:(params)=>{
        return (
            <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt=""/>
                {params.row.username}
            </div>
        )
    } },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "transcation",
      headerName: "Transcation Volume",
      width: 90,
    },
    {
        field:"action",
        headerName:"Action",
        width: 150,
        renderCell:(params)=>{
            return(
                <>
                <Link to={"/user/"+ params.row.id}><button className="userlistEdit">Edit</button></Link>
                <DeleteOutline className="userlistDelete" onClick={()=>handleClick(params.row.id)}/>
                </>
            )
        }
    }
  ];

  const rows = [
    {
      id: 1,
      username: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email:"john@gmail.com",
        status:"active",
        transcation:"$120.00"
    },
    {
      id: 2,
      username: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email:"john@gmail.com",
        status:"active",
        transcation:"$120.00"
    },
    {
      id: 3,
      username: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email:"john@gmail.com",
        status:"active",
        transcation:"$120.00"
    },
    {
      id: 4,
      username: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email:"john@gmail.com",
        status:"active",
        transcation:"$120.00"
    },
    {
      id: 5,
      username: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email:"john@gmail.com",
        status:"active",
        transcation:"$120.00"
    },
    {
      id: 6,
      username: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email:"john@gmail.com",
        status:"active",
        transcation:"$120.00"
    },
    {
      id: 7,
      username: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email:"john@gmail.com",
        status:"active",
        transcation:"$120.00"
    },
    {
      id: 8,
      username: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email:"john@gmail.com",
        status:"active",
        transcation:"$120.00"
    },
    {
      id: 9,
      username: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email:"john@gmail.com",
        status:"active",
        transcation:"$120.00"
    },
    {
      id: 10,
      username: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        email:"john@gmail.com",
        status:"active",
        transcation:"$120.00"
    },
  ];

  const [data,setData] = useState(rows)

  return (
    <div className="userlist">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
