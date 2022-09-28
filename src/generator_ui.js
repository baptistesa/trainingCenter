//const fs = require('fs');


var stub = true;

/* function instantiate(obj){
    return JSON.parse(JSON.stringify(obj));
} */

// STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB STUB
if(stub){
    var current_data_model_index = 0;
    var current_data_format_index = 0;
    var dataset = [];
    var isNew = false;
    var iof_data_models = [{
        id : "dm@1664293115422",
        name : "Bookings",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    
        fillers : [
            {
                name : "customer_firstname",
                values : ["Pierre ","Philippe ","Alain ","Nathalie ","Monique ","Sylvie ","Françoise ","Christophe ","Jacques ","Martine ","Laurent ","Frédéric ","Stéphane ","Sébastien ","Julien ","Pascal ","Thierry ","François ","Olivier ","René ","Sandrine ","Véronique ","Céline ","Jeanne ","Dominique ","Didier ","Marc ","Guillaume ","Georges ","Serge ","Aurélie ","Antoine ","Yves ","Virginie ","Henri ","Corinne ","Romain ","Yvette ","Franck ","Maxime ","Élodie ","Gilles ","Christelle ","Colette ","Claudine ","Cécile ","Paulette ","Suzanne ","Geneviève ","Josette ","Claire ","Andrée ","Nadine ","Mathieu ","Bernadette ","Renée ","Thérèse ","Delphine ","Patrice ","Fabrice ","Hervé ","Arnaud ","Sylvain ","Odette ","Josiane ","Lucie ","Mireille ","Damien ","Yvonne ","Marine ","Gisèle ","Benoît ","Manon ","Marcelle ","Carole ","Fabienne ","Marguerite ","Pascale ","Fabien ","Éliane ","Mathilde ","Séverine ","Raymonde ","Micheline ","Joëlle ","Loïc ","Adrien ","Angélique ","Lucien ","Odile ","Maël ","Baptiste ","Alexis"],
                isData : true
            },{
                name : "customer_lastname",
                values :  ["Martin ","Bernard ","Thomas ","Petit ","Robert ","Richard ","Durand ","Dubois ","Moreau ","Laurent ","Simon ","Michel ","Lefebvre ","Leroy ","Roux ","David ","Bertrand ","Morel ","Fournier ","Girard ","Bonnet ","Dupont ","Lambert ","Fontaine ","Rousseau ","Vincent ","Muller ","Lefevre ","Faure ","Andre ","Mercier ","Blanc ","Guerin ","Boyer ","Garnier ","Chevalier ","Francois ","Legrand ","Gauthier ","Garcia ","Perrin ","Robin ","Clement ","Morin ","Nicolas ","Henry ","Roussel ","Mathieu ","Gautier ","Masson"],
                isData : true
            },{
                name : "customer_mail",
                values :  ["mael.leboite@sap.com ","alexis.gaillot@sap.com ","baptiste.saint-andre@sap.com "],
                isData : true
            },{
                name : "hotel_hotelName",
                values :  ["Jade Mountain Resort ","Mandarin Oriental Hotel ","Hospitable Inn ","Cape Grace Guest House ","Coast Suites ","The Sebastian Motel ","Alaska Island B&B ","Southern Hospitality Resort ","Candlewood Hotel ","Eagles Watch Inn ","Blooming Bed And Breakfast Guest House ","Hilltop Heaven Suites ","The River Front Motel ","The Nines B&B ","American Inn Resort ","Ballyfin Hotel ","Pearl Inn "," Hotel Indigo Guest House ","Fortune House Suites ","Blossomwell Motel ","Bluebird B&B ","Walkabout Beach Resort ","Leamington Hotel ","Shilo Inns Rose Garden Inn ","The Peninsula Guest House ","Historic Meadows Suites ","Omni Motel ","Resting B&B ","Quality Resort ","Quiet Woman House Hotel ","Fountain Fun Inn ","The West Blank Guest House ","Eden Roc Suites ","Hotel Vertigo Motel ","White Elephant B&B ","Raffel Resort ","Etiquette Hotel ","Hotel Emblem Inn ","Sizzling inn Guest House ","Green Lushy Suites ","Refinery Motel ","Town and Country B&B ","Able Day Resort ","Sunrise Thicket Hotel ","Harbor Court Inn ","Hotel Triton Guest House ","The Cozy Cottage Suites ","Sunset's View Motel ","The Beach Cottages B&B ","Union Rooms Resort ","Hotel deLuxe Hotel ","The Breakers Inn ","Four Seasons Resort ","Happy Stay Hotel ","Night In Paradise Inn ","Sunset Lodge Guest House ","Peaceful Mornings Suites ","Big Dreams Motel ","Rooftop Resort B&B ","Hotel Bliss Resort ","Relax Inn Hotel ","Trance Hotel Inn ","Travelodge Guest House ","Time Motel Suites ","Quick Stop Motel ","The Bristol B&B ","Red Lion Resort ","Peninsula Hotel ","The Fresco Inn ","Jack Summer Guest House ","Hotel Barry Suites ","Friendship Motel ","Tropicana B&B ","The Mutiny Resort ","RedFlag Hotel ","Lime Wood Inn ","Oxford Guest House ","Hotel Mastic Marvell Suites ","Entrada Motel ","Zecorra B&B ","Palm Bliss Resort ","Club Quarters Hotel ","The Better Inn ","Riverleaf Guest House ","Staybridge Suites ","Hotel The Pie Motel ","Astro B&B ","Hotel Lucia Resort ","Odysse Hotel ","Giggle Inn ","Everman Guest House ","Moss View Suites ","Residence Motel ","Sunny Canopy B&B ","French Riviera Resort ","Sunrise Cave Hotel ","Fortune Inn ","Farmhouse Guest House ","Elite Peak Suites ","Blue Moon Motel ","Row B&B ","Peninsula Resort ","Pod 51 Hotel ","The Enchanted Garden Inn ","Antique Palms Resort ","Beachwalk Hotel ","Heartland Inn ","The James New York Guest House ","Holly House Suites ","Olympus Motel ","The Lodge at Sea Island B&B ","Sonesta Resort ","Fresh Wave Hotel ","Hapuna Beach Inn ","Sea Horizon Guest House ","Ace Suites ","Seascape Motel ","Hollywood B&B ","Enchanted Isles Resort ","Lustrio Hotel ","Belmond Hotel Splendido Inn ","Shoreline Guest House ","The Quest Suites ","The Society Motel ","The Neighborhood B&B ","The Cottage Resort ","Aloft Hotel ","Hotel Rose Inn ","The Westin Guest House "],
                isData : true
            },{
                name : "hotel_numberRoom",
                values : ["1 single room ","2 double rooms ","3 twin rooms ","4 single rooms ","5 suites ","6","7","a King room ", "1 presidential suite "],
                isData : true
            },{
                name : "hotel_roomtype",
                values : ["single room", "double room", "twin room", "triple room", "quad room","King room", "queen room", "presidential suite", "suite", "suite room", "duplex room"],
                isData : true
            },{
                name : "booking_numberPersons",
                values : ["1 person ","2 people ","3 travelers ","4 persons ","5 people ","6 person ","7 traveler ","a traveler ","one traveler "],
                isData : true
            },{
                name : "booking_numberAdults",
                values : ["1 adult ","2 adults ","3 adults ","4 adults ","5 adults ","6 adults ","7 adults ","an adult "],
                isData : true
            },{
                name : "booking_numberKids",
                values : ["1 kid ","2 childs ","3 infants ","4 kids ","5 childs ","6 kids ","7 kids ","14 kids ","27 childs ","one child "],
                isData : true
            },{
                name : "date_arrivalDate",
                values : ["04/11/2022 ","07/10/20222 ","08/01/2023 ","05/11/2022 ","13/12/2022 ","12/12/2022 ","10/12/2022 "],
                isData : true
            },{
                name : "date_departureDate",
                values : ["04/11/2022 ","07/10/20222 ","08/01/2023 ","05/11/2022 ","13/12/2022 ","12/12/2022 ","10/12/2022 "],
                isData : true
            },{
                name : "date_numberNights",
                values : ["1 night ","2 nights ","3 days ","4 nights ","5 nights ","6 days ","7 nights ","14 kids ","27 nights ","one child "],
                isData : true
            },{
                name : "Greetings_fillers",
                values : ["Hi", "Hello", "Good morning", "Good evening", "Good day", "Dear Sir", "Dear Madam", "Dear Madam / Sir", ""],
                isData : false
            },{
                name : "IAm_fillers",
                values : ["I am ", "My name is ", "Let me present myself : ", "Let me introduce myself : ", "My full name is "],
                isData : false
            },{
                name : "IWanna_fillers",
                values : ["I would like to book ", "I planned to book ", "I would like ", "I want ", "I am booking ", "I would like to make a reservation of ", "We would like to make a reservation of ", "I am, hereby, booking ", "My booking : ", "I want to book ", "Reservation : ", "Please book ", "I would like to reserve ", "I want to reserve ", "My booking is the following : ", "My reservation is the following : ", "My reservation : ", "I would like accommodation for "],
                isData : false
            },{
                name : "IWanna?_fillers",
                values : ["Could you book ", "Please, could you take a reservation ", "Can you reserve ", "Is it ok for you to book this accomodation ", "May you provide an accomodation for "],
                isData : false
            },{
                name : "IStay_fillers",
                values : ["I will stay ", "we will stay ", "for ", "the length of my stay is ", "the length of our stay is ", "the length of my stay will be ", "for the duration of ", "I plan to stay ", "we plan to stay "],
                isData : false
            },{
                name : "IWill_fillers",
                values : ["It is for ","There will be ",  "We will be ", "We are ", "There is ", "Participants : ", "Travelers : "],
                isData : false
            },{
                name : "IArrive_fillers",
                values : ["We plan to arrive on the ", "We will arrive on the ", "My arrival date is the ", "Our arrival date is the ", "My arrival date will be the ", "Our arrival date will be the ", "I shoud arrive on the ", "We should arrive on the ", "I will be checking in the ", "My check in is on the "],
                isData : false
            },{
                name : "IDepart_fillers",
                values : ["we will leave on the ", "I will leave on the ","I plan to go on the ", "our departure is the ", "we will leave on the ", "our departure date is the ", "I will leave on the ", "my departure date is the ", "I plan to leave on the ", "I plan to check out the ", "I will check out the ","we will check out the "],
                isData : false
            },{
                name : "IStay_fillers",
                values : ["I will stay ", "we will stay ", "for ", "the length of my stay is ", "the length of our stay is ", "the length of my stay will be ", "for the duration of ", "I plan to stay ", "we plan to stay "],
                isData : false
            },{
                name : "MyContact_fillers",
                values : ["My Email adress is the following : ", "My email : ", "Contact : ", "You can contact me on ", "Feel free to contact me on ", "My email address is ", "Email address : "],
                isData : false
            },{
                name : "Reason_fillers",
                values : [
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
                ],
                isData : false
            },{
                name : "Whatever_fillers",
                values : [
                    "I should feel obliged if you could confirm the above reservation at the earliest.",
                    "Let me know about your room and service charges.",
                    "As we would like to book at the earliest, please confirm as soon as possible.",
                    "May I ask if breakfast is included in the price ? ",
                    "Can you confirm if it's possible or not ? ",
                    "If possible, we would like to have a nice view from our room as well.",
                    "We may need a parking spot as well if possible.",
                    "I hope it's possible, as I saw your establishment is very well rated on Booking.com.",
                    "We can also change a little bit our dates based on the availabilities of the establishement.",
                    "As these dates may change, do you know if it's possible to change them after the reservation ?",
                    "We also would like to have the breakfast in our room if possible.",
                    "We may arrive during the night. I hope it's possible and someone will be there to welcome us.",
                    "Could you please let us know if we can book at these dates ? "
                ],
                isData : false
            },{
                name : "Closing_fillers",
                values : [
                    "Please contact me as soon as possible regarding this reservation. Thank you for your assistance in this matter. ",
                    "Kindly share the availability room details with the rates and payment mode. ",
                    "Please contact me to confirm and verify my resignation for the same. ",
                    "Would you please confirm the reservation at your earliest convenience? ",
                    "Please contact me to verify my reservation. ",
                    "I should feel obliged if you could confirm the above reservation at the earliest. Let me also know about your room and service charges. ",
                    "Please respond with confirmation on my reservation.",
                    "Please feel free to contact me sooner possible for any clarifications. ",
                    "Don't hesitate to contact me if some information are missing. ",
                    "I'm available whenever you want if you would like to discuss about the availabilities. ",
                    "You can drop me an email or call me if you have any question regarding this reservation. ",
                    "The name of your hotel has been suggested by one of my colleagues, and I hope my reservation will be possible. ",
                    "We enjoyed our last stay in your accomodation, we are super excited to book it again. "
                ],
                isData : false
            },{
                name : "Thanks_fillers",
                values : ["Thank you", "Thanks", "Many thanks", "thx","ty"],
                isData : false
            },{
                name : "Closing_fillers",
                values : ["Yours Sincerely", "Kind Regards", "Farewell", "All the best","Regards"],
                isData : false
            },{
                name : "in",
                values : ["in ", "at ","in "], //triche
                isData : false
            },{
                name : "AND",
                values : [", ", " ", "and ", "and ", "and ", ", "], //triche
                isData : false
            },{
                name : "END",
                values : [". ",". ",". "," "," ","; "],//triche
                isData : false
            },{
                name : "QST",
                values : ["? "],
                isData : false
            },{
                name : "EXC",
                values : [", ",". ","! ","! "," "],//triche
                isData : false
            }
        ],

        formats : [
            {
                id : "f@1664302304404",
                name : "e-Mail",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                sentences : [
                    [
                        {
                            "name": "Greetings_fillers",
                            "values": [
                                "Hi",
                                "Hello",
                                "Good morning",
                                "Good evening",
                                "Good day",
                                "Dear Sir",
                                "Dear Madam",
                                "Dear Madam / Sir",
                                ""
                            ],
                            "isData": false
                        },
                        {
                            "name": "EXC",
                            "values": [
                                ", ",
                                ". ",
                                "! ",
                                "! ",
                                " "
                            ],
                            "isData": false
                        }
                    ],
                    [
                        {
                            "name": "Reason_fillers",
                            "values": [
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
                            ],
                            "isData": false
                        },
                        {
                            "name": "AND",
                            "values": [
                                ", ",
                                " ",
                                "and ",
                                "and ",
                                "and ",
                                ", "
                            ],
                            "isData": false
                        },
                        {
                            "name": "IWanna_fillers",
                            "values": [
                                "I would like to book ",
                                "I planned to book ",
                                "I would like ",
                                "I want ",
                                "I am booking ",
                                "I would like to make a reservation of ",
                                "We would like to make a reservation of ",
                                "I am, hereby, booking ",
                                "My booking : ",
                                "I want to book ",
                                "Reservation : ",
                                "Please book ",
                                "I would like to reserve ",
                                "I want to reserve ",
                                "My booking is the following : ",
                                "My reservation is the following : ",
                                "My reservation : ",
                                "I would like accommodation for "
                            ],
                            "isData": false
                        },
                        {
                            "name": "hotel_numberRoom",
                            "values": [
                                "1 single room ",
                                "2 double rooms ",
                                "3 twin rooms ",
                                "4 single rooms ",
                                "5 suites ",
                                "6",
                                "7",
                                "a King room ",
                                "1 presidential suite "
                            ],
                            "isData": true
                        },
                        {
                            "name": "in",
                            "values": [
                                "in ",
                                "at ",
                                "in "
                            ],
                            "isData": false
                        },
                        {
                            "name": "hotel_hotelName",
                            "values": [
                                "Jade Mountain Resort ",
                                "Mandarin Oriental Hotel ",
                                "Hospitable Inn ",
                                "Cape Grace Guest House ",
                                "Coast Suites ",
                                "The Sebastian Motel ",
                                "Alaska Island B&B ",
                                "Southern Hospitality Resort ",
                                "Candlewood Hotel ",
                                "Eagles Watch Inn ",
                                "Blooming Bed And Breakfast Guest House ",
                                "Hilltop Heaven Suites ",
                                "The River Front Motel ",
                                "The Nines B&B ",
                                "American Inn Resort ",
                                "Ballyfin Hotel ",
                                "Pearl Inn ",
                                " Hotel Indigo Guest House ",
                                "Fortune House Suites ",
                                "Blossomwell Motel ",
                                "Bluebird B&B ",
                                "Walkabout Beach Resort ",
                                "Leamington Hotel ",
                                "Shilo Inns Rose Garden Inn ",
                                "The Peninsula Guest House ",
                                "Historic Meadows Suites ",
                                "Omni Motel ",
                                "Resting B&B ",
                                "Quality Resort ",
                                "Quiet Woman House Hotel ",
                                "Fountain Fun Inn ",
                                "The West Blank Guest House ",
                                "Eden Roc Suites ",
                                "Hotel Vertigo Motel ",
                                "White Elephant B&B ",
                                "Raffel Resort ",
                                "Etiquette Hotel ",
                                "Hotel Emblem Inn ",
                                "Sizzling inn Guest House ",
                                "Green Lushy Suites ",
                                "Refinery Motel ",
                                "Town and Country B&B ",
                                "Able Day Resort ",
                                "Sunrise Thicket Hotel ",
                                "Harbor Court Inn ",
                                "Hotel Triton Guest House ",
                                "The Cozy Cottage Suites ",
                                "Sunset's View Motel ",
                                "The Beach Cottages B&B ",
                                "Union Rooms Resort ",
                                "Hotel deLuxe Hotel ",
                                "The Breakers Inn ",
                                "Four Seasons Resort ",
                                "Happy Stay Hotel ",
                                "Night In Paradise Inn ",
                                "Sunset Lodge Guest House ",
                                "Peaceful Mornings Suites ",
                                "Big Dreams Motel ",
                                "Rooftop Resort B&B ",
                                "Hotel Bliss Resort ",
                                "Relax Inn Hotel ",
                                "Trance Hotel Inn ",
                                "Travelodge Guest House ",
                                "Time Motel Suites ",
                                "Quick Stop Motel ",
                                "The Bristol B&B ",
                                "Red Lion Resort ",
                                "Peninsula Hotel ",
                                "The Fresco Inn ",
                                "Jack Summer Guest House ",
                                "Hotel Barry Suites ",
                                "Friendship Motel ",
                                "Tropicana B&B ",
                                "The Mutiny Resort ",
                                "RedFlag Hotel ",
                                "Lime Wood Inn ",
                                "Oxford Guest House ",
                                "Hotel Mastic Marvell Suites ",
                                "Entrada Motel ",
                                "Zecorra B&B ",
                                "Palm Bliss Resort ",
                                "Club Quarters Hotel ",
                                "The Better Inn ",
                                "Riverleaf Guest House ",
                                "Staybridge Suites ",
                                "Hotel The Pie Motel ",
                                "Astro B&B ",
                                "Hotel Lucia Resort ",
                                "Odysse Hotel ",
                                "Giggle Inn ",
                                "Everman Guest House ",
                                "Moss View Suites ",
                                "Residence Motel ",
                                "Sunny Canopy B&B ",
                                "French Riviera Resort ",
                                "Sunrise Cave Hotel ",
                                "Fortune Inn ",
                                "Farmhouse Guest House ",
                                "Elite Peak Suites ",
                                "Blue Moon Motel ",
                                "Row B&B ",
                                "Peninsula Resort ",
                                "Pod 51 Hotel ",
                                "The Enchanted Garden Inn ",
                                "Antique Palms Resort ",
                                "Beachwalk Hotel ",
                                "Heartland Inn ",
                                "The James New York Guest House ",
                                "Holly House Suites ",
                                "Olympus Motel ",
                                "The Lodge at Sea Island B&B ",
                                "Sonesta Resort ",
                                "Fresh Wave Hotel ",
                                "Hapuna Beach Inn ",
                                "Sea Horizon Guest House ",
                                "Ace Suites ",
                                "Seascape Motel ",
                                "Hollywood B&B ",
                                "Enchanted Isles Resort ",
                                "Lustrio Hotel ",
                                "Belmond Hotel Splendido Inn ",
                                "Shoreline Guest House ",
                                "The Quest Suites ",
                                "The Society Motel ",
                                "The Neighborhood B&B ",
                                "The Cottage Resort ",
                                "Aloft Hotel ",
                                "Hotel Rose Inn ",
                                "The Westin Guest House "
                            ],
                            "isData": true
                        },
                        {
                            "name": "END",
                            "values": [
                                ". ",
                                ". ",
                                ". ",
                                " ",
                                " ",
                                "; "
                            ],
                            "isData": false
                        }
                    ],
                    [
                        {
                            "name": "IWill_fillers",
                            "values": [
                                "It is for ",
                                "There will be ",
                                "We will be ",
                                "We are ",
                                "There is ",
                                "Participants : ",
                                "Travelers : "
                            ],
                            "isData": false
                        },
                        {
                            "name": "booking_numberPersons",
                            "values": [
                                "1 person ",
                                "2 people ",
                                "3 travelers ",
                                "4 persons ",
                                "5 people ",
                                "6 person ",
                                "7 traveler ",
                                "a traveler ",
                                "one traveler "
                            ],
                            "isData": true
                        },
                        {
                            "name": "AND",
                            "values": [
                                ", ",
                                " ",
                                "and ",
                                "and ",
                                "and ",
                                ", "
                            ],
                            "isData": false
                        },
                        {
                            "name": "booking_numberKids",
                            "values": [
                                "1 kid ",
                                "2 childs ",
                                "3 infants ",
                                "4 kids ",
                                "5 childs ",
                                "6 kids ",
                                "7 kids ",
                                "14 kids ",
                                "27 childs ",
                                "one child "
                            ],
                            "isData": true
                        }
                    ],
                    [
                        {
                            "name": "IArrive_fillers",
                            "values": [
                                "We plan to arrive on the ",
                                "We will arrive on the ",
                                "My arrival date is the ",
                                "Our arrival date is the ",
                                "My arrival date will be the ",
                                "Our arrival date will be the ",
                                "I shoud arrive on the ",
                                "We should arrive on the ",
                                "I will be checking in the ",
                                "My check in is on the "
                            ],
                            "isData": false
                        },
                        {
                            "name": "date_arrivalDate",
                            "values": [
                                "04/11/2022 ",
                                "07/10/20222 ",
                                "08/01/2023 ",
                                "05/11/2022 ",
                                "13/12/2022 ",
                                "12/12/2022 ",
                                "10/12/2022 "
                            ],
                            "isData": true
                        },
                        {
                            "name": "IDepart_fillers",
                            "values": [
                                "we will leave on the ",
                                "I will leave on the ",
                                "I plan to go on the ",
                                "our departure is the ",
                                "we will leave on the ",
                                "our departure date is the ",
                                "I will leave on the ",
                                "my departure date is the ",
                                "I plan to leave on the ",
                                "I plan to check out the ",
                                "I will check out the ",
                                "we will check out the "
                            ],
                            "isData": false
                        },
                        {
                            "name": "date_departureDate",
                            "values": [
                                "04/11/2022 ",
                                "07/10/20222 ",
                                "08/01/2023 ",
                                "05/11/2022 ",
                                "13/12/2022 ",
                                "12/12/2022 ",
                                "10/12/2022 "
                            ],
                            "isData": true
                        },
                        {
                            "name": "AND",
                            "values": [
                                ", ",
                                " ",
                                "and ",
                                "and ",
                                "and ",
                                ", "
                            ],
                            "isData": false
                        },
                        {
                            "name": "IStay_fillers",
                            "values": [
                                "I will stay ",
                                "we will stay ",
                                "for ",
                                "the length of my stay is ",
                                "the length of our stay is ",
                                "the length of my stay will be ",
                                "for the duration of ",
                                "I plan to stay ",
                                "we plan to stay "
                            ],
                            "isData": false
                        },
                        {
                            "name": "date_numberNights",
                            "values": [
                                "1 night ",
                                "2 nights ",
                                "3 days ",
                                "4 nights ",
                                "5 nights ",
                                "6 days ",
                                "7 nights ",
                                "14 kids ",
                                "27 nights ",
                                "one child "
                            ],
                            "isData": true
                        },
                        {
                            "name": "END",
                            "values": [
                                ". ",
                                ". ",
                                ". ",
                                " ",
                                " ",
                                "; "
                            ],
                            "isData": false
                        }
                    ],
                    [
                        {
                            "name": "Whatever_fillers",
                            "values": [
                                "I should feel obliged if you could confirm the above reservation at the earliest.",
                                "Let me know about your room and service charges.",
                                "As we would like to book at the earliest, please confirm as soon as possible.",
                                "May I ask if breakfast is included in the price ? ",
                                "Can you confirm if it's possible or not ? ",
                                "If possible, we would like to have a nice view from our room as well.",
                                "We may need a parking spot as well if possible.",
                                "I hope it's possible, as I saw your establishment is very well rated on Booking.com.",
                                "We can also change a little bit our dates based on the availabilities of the establishement.",
                                "As these dates may change, do you know if it's possible to change them after the reservation ?",
                                "We also would like to have the breakfast in our room if possible.",
                                "We may arrive during the night. I hope it's possible and someone will be there to welcome us.",
                                "Could you please let us know if we can book at these dates ? "
                            ],
                            "isData": false
                        }
                    ],
                    [
                        {
                            "name": "IAm_fillers",
                            "values": [
                                "I am ",
                                "My name is ",
                                "Let me present myself : ",
                                "Let me introduce myself : ",
                                "My full name is "
                            ],
                            "isData": false
                        },
                        {
                            "name": "customer_firstname",
                            "values": [
                                "Pierre ",
                                "Philippe ",
                                "Alain ",
                                "Nathalie ",
                                "Monique ",
                                "Sylvie ",
                                "Françoise ",
                                "Christophe ",
                                "Jacques ",
                                "Martine ",
                                "Laurent ",
                                "Frédéric ",
                                "Stéphane ",
                                "Sébastien ",
                                "Julien ",
                                "Pascal ",
                                "Thierry ",
                                "François ",
                                "Olivier ",
                                "René ",
                                "Sandrine ",
                                "Véronique ",
                                "Céline ",
                                "Jeanne ",
                                "Dominique ",
                                "Didier ",
                                "Marc ",
                                "Guillaume ",
                                "Georges ",
                                "Serge ",
                                "Aurélie ",
                                "Antoine ",
                                "Yves ",
                                "Virginie ",
                                "Henri ",
                                "Corinne ",
                                "Romain ",
                                "Yvette ",
                                "Franck ",
                                "Maxime ",
                                "Élodie ",
                                "Gilles ",
                                "Christelle ",
                                "Colette ",
                                "Claudine ",
                                "Cécile ",
                                "Paulette ",
                                "Suzanne ",
                                "Geneviève ",
                                "Josette ",
                                "Claire ",
                                "Andrée ",
                                "Nadine ",
                                "Mathieu ",
                                "Bernadette ",
                                "Renée ",
                                "Thérèse ",
                                "Delphine ",
                                "Patrice ",
                                "Fabrice ",
                                "Hervé ",
                                "Arnaud ",
                                "Sylvain ",
                                "Odette ",
                                "Josiane ",
                                "Lucie ",
                                "Mireille ",
                                "Damien ",
                                "Yvonne ",
                                "Marine ",
                                "Gisèle ",
                                "Benoît ",
                                "Manon ",
                                "Marcelle ",
                                "Carole ",
                                "Fabienne ",
                                "Marguerite ",
                                "Pascale ",
                                "Fabien ",
                                "Éliane ",
                                "Mathilde ",
                                "Séverine ",
                                "Raymonde ",
                                "Micheline ",
                                "Joëlle ",
                                "Loïc ",
                                "Adrien ",
                                "Angélique ",
                                "Lucien ",
                                "Odile ",
                                "Maël ",
                                "Baptiste ",
                                "Alexis"
                            ],
                            "isData": true
                        },
                        {
                            "name": "customer_lastname",
                            "values": [
                                "Martin ",
                                "Bernard ",
                                "Thomas ",
                                "Petit ",
                                "Robert ",
                                "Richard ",
                                "Durand ",
                                "Dubois ",
                                "Moreau ",
                                "Laurent ",
                                "Simon ",
                                "Michel ",
                                "Lefebvre ",
                                "Leroy ",
                                "Roux ",
                                "David ",
                                "Bertrand ",
                                "Morel ",
                                "Fournier ",
                                "Girard ",
                                "Bonnet ",
                                "Dupont ",
                                "Lambert ",
                                "Fontaine ",
                                "Rousseau ",
                                "Vincent ",
                                "Muller ",
                                "Lefevre ",
                                "Faure ",
                                "Andre ",
                                "Mercier ",
                                "Blanc ",
                                "Guerin ",
                                "Boyer ",
                                "Garnier ",
                                "Chevalier ",
                                "Francois ",
                                "Legrand ",
                                "Gauthier ",
                                "Garcia ",
                                "Perrin ",
                                "Robin ",
                                "Clement ",
                                "Morin ",
                                "Nicolas ",
                                "Henry ",
                                "Roussel ",
                                "Mathieu ",
                                "Gautier ",
                                "Masson"
                            ],
                            "isData": true
                        },
                        {
                            "name": "AND",
                            "values": [
                                ", ",
                                " ",
                                "and ",
                                "and ",
                                "and ",
                                ", "
                            ],
                            "isData": false
                        },
                        {
                            "name": "MyContact_fillers",
                            "values": [
                                "My Email adress is the following : ",
                                "My email : ",
                                "Contact : ",
                                "You can contact me on ",
                                "Feel free to contact me on ",
                                "My email address is ",
                                "Email address : "
                            ],
                            "isData": false
                        },
                        {
                            "name": "customer_mail",
                            "values": [
                                "mael.leboite@sap.com ",
                                "alexis.gaillot@sap.com ",
                                "baptiste.saint-andre@sap.com "
                            ],
                            "isData": true
                        },
                        {
                            "name": "END",
                            "values": [
                                ". ",
                                ". ",
                                ". ",
                                " ",
                                " ",
                                "; "
                            ],
                            "isData": false
                        }
                    ],
                    [
                        {
                            "name": "Closing_fillers",
                            "values": [
                                "Please contact me as soon as possible regarding this reservation. Thank you for your assistance in this matter. ",
                                "Kindly share the availability room details with the rates and payment mode. ",
                                "Please contact me to confirm and verify my resignation for the same. ",
                                "Would you please confirm the reservation at your earliest convenience? ",
                                "Please contact me to verify my reservation. ",
                                "I should feel obliged if you could confirm the above reservation at the earliest. Let me also know about your room and service charges. ",
                                "Please respond with confirmation on my reservation.",
                                "Please feel free to contact me sooner possible for any clarifications. ",
                                "Don't hesitate to contact me if some information are missing. ",
                                "I'm available whenever you want if you would like to discuss about the availabilities. ",
                                "You can drop me an email or call me if you have any question regarding this reservation. ",
                                "The name of your hotel has been suggested by one of my colleagues, and I hope my reservation will be possible. ",
                                "We enjoyed our last stay in your accomodation, we are super excited to book it again. "
                            ],
                            "isData": false
                        }
                    ],
                    [
                        {
                            "name": "Thanks_fillers",
                            "values": [
                                "Thank you",
                                "Thanks",
                                "Many thanks",
                                "thx",
                                "ty"
                            ],
                            "isData": false
                        }
                    ],
                    [
                        {
                            "name": "Closing_fillers",
                            "values": [
                                "Yours Sincerely",
                                "Kind Regards",
                                "Farewell",
                                "All the best",
                                "Regards"
                            ],
                            "isData": false
                        }
                    ],
                    [
                        {
                            "name": "customer_lastname",
                            "values": [
                                "Martin ",
                                "Bernard ",
                                "Thomas ",
                                "Petit ",
                                "Robert ",
                                "Richard ",
                                "Durand ",
                                "Dubois ",
                                "Moreau ",
                                "Laurent ",
                                "Simon ",
                                "Michel ",
                                "Lefebvre ",
                                "Leroy ",
                                "Roux ",
                                "David ",
                                "Bertrand ",
                                "Morel ",
                                "Fournier ",
                                "Girard ",
                                "Bonnet ",
                                "Dupont ",
                                "Lambert ",
                                "Fontaine ",
                                "Rousseau ",
                                "Vincent ",
                                "Muller ",
                                "Lefevre ",
                                "Faure ",
                                "Andre ",
                                "Mercier ",
                                "Blanc ",
                                "Guerin ",
                                "Boyer ",
                                "Garnier ",
                                "Chevalier ",
                                "Francois ",
                                "Legrand ",
                                "Gauthier ",
                                "Garcia ",
                                "Perrin ",
                                "Robin ",
                                "Clement ",
                                "Morin ",
                                "Nicolas ",
                                "Henry ",
                                "Roussel ",
                                "Mathieu ",
                                "Gautier ",
                                "Masson"
                            ],
                            "isData": true
                        },
                        {
                            "name": "customer_firstname",
                            "values": [
                                "Pierre ",
                                "Philippe ",
                                "Alain ",
                                "Nathalie ",
                                "Monique ",
                                "Sylvie ",
                                "Françoise ",
                                "Christophe ",
                                "Jacques ",
                                "Martine ",
                                "Laurent ",
                                "Frédéric ",
                                "Stéphane ",
                                "Sébastien ",
                                "Julien ",
                                "Pascal ",
                                "Thierry ",
                                "François ",
                                "Olivier ",
                                "René ",
                                "Sandrine ",
                                "Véronique ",
                                "Céline ",
                                "Jeanne ",
                                "Dominique ",
                                "Didier ",
                                "Marc ",
                                "Guillaume ",
                                "Georges ",
                                "Serge ",
                                "Aurélie ",
                                "Antoine ",
                                "Yves ",
                                "Virginie ",
                                "Henri ",
                                "Corinne ",
                                "Romain ",
                                "Yvette ",
                                "Franck ",
                                "Maxime ",
                                "Élodie ",
                                "Gilles ",
                                "Christelle ",
                                "Colette ",
                                "Claudine ",
                                "Cécile ",
                                "Paulette ",
                                "Suzanne ",
                                "Geneviève ",
                                "Josette ",
                                "Claire ",
                                "Andrée ",
                                "Nadine ",
                                "Mathieu ",
                                "Bernadette ",
                                "Renée ",
                                "Thérèse ",
                                "Delphine ",
                                "Patrice ",
                                "Fabrice ",
                                "Hervé ",
                                "Arnaud ",
                                "Sylvain ",
                                "Odette ",
                                "Josiane ",
                                "Lucie ",
                                "Mireille ",
                                "Damien ",
                                "Yvonne ",
                                "Marine ",
                                "Gisèle ",
                                "Benoît ",
                                "Manon ",
                                "Marcelle ",
                                "Carole ",
                                "Fabienne ",
                                "Marguerite ",
                                "Pascale ",
                                "Fabien ",
                                "Éliane ",
                                "Mathilde ",
                                "Séverine ",
                                "Raymonde ",
                                "Micheline ",
                                "Joëlle ",
                                "Loïc ",
                                "Adrien ",
                                "Angélique ",
                                "Lucien ",
                                "Odile ",
                                "Maël ",
                                "Baptiste ",
                                "Alexis"
                            ],
                            "isData": true
                        }
                    ]
                ]
            },
            {
                id : "f@1664302306283",
                name : "Somewhat Structured",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                sentences : []
            },
            {
                id : "f@1664302306993",
                name : "e-Mail 2.0",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                sentences : []
            }
        ]
    },{
        id : "dm@1664293117351",
        name : "Cover Letters",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    
        fillers : [{
            name : "customer_firstname",
            values : ["Pierre","Philippe","Alain","Nathalie","Monique","Sylvie","Françoise","Christophe","Jacques","Martine","Laurent","Frédéric","Stéphane","Sébastien","Julien","Pascal","Thierry","François","Olivier","René","Sandrine","Véronique","Céline","Jeanne","Dominique","Didier","Marc","Guillaume","Georges","Serge","Aurélie","Antoine","Yves","Virginie","Henri","Corinne","Romain","Yvette","Franck","Maxime","Élodie","Gilles","Christelle","Colette","Claudine","Cécile","Paulette","Suzanne","Geneviève","Josette","Claire","Andrée","Nadine","Mathieu","Bernadette","Renée","Thérèse","Delphine","Patrice","Fabrice","Hervé","Arnaud","Sylvain","Odette","Josiane","Lucie","Mireille","Damien","Yvonne","Marine","Gisèle","Benoît","Manon","Marcelle","Carole","Fabienne","Marguerite","Pascale","Fabien","Éliane","Mathilde","Séverine","Raymonde","Micheline","Joëlle","Loïc","Adrien","Angélique","Lucien","Odile","Maël","Baptiste","Alexis"],
            isData : true
        },{
            name : "customer_lastname",
            values :  ["Martin","Bernard","Thomas","Petit","Robert","Richard","Durand","Dubois","Moreau","Laurent","Simon","Michel","Lefebvre","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Dupont","Lambert","Fontaine","Rousseau","Vincent","Muller","Lefevre","Faure","Andre","Mercier","Blanc","Guerin","Boyer","Garnier","Chevalier","Francois","Legrand","Gauthier","Garcia","Perrin","Robin","Clement","Morin","Nicolas","Henry","Roussel","Mathieu","Gautier","Masson"],
            isData : true
        },{
            name : "hotel_roomtype",
            values : ["single room", "double room", "twin room", "triple room", "quad room","King room", "queen room", "presidential suite", "suite", "suite room", "duplex room"],
            isData : true
        },{
            name : "Greetings_fillers",
            values : ["Hi", "Hello", "Good morning", "Good evening", "Good day", "Dear Sir", "Dear Madam", "Dear Madam / Sir", ""],
            isData : false
        },{
            name : "Wanna_fillers",
            values : ["I would like to book ", "I planned to book ", "I would like ", "I want ", "I am booking ", "I would like to make a reservation of ", "We would like to make a reservation of ", "I am, hereby, booking ", "My booking : ", "I want to book ", "Reservation : ", "Please book ", "I would like to reserve ", "I want to reserve ", "My booking is the following : ", "My reservation is the following : ", "My reservation : ", "I would like accommodation for "],
            isData : false
        }],

        formats : [
            {
                id : "f@1664302315461",
                name : "Random Text",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                sentences : []
            },
            {
                id : "f@1664302316627",
                name : "CV like",
                description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                sentences : []
            }
        ]
    },{
        id : "dm@1664293119998",
        name : "Tickets",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    
        fillers : [{
            name : "customer_firstname",
            values : ["Pierre","Philippe","Alain","Nathalie","Monique","Sylvie","Françoise","Christophe","Jacques","Martine","Laurent","Frédéric","Stéphane","Sébastien","Julien","Pascal","Thierry","François","Olivier","René","Sandrine","Véronique","Céline","Jeanne","Dominique","Didier","Marc","Guillaume","Georges","Serge","Aurélie","Antoine","Yves","Virginie","Henri","Corinne","Romain","Yvette","Franck","Maxime","Élodie","Gilles","Christelle","Colette","Claudine","Cécile","Paulette","Suzanne","Geneviève","Josette","Claire","Andrée","Nadine","Mathieu","Bernadette","Renée","Thérèse","Delphine","Patrice","Fabrice","Hervé","Arnaud","Sylvain","Odette","Josiane","Lucie","Mireille","Damien","Yvonne","Marine","Gisèle","Benoît","Manon","Marcelle","Carole","Fabienne","Marguerite","Pascale","Fabien","Éliane","Mathilde","Séverine","Raymonde","Micheline","Joëlle","Loïc","Adrien","Angélique","Lucien","Odile","Maël","Baptiste","Alexis"],
            isData : true
        },{
            name : "customer_lastname",
            values :  ["Martin","Bernard","Thomas","Petit","Robert","Richard","Durand","Dubois","Moreau","Laurent","Simon","Michel","Lefebvre","Leroy","Roux","David","Bertrand","Morel","Fournier","Girard","Bonnet","Dupont","Lambert","Fontaine","Rousseau","Vincent","Muller","Lefevre","Faure","Andre","Mercier","Blanc","Guerin","Boyer","Garnier","Chevalier","Francois","Legrand","Gauthier","Garcia","Perrin","Robin","Clement","Morin","Nicolas","Henry","Roussel","Mathieu","Gautier","Masson"],
            isData : true
        },{
            name : "hotel_roomtype",
            values : ["single room", "double room", "twin room", "triple room", "quad room","King room", "queen room", "presidential suite", "suite", "suite room", "duplex room"],
            isData : true
        },{
            name : "Greetings_fillers",
            values : ["Hi", "Hello", "Good morning", "Good evening", "Good day", "Dear Sir", "Dear Madam", "Dear Madam / Sir", ""],
            isData : false
        },{
            name : "Wanna_fillers",
            values : ["I would like to book ", "I planned to book ", "I would like ", "I want ", "I am booking ", "I would like to make a reservation of ", "We would like to make a reservation of ", "I am, hereby, booking ", "My booking : ", "I want to book ", "Reservation : ", "Please book ", "I would like to reserve ", "I want to reserve ", "My booking is the following : ", "My reservation is the following : ", "My reservation : ", "I would like accommodation for "],
            isData : false
        }],
        formats : []
    }];

    var iof_data_model = {
        id : 0,
        name : "",
        description : "",
    
        fillers : [],
        formats : []
    };

    window.addEventListener('load', (event) => {
        console.log('Loaded page');
        createHTML_selectdataModel();
        //createHTML_CreateDataModel();
        //createHTML_CreateFormat();
    });
    
}

