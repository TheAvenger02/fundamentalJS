let invoice = { number: 1,
                client: 'LIVINGLAB',
                currency: 'USD',
                coords: {
                lat: 42.0,
                long: -100.01
                },
                services: ['LAPTOPS','COFFEE', 'GAS', 'INTERNET'],
                location: {cp: 31100, address: 'Av. Americas'},
                subtotal: 500,
                IVA: 80
}
document.write(invoice.client)
document.write('<br>')
document.write(invoice['client'])
document.write('<br>')
document.writeln(invoice.coords.lat)
document.write('<br>')
document.write(invoice.services[1])
document.write('<br>')
document.write(invoice.services[invoice.services.length-1])
document.write('<br>')

delete invoice.IVA
invoice.info = 'hola'