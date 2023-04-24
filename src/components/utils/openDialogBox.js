import { openModal } from "../../redux/actions/modalActions";
import DialogBox from "../common/DialogBox";

export const handleOpenDialogBox = (
  handleConfirmBtn,
  state,
  content,
  dispatch
) => {
  dispatch(
    openModal({
      title: null,
      className: "dialog-modal",
      Component: (
        <DialogBox
          state={state}
          content={content}
          handleConfirmBtn={handleConfirmBtn}
        />
      ),
    })
  );
};
