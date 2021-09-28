import { Modal } from "@material-ui/core";
import { useRef } from "react";
import useStyles from "../../styles/FoodEcuadorStyle";
import BodyModal from "../../components/BodyModal";
import withAuth from "../../hocs/withAuth";

const FoodDetail = () => {
  const classes = useStyles();
  const rootRef = useRef(null);

  return (
    <div className={classes.root} ref={rootRef}>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
        <BodyModal />
      </Modal>
    </div>
  );
};

export default withAuth(FoodDetail);
