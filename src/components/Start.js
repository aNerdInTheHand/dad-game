import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function Start () {
  const [showModal, setShowModal] = useState(true)
  const handleClose = () => setShowModal(false)

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>The Dad Game</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Welcome to the dad game!
          Here, you can simulate all the fun and excitement of being a dad,
          without actually getting sicked on. Unless you're already a dad,
          in which case you're playing this whilst covered in sick.
        </p>
        <p>Just like in real life, you'll be presented with a series of challenges
          and will have to decide how best to react to each one. And just like in
          real life, each decision will be a trade-off. The trick is to meet your
          little cherub's every need whilst making sure your vital statistics
          don't fall to dangerous levels. If they do, it's game over man!
        </p>
        <p>When you're ready to play, close this dialogue box and fill in
          the details to start playing. And don't worry, this game doesn't track
          any of your information. Bear in mind this means that if you refresh
          your page, the game will restart. Happy dadding!
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Start
