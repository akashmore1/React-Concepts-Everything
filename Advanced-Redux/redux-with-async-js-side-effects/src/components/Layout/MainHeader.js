import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import cartClickHandler from "../../actions/cartAction";
import { connect, useDispatch } from "react-redux";
import createAction from "../../actions/createAction";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton
              onClick={() => {
                dispatch({ type: "CART_CLICKED" });
                console.log(props);
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ cartData }) => ({ cartData });

// const mapDispatchToProps = {
//   cartClickHandler,
//   createAction,
// };

export default connect(mapStateToProps)(MainHeader);
