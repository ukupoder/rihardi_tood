function Score(score, canvas, ctx){
	
	this.score = score;
	
	this.canvas = canvas;
	this.ctx = ctx;
	
}

Score.prototype = {
	
	DrawScore: function(){

		//T�hjendame canvase
		this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height);

		// Canvasele joonistamine
		this.ctx.textAlign = 'center';
		this.ctx.font = '70px Courier';

		// 	// Joonistame s�na, mis on j�rel / tekst, x, y
		
	}
	
};