class SlingShot{

    constructor(body1, point2){

        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.02,
            length: 15
        }

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        this.point = point2

        World.add(world,this.sling);
         
    }

    fly(){
    
        this.sling.bodyA = null;

    }

    display(){
        stroke("aquamarine");
    
        if (this.sling.bodyA){
          var posA = this.sling.bodyA.position;
          var posB =  this.sling.pointB;

          line(posA.x, posA.y, posB.x, posB.y);

        }
    }

}



