const cloudinary = require('cloudinary').v2
const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyDSq9FRd-3yXhB8fTU95LDQoHWe4VEGKDA",
    authDomain: "influense-64aa7.firebaseapp.com",
    projectId: "influense-64aa7",
    storageBucket: "influense-64aa7.appspot.com",
    messagingSenderId: "393496835159",
    appId: "1:393496835159:web:65c65906c56d98ac809f12",
    measurementId: "G-5HBPWY0Q5M"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

  
const fs = require('fs');

const CLOUDINARY_URL = 'cloudinary://819288477884652:GQP_6jndJJQ0-QPgH_dMzQwXDig@ddyxd84wz'
  const CLOUDINARY_API_KEY ='819288477884652'
  const CLOUDINARY_API_SECRET ='GQP_6jndJJQ0-QPgH_dMzQwXDig'
  const CLOUDINARY_NAME = 'ddyxd84wz'

  cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
      api_key: CLOUDINARY_API_KEY, 
      api_secret: CLOUDINARY_API_SECRET,
      secure: true
  })
/*
db.collection("data").get().then((querySnapshot) => {
			
			// Loop through the data and store
			// it in array to display
			querySnapshot.forEach(element => {
				var data = element.data();
				setInfo(arr => [...arr , data]);
				console.log(data)
			});
		})*/
  const uploadPoster = (handle, clebrity_name, image_url) => {
    cloudinary.uploader.upload(image_url, {contet: [handle] ,folder: handle, filename_override: clebrity_name}, (error, result)=>{
        if( result ){
            console.log(result)
            // public_id: 'arianagrande/s9axeph8xqccwjrn51cl',
            const celerbity = {
                name: result.original_filename,
                handle: result.public_id.substr(0,result.public_id.search('/')),
                created_at: result.created_at,
                id: result.asset_id,
                profileImg: result.secure_url, 
                follwers: Math.floor(Math.random() * 1000)
            }
            console.log(celerbity)
            db.collection("influensers").add(celerbity)
            .then((docRef) => {
                console.log("Data Successfully Submitted");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
        if( error ){
            console.log('error')
        }        
        return result
    })
  }

//const imageUrl = uploadPoster('/Users/homi/Downloads/2.png')
//var jsonParsedArray = JSON.parse(imageUrl);
//console.log(jsonParsedArray)
// for (key in jsonParsedArray) {
//   if (jsonParsedArray.hasOwnProperty(key)) {
//       console.log("%c "+key + " = " + jsonParsedArray[key],"color:cyan");
//   }
//}
//console.log(imageUrl)

const start = '/Users/homi/Development/influense/src/assets/test/'

let l1 = fs.readdirSync(start, { withFileTypes: true })
l1.forEach(l2=>{
    let celeb_name  = ''
    let l3 = start
    if( l2.name !== '.DS_Store'){
        console.log('\n\n')
       if( l2.isDirectory() ){
           let handle = l2.name
           console.log('handle: '+l2.name)
           l3 += (l2.name+'/')
           let posters = fs.readdirSync(l3, { withFileTypes: true })
           posters.forEach(poster=>{
               if( poster.name !== '.DS_Store'){                   
                    if( poster.isDirectory() ){    
                        celeb_name =        poster.name            
                       console.log('name: '+poster.name)
                       let l4 = l3+poster.name+'/'
/*
                       let images = fs.readdirSync(l4, { withFileTypes: true })
                       images.forEach(image=>{
                        if( image.name !== '.DS_Store'){
                            if( !image.isDirectory() ){
                                console.log('image: '+image.name)
                            }
                        }
                       })
                       */
                   }else{
                       console.log('poster:'+poster.name)  
                       var posterFile = l3+poster.name
                       const imageUrl = uploadPoster(handle, celeb_name, posterFile)
                   }
               }
           })
        }       
    }
})


