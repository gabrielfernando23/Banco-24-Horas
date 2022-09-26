# Banco-24-Horas
Desafio proposto pelo professor Frizzarini na disciplina de algoritmos.


<h1>Super desafio - BANCO 24h </h1>

<p>Crie um programa que simule o comportamento de um “Banco 24h” com cédulas
disponíveis de 10, 50 e 100 Reais.
Primeira fase
Esta é a fase em que o funcionário do Banco 24h inicializa o sistema com a quantidade
de cédulas.</p>

<b>a)</b> Receba a quantidade de cédula de R$ 10,00
<b>b)</b> Receba a quantidade de cédula de R$ 50,00
<b>c)</b> Receba a quantidade de cédula de R$ 100,00
<b>d)</b> Tenha um botão “iniciar” que quando clicado, calcula o valor total disponível e
inicializa a segunda fase.

<h2>Segunda fase</h2>

Esta é a fase em que o usuário realiza o saque de dinheiro.<br>
<b>a)</b> O programa deve informar que as notas disponíveis são de 10, 50 e 100 Reais
<b>b)</b> Solicitar o valor que o usuário deseja sacar e ao clicar num botão “Solicitar saque”, o
programa…<br>

<b>c)</b> Primeiro válida de o valor é maior que 0 (zero). Caso não seja, exiba um alerta “Não
é possível sacar 0 ou menos”.<br>
<b>d)</b> Depois valida se o valor do saque é maior que o valor total disponível. Caso seja
exiba um alerta com “Montante disponível não atende a solicitação”.<br>
<b>e)</b> Caso o valor do saque for maior que zero e menor ou igual ao valor total disponível,
verificar se o saque é possível, considerando que só existem notas de 10, 50 e 100 na
máquina.<br> Por exemplo, não é possível sacar R$25,00, pois não temos cédulas de
R$5,00. Se não for possível, exibir um alerta “Valor não possível devido às notas
disponíveis”<br>
<b>f)</b> Caso o valor do saque seja possível, verificar se existe cédulas suficiente para
atender o saque. Considere que o programa inicia com as cédulas informadas na
primeira fase e vai reduzindo a cada saque realizado. O usuário não vê essa quantidade
de cédulas! Caso a quantidade de cédula não seja o suficiente exiba o alerta “A
quantidade e valor das cédulas disponíveis não atende o valor desejado”<br>
<b>g)</b> Caso o valor solicitado seja possível após as validações acima, exibir “Retire o
dinheiro no local indicado”. Atualize a quantidade disponível de cédulas (lembre-se
que o usuário não vê essa informação).<br>

<b>OBS. Sempre que possível utilize a menor quantidade de cédulas possível para atender
o saque do cliente.</b>
