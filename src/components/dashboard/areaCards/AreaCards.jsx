import getUserDetails from "../../../GetUser/getuser";
import React, { useEffect, useState } from "react";
import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = ({user}) => {
 
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Total Budget",
          value: `${user.totalBudget}`,
          text: "We have sold 123 items.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Todays Savings",
          value: `${user.currentBalance}`,
          text: "Available to payout",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Total Expenses",
          value: `${user.totalExpense}`,
          text: "Available to payout",
        }}
      />
    </section>
  );
};

export default AreaCards;
