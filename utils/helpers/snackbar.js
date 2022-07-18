import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const errorAlert = (openSnack, Alert, msg) => {
  return (
    <Snackbar open={openSnack} autoHideDuration={3000}>
      <Alert severity="error">{msg}</Alert>
    </Snackbar>
  );
};

export const successAlert = (openSnack, Alert, msg) => {
  return (
    <Snackbar open={openSnack} autoHideDuration={3000}>
      <Alert severity="success">{msg}</Alert>
    </Snackbar>
  );
};

export const errorLogin = (openSnack, Alert) => {
  return (
    <Snackbar open={openSnack} autoHideDuration={3000}>
      <Alert severity="error">Invalid Email/Password</Alert>
    </Snackbar>
  );
};