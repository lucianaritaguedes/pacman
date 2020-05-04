// Luciana's update - begin

// Cria variáveis globais para armazenar dados a serem gravados em arquivo

tbGame = [];
global_email = "null";
global_game  = 0;
global_PM_x  = "";
global_PM_y  = "";
global_G1_x  = "";
global_G1_y  = "";
global_G2_x  = "";
global_G2_y  = "";
global_G3_x  = "";
global_G3_y  = "";
global_G4_x  = "";
global_G4_y  = "";


function updateVar() { 

	// tbGame = localStorage.getItem("tbGame");// Recupera os dados armazenados
    // tbGame = JSON.parse(tbGame); // Converte string para objeto JSON
    // if (tbGame == null) // Caso não haja conteúdo, inicia um vetor vazio
    //	tbGame = [];

	var agora = new Date(); 
	var game_obj = JSON.stringify({
		game_email  : global_email,
		game_num    : global_game.toString(),
		game_ts     : agora.getTime().toString(),
		game_date   : agora.toLocaleDateString(),
		game_time   : agora.toLocaleTimeString(),
		game_time_ms: agora.getMilliseconds().toString(),
		game_PM_x   : global_PM_x.toString(),
		game_PM_y   : global_PM_y.toString(),
		game_G1_x 	: global_G1_x.toString(),
		game_G1_y   : global_G1_y.toString(),
		game_G2_x 	: global_G2_x.toString(),
		game_G2_y   : global_G2_y.toString(),
		game_G3_x 	: global_G3_x.toString(),
		game_G3_y   : global_G3_y.toString(),
		game_G4_x 	: global_G4_x.toString(),
		game_G4_y   : global_G4_y.toString()  
	});
	tbGame.push(game_obj);
	//localStorage.setItem("tbGame", JSON.stringify(tbGame));
	
	// console.log("getTime()="+agora.getTime().toString());
	// console.log("game_obj="+game_obj);
	// console.log("tbGame="+tbGame);

}

function createFile() { 

	//	let texto = document.getElementById("texto").value;
	//	let titulo = document.getElementById("titulo").value;
	let blob = new Blob([tbGame], { type: "text/plain;charset=utf-8" });
	saveAs(blob, "teste.txt");
	console.log("Arquivo de teste salvo!");

}

// Luciana's update - end
