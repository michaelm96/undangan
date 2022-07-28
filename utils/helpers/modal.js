export const modal = (
  open,
  handleClose,
  Backdrop,
  style,
  setOpen,
  playSound,
  Modal,
  Fade,
  Box,
  Typography,
  Button,
  font
) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
    >
      <Fade in={open}>
        <Box
          sx={style}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            id="transition-modal-title"
            variant="h3"
            component="h2"
            fontFamily={font}
            color="white"
          >
            Undangan untuk kamu
          </Typography>
          <Button
            onClick={() => {
              setOpen(false);
              playSound();
              console.log("clicked");
            }}
            sx={{
              backgroundImage: "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)",
            }}
          >
            Buka
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};
