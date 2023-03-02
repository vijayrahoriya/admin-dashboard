import "./productlist.css"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Productlist() {

    const handleClick = (id) =>{
        setData(data.filter((item)=> item.id !== id));
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "product", headerName: "Product", width: 200, renderCell:(params)=>{
            return (
                <div className="productListProduct">
                    <img className="productListImg" src={params.row.img} alt=""/>
                    {params.row.name}
                </div>
            )
        } },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 200,
        },
        {
          field: "price",
          headerName: "Price Volume",
          width: 90,
        },
        {
            field:"action",
            headerName:"Action",
            width: 150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/product/"+ params.row.id}><button className="userlistEdit">Edit</button></Link>
                    <DeleteOutline className="productlistDelete" onClick={()=>handleClick(params.row.id)}/>
                    </>
                )
            }
        }
      ];

    const rows = [
        {
          id: 1,
          name: "Apple Airpods",
          img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            stock:123,
            status:"active",
            price:"$120.00"
        },
        {
          id: 2,
          name: "Apple Airpods",
          img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            stock:123,
            status:"active",
            price:"$120.00"
        },
        {
          id: 3,
          name: "Apple Airpods",
          img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            stock:123,
            status:"active",
            price:"$120.00"
        },
        {
          id: 4,
          name: "Apple Airpods",
          img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            stock:123,
            status:"active",
            price:"$120.00"
        },
        {
          id: 5,
          name: "Apple Airpods",
          img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            stock:123,
            status:"active",
            price:"$120.00"
        },
        {
          id: 6,
          name: "Apple Airpods",
          img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            stock:123,
            status:"active",
            price:"$120.00"
        },
        {
          id: 7,
          name: "Apple Airpods",
          img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            stock:123,
            status:"active",
            price:"$120.00"
        },
        {
          id: 8,
          name: "Apple Airpods",
          img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            stock:123,
            status:"active",
            price:"$120.00"
        },
        {
          id: 9,
          name: "Apple Airpods",
          img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            stock:123,
            status:"active",
            price:"$120.00"
        },
        {
          id: 10,
          name: "Apple Airpods",
          img:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            stock:123,
            status:"active",
            price:"$120.00"
        },
      ];

    const [data,setData] = useState(rows)


  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
