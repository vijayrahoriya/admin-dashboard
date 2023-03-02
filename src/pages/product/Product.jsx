import { Publish } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Chat from "../../components/chart/Chat"
import { productdata } from "../../dummyData"
import "./product.css"

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to={'/newproduct'}>
            <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Chat data={productdata} dataKey="Sales" title={"Sales Performance"}/>
        </div>
        <div className="productTopRight">
            <div className="porductInfoTop">
                <img src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="productInfoImg" />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="porductInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Sales:</span>
                    <span className="productInfoValue">5302</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Active:</span>
                    <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">In Stock:</span>
                    <span className="productInfoValue">no</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm">
            <div className="productFormLeft">
                <label htmlFor="">Product Name</label>
                <input type="text" placeholder="Apple Airpods" />
                <label htmlFor="">In Stock</label>
                <select name="stock" id="idStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label htmlFor="">Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src="https://images.unsplash.com/photo-1600375104627-c94c416deefa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWlycG9kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="uploadImg" />
                    <label htmlFor="file"><Publish/></label>
                    <input type="file" id="file" style={{display:'none'}} />
                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Product
