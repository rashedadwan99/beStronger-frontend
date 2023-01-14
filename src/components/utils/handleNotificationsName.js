import NotificationSenders from "../NotificationSenders";

export const handleNotificationMessage = (notifications, targetId) => {
  let notificationWithSameTarget = notifications.filter(
    (n) => n.targetId === targetId
  );
  const length = notificationWithSameTarget.length;
  if (length === 1) {
    return (
      <NotificationSenders
        senderId={notificationWithSameTarget[0].sender._id}
        senderName={notificationWithSameTarget[0].sender.name}
      />
    );
  }
  if (length === 2) {
    return (
      <>
        <NotificationSenders
          senderId={notificationWithSameTarget[1].sender._id}
          senderName={notificationWithSameTarget[1].sender.name}
        />

        {` and `}
        <NotificationSenders
          senderId={notificationWithSameTarget[0].sender._id}
          senderName={notificationWithSameTarget[0].sender.name}
        />
      </>
    );
  }
  if (length > 2) {
    return (
      <NotificationSenders
        senderId={notificationWithSameTarget[length - 1].sender._id}
        senderName={notificationWithSameTarget[length - 1].sender.name}
        info={` and ${notificationWithSameTarget.length - 1} others`}
      />
    );
  }
};
