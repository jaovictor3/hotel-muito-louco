var lista_hospedes = [];
var nomedohotel = prompt("Informe o nome do hotel desejado:");
var nomeusuario = prompt("Informe seu nome:");
alert("Óla " + nomeusuario + " bem-vindo ao " + nomedohotel);


senhacorreta();

function inicio() {
    var escolha = parseInt(prompt('Selecione uma opção: \n  (1).Reserva de Quartos\n (2).Cadastro de  Hóspedes\n  (3).Controle de Hóspedes\n (4).Eventos\n (5).Buffet\n (6).Auditório\n (7).Reserva para Restaurante\n  (8).Consultar Preço de Gasolina\n (9).Manutenção  de Ar condicionado\n  (10.Sair)\n'));


    switch (escolha) {
        case 1: reserva()
            break;
        case 2: cadastrodehospede()
            break;
        case 3: controle_de_hospedes()
            break;
        case 4: eventos()
            break;
        case 5: buffet()
            break;
        case 6: auditorio()
            break;
        case 7: reserva_restaurante()
            break;
        case 8: gasolina()
            break;
        case 9: manutencao()
            break;
        case 10: exit()
        default:
            erro()
            break;
    }
}

//1
function reserva() {
    alert("Hotel " + nomedohotel + " Área para reserva de hospedagem");
    var valor_diaria = parseInt(prompt("Qual o valor padrão da diária ?"));
    var hospede;

    if (valor_diaria <= 0) {
        alert(nomeusuario + " Valor inválido");
        inicio()
    } else {
        var diarias = parseInt(prompt("Quantas diárias serão necessarias ?"));

        if (diarias <= 0 || diarias >= 30) {
            alert("Não foi possível realizar procedimento");
        } else {
            var totaldadiaria = valor_diaria * diarias;
            alert("O valor de " + diarias + " dias de hospedagem é de " + totaldadiaria);
            hospede = prompt("Qual é o nome do hospede ?");
            var sim_ou_nao = prompt(nomeusuario + " , você confirma a hospedagem para " + hospede + " por " + diarias + "  dias ? (S/N)");

        } if (sim_ou_nao == "s") {
            alert(nomeusuario + ", reserva efetuada Para " + hospede + " no valor de: " + totaldadiaria);
            inicio()
        } else {
            sim_ou_nao == "n"
            alert(nomeusuario + " , reserva não efetuada.")
            inicio()
        }

    }
}

//2
function cadastrodehospede() {

    var diaria = parseFloat(prompt("Qual o valor da diaria?"));
    var contGratuidade = 0;
    var contMeia = 0;
    var hospedagens = 0;

    do {
        var nameHospede = prompt("Qual o nome do hóspede?");
        console.log(`${nameHospede}`);

        if (nameHospede == "PARE" || nameHospede == "pare") {
            alert("Estamos calculando!.");
            alert(nomeusuario + ", o total das hospedagens é: R$" + ((hospedagens * diaria) + (contMeia * diaria / 2)) + "; " + contGratuidade + " gratuidade(s); " + contMeia + " meia(s).");
            inicio();
        }

        var idade = parseInt(prompt("Nos informe a idade do hóspede?"));

        if (idade < 0 && idade > 120) {
            alert(`${nameHospede} idade invalida!.`)
            cadastro_hospedes();
        }


        if (idade > 6 && idade < 60) {
            alert(`${nameHospede} cadastrado com sucesso!.`);
            hospedagens++;
        } else if (idade >= 0 && idade <= 6) {
            alert(`${nameHospede} cadastrado com sucesso!. Não paga, possui gratuidade`);
            contGratuidade++;
        } else if (idade >= 60 && idade < 120) {
            alert(`${nameHospede} cadastrado com sucesso!. Paga meia.`)
        }

    } while (nameHospede != "PARE" || nameHospede != "pare" || nameHospede != "Pare");
}



//3
function controle_de_hospedes() {
    alert(nomedohotel + " Área de Controle de hóspedes");
    var escolha_controle = parseInt(prompt("Selecione o serviço desejado.\n (1).Cadastrar Hóspedes\n (2).Pesquisar Hóspedes\n  (3).Sair"));
    switch (escolha_controle) {
        case 1: cadastro2()
            break;
        case 2: pesquisahospedes()
            break;
        case 3: sair()
            break;
        default:
            erro()
            break;
    }
}

