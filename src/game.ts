import * as PIXI from 'pixi.js'
import backgroundImage from "./images/background.png"
import boer1Image from "./images/boer1.png"
import tekstbox1Image from "./images/tekstbox1.png"
import {Boer1} from "./boer1"

export class Game{
    
    pixiWidth = 800;
    pixiHeight = 450;
   
    pixi: PIXI.Application
    tekstbox1Image: PIXI.Sprite
    background:PIXI.Sprite
    boer1: Boer1
    
    constructor(){
    
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);
        
        this.pixi.loader
            .add('backgroundTexture',backgroundImage)
            .add('boer1Texture', boer1Image)
            .add('tekstbox1Texture', tekstbox1Image);
        this.pixi.loader.load(()=>this.doneLoading());
        
    }
    
    doneLoading() {
        this.background = new PIXI.Sprite(this.pixi.loader.resources["backgroundTexture"].texture!)
        this.background.scale.set(1.32);

        this.pixi.stage.addChild(this.background)
            this.boer1 = new Boer1(this.pixi.loader.resources["boer1Texture"].texture!, this.pixi.loader.resources["tekstbox1Texture"].texture!, this.pixi)
            this.boer1.on('pointerdown', () => this.boer1.onClick());
            this.boer1.scale.set(0.3);
            this.boer1.x = 400;
            this.boer1.y = 100;
            this.pixi.stage.addChild(this.boer1)

        this.pixi.ticker.add((delta) => this.update(5));
    }

    update(delta: number) {
    }
}

new Game();

