const fs = require('fs');

// ############################ DATA GENERATION ####################################################################################################################################################################################################
// ############################ DATA GENERATION ####################################################################################################################################################################################################
// ############################ DATA GENERATION ####################################################################################################################################################################################################
// ############################ DATA GENERATION ####################################################################################################################################################################################################

var customer_firstname = ["Pierre","Philippe","Alain","Nathalie","Monique","Sylvie","Françoise","Christophe","Jacques","Martine","Laurent","Frédéric","Stéphane","Sébastien","Julien","Pascal","Thierry","François","Olivier","René","Sandrine","Véronique","Céline","Jeanne","Dominique","Didier","Marc","Guillaume","Georges","Serge","Aurélie","Antoine","Yves","Virginie","Henri","Corinne","Romain","Yvette","Franck","Maxime","Élodie","Gilles","Christelle","Colette","Claudine","Cécile","Paulette","Suzanne","Geneviève","Josette","Claire","Andrée","Nadine","Mathieu","Bernadette","Renée","Thérèse","Delphine","Patrice","Fabrice","Hervé","Arnaud","Sylvain","Odette","Josiane","Lucie","Mireille","Damien","Yvonne","Marine","Gisèle","Benoît","Manon","Marcelle","Carole","Fabienne","Marguerite","Pascale","Fabien","Éliane","Mathilde","Séverine","Raymonde","Micheline","Joëlle","Loïc","Adrien","Angélique","Lucien","Odile","Maël","Baptiste","Alexis"];
var customer_lastname = ["Martin","Bernard","Thomas","Petit","Robert","Richard","Durand","Dubois","Moreau","Laurent","Simon","Michel","Lefebvre","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Dupont","Lambert","Fontaine","Rousseau","Vincent","Muller","Lefevre","Faure","Andre","Mercier","Blanc","Guerin","Boyer","Garnier","Chevalier","Francois","Legrand","Gauthier","Garcia","Perrin","Robin","Clement","Morin","Nicolas","Henry","Roussel","Mathieu","Gautier","Masson"];
var customer_mail = ["mael.leboite@sap.com"];
var hotel_hotelName = ["Jade Mountain","Mandarin Oriental","Hospitable","Cape Grace","Coast","The Sebastian","Alaska Island","Southern Hospitality","Candlewood","Eagles Watch","Blooming Bed And Breakfast","Hilltop Heaven","The River Front","The Nines","American Inn","Ballyfin","Pearl", "Hotel Indigo","Fortune House","Blossomwell","Bluebird","Walkabout Beach","Leamington","Shilo Inns Rose Garden","The Peninsula","Historic Meadows","Omni","Resting","Quality","Quiet Woman House","Fountain Fun","The West Blank","Eden Roc","Hotel Vertigo","White Elephant","Raffel","Etiquette","Hotel Emblem","Sizzling inn","Green Lushy","Refinery","Town and Country","Able Day","Sunrise Thicket","Harbor Court","Hotel Triton","The Cozy Cottage","Sunset’s View","The Beach Cottages","Union Rooms","Hotel deLuxe","The Breakers","Four Seasons","Happy Stay","Night In Paradise","Sunset Lodge","Peaceful Mornings","Big Dreams","Rooftop Resort","Hotel Bliss","Relax Inn","Trance Hotel","Travelodge","Time Motel","Quick Stop","The Bristol","Red Lion","Peninsula","The Fresco","Jack Summer","Hotel Barry","Friendship","Tropicana","The Mutiny","RedFlag","Lime Wood","Oxford","Hotel Mastic Marvell","Entrada","Zecorra","Palm Bliss","Club Quarters","The Better","Riverleaf","Staybridge","Hotel The Pie","Astro","Hotel Lucia","Odysse","Giggle","Everman","Moss View","Residence","Sunny Canopy","French Riviera","Sunrise Cave","Fortune","Farmhouse","Elite Peak","Blue Moon","Row","Peninsula","Pod 51","The Enchanted Garden","Antique Palms","Beachwalk","Heartland","The James New York","Holly House","Olympus","The Lodge at Sea Island","Sonesta","Fresh Wave","Hapuna Beach","Sea Horizon","Ace","Seascape","Hollywood","Enchanted Isles","Lustrio","Belmond Hotel Splendido","Shoreline","The Quest","The Society","The Neighborhood","The Cottage","Aloft","Hotel Rose","The Westin"];
var hotel_roomtype = [{"single room":1}, {"double room":2}, {"twin room":2}, {"triple room":3}, {"quad room":4},{"King room":2}, {"queen room":2}, {"presidential suite":4}, {"suite":4}, {"suite room":4}, {"duplex room":4}];
var hotel_numberRoom = 1;
var booking_numberPersons = 1;
var booking_numberAdults = 1;
var booking_numberKids = 1;
var date_arrivalDate = new Date();
var date_departureDate = new Date(); date_departureDate.setDate(date_departureDate.getDate() + 1);
var date_numberNights = 1;

var option_dish = ["full course", "breakfast",];
var option_landscapeOnThe = ["sea", "lake", "sea","ocean", "mountain", "castle", "seaside"];
var option_landscapeOn = ["sea side", "lakeside", "seaside","oceanside", "seaside", "lake side", "mountatin side", "ocean side", "forest side"];
var option_landscapeWith = ["seaview", "lakeview","oceanview","panorama view", "mountain view"];
var option_pet = ["pet", "cat", "dog"];
var option_parkingWith = ["parking", "park", "car park", "parking space", "parking lot", "parking spot", "car port", "parking zone", "space for my car", "park for my car", "parking area"];
var option_parkingTo = ["park"];
var option_wifi = ["internet", "fast connection"];

const maDate = new Date();
maDate.toLocaleDateString("fr") // 20/10/2021


