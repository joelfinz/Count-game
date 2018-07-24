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
		this.shape.graphics.f("#FFFFFF").s().p("AgGBFQgJgJAAgQIAAhBIgVAAIAAgUIAVAAIAAgkIAVAAIAAAkIAcAAIAAAUIgcAAIAAA6QAAAMAEAEQAFAEAGAAIAFgBIAEgBIAHAUQgIADgMAAQgOAAgJgJg");
		this.shape.setTransform(115.5,28.3);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AgjA9IAAh1IAVAAIAAATIABAAQADgJAKgHQAKgHAKAAQAKABAGADIgGAVQgEgCgJAAQgNAAgIAKQgJAKAAAOIAABAg");
		this.shape_1.setTransform(107.5,29.9);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AgmAzQgNgLAAgSQAAgSAOgKQAOgLAXAAQASAAANAIIAAgFQAAgMgJgIQgJgIgMAAQgSAAgLAQIgTgNQAQgXAfAAQAYAAAOANQAOANAAAXIAABIIgVAAIAAgRIgBAAQgOAVgVAAQgUAAgNgMgAgTAHQgJAGAAAKQAAAIAHAGQAHAGAKAAQANAAALgKQALgLAAgOQgKgIgTAAQgMAAgJAHg");
		this.shape_2.setTransform(96.2,30);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("AgGBFQgJgJAAgQIAAhBIgVAAIAAgUIAVAAIAAgkIAVAAIAAAkIAcAAIAAAUIgcAAIAAA6QAAAMAEAEQAFAEAGAAIAFgBIAEgBIAHAUQgIADgMAAQgOAAgJgJg");
		this.shape_3.setTransform(86.1,28.3);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AgcA1QgOgJgGgPIAUgIQAEAKAIAGQAJAGAJAAQAKAAAHgFQAIgEAAgGQAAgMgSgFIgTgFQgigIAAgYQgBgQANgKQAOgKATAAQAQAAAMAIQANAHAFANIgTAIQgEgIgHgEQgIgEgJAAQgIAAgHAEQgHAFAAAGQAAAKATAEIARAFQAjAIAAAaQAAAQgNAKQgOALgUAAQgRAAgNgKg");
		this.shape_4.setTransform(76.4,30);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFFFF").s().p("AgoAtQgRgSAAgbQAAgaARgSQAQgSAZAAQAaAAAPARQAQARAAAeIgBACIhbAAQABARALALQALAKAOAAQAVAAAMgVIAUAKQgIAPgOAIQgOAJgSAAQgZAAgRgSgAgUgiQgJAIgDANIBCAAQgBgMgJgJQgJgHgPAAQgLAAgJAHg");
		this.shape_5.setTransform(64.5,30);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FFFFFF").s().p("AAhBWIgthFIgYAAIAABFIgXAAIAAirIA7AAQAVAAAQAPQAQAPAAAWQAAARgMAOQgLAMgSAEIgBABIAxBGIAAABgAgkgDIAjAAQANAAAJgJQAJgJAAgMQAAgNgIgIQgJgJgNAAIgkAAg");
		this.shape_6.setTransform(51.9,27.3);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FF9F19").s().p("AtHEEIAAoHIaPAAIAAIHg");
		this.shape_7.setTransform(84,26);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FF208C").s().p("AtHEEIAAoHIaPAAIAAIHg");
		this.shape_8.setTransform(84,26);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FFFFFF").s().p("AABBLQgGgDgFgFQgLgKAAgUIAAgzIgVAAIAAgbIAVAAIAAgkIAeAAIAAAkIAdAAIAAAbIgdAAIAAAtIABAHQABAEADACQADAEAGAAIAGgBIAFgCIAJAbQgFADgHABQgGACgIAAQgJAAgHgDg");
		this.shape_9.setTransform(118.1,28.3);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFFFFF").s().p("AgpA9IAAh1IAeAAIAAARIACAAQACgFAEgDIAGgHIALgEIAKgCIAKACIAIADIgIAcIgHgCIgJAAQgGgBgFADQgGADgCAEQgEAFgCAFQgCAGAAAHIAAA6g");
		this.shape_10.setTransform(109,29.9);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#FFFFFF").s().p("AgbA8QgIgDgGgGQgGgFgEgHQgDgIAAgJQAAgJAEgHQADgGAHgGQAGgFAJgDQAJgDAKAAQAKAAAIACIAMAEIAAgEQAAgJgHgGQgIgGgKAAQgQAAgLANIgXgPQATgYAgAAQAaAAAPANQAOANAAAZIAABGIgfAAIAAgNIgCAAQgFAHgIAFQgIAFgLAAQgJAAgIgDgAgQAKQgHAFAAAHQAAAHAGAFQAGAEAIAAQAFAAAFgCQAGgCADgEQAEgEACgFQACgFAAgFIgLgEQgGgCgHAAQgKAAgGAFg");
		this.shape_11.setTransform(96.8,30);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#FFFFFF").s().p("AABBLQgGgDgFgFQgLgKAAgUIAAgzIgVAAIAAgbIAVAAIAAgkIAeAAIAAAkIAdAAIAAAbIgdAAIAAAtIABAHQABAEADACQADAEAGAAIAHgBIAEgCIAJAbQgGADgGABQgHACgHAAQgJAAgHgDg");
		this.shape_12.setTransform(85.9,28.3);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FFFFFF").s().p("AgRA8QgJgDgHgFQgHgEgEgHQgFgGgCgGIAcgMQAEAJAHAFQAHAEAHAAQAJAAAFgDQAFgDAAgFQAAgEgEgDQgEgDgLgDIgPgDIgMgEQgGgDgEgDQgFgEgDgGQgDgFAAgIQAAgJADgHQAEgGAHgFQAGgFAJgCQAJgDAJAAQAQAAAOAHQANAGAGAPIgbALQgEgHgGgDQgGgDgHAAQgGAAgFACQgFADAAAFQAAAEAEACQAFADAHABIARAFQASAEAJAJQAIAJAAANQAAAIgDAHQgEAHgGAFQgHAFgJADQgJAEgMAAQgKAAgJgDg");
		this.shape_13.setTransform(75.2,30);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFFFFF").s().p("AgVA6QgLgFgJgIQgJgJgEgLQgFgLAAgOQAAgMAFgLQAFgMAHgIQAIgJAMgFQALgFAMAAQAOAAALAFQALAFAIAIQAHAIAEALQAEAMAAANIAAACIAAACIAAADIhYAAQABAHADAFQADAGAEADQAFAEAFABQAGACAEAAQALAAAHgFQAHgFAEgHIAbAMQgJAPgOAJQgNAJgVAAQgMAAgLgFgAgQgeQgHAFgDALIA3AAQAAgDgCgEQgBgEgDgDQgEgEgFgCQgFgCgIAAQgIAAgJAGg");
		this.shape_14.setTransform(62.7,30);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#FFFFFF").s().p("AAbBWIgrhBIgPAAIAABBIghAAIAAirIA/AAQAMAAALAEQAKAFAIAHQAHAHAEAKQAEAJAAAMQAAAJgCAHQgDAIgFAGQgFAGgHAEQgHAFgHADIAAABIAuBCIAAACgAgfgHIAeAAQAKgBAHgGQAHgHAAgKIgBgJIgFgIQgDgDgFgCQgFgCgFAAIgeAAg");
		this.shape_15.setTransform(49.3,27.3);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#8C0000").s().p("AtHEEIAAoHIaPAAIAAIHg");
		this.shape_16.setTransform(84,26);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#252000").s().p("AtHEEIAAoHIaPAAIAAIHg");
		this.shape_17.setTransform(84,26);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_17},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,168,52.1);
	
	
	(lib.NumberedBox = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Text
		this.numberText = new cjs.Text("43", "bold 36px 'Product Sans'", "#E7FAFF");
		this.numberText.name = "numberText";
		this.numberText.textAlign = "center";
		this.numberText.lineHeight = 48;
		this.numberText.lineWidth = 56;
		this.numberText.parent = this;
		this.numberText.setTransform(30,7.5);
	
		this.timeline.addTween(cjs.Tween.get(this.numberText).wait(4));
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000066").s().p("AkwExIAAphIJhAAIAAJhg");
		this.shape.setTransform(30.5,30.5);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#8C1066").s().p("AkwExIAAphIJhAAIAAJhg");
		this.shape_1.setTransform(30.5,30.5);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#B10B66").s().p("AkwExIAAphIJhAAIAAJhg");
		this.shape_2.setTransform(30.5,30.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(2));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,61,61);
	
	
	(lib.BGTile = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#99192A").s().p("AldFeIAAq7IK7AAIAAK7g");
		this.shape.setTransform(35,35);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.BGTile, new cjs.Rectangle(0,0,70,70), null);
	
	
	(lib.Background = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#990099").s().p("A3lfRMAAAg+hMAvLAAAMAAAA+hg");
		this.shape.setTransform(151,200.1);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(0,0,302.1,400.1), null);
	
	
	(lib.GameOverView = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_24 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));
	
		// thank you for playing this game.
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
		this.shape.setTransform(267.1,369.5);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AgMAyIgKgFIgHgHIgEgHIARgHQACAGAFADQAEADAFAAQAIAAAFgGQAFgFAAgKIAAgFIgBAAQgDAFgFACQgFADgHAAQgGAAgFgDQgGgCgFgFQgEgEgDgGQgDgHAAgIQAAgIADgHQADgGAEgFQAFgFAGgCQAFgDAGAAQAHAAAFADQAFADADAEIABAAIAAgHIASAAIAAA+QAAAJgDAHQgCAHgFAFQgFAFgGACQgHADgIAAQgHAAgFgCgAgFghQgDABgDADQgCACgCAEQgBAEAAAEQAAAFABADQACAEACACIAGADIAFABIAHgBIAGgDQACgCACgEQABgDAAgFQAAgEgBgEIgEgGQgDgDgDgBIgHgBIgFABg");
		this.shape_1.setTransform(260.9,368.7);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFFFFF").s().p("AAOAjIAAgmQAAgIgDgDQgEgEgFAAQgEAAgCACIgFAFIgDAGIgBAHIAAAhIgSAAIAAhDIARAAIAAAJIABAAQADgFAGgDQAEgDAHgBQAGABAFACQAFACADADQADAEACAGQACAFgBAHIAAAog");
		this.shape_2.setTransform(252.9,367.1);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFFFF").s().p("AgIAzIAAhEIARAAIAABEgAgEgcIgEgCIgCgEIgBgEIABgFIACgDIAEgDIAEgBQAFAAADAEQAEADAAAFQAAAEgEAEQgDADgFAAIgEgBg");
		this.shape_3.setTransform(247,365.6);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AgYAxIAQghIgdhAIAVAAIAQApIABAAIARgpIAUAAIgqBhg");
		this.shape_4.setTransform(241.3,368.7);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFFFF").s().p("AgPAjQgFgCgDgDQgEgDgCgFQgCgEAAgFQAAgFACgFQACgDAEgDQAEgDAFgCQAFgBAGAAIAKABIAHACIAAgCQAAgGgEgDQgFgEgFAAQgJAAgHAIIgOgJQAMgOASAAQAQAAAHAIQAJAHAAAPIAAAoIgSAAIAAgHIgBAAQgDAEgFADQgFADgFAAQgGAAgEgCgAgJAGQgDADgBAEQAAAEADADQAEACAEAAQAEAAACgBQADgBADgDIADgFIABgGIgHgCIgHgBQgFAAgEADg");
		this.shape_5.setTransform(233.6,367.2);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FFFFFF").s().p("AgIAyIAAhjIARAAIAABjg");
		this.shape_6.setTransform(228.3,365.7);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFFFFF").s().p("AgjAzIAAhiIARAAIAAAIIABAAQACgEAGgDQAGgEAGAAQAHABAFADQAGACAFAFQAFAFACAHQADAGAAAIQAAAIgDAGQgCAGgFAFQgFAGgGACQgFADgHAAQgGAAgGgEQgGgDgCgEIgBAAIABAKIAAAdgAgHgfQgDABgCADIgFAGQgBADAAAFQAAAFABADIAFAFIAFAFQAEABADAAIAGgBIAGgFIAEgFQACgEgBgEQABgFgCgDIgEgGIgGgEIgGgCQgDAAgEACg");
		this.shape_7.setTransform(222.6,368.6);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#FFFFFF").s().p("AgjAzIAAhiIARAAIAAAIIABAAQADgEAFgDQAFgEAHAAQAGABAHADQAFACAFAFQAFAFADAHQACAGAAAIQAAAIgCAGQgDAGgFAFQgFAGgFACQgHADgGAAQgHAAgFgEQgFgDgDgEIgBAAIABAKIAAAdgAgHgfQgDABgCADIgFAGQgBADAAAFQAAAFABADIAFAFIAFAFQADABAEAAIAHgBIAFgFIAEgFQABgEAAgEQAAgFgBgDIgEgGIgFgEIgHgCQgEAAgDACg");
		this.shape_8.setTransform(211.1,368.6);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FFFFFF").s().p("AgMAiQgHgDgEgFQgGgFgCgGQgDgHAAgIQAAgGADgHQACgHAFgFQAEgFAIgDQAGgDAGAAQAJAAAGADQAHADAEAFQAEAFACAGQADAHAAAHIAAABIAAACIgBABIgyAAQABAEACADIADAFIAHADIAFABQAGAAAEgDQAEgDACgEIAQAIQgFAIgIAFQgIAGgLAAQgHAAgHgDgAgJgRQgEADgCAGIAgAAIgBgEIgDgEIgFgDQgDgCgFAAQgEAAgFAEg");
		this.shape_9.setTransform(202.9,367.2);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFFFFF").s().p("AgMAiQgHgDgFgFQgEgFgEgGQgCgHAAgIQAAgGACgHQADgHAFgFQAFgFAGgDQAHgDAHAAQAIAAAGADQAHADAEAFQAEAFACAGQADAHAAAHIAAABIAAACIAAABIgzAAQAAAEACADIAFAFIAFADIAGABQAGAAAEgDQAEgDADgEIAPAIQgFAIgIAFQgIAGgLAAQgIAAgGgDgAgIgRQgFADgCAGIAgAAIgBgEIgDgEIgFgDQgDgCgEAAQgFAAgEAEg");
		this.shape_10.setTransform(195.1,367.2);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#FFFFFF").s().p("AAMAyIgSgeIgIAIIAAAWIgSAAIAAhjIASAAIAAA2IABAAIAVgXIAXAAIAAABIgZAYIAbAqIAAABg");
		this.shape_11.setTransform(187.9,365.7);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#FFFFFF").s().p("AgLAPIAIgNQgDgBgCgCQgCgCAAgFQgBgFAEgDQAEgEADAAQAFAAAEAEQADADAAAFIAAAFIgDAEIgMAUg");
		this.shape_12.setTransform(178.7,370.4);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FFFFFF").s().p("AgMAiQgHgDgFgFQgEgFgDgGQgDgHAAgIQAAgGADgHQACgHAFgFQAEgFAIgDQAGgDAGAAQAJAAAHADQAGADAEAFQAFAFACAGQACAHAAAHIAAABIAAACIgBABIgyAAQAAAEADADIADAFIAHADIAEABQAHAAAEgDQAEgDACgEIAQAIQgFAIgIAFQgIAGgMAAQgGAAgHgDgAgJgRQgEADgCAGIAgAAIgBgEIgDgEIgFgDQgDgCgFAAQgEAAgFAEg");
		this.shape_13.setTransform(173,367.2);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFFFFF").s().p("AAkAjIAAgmQgBgPgLAAQgEAAgDACIgEAFIgDAGIgBAHIAAAhIgRAAIAAgmQAAgPgMAAQgEAAgDACIgEAFIgDAGIgBAHIAAAhIgSAAIAAhDIARAAIAAAJIABAAQADgFAGgDQAFgEAHAAQAIABAGAEQADADADAGQADgGAGgDQAGgEAIgBQAHABAEACQAFACADADQADAEACAFQABAFAAAGIAAAqg");
		this.shape_14.setTransform(163,367.1);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#FFFFFF").s().p("AgQAjQgEgCgEgDQgDgDgCgFQgCgEAAgFQAAgFACgFQACgDAEgDQADgDAGgCQAFgBAGAAIAKABIAHACIAAgCQAAgGgEgDQgEgEgGAAQgJAAgHAIIgOgJQALgOATAAQAQAAAHAIQAJAHAAAPIAAAoIgSAAIAAgHIgBAAQgDAEgFADQgEADgHAAQgFAAgFgCgAgJAGQgEADAAAEQAAAEAEADQADACAFAAQACAAADgBQAEgBACgDIADgFIABgGIgGgCIgIgBQgGAAgDADg");
		this.shape_15.setTransform(152.9,367.2);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#FFFFFF").s().p("AgMAyIgKgFIgHgHIgEgHIARgHQACAGAFADQAEADAFAAQAIAAAFgGQAFgFAAgKIAAgFIgBAAQgDAFgFACQgFADgHAAQgGAAgFgDQgGgCgFgFQgEgEgDgGQgDgHAAgIQAAgIADgHQADgGAEgFQAFgFAGgCQAFgDAGAAQAHAAAFADQAFADADAEIABAAIAAgHIASAAIAAA+QAAAJgDAHQgCAHgFAFQgFAFgGACQgHADgIAAQgHAAgFgCgAgFghQgDABgDADQgCACgCAEQgBAEAAAEQAAAFABADQACAEACACIAGADIAFABIAHgBIAGgDQACgCACgEQABgDAAgFQAAgEgBgEIgEgGQgDgDgDgBIgHgBIgFABg");
		this.shape_16.setTransform(144.9,368.7);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#FFFFFF").s().p("AgKAjQgFgCgEgDQgEgCgDgEIgEgHIARgHQACAFAEADQAEACAEAAQAFAAADgBQADgCAAgDQAAgDgDgBQgCgCgGgBIgJgDIgGgCIgGgDIgFgFQgCgEAAgEQAAgFACgEQACgEAEgDQAEgDAFgBQAFgCAFAAQAKAAAHAEQAIAEAEAIIgQAHQgCgEgEgCQgEgCgDAAQgDAAgDACQgDABAAADQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAGACIAJADQALACAFAFQAFAFABAIQgBAEgCAEQgCAFgEADQgDADgGACQgGACgGAAQgFAAgGgCg");
		this.shape_17.setTransform(134.5,367.2);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#FFFFFF").s().p("AgIAzIAAhEIARAAIAABEgAgEgcIgEgCIgCgEIgBgEIABgFIACgDIAEgDIAEgBQAFAAADAEQAEADAAAFQAAAEgEAEQgDADgFAAIgEgBg");
		this.shape_18.setTransform(129.2,365.6);
	
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#FFFFFF").s().p("AgPAwQgGgCgEgFQgFgFgDgHQgCgHAAgIQAAgHACgHQADgGAFgFQAEgFAGgCQAGgDAHAAQAGAAAGADQAFADADAEIABAAIgBgJIAAgeIASAAIAABjIgRAAIAAgJIgBAAQgDAFgFADQgGADgGAAQgHAAgGgDgAgGgDIgFADIgEAGQgBAEgBAEQABAFABAEIAEAGIAFAEIAGABIAIgBIAGgEIADgGQACgEAAgFQAAgEgCgEIgDgGQgDgCgDgBIgIgBIgGABg");
		this.shape_19.setTransform(123,365.8);
	
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#FFFFFF").s().p("AgMAiQgHgDgFgFQgEgFgEgGQgCgHAAgIQAAgGACgHQADgHAFgFQAFgFAGgDQAHgDAGAAQAJAAAHADQAGADAEAFQAEAFADAGQACAHAAAHIAAABIAAACIAAABIgzAAQABAEABADIAFAFIAFADIAFABQAHAAAEgDQAEgDACgEIAQAIQgFAIgIAFQgIAGgMAAQgGAAgHgDgAgIgRQgFADgCAGIAgAAIgBgEIgDgEIgFgDQgDgCgFAAQgEAAgEAEg");
		this.shape_20.setTransform(112,367.2);
	
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#FFFFFF").s().p("AAMAyIgSgeIgIAIIAAAWIgSAAIAAhjIASAAIAAA2IABAAIAVgXIAXAAIAAABIgaAYIAcAqIAAABg");
		this.shape_21.setTransform(104.9,365.7);
	
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#FFFFFF").s().p("AgIAzIAAhEIARAAIAABEgAgEgcIgEgCIgCgEIgBgEIABgFIACgDIAEgDIAEgBQAFAAADAEQAEADAAAFQAAAEgEAEQgDADgFAAIgEgBg");
		this.shape_22.setTransform(98.9,365.6);
	
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#FFFFFF").s().p("AgIAyIAAhjIARAAIAABjg");
		this.shape_23.setTransform(95.4,365.7);
	
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#FFFFFF").s().p("AgZAbQgHgHAAgOIAAgpIASAAIAAAnQABAHADAEQADADAGAAQADAAADgCIAFgDIADgHIABgHIAAgiIASAAIAABEIgRAAIAAgJIgBAAQgDAFgGADQgFADgGAAQgNABgGgJg");
		this.shape_24.setTransform(86.5,367.4);
	
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#FFFFFF").s().p("AgOAiQgGgDgFgFQgFgFgDgGQgCgHAAgIQAAgHACgHQADgGAFgFQAFgFAGgDQAHgDAHAAQAIAAAHADQAGADAFAFQAFAFADAGQACAHAAAHQAAAIgCAHQgDAGgFAFQgFAFgGADQgHADgIAAQgHAAgHgDgAgGgRQgDABgCADQgDACgCAEIgBAHIABAIQACAEADACQACADADABQADACADAAQAEAAADgCIAGgEIAEgGQABgDAAgFQAAgEgBgDIgEgGQgDgDgDgBQgDgCgEAAQgDAAgDACg");
		this.shape_25.setTransform(75.4,367.2);
	
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#FFFFFF").s().p("AAOAjIAAgmQAAgIgDgDQgEgEgFAAQgEAAgDACIgEAFIgEAGIgBAHIAAAhIgSAAIAAhDIARAAIAAAJIABAAQAEgFAFgDQAFgDAHgBQAGABAFACQAFACADADQADAEACAGQABAFAAAHIAAAog");
		this.shape_26.setTransform(67.4,367.1);
	
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFFFFF").s().p("AAMAyIgSgeIgIAIIAAAWIgSAAIAAhjIASAAIAAA2IAAAAIAXgXIAWAAIAAABIgaAYIAcAqIAAABg");
		this.shape_27.setTransform(60.1,365.7);
	
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#FFFFFF").s().p("AgJAyIAAhjIATAAIAABjg");
		this.shape_28.setTransform(50.9,365.7);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(25));
	
		// RestartButton
		this.instance = new lib.restartButton();
		this.instance.parent = this;
		this.instance.setTransform(155,295,1,1,0,0,0,84,26);
		new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.restartButton(), 3);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));
	
		// Okay, You won.
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#FFFFFF").s().p("AgOAPQgGgHAAgIQAAgIAGgGQAHgGAHAAQAJAAAGAGQAGAGAAAIQAAAIgGAHQgGAGgJAAQgHAAgHgGg");
		this.shape_29.setTransform(237.7,98.6);
	
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#FFFFFF").s().p("AAYA9IAAhDQABgMgHgGQgFgHgLAAQgFAAgFADQgFADgEAFQgDAEgCAHQgBAGAAAGIAAA6IggAAIAAh1IAdAAIAAAQIADAAQAFgJAJgFQAJgGAMAAQAKAAAJAEQAIADAGAHQAGAHACAJQADAJAAAMIAABGg");
		this.shape_30.setTransform(227.6,94.5);
	
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#FFFFFF").s().p("AgYA6QgMgFgHgIQgJgIgFgMQgEgLAAgOQAAgNAEgLQAFgMAJgIQAHgIAMgFQALgFANAAQAOAAALAFQALAFAJAIQAIAIAFAMQAFALgBANQABAOgFALQgFAMgIAIQgJAIgLAFQgLAFgOAAQgNAAgLgFgAgLgeQgFACgFAEQgEAFgDAGQgCAGAAAHQAAAIACAGQADAGAEAFQAFAEAFACQAGADAFAAQAGAAAGgDQAGgCAEgEQAEgFADgGQACgGAAgIQAAgHgCgGQgDgGgEgFQgEgEgGgCQgGgDgGAAQgFAAgGADg");
		this.shape_31.setTransform(213.8,94.7);
	
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#FFFFFF").s().p("AAYA7IgXhJIgBAAIgXBJIgiAAIgmh1IAkAAIATBJIACAAIAXhJIAfAAIAYBJIACAAIAThJIAiAAIglB1g");
		this.shape_32.setTransform(197.2,94.7);
	
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#FFFFFF").s().p("AgsAvQgLgOAAgXIAAhGIAgAAIAABDQgBAMAGAGQAFAHAMAAQAFAAAFgDQAFgDADgFQAEgEACgHQABgGAAgGIAAg6IAgAAIAAB1IgeAAIAAgQIgCAAQgFAJgKAFQgJAGgLAAQgWAAgLgOg");
		this.shape_33.setTransform(175.3,94.9);
	
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#FFFFFF").s().p("AgYA6QgMgFgHgIQgJgIgFgMQgEgLAAgOQAAgNAEgLQAFgMAJgIQAHgIAMgFQALgFANAAQAOAAALAFQALAFAJAIQAIAIAFAMQAFALgBANQABAOgFALQgFAMgIAIQgJAIgLAFQgLAFgOAAQgNAAgLgFgAgLgeQgFACgFAEQgEAFgDAGQgCAGAAAHQAAAIACAGQADAGAEAFQAFAEAFACQAGADAFAAQAGAAAGgDQAGgCAEgEQAEgFADgGQACgGAAgIQAAgHgCgGQgDgGgEgFQgEgEgGgCQgGgDgGAAQgFAAgGADg");
		this.shape_34.setTransform(161.6,94.7);
	
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#FFFFFF").s().p("AgPBWIAAhQIg5hbIAmAAIAiA5IABAAIAig5IAmAAIg4BbIAABQg");
		this.shape_35.setTransform(147,92);
	
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#FFFFFF").s().p("AgUAaIANgWQgEgCgFgEQgDgFAAgHQAAgIAGgGQAHgGAHAAQAJAAAGAGQAFAGABAIQAAAFgCADIgEAHIgXAig");
		this.shape_36.setTransform(130.8,100.1);
	
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#FFFFFF").s().p("AgpBVIAag6IgxhvIAjAAIAdBHIACAAIAchHIAjAAIhICpg");
		this.shape_37.setTransform(120.9,97.3);
	
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#FFFFFF").s().p("AgbA8QgIgDgGgGQgGgFgEgHQgDgIAAgJQAAgJAEgHQADgGAHgGQAGgFAJgDQAJgDAKAAQAKAAAIACIAMAEIAAgEQAAgJgHgGQgIgGgKAAQgQAAgLANIgXgPQATgYAgAAQAaAAAPANQAOANAAAZIAABGIgfAAIAAgNIgCAAQgFAHgIAFQgIAFgLAAQgJAAgIgDgAgQAKQgHAFAAAHQAAAHAGAFQAGAEAIAAQAFAAAFgCQAGgCADgEQAEgEACgFQACgFAAgFIgLgEQgGgCgHAAQgKAAgGAFg");
		this.shape_38.setTransform(107.6,94.7);
	
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#FFFFFF").s().p("AAUBWIgfgzIgOANIAAAmIgfAAIAAirIAfAAIAABcIACAAIAmglIAnAAIAAACIgsApIAvBHIAAACg");
		this.shape_39.setTransform(95.9,92);
	
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#FFFFFF").s().p("AgjBTQgQgHgMgMQgMgNgHgQQgHgQAAgTQAAgSAHgQQAHgRAMgMQAMgMAQgHQARgHASAAQATAAARAHQAQAHAMAMQAMAMAHARQAHAQAAASQAAATgHAQQgHAQgMANQgMAMgQAHQgRAHgTAAQgSAAgRgHgAgWg2QgKAEgIAIQgIAIgEALQgEALAAAMQAAANAEALQAEALAIAIQAIAHAKAFQALAEALAAQAMAAAKgEQALgFAIgHQAHgIAFgLQAEgLAAgNQAAgMgEgLQgFgLgHgIQgIgIgLgEQgKgEgMAAQgLAAgLAEg");
		this.shape_40.setTransform(78.9,92);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(25));
	
		// BG Tile
		this.instance_1 = new lib.BGTile();
		this.instance_1.parent = this;
		this.instance_1.setTransform(18,379.2,1,1,0,0,0,35,35);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(18));
	
		// BG Tile
		this.instance_2 = new lib.BGTile();
		this.instance_2.parent = this;
		this.instance_2.setTransform(285,379.2,1,1,0,0,0,35,35);
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(20));
	
		// BG Tile
		this.instance_3 = new lib.BGTile();
		this.instance_3.parent = this;
		this.instance_3.setTransform(222,364.9,1,1,0,0,0,35,35);
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).wait(23));
	
		// BG Tile
		this.instance_4 = new lib.BGTile();
		this.instance_4.parent = this;
		this.instance_4.setTransform(153,379.2,1,1,0,0,0,35,35);
		this.instance_4._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(22));
	
		// BG Tile
		this.instance_5 = new lib.BGTile();
		this.instance_5.parent = this;
		this.instance_5.setTransform(88,379.2,1,1,0,0,0,35,35);
		this.instance_5._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(21));
	
		// BG Tile
		this.instance_6 = new lib.BGTile();
		this.instance_6.parent = this;
		this.instance_6.setTransform(169,342,1,1,0,0,0,35,35);
		this.instance_6._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({x:211},14,cjs.Ease.get(1)).wait(4));
	
		// BG Tile
		this.instance_7 = new lib.BGTile();
		this.instance_7.parent = this;
		this.instance_7.setTransform(116,356,1,1,0,0,0,35,35);
		this.instance_7._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(22));
	
		// BG Tile
		this.instance_8 = new lib.BGTile();
		this.instance_8.parent = this;
		this.instance_8.setTransform(285,309.2,1,1,0,0,0,35,35);
		this.instance_8._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({x:274,y:320.2},14,cjs.Ease.get(1)).wait(3));
	
		// BG Tile
		this.instance_9 = new lib.BGTile();
		this.instance_9.parent = this;
		this.instance_9.setTransform(186,329.2,1,1,0,0,0,35,35);
		this.instance_9._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({_off:false},0).wait(18));
	
		// BG Tile
		this.instance_10 = new lib.BGTile();
		this.instance_10.parent = this;
		this.instance_10.setTransform(71,320.2,1,1,0,0,0,35,35);
		this.instance_10._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).wait(24));
	
		// BG Tile
		this.instance_11 = new lib.BGTile();
		this.instance_11.parent = this;
		this.instance_11.setTransform(1,295.2,1,1,0,0,0,35,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:309.2},14,cjs.Ease.get(1)).wait(11));
	
		// BG Tile
		this.instance_12 = new lib.BGTile();
		this.instance_12.parent = this;
		this.instance_12.setTransform(128,295.2,1,1,0,0,0,35,35);
		this.instance_12._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).wait(24));
	
		// BG Tile
		this.instance_13 = new lib.BGTile();
		this.instance_13.parent = this;
		this.instance_13.setTransform(71,269.2,1,1,0,0,0,35,35);
		this.instance_13._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({_off:false},0).wait(23));
	
		// BG Tile
		this.instance_14 = new lib.BGTile();
		this.instance_14.parent = this;
		this.instance_14.setTransform(285,259.2,1,1,0,0,0,35,35);
		this.instance_14._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).wait(22));
	
		// BG Tile
		this.instance_15 = new lib.BGTile();
		this.instance_15.parent = this;
		this.instance_15.setTransform(228,269.2,1,1,0,0,0,35,35);
		this.instance_15._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).wait(21));
	
		// BG Tile
		this.instance_16 = new lib.BGTile();
		this.instance_16.parent = this;
		this.instance_16.setTransform(176,280.2,1,1,0,0,0,35,35);
		this.instance_16._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5).to({_off:false},0).wait(20));
	
		// BG Tile
		this.instance_17 = new lib.BGTile();
		this.instance_17.parent = this;
		this.instance_17.setTransform(141,245.2,1,1,0,0,0,35,35);
		this.instance_17._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).wait(19));
	
		// BG Tile
		this.instance_18 = new lib.BGTile();
		this.instance_18.parent = this;
		this.instance_18.setTransform(71,234,1,1,0,0,0,35,35);
		this.instance_18._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(5).to({_off:false},0).wait(20));
	
		// BG Tile
		this.instance_19 = new lib.BGTile();
		this.instance_19.parent = this;
		this.instance_19.setTransform(28,245.2,1,1,0,0,0,35,35);
		this.instance_19._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4).to({_off:false},0).wait(21));
	
		// BG Tile
		this.instance_20 = new lib.BGTile();
		this.instance_20.parent = this;
		this.instance_20.setTransform(18,189.2,1,1,0,0,0,35,35);
		this.instance_20._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3).to({_off:false},0).wait(22));
	
		// BG Tile
		this.instance_21 = new lib.BGTile();
		this.instance_21.parent = this;
		this.instance_21.setTransform(58,189.2,1,1,0,0,0,35,35);
		this.instance_21._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(1).to({_off:false},0).wait(24));
	
		// BG Tile
		this.instance_22 = new lib.BGTile();
		this.instance_22.parent = this;
		this.instance_22.setTransform(263,234,1,1,0,0,0,35,35);
		this.instance_22._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(2).to({_off:false},0).wait(23));
	
		// BG Tile
		this.instance_23 = new lib.BGTile();
		this.instance_23.parent = this;
		this.instance_23.setTransform(193,189.2,1,1,0,0,0,35,35);
		this.instance_23._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(3).to({_off:false},0).wait(22));
	
		// BG Tile
		this.instance_24 = new lib.BGTile();
		this.instance_24.parent = this;
		this.instance_24.setTransform(193,225.2,1,1,0,0,0,35,35);
		this.instance_24._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(6).to({_off:false},0).wait(19));
	
		// BG Tile
		this.instance_25 = new lib.BGTile();
		this.instance_25.parent = this;
		this.instance_25.setTransform(298,199.2,1,1,0,0,0,35,35);
		this.instance_25._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(4).to({_off:false},0).wait(21));
	
		// BG Tile
		this.instance_26 = new lib.BGTile();
		this.instance_26.parent = this;
		this.instance_26.setTransform(239,171.2,1,1,0,0,0,35,35);
		this.instance_26._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(5).to({_off:false},0).wait(20));
	
		// BG Tile
		this.instance_27 = new lib.BGTile();
		this.instance_27.parent = this;
		this.instance_27.setTransform(263,136.2,1,1,0,0,0,35,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(25));
	
		// BG Tile
		this.instance_28 = new lib.BGTile();
		this.instance_28.parent = this;
		this.instance_28.setTransform(317,140.2,1,1,0,0,0,35,35);
		this.instance_28._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(4).to({_off:false},0).wait(21));
	
		// BG Tile
		this.instance_29 = new lib.BGTile();
		this.instance_29.parent = this;
		this.instance_29.setTransform(130,188.2,1,1,0,0,0,35,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_29).to({x:123,y:175.2},14,cjs.Ease.get(1)).wait(11));
	
		// BG Tile
		this.instance_30 = new lib.BGTile();
		this.instance_30.parent = this;
		this.instance_30.setTransform(158,119.2,1,1,0,0,0,35,35);
		this.instance_30._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({_off:false},0).wait(24));
	
		// BG Tile
		this.instance_31 = new lib.BGTile();
		this.instance_31.parent = this;
		this.instance_31.setTransform(186,140.2,1,1,0,0,0,35,35);
		this.instance_31._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(4).to({_off:false},0).wait(21));
	
		// BG Tile
		this.instance_32 = new lib.BGTile();
		this.instance_32.parent = this;
		this.instance_32.setTransform(58,129.2,1,1,0,0,0,35,35);
		this.instance_32._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(6).to({_off:false},0).wait(19));
	
		// BG Tile
		this.instance_33 = new lib.BGTile();
		this.instance_33.parent = this;
		this.instance_33.setTransform(106,140.2,1,1,0,0,0,35,35);
		this.instance_33._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(2).to({_off:false},0).wait(23));
	
		// BG Tile
		this.instance_34 = new lib.BGTile();
		this.instance_34.parent = this;
		this.instance_34.setTransform(18,119.2,1,1,0,0,0,35,35);
		this.instance_34._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(7).to({_off:false},0).wait(18));
	
		// BG Tile
		this.instance_35 = new lib.BGTile();
		this.instance_35.parent = this;
		this.instance_35.setTransform(36,66.2,1,1,0,0,0,35,35);
		this.instance_35._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(6).to({_off:false},0).wait(19));
	
		// BG Tile
		this.instance_36 = new lib.BGTile();
		this.instance_36.parent = this;
		this.instance_36.setTransform(71,80.2,1,1,0,0,0,35,35);
		this.instance_36._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(8).to({_off:false},0).wait(17));
	
		// BG Tile
		this.instance_37 = new lib.BGTile();
		this.instance_37.parent = this;
		this.instance_37.setTransform(132.1,96.2,1,1,0,0,0,35,35);
		this.instance_37._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(5).to({_off:false},0).wait(20));
	
		// BG Tile
		this.instance_38 = new lib.BGTile();
		this.instance_38.parent = this;
		this.instance_38.setTransform(193,66.2,1,1,0,0,0,35,35);
		this.instance_38._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(2).to({_off:false},0).wait(23));
	
		// BG Tile
		this.instance_39 = new lib.BGTile();
		this.instance_39.parent = this;
		this.instance_39.setTransform(228,101.2,1,1,0,0,0,35,35);
		this.instance_39._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(4).to({_off:false},0).wait(21));
	
		// BG Tile
		this.instance_40 = new lib.BGTile();
		this.instance_40.parent = this;
		this.instance_40.setTransform(285,80.2,1,1,0,0,0,35,35);
		this.instance_40._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({_off:false},0).wait(24));
	
		// BG Tile
		this.instance_41 = new lib.BGTile();
		this.instance_41.parent = this;
		this.instance_41.setTransform(285,19.2,1,1,0,0,0,35,35);
		this.instance_41._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(2).to({_off:false},0).wait(23));
	
		// BG Tile
		this.instance_42 = new lib.BGTile();
		this.instance_42.parent = this;
		this.instance_42.setTransform(251,45.2,1,1,0,0,0,35,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(25));
	
		// BG Tile
		this.instance_43 = new lib.BGTile();
		this.instance_43.parent = this;
		this.instance_43.setTransform(215,19.2,1,1,0,0,0,35,35);
		this.instance_43._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(4).to({_off:false},0).wait(21));
	
		// BG Tile
		this.instance_44 = new lib.BGTile();
		this.instance_44.parent = this;
		this.instance_44.setTransform(88,19.2,1,1,0,0,0,35,35);
		this.instance_44._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(2).to({_off:false},0).wait(23));
	
		// BG Tile
		this.instance_45 = new lib.BGTile();
		this.instance_45.parent = this;
		this.instance_45.setTransform(158,26.2,1,1,0,0,0,35,35);
		this.instance_45._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(5).to({_off:false},0).wait(20));
	
		// BG Tile
		this.instance_46 = new lib.BGTile();
		this.instance_46.parent = this;
		this.instance_46.setTransform(106,45.2,1,1,0,0,0,35,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(25));
	
		// BG Tile
		this.instance_47 = new lib.BGTile();
		this.instance_47.parent = this;
		this.instance_47.setTransform(23,26.2,1,1,0,0,0,35,35);
		this.instance_47._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(7).to({_off:false},0).wait(14).to({_off:true},1).wait(3));
	
		// Layer 57
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#999999").s().p("A3cfFMAAAg+KMAu5gATMAAAA+xg");
		this.shape_41.setTransform(151.1,199);
	
		this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(25));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-34,-2,335.1,401.9);
	
	
	// stage content:
	(lib.gamecanvas = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.NumberedBox();
		this.instance.parent = this;
		this.instance.setTransform(580,280.4,1,1,0,0,0,30.5,30.5);
		new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.NumberedBox(), 3);
	
		this.instance_1 = new lib.NumberedBox();
		this.instance_1.parent = this;
		this.instance_1.setTransform(602,140.4,1,1,0,0,0,30.5,30.5);
		new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.NumberedBox(), 3);
	
		this.instance_2 = new lib.GameOverView();
		this.instance_2.parent = this;
		this.instance_2.setTransform(150,203.9,1,1,0,0,0,150,202);
	
		this.instance_3 = new lib.NumberedBox();
		this.instance_3.parent = this;
		this.instance_3.setTransform(657.7,210.6,1,1,0,0,0,30.5,30.5);
		new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.NumberedBox(), 3);
	
		this.instance_4 = new lib.Background();
		this.instance_4.parent = this;
		this.instance_4.setTransform(660.2,200.1,1,1,0,0,0,151,200.1);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(116,199.9,845.3,401.9);
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