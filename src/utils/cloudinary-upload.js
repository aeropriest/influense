const cloudinary = require('cloudinary').v2
const firebase = require('firebase')
const query = require('firebase')
const where = require('firebase')
const getDocs = require('firebase')
const collection = require('firebase')

//import { collection, query, where, getDocs } from "firebase/firestore";

//Import dependencies
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//Define the network
const network = bitcoin.networks.bitcoin //use networks.testnet for testnet

// Derivation path
const path = `m/49'/0'/0'/0` // Use m/49'/1'/0'/0 for testnet

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

  const uploadPoster = (handle, clebrity_name, image_url, tags) => {
      const foldername = tags[0] === 'celebrity' ? handle : handle + '/' + clebrity_name
      cloudinary.uploader.upload(image_url, {contet: [handle] , folder: foldername, filename_override: clebrity_name , tags : tags}, (error, result)=>{
        if( result ){
            let tags = result.tags
            if( tags[0] === 'celebrity'){
                const celerbity = {
                    name: result.original_filename,
                    handle: result.public_id.substr(0,result.public_id.search('/')),
                    created_at: result.created_at,
                    id: result.asset_id,
                    profileImg: result.secure_url, 
                    follwers: Math.floor(Math.random() * 1000),
                    wallet_addr: tags[1],
                    wallet_key: tags[2],
                    phrase: tags[3],
                }
                //console.log(celerbity)
                db.collection("influensers").add(celerbity)
                .then((docRef) => {
                    console.log("Data Successfully Submitted");
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
            }
            if( tags[0] === 'gallery'){
                console.log(result)
                const celeb = db.collection("influensers").where('handle','==',tags[1])
                celeb.get().then(snapshot=>{
                    snapshot.forEach((doc) => {
                        const new_image ={
                            created_at: result.created_at,
                            id: result.asset_id,
                            imageUrl: result.secure_url, 
                            highestBid: Math.floor(Math.random() * 1000),
                            timeLeft: Math.floor(Math.random() * 1000),
                            nft_id: '0x239ks120-opklslks'
                        }
                        db.collection("influensers").doc(doc.id).collection('gallery').add(new_image)
                        //console.log(doc.id, ' => ', doc.data());
                    });
                })                
            }
        }
        if( error ){
            console.log(error)
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

const start = '/Users/ashokjaiswal/Documents/assets/'

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

                let mnemonic = bip39.generateMnemonic()
                const seed = bip39.mnemonicToSeedSync(mnemonic)
                let root = bip32.fromSeed(seed, network)

                let account = root.derivePath(path)
                let node = account.derive(0).derive(0)

                let btcAddress = bitcoin.payments.p2pkh({
                pubkey: node.publicKey,
                network: network,
                }).address

                // console.log(`wallet_address: ${btcAddress}`)
                // console.log(`wallet_key: ${node.toWIF()}`)
                // console.log(`Mnemonic: ${mnemonic}`) 

               if( poster.name !== '.DS_Store'){                   
                    if( poster.isDirectory() ){    
                        celeb_name = poster.name            
                       console.log('name: '+poster.name)
                       let l4 = l3+poster.name+'/'
                       let images = fs.readdirSync(l4, { withFileTypes: true })
                       images.forEach(image=>{
                        if( image.name !== '.DS_Store'){
                            if( !image.isDirectory() ){
                                console.log('image: '+image.name)
                                const imageUrl = uploadPoster(handle, celeb_name, l4+image.name, ['gallery',handle, celeb_name])
                            }
                        }
                       })                       
                   }else{
                       console.log('poster:'+poster.name)  
                       var posterFile = l3+poster.name
                       console.log(`wallet_key: ${node.toWIF()}`)
                       console.log(`Mnemonic: ${mnemonic}`) 
                       //const imageUrl = uploadPoster(handle, celeb_name, posterFile, ['celebrity',`${btcAddress}`,`${node.toWIF()}`,`${mnemonic}`])
                   }
               }
           })
        }       
    }
})


//const imageUrl = uploadPoster('handle', 'celeb_name', '/Users/ashokjaiswal/Documents/assets/zendaya/zendaya.png', ['celebrity','wallet_id', 'wallet_key', 'menmic'])
//const imageUrl = uploadPoster('handle', 'celeb_name', '/Users/ashokjaiswal/Documents/assets/zendaya/zendaya.png', ['gallery','handle', 'celeb_name'])