function weightedRandom(average, spec) {
    if(average === undefined) average = spec.length;
    average--;
    if(average <=0)average = 1;
    
    for (let i =0;i< spec.length; i++) {
        let random = Math.random();
        //console.log(i+" : "+random+" : "+spec[i]);
        if(random <= spec[i]){
            return i;
        }
    }
    
    return (average<spec.length?average:spec.length);
  }



function randomIdentification(obj){
    if(obj === undefined) obj = {};

    let random_Firstname = customer_firstname[Math.floor(Math.random() * customer_firstname.length)];
    let random_Lastname = customer_lastname[Math.floor(Math.random() * customer_lastname.length)];

    let normalized_Firstname = random_Firstname.normalize('NFC');
    let normalized_Lastname = random_Lastname.normalize('NFC');
    let random_email = normalized_Firstname+"."+normalized_Lastname+"@sap.com";

    obj.customer_firstname= random_Firstname;
    obj.customer_lastname= random_Lastname;
    obj.customer_mail= random_email;

    return obj;
}

function randomDateFuture(obj){
    if(obj === undefined) obj = {};

    let randomArrivalDelay = Math.floor(Math.random() * 150 + 1); // 1 - 150
    let randomNights = Math.floor(Math.random() * 15 + 1 ); // 1 - 15

    let randomArrivalDate = new Date();
    let randomDepartureDate = new Date();

    randomArrivalDate.setDate(randomArrivalDate.getDate() + randomArrivalDelay);
    randomDepartureDate.setDate(randomDepartureDate.getDate() + randomArrivalDelay);

    randomDepartureDate.setDate(randomDepartureDate.getDate() + randomNights);
    
    obj.date_arrivalDate= randomArrivalDate.toLocaleDateString("fr");
    obj.date_departureDate= randomDepartureDate.toLocaleDateString("fr");
    obj.date_numberNights= randomNights;

    return obj;
    //return {date_arrivalDate:randomArrivalDate.toLocaleDateString("fr"),date_departureDate:randomDepartureDate.toLocaleDateString("fr"),date_numberNights:randomNights}
}

function randomNumberBooking(obj){
    if(obj === undefined) obj = {};

    let random_numberPersons = weightedRandom(4, [0.2, 0.2,  0.3,  0.4, 0.3,  0.2,  0.1])+1;
    let random_numberAdults = weightedRandom(3, [0.3, 0.5,  0.4,  0.1])+1;
    if(random_numberAdults > random_numberPersons) random_numberPersons = random_numberAdults;
    let random_numberKids = ((random_numberPersons > random_numberAdults) ? random_numberPersons - random_numberAdults : 0);
    
    //console.log({booking_numberPersons:random_numberPersons,booking_numberAdults:random_numberAdults,booking_numberKids:random_numberKids});

    obj.booking_numberPersons= random_numberPersons;
    obj.booking_numberAdults= random_numberAdults;
    obj.booking_numberKids= random_numberKids;

    return obj;
    //return {booking_numberPersons:random_numberPersons,booking_numberAdults:random_numberAdults,booking_numberKids:random_numberKids}
}

function randomRoomHotel(obj){
    if(obj === undefined) obj = {};

    let random_roomtype = hotel_roomtype[weightedRandom(3, [0.2, 0.2,  0.3,  0.1, 0.1,  0.2,  0.2,0.2,0.3,0.3,0.5])];
    let random_NumberRoom = Math.ceil(obj.booking_numberPersons / Object.values(random_roomtype)[0]);

    let random_HotelName = hotel_hotelName[Math.floor(Math.random() * hotel_hotelName.length)];

    //console.log(obj.booking_numberPersons+" / "+(parseInt(Object.values(random_roomtype)[0]))+" = "+random_NumberRoom);

    obj.hotel_hotelName= random_HotelName;
    obj.hotel_roomtype= Object.keys(random_roomtype)[0];
    
    /*if(random_NumberRoom == 1){
        let random_singleARoom = weightedRandom(1, [0.6, 0.4]); //decide if we use "1" or "a"
        if(random_singleARoom) random_NumberRoom = "a";
    }*/

    obj.hotel_numberRoom= random_NumberRoom;

    return obj;
    //console.log({hotel_hotelName: random_HotelName, hotel_roomtype:Object.keys(random_roomtype)[0], hotel_numberRoom:random_NumberRoom});
}


//useless
var useless_CityName = ["Lyon","Saint-Étienne","Grenoble","Villeurbanne","Clermont-Ferrand","Valence","Vénissieux","Chambéry","Annecy","Dijon","Besançon","Belfort","Chalon-sur-Saône","Rennes","Brest","Quimper","Lorient","Vannes","Saint-Brieuc","Tours","Orléans","Bourges","Blois","Châteauroux","Ajaccio","Cayenne","Strasbourg","Reims","Metz","Mulhouse","Nancy","Colmar","Troyes","Charleville-Mézières","Les Abymes","Lille","Amiens","Tourcoing","Dunkirk","Calais","Villeneuve-d'Ascq","Saint-Quentin","Beauvais","Paris","Boulogne-Billancourt","Versailles","Levallois-Perret","Fontenay-sous-Bois","Vincennes","Massy","Fort-de-France","Le Havre","Rouen","Caen","Évreux","Bordeaux","Limoges","Poitiers","Pau","La Rochelle","Mérignac","Pessac","Niort","Bayonne","Brive-la-Gaillarde","Toulouse","Montpellier","Nîmes","Perpignan","Béziers","Montauban","Narbonne","Albi","Carcassonne","Nantes","Angers","Le Mans","Saint-Nazaire","Cholet","La Roche-sur-Yon","Laval","Marseille","Nice","Toulon","Aix-en-Provence","Avignon","Antibes","Cannes","La Seyne-sur-Mer","Hyères","Fréjus","Arles","Grasse","Martigues","Cagnes-sur-Mer","Aubagne","Saint-Denis","Saint-Paul","Saint-Pierre","Le Tampon","Saint-André","Saint-Louis","Saint-Malo"];
var greetingsPunctuation = [", ",". ","! "," "];
var endPunctuation = [". "," ","; "];
var endPunctuation2 = [". ",", ","! "," "];
var endFlowPunctuation = [". "," "," and ",", ", "; "];
var questionPunctuation = ["? "];
var commaAndPunctuation = [", ", " ", " and "];
var commaIncludingPunctuation = [" including "," with ", ", ", " "];
var commaPunctuation = [", ", " "];



