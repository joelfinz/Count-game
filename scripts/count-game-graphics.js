(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.restartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBGQgHgGgCgHQgBgEAAgSIAAg6IgOAAIAAgEQAOgKALgMQAKgMAHgNIADAAIAAAnIAaAAIAAAMIgaAAIAABCQAAAKABADIAEAFIAEABQAIAAAGgLIADACQgJAWgVABQgJAAgIgGg");
	this.shape.setTransform(116.1,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguA5IAAgFQAHgBACgDQADgDAAgPIAAg7IgBgMQgBgDgCgCQgCgBgGgBIAAgEIAtAAIAAAZQAKgRAHgGQAJgFAIgBQAGAAAEAFQAEAEAAAHQAAAIgEAEQgEAFgFAAQgGAAgFgFIgGgEIgCAAQgEgBgDADQgEAEgDAHQgDAMABAMIAAAZIAAAIQgBAGABACQABADADABQADACAGAAIAAAFg");
	this.shape_1.setTransform(106.9,28.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMA1QgGgFgBgIQgTARgQAAQgJAAgHgGQgFgGgBgJQAAgNALgKQALgKAjgQIAAgLQAAgMgBgDQgCgDgDgDQgDgCgFAAQgIAAgEADQgDACgBADQAAADAEADQAFAFgBAFQABAGgFAEQgEAEgHAAQgHAAgGgFQgEgEAAgGQgBgJAHgHQAHgIAMgEQAMgEAMAAQAPAAAJAHQAKAGACAIQACAFAAARIAAAqIABAKIABACIADABQADAAADgEIADADQgFAIgGAEQgHAEgIAAQgJAAgFgEgAgPAMQgEAGgBAHQABAFADAEQADAEAFAAQAHAAAGgHIAAgkQgNAIgHAJg");
	this.shape_2.setTransform(95.7,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBGQgHgGgCgHQgBgEAAgSIAAg6IgPAAIAAgEQAPgKAKgMQALgMAGgNIAFAAIAAAnIAZAAIAAAMIgZAAIAABCQAAAKABADIACAFIAEABQAIAAAHgLIADACQgJAWgVABQgKAAgHgGg");
	this.shape_3.setTransform(85.4,26.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSA1IgFgBQgEAAgCAGIgEAAIgCgoIAEAAQAFAQAJAIQAJAHAIAAQAFAAAEgDQADgEAAgFQAAgFgDgEQgEgEgLgJQgSgMgFgGQgIgJAAgMQAAgNAJgKQAJgKAQAAQAIAAAIAEIAGACIADgBIAEgFIAEAAIACAmIgEAAQgHgRgIgGQgIgGgGAAQgFAAgDADQgEADAAAEQAAAEACACQAEAFAQAMQASAMAFAHQAGAIAAAKQAAAJgFAJQgFAJgIAEQgIAFgKAAQgHAAgNgFg");
	this.shape_4.setTransform(76.7,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAnQgKgPAAgWQAAgbAPgQQAPgQATAAQAQAAANAOQAMANABAbIg7AAQABAVAKAMQAHAKAMAAQAHAAAFgEQAGgEAHgKIAEADQgJASgLAIQgLAHgOAAQgXAAgNgTgAgHgsQgHALAAASIAAAEIAfAAQAAgTgCgHQgCgHgFgDQgCgCgEAAQgFAAgEAFg");
	this.shape_5.setTransform(66.8,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkBQIgzhJIgKAAIAAAtQAAANABADQACADAEACQAEACALAAIAAAFIhSAAIAAgFQAMAAADgCQAEgCACgDQABgDABgNIAAhnQgBgNgBgCQgCgEgEgCQgDgCgMAAIAAgFIBLAAQAbAAANAFQAOAEAJAKQAHALABAOQAAASgNALQgIAHgOAEIAmA1QAHALADACQAFAEAGAAIAAAFgAgZAAIAHAAQAPAAAIgDQAIgDAFgIQAEgIAAgNQAAgSgJgIQgIgJgSAAIgMAAg");
	this.shape_6.setTransform(53,26.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9F19").s().p("AtHEEIAAoHIaPAAIAAIHg");
	this.shape_7.setTransform(84,26);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF208C").s().p("AtHEEIAAoHIaPAAIAAIHg");
	this.shape_8.setTransform(84,26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8C0000").s().p("AtHEEIAAoHIaPAAIAAIHg");
	this.shape_9.setTransform(84,26);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252000").s().p("AtHEEIAAoHIaPAAIAAIHg");
	this.shape_10.setTransform(84,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,52.1);


(lib.NumberedBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.numberText = new cjs.Text("98", "bold 12px 'Times New Roman'");
	this.numberText.name = "numberText";
	this.numberText.textAlign = "center";
	this.numberText.lineHeight = 16;
	this.numberText.lineWidth = 14;
	this.numberText.parent = this;
	this.numberText.setTransform(30.2,12.8,3.453,2.64);

	this.timeline.addTween(cjs.Tween.get(this.numberText).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00EC12","#FFFFFF"],[0,1],0,0,0,0,0,43.2).s().p("AkwExIAAphIJhAAIAAJhg");
	this.shape.setTransform(30.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.NumberedBox, new cjs.Rectangle(0,0,61,61), null);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00F3FF").s().p("A3lfRMAAAg+hMAvLAAAMAAAA+hg");
	this.shape.setTransform(151,200.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(0,0,302.1,400.1), null);


(lib.GameOverView = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.restartButton();
	this.instance.parent = this;
	this.instance.setTransform(42,237,1,1,0,0,0,84,26);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.restartButton(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAEA5IAAgFQAGAAADgFQACgDAAgMIAAgvQAAgNgCgEQgBgEgCgCQgDgCgDAAQgJAAgIAPIAAA5QAAANACADQACAEAGAAIAAAFIg3AAIAAgFQAHAAADgEQACgDAAgNIAAg9QAAgMgCgCQgDgEgHgBIAAgEIAtAAIAAAOQAIgJAHgEQAIgFAIAAQALABAHAFQAHAGACAKQACAGAAATIAAApQAAAOADADQACACAHABIAAAFg");
	this.shape.setTransform(82.9,101.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglApQgOgSAAgXQABgWAOgSQANgRAXAAQAOAAANAHQAMAIAGANQAHAOAAAPQAAAXgNAQQgOATgZAAQgXAAgOgRgAgJgsQgFAEgBAOQgBANAAAXQAAAMABALQACAIAEAFQAFAEAEAAQAFAAAEgDQAEgEACgHQACgLAAghQAAgUgCgHQgCgIgFgDQgDgDgFAAQgEAAgFAFg");
	this.shape_1.setTransform(70.2,102);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AArBRIgnhlIgqBlIgFAAIg0iAQgIgUgDgEQgEgEgHgBIAAgEIBFAAIAAAEQgJAAgCADQgDACAAADQAAAFAGAOIAfBMIAZg7IgHgRQgFgOgDgEQgDgFgEgCQgDgCgIAAIAAgEIBMAAIAAAEIgMABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAABIAEAQIAeBKIAahDIAEgOIABgHQABgFgEgDQgDgDgKAAIAAgEIAqAAIAAAEQgFABgDACQgDACgCAEIgHASIgyCCg");
	this.shape_2.setTransform(52.2,99.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiAyQgHgFgDgHQgCgJgBgSIAAgrQAAgMgCgDQgCgEgHAAIAAgFIAtAAIAABLQAAALABADQABAEACACQADABACAAQAEAAAEgCQAEgDAGgJIAAg6QAAgMgBgDQgDgEgHAAIAAgFIAtAAIAABVQgBANADADQACADAHABIAAAEIgtAAIAAgOQgHAIgHAFQgIAEgKABQgJAAgHgHg");
	this.shape_3.setTransform(27.5,102.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglApQgOgSAAgXQABgWAOgSQANgRAXAAQAOAAANAHQAMAIAGANQAHAOAAAPQAAAXgNAQQgOATgZAAQgXAAgOgRgAgJgsQgFAEgBAOQgBANAAAXQAAAMABALQACAIAEAFQAFAEAEAAQAFAAAEgDQAEgEACgHQACgLAAghQAAgUgCgHQgCgIgFgDQgDgDgFAAQgEAAgFAFg");
	this.shape_4.setTransform(14.8,102);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBQIAAgFIAIAAQAHAAAEgDQADgBACgEQABgCAAgMIAAghIglhCQgLgVgFgEQgFgDgHAAIAAgFIBMAAIAAAFIgDAAQgHAAgDACQgDACAAACQAAAFAKARIAbAzIAdgvQALgSAAgFQAAgEgDgCQgEgDgLAAIAAgFIAwAAIAAAFQgHABgFADQgGAGgMAVIgjA5IAAAnQAAALACAEQABACAEADQAEACAGAAIAJAAIAAAFg");
	this.shape_5.setTransform(0.1,99.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("A3bfGMAAAg+LMAu3gATMAAAA+xg");
	this.shape_6.setTransform(39.1,205.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameOverView, new cjs.Rectangle(-111,4.1,300.1,401.9), null);


// stage content:
(lib.gamecanvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GameOverView();
	this.instance.parent = this;
	this.instance.setTransform(262,198.1,1,1,0,0,0,150,202);

	this.instance_1 = new lib.Background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(660.2,200.1,1,1,0,0,0,151,200.1);

	this.instance_2 = new lib.NumberedBox();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.7,133.6,1,1,0,0,0,30.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(151,200,810.3,402.1);
// library properties:
lib.properties = {
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;