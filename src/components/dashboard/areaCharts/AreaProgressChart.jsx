const data = [
  {
    id: 1,
    name: "Phone Pay",
    percentValues: 70,
  },
  {
    id: 2,
    name: "House rent",
    percentValues: 40,
  },
  
];

const AreaProgressChart = () => {
  // const [mostpay, setmostPay] = useState([]);

  // useEffect(() => {
  //   getRecentTransaction();
  // }, []);

  // const getRecentTransaction = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:7000/api/v1/transaction/generateCategoryComparisons",
  //       {
  //         userId: "2",
  //         tag:"Shopping",
  //       }
  //     );
  //     if (response.data.success) {
  //       setRecentTransactions(response.data.transaction);
  //     } else {
  //       console.error(
  //         "Failed to fetch recent transactions:",
  //         response.data.message
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error fetching recent transactions:", error.message);
  //   }
  // };
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Expenses</h4>
      </div>
      <div className="progress-bar-list">
        {data?.map((progressbar) => {
          return (
            <div className="progress-bar-item" key={progressbar.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{progressbar.name}</p>
                <p className="bar-item-info-value">
                  {progressbar.percentValues}
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${progressbar.percentValues}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;
