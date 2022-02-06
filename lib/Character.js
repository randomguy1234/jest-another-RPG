//prototype version of character
/*function Character()
{

};

Character.prototype.isAlive= function()
{
    if (this.health === 0)
    {
        return false;
    }

    return true;
};

Character.prototype.getHealth= function()
{
    return `${this.name}'s health is now ${this.health}!`;
};

Character.prototype.getAttackValue= function()
{
    const min= this.strength- 5;
    const max= this.strength+ 5;

    return Math.floor(Math.random() *(max- min) + min);
};

Character.prototype.reduceHealth= function(health)
{
    this.health-= health;
    if(this.health < 0)
    {
        this.health= 0;
    }
};*/

//class version(ES6 version) of character
class Character
{
    constructor(name= '')
    {
        this.name= name;
        this.health= Math.floor(Math.random() * 10 + 95);
        this.strength= Math.floor(Math.random() * 5 + 7);
        this.agility= Math.floor(Math.random() * 5 + 7);
        
    }

    //checks if the character is alive, will get passed down through inheritance
    isAlive()
    {
        if (this.health === 0)
        {
            return false;
        }

        return true;
    }

    //gets the health of the character and returns it, will get passed down through inheritance
    getHealth()
    {
        return `${this.name}'s health is now ${this.health}!`;
    }

    //randomly determines the attack value of the character and returns it, will get passed down through inheritance
    getAttackValue()
    {
        const min= this.strength- 5;
        const max= this.strength+ 5;

        return Math.floor(Math.random() *(max- min) + min);
    }

    //reduces the health of the charactter, will get passed down through inheritance
    reduceHealth(health)
    {
        this.health-= health;
        
        if(this.health < 0)
        {
            this.health= 0;
        }
    }
}

module.exports= Character;
