
      function initMap() {
      	// map options
      	var options = {
      		zoom: 12, 
      		center: {lat: 24.8779218, lng: 67.0631145}
      	}
       	//New Map
      var map = new google.maps.Map(document.getElementById('map'), options);


        //arrau pf markers
        var markers = [
            { 
          coords:{lat:24.8777868, lng: 67.059906},
          content: 
          `<h1> Main Branch</h1>
           <p>Z-74, D.M.C. Society, Main Tariq Road, Karachi</p>
             <ul>
             <li>(021) 3455 7771- 3, 0320 455 7771</li>
             <li>Monday to Saturday 8:00am to 9:00pm</li>
             <li>Sunday 8:00am to 2:00pm</li>
             </ul>
          `
        },
          {coords:{lat:  24.878045, lng: 67.063550},
          content: 
          `<h1> SINDLAB, HILAL-E-AHMER</h1>
           <p> Hilal-e-Ahmer House, Main Clifton Road, Karachi</p>
             <ul>
             <li> (021) 3537 3662</li>
             <li>Monday to Saturday 8:00am to 10:00pm</li>
             <li>Sunday 8:00am to 2:00pm</li>
             </ul>
          `
        },
         {coords:{lat: 24.9093302, lng: 67.0825625},
         content: `<h1> SINDLAB, GULSHAN-E-IQBAL</h1>`}

          ];

          // loop through markers
          for(var i = 0; i<markers.length; i++){
            addMarker(markers[i]);
          }

         // addMarker({
         //  coords:{lat: 24.871641, lng: 67.059906},
         //  content: '<h1> Hi</h1>'
         //  });

         // addMarker({coords:{lat: 24.8338, lng: 67.0287},
         // content: '<h1> Hi</h1>'});
         // addMarker({coords:{lat: 24.926294, lng:  67.022095},
         // content: '<h1> Hi</h1>'});

         // add marker funciton
         function addMarker(props){
      			var marker = new google.maps.Marker({
    	      	position:props.coords,
    	      	map:map,
    	       });

              //passing content
            if(props.content){
              var InfoWindow = new google.maps.InfoWindow({
                content:props.content
              });
                  // listener for maps
               marker.addListener('mouseover',()=>{
                 InfoWindow.open(map, marker);
               });

                marker.addListener('mouseout',()=>{
                 InfoWindow.close(map, marker);
                });
            }
            //end of props.conent
          }
          // end of add marker
      }
  
  