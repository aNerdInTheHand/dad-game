import React from 'react'
import { Form } from 'react-bootstrap'

export default (setBabySex, setBabyName, setDadName, setPronouns) => (
  <Form>
    <Form.Group controlId='gameOptions'>
      <Form.Label>Baby's Sex</Form.Label>
      <Form.Check name='sex-radio' type='radio' label='Female' id='radio-female' />
      <Form.Check name='sex-radio' type='radio' label='Male' id='radio-male' />
    </Form.Group>
  </Form>
)
