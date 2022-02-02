//Next up is figuring out how to print the picture along with the info when searched


//Character class
class Character {
    constructor(
        name,
        occupation,
        special_interest,
        laura_connection,
        investigation_connection,
        family
    ) {
        this.name = name,
        this.occupation = "Occupation:  " + occupation;
        this.special_interest = "Special Interest:  " + special_interest;
        this.laura_connection =
            "Connection to Laura Palmer:  " + laura_connection;
        this.investigation_connection =
            "Connection to Investigation:  " + investigation_connection;
        this.family = "Familial Connections:  " + family;
    }
    get info() {
        return this.show();
    }
    show() {
        return (
            "<li>" +
            this.name +
            "</li>" +
            "<li>" + 
            this.occupation +
            "</li>" +
            "<li>" + 
            this.special_interest +
            "</li>" +
            "<li>" + 
            this.laura_connection +
            "</li>" +
            "<li>" + 
            this.investigation_connection +
            "</li>" +
            "<li>" + 
            this.family +
            "</li>"
        );
    }
}

const character_list = [];

const container = document.getElementById('container');
const searchBar = $("#container").append("<input id='searchBar'>");
$("#searchBar").attr("type", "text");
$("#searchBar").attr("title", "searchBar");
$("#searchBar").attr("placeholder", "search");
const button = document.createElement('input');
button.id = 'submit_button';
button.value = 'submit';
button.type = 'button';
$("#container").append(button);
$("#container").append("<ul id='main-ul'></ul>");
$("#main-ul").before($("ul"));

//Main info fill-in function
function print(info) {
    $("#main-ul").html(
        "<li>" + info + "</li>"
        );
}


$("#submit_button").on("click", () => {
    let named = $("#searchBar").val().toUpperCase();
    for (let i = 0; i < character_list.length; i++) {
        let nombre = character_list[i].name.toUpperCase();
        if (nombre === named) {
            let nombre_2 = nombre.replaceAll(" ", "");
            print(character_list[i].info);
            $("#main-ul").append("<li><img src='img/" + nombre_2 + ".png'</img></li>");
        } else {
            $("#main-ul").append("<li>Nothing here</li>");
        }
    }
});
//Character variables
const laura = new Character(
    "Laura Palmer",
    "Waitress, Meals-on-Wheels delivery person, One-Eyed Jack's",
    "Prostitute, cocaine user",
    "Laura",
    "Victim; letter 'R' found under her fingernail",
    "Leland Palmer, Maddy Ferguson"
);

character_list.push(laura);

//Print function syntax
//print(laura.info);

const donna = new Character(
    "Donna Hayward",
    "Student, Meals on Wheels delivery person",
    "N/A",
    "Best friend",
    "Prone to investigate",
    "Will Hayward"
);
$("#donna-pic").hide();

character_list.push(donna);

const cooper = new Character(
    "Dale Cooper",
    "FBI, Special Agent",
    "Possible psychic with connection to the ethereal. Understanding of magic/occultism",
    "N/A",
    "FBI Investigator",
    "N/A"
);

character_list.push(cooper);

const truman = new Character(
    "Harry Truman",
    "Sheriff of Twin Peaks",
    "Deep knowledge of goings-on in town, member of Bookhouse Boys",
    "N/A",
    "Lead Investigator of Sheriff's Dept",
    "N/A"
);

character_list.push(truman);

const shelly = new Character(
    "Shelly Johnson",
    "Waitress",
    "N/A",
    "N/A",
    "N/A",
    "Leo Johnson"
);

character_list.push(shelly);

const bobby = new Character(
    "Bobby Briggs",
    "Student",
    "Cocaine dealer",
    "Love interest",
    "Ex-lover; drug connections w/ Leo Johnson",
    ""
);

character_list.push(bobby);

const ben = new Character(
    "Ben Horne",
    "Real Estate Developer",
    "Owns much of Twin Peaks",
    "In business w/ Laura's father",
    "N/A",
    "Audrey Horne, "
);

character_list.push(ben);

const audrey = new Character(
    "Audrey Horne",
    "Student",
    "N/A",
    "Fellow student",
    "Prone to investigate",
    "Benjamin Horne, "
);

character_list.push(audrey);


const will = new Character(
    "Will Hayward",
    "Town doctor",
    "N/A",
    "N/A",
    "Some forensics",
    "Donna Hayward"
);

character_list.push(will);

const norma = new Character(
    "Norma Jennings",
    "Owns and runs the Double R Diner",
    "N/A",
    "Runs Meals on Wheels program",
    "N/A",
    ""
);

