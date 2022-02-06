const Potion= require('./Potion');
const Character= require('./Character');

//prototype version of player
/*function Player(name= '')
{
    this.name= name;
    this.health= Math.floor(Math.random() * 10 + 95);
    this.strength= Math.floor(Math.random() * 5 + 7);
    this.agility= Math.floor(Math.random() * 5 + 7);
    this.inventory= [new Potion('health'), new Potion()];

    // inherit prototype methods from Character here:
    Player.prototype= Object.create(Character.prototype);

    // returns an object with various player properties
    Player.prototype.getStats= function() 
    {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility

        };
    };

    // returns the inventory array or false if empty
    Player.prototype.getInventory= function()
    {
        if (this.inventory.length)
        {
            return this.inventory;
        }
        else
        {
            return false;
        }
    };

    //adds a potion to the player's inventory
    Player.prototype.addPotion= function(potion)
    {
        this.inventory.push(potion);
    };

    //uses a potion in the player's inventory if it exists
    Player.prototype.usePotion= function(index)
    {
        const potion= this.getInventory().splice(index, 1)[0];

        switch (potion.name)
        {
            case 'agility':
                this.agility += potion.value;
                break;
            
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;        
        } 
    };
};*/

//class version(ES6 version) of player
class Player extends Character
{
    constructor(name= '')
    {
        //call parent constructor
        super(name);

        this.inventory= [new Potion('health'), new Potion()];
    }

    // returns an object with various player properties
    getStats()
    {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility

        };
    }

    // returns the inventory array or false if empty
    getInventory()
    {
        if (this.inventory.length)
        {
            return this.inventory;
        }
        
        return false;        
    }

    //adds a potion to the player's inventory
    addPotion(potion)
    {
        this.inventory.push(potion);
    }

    //uses a potion in the player's inventory if it exists
    usePotion(index)
    {
        //get potion from inventory array
        const potion= this.getInventory().splice(index, 1)[0];

        //apply effects based on potion's name
        switch (potion.name)
        {
            case 'agility':
                this.agility += potion.value;
                break;
            
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;        
        } 
    }
}

module.exports= Player;