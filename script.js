const code = 
function calculateTotal(price, quantity, discount) {
  return price * quantity * (1 - discount);
}
`;

findMaxErrors(codes).then(console.log)