// ############################ VAR DECLARATION ####################################################################################################################################################################################################
var data_models = [];

var data_model = {
    id : 0,
    name : "",
    description : "",

    fillers : [],
    formats : []
}

//formats is filled with 1-n format
var formats = [];

var format = {
    id : 0,
    name : "",
    description : "",
    sentences : []
}

//format is made up of sentences
var sentence = [];

//sentence is made up of fillers
//a filler can be isData : part of DataModel
//if not isData, then it is only a filler
var filler = {
    name : "",
    values : [],
    isData : true
};



// ############################ DATA MODEL SELECTOR UI ####################################################################################################################################################################################################
// ############################ DATA MODEL SELECTOR UI ####################################################################################################################################################################################################
// ############################ DATA MODEL SELECTOR UI ####################################################################################################################################################################################################
// ############################ DATA MODEL SELECTOR UI ####################################################################################################################################################################################################

function createHTML_selectdataModel(){//#container
    //empty the container
    document.querySelector("#container").innerHTML = "";

    //fill up the container
    let html=`
    <div id="selectModel">
        <div class="title">
            SELECT A DATA MODEL
        </div>
        <div class="tiles">
            <div id="createDataModel" class="tile inline">
                <div class="title">CREATE A NEW DATA MODEL</div>
                <img class="center" name="icons" src="img/287103_UX_Tool_Suite_R_blue.png">
            </div>
        </div>
        <hr>
        <div class="buttons">
            <div class="right">
                <button id="backButton" type="button" class="button inline ko">BACK</button>
            </div>
        </div>
    </div>
    `;

    /* <button id="continueButton" type="button" class="button inline ok">CONTINUE</button> */

    document.querySelector("#container").insertAdjacentHTML("beforeend", html);

    document.getElementById("createDataModel").addEventListener("click", function (thisEvent) {
        GOTO_create_dataModel();
    });

    document.getElementById("backButton").addEventListener("click", function (thisEvent) {
        GOTO_Menu();
    });

    createTiles_dataModel("#selectModel .tiles");
}

