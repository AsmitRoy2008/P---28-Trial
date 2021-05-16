class polygon
{
    constructor(x,y,width,height)
    {
        this.x = x;
        this,y = y;
        this.width = width;
        this.height = height;
        this.polygon = Bodies.rectangle(x, y, width, height);
        this.polygon = loadImage("polygon.png");

    }

    display()
    {
        imageMode(CENTER);
        image(this.polygon, 200,200);

    }
}