character_list.push(norma);

const james = new Character(
    "James Hurley",
    "Student",
    "Member of Bookhouse Boys",
    "Love interest",
    "N/A",
    "Ed Hurley, "
);

character_list.push(james);

const ed = new Character(
    "Ed Hurley",
    "Runs town gas station",
    "Member of Bookhouse Boys",
    "N/A",
    "N/A",
    "James Hurley, "
);

character_list.push(ed);

const pete = new Character(
    "Pete Martell",
    "Lumberjack",
    "Discovered Laura's body",
    "N/A",
    "N/A",
    ""
);

character_list.push(pete);

const leland = new Character(
    "Leland Palmer",
    "Attorney",
    "N/A",
    "Laura's father",
    "N/A",
    "Laura Palmer, Maddy Ferguson, "
);

character_list.push(leland);

const josie = new Character(
    "Josie Packard",
    "Owner of Packard Sawmill",
    "N/A",
    "N/A",
    "N/A",
    "Pete Martell(in-law), Catherine Martell(in-law)"
);

character_list.push(josie);

const catherine = new Character(
    "Catherine Martell",
    "Runs Packard Sawmill",
    "N/A",
    "N/A",
    "N/A",
    "Pete Martell, Josie Packard(in-law)"
);

character_list.push(catherine);

const lucy = new Character(
    "Lucy Moran",
    "Receptionist at Sheriff's Office",
    "N/A",
    "N/A",
    "N/A",
    "N/A"
);

character_list.push(lucy);

const maddy = new Character(
    "Maddy Ferguson",
    "N/A",
    "Looks near identical to Laura Palmer",
    "Laura's cousin",
    "Prone to investigate",
    "Laura Palmer, Leland Palmer, "
);

character_list.push(maddy);

const leo = new Character(
    "Leo Johnson",
    "Truck driver",
    "Drug runner",
    "N/A",
    "Involved in drug ring",
    "Shelly Johnson"
);

character_list.push(leo);

const andy = new Character(
    "Andy Brennan",
    "Sheriff's Deputy",
    "Member of Bookhouse Boys",
    "N/A",
    "Investigator",
    "N/A"
);

character_list.push(andy);

const hawk = new Character(
    "Hawk",
    "Sheriff's Deputy Chief",
    "Member of Bookhouse Boys",
    "N/A",
    "Investigator",
    "N/A"
);

character_list.push(hawk);

const jacoby = new Character(
    "Lawrence Jacoby",
    "Psychiatrist",
    "Possible attraction to Laura",
    "Laura's psychiatrist",
    "Took possession of evidence for a time (half-heart necklace)",
    "N/A"
);

character_list.push(jacoby);

const windom = new Character(
    "Windom Earle",
    "Former FBI Special Agent",
    "Dale Cooper's former partner",
    "N/A",
    "N/A",
    "N/A"
);

character_list.push(windom);

const ronette = new Character(
    "Ronette Pulaski",
    "Student; One-Eyed Jack's",
    "Prostitute and cocaine user",
    "Laura's friend",
    "Victim of same perpetrator as Laura; Letter 'B' found under her fingernail",
    "N/A"
);

character_list.push(ronette);

const albert = new Character(
    "Albert Rosenfield",
    "FBI Forensics Specialist",
    "N/A",
    "N/A",
    "Head of forensics for the case",
    "N/A"
);

character_list.push(albert);

const teresa = new Character(
    "Teresa Banks",
    "Prostitute",
    "Prostitute and cocaine user",
    "N/A",
    "Letter 'T' found under her fingernail; inspired Agent Cooper to investigate Twin Peaks",
    "N/A"
);

character_list.push(teresa);

const annie = new Character(
    "Annie Blackburn",
    "Waitress at Double R Diner",
    "Love interest of Agent Cooper",
    "N/A",
    "N/A",
    "Norma Jennings"
);

character_list.push(annie);

const gordon = new Character(
    "Gordon Cole",
    "FBI Regional Bureau Chief",
    "Agent Cooper's superior",
    "N/A",
    "N/A",
    "N/A"
);

character_list.push(gordon);

const harold = new Character(
    "Harold Smith",
    "Horticulturist",
    "Homebody; Meals on Wheels recipient",
    "Laura gave her diary to him before her death",
    "N/A"
);

character_list.push(harold);

const dick = new Character(
    "Richard Tremayne",
    "Horne's Dept Store",
    "N/A",
    "N/A",
    "N/A",
    "N/A"
);

character_list.push(dick);