// ############################ SIMPLE FORMAT ####################################################################################################################################################################################################
// ############################ SIMPLE FORMAT ####################################################################################################################################################################################################
// ############################ SIMPLE FORMAT ####################################################################################################################################################################################################
// ############################ SIMPLE FORMAT ####################################################################################################################################################################################################

// Greetings : Hi,
// PRESENTATION : [presentation_syntax] [customer_firstname] [customer_lastname]
// REASON FILLER : [reason_filler]
// BOOKING : I would like to book [hotel_numberRoom] [hotel_roomtype] in [hotel_hotelName] Hotel
// TRAVELERS : We are [booking_numberPersons] people, [booking_numberAdults] adults and [booking_numberKids] kids.
// DATES : We plan to arrive on [date_arrivalDate] and stay [date_numberNights].
// WHATEVER FILLER : Could you please set the reservaiton up? 
// CONTACT : you can contact me on [customer_mail]
// CLOSING FILLER cf useless_pleaseHelp
// THANKS : Thank you!
// CLOSING GREETINGS : All the Best
// SIGNATURE : [customer_firstname] [customer_lastname]


var useless_greetings = ["Hi", "Hello", "Good morning", "Good evening", "Good day", "Dear Sir", "Dear Madam", "Dear Madam / Sir", ""]; 
var useless_greetingsHotel = ["Hi ", "Dear "] //when useless_grettings Hotel Hotel Name

////PRESENTATION////
var useless_presentation = ["I am ", "My name is ", "Let me present myself : ", "Let me introduce myself : ", "My full name is "]; // when useless_presentation then customer_firstname customer_lastname

var useless_presentation2 = ["Let me present myself : ", "Let me introduce myself : "]; //when useless_presentation2 then useless_firstname and useless_lastname
var useless_firstname = ["My firstname is "];
var useless_lastname = [" and my last name is ", " and my family name is ",", my lastname is ",", my family name is "];


////REASON FILLER////
var reason_filler = [
    "I will be visiting the lovely city of Paris.",
    "I'm looking for the best accomodation of the city.",
    "We would like to visit the treasures your city offers.",
    "Please be informed that I will be traveling to Cuba.",
    "As I will travel to Dublin due to professional reasons, I'm currently searching for the best place to stay.",
    "I'm writing to you today as I'm looking for the best place of the city.",
    "As you may know, the annual conference of the world's top scientists will be held in your city.",
    "I'm writing you today to ask you some questions about your place I found on Internet.",
    "I saw your establishment in the ranking of the best places to stay.",
    "We would like to take some rest with my family.",
    "We plan to visit the best monuments of Paris for our vacations.",
    "As we enjoyed our last travel in your accomodation, we would like to book again your establishement.",
    "I will be in the city for few days, and I wanted to ask you few questions."
];


////BOOKING////
var useless_iWanna = ["I would like to book ", "I planned to book ", "I would like ", "I want ", "I am booking ", "I would like to make a reservation of ", "We would like to make a reservation of ", "I am, hereby, booking ", "My booking : ", "I want to book ", "Reservation : ", "Please book ", "I would like to reserve ", "I want to reserve ", "My booking is the following : ", "My reservation is the following : ", "My reservation : ", "I would like accommodation for "];

var useless_iWannaQuestion = ["Could you ", "Please, could you ", "Can you ", "Is it ok for you to ", "May you ", ""]; // works with useless_bookAction
var useless_bookAction = ["book ", "take a reservation : ", "take a reservation for ", "reserve ","provide an accomodation for ", "book this accomodation : "]; // works with useless_iWannaQuestion

//where
var useless_InAt = [" in ", " at "];
var useless_AlreadyGivenHotel = [" at your"," in your"]; // if hotelname already been provided before and if random tells so
var useless_HotelType = [" Resort", " Hotel"," Inn"," Guest House", " Suites", " Motel", " B&B"];


////TRAVELERS////
var useless_during = ["During this trip ", "During this period ", "At this occasion "]; /*random */ 
var useless_whoDuring = ["there will be ", "we will be "]; //Works with useless_during
var useless_who = ["It is for ","There will be ",  "We will be ", "We are ", "There is ", "Participants : ", "Travelers : "];

var useless_whoMe = ["It is for ","There is ", "Participants : ", "Travelers : ", "Participant : ", "Traveler : "]; //only when 1 adult
var useless_whoMeduring = ["there will be "]; //only when 1 adult

var useless_ppl = ["traveler", "person"];

var useless_onlyAdult = ["on which, only adults","including only adults", "with adults only"];

var useless_whoStructured = ["We will be ",  "Participants : ", "Travelers : "];//without suffixe from useless_ppl

var useless_singlePPl = ["a","a single","one"];
var useless_singleAdult = ["an","a single","one"];

var useless_kids = ["child","kid","infant"];


////DATES////
var useless_arrival1 = ["We plan to arrive on the ", "We will arrive on the ", "My arrival date is the ", "Our arrival date is the ", "My arrival date will be the ", "Our arrival date will be the ", "I shoud arrive on the ", "We should arrive on the ", "I will be checking in the ", "My check in is on the "] // If arrival1 then stay1 or departure1
var useless_departure1 = ["we will leave on the ", "I will leave on the ","I plan to go on the ", "our departure is the ", "we will leave on the ", "our departure date is the ", "I will leave on the ", "my departure date is the ", "I plan to leave on the ", "I plan to check out the ", "I will check out the ","we will check out the "];
var useless_stay1 = ["I will stay ", "we will stay ", "for ", "the length of my stay is ", "the length of our stay is ", "the length of my stay will be ", "for the duration of ", "I plan to stay ", "we plan to stay "] /* "nights" or "days" */

