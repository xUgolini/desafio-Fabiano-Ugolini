import { cardapio } from "./cardapio"

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {

        let valorTotal = 0

        const formasPagamento = ['dinheiro', 'debito', 'credito'];

        if (!formasPagamento.includes(metodoDePagamento)) {
            return 'Forma de pagamento inválida!'
        }

        for (const item of itens) {
            const [codigo, quantidade] = item.split(",")
            console.log(codigo, quantidade)

            if (parseInt(quantidade) === 0) {
                return "Quantidade inválida!"
            }


            const cardapioItem = cardapio.find(item => item.codigo === codigo)

            if (!cardapioItem) {
                return "Item inválido!"
            }

            valorTotal += cardapioItem.valor * parseInt(quantidade)

            if (codigo === 'chantily') {

                if (!itens.includes('cafe')) {
                    return "Item extra não pode ser pedido sem o principal"
                }
            }

            if (codigo === 'queijo') {

                if (!itens.includes('sanduiche')) {
                    return "Item extra não pode ser pedido sem o principal"
                }
            }
        }

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!'
        }


        let totalAPagarComDescontoOuAcrescimo = 0

        if (metodoDePagamento === 'dinheiro') {
            totalAPagarComDescontoOuAcrescimo = valorTotal * 0.95
        }
        else if (metodoDePagamento === 'credito') {
            totalAPagarComDescontoOuAcrescimo = valorTotal * 1.03
        }
        else if (metodoDePagamento === 'debito') {
            totalAPagarComDescontoOuAcrescimo = valorTotal
        } else {
            return "Forma de pagamento inválida!"
        }

        const valorAPagar = (totalAPagarComDescontoOuAcrescimo / 100).toFixed(2).split(".", ",")

        return `R$ ${valorAPagar}`

    }

}

export {
    CaixaDaLanchonete,
}
