const Potion= require('./Potion');

function Enemy(name, weapon)
{
    this.name= name;
    this.weapon= weapon;
    this.potion= new Potion();

    this.health= Math.floor(Math.random() * 10 + 85);
    this.strength= Math.floor(Math.random() * 5 + 5);
    this.agility= Math.floor(Math.random() * 5 + 5);

    //returns the health of the enemy in a string
    Enemy.prototype.getHealth= function() 
    {
        return `The ${this.name}'s health is now ${this.health}!`;
    };
 
    //returns false if the enemy has 0 health otherwise returns true
    Enemy.prototype.isAlive= function()
    {
        if (this.health === 0)
        {
            return false;
        }
 
        return true;
    };
 
    //returns the attack value of the enemy
    Enemy.prototype.getAttackValue= function() 
    {
        const min= this.strength - 5;
        const max= this.strength + 5;
 
        return Math.floor(Math.random() * (max-min) + min);
    };
    
    //subtracts the enemy's health
    Enemy.prototype.reduceHealth= function(health)
    {
        this.health -= health;
 
        if (this.health < 0)
        {
            this.health= 0;
        }
    };
 
    Enemy.prototype.getDescription= function()
    {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
    
};

module.exports= Enemy;