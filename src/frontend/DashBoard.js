import { useContext } from "react";
import { UserContext } from "../components/context";
import LoginLogoutButton from "../components/LoginLogoutButton";
import SiteSideBar from "../components/siteSideBar";
import { NavLink, Link } from "react-router-dom";
import "./alldata.css";
import Card from "../components/context";
import { info } from "sass";

function DashBoard() {
  const ctx = useContext(UserContext);

  const Header = () => {
    return (
        <div>
          <h4
            className="header"
            style={{ fontSize: "1.3rem", color:"white" , padding:".4rem", border:"solid black 1px", backgroundColor: "#0079d5"}}
          >
            Account No: xxx-xxx-xxx-{info.accountNumber}
          </h4>
          <h4
            className="header"
            style={{ fontSize: "1.3rem", color:"white" , padding:".4rem", border:"solid black 1px", backgroundColor: "grey"}}
          >
            Balance: ${ctx.users[0].balance}
          </h4>
          <table >
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Transaction Date </th>  
            </tr>
          </table>
        </div>
      );


  };


  const Table2 = () => {
    const Accountdata = ctx.actions.filter((item) => item.user != "");
    const UserInfo = Accountdata.map((info, index) => {
      return (
        <div>
          <table key={index}>
            <tr>
              <td key={info.transactionType}>{info.transactionType}</td>
              <td key={info.amount}>{info.amount}</td>
              <td key={info.transactionDate}>{info.transactionDate}</td>
            </tr>
          </table>
        </div>
      );
    });

    return <tbody>{UserInfo}</tbody>;
  };


  return (
      <>
      {ctx.users[0].user == "" ? (
        <>
          <Link to="/login" className="fa fa-user"></Link>
          <div className="text-center fs-4 mt-5" style={{ height: "600px" }}>
            Please <LoginLogoutButton />
            <br />
            or <NavLink to="/createaccount/">Create An Account.</NavLink>
          </div>
        </>
      ) : (
        <>
          <SiteSideBar />
          <div className="content">
            <Card
              body={
                <div>
                  <table>
                    <Header />
                    <Table2 />
                  </table>
                </div>
              }
            />
          </div>
        </>
      )}
    </>
  );
}

export default DashBoard;
