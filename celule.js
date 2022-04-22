class CellularAutomata{
    constructor(size, ctx){
        this.size = size;
        this.ctx = ctx;
        this.cells = [];
    }

    create(){
        for(let x=0; x<this.size; x++){
            let row = [];
            for(let y=0; y<this.size; y++){
                const alive = Math.random()<0.5;
                row.push(alive);
            }
            this.cells.push(row);
        }
    }
    next(){
        this.print();
        this.evaluate();
    }
    print(){
        this.ctx.clearRect(0, 0, this.size, this.size);
        for(let x=0; x<this.size; x++){
            for(let y=0; y<this.size; y++){
                if(this.cells[x][y])
                    this.ctx.fillStyle="black";
                else
                    this.ctx.fillStyle="white";
                this.ctx.fillRect(x, y, 4,4);
                

            }
        }
    }
    evaluate(){
        let cellsAux = new Array(400).fill("").map(()=> new Array(400).fill(false));

        for(let x=0; x<this.size; x++){
            for(let y=0; y<this.size; y++){
                let liviNeighbor = 0;

                // 1
                if(x>0 && y > 0)
                if(this.cells[x-1][y-1])
                    liviNeighbor++;
                
                // 2
                if(y>0)
                if(this.cells[x][y-1])
                    liviNeighbor++;
                
                // 3
                if(x< (this.size-1) && y>0)
                if(this.cells[x+1][y-1])
                    liviNeighbor++;
            
                 // 4
                if(x > 0)
                if(this.cells[x-1][y])
                    liviNeighbor++;
                
                // 5 
                if(x< (this.size-1))
                if(this.cells[x+1][y])
                    liviNeighbor++;

                // 6
                if(x > 0 && y< (this.size-1))
                if(this.cells[x-1][y+1])
                     liviNeighbor++;

                // 7
                if(y< (this.size -1))
                if(this.cells[x] [y +1])
                     liviNeighbor++;
                // 8
                if(x < (this.size-1) && y < (this.size-1))
                if(this.cells[x+1][y+1])
                    liviNeighbor++;

                if(this.cells[x][y])
                    cellsAux[x][y] = liviNeighbor == 2 ||
                                     liviNeighbor == 3 ? true : false;
                else
                    cellsAux[x][y] = liviNeighbor == 3 ? true : false;
            }
        }

    this.cells = cellsAux;
    }
}

const ctx = canvas.getContext('2d');
const celullarAutomata = new CellularAutomata(400, ctx);
celullarAutomata.create();
//celullarAutomata.print();
setInterval(()=>celullarAutomata.next(), 400)
