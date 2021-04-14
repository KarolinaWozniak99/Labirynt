
let xmlText = '<maze><row><cell type="empty" walls="1011" /><cell type="empty" walls="1000" /><cell type="empty" walls="1020" /><cell type="empty" walls="0110" /><cell type="empty" walls="1101" /></row><row><cell type="empty" walls="1101" /><cell type="empty" walls="0101" /><cell type="empty" walls="2011" /><cell type="empty" walls="1010" /><cell type="empty" walls="0100" /></row><row><cell type="special" walls="0201" /><cell type="empty" walls="0012" /><cell type="special" walls="1010" /><cell type="special" walls="1000" /><cell type="empty" walls="0100" /></row><row><cell type="empty" walls="0001" /><cell type="empty" walls="1110" /><cell type="empty" walls="1011" /><cell type="empty" walls="0100" /><cell type="special" walls="0101" /></row><row><cell type="empty" walls="0001" /><cell type="empty" walls="1010" /><cell type="empty" walls="1010" /><cell type="empty" walls="0210" /><cell type="empty" walls="0112" /></row></maze>';

let parser = new DOMParser();
let doc = parser.parseFromString(xmlText,"text/xml");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let pozX = 50;
let pozY = 50;
rectSize=50;


for(var j=0; j<5; j++){

    for(var i=0; i<5; i++){

        let atrType = doc.getElementsByTagName("row")[j].childNodes[i].getAttribute("type");

        let atrWalls = doc.getElementsByTagName("row")[j].childNodes[i].getAttribute("walls");
        console.log(atrType, atrWalls)

        if(atrType==='special'){
            ctx.fillStyle = 'green';
        }
        else if(atrType==='empty'){
            ctx.fillStyle = 'grey'
        }

        npozX = pozX+25;
        npozY = pozY+25;
        for(var k=0;k<4;k++){
            
            if(atrWalls[0]==='0'){
                ctx.beginPath();
                ctx.strokeStyle = "black"
                ctx.lineWidth = 8;
                ctx.moveTo(npozX,npozY);
                ctx.lineTo(npozX,npozY-40);
                ctx.stroke();
            }
            else if(atrWalls[1]==='0'){
                ctx.beginPath();
                ctx.strokeStyle = "black"
                ctx.lineWidth = 8;
                ctx.moveTo(npozX,npozY);
                ctx.lineTo(npozX+40,npozY);
                ctx.stroke();
            }
            else if(atrWalls[2]==='0'){
                ctx.beginPath();
                ctx.strokeStyle = "black"
                ctx.lineWidth = 8;
                ctx.moveTo(npozX,npozY);
                ctx.lineTo(npozX,npozY+40);
                ctx.stroke();
            }
            else if(atrWalls[3]==='0'){
                ctx.beginPath();
                ctx.strokeStyle = "black"
                ctx.lineWidth = 8;
                ctx.moveTo(npozX,npozY);
                ctx.lineTo(npozX-40,npozY);
                ctx.stroke();
            }


            /*Przejscia sepcjalne*/
            if(atrWalls[0]==='2'){
                ctx.beginPath();
                ctx.strokeStyle = "blue"
                ctx.lineWidth = 16;
                ctx.moveTo(npozX,npozY);
                ctx.lineTo(npozX,npozY-40);
                ctx.stroke();
            }
            else if(atrWalls[1]==='2'){
                ctx.beginPath();
                ctx.strokeStyle = "blue"
                ctx.lineWidth = 16;
                ctx.moveTo(npozX,npozY);
                ctx.lineTo(npozX+40,npozY);
                ctx.stroke();
            }
            else if(atrWalls[2]==='2'){
                ctx.beginPath();
                ctx.strokeStyle = "blue"
                ctx.lineWidth = 16;
                ctx.moveTo(npozX,npozY);
                ctx.lineTo(npozX,npozY+40);
                ctx.stroke();
            }
            else if(atrWalls[3]==='2'){
                ctx.beginPath();
                ctx.strokeStyle = "blue"
                ctx.lineWidth = 16;
                ctx.moveTo(npozX,npozY);
                ctx.lineTo(npozX-40,npozY);
                ctx.stroke();
            }

        }
        
        ctx.fillRect(pozX,pozY,rectSize,rectSize)
        pozX+=65;
    }
    pozX=50;
    pozY+=65;
}






