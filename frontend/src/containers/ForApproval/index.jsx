import React, { useState } from "react";
import { Wrapper, Inputs, NotifbarTray } from "./styles";
import NotificationBar from "@/components/NotificationBar";
import ForApprovalMemoZoom from "./Memo";
const ForApproval = () => {
  const [zoomed, setZoomed] = useState(false);
  const [memoId, setMemoId] = useState();

  const onMemoCardClick = (id) => {
    setZoomed(true);
    setMemoId(id);
  };

  if (zoomed)
    return <ForApprovalMemoZoom setZoomed={setZoomed} memoId={memoId} />;
  else
    return (
      <Wrapper>
        <Inputs>
          <div>
            <input type="checkbox" name="forAll" />
            <label htmlFor="forAll">All</label>
          </div>

          <div>
            <input type="checkbox" name="forSigned" />
            <label htmlFor="forSigned">Signed</label>
          </div>

          <div>
            <input type="checkbox" name="forUnsigned" />
            <label htmlFor="forUnsigned">Unsigned</label>
          </div>
        </Inputs>
        <NotifbarTray>
          <NotificationBar
            onClick={() => onMemoCardClick(1)}
            SubTextCount="This is a SubTextCount."
          />
          <NotificationBar
            onClick={() => onMemoCardClick(2)}
            SubTextCount="This is first warning."
            Warning="block"
          />

          <NotificationBar
            onClick={() => onMemoCardClick(3)}
            SubTextCount="This is second or third warning idk."
            Danger="block"
          />

          <NotificationBar
            onClick={() => onMemoCardClick(4)}
            SubTextCount="This is an important information."
            BlueBell="block"
          />

          <NotificationBar
            onClick={() => onMemoCardClick(5)}
            SubTextCount="This is an announcement."
            BubbleMessage="block"
          />
        </NotifbarTray>
      </Wrapper>
    );
};

export default ForApproval;