var uselessDaysnNight = ["day", "night"];

var usless_stay1Night = [" and I will sleep ", " and we will sleep "]

var useless_arrival2 = [ "Arrival : ", "Arrival Date : "]; //if arrival2, then stay2 and/or departure2
var useless_departure2 = ["Departure : ", "Departure Date : "];

var useless_stay2 = ["Length of stay : ", ", Nights : ", ", Number of nights : "];

/////WHATEVER FILLER////
var whatever_filler = [
    "I should feel obliged if you could confirm the above reservation at the earliest.",
    "Let me know about your room and service charges.",
    "As we would like to book at the earliest, please confirm as soon as possible.",
    "May I ask if breakfast is included in the price ?",
    "Can you confirm if it's possible or not ?",
    "If possible, we would like to have a nice view from our room as well.",
    "We may need a parking spot as well if possible.",
    "I hope it's possible, as I saw your establishment is very well rated on Booking.com.",
    "We can also change a little bit our dates based on the availabilities of the establishement.",
    "As these dates may change, do you know if it's possible to change them after the reservation ?",
    "We also would like to have the breakfast in our room if possible.",
    "We may arrive during the night. I hope it's possible and someone will be there to welcome us.",
    "Could you please let us know if we can book at these dates ?"
];

////CONTACT////
var useless_contact = ["My Email adress is the following : ", "My email : ", "Contact : ", "You can contact me on ", "Feel free to contact me on ", "My email address is ", "Email address : "]


////CLOSING FILLER////
var closing_filler = [
    "Please contact me as soon as possible regarding this reservation. Thank you for your assistance in this matter.",
    "Kindly share the availability room details with the rates and payment mode.",
    "Please contact me to confirm and verify my resignation for the same.",
    "Would you please confirm the reservation at your earliest convenience?",
    "Please contact me to verify my reservation.",
    "I should feel obliged if you could confirm the above reservation at the earliest. Let me also know about your room and service charges.",
    "Please respond with confirmation on my reservation.",
    "Please feel free to contact me sooner possible for any clarifications.",
    "Don't hesitate to contact me if some information are missing.",
    "I'm available whenever you want if you would like to discuss about the availabilities.",
    "You can drop me an email or call me if you have any question regarding this reservation.",
    "The name of your hotel has been suggested by one of my colleagues, and I hope my reservation will be possible.",
    "We enjoyed our last stay in your accomodation, we are super excited to book it again."
];

////THANKS////
var useless_thanks = ["Thank you", "Thanks", "Many thanks", "thx","ty"];


////CLOSING GREETINGS////
var useless_closingGreetings = ["Yours Sincerely", "Kind Regards", "Farewell", "All the best","Regards"];




// ############################ FUNCTIONS TO GENERATE A DATASET ####################################################################################################################################################################################################
// ############################ FUNCTIONS TO GENERATE A DATASET ####################################################################################################################################################################################################
// ############################ FUNCTIONS TO GENERATE A DATASET ####################################################################################################################################################################################################
// ############################ FUNCTIONS TO GENERATE A DATASET ####################################################################################################################################################################################################


var a_content = {id:"",text:"","meta": {}, "annotation_approver": null,labels:[]}; // >>>>>>>>>>>>>>>>>>>>>>>>>>>>> GLOBAL VARIABLE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var hotelAlreadyProvided = false;
var presentationAlreadyProvided = false;


function pushIfNotExists(param){
    for(let i = 0;i<a_content.labels.length;i++){
        if(a_content.labels[i][2] == param[2]) {
            return false;
        }
        
    }
    a_content.labels.push(param);
    return true;
}

function randomPunctuation(punctuation, weight, average){
    if(average === undefined){
        average = 0;
    }
    if(weight === undefined){
        a_content.text += punctuation[Math.floor(Math.random() * punctuation.length)];
    } else {
        a_content.text += punctuation[weightedRandom(average, weight)];
    }
    return true;
}


function randomGreetings(obj){
    let random_greetings = weightedRandom(1, [0.7, 0.3]);
    if(random_greetings){ // we use useless_greetingsHotel + hotelname
        hotelAlreadyProvided = true;
        
        a_content.text = useless_greetingsHotel[Math.floor(Math.random() * useless_greetingsHotel.length)];
        if(!obj.hotel_hotelType){
            obj.hotel_hotelType = useless_HotelType[Math.floor(Math.random() * useless_HotelType.length)];
            obj.hotel_hotelName += obj.hotel_hotelType;   
        }
        //a_content.text += obj.hotel_hotelType;
        let x1 = a_content.text.length;
        let x2 = x1 + obj.hotel_hotelName.length;
        a_content.text += obj.hotel_hotelName;
        pushIfNotExists([x1, x2, "hotel_hotelName"]);

        
/*         if(!obj.hotel_hotelType){
            obj.hotel_hotelType = useless_HotelType[Math.floor(Math.random() * useless_HotelType.length)];   
        }
        a_content.text += obj.hotel_hotelType; */
        

    } else {
        a_content.text = useless_greetings[Math.floor(Math.random() * useless_greetings.length)];
    }

    if(a_content.text != "" && a_content.text != " " && a_content.text != null)a_content.text += greetingsPunctuation[Math.floor(Math.random() * greetingsPunctuation.length)];
}

