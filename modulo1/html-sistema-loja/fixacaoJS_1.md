function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let valorDoCarro=valorTotalVendas/qtdeCarrosVendidos
 let cincoPorCentoValorCarro=valorTotalVendas*0.05
 let comissao=100*qtdeCarrosVendidos+cincoPorCentoValorCarro
 let salarioMes=2000+comissao

 return salarioMes

}
