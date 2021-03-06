import React, { useEffect, useState } from "react";
import {
  Wrapper,
  LeftSide,
  RightSide,
  DisplayNotif,
  To,
  SubText,
  MainMessage,
  ProgressBar,
  TitleBar,
} from "./styles";
import NotificationBar from "@/components/NotificationBar";

function ForApprovalMemoZoom({ memoId, setZoomed }) {
  const [selectedMemoId, setSelectedMemoId] = useState(memoId);

  const onMemoCardClick = (id) => {
    setSelectedMemoId(id);
  };

  useEffect(() => {}, [selectedMemoId]);
  return (
    <Wrapper>
      <LeftSide>
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
      </LeftSide>
      <RightSide>
        <DisplayNotif>
          <To>To: John Doe {selectedMemoId}</To>
          <SubText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            sapiente?
          </SubText>
          <MainMessage>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            unde fugiat ea inventore iste, eum optio adipisci expedita quo
            veniam, cupiditate aut ab veritatis corrupti at similique facere
            recusandae numquam modi rem libero quas iure a. Explicabo
            perspiciatis non iste. Quia esse deleniti quaerat quisquam.
            Eligendi, tempore adipisci quaerat eius architecto quidem sint
            debitis recusandae eos velit necessitatibus quia qui labore itaque
            provident quam quo in iste, earum doloremque minus molestias
            laboriosam ipsam? Itaque autem explicabo nulla temporibus distinctio
            quas.
          </MainMessage>
        </DisplayNotif>
        <ProgressBar>
          <TitleBar>
            PROGRESS
            <br /> STATUS
          </TitleBar>
        </ProgressBar>
      </RightSide>
    </Wrapper>
  );
}

export default ForApprovalMemoZoom;