function randomPresentation(obj){
    let random_doThePresentation = weightedRandom(0, [0.75, 0.2]);
    if(!random_doThePresentation){
        presentationAlreadyProvided = true;
        let random_separateNamePresentation = weightedRandom(0, [0.8, 0.2]); //useless_presentation or useless_presentation2
        if(random_separateNamePresentation){ // we use useless_firstname & useless_lastname & maybe useless_presentation2
            let random_introduction = weightedRandom(0, [0.9, 0.2]);
            if(random_introduction){
                a_content.text += useless_presentation2[Math.floor(Math.random() * useless_presentation2.length)];
            }

            a_content.text += useless_firstname[Math.floor(Math.random() * useless_firstname.length)];
            let x1 = a_content.text.length;
            let x2 = x1 + obj.customer_firstname.length;
            a_content.text += obj.customer_firstname;
            pushIfNotExists([x1, x2, "customer_firstname"]);

            a_content.text += useless_lastname[Math.floor(Math.random() * useless_lastname.length)];
            x1 = a_content.text.length;
            x2 = x1 + obj.customer_lastname.length;
            a_content.text += obj.customer_lastname;
            pushIfNotExists([x1, x2, "customer_lastname"]);

            
        } else {
            a_content.text += useless_presentation[weightedRandom(0, [0.5, 0.2,  0.1,  0.1])];

            //a_content.text = useless_firstname[Math.floor(Math.random() * useless_firstname.length)];
            let x1 = a_content.text.length;
            let x2 = x1 + obj.customer_firstname.length;
            a_content.text += obj.customer_firstname;
            pushIfNotExists([x1, x2, "customer_firstname"]);


            a_content.text += " "; // space between firstname and lastname

        // a_content.text = useless_lastname[Math.floor(Math.random() * useless_lastname.length)];
            x1 = a_content.text.length;
            x2 = x1 + obj.customer_lastname.length;
            a_content.text += obj.customer_lastname;
            pushIfNotExists([x1, x2, "customer_lastname"]);

        }

        randomPunctuation(endFlowPunctuation, [0.6, 0.6,  0.3, 0.7, 0.2], 0);
    }
    //presentationAlreadyProvided = false;
}


function randomRoomPlanning(obj){
    a_content.text += useless_iWanna[Math.floor(Math.random() * useless_iWanna.length)];

    let multiple = true;

    if(obj.hotel_numberRoom == 1){
        multiple = false;
        let random_singleARoom = weightedRandom(1, [0.6, 0.4]); //decide if we use "1" or "a"
        if(random_singleARoom) obj.hotel_numberRoom = "a";
    }

    let x1RoomNumber = a_content.text.length;
    a_content.text += obj.hotel_numberRoom;
    a_content.text += " ";
    let x1RoomType = a_content.text.length;
    a_content.text += obj.hotel_roomtype;
    let x2 = a_content.text.length;
    pushIfNotExists([x1RoomNumber, x2, "hotel_numberRoom"]);
    pushIfNotExists([x1RoomType, x2, "hotel_roomtype"]);

    /* a_content.text += " ";

    x1 = a_content.text.length;
    x2 = x1 + obj.hotel_roomtype.toString().length;
    a_content.text += obj.hotel_roomtype;
    pushIfNotExists([x1, x2, "hotel_roomtype"]); */
    
    if(multiple) {
        a_content.text += "s";
    }

    if(hotelAlreadyProvided && weightedRandom(1, [0.4, 0.6])){
        a_content.text += useless_AlreadyGivenHotel[Math.floor(Math.random() * useless_AlreadyGivenHotel.length)];
        a_content.text += obj.hotel_hotelType;
    } else {
        a_content.text += useless_InAt[Math.floor(Math.random() * useless_InAt.length)];

        if(!hotelAlreadyProvided){

            if(!obj.hotel_hotelType){
                obj.hotel_hotelType = useless_HotelType[Math.floor(Math.random() * useless_HotelType.length)];
                obj.hotel_hotelName += obj.hotel_hotelType;   
            }

            x1 = a_content.text.length;
            x2 = x1 + obj.hotel_hotelName.length;
            a_content.text += obj.hotel_hotelName;
            pushIfNotExists([x1, x2, "hotel_hotelName"]);
        } else {
            a_content.text += obj.hotel_hotelName;
        }
    }
    hotelAlreadyProvided = false;

/*     if(!obj.hotel_hotelType){
        obj.hotel_hotelType = useless_HotelType[Math.floor(Math.random() * useless_HotelType.length)];   
    }
    a_content.text += obj.hotel_hotelType; */

    a_content.text += endPunctuation[weightedRandom(0, [0.6, 0.6,  0.3])];
    //a_content.text += randomPunctuation(endPunctuation, [0.8, 0.3, 0.1], 0);

}


