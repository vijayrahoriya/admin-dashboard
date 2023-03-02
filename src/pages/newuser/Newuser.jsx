import "./newuser.css"

export default function Newuser() {
  return (
    <div className="newuser">
      <h3 className="newUserTitle">New User</h3>
      <form action="" className="newUserForm">
        <div className="newUserItem">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="amankumar190"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="aman kumar"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="aman@gmaili.com"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="password"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Phone</label>
            <input type="number" placeholder="0382048622"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Jaipur"/>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Gendar</label>
            <div className="newUserGendar">
                <input type="radio" name="gendar" id="male" value="Male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gendar" id="female" value="Female" />
                <label htmlFor="female">Female</label>
                <input type="radio" name="gendar" id="other" value="Other" />
                <label htmlFor="other">Other</label>
            </div>
        </div>
        <div className="newUserItem">
            <label htmlFor="">Active</label>
            <select name="active" id="active" className="newUserSelect">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
