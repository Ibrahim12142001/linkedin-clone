import { postStatus } from '../../../api/FirestoreAPI';
import React, { useState } from 'react';
import ModalComponent from "../Modal";
import "./index.scss";

export default function PostStatus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const sendStatus = async () => {
    await postStatus(status);
    await setModalOpen(false);
    await setStatus("");
  }

  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-model" onClick={() => setModalOpen(true)}>
          Start a Post
        </button>
      </div>

      <ModalComponent 
      setStatus={setStatus}
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen}
      status={status}
      sendStatus={sendStatus} />
    </div>
  );
}