function cadastro2() {
    if (lista_hospedes.length >= 15) {
        alert("Numero máximo de hóspedes cadastrados.");
    } else {
        var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');

        // O método push() permite adicionar um item ao Array/Vetor. Importante dizer que ele adiciona o elemento ao final do Array/Vetor. 
        lista_hospedes.push(nome_hospede);
        console.log(lista_hospedes); // O console é usado apenas para exibir ao desenvolvedor todo mundo que já está cadastrado.
        alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
        var escolha_controle = parseInt(prompt("Selecione o serviço desejado.\n (1).Cadastrar Hóspedes\n (2).Pesquisar Hóspedes\n  (3).Sair"));
        switch (escolha_controle) {
            case 1: cadastro2()
                break;
            case 2: pesquisahospedes()
                break;
            case 3: sair()
                break;
            default:
                erro()
                break;
        }
    }
}



function pesquisahospedes() {
    var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
    // O método includes() procura por um elemento dentro do Array e retorna verdadeiro ou falso. Caso queira comparar números, o mais indicado é o método find();
    if (lista_hospedes.includes(nome_hospede)) {
        alert(nome_hospede + ' encontrada(o).')
        var escolha_controle = parseInt(prompt("Selecione o serviço desejado.\n (1).Cadastrar Hóspedes\n (2).Pesquisar Hóspedes\n  (3).Sair"));
        switch (escolha_controle) {
            case 1: cadastro2()
                break;
            case 2: pesquisahospedes()
                break;
            case 3: sair()
                break;
            default:
                erro()
                break;
        }
    } else{
        alert(nome_hospede + ' não foi encontrada(o).')
       var escolha_controle = parseInt(prompt("Selecione o serviço desejado.\n (1).Cadastrar Hóspedes\n (2).Pesquisar Hóspedes\n  (3).Sair"));
        switch(escolha_controle) {
            case 1: cadastro2()
            break;
            case 2: pesquisahospedes()
            break;
            case 3: sair()
            break;
            default:
            erro()
            break;
        }
}
}
function sair() {
    alert("Voltando ao menu Principal");
    inicio()
}




//4
function eventos() {
    alert("Hotel " + nomedohotel + " Área para reserva de Eventos");

    var garcons = 10.50;
    var horas = prompt("Qual a Duração do evento em horas ?");
    var quant_garcons = prompt("Quantos Garçons serão necessarios ?");
    var calculo = (horas * garcons) * quant_garcons;


    alert("Custo total: " + calculo);

    var sim_ou_nao = prompt("Gostaria de efetuar a reserva ? (S/N)");

    if (sim_ou_nao == "s") {
        alert(nomeusuario + " ,reserva efetuada com sucesso.");
        inicio()
    } else {
        inicio()
    }

}


//5 
function buffet() {

    alert(nomedohotel + "Área de reserva de buffet ")
    var convidados = parseInt(prompt("Qual o número de convidados para o evento ? "));

    var consumo_agua = 0.5;
    var consumo_cafezin = 0.2;
    var consumo_salgado = 7;

    var cafezin = 0.80;
    var agua = 0.40;
    var salgados = 0.34;

    var custo_agua = convidados * consumo_agua;
    var custo_cafe = convidados * consumo_cafezin;
    var custo_salgado = convidados * consumo_salgado;

    var valorcafezin = custo_cafe * cafezin;
    var valoragua = custo_agua * agua;
    var valorsalgado = custo_salgado * salgados;

    var custofinal = valoragua + valorcafezin + valorsalgado
    if (convidados >= 360) {
        alert("Quantidade de convidados  superior à capacidade máxima.");
        inicio()
    } else {
        alert("O evento precisará de " + custo_cafe + " Litros de café, " + custo_agua + " litros de aguá, " + custo_salgado + " salgados." + " O custor total do evento será de R$ " + custofinal);
        var sim_ou_nao = prompt("Gostaria de efetuar a reserva ? (S/N)")
    } if (sim_ou_nao == "s") {
        alert(nomeusuario + ",reserva efetuada com sucesso ");
    } else {
        alert("Reserva não efetuada")
        inicio()
    }

}

//6

function auditorio() {
    var laranja = 150;
    let lugares = parseInt(prompt("Quantos lugares serão necessários?"));

    if (isNaN(lugares) || lugares == "") {
        alert("Informe um número");
        auditorio();
    } else if (lugares >= 351) {
        alert("Quantidade de convidados superior á capacidade máxima!");
        auditorio();
    } else if (lugares < 220 && lugares > 1) {
        if (lugares > 150) {
            alert("Use o auditório Laranja e (inclua mais " + (lugares - laranja) + " cadeiras)");
            inicio();
        } else {
            alert("Use o auditório laranja");
        }
    } else {
        if (lugares < 350) {
            alert("Use o auditório colorado");
            inicio();
        }
    }
}


