function processOrder(order) {
  var total = 0
  for (var i = 0; i < order.items.length; i++) {
    total = total + order.items[i].price * order.items[i].qty
  }
  fetch('/api/orders', {
    method: 'POST',
    body: JSON.stringify({ total: total, order: order })
  })
  return totalhjkhkjhkjhjh
}
