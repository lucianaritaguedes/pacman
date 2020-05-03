// Luciana's update - begin

// Cria variáveis globais para armazenar dados a serem gravados em arquivo

tbGame = [];
global_email  = "null";   	
global_game   = 0;			
global_level  = 0;			
global_score  = 0;			
global_lifes  = 0;			
global_PM_dir = 0;			
global_PM_x   = "";			
global_PM_y   = "";
global_G1_x   = "";			
global_G1_y   = "";			
global_G2_x   = "";			
global_G2_y   = "";			
global_G3_x   = "";			
global_G3_y   = "";			
global_G4_x   = "";			
global_G4_y   = "";			

function updateVar() { 

	var agora = new Date(); 
	var game_obj =  '"'+ 
		global_email + '","' +						// endereço de e-mail do jogador
		global_game.toString() + '","' +			// número da partida
		agora.getTime().toString() + '","' +		// timeStamping em milissegundos (desde 01/01/1970)
		agora.toLocaleDateString() + '","' +		// data no formato dd/mm/aaaa
		agora.toLocaleTimeString() + '.' +			// hora no formato hh:mm:ss seguida de um ponto
		agora.getMilliseconds().toString() + '","' +// milissegundos que complementam a hora anterior 
		global_level.toString() + '","' +			// nível alcançado pelo jogador
		global_score.toString() + '","' +			// número de pontos obtidos
		global_lifes.toString() + '","' +			// número de vidas restantes
		global_PM_dir.toString() + '","' +			// direção do PacMan = 1=direita, 2=baixo, 3=esquerda, 4=cima
		global_PM_x.toString() + '","' +			// postição X do PacMan
		global_PM_y.toString() + '","' +			// postição Y do PacMan
		global_G1_x.toString() + '","' +			// postição X do Ghost1 = Blinky = vermelho
		global_G1_y.toString() + '","' +			// postição Y do Ghost1 = Blinky = vermelho
		global_G2_x.toString() + '","' +			// postição X do Ghost2 = Pinky = rosa
		global_G2_y.toString() + '","' +			// postição Y do Ghost2 = Pinky = rosa
		global_G3_x.toString() + '","' +			// postição X do Ghost3 = Inky = azul
		global_G3_y.toString() + '","' +			// postição Y do Ghost3 = Inky = azul
		global_G4_x.toString() + '","' +			// postição X do Ghost4 = Clyde = laranja
		global_G4_y.toString() + '"\n' 				// postição Y do Ghost4 = Clyde = laranja seguida de salto de linha
	;
	tbGame+=game_obj;
	
	console.log("updateVar - game_obj = "+game_obj);
	//console.log("tbGame="+tbGame);

}

function createFile() { 

	let blob = new Blob([tbGame], { type: "text/plain;charset=utf-8" });
	saveAs(blob, "teste.csv");

}

// Luciana's update - end
