// Usage:
//    let firstArg = 'selectedLogoFile';                  //<input type="file" id="selectedLogoFile">
//    let secondArg = 300;                                //300px
//    let thirdArg = (dataUrl)=> console.log(dataUrl);    //(dataUrl) => document.getElementById('image-output').src = dataUrl;
//
//    this.image = new imageResizer(firstArg, secondArg, thirdArg);
//
// When uploaded file:
//    var formData = new FormData();
//    formData.append('files[0]', this.image.blob);
//
//    document.getElementById('image-output').src = this.image.dataUrl;


export default 
class imageSqResizer {

constructor(imgblob, size, setDataUrlFunc) {
            let self = this;
            self._setDataUrlFunc = setDataUrlFunc;
            self._size = size;
            self._blob = null;
            self._dataUrl = null;
            self.resized(imgblob, self._size);
}

//get blob object
get blob() {return self._blob;}
//get dataUrl
get dataUrl() {return self._dataUrl;}

// resize
resized(imgblob, maxWidth) {
let setDataUrlFunc = self._setDataUrlFunc || false;
    
    let tempImg = new Image();
    tempImg.src = imgblob;

    let createCanvas = (width,height,img)=>{
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        self._dataUrl = canvas.toDataURL();
        if(setDataUrlFunc){
            setDataUrlFunc( canvas.toDataURL());
        }    
        canvas.toBlob((blob) => {
            self._blob = blob;
            
        });
    }

    tempImg.onload = () => {
        // calc size
        let tempW = tempImg.width;
        let tempH = tempImg.height;
        let min = tempW >= tempH ? tempH : tempW;
        maxWidth = maxWidth || min;
        
        if (tempH <= maxWidth && tempW <= maxWidth) {
            createCanvas(tempW,tempH,tempImg);
        }

        let startY = 0;
        if (min !== tempH) {
            startY = Math.round(tempH / 2 - (min / 2));
        }
        let startX = 0;
        if (min !== tempW) {
            startX = Math.round(tempW / 2 - (min / 2));
        }
    
        let finalImg = new Image();
        finalImg.src = this.getImagePortion(tempImg, min, min, startX, startY, 1);

        finalImg.onload = () => {
            createCanvas(maxWidth,maxWidth,finalImg);
        }
}
}
 getImagePortion(imgObj, newWidth, newHeight, startX, startY, ratio) {
    let tnCanvas = document.createElement('canvas');
    let tnCanvasContext = tnCanvas.getContext('2d');
    tnCanvas.width = newWidth; tnCanvas.height = newHeight;
    
    let bufferCanvas = document.createElement('canvas');
    let bufferContext = bufferCanvas.getContext('2d');
    bufferCanvas.width = imgObj.width;
    bufferCanvas.height = imgObj.height;
    bufferContext.drawImage(imgObj, 0, 0);
    
    tnCanvasContext.drawImage(bufferCanvas, startX, startY, newWidth * ratio, newHeight * ratio, 0, 0, newWidth, newHeight);
    return tnCanvas.toDataURL();
    }
}
 