//7
function  reserva_restaurante(){
	let dia = parseInt(prompt("Qual o dia do seu evento?"));
			let hora = parseFloat(prompt("Digite o horário do evento:"));
			let diasSemana = {
				'sabado': dia,
				'domingo': dia,
				'segunda': dia,
				'terca': dia,
				'quarta': dia,
				'quinta': dia,
				'sexta': dia
			}

			if (dia) {
				if (hora >= 7 && hora <= 15) {
					alert("Restaurante disponível!");
				} else {
					alert("Restaurante indisponivel");
					agenda();
				}
			} else if (dia) {
				if (hora >= 7 && hora <= 23) {
					alert("Restaurante disponível!");
				} else {
					alert("Restaurante indisponivel");
					agenda();
				}
			}

			let empresa = prompt("Qual o nome da empresa?");
			alert(`Restaurante reservado para ${empresa}. \n${dia} às ${hora}`);
			inicio();
}

//8
function gasolina(){
    var postos = {
        'alcool': "Álcool",
        'gasolina': "Gasolina",
        'wayne': "WayneOil",
        'stark': "StarkPetrol"
    }
    
    
    var primeiro_alcool = parseFloat(prompt(`Qual o valor do álcool no posto ${postos['wayne']}?`));
    var primeiro_gasolina = parseFloat(prompt(`Qual o valor da gasolina no posto ${postos['wayne']}`));

    var valoresWayne = {
        'alcool': primeiro_alcool * 42,
        'gasolina': primeiro_gasolina * 42,
        'total': parseInt((primeiro_alcool * 100) / primeiro_gasolina)
    }
    var wayne_porcentagem = 100 - valoresWayne['total'];

   
    var segundo_alcool = parseFloat(prompt(`Qual o valor do álcool no posto ${postos['stark']}?`));
    var segundo_gasolina = parseFloat(prompt(`Qual o valor da gasolina no posto ${postos['stark']}`));

    var valoresStark = {
        'alcool': segundo_alcool * 42,
        'gasolina': segundo_gasolina * 42,
        'total': parseInt((segundo_alcool * 100) / segundo_gasolina)
    }
    var stark_porcentagem = 100 - valoresStark['total'];

    if (wayne_porcentagem >= 30 || stark_porcentagem >= 30) {
        if (wayne_porcentagem < stark_porcentagem) {
            alert(user + ", é mais barato abastecer com alcool no posto " + postos['stark'])
            inicio();
        } else {
            alert(nomeusuario + ", é mais barato abastecer com alcool no posto " + postos['wayne']);
            inicio();
        }
    } else {
        if(valoresWayne['gasolina'] > valoresStark['gasolina']) {
            alert(nomeusuario+ ", é mais barato abastecer com gasolina no posto " + postos['stark']);
            inicio();
        } else {
            alert(nomeusuario + ", é mais barato abastecer com gasolina no posto " + postos['wayne']);
            inicio();
        }
            
    }
}

//9

function manutencao(){
    let maisBarata = "";
			let valorBarato = 0;
			
			do {
				let nomeEmpresa = prompt('Qual o nome da empresa?');
				let valorAparelho = parseFloat(prompt('Qual o valor do aparelho?'));
				let quantidadeAparelhos = parseInt(prompt('Qual a quantidade de aparelhos?'));
				let desconto = parseInt(prompt('Qual o percentual de desconto?'));
				let minimoAparelhos = parseInt(prompt('Qual o número mínimo de aparelhos para conseguir o desconto?'));
				let valorTotal = valorAparelho * quantidadeAparelhos;

				if (quantidadeAparelhos >= minimoAparelhos) {
					valorTotal = valorTotal - (valorTotal * desconto / 100);
				}
				if (maisBarata == "" && valorBarato == 0) {
					maisBarata = nomeEmpresa;
					valorBarato = valorTotal;
				} else if (valorTotal < valorBarato) {
					maisBarata = nomeEmpresa;
					valorBarato = valorTotal
				}
				alert(`O serviço de ${nomeEmpresa} custará R$ ${valorTotal}`);
				confirma = prompt(`Deseja informa novos dados, ${user}? (S/N)`);
			} while (confirma == 's' || confirma == 'S')

			alert(`O orçamento de menor valor é o ${maisBarata} com R$ ${valorBarato}`);

			inicio();		
}

function exit(){
    alert("fechando o sistema")
    window.close
}







inicio();







function senhacorreta() {
    var senha = prompt("Insira sua senha:");
    if (senha == 2678) {
        alert("Senha correta!");
        inicio();
    } else {
        alert("Senha incorreta!");
        senhacorreta();
    }


}

