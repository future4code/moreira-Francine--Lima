function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let valorDoCarro=valorTotalVendas/qtdeCarrosVendidos
 let cincoPorCentoValorCarro=(valorDoCarro-(valorDoCarro*0.95))*qtdeCarrosVendidos
 let comissao=100*qtdeCarrosVendidos+cincoPorCentoValorCarro
 let salarioMes=2000+comissao

 return salarioMes

}