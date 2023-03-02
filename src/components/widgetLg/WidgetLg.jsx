import './widgetLg.css'

export default function WidgetLg() {

    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Aman Kumar</span>
            </td>
            <td className="widgetLgDate">2 Mar 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
                <Button type="Approved"/>
            </td>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Aman Kumar</span>
            </td>
            <td className="widgetLgDate">2 Mar 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
                <Button type="Decline"/>
            </td>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Aman Kumar</span>
            </td>
            <td className="widgetLgDate">2 Mar 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
                <Button type="Pending"/>
            </td>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Aman Kumar</span>
            </td>
            <td className="widgetLgDate">2 Mar 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
                <Button type="Approved"/>
            </td>
        </tr>

      </table>
    </div>
  )
}
