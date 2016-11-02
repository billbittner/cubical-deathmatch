

//cards // creatures
var ceo = {
    name: "CEO", type: "creature",
    description: "test description for CEO", 
    hp: 10, attack: 3, luck: 8, lives: 1, specials: [], passive: [], curses: []}
var director = {
    name: "Director", type: "creature", 
    description: "test description for CFO",
    hp: 20, attack: 3, luck: 4, lives: 1, specials: [], passive: [], curses: []}
var manager = {
    name: "Manager", type: "creature", 
    description: "test description for manager",
    hp: 30, attack: 5, luck: 4, lives: 1, specials: [], passive: [], curses: []}
var staff = {
    name: "Staff", type: "creature", 
    description: "test description for a staff",
    hp: 5, attack: 1, luck: 1, lives: 1, specials: [], passive: [], curses: []}

//cards // resources
var cSuite = {name: "C-Level Suite", type: "land", description: "Welcome to the big time. Now you can rub elbows with the CEO and CFO... if they aren't out hitting the links", value: 5};
var cornerOffice = {name: "The Corner Office", type: "land", description: "You've got it all now.  Two windowed walls, a door that locks, and a pile of paperwork to push.", value: 3};
var managersCube = {name: "A Manager's Cube", type: "land", description: "A slightly bigger but dreary-grey cube of death... but with a sliding door to give the illusion of privacy", value: 2};
var cubicle = {name: "A Cubicle", type: "land", description: "A dreary-grey cube of death", value: 1};

//cards // spells
var promotion = {
    type: "spell",  //spells are used on your own people
    description: "Play this card on a #creature to modify it's stats +1/+1",
    name: "promotion",
    action: function(creature){
        this.attack += 1;
        this.hp += 1;
    }
};

//cards // curses
var theFlu = {
    type: "curse", //curses are like spells but used on the other team
    name: "the Flu",
    description: "Play this card on an #creature to modify it's stats -1/-1",
    action: function(){
        this.attack += 1;
        this.hp += 1;
    },
};

var creatureBank = [ceo, director, manager, staff];
var resourceBank = [cSuite, cornerOffice, managersCube, cubicle];
var spellBank = [promotion, theFlu];
