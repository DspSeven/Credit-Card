// Write your code here
import {useState} from 'react'
import {CardContainer} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const updateCardNumber = event => {
    setCardNumber(event.target.value)
  }
  const updateCardHolderName = event => {
    setCardHolderName(event.target.value)
  }
  return (
    <div>
      <CardContainer data-testid="creditCard">
        <h1>CREDIT CARD</h1>
        <hr />
        <div>
          <p>{cardNumber}</p>
          <p>CARDHOLDER NAME</p>
          <p>{cardHolderName.toUpperCase()}</p>
        </div>
      </CardContainer>
      <div>
        <h1>Payment Method</h1>
        <input
          type="text"
          placeholder="Card Number"
          onChange={updateCardNumber}
        />
        <input
          type="text"
          placeholder="Cardholder Name"
          onChange={updateCardHolderName}
        />
      </div>
    </div>
  )
}
export default CreditCard
