import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to={'/newUser'}>
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Vijay Rahoriya</span>
                    <span className="userShowUserTitle">Web Developer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">vijayrahoriya00</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">10.11.2002</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+91 927403853</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">vijay@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">jaipur,rajasthan</span>
                </div>
            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form action="" className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder='vijayrahoriya00' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder='vijay rahoriya' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='vijay@gmail.com' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder='+91 78392734762' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder='Jaipu Rajasthan' className='userUpdateInput' />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="userUpdateImg" />
                        <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                        <input type="file" name="" id="file" style={{display:'none'}} />
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}
