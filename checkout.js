var prices = {
    'pontoon': 1500,
    'speed': 100,
    'cruiser': 800,
    'bass': 750,
    'jon': 125,
    'kayak': 120,
    'jetski': 500,
}

function update_total(boat){
    var price = prices[boat];
    var current_total = Number($('#total').text());
    var boat_id = '#' + boat;
    var num_boats = Number($(boat_id).val());
    var sale_price = num_boats * price;
    var new_total = sale_price + current_total;
    $('#total').text(new_total);
};