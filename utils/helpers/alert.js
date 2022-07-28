import Snackbar from "@mui/material/Snackbar";

export const successAlert = (openSnack, Alert, msg) => {
  return (
    <Snackbar open={openSnack} autoHideDuration={3000}>
      <Alert severity="success">{msg}</Alert>
    </Snackbar>
  );
};
