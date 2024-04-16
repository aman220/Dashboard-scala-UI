import { useEffect, useRef, useState } from "react";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

const AreaTableAction = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleDropdown}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div className="action-dropdown-menu" ref={dropdownRef}>
            <ul className="dropdown-menu-list">
              <li className="dropdown-menu-item">
                <Link to="/view" className="dropdown-menu-link">
                  View
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Link to="/view" className="dropdown-menu-link">
                  Edit
                </Link>
              </li>
              <li className="dropdown-menu-item">
                <Button onClick={handleOpen} variant="gradient">
                  Update
                </Button>
              </li>
            </ul>
          </div>
        )}
      </button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Update Data
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter Updated Values to this Transaction
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Type
            </Typography>
            <Input label="Type" size="lg" />
            <Typography className="-mb-2" variant="h6">
               Date
            </Typography>
            <Input label="Date" size="lg" />
            <Typography className="-mb-2" variant="h6">
               Description
            </Typography>
            <Input label="Description" size="lg" />
            <Typography className="-mb-2" variant="h6">
               Amount
            </Typography>
            <Input label="Amount" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Update
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default AreaTableAction;
