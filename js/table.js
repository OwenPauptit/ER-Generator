class Table
{
    constructor(name)
    {
        this.name = name
        this.fields = [];
        this.pks = [];
        this.fks = [];
    }

    AddField = function(name, type, pk)
    {
        var field = new Field(name, type,pk)
        this.fields.push(field)
    }

    AddFk = function(fk)
    {
        this.fks.push(fk);
    }

    GetName = function()
    {
        return this.name;
    }

    GetField = function(index)
    {
        var field = this.fields[index];
        var str = field.GetName() + " " + field.GetType()
        if (field.GetPK())
        {
            str += " PRIMARY KEY"
        }
        return str
    }

    GetFK = function(index)
    {
        var fk = this.fks[index];
        return "FOREIGN KEY (" + fk.field1.GetName() + ") REFERENCES " + fk.table2.GetName() + "(" + fk.field2.GetName() + ")";
    }

    GetAllFKs = function()
    {
        return this.fks;
    }

    GetAllFields = function()
    {
        return this.fields;
    }

    GetTableSQL = function()
    {
        let table = [];
        table.push("CREATE TABLE " + this.name + " ("); 
        for (var i = 0; i < this.fields.length; i++)
        {
            table.push(this.GetField(i) + ",");
        }
        for (var i = 0; i < this.fks.length; i++)
        {
            table.push(this.GetFK(i) + ",");
        }
        table.push(");");
        return table;
    }
}