function randomNumberTravellers(obj){
    
    let randomDuring = weightedRandom(0, [0.8, 0.1]);
    //console.log(randomDuring);
    
    //PPL
    let multiplePerson = true;
    let multipleAdults = true;
    let multipleKids = true;
    let random_choicemodelbis;

    let x1 = 0, x2 = 0;
    /*
    if person = 1
    random person or myself or single adult
    
    if persone = adult 
    random person only + optional "only adult"
    random adult only

    else 
    person include random adult and/or child( ++ )
    adult and child

     */



    if(obj.booking_numberPersons == 1){

        if(!randomDuring){
            a_content.text += useless_whoMe[Math.floor(Math.random() * useless_whoMe.length)];
        } else {
            //during
            a_content.text += useless_during[Math.floor(Math.random() * useless_during.length)];
            randomPunctuation(commaAndPunctuation, [0.6, 0.6,  0.3], 0);
            a_content.text += useless_whoMeduring[Math.floor(Math.random() * useless_whoMeduring.length)];
        }

        let random_choicemodel = weightedRandom(0, [0.6, 0.2]); // decide if random ppl / adult /  myself (removed)
        //let x1, x2;
        switch (random_choicemodel) {
            case 0:
                //random ppl
                let random_singlePPl = weightedRandom(1, [0.6, 0.4]); //decide if we use "1" or text format
                if(random_singlePPl) obj.booking_numberPersons = useless_singlePPl[weightedRandom(0, [0.6, 0.6, 0.3])];
                x1 = a_content.text.length;
                a_content.text += obj.booking_numberPersons;
                a_content.text += " ";
                a_content.text += useless_ppl[Math.floor(Math.random() * useless_ppl.length)];
                x2 = a_content.text.length;
                pushIfNotExists([x1, x2, "booking_numberPersons"]);
                pushIfNotExists([x1, x2, "booking_numberAdults"]);
                break;
            case 1:
                // adult
                
                let random_singleAdult = weightedRandom(1, [0.6, 0.4]); //decide if we use "1" or text format
                if(random_singleAdult) obj.booking_numberAdults = useless_singleAdult[weightedRandom(0, [0.6, 0.6, 0.3])];
                x1 = a_content.text.length;
                a_content.text += obj.booking_numberAdults;
                a_content.text += " ";
                a_content.text += "adult";
                x2 = a_content.text.length;
                pushIfNotExists([x1, x2, "booking_numberPersons"]);
                pushIfNotExists([x1, x2, "booking_numberAdults"]);
                break;
            case 2:
                // myself (removed)
                break;
        }
    } else if (obj.booking_numberPersons == obj.booking_numberAdults) {
        
        if(!randomDuring){
            a_content.text += useless_who[Math.floor(Math.random() * useless_who.length)];
        } else {
            //during
            a_content.text += useless_during[Math.floor(Math.random() * useless_during.length)];
            randomPunctuation(commaAndPunctuation, [0.6, 0.6,  0.3], 0);
            a_content.text += useless_whoDuring[Math.floor(Math.random() * useless_whoDuring.length)];
        }

        let random_choicemodel = weightedRandom(0, [0.6, 0.2]); // decide if random ppl + optionnal "only adult" / adult only
        switch (random_choicemodel) {
            case 0:// almost exact thing as above. lazy copy/paste.
                //random ppl
                x1 = a_content.text.length;
                a_content.text += obj.booking_numberPersons;
                a_content.text += " ";
                a_content.text += useless_ppl[Math.floor(Math.random() * useless_ppl.length)];
                x2 = a_content.text.length;
                pushIfNotExists([x1, x2, "booking_numberPersons"]);
                pushIfNotExists([x1, x2, "booking_numberAdults"]);
                
                a_content.text += "s";
                randomPunctuation(commaPunctuation, [0.6, 0.6], 0);

                let random_onlyAdult = weightedRandom(0, [0.6, 0.2]); // decide if optionnal "only adult" 
                if(random_onlyAdult){
                    a_content.text += useless_onlyAdult[Math.floor(Math.random() * useless_onlyAdult.length)];
                }
                break;
            case 1: // almost exact thing as above. lazy copy/paste.
                // adult
                x1 = a_content.text.length;
                a_content.text += obj.booking_numberPersons;
                a_content.text += " ";
                a_content.text += "adult";
                x2 = a_content.text.length;
                pushIfNotExists([x1, x2, "booking_numberPersons"]);
                pushIfNotExists([x1, x2, "booking_numberAdults"]);
                a_content.text += "s";

                break;
        }
    } else {

        if(!randomDuring){
            a_content.text += useless_who[Math.floor(Math.random() * useless_who.length)];
        } else {
            //during
            a_content.text += useless_during[Math.floor(Math.random() * useless_during.length)];
            randomPunctuation(commaAndPunctuation, [0.6, 0.6,  0.3], 0);
            a_content.text += useless_whoDuring[Math.floor(Math.random() * useless_whoDuring.length)];
        }

        let random_choicemodel = weightedRandom(0, [0.6, 0.2]); // decide if person include random adult and/or child( ++ ) OR adult and child
        switch (random_choicemodel) {
            case 0:
                //decide if person include random adult and/or child
                if(obj.booking_numberAdults == 1){
                    multipleAdults = false;
                    let random_singlePPl = weightedRandom(1, [0.6, 0.4]); //decide if we use "1" or text format
                    if(random_singlePPl) obj.booking_numberAdults = useless_singleAdult[weightedRandom(0, [0.6, 0.6, 0.3])];
                }

                if(obj.booking_numberKids == 1){
                    multipleKids = false;
                    let random_singlePPl = weightedRandom(1, [0.6, 0.4]); //decide if we use "1" or text format
                    if(random_singlePPl) obj.booking_numberKids = useless_singlePPl[weightedRandom(0, [0.6, 0.6, 0.3])];
                }

                x1 = a_content.text.length;
                a_content.text += obj.booking_numberPersons;
                a_content.text += " ";
                a_content.text += useless_ppl[Math.floor(Math.random() * useless_ppl.length)];
                x2 = a_content.text.length;
                pushIfNotExists([x1, x2, "booking_numberPersons"]);
                a_content.text += "s";


                random_choicemodelbis = weightedRandom(0, [0.6, 0.3, 0.6, 0.1]); // both / adult only / kids only / none 
                if(random_choicemodelbis == 0 || random_choicemodelbis == 1){
                    randomPunctuation(commaIncludingPunctuation, [0.6, 0.6, 0.6, 0.2], 0);

                    x1 = a_content.text.length;
                    a_content.text += obj.booking_numberAdults;
                    a_content.text += " ";
                    a_content.text += "adult";
                    x2 = a_content.text.length;
                    pushIfNotExists([x1, x2, "booking_numberAdults"]);
                    if(multipleAdults) {
                        a_content.text += "s";
                    }
                }
                if(random_choicemodelbis == 0 || random_choicemodelbis == 2){
                    if(random_choicemodelbis == 0){
                        randomPunctuation(commaAndPunctuation, [0.4, 0.2,  1], 2);
                    } else {
                        randomPunctuation(commaIncludingPunctuation, [0.6, 0.6, 0.6, 0.2], 0);
                    }
                    
                    x1 = a_content.text.length;
                    a_content.text += obj.booking_numberKids;
                    a_content.text += " ";
                    a_content.text += useless_kids[weightedRandom(0, [0.6, 0.6, 0.2])];
                    x2 = a_content.text.length;
                    pushIfNotExists([x1, x2, "booking_numberKids"]);
                    if(multipleKids) {
                        a_content.text += "s";
                    }
                }

                break;
            case 1:
                // adult and child
                
                multipleAdults = true;
                multipleKids = true;
                //decide if person include random adult and/or child
                if(obj.booking_numberAdults == 1){
                    multipleAdults = false;
                    let random_singlePPl = weightedRandom(1, [0.6, 0.4]); //decide if we use "1" or text format
                    if(random_singlePPl) obj.booking_numberAdults = useless_singleAdult[weightedRandom(0, [0.6, 0.6, 0.3])];
                }

                if(obj.booking_numberKids == 1){
                    multipleKids = false;
                    let random_singlePPl = weightedRandom(1, [0.6, 0.4]); //decide if we use "1" or text format
                    if(random_singlePPl) obj.booking_numberKids = useless_singlePPl[weightedRandom(0, [0.6, 0.6, 0.3])];
                }

                x1 = a_content.text.length;
                a_content.text += obj.booking_numberAdults;
                a_content.text += " ";
                a_content.text += "adult";
                x2 = a_content.text.length;
                pushIfNotExists([x1, x2, "booking_numberAdults"]);
                if(multipleAdults) {
                    a_content.text += "s";
                }

                randomPunctuation(commaAndPunctuation, [0.6, 0.6,  0.3], 0);

                x1 = a_content.text.length;
                a_content.text += obj.booking_numberKids;
                a_content.text += " ";
                a_content.text += useless_kids[weightedRandom(0, [0.6, 0.6, 0.2])];
                x2 = a_content.text.length;
                pushIfNotExists([x1, x2, "booking_numberKids"]);
                if(multipleKids) {
                    a_content.text += "s";
                }
                
                break;
            case 2:
                // myself (removed)
                break;
        }
    }
    randomPunctuation(endPunctuation, [0.8, 0.3, 0.1], 0);
    
}



