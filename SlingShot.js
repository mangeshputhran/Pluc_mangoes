class SlingShot{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.04,
            length: 10,
        }
        this.body=body;
        this.pointB= anchor;
        console.log(this.body)
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){

        this.sling.bodyA= null
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    display(){
      if(this.sling.bodyA){


        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
    }
    
}