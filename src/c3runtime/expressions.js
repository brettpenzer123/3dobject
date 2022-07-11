"use strict";
{
    self.C3.Plugins.Mikal_3DObject.Exps = {
            AnimationNames() {
                return JSON.stringify(this.gltf.getAnimationNames());
            },
            ZElevation() {
                return this.GetWorldInfo().GetZElevation();
            },
            CurrentAnimation() {
                return this.animationName;
            },
            CurrentAnimationTime() {
                return this.currentAnimationTime;
            },
            CurrentAnimationFrame() {
                return this.currentAnimationFrame;
            },
            Scale() {
                return this.scale;
            },
            XScale() {
                return this.xScale;
            },
            YScale() {
                return this.yScale;
            },
            ZScale() {
                return this.zScale;
            },
            XAngle() {
                return this.xAngle;
            },
            YAngle() {
                return this.yAngle;
            },
            ZAngle() {
                return this.zAngle;
            },
            XBBMin() {
                if (!this.xMinBB) return 0;
                return this.xMinBB[0];
            },
            YBBMin() {
                if (!this.xMinBB) return 0;
                return this.xMinBB[1];
            },
            ZBBMin() {
                if (!this.xMinBB) return 0;
                return this.xMinBB[2];
            },                        
            XBBMax() {
                if (!this.xMaxBB) return 0;
                return this.xMaxBB[0];
            },
            YBBMax() {
                if (!this.xMaxBB) return 0;
                return this.xMaxBB[1];
            },
            ZBBMax() {
                if (!this.xMaxBB) return 0;
                return this.xMaxBB[2];
            },               
            XWireframeWidth() {
                return this.xWireframeWidth;
            },               
            YWireframeWidth() {
                return this.yWireframeWidth;
            },               
            ZWireframeWidth() {
                return this.zWireframeWidth;
            },               

        };
}