export class Ball{
    constructor(x,y,radius,speed){
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.vx = speed;
        this.vy = speed;
    }

    draw(ctx, stageWidth, stageHeight, block){
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth,stageHeight);
        this.bounceBlock(block);

        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    bounceWindow(stageWidth,stageHeight){
        // 공이 갈 수 있는 화면의 상하좌우 범위
        const minX = this.radius;
        const minY = this.radius;
        const maxX = stageWidth - this.radius;
        const maxY = stageHeight - this.radius;
        
        if(this.x <= minX || this.x >= maxX){
            this.vx *= -1;
            this.x += this.vx;
        }else if(this.y <= minY || this.y >= maxY){
            this.vy *= -1;
            this.y += this.vy;
        }
    }

    bounceBlock(block){
        const minX = block.x - this.radius; // 왼쪽에서 공
        const minY = block.y - this.radius; // 위쪽에서 공
        const maxX = block.maxX + this.radius; // 오른쪽에서 공
        const maxY = block.maxY + this.radius; // 아래쪽에서 공

        if(this.x > minX && this.x < maxX && this.y > minY && this.y < maxY){
            const x1 = Math.abs(minX - this.x); // 왼쪽공일떄 거리
            const x2 = Math.abs(this.x - maxX); // 오른쪽공일때 거리
            const y1 = Math.abs(minY - this.y); // 위쪽공일때 거리
            const y2 = Math.abs(this.y - maxY); // 아래공일때 거리

            const min1 = Math.min(x1,x2);
            const min2 = Math.min(y1,y2);
            // const min = Math.min(min1,min2);

            // if(min == min1){
            //     this.vx *= -1;
            //     this.x += this.vx;
            // }
            // else if(min == min2){
            //     this.vy *= -1;
            //     this.y += this.vy;
            // }
            if(min1 > min2){
                this.vy *= -1;
                this.y += this.vy;
            }
            else if(min1 < min2){
                this.vx *= -1;
                this.x += this.vx;
            }

        }
    }
}