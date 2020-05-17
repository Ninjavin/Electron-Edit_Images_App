document.getElementById("openfile").addEventListener('click', () => {
    const { dialog } = require('electron').remote

    dialog.showOpenDialog({
        properties: [
            'openFile'
        ],
        filters: [{
            name: 'Images',
            extensions: [ 'png', 'jpg', 'jpeg', 'bmp', 'gif', 'tiff' ]
        }]
    }).then((res) => {

        //Image Path
        var filePath = res.filePaths[0].toString('base64');

        //Creating Image Element to display the selected Image
        var imgElement = document.createElement('img');  // Creates img tag
        var idImgElement = document.createAttribute("id");  // Creating id Attribute
        idImgElement.value = "showImage";  // Id of the Image
        var attr = document.createAttribute("src");  // Creating src Attribute
        attr.value = filePath  // src Value
        imgElement.setAttributeNode(idImgElement)  // Adding id to img tag
        imgElement.setAttributeNode(attr) // Adding src to img tag
        var element = document.getElementById("main"); 
        element.appendChild(imgElement)  // Appending img to body element



        //Edit Image Functionality
        function editHue(){
            var hue = document.getElementById("hue").value;
            Caman("#showImage", function(){
                this.hue(hue);
                this.render();
            })
        }
        document.getElementById("hue").addEventListener("change", editHue);

        function editContrast(){
            var contrast = document.getElementById("contrast").value;
            Caman("#showImage", function(){
                this.contrast(contrast);
                this.render();
            })
        }
        document.getElementById("contrast").addEventListener("change", editContrast);

        function editVibrance(){
            var vibrance = document.getElementById("vibrance").value;
            Caman("#showImage", function(){
                this.vibrance(vibrance);
                this.render();
            })
        }
        document.getElementById("vibrance").addEventListener("change", editVibrance);

        function editSepia(){
            var sepia = document.getElementById("sepia").value;
            Caman("#showImage", function(){
                this.sepia(sepia);
                this.render();
            })
        }
        document.getElementById("sepia").addEventListener("change", editSepia);

        function editSaturation(){
            var saturation = document.getElementById("saturation").value;
            Caman("#showImage", function(){
                this.saturation(saturation);
                this.render();
            })
        }
        document.getElementById("saturation").addEventListener("change", editSaturation);

        function editBrightness(){
            var brightness = document.getElementById("brightness").value;
            Caman("#showImage", function(){
                this.brightness(brightness);
                this.render();
            })
        }
        document.getElementById("brightness").addEventListener("change", editBrightness);


        document.getElementById("savebtn").addEventListener('click', function() {
            Caman("#showImage", function(){
                this.render(function(){
                    this.save('png');
                    this.toBase64();
                })
            })
        })

    })
    
})