import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Language from '@mui/icons-material/Language';
import Settings from '@mui/icons-material/Settings';

function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">VJAdmin</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNoneIcon/>
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Language/>
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                <Settings/>
            </div>
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
