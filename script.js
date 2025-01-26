let game = document.querySelector('.game');

const positions = {
	roubar: `<div class="text"><h1>Edna</h1>
        <p>Contornou o salão das máquinas, pegou o corredor e subiu os degraus da escadinha que dá pro mezanino onde está a sala da supervisora. Pelo vidro viu as cápsulas de café em cores metálicas e convidativas.</p>
        <p>Ao colocar a mão na maçaneta da porta, ouviu o apito do portão da garagem da fábrica abrindo.</p>
        <p>O coração não saiu pela boca porque ela tapou com uma das mãos.</p>
        <br><p>Pensou:</p>
        <h3>"Putz! A supervisora deve estar chegando agora. Vou ter que..."</h3></div>
        <div class="choices">
        <button class="choice">IR LÁ ATRÁS DA FÁBRICA E CONFERIR SE É ELA MESMO</button>
        <button class="choice">PEGAR O CAFÉ HORROROSO DA GARRAFA TÉRMICA DA COPA</button></div>`,
	cagada: `<div class="text"><h1>Edna</h1><p>Contornou o salão das máquinas e atravessou o corredor que dava para área das salas de reunião e dos escritório do administrativo. Tudo apagado.</p>
        <p>Abriu a porta e sentiu aquele odor primaveril do banheiro do administrativo encher os seus pulmões.</p>
        <p>Ouviu o apito do portão da garagem da fábrica abrindo.</p>
        <p>O coração não saiu pela boca porque ela tapou com uma das mãos.</p>
        <br><p>Pensou:</p>
        <h3>"Putz! A supervisora deve estar chegando agora. Vou ter que..."</h3></div>
        <div class="choices">
        <button class="choice">IR LÁ ATRÁS DA FÁBRICA E CONFERIR SE É ELA MESMO</button>
        <button class="choice">PEGAR O CAFÉ HORROROSO DA GARRAFA TÉRMICA DA COPA</button></div>`,
	confere: `<div class="text"><h1>Edna</h1><p>Ao chegar no final do corredor por onde veio, viu que o barulho era de um caminhão chegando. Suspirou aliviada.</p><p>Alguns homens estavam descarregando caixas e mais caixas de papelão, do tipo de guardar arquivo, como as que tinham no administrativo.</p>
        <p>Se aproximou de uma das caixas e leu na tampa: "PARA TINGIR. COR: AMARELA"</p><br><p>Pensou:</p><h3>"Não parecem as caixas das resmas que usamos. Quer saber..."</h3></div>
        <div class="choices"><button class="choice">ISSO NÃO É DA MINHA CONTA! VOU É VOLTAR PRA MINHA ESTAÇÃO DE TRABALHO</button>
        <button class="choice">OLHAR NÃO ARRANCA PEDAÇO! QUERO SABER O QUE TEM DENTRO</button></div>`,
	estacao: `<div class="text"><h1>Edna</h1><p>Voltou para a sua estação de trabalho.</p>
        <p>Olhou para o pequeno calendário - um ímã de drogaria preso na máquina perfuradora -, e se deu conta de que era sábado.</p>
        <br><p>Pensou:</p>
        <h3>"Ah, cara, pobre só se fode mesmo. Vou é..."</h3></div><div class="choices">
        <button class="choice">VOLTAR PRA CASA</button>
        <button class="choice">OLHAR O QUE TEM DENTRO DAQUELAS CAIXAS SUSPEITAS LÁ ATRÁS</button></div>`,
	olhar: `<div class="text"><h1>Edna</h1><p>Se agachou ao lado da caixa mais próxima. A caixa estava cheia de folhas de papel presas com clips de metal meio enferrujados. Pegou uma das folhas que estavam por cima. Leu uma vez. Leu duas vezes. Leu de novo.</p>
        <p>Não acreditou: era um obituário.</p>
        <p>Olhou as folhas de baixo e eram todas obituários de pessoas sem nome, mas de diversas idades. Abriu outra caixa em que estava escrito na tampa: "PARA TINGIR. COR: ROSA"</p>
        <p>Dentro era a mesma coisa. A fábrica estava usando obituários de indigentes como matéria prima para fazer confetes de carnaval.</p>
        <br><p>Pensou:</p>
        <h3>"Mas que tremenda..."</h3></div><div class="choices">
        <button class="choice">POESIA</button>
        <button class="choice">PUTARIA</button></div>`,
	casa: `<div class="text"><h1>Edna passou um bom tempo pensando nisso. Deveria fazer algo a respeito?</h1></div>`,
};

function updateChoices() {
	let choices = document.querySelectorAll('.choice');
	choices.forEach((choice) => {
		choice.addEventListener('click', () => {
			const text = choice.innerText.toUpperCase();
			if (text.includes('ROUBAR UMA CÁPSULA')) {
				game.innerHTML = positions.roubar;
			} else if (text.includes('DAR UMA CAGADINHA')) {
				game.innerHTML = positions.cagada;
			} else if (
				text.includes('IR LÁ ATRÁS') ||
				text.includes('PEGAR O CAFÉ')
			) {
				game.innerHTML = positions.confere;
			} else if (text.includes('ISSO NÃO É DA MINHA CONTA')) {
				game.innerHTML = positions.estacao;
			} else if (
				text.includes('OLHAR NÃO ARRANCA PEDAÇO') ||
				text.includes('OLHAR O QUE TEM')
			) {
				game.innerHTML = positions.olhar;
			} else if (text.includes('VOLTAR PRA CASA')) {
				game.innerHTML = positions.casa;
			}
			updateChoices();
		});
	});
}

updateChoices();
