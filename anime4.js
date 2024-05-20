(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"anime4_atlas_1", frames: [[0,0,2048,2048]]},
		{name:"anime4_atlas_2", frames: [[0,0,1024,2048]]},
		{name:"anime4_atlas_3", frames: [[0,0,1024,1024],[609868724,1,-1040187284,-788529043]]},
		{name:"anime4_atlas_4", frames: [[0,0,1024,1024],[609868724,1,-1040187284,-788529043]]},
		{name:"anime4_atlas_5", frames: [[609868724,1,-1040187284,-788529043],[0,0,1024,1024]]},
		{name:"anime4_atlas_6", frames: [[0,0,1024,1024]]},
		{name:"anime4_atlas_7", frames: [[0,0,1024,1024]]},
		{name:"anime4_atlas_8", frames: [[0,0,1024,1024]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(ss["anime4_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["anime4_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["anime4_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["anime4_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.initialize(ss["anime4_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.initialize(ss["anime4_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.initialize(ss["anime4_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.initialize(ss["anime4_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsGMHIAA4NIYNAAIAAYNg");
	mask.setTransform(77.525,77.525);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.1514,0.1514);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgjtAjuMAAAhHbMBHbAAAMAAABHbg");
	mask_1.setTransform(228.625,228.625);

	// Layer_3
	this.instance_1 = new lib.Image_7();
	this.instance_1.setTransform(0,0,0.4466,0.4466);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,457.3,457.3), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A9hdiMAAAg7DMA7DAAAMAAAA7Dg");
	mask_2.setTransform(188.95,188.975);

	// Layer_3
	this.instance_2 = new lib.Image_6();
	this.instance_2.setTransform(0,0,0.3691,0.3691);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0,0,377.9,378), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtWAtXMAAAhatMBatAAAMAAABatg");
	mask.setTransform(290.3,290.3);

	// Layer_3
	this.instance = new lib.Image_5();
	this.instance.setTransform(0,0,0.2835,0.2835);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,580.6,580.6), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aucc5MAAAg5xIc4AAMAAAA5xg");
	mask_1.setTransform(92.45,184.9);

	// Layer_3
	this.instance_1 = new lib.Image_4();
	this.instance_1.setTransform(0,0,0.1806,0.1806);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,184.9,369.8), null);


(lib.ClipGroup_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AozI0IAAxnIRnAAIAARng");
	mask_3.setTransform(56.4,56.4);

	// Layer_3
	this.instance_3 = new lib.Image_3();
	this.instance_3.setTransform(0,0,0.1102,0.1102);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_3, new cjs.Rectangle(0,0,112.8,112.8), null);


(lib.ClipGroup_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AogIhIAAxBIRBAAIAARBg");
	mask_4.setTransform(54.45,54.45);

	// Layer_3
	this.instance_4 = new lib.Image_2();
	this.instance_4.setTransform(0,0,0.1063,0.1063);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_4, new cjs.Rectangle(0,0,108.9,108.9), null);


(lib.ClipGroup_0_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AsyMzIAA5lIZlAAIAAZlg");
	mask_5.setTransform(81.9,81.9);

	// Layer_3
	this.instance_5 = new lib.Image_1();
	this.instance_5.setTransform(0,0,0.16,0.16);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_5, new cjs.Rectangle(0,0,163.8,163.8), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoSI2QjdjPgXkuIAAhxQAWkpDYjOQDZjPEsgIIAlAAQCbAFCNA9QCIA9BoBrQBoBrA6CJQA6COAACaQABCdg+CRQg6CLhrBrQhsBriMA6QiPA+idgBQkyABjgjRg");
	mask.setTransform(77.45,77.45);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,154.9,154.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgN4Ag5Qmbitk7k8Qk9k8iumbQizmoAAnRQAAnQCzmoQCumbE9k7QE7k9GbiuQGoizHQAAQHQAAGpCzQGaCuE9E9QE8E7CtGbQC0GoAAHQQAAHRi0GoQitGbk8E8Qk9E8maCtQmpC0nQAAQnQAAmoi0g");
	mask_1.setTransform(228.5,228.5);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.setTransform(228.7,228.7,1,1,0,0,0,228.7,228.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,457,457), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgrdiQl5gJlXiYQlMiTj+kEQkAkFiLlPQiRlbAAl7QABl/CUlfQCQlTEFkGQEFkGFUiPQFfiVGAAAQF6AAFcCRQFOCLEFD/QEED/CTFMQCYFXAJF5IAABYQgJF0iTFSQiQFIj+D+Qj9D+lICPQlTCTlzAJg");
	mask_2.setTransform(188.95,188.975);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_0_2();
	this.instance_2.setTransform(189,189,1,1,0,0,0,189,189);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,377.9,378), null);


(lib.ClipGroup_0_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AogUKQj7hqjCjCQjBjChrj7QhukFAAkcQAAkcBukEQBrj8DBjBQDCjCD7hqQEEhuEcAAQEdAAEEBuQD7BqDCDCQDCDBBqD8QBuEEAAEcQAAEdhuEEQhqD7jCDCQjCDCj7BqQkEBukdAAQkcAAkEhug");
	mask_6.setTransform(191.2,189.55);

	// Layer_3
	this.instance_6 = new lib.ClipGroup_1();
	this.instance_6.setTransform(290.3,290.3,1,1,0,0,0,290.3,290.3);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_6, new cjs.Rectangle(51.2,49.6,280,280), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgtWAtXMAAAhatMBatAAAMAAABatg");
	mask_3.setTransform(290.3,290.3);

	// Layer_3
	this.instance_3 = new lib.ClipGroup_0_6();
	this.instance_3.setTransform(290.3,290.3,1,1,0,0,0,290.3,290.3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,580.6,580.6), null);


(lib.ClipGroup_0_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AlgNEQijhEh+h+Qh9h+hFijQhHipAAi4QAAi4BHioQBFijB9h9QB+h+CjhFQCphHC3gBQC4ABCqBHQCiBFB+B+QB+B9BECjQBHCoABC4QgBC4hHCpQhECjh+B+Qh+B+iiBEQiqBHi4AAQi3AAiphHg");
	mask_7.setTransform(91.55,91.6);

	// Layer_3
	this.instance_7 = new lib.ClipGroup_1_1();
	this.instance_7.setTransform(92.5,184.9,1,1,0,0,0,92.5,184.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_7, new cjs.Rectangle(0.8,0.9,181.5,181.5), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Aucc5MAAAg5xIc4AAMAAAA5xg");
	mask_4.setTransform(92.45,184.9);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_0_7();
	this.instance_4.setTransform(92.5,184.9,1,1,0,0,0,92.5,184.9);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,184.9,369.8), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AmIGJQijijAAjmQAAjlCjijQCjiiDlAAQDmAACjCiQCjCjAADlQAADmijCjQiiCijnAAQjlAAijiig");
	mask_5.setTransform(56.475,56.475);

	// Layer_3
	this.instance_5 = new lib.ClipGroup_0_3();
	this.instance_5.setTransform(56.4,56.4,1,1,0,0,0,56.4,56.4);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0.9,1,111.19999999999999,111), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Al7F7QididABjeQgBjdCdidQCdidDeAAQDeAACdCdQCeCdAADdQAADeieCdQidCdjeAAQjeAAididg");
	mask_6.setTransform(54.25,54.475);

	// Layer_3
	this.instance_6 = new lib.ClipGroup_0_4();
	this.instance_6.setTransform(54.5,54.5,1,1,0,0,0,54.5,54.5);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.6,0.9,107.30000000000001,107.19999999999999), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("Ak5LnQiRg9hvhwQhwhvg9iRQhAiWAAikQAAijBAiVQA9iSBwhvQBvhwCRg8QCWhACjAAQCkAACWBAQCRA8BwBwQBvBvA9CSQBACVAACjQAACkhACWQg9CRhvBvQhwBwiRA9QiWA/ikAAQijAAiWg/g");
	mask_7.setTransform(81.875,81.9);

	// Layer_3
	this.instance_7 = new lib.ClipGroup_0_5();
	this.instance_7.setTransform(81.9,81.9,1,1,0,0,0,81.9,81.9);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(1.2,1.3,161.4,161.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.kisi9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(82.55,82.55,0.3606,0.3606,0,0,0,229,229);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi9, new cjs.Rectangle(0,0,164.9,164.9), null);


(lib.kisi8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(55.5,55.45,1,1,0,0,0,56.4,56.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi8, new cjs.Rectangle(-0.9,-0.9,112.9,112.80000000000001), null);


(lib.kisi6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(91.7,184.05,1,1,0,0,0,92.5,184.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi6, new cjs.Rectangle(-0.8,-0.8,184.9,369.8), null);


(lib.kisi5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(159.8,160.9,0.6683,0.6683,0,0,0,290.3,290.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi5, new cjs.Rectangle(-34.2,-33.1,388,388), null);


(lib.kisi4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(59.65,59.6,0.7396,0.7396,0,0,0,81.9,81.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi4, new cjs.Rectangle(-0.9,-0.9,121.2,121.10000000000001), null);


(lib.kisi3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(63,63.05,0.3331,0.3331,0,0,0,189.2,189.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi3, new cjs.Rectangle(0,0,125.9,125.9), null);


(lib.kisi2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_7();
	this.instance.setTransform(70,69.65,1.2993,1.2993,0,0,0,54.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi2, new cjs.Rectangle(-0.8,-1.1,141.5,141.5), null);


(lib.kisi1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(77.5,77.5,1,1,0,0,0,77.5,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi1, new cjs.Rectangle(0,0,155.1,155.1), null);


(lib.kisi10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kisi6();
	this.instance.setTransform(91.7,184.1,1,1,0,0,0,91.7,184.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kisi10, new cjs.Rectangle(-0.8,-0.8,184.9,369.8), null);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.kisi9();
	this.instance.setTransform(92.2,99.8,0.0443,0.0443,0,0,0,80.2,80.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:82.4,regY:82.4,scaleX:0.0462,scaleY:0.0462,x:91.75,y:99.25},0).wait(1).to({scaleX:0.0482,scaleY:0.0482,x:91.15,y:98.6},0).wait(1).to({scaleX:0.0502,scaleY:0.0502,x:90.6,y:97.95},0).wait(1).to({scaleX:0.0524,scaleY:0.0524,x:89.95,y:97.25},0).wait(1).to({scaleX:0.0547,scaleY:0.0547,x:89.35,y:96.55},0).wait(1).to({scaleX:0.057,scaleY:0.057,x:88.7,y:95.8},0).wait(1).to({scaleX:0.0594,scaleY:0.0594,x:88,y:95.05},0).wait(1).to({scaleX:0.062,scaleY:0.062,x:87.3,y:94.2},0).wait(1).to({scaleX:0.0646,scaleY:0.0646,x:86.55,y:93.4},0).wait(1).to({scaleX:0.0673,scaleY:0.0673,x:85.85,y:92.55},0).wait(1).to({scaleX:0.07,scaleY:0.07,x:85.05,y:91.65},0).wait(1).to({scaleX:0.0729,scaleY:0.0729,x:84.25,y:90.75},0).wait(1).to({scaleX:0.0758,scaleY:0.0758,x:83.45,y:89.8},0).wait(1).to({scaleX:0.0789,scaleY:0.0789,x:82.6,y:88.85},0).wait(1).to({scaleX:0.082,scaleY:0.082,x:81.7,y:87.85},0).wait(1).to({scaleX:0.0852,scaleY:0.0852,x:80.8,y:86.8},0).wait(1).to({scaleX:0.0885,scaleY:0.0885,x:79.9,y:85.75},0).wait(1).to({scaleX:0.0919,scaleY:0.0919,x:78.9,y:84.65},0).wait(1).to({scaleX:0.0954,scaleY:0.0954,x:77.95,y:83.55},0).wait(1).to({scaleX:0.0989,scaleY:0.0989,x:76.95,y:82.45},0).wait(1).to({scaleX:0.1026,scaleY:0.1026,x:75.95,y:81.3},0).wait(1).to({scaleX:0.1063,scaleY:0.1063,x:74.9,y:80.1},0).wait(1).to({scaleX:0.1101,scaleY:0.1101,x:73.8,y:78.85},0).wait(1).to({scaleX:0.114,scaleY:0.114,x:72.75,y:77.65},0).wait(1).to({scaleX:0.118,scaleY:0.118,x:71.6,y:76.35},0).wait(1).to({scaleX:0.1221,scaleY:0.1221,x:70.45,y:75.05},0).wait(1).to({scaleX:0.1262,scaleY:0.1262,x:69.3,y:73.75},0).wait(1).to({scaleX:0.1305,scaleY:0.1305,x:68.1,y:72.35},0).wait(1).to({scaleX:0.1348,scaleY:0.1348,x:66.9,y:71},0).wait(1).to({scaleX:0.1393,scaleY:0.1393,x:65.65,y:69.55},0).wait(1).to({scaleX:0.1438,scaleY:0.1438,x:64.4,y:68.15},0).wait(1).to({scaleX:0.1484,scaleY:0.1484,x:63.1,y:66.65},0).wait(1).to({scaleX:0.1531,scaleY:0.1531,x:61.8,y:65.15},0).wait(1).to({scaleX:0.1578,scaleY:0.1578,x:60.45,y:63.65},0).wait(1).to({scaleX:0.1627,scaleY:0.1627,x:59.1,y:62.1},0).wait(1).to({scaleX:0.1676,scaleY:0.1676,x:57.7,y:60.5},0).wait(1).to({scaleX:0.1727,scaleY:0.1727,x:56.35,y:58.95},0).wait(1).to({scaleX:0.1778,scaleY:0.1778,x:54.9,y:57.3},0).wait(1).to({scaleX:0.183,scaleY:0.183,x:53.45,y:55.65},0).wait(1).to({scaleX:0.1883,scaleY:0.1883,x:51.95,y:53.95},0).wait(1).to({scaleX:0.1935,scaleY:0.1935,x:50.5,y:52.3},0).wait(3));

	// Layer_1
	this.instance_1 = new lib.kisi3();
	this.instance_1.setTransform(104.5,121.65,0.0339,0.0339,0,0,0,62,62);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:62.9,regY:62.9,scaleX:0.0383,scaleY:0.0383,x:103.6,y:121.95},0).wait(1).to({scaleX:0.0429,scaleY:0.0429,x:102.7,y:122.35},0).wait(1).to({scaleX:0.0477,scaleY:0.0477,x:101.7,y:122.7},0).wait(1).to({scaleX:0.0528,scaleY:0.0528,x:100.7,y:123.05},0).wait(1).to({scaleX:0.058,scaleY:0.058,x:99.65,y:123.45},0).wait(1).to({scaleX:0.0635,scaleY:0.0635,x:98.55,y:123.85},0).wait(1).to({scaleX:0.0692,scaleY:0.0692,x:97.4,y:124.25},0).wait(1).to({scaleX:0.0751,scaleY:0.0751,x:96.2,y:124.7},0).wait(1).to({scaleX:0.0812,scaleY:0.0812,x:94.95,y:125.15},0).wait(1).to({scaleX:0.0875,scaleY:0.0875,x:93.7,y:125.65},0).wait(1).to({scaleX:0.0941,scaleY:0.0941,x:92.35,y:126.1},0).wait(1).to({scaleX:0.1008,scaleY:0.1008,x:91.05,y:126.65},0).wait(1).to({scaleX:0.1078,scaleY:0.1078,x:89.65,y:127.15},0).wait(1).to({scaleX:0.115,scaleY:0.115,x:88.2,y:127.7},0).wait(1).to({scaleX:0.1224,scaleY:0.1224,x:86.7,y:128.25},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:85.15,y:128.8},0).wait(1).to({scaleX:0.1379,scaleY:0.1379,x:83.55,y:129.35},0).wait(1).to({scaleX:0.1459,scaleY:0.1459,x:81.95,y:130},0).wait(1).to({scaleX:0.1542,scaleY:0.1542,x:80.3,y:130.6},0).wait(1).to({scaleX:0.1627,scaleY:0.1627,x:78.6,y:131.25},0).wait(1).to({scaleX:0.1714,scaleY:0.1714,x:76.85,y:131.9},0).wait(1).to({scaleX:0.1803,scaleY:0.1803,x:75.05,y:132.55},0).wait(1).to({scaleX:0.1894,scaleY:0.1894,x:73.2,y:133.2},0).wait(1).to({scaleX:0.1987,scaleY:0.1987,x:71.3,y:133.9},0).wait(1).to({scaleX:0.2083,scaleY:0.2083,x:69.4,y:134.6},0).wait(1).to({scaleX:0.218,scaleY:0.218,x:67.4,y:135.3},0).wait(1).to({scaleX:0.228,scaleY:0.228,x:65.4,y:136.05},0).wait(1).to({scaleX:0.2382,scaleY:0.2382,x:63.35,y:136.85},0).wait(1).to({scaleX:0.2486,scaleY:0.2486,x:61.25,y:137.6},0).wait(1).to({scaleX:0.2593,scaleY:0.2593,x:59.1,y:138.35},0).wait(1).to({scaleX:0.2701,scaleY:0.2701,x:56.95,y:139.2},0).wait(1).to({scaleX:0.2812,scaleY:0.2812,x:54.7,y:140},0).wait(1).to({scaleX:0.2924,scaleY:0.2924,x:52.45,y:140.85},0).wait(1).to({scaleX:0.3039,scaleY:0.3039,x:50.1,y:141.7},0).wait(1).to({scaleX:0.3156,scaleY:0.3156,x:47.75,y:142.55},0).wait(1).to({scaleX:0.3258,scaleY:0.3258,x:45.7,y:143.3},0).wait(5));

	// Layer_1
	this.instance_2 = new lib.kisi5();
	this.instance_2.setTransform(94.3,94,0.041,0.041,0,0,0,99.9,97.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(1).to({regX:93.6,regY:93.6,scaleX:0.0445,scaleY:0.0445,x:94.1,y:93.1},0).wait(1).to({scaleX:0.0482,scaleY:0.0482,x:94.25,y:92.35},0).wait(1).to({scaleX:0.052,scaleY:0.052,x:94.4,y:91.55},0).wait(1).to({scaleX:0.056,scaleY:0.056,x:94.55,y:90.75},0).wait(1).to({scaleX:0.0602,scaleY:0.0602,x:94.7,y:89.85},0).wait(1).to({scaleX:0.0646,scaleY:0.0646,x:94.85,y:88.95},0).wait(1).to({scaleX:0.0691,scaleY:0.0691,x:94.95,y:88},0).wait(1).to({scaleX:0.0739,scaleY:0.0739,x:95.15,y:87},0).wait(1).to({scaleX:0.0788,scaleY:0.0788,x:95.35,y:86},0).wait(1).to({scaleX:0.0839,scaleY:0.0839,x:95.5,y:84.95},0).wait(1).to({scaleX:0.0892,scaleY:0.0892,x:95.65,y:83.85},0).wait(1).to({scaleX:0.0947,scaleY:0.0947,x:95.85,y:82.7},0).wait(1).to({scaleX:0.1004,scaleY:0.1004,x:96.05,y:81.55},0).wait(1).to({scaleX:0.1062,scaleY:0.1062,x:96.25,y:80.35},0).wait(1).to({scaleX:0.1122,scaleY:0.1122,x:96.45,y:79.1},0).wait(1).to({scaleX:0.1184,scaleY:0.1184,x:96.7,y:77.8},0).wait(1).to({scaleX:0.1248,scaleY:0.1248,x:96.9,y:76.5},0).wait(1).to({scaleX:0.1314,scaleY:0.1314,x:97.1,y:75.1},0).wait(1).to({scaleX:0.1382,scaleY:0.1382,x:97.35,y:73.75},0).wait(1).to({scaleX:0.1451,scaleY:0.1451,x:97.6,y:72.3},0).wait(1).to({scaleX:0.1522,scaleY:0.1522,x:97.85,y:70.8},0).wait(1).to({scaleX:0.1595,scaleY:0.1595,x:98.1,y:69.3},0).wait(1).to({scaleX:0.167,scaleY:0.167,x:98.35,y:67.75},0).wait(1).to({scaleX:0.1747,scaleY:0.1747,x:98.6,y:66.15},0).wait(1).to({scaleX:0.1825,scaleY:0.1825,x:98.9,y:64.55},0).wait(1).to({scaleX:0.1906,scaleY:0.1906,x:99.15,y:62.9},0).wait(1).to({scaleX:0.1988,scaleY:0.1988,x:99.4,y:61.15},0).wait(1).to({scaleX:0.2072,scaleY:0.2072,x:99.7,y:59.45},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:100,y:57.65},0).wait(1).to({scaleX:0.2245,scaleY:0.2245,x:100.3,y:55.85},0).wait(1).to({scaleX:0.2335,scaleY:0.2335,x:100.6,y:54},0).wait(1).to({scaleX:0.2426,scaleY:0.2426,x:100.9,y:52.1},0).wait(1).to({scaleX:0.2519,scaleY:0.2519,x:101.25,y:50.2},0).wait(1).to({scaleX:0.2614,scaleY:0.2614,x:101.55,y:48.2},0).wait(1).to({scaleX:0.2711,scaleY:0.2711,x:101.9,y:46.2},0).wait(1).to({scaleX:0.2775,scaleY:0.2775,x:102.1,y:44.85},0).wait(2));

	// Layer_1
	this.instance_3 = new lib.kisi10();
	this.instance_3.setTransform(101.65,95.05,0.041,0.041,0,0,0,78,87.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:90.8,regY:90.8,scaleX:0.0439,scaleY:0.0439,x:103,y:95.35},0).wait(1).to({scaleX:0.047,scaleY:0.047,x:103.9,y:95.5},0).wait(1).to({scaleX:0.0501,scaleY:0.0501,x:104.85,y:95.7},0).wait(1).to({scaleX:0.0534,scaleY:0.0534,x:105.8,y:95.9},0).wait(1).to({scaleX:0.0569,scaleY:0.0569,x:106.8,y:96.1},0).wait(1).to({scaleX:0.0604,scaleY:0.0604,x:107.9,y:96.35},0).wait(1).to({scaleX:0.0641,scaleY:0.0641,x:108.95,y:96.55},0).wait(1).to({scaleX:0.068,scaleY:0.068,x:110.1,y:96.8},0).wait(1).to({scaleX:0.072,scaleY:0.072,x:111.3,y:97.05},0).wait(1).to({scaleX:0.0761,scaleY:0.0761,x:112.5,y:97.3},0).wait(1).to({scaleX:0.0803,scaleY:0.0803,x:113.75,y:97.55},0).wait(1).to({scaleX:0.0847,scaleY:0.0847,x:115.05,y:97.85},0).wait(1).to({scaleX:0.0892,scaleY:0.0892,x:116.35,y:98.1},0).wait(1).to({scaleX:0.0939,scaleY:0.0939,x:117.75,y:98.35},0).wait(1).to({scaleX:0.0986,scaleY:0.0986,x:119.15,y:98.65},0).wait(1).to({scaleX:0.1036,scaleY:0.1036,x:120.6,y:98.95},0).wait(1).to({scaleX:0.1086,scaleY:0.1086,x:122.1,y:99.25},0).wait(1).to({scaleX:0.1138,scaleY:0.1138,x:123.65,y:99.6},0).wait(1).to({scaleX:0.1191,scaleY:0.1191,x:125.2,y:99.9},0).wait(1).to({scaleX:0.1246,scaleY:0.1246,x:126.8,y:100.25},0).wait(1).to({scaleX:0.1302,scaleY:0.1302,x:128.45,y:100.6},0).wait(1).to({scaleX:0.1359,scaleY:0.1359,x:130.15,y:100.95},0).wait(1).to({scaleX:0.1418,scaleY:0.1418,x:131.85,y:101.3},0).wait(1).to({scaleX:0.1478,scaleY:0.1478,x:133.65,y:101.65},0).wait(1).to({scaleX:0.1539,scaleY:0.1539,x:135.45,y:102.05},0).wait(1).to({scaleX:0.1602,scaleY:0.1602,x:137.35,y:102.45},0).wait(1).to({scaleX:0.1666,scaleY:0.1666,x:139.2,y:102.8},0).wait(1).to({scaleX:0.1731,scaleY:0.1731,x:141.15,y:103.2},0).wait(1).to({scaleX:0.1798,scaleY:0.1798,x:143.1,y:103.6},0).wait(1).to({scaleX:0.1866,scaleY:0.1866,x:145.15,y:104.05},0).wait(1).to({scaleX:0.1935,scaleY:0.1935,x:147.15,y:104.45},0).wait(1).to({scaleX:0.2006,scaleY:0.2006,x:149.25,y:104.9},0).wait(1).to({scaleX:0.2078,scaleY:0.2078,x:151.35,y:105.35},0).wait(1).to({scaleX:0.2151,scaleY:0.2151,x:153.55,y:105.8},0).wait(1).to({scaleX:0.2226,scaleY:0.2226,x:155.75,y:106.25},0).wait(1).to({scaleX:0.2302,scaleY:0.2302,x:158,y:106.7},0).wait(1).to({scaleX:0.238,scaleY:0.238,x:160.3,y:107.2},0).wait(1).to({scaleX:0.2459,scaleY:0.2459,x:162.6,y:107.65},0).wait(1).to({scaleX:0.2539,scaleY:0.2539,x:165,y:108.15},0).wait(1).to({scaleX:0.2561,scaleY:0.2561,x:165.65,y:108.3},0).wait(3));

	// Layer_1
	this.instance_4 = new lib.kisi8();
	this.instance_4.setTransform(96.6,95.7,0.0326,0.0326,0,0,0,53.7,53.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:55.6,regY:55.5,scaleX:0.037,scaleY:0.037,x:97.25,y:96.45},0).wait(1).to({scaleX:0.0416,scaleY:0.0416,x:97.9,y:97.2},0).wait(1).to({scaleX:0.0464,scaleY:0.0464,x:98.6,y:98},0).wait(1).to({scaleX:0.0514,scaleY:0.0514,x:99.3,y:98.85},0).wait(1).to({scaleX:0.0567,scaleY:0.0567,x:100.05,y:99.7},0).wait(1).to({scaleX:0.0622,scaleY:0.0622,x:100.85,y:100.6},0).wait(1).to({scaleX:0.0679,scaleY:0.0679,x:101.6,y:101.5},0).wait(1).to({scaleX:0.0738,scaleY:0.0738,x:102.5,y:102.5},0).wait(1).to({scaleX:0.08,scaleY:0.08,x:103.35,y:103.55},0).wait(1).to({scaleX:0.0864,scaleY:0.0864,x:104.25,y:104.6},0).wait(1).to({scaleX:0.093,scaleY:0.093,x:105.2,y:105.65},0).wait(1).to({scaleX:0.0998,scaleY:0.0998,x:106.2,y:106.8},0).wait(1).to({scaleX:0.1069,scaleY:0.1069,x:107.2,y:107.95},0).wait(1).to({scaleX:0.1142,scaleY:0.1142,x:108.2,y:109.15},0).wait(1).to({scaleX:0.1217,scaleY:0.1217,x:109.25,y:110.4},0).wait(1).to({scaleX:0.1294,scaleY:0.1294,x:110.4,y:111.7},0).wait(1).to({scaleX:0.1374,scaleY:0.1374,x:111.5,y:112.95},0).wait(1).to({scaleX:0.1455,scaleY:0.1455,x:112.7,y:114.35},0).wait(1).to({scaleX:0.154,scaleY:0.154,x:113.85,y:115.7},0).wait(1).to({scaleX:0.1626,scaleY:0.1626,x:115.1,y:117.1},0).wait(1).to({scaleX:0.1714,scaleY:0.1714,x:116.35,y:118.55},0).wait(1).to({scaleX:0.1805,scaleY:0.1805,x:117.65,y:120.05},0).wait(1).to({scaleX:0.1898,scaleY:0.1898,x:118.95,y:121.6},0).wait(1).to({scaleX:0.1993,scaleY:0.1993,x:120.35,y:123.15},0).wait(1).to({scaleX:0.2091,scaleY:0.2091,x:121.65,y:124.75},0).wait(1).to({scaleX:0.219,scaleY:0.219,x:123.15,y:126.4},0).wait(1).to({scaleX:0.2292,scaleY:0.2292,x:124.55,y:128.05},0).wait(1).to({scaleX:0.2397,scaleY:0.2397,x:126,y:129.8},0).wait(1).to({scaleX:0.2503,scaleY:0.2503,x:127.55,y:131.55},0).wait(1).to({scaleX:0.2612,scaleY:0.2612,x:129.05,y:133.35},0).wait(1).to({scaleX:0.2723,scaleY:0.2723,x:130.7,y:135.15},0).wait(1).to({scaleX:0.2836,scaleY:0.2836,x:132.25,y:137.05},0).wait(1).to({scaleX:0.2951,scaleY:0.2951,x:133.9,y:138.95},0).wait(1).to({scaleX:0.3069,scaleY:0.3069,x:135.55,y:140.9},0).wait(1).to({scaleX:0.3189,scaleY:0.3189,x:137.3,y:142.85},0).wait(1).to({scaleX:0.3306,scaleY:0.3306,x:138.95,y:144.75},0).wait(3));

	// Layer_1
	this.instance_5 = new lib.kisi2();
	this.instance_5.setTransform(103.1,109.45,0.0404,0.0404,0,0,0,70.5,70.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).wait(1).to({regX:69.7,regY:69.6,scaleX:0.0454,scaleY:0.0454,x:102.9,y:110.2},0).wait(1).to({scaleX:0.0506,scaleY:0.0506,x:102.75,y:111.05},0).wait(1).to({scaleX:0.056,scaleY:0.056,x:102.6,y:112},0).wait(1).to({scaleX:0.0618,scaleY:0.0618,x:102.45,y:112.95},0).wait(1).to({scaleX:0.0678,scaleY:0.0678,x:102.3,y:113.95},0).wait(1).to({scaleX:0.0741,scaleY:0.0741,x:102.05,y:115},0).wait(1).to({scaleX:0.0807,scaleY:0.0807,x:101.9,y:116.1},0).wait(1).to({scaleX:0.0876,scaleY:0.0876,x:101.7,y:117.25},0).wait(1).to({scaleX:0.0948,scaleY:0.0948,x:101.5,y:118.45},0).wait(1).to({scaleX:0.1022,scaleY:0.1022,x:101.25,y:119.65},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:101.05,y:120.95},0).wait(1).to({scaleX:0.118,scaleY:0.118,x:100.8,y:122.3},0).wait(1).to({scaleX:0.1262,scaleY:0.1262,x:100.6,y:123.7},0).wait(1).to({scaleX:0.1348,scaleY:0.1348,x:100.35,y:125.1},0).wait(1).to({scaleX:0.1436,scaleY:0.1436,x:100.1,y:126.55},0).wait(1).to({scaleX:0.1528,scaleY:0.1528,x:99.85,y:128.1},0).wait(1).to({scaleX:0.1622,scaleY:0.1622,x:99.55,y:129.65},0).wait(1).to({scaleX:0.1719,scaleY:0.1719,x:99.3,y:131.25},0).wait(1).to({scaleX:0.1818,scaleY:0.1818,x:99,y:132.95},0).wait(1).to({scaleX:0.1921,scaleY:0.1921,x:98.75,y:134.6},0).wait(1).to({scaleX:0.2026,scaleY:0.2026,x:98.4,y:136.4},0).wait(1).to({scaleX:0.2134,scaleY:0.2134,x:98.15,y:138.2},0).wait(1).to({scaleX:0.2245,scaleY:0.2245,x:97.8,y:140.05},0).wait(1).to({scaleX:0.2359,scaleY:0.2359,x:97.5,y:141.9},0).wait(1).to({scaleX:0.2476,scaleY:0.2476,x:97.15,y:143.9},0).wait(1).to({scaleX:0.2595,scaleY:0.2595,x:96.8,y:145.85},0).wait(1).to({scaleX:0.2717,scaleY:0.2717,x:96.45,y:147.9},0).wait(1).to({scaleX:0.2842,scaleY:0.2842,x:96.1,y:150},0).wait(1).to({scaleX:0.297,scaleY:0.297,x:95.75,y:152.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:95.35,y:154.3},0).wait(1).to({scaleX:0.3234,scaleY:0.3234,x:95,y:156.5},0).wait(1).to({scaleX:0.337,scaleY:0.337,x:94.6,y:158.75},0).wait(1).to({scaleX:0.346,scaleY:0.346,x:94.35,y:160.3},0).wait(2));

	// Layer_1
	this.instance_6 = new lib.kisi1();
	this.instance_6.setTransform(95.3,104.3,0.0254,0.0254,0,0,0,74.9,74.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).wait(1).to({regX:77.5,regY:77.5,scaleX:0.0294,scaleY:0.0294,x:96.3,y:103.6},0).wait(1).to({scaleX:0.0336,scaleY:0.0336,x:97.25,y:102.8},0).wait(1).to({scaleX:0.0381,scaleY:0.0381,x:98.3,y:101.95},0).wait(1).to({scaleX:0.0429,scaleY:0.0429,x:99.4,y:101.05},0).wait(1).to({scaleX:0.0479,scaleY:0.0479,x:100.55,y:100.15},0).wait(1).to({scaleX:0.0532,scaleY:0.0532,x:101.8,y:99.15},0).wait(1).to({scaleX:0.0587,scaleY:0.0587,x:103.1,y:98.15},0).wait(1).to({scaleX:0.0644,scaleY:0.0644,x:104.45,y:97.1},0).wait(1).to({scaleX:0.0704,scaleY:0.0704,x:105.8,y:95.95},0).wait(1).to({scaleX:0.0767,scaleY:0.0767,x:107.3,y:94.8},0).wait(1).to({scaleX:0.0832,scaleY:0.0832,x:108.8,y:93.6},0).wait(1).to({scaleX:0.0899,scaleY:0.0899,x:110.35,y:92.3},0).wait(1).to({scaleX:0.0969,scaleY:0.0969,x:112,y:91},0).wait(1).to({scaleX:0.1042,scaleY:0.1042,x:113.7,y:89.65},0).wait(1).to({scaleX:0.1117,scaleY:0.1117,x:115.45,y:88.25},0).wait(1).to({scaleX:0.1195,scaleY:0.1195,x:117.25,y:86.85},0).wait(1).to({scaleX:0.1275,scaleY:0.1275,x:119.15,y:85.35},0).wait(1).to({scaleX:0.1357,scaleY:0.1357,x:121.05,y:83.8},0).wait(1).to({scaleX:0.1442,scaleY:0.1442,x:123.05,y:82.25},0).wait(1).to({scaleX:0.153,scaleY:0.153,x:125.05,y:80.6},0).wait(1).to({scaleX:0.162,scaleY:0.162,x:127.15,y:78.9},0).wait(1).to({scaleX:0.1712,scaleY:0.1712,x:129.3,y:77.2},0).wait(1).to({scaleX:0.1807,scaleY:0.1807,x:131.55,y:75.4},0).wait(1).to({scaleX:0.1905,scaleY:0.1905,x:133.8,y:73.6},0).wait(1).to({scaleX:0.2005,scaleY:0.2005,x:136.15,y:71.75},0).wait(1).to({scaleX:0.2108,scaleY:0.2108,x:138.55,y:69.85},0).wait(1).to({scaleX:0.2213,scaleY:0.2213,x:141,y:67.9},0).wait(1).to({scaleX:0.232,scaleY:0.232,x:143.5,y:65.9},0).wait(1).to({scaleX:0.243,scaleY:0.243,x:146.05,y:63.85},0).wait(1).to({scaleX:0.2543,scaleY:0.2543,x:148.65,y:61.75},0).wait(1).to({scaleX:0.258,scaleY:0.258,x:149.55,y:61.05},0).wait(1));

	// Layer_1
	this.instance_7 = new lib.kisi4();
	this.instance_7.setTransform(109.15,108.2,0.041,0.041,0,0,0,61,58.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).wait(1).to({regX:59.7,regY:59.6,scaleX:0.046,scaleY:0.046,x:108.15,y:108.05},0).wait(1).to({scaleX:0.0511,scaleY:0.0511,x:107.2,y:107.8},0).wait(1).to({scaleX:0.0565,scaleY:0.0565,x:106.15,y:107.55},0).wait(1).to({scaleX:0.0621,scaleY:0.0621,x:105.1,y:107.35},0).wait(1).to({scaleX:0.068,scaleY:0.068,x:104,y:107.1},0).wait(1).to({scaleX:0.0741,scaleY:0.0741,x:102.85,y:106.85},0).wait(1).to({scaleX:0.0804,scaleY:0.0804,x:101.7,y:106.6},0).wait(1).to({scaleX:0.087,scaleY:0.087,x:100.5,y:106.35},0).wait(1).to({scaleX:0.0938,scaleY:0.0938,x:99.2,y:106.05},0).wait(1).to({scaleX:0.1008,scaleY:0.1008,x:97.85,y:105.75},0).wait(1).to({scaleX:0.1081,scaleY:0.1081,x:96.55,y:105.45},0).wait(1).to({scaleX:0.1156,scaleY:0.1156,x:95.15,y:105.15},0).wait(1).to({scaleX:0.1233,scaleY:0.1233,x:93.65,y:104.85},0).wait(1).to({scaleX:0.1313,scaleY:0.1313,x:92.2,y:104.45},0).wait(1).to({scaleX:0.1395,scaleY:0.1395,x:90.7,y:104.15},0).wait(1).to({scaleX:0.1479,scaleY:0.1479,x:89.1,y:103.8},0).wait(1).to({scaleX:0.1566,scaleY:0.1566,x:87.45,y:103.45},0).wait(1).to({scaleX:0.1655,scaleY:0.1655,x:85.8,y:103.05},0).wait(1).to({scaleX:0.1746,scaleY:0.1746,x:84.1,y:102.7},0).wait(1).to({scaleX:0.184,scaleY:0.184,x:82.35,y:102.3},0).wait(1).to({scaleX:0.1936,scaleY:0.1936,x:80.5,y:101.95},0).wait(1).to({scaleX:0.2035,scaleY:0.2035,x:78.7,y:101.55},0).wait(1).to({scaleX:0.2136,scaleY:0.2136,x:76.8,y:101.15},0).wait(1).to({scaleX:0.2239,scaleY:0.2239,x:74.85,y:100.7},0).wait(1).to({scaleX:0.2344,scaleY:0.2344,x:72.9,y:100.2},0).wait(1).to({scaleX:0.2452,scaleY:0.2452,x:70.9,y:99.8},0).wait(1).to({scaleX:0.2562,scaleY:0.2562,x:68.8,y:99.3},0).wait(1).to({scaleX:0.2675,scaleY:0.2675,x:66.7,y:98.9},0).wait(1).to({scaleX:0.279,scaleY:0.279,x:64.55,y:98.45},0).wait(1).to({scaleX:0.2907,scaleY:0.2907,x:62.35,y:97.9},0).wait(1).to({scaleX:0.3026,scaleY:0.3026,x:60.1,y:97.45},0).wait(1).to({scaleX:0.3148,scaleY:0.3148,x:57.85,y:96.9},0).wait(1).to({scaleX:0.3272,scaleY:0.3272,x:55.55,y:96.4},0).wait(1).to({scaleX:0.3399,scaleY:0.3399,x:53.15,y:95.9},0).wait(1).to({scaleX:0.3528,scaleY:0.3528,x:50.75,y:95.4},0).wait(1).to({scaleX:0.3659,scaleY:0.3659,x:48.3,y:94.8},0).wait(1).to({scaleX:0.3793,scaleY:0.3793,x:45.8,y:94.25},0).wait(1).to({scaleX:0.387,scaleY:0.387,x:44.35,y:93.95},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(121.3,119,67.60000000000001,65.4);
// library properties:
lib.properties = {
	id: '9C8C372532E14B36A74561EA2785E00C',
	width: 200,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/anime4_atlas_1.png", id:"anime4_atlas_1"},
		{src:"images/anime4_atlas_2.png", id:"anime4_atlas_2"},
		{src:"images/anime4_atlas_3.png", id:"anime4_atlas_3"},
		{src:"images/anime4_atlas_4.png", id:"anime4_atlas_4"},
		{src:"images/anime4_atlas_5.png", id:"anime4_atlas_5"},
		{src:"images/anime4_atlas_6.png", id:"anime4_atlas_6"},
		{src:"images/anime4_atlas_7.png", id:"anime4_atlas_7"},
		{src:"images/anime4_atlas_8.png", id:"anime4_atlas_8"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9C8C372532E14B36A74561EA2785E00C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;