function randomArrival(obj){
    
    //date arrival & date departure &| (duration | sleep)


    let random_choicemodel = weightedRandom(0, [0.6, 0.3, 1]); // decide if arrival and departure and duration OR arrival and departure OR arrival and duration
    if(random_choicemodel == 0 || random_choicemodel == 1 || random_choicemodel == 2){//arrival and departure
        //randomPunctuation(commaIncludingPunctuation, [0.6, 0.6, 0.6, 0.2], 0);

        a_content.text += useless_arrival1[Math.floor(Math.random() * useless_arrival1.length)];

        x1 = a_content.text.length;
        a_content.text += obj.date_arrivalDate;
        x2 = a_content.text.length;
        pushIfNotExists([x1, x2, "date_arrivalDate"]);
    }
    if(random_choicemodel == 0 || random_choicemodel == 1){
        randomPunctuation(commaAndPunctuation, [0.4, 0.2,  1], 2);

        a_content.text += useless_departure1[Math.floor(Math.random() * useless_departure1.length)];
        
        x1 = a_content.text.length;
        a_content.text += obj.date_departureDate;
        x2 = a_content.text.length;
        pushIfNotExists([x1, x2, "date_departureDate"]);
    }
    if(random_choicemodel == 0 || random_choicemodel == 2){
        randomPunctuation(commaAndPunctuation, [0.4, 0.2,  1], 2);

        a_content.text += useless_stay1[Math.floor(Math.random() * useless_stay1.length)];

        x1 = a_content.text.length;
        a_content.text += obj.date_numberNights;
        a_content.text += " ";
        a_content.text += uselessDaysnNight[weightedRandom(1, [0.4, 1])];
        x2 = a_content.text.length;
        pushIfNotExists([x1, x2, "date_numberNights"]);

        if(obj.date_numberNights >1){
            a_content.text += "s";
        }
    }
    randomPunctuation(endPunctuation, [0.8, 0.3, 0.1], 0);
}

function randomWhateverFiller(obj){
    let randomFiller = weightedRandom(0, [0.6, 0.4]);
    if(randomFiller){
        a_content.text += whatever_filler[Math.floor(Math.random() * whatever_filler.length)];
    }
}

function randomReasonFiller(obj){
    let randomFiller = weightedRandom(0, [0.6, 0.4]);
    if(randomFiller){
        a_content.text += reason_filler[Math.floor(Math.random() * reason_filler.length)];
    }
}

function randomContact(obj){
    a_content.text += useless_contact[Math.floor(Math.random() * useless_contact.length)];
    let x1 = a_content.text.length;
    let x2 = x1 + obj.customer_mail.length;
    a_content.text += obj.customer_mail;
    pushIfNotExists([x1, x2, "customer_mail"]);
    if (a_content.text != "" && a_content.text != " " && a_content.text != null) a_content.text += ". ";
}

function randomClosingFiller(obj){
    let randomFiller = weightedRandom(0, [0.6, 0.4]);
    if(randomFiller){
        a_content.text += closing_filler[Math.floor(Math.random() * closing_filler.length)];
    }
}

function randomThanks(obj){
    let randomFiller = weightedRandom(0, [0.6, 0.4]);
    if(randomFiller){
        a_content.text += useless_thanks[Math.floor(Math.random() * useless_thanks.length)];
        a_content.text += endPunctuation2[weightedRandom(0, [0.6, 0.4,  0.3, 0.2])];
    }
}

function randomClosingGreetings(obj){
    let randomFiller = weightedRandom(0, [0.6, 0.4]);
    if(randomFiller){
        a_content.text += useless_closingGreetings[Math.floor(Math.random() * useless_closingGreetings.length)];
        a_content.text += endPunctuation2[weightedRandom(0, [0.6, 0.4,  0.3, 0.2])];
    }
}

function randomSignature(obj){
    let randomFiller = weightedRandom(1, [0.4, 1]);
    if(!presentationAlreadyProvided) randomFiller = 1;

    if(randomFiller){
        //a_content.text += useless_firstname[Math.floor(Math.random() * useless_firstname.length)];
        let x1 = a_content.text.length;
        let x2 = x1 + obj.customer_firstname.length;
        a_content.text += obj.customer_firstname;
        pushIfNotExists([x1, x2, "customer_firstname"]);
        a_content.text += " ";
        //a_content.text += useless_lastname[Math.floor(Math.random() * useless_lastname.length)];
        x1 = a_content.text.length;
        x2 = x1 + obj.customer_lastname.length;
        a_content.text += obj.customer_lastname;
        pushIfNotExists([x1, x2, "customer_lastname"]);
    }
    presentationAlreadyProvided = false;
}


var tmpObj = randomDateFuture(randomRoomHotel(randomNumberBooking(randomIdentification())));


// Greetings : Hi,
// PRESENTATION : I am [customer_firstname] [customer_lastname]
// REASON FILLER : I am happy to travel with my family in your city
// BOOKING : I would like to book [hotel_numberRoom] [hotel_roomtype] in [hotel_hotelName] Hotel
// TRAVELERS : We are [booking_numberPersons] people, [booking_numberAdults] adults and [booking_numberKids] kids.
// DATES : We plan to arrive on [date_arrivalDate] and stay [date_numberNights].
// WHATEVER FILLER : Could you please set the reservaiton up? 
// CONTACT : you can contact me on [customer_mail]
// CLOSING FILLER cf useless_pleaseHelp
// THANKS : Thank you!
// CLOSING GREETINGS : All the Best
// SIGNATURE : [customer_firstname] [customer_lastname]

/* console.log(tmpObj);
randomGreetings(tmpObj);
randomPresentation(tmpObj);
randomReasonFiller(tmpObj);
randomRoomPlanning(tmpObj);
randomNumberTravellers(tmpObj);
randomArrival(tmpObj);
randomWhateverFiller(tmpObj);
randomContact(tmpObj);
randomClosingFiller(tmpObj);
randomThanks(tmpObj);
randomClosingGreetings(tmpObj);
randomSignature(tmpObj);

console.log(a_content); */



/////////////////////////////
var myArray = [];
var nbRecords = 7500;
var arrayFunctions = [
    // simple format
    [
        randomGreetings,
        randomPresentation,
        randomReasonFiller,
        randomRoomPlanning,
        randomNumberTravellers,
        randomArrival,
        randomWhateverFiller,
        randomContact,
        randomClosingFiller,
        randomThanks,
        randomClosingGreetings,
        randomSignature
    ]/* ,
    // second format
    [
        randomGreetings,
        randomPresentation,
        randomReasonFiller,
        randomNumberTravellers,
        randomRoomPlanning,
        randomArrival,
        randomWhateverFiller,
        randomContact,
        randomClosingFiller,
        randomThanks,
        randomClosingGreetings,
        randomSignature
    ],
    // third format
    [
        randomGreetings,
        randomPresentation,
        randomReasonFiller,
        randomArrival,
        randomNumberTravellers,
        randomRoomPlanning,
        randomWhateverFiller,
        randomContact,
        randomClosingFiller,
        randomThanks,
        randomClosingGreetings,
        randomSignature
    ],
    // fourth format
    [
        randomGreetings,
        randomPresentation,
        randomReasonFiller,
        randomNumberTravellers,
        randomRoomPlanning,
        randomArrival,
        randomContact,
        randomWhateverFiller,
        randomClosingFiller,
        randomThanks,
        randomClosingGreetings,
        randomSignature
    ],
    // fifth format
    [
        randomGreetings,
        randomReasonFiller,
        randomRoomPlanning,
        randomNumberTravellers,
        randomArrival,
        randomWhateverFiller,
        randomPresentation,
        randomContact,
        randomThanks,
        randomClosingGreetings,
        randomSignature
    ] */
];
for (var i = 1; i <= nbRecords; i++) {
    var tmpObj = randomDateFuture(randomRoomHotel(randomNumberBooking(randomIdentification())));
    let randomFunctionsIndex = Math.floor(Math.random() * arrayFunctions.length);
    for (let index = 0; index < arrayFunctions[randomFunctionsIndex].length; index++)
        arrayFunctions[randomFunctionsIndex][index](tmpObj);
    a_content.id = i;
    myArray.push(JSON.stringify(a_content));
    a_content = { id: "", text: "", "meta": {}, "annotation_approver": null, labels: [] };
}
//console.log(myArray.join("\n"))
fs.writeFile('C:\\data\\generated_test.txt', myArray.join("\n"), err => {
    if (err)
        console.error(err);
});


/*
var mastr = "Good evening! I am Maël Clement. I would like 3 twin rooms at yourundefined. Travelers : 1 adult 4 kids. My check in is on the 27/09/2022, we will leave on the 10/10/2022 and the length of our stay is 13 days. My email address is Maël.Clement@sap.com. I'm available whenever you want if you would like to discuss about the availabilities.Thanks. Maël Clement";

var labels = [[19,23,"customer_firstname"],[24,31,"customer_lastname"],[46,57,"hotel_numberRoom"],[48,57,"hotel_roomtype"],[89,96,"booking_numberAdults"],[97,102,"booking_numberKids"],[127,137,"date_arrivalDate"],[160,170,"date_departureDate"],[201,207,"date_numberNights"],[230,250,"customer_mail"],[346,350,"customer_firstname"],[351,358,"customer_lastname"]];

for(let i = 0;i< labels.length;i++){
    console.log(labels[i][2]+" : "+mastr.substring(labels[i][0],labels[i][1]));
}*/