function createTile_dataModel(id,model){//"#selectModel .tiles"
    let html = `
    <div id="`+model.id+`" class="tile inline">
        <div class="title">`+model.name+`</div>
        <div class="description">`+model.description+`</div>
        <div class="delete">delete</div>
    </div>`;

    document.querySelector(id).insertAdjacentHTML("beforeend", html);

    document.getElementById(model.id).addEventListener("click", function (thisEvent) {
        
        
        if(thisEvent.target.className.indexOf("delete")>-1){
            // DELETE A DATA MODEL
            let element = thisEvent.target.closest(".tile");
            deleteInstance_dataModel(element.id)
            element.remove();
            return;
        } else {
            // SELECT A DATA MODEL
            let element = thisEvent.target.closest(".tile");
            //GOTO_select_format(element.id);
            createHTML_CreateDataModel(element.id)
            return;
        }
    });
}

function createTiles_dataModel(id){//"#selectModel .tiles"
    for(let i=0 ; i <iof_data_models.length ; i++){
        createTile_dataModel(id,iof_data_models[i]);
    }
}

//instance Handling
function deleteInstance_dataModel(id){
    for(let i=0 ; i < iof_data_models.length ; i++){
        if(iof_data_models[i].id == id){
            iof_data_models.splice(i,1);
            console.log("Data Model "+id+" deleted");
            current_data_model_index = 0;
            return;
        }
    }
}

