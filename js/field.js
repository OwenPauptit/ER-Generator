class Field
{
    constructor(name, type, pk)
    {
        this.name = name
        this.type = type
        this.pk = pk
    }

    GetName = function()
    {
        return this.name;
    }

    GetType = function()
    {
        return this.type
    }

    GetPK = function()
    {
        return this.pk
    }
}