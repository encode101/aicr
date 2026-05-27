func processItems(items []map[string]interface{}) {
    for i := 0; i < len(items); i++ {
        price := items[i]["price"].(float64)
        qty := items[i]["qty"].(float64)
        items[i]["total"] = price * qty
    }
}
