export class Block{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;  // 오른쪽 x
        this.maxY = height + y;  // 아래 y
    }

    draw(ctx){
        const xGap = 80;
        const yGap = 60;
        ctx.beginPath();
        ctx.fillStyle = '#ff384e';
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fill(); // fill 메소드는 열린 도형을 자동으로 닫아 closePath 메소드를 호출하지 않아도 된다. stroke는 해당하지않음.

        ctx.beginPath();
        ctx.fillStyle = '#190f3a';
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x,this.maxY);
        ctx.fill(); // lineTo로 그려진 도형을 닫고 색칠한다.

        ctx.beginPath();
        //ctx.fillStyle = "#9d0919";
        ctx.fillStyle = "#000000";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x,this.maxY);
        ctx.lineTo(this.x-xGap,this.maxY + yGap);
        ctx.lineTo(this.x - xGap,this.maxY + yGap - this.height);
        ctx.fill();
        ctx.closePath();
    }
}