function GOTO_Menu(){
    //TODO GOING BACK TO MENU
    window.history.back();
}


function GOTO_selectAModel(){
    //TODO GOING BACK TO MENU
    console.log("GOTO_selectAModel");
    createHTML_selectdataModel("#container");
}

function getModelIndexfromId(id){
    //transform format id into index within models
    for(let i=0 ; i < iof_data_models.length ; i++){
        if(iof_data_models[i].id == id){
            return i;
        }
    }
}


// ############################ DATA MODEL GENERATOR UI ####################################################################################################################################################################################################
// ############################ DATA MODEL GENERATOR UI ####################################################################################################################################################################################################
// ############################ DATA MODEL GENERATOR UI ####################################################################################################################################################################################################
// ############################ DATA MODEL GENERATOR UI ####################################################################################################################################################################################################

function GOTO_create_dataModel(){
    console.log("GOTO_create_dataModel");
    createHTML_CreateDataModel();
}


function createHTML_CreateDataModel(id){//#container
    if(id === undefined){
        isNew = true;
        iof_data_model = {
            id : "dm@"+new Date().getTime(),
            name : "",
            description : "",
        
            fillers : [],
            formats : []
        }

        iof_data_models.push(iof_data_model);
        current_data_model_index = iof_data_models.length-1;
    } else {
        current_data_model_index = getModelIndexfromId(id);
    }

    
    //empty the container
    document.querySelector("#container").innerHTML = "";

    //fill up the container
    let html=`
    <div id="createModel">
    <div class="title">
      CREATE A DATA MODEL
    </div>
    <table class="tableHead">
      <tr>
        <td><div id="modelName">Name</div></td>
        <td><input id="modelNameValue" value="`+iof_data_models[current_data_model_index].name+`"></input></td>
      </tr>
      <tr>
        <td><div id="modelDescription">Description</div></td>
        <td><input id="modelDescriptionValue" value="`+iof_data_models[current_data_model_index].description+`"></input></td>
      </tr>
    </table>
    <hr>
    <div id="dataModelList" class="">
      <div>
        <table id="tableList" class="tableList">
          <tr>
            <th>Label</th>
            <th>Values</th>
            <th>Data</th>
            <th></th>
          </tr>
        </table>
      </div>
      <div class="bottom">
        <!-- <img class="center" name="icons" src="img/287103_UX_Tool_Suite_R_blue.png"> -->
        <button id="addLine" class="button ok">+</button>
      </div>
    </div>
    <hr>
    <div class="buttons">
      <div class="right">
        <button id="backButton" type="button" class="button inline ko">BACK</button>
        <button id="continueButton" type="button" class="button inline ok">CONTINUE</button>
        
      </div>
    </div>
  </div>
    `;

    document.querySelector("#container").insertAdjacentHTML("beforeend", html);

    if(!isNew){
        feed_dataModel();
    }

    document.getElementById("modelNameValue").addEventListener("keyup", function (thisEvent) {
        let val = thisEvent.target.value;
        try{
            val = val.trim();
        } catch(err) {
            val = "";
        }
        if(val != "" && val != null){
            isNew = false
        }
        iof_data_models[current_data_model_index].name = val;
    });

    document.getElementById("modelDescriptionValue").addEventListener("keyup", function (thisEvent) {
        iof_data_models[current_data_model_index].description = thisEvent.target.value;
    });

    document.getElementById("addLine").addEventListener("click", function (thisEvent) {
        let filler = {
            name : "",
            values : "",
            isData : false
        };

        //Add a line
        var table = document.getElementById("tableList");
        var row = table.insertRow(-1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        var cell1rowId = "cell1row"+(table.rows.length-2);
        var cell2rowId = "cell2row"+(table.rows.length-2);
        var cell3rowId = "cell3row"+(table.rows.length-2);
        var cell4rowId = "cell4row"+(table.rows.length-2);

        cell1.innerHTML = `<td><input id="`+cell1rowId+`" ></input></td>`;
        cell2.innerHTML = `<td><input id="`+cell2rowId+`" ></input></td>`;
        cell3.innerHTML = `<td><input id="`+cell3rowId+`" type="checkbox"></input></td>`;
        cell4.innerHTML = `<td><button id="`+cell4rowId+`" class="button ko">-</button></td>`;

        iof_data_models[current_data_model_index].fillers.push(filler);

        document.getElementById(cell1rowId).addEventListener("keyup", function (thisEvent) {
            //update
            var rowIndex = thisEvent.target.closest("tr").rowIndex-1;//in js object >>> -1
            iof_data_models[current_data_model_index].fillers[rowIndex].name = thisEvent.target.value;
            //console.log(iof_data_models[current_data_model_index].fillers);
        });


        document.getElementById(cell2rowId).addEventListener("keyup", function (thisEvent) {
            //update
            var rowIndex = thisEvent.target.closest("tr").rowIndex-1;//in js object >>> -1
            try{
                var val = JSON.parse("[" + thisEvent.target.value + "]")
            } catch(err){
                val = iof_data_models[current_data_model_index].fillers[rowIndex].values;
            }
            iof_data_models[current_data_model_index].fillers[rowIndex].values = val;
            //console.log(iof_data_models[current_data_model_index].fillers);
        });


        document.getElementById(cell3rowId).addEventListener("click", function (thisEvent) {
            //update
            var rowIndex = thisEvent.target.closest("tr").rowIndex-1;//in js object >>> -1
            iof_data_models[current_data_model_index].fillers[rowIndex].isData = thisEvent.target.checked;
            //console.log(iof_data_models[current_data_model_index].fillers);
        });


        document.getElementById(cell4rowId).addEventListener("click", function (thisEvent) {
            //delete a line
            var rowIndex = thisEvent.target.closest("tr").rowIndex-1;//in js object >>> -1
            iof_data_models[current_data_model_index].fillers.splice(rowIndex,1);
            document.getElementById("tableList").deleteRow(rowIndex+1);//in rowIndex count the th ==> +1
        });
    });


    document.getElementById("backButton").addEventListener("click", function (thisEvent) {
        if(isNew){
            deleteInstance_dataModel(iof_data_models[current_data_model_index].id);
            isNew = false;
        }
        //console.log(iof_data_models);
        createHTML_selectdataModel();
    });

    document.getElementById("continueButton").addEventListener("click", function (thisEvent) {
        createHTML_selectFormat(current_data_model_index);
    });

    function feed_dataModel(){
        for(let i=0 ; i<iof_data_models[current_data_model_index].fillers.length ; i++){
            var table = document.getElementById("tableList");
            var row = table.insertRow(-1);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            var cell1rowId = "cell1row"+(table.rows.length-2);
            var cell2rowId = "cell2row"+(table.rows.length-2);
            var cell3rowId = "cell3row"+(table.rows.length-2);
            var cell4rowId = "cell4row"+(table.rows.length-2);

            cell1.innerHTML = `<td><input id="`+cell1rowId+`" ></input></td>`;
            cell2.innerHTML = `<td><input id="`+cell2rowId+`" ></input></td>`;
            cell3.innerHTML = `<td><input id="`+cell3rowId+`" type="checkbox"></input></td>`;
            cell4.innerHTML = `<td><button id="`+cell4rowId+`" class="button ko">-</button></td>`;

            document.getElementById(cell1rowId).value = iof_data_models[current_data_model_index].fillers[i].name;
            document.getElementById(cell2rowId).value = JSON.stringify(iof_data_models[current_data_model_index].fillers[i].values).slice(0,-1).slice(1);
            document.getElementById(cell3rowId).checked = iof_data_models[current_data_model_index].fillers[i].isData;

            document.getElementById(cell1rowId).addEventListener("keyup", function (thisEvent) {
                //update
                var rowIndex = thisEvent.target.closest("tr").rowIndex-1;//in js object >>> -1
                iof_data_models[current_data_model_index].fillers[rowIndex].name = thisEvent.target.value;
                //console.log(iof_data_models[current_data_model_index].fillers);
            });
    
    
            document.getElementById(cell2rowId).addEventListener("keyup", function (thisEvent) {
                //update
                var rowIndex = thisEvent.target.closest("tr").rowIndex-1;//in js object >>> -1
                try{
                    var val = JSON.parse("[" + thisEvent.target.value + "]")
                } catch(err){
                    val = iof_data_models[current_data_model_index].fillers[rowIndex].values;
                }
                iof_data_models[current_data_model_index].fillers[rowIndex].values = val;
                //console.log(iof_data_models[current_data_model_index].fillers);
            });
    
    
            document.getElementById(cell3rowId).addEventListener("click", function (thisEvent) {
                //update
                var rowIndex = thisEvent.target.closest("tr").rowIndex-1;//in js object >>> -1
                iof_data_models[current_data_model_index].fillers[rowIndex].isData = thisEvent.target.checked;
                //console.log(iof_data_models[current_data_model_index].fillers);
            });
    
    
            document.getElementById(cell4rowId).addEventListener("click", function (thisEvent) {
                //delete a line
                var rowIndex = thisEvent.target.closest("tr").rowIndex-1;//in js object >>> -1
                iof_data_models[current_data_model_index].fillers.splice(rowIndex,1);
                document.getElementById("tableList").deleteRow(rowIndex+1);//in rowIndex count the th ==> +1
            });
        }
    }

    /* document.getElementById("goto_menu").addEventListener("click", function (thisEvent) {
        GOTO_Menu();
    }); */

    //createTiles_dataModel("#selectModel .tiles");
}


// ############################ FORMAT SELECTOR UI ####################################################################################################################################################################################################
// ############################ FORMAT SELECTOR UI ####################################################################################################################################################################################################
// ############################ FORMAT SELECTOR UI ####################################################################################################################################################################################################
// ############################ FORMAT SELECTOR UI ####################################################################################################################################################################################################

/* function GOTO_select_format(id){
    console.log("GOTO_select_format");

    let index = getModelIndexfromId(id);

    createHTML_format(index);
} */

function createHTML_selectFormat(){//#container
    //empty the container

    //current_data_model_index = getModelIndexfromId(id);
    document.querySelector("#container").innerHTML = "";

    //fill up the container
    let html=  `
    <div id="selectedData">
        <div class="selectedDataModel">
            <div class="title">DATA MODEL</div>
            <div classe="name">`+iof_data_models[current_data_model_index].name+`</div>
            <div class="description">`+iof_data_models[current_data_model_index].description+`</div>
        </div>
        <hr>
    <div>
    <div id="selectFormat">
        <div class="title">
            SELECT A FORMAT
        </div>
        <div class="tiles">
            <div id="createFormat" class="tile inline">
                <div class="title">CREATE A NEW FORMAT</div>
                <img class="center" name="icons" src="img/287103_UX_Tool_Suite_R_blue.png">
            </div>
        </div>
        <hr>
        <div class="buttons">

        <div class="right">
            <button id="backButton" type="button" class="button inline ko">BACK</button>
            <button id="continueButton" type="button" class="button inline ok">CONTINUE</button>
        </div>
    </div>
    `;

    document.querySelector("#container").insertAdjacentHTML("beforeend", html);

    document.getElementById("createFormat").addEventListener("click", function (thisEvent) {
        GOTO_create_format();
    });

    document.getElementById("backButton").addEventListener("click", function (thisEvent) {
        GOTO_selectAModel();
    });

    createTiles_format("#selectFormat .tiles");
}

function createTile_format(id,format){//"#selectFormat .tiles"
    let html = `
    <div id="`+format.id+`" class="tile inline">
        <div class="title">`+format.name+`</div>
        <div class="description">`+format.description+`</div>
        <div class="delete">delete</div>
    </div>`;

    document.querySelector(id).insertAdjacentHTML("beforeend", html);

    document.getElementById(format.id).addEventListener("click", function (thisEvent) {
        
        
        if(thisEvent.target.className.indexOf("delete")>-1){
            // DELETE A FORMAT
            let element = thisEvent.target.closest(".tile");
            deleteInstance_format(element.id)
            element.remove();
            return;
        } else {
            // SELECT A FORMAT
            let element = thisEvent.target.closest(".tile");
            GOTO_generate_dataset(element.id);
            return;
        }
    });
}

function createTiles_format(id){//"#selectFormat .tiles"
    for(let i=0 ; i <iof_data_models[current_data_model_index].formats.length ; i++){
        createTile_format(id,iof_data_models[current_data_model_index].formats[i]);
    }
}

//instance Handling
function deleteInstance_format(id){
    for(let i=0 ; i < iof_data_models[current_data_model_index].formats.length ; i++){
        if(iof_data_models[current_data_model_index].formats[i].id == id){
            iof_data_models[current_data_model_index].formats.splice(i,1);
            console.log("Data Model "+id+" deleted");
            return;
        }
    }
}


function getFormatIndexfromId(id){
    //transform format id into index within models
    for(let i=0 ; i < iof_data_models[current_data_model_index].formats.length ; i++){
        if(iof_data_models[current_data_model_index].formats[i].id == id){
            return i;
        }
    }
}


// ############################ FORMAT GENERATOR UI ####################################################################################################################################################################################################
// ############################ FORMAT GENERATOR UI ####################################################################################################################################################################################################
// ############################ FORMAT GENERATOR UI ####################################################################################################################################################################################################
// ############################ FORMAT GENERATOR UI ####################################################################################################################################################################################################

function GOTO_create_format(){
    console.log("GOTO_create_format");
    createHTML_CreateFormat();
}

function GOTO_generate_dataset(id){
    console.log("GOTO_generate_dataset "+id);
    createHTML_CreateFormat(id);
}

function createHTML_CreateFormat(id){//#container
    if(id === undefined){
        isNew = true;
        
        var format = {
            id : "f@"+new Date().getTime(),
            name : "",
            description : "",
            sentences : []
        }

        iof_data_models[current_data_model_index].formats.push(format);
        current_data_format_index = iof_data_models[current_data_model_index].formats.length-1;
    } else {
        current_data_format_index = getFormatIndexfromId(id);
    }

    
    //empty the container
    document.querySelector("#container").innerHTML = "";

    //fill up the container
    let html=`
    <div id="createModel">
        <div class="title">
            CREATE A DATASET
        </div>
        <div class="selectedDataModel">
            <div class="title">DATA MODEL</div>
            <div classe="name">`+iof_data_models[current_data_model_index].name+`</div>
            <div class="description">`+iof_data_models[current_data_model_index].description+`</div>
        </div>

        <hr>

        <div class="title">
            DATASET
        </div>
        <table class="tableHead">
            <tr>
            <td><div id="formatName">Name</div></td>
            <td><input id="formatNameValue" value="`+iof_data_models[current_data_model_index].formats[current_data_format_index].name+`"></input></td>
            </tr>
            <tr>
            <td><div id="formatDescription">Description</div></td>
            <td><input id="formatDescriptionValue" value="`+iof_data_models[current_data_model_index].formats[current_data_format_index].description+`"></input></td>
            </tr>
        </table>
        <hr>
        <div id="dataset" class="">
            <div id='sentences'>
            </div>
            
            <div class="bottom">
                <button id="addSentence" class="button ok">+</button>
            </div>

            <hr>
            <div class="buttons">
                <div class="right">
                    <button id="backButton" type="button" class="button inline ko">BACK</button>
                    <button id="continueButton" type="button" class="button inline ok">GENERATE</button>
                </div>
            </div>
            <div id="datasetResult">
            <div>
        </div>
    </div>
    `;

    document.querySelector("#container").insertAdjacentHTML("beforeend", html);

    if(!isNew){
        feed_dataFormat();
    }

    document.getElementById("formatNameValue").addEventListener("keyup", function (thisEvent) {
        let val = thisEvent.target.value;
        try{
            val = val.trim();
        } catch(err) {
            val = "";
        }
        if(val != "" && val != null){
            isNew = false
        }
        iof_data_models[current_data_model_index].formats[current_data_format_index].name = val;
    });

    document.getElementById("formatDescriptionValue").addEventListener("keyup", function (thisEvent) {
        iof_data_models[current_data_model_index].formats[current_data_format_index].description = thisEvent.target.value;
    });

    document.getElementById("addSentence").addEventListener("click", function (thisEvent) {
        let filler = {
            name : "",
            values : "",
            isData : false
        };


        let options = ``;

        for(let i=0 ; i < iof_data_models[current_data_model_index].fillers.length ; i++){
            options += `<option class="`+(iof_data_models[current_data_model_index].fillers[i].isData?"isdata":"")+`" value="filler`+i+`">`+iof_data_models[current_data_model_index].fillers[i].name+`</option>`;
        }
        

        let currentID = iof_data_models[current_data_model_index].formats[current_data_format_index].sentences.length;
        let sentenceID = "sentence"+currentID;
        let nameID = "selectName"+currentID;
        let selectID = "selectID"+currentID;

        let html=`
        <div id="`+sentenceID+`" class="sentence">
            <select class="inline" name="`+nameID+`" id="`+selectID+`">`
            +options+`
            </select>
        </div>
        `;

        iof_data_models[current_data_model_index].formats[current_data_format_index].sentences.push([]);
        document.querySelector("#sentences").insertAdjacentHTML("beforeend", html);

        document.querySelector("#"+selectID).addEventListener("change", function (thisEvent) {
            let i = thisEvent.target.selectedIndex;
            let html=`
            <div class="inline filler `+(iof_data_models[current_data_model_index].fillers[i].isData?"isdata":"")+`">`+iof_data_models[current_data_model_index].fillers[i].name+`</div>
            `;
            
            //var sentenceid = iof_data_models[current_data_model_index].formats[current_data_format_index].sentences.length-1;
            var sentenceid = thisEvent.target.closest(".sentence").id.replace('sentence','');
            iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[sentenceid].push(iof_data_models[current_data_model_index].fillers[i]);
            //console.log(iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i]);
            thisEvent.target.insertAdjacentHTML("beforebegin", html);
        });

    });


    document.getElementById("backButton").addEventListener("click", function (thisEvent) {
        if(isNew){
            deleteInstance_format(iof_data_models[current_data_model_index].formats[current_data_format_index].id);
            isNew = false;
        }
        //console.log(iof_data_models[current_data_model_index].formats);
        createHTML_selectFormat();
    });

    document.getElementById("continueButton").addEventListener("click", function (thisEvent) {
        let obj = "";
        for(let iteration=0 ; iteration<10 ; iteration++){
            obj = {
                id:iteration,
                text:"",
                "meta" :{},"annotation_approver":null,
                labels : []
            }
        
            for(let i=0 ; i<iof_data_models[current_data_model_index].formats[current_data_format_index].sentences.length ; i++){
                
                for(let y=0 ; y<iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i].length ; y++){
                    if(iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i][y].isData){
                        let x1 = obj.text.length;
                        obj.text += iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i][y].values[Math.floor(Math.random() * iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i][y].values.length)];
                        let x2 = obj.text.length;
                        obj.labels.push([x1,x2,iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i][y].name]);
                    } else {
                        obj.text += iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i][y].values[Math.floor(Math.random() * iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i][y].values.length)];
                    }
                    
                }  
            }
            dataset.push(obj);
        }
        console.log(dataset);

        var element = document.createElement("div");
        element.innerHTML = "<div>"+JSON.stringify(dataset)+"<div/>";
        document.getElementById("datasetResult").insertAdjacentElement("afterbegin",element);
    });

    function feed_dataFormat(){
        for(let i=0 ; i<iof_data_models[current_data_model_index].formats[current_data_format_index].sentences.length ; i++){

            let options = ``;

            for(let z=0 ; z < iof_data_models[current_data_model_index].fillers.length ; z++){
                options += `<option class="`+(iof_data_models[current_data_model_index].fillers[z].isData?"isdata":"")+`" value="filler`+z+`">`+iof_data_models[current_data_model_index].fillers[z].name+`</option>`;
            }

            let currentID = i;
            let sentenceID = "sentence"+currentID;
            let nameID = "selectName"+currentID;
            let selectID = "selectID"+currentID;

            let html=`
            <div id="`+sentenceID+`" class="sentence">
                <select class="inline" name="`+nameID+`" id="`+selectID+`">`
                +options+`
                </select>
            </div>
            `;

            document.querySelector("#sentences").insertAdjacentHTML("beforeend", html);

            for(let y=0 ; y<iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i].length ; y++){
                //let i = thisEvent.target.selectedIndex;
                let html=`
                <div class="inline filler `+(iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i][y].isData?"isdata":"")+`">`+iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i][y].name+`</div>
                `;
                
                //var sentenceid = iof_data_models[current_data_model_index].formats[current_data_format_index].sentences.length-1;
                //var sentenceid = thisEvent.target.closest(".sentence").id.replace('sentence','');
                //iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[sentenceid].push(iof_data_models[current_data_model_index].fillers[i]);
                //console.log(iof_data_models[current_data_model_index].formats[current_data_format_index].sentences[i]);
                document.getElementById(selectID).insertAdjacentHTML("beforebegin", html);
            }
        }
    }

    /* document.getElementById("goto_menu").addEventListener("click", function (thisEvent) {
        GOTO_Menu();
    }); */

    //createTiles_dataModel("#selectModel .tiles");

    
}


{/* <div class="sentence">
                <div class="inline filler">Greetings_fillers</div>
                <div class="inline filler isdata">customer_firstname</div>
                <div class="inline filler isdata">customer_lastname</div>
                <div class="inline filler">EXC</div>
                <select class="inline" name="cars" id="cars">
                <option class="isdata" value="volvo">Volvo</option>
                <option class="isdata" value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                </select>
            </div>
            <div class="sentence">
                <div class="inline filler">Wanna_fillers</div>
                <div class="inline filler isdata">hotel_numberRoom</div>
                <div class="inline filler isdata">hotel_roomtype</div>
                <div class="inline filler">END</div>
                <select class="inline" name="cars" id="cars">
                    <option class="isdata" value="volvo">Volvo</option>
                    <option class="isdata" value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div> */}