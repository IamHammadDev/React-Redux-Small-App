import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { depositmoney, withdrawmoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state) => state.amount);
  return (
    <>
      <div>
        <h2>Deposit & Withdraw money</h2>
        <button className="btn btn-info mx-2" onClick={() => depositmoney(100)}>
          <i class="fa-solid fa-circle-plus"></i>
        </button>
        Update Balance ({amount})
        <button
          className="btn btn-danger mx-2"
          onClick={() => withdrawmoney(100)}
        >
          <i class="fa-solid fa-circle-minus"></i>
        </button>
      </div>
    </>
  );
};

export default Shop;
