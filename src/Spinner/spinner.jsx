import { Spinner } from "@material-tailwind/react";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
export function DefaultSpinner({ status }) {
  const [open, setOpen] = React.useState(status);

  return (
    <Dialog open={open}>
      <DialogBody>
        <Spinner />
      </DialogBody>
    </Dialog>
  );
}
