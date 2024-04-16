import React, { useEffect, useState } from "react";
import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  CardBody,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import getUserDetails from "../../GetUser/getuser";
const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = useState("");
  const [user, setUser] = useState("");
  const handleOpen = () => setOpen(!open);
  const nav = useNavigate();
  const currmon = new Date().toLocaleDateString();
  const check = ()=>{
    const check = localStorage.getItem("token")
    if(!check){
      nav('/login')
    }else{
      nav('/')
    }
  };

  useEffect(()=>{
    check()
  },[])

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserDetails();
        setUser(userData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUser();
  }, []);

 

  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards user={user}/>
      <AreaCharts />
      <AreaTable />
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Update</DialogHeader>
        <DialogBody>
          Please Enter Your Expected Expense for this {currmon}
        </DialogBody>
        <CardBody className="flex flex-col gap-4">
          <Typography className="-mb-2" variant="h6">
            Expected Expenses
          </Typography>
          <Input label="expectedexpense" size="lg" />
          <DialogFooter>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Update</span>
            </Button>
          </DialogFooter>
        </CardBody>
      </Dialog>
    </div>
  );
};

export default Dashboard;
