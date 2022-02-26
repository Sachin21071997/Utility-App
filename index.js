const readLineSync=require('readline-sync');
const crypto = require('crypto');
const encode_Url = function(UrlToEncode){
  console.log(encodeURIComponent(UrlToEncode));
}
const decode_Url = function(UrlToDecode){
  console.log(decodeURIComponent(UrlToDecode)); 
}
const encode_base64 = function(Base64Encode){
  console.log(Buffer.from(Base64Encode).toString('base64'));
}
const decode_base64 = function(Base64Decode){
  console.log(Buffer.from(Base64Decode,'base64').toString('ascii'));
}
const string_hashing = function(string_to_hash,algorithm){
  console.log(crypto.createHash(algorithm).update(string_to_hash).digest('hex'));
}
function convert_to_epoch(year,month,date,hours,minutes,seconds){
  const epoch = new Date(year, month, date, hours, minutes, seconds, 0).getTime(); 
  console.log(epoch);
}
function convert_to_human_date(epoch){
  epoch = parseInt(epoch);
  let dataObject = {year:0,month:0,date:0,hours:0,minutes:0,seconds:0};
  let d = new Date(epoch);
  dataObject.year= d.getFullYear(); dataObject.month= d.getMonth()+1; dataObject.date = d.getDate(); dataObject.hours = d.getHours(); dataObject.minutes=d.getMinutes(); dataObject.seconds= d.getSeconds();
  return dataObject;
}
function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function rgbToHex(red, green, blue) {
  red = parseInt(red);
  green = parseInt(green);
  blue = parseInt(blue);
  const output_in_hex = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
  console.log(output_in_hex);
}
function HexTorgb(HexToConvert){
  let RGBcomponent = { red:"",blue:"",green:""};
  RGBcomponent.red = parseInt(HexToConvert[1]+HexToConvert[2],16);
  RGBcomponent.blue= parseInt(HexToConvert[3]+HexToConvert[4],16);
  RGBcomponent.green = parseInt(HexToConvert[5]+HexToConvert[6],16);
  console.log(RGBcomponent);
}
const cmTometres = cm =>console.log(cm/100); 
const metresTocm = m =>console.log(m*100);
const FahToCels = c=>console.log(1.8*c + 32);
const CelsToFah = f =>console.log((f-32)*0.56);
const binTodec = bin=>console.log(parseInt(bin,2).toString(10));
const binTooct = bin=>console.log(parseInt(bin,2).toString(8));
const binTohex = bin=>console.log(parseInt(bin,2).toString(16));
const decTobin = dec=>console.log(parseInt(dec,10).toString(2));
const decTooct = dec=>console.log(parseInt(dec,10).toString(8));
const decTohex = dec=>console.log(parseInt(dec,10).toString(16));
const hexTobin = hex=>console.log(parseInt(hex,16).toString(2));
const hexTooct = hex=>console.log(parseInt(hex,16).toString(8));
const hexTodec = hex=>console.log(parseInt(hex,16).toString(10));
const octTobin = oct=>console.log(parseInt(oct,8).toString(2));
const octTodec = oct=>console.log(parseInt(oct,8).toString(10));
const octTohex = oct=>console.log(parseInt(oct,8).toString(16));
function thankYou() {
  console.log("Thanks for utilising the App. Hope you liked it.");
}
function driver_function(userInput,wishTocompute){
  switch(parseInt(userInput,10)){
    case 1:
      console.log(`You selected ${userInput}`);
      const url_encode = readLineSync.question(`Enter the URL to encode:\n`)
      encode_Url(url_encode); 
      break;
    case 2:
      console.log(`You selected ${userInput}`);
      const url_decode = readLineSync.question(`Enter the URL to decode:\n`);
      decode_Url(url_decode);
      break;
    case 3:
      console.log(`You selected ${userInput}`);
      const base64_encode = readLineSync.question(`Enter the String to encode:\n`)
      encode_base64(base64_encode);
      break;
    case 4:
      console.log(`You selected ${userInput}`);
      const base64_decode = readLineSync.question(`Enter the String to decode:\n`);
      decode_base64(base64_decode); 
      break;
    case 5:
      console.log(`You selected ${userInput}`);
      const algoInput = readLineSync.question(`Welcome to the String Hasher.\nPlease select the name of the Algorithm to used for Hashing\nPossible Hashing schemes are:\n1. md5\n2. sha1\n3. sha256\n4. sha512\n`);
      if(algoInput ==="md5"|| algoInput==="sha1" || algoInput==="sha256" || algoInput==="sha512"){
        const userInput = readLineSync.question(`Please enter the String required to hash:\n`);
        string_hashing(userInput,algoInput);
      }
      else{
        console.log("Incorrect Input, Please try again");
      }
      break;
    case 6:
        console.log(`You selected ${userInput}`);
        const epoch = readLineSync.question(`Please enter the value of the epoch to be converted to human date:\n`);
        console.log(convert_to_human_date(epoch));
        break;
    case 7:
      console.log(`You selected ${userInput}`);
      const year = readLineSync.question(`Please enter the value of the year for epoch calculation:\n`);
      const month = readLineSync.question(`Please enter the value of the month for epoch calculation:\n`);
      const date = readLineSync.question(`Please enter the value of the date for epoch calculation:\n`);
      const hours = readLineSync.question(`Please enter the value of the hours for epoch calculation:\n`);
      const minutes = readLineSync.question(`Please enter the value of the minutes for epoch calculation:\n`);
      const seconds = readLineSync.question(`Please enter the value of the seconds for epoch calculation:\n`);
      convert_to_epoch(year,month,date,hours,minutes,seconds);
      break;
    case 8:
      console.log(`You selected ${userInput}`);
      const bd_conversionInput = readLineSync.question(`Which conversion would you like to do:\na) Binary to Decimal\nb) Decimal to Binary\n`);
      if(bd_conversionInput==="a"){
        const userInput = readLineSync.question(`Please enter the Binary Number to be converted to decimal:\n`);
        binTodec(userInput);
      }
      else if(bd_conversionInput==="b"){
        const userInput = readLineSync.question(`Please enter the Decimal Number to be converted to Binary:\n`);
        decTobin(userInput);
      }
      else{
        console.log("Incorrect Input, Please try again");
      }
      break;
    case 9:
      console.log(`You selected ${userInput}`);
      const bo_conversionInput = readLineSync.question(`Which conversion would you like to do:\na) Binary to Octal\nb) Octal to Binary\n`);
      if(bo_conversionInput==="a"){
        const userInput = readLineSync.question(`Please enter the Binary Number to be converted to Octal:\n`);
        binTooct(userInput);
      }
      else if(bo_conversionInput==="b"){
        const userInput = readLineSync.question(`Please enter the Octal Number to be converted to Binary:\n`);
        octTobin(userInput);
      }
      else{
        console.log("Incorrect Input, Please try again");
      }
      break;
    case 10:
      console.log(`You selected ${userInput}`);
      const bh_conversionInput = readLineSync.question(`Which conversion would you like to do:\na) Binary to Hexadecimal\nb) Hexadecimal to Binary\n`);
      if(bh_conversionInput==="a"){
        const userInput = readLineSync.question(`Please enter the Binary Number to be converted to Hexadecimal:\n`);
        binTohex(userInput);
      }
      else if(bh_conversionInput==="b"){
        const userInput = readLineSync.question(`Please enter the Hexadecimal Number to be converted to Binary:\n`);
        hexTobin(userInput);
      }
      else{
        console.log("Incorrect Input, Please try again");
      }
      break;
          
    case 11:
      console.log(`You selected ${userInput}`);
      const do_conversionInput = readLineSync.question(`Which conversion would you like to do:\na) Decimal to Octal\nb) Octal to Decimal\n`);
      if(do_conversionInput==="a"){
        const userInput = readLineSync.question(`Please enter the Decimal Number to be converted to Octal:\n`);
        decTooct(userInput);
      }
      else if(do_conversionInput==="b"){
        const userInput = readLineSync.question(`Please enter the Octal Number to be converted to Decimal:\n`);
        octTodec(userInput);
      }
      else{
        console.log("Incorrect Input, Please try again");
      }
      break;
    case 12:
      console.log(`You selected ${userInput}`);
      const dh_conversionInput = readLineSync.question(`Which conversion would you like to do:\na) Decimal to Hexadecimal\nb) Hexadecimal to Decimal\n`);
      if(dh_conversionInput==="a"){
        const userInput = readLineSync.question(`Please enter the Decimal Number to be converted to Hexadecimal:\n`);
        decTohex(userInput);
      }
      else if(dh_conversionInput==="b"){
        const userInput = readLineSync.question(`Please enter the Hexadecimal Number to be converted to Decimal:\n`);
        hexTodec(userInput);
      }
      else{
        console.log("Incorrect Input, Please try again");
      }
      break;
    case 13:
      console.log(`You selected ${userInput}`);
      const oh_conversionInput = readLineSync.question(`Which conversion would you like to do:\na) Octal to Hexadecimal\nb) Hexadecimal to Octal\n`);
      if(oh_conversionInput=="a"){
        const userInput = readLineSync.question(`Please enter the Octal Number to be converted to Hexadecimal:\n`);
        octTohex(userInput);
      }
      else if(oh_conversionInput==="b"){
        const userInput = readLineSync.question(`Please enter the Hexadecimal Number to be converted to Octal:\n`);
        hexTooct(userInput);
      }
      else{
        console.log("Incorrect Input, Please try again");
      }
      break;
    case 14:
      console.log(`You selected ${userInput}`);
      const RGB_hexinput = readLineSync.question(`Which conversion would you like to do:\na) RGB to Hexadecimal\nb) Hexadecimal to RGB\n`);
      if(RGB_hexinput==="a"){
        const RedColorInput = readLineSync.question(`Please enter the value of the Red color:\n`);
        const GreenColorInput = readLineSync.question(`Please enter the value of the Green color:\n`);
        const BlueColorInput = readLineSync.question(`Please enter the value of the Blue color:\n`);
        rgbToHex(RedColorInput,GreenColorInput,BlueColorInput);
      }
      else if(RGB_hexinput==="b"){
        const HexInput = readLineSync.question(`Please enter the Hexadecimal value to be converted to RGB:\n`);
        HexTorgb(HexInput);
      }
      else{
        console.log("Incorrect Input, Please try again");
      }
      break;
    case 15:
      console.log(`You selected ${userInput}`);
      const unitInput = readLineSync.question(`Which conversion would you like to do:\na) cm to metres\nb) metres to cm\nc) Celsius to Fahrenheit\nd) Fahrenheit to Celsius\n`);
      if(unitInput==="a"){
        const userInput = readLineSync.question(`Please enter the value in cm's to be converted to metres:\n`);
        cmTometres(userInput);
      }
      else if(cunitInput==="b"){
        const userInput = readLineSync.question(`Please enter the value in metres to be converted to cm's:\n`);
        metresTocm(userInput);
      }
      else if(unitInput==="c"){
        const userInput = readLineSync.question(`Please enter the value in Celsius to be converted to Fahrenheit:\n`);
        console.log(FahToCels(userInput));
      }
      else if(unitInput==="d"){
        const userInput = readLineSync.question(`Please enter the value in Fahrenheit to be converted to Celsius:\n`);
        console.log(CelsToFah(userInput));
      }
      else{
        console.log("Incorrect Input, Please try again");
      }
      break;
    default:
      console.log("Incorrect Input, Please try again");
          
  }    
}
function utility_Converter(wishTocompute){
  let userInput = readLineSync.question(`Welcome to the Utility App. Which utility function would you like to use\n1. Url Encoder\n2. Url Decoder\n3. Base64 Encoder\n4. Base64 Decoder\n5. String Hashing\n6. Epoch to Human Date Converter\n7. Human Date to Epoch Converter\n8. Binary/Decimal Converter\n9. Binary/Octal Converter\n10.Binary/Hexadecimal Converter\n11.Decimal/Octal Converter\n12.Decimal/Hexadecimal Converter\n13.Octal/Hexadecimal Converter\n14.RGB/Hex Converter\n15.Unit Converters\n`);
  while(wishTocompute.toUpperCase()==="YES"){
    driver_function(userInput,wishTocompute);
    wishTocompute = readLineSync.question(`Do you wish to compute again yes/no\n`);
    if(wishTocompute.toUpperCase()==="YES"){
      userInput = readLineSync.question(`Welcome to the Utility App. Which utility function would you like to use\n1. Url Encoder\n2. Url Decoder\n3. Base64 Encoder\n4. Base64 Decoder\n5. String Hashing\n6. Epoch to Human Date Converter\n7. Human Date to Epoch Converter\n8. Binary/Decimal Converter\n9. Binary/Octal Converter\n10.Binary/Hexadecimal Converter\n11.Decimal/Octal Converter\n12.Decimal/Hexadecimal Converter\n13.Octal/Hexadecimal Converter\n14.RGB/Hex Converter\n15.Unit Converters\n`); 
    }
    
  }
  thankYou();
}
let wishTocompute = "yes";
utility_Converter(wishTocompute);

     
      
      






