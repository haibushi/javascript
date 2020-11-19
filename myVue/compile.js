class Compile{
    constructor(el,vm){
    	this.$el = el && document.querySelector(el);
    	
    	this.$vm = vm;
    	if(this.$el){
    		this.$fragment = this.node2Fragment(this.$el);

    		//编译
    		this.compile(this.$fragment);
    		this.$el.appendChild(this.$fragment);
    	}
    }

    node2Fragment(el){
    	const frag = document.createDocumentFragment();
    	let child;

    	while(child = el.firstChild){
			
    		frag.appendChild(child);
    	}
    	return frag;
    }

    compile(el){
    	const childNodes = el.childNodes;
    	Array.from(childNodes).forEach(node=>{
    		if(this.isElement(node)){
    			//console.log('编译元素'+node.nodeName);
    			let attrs = node.attributes;
    			Array.from(attrs).forEach(attr=>{
    				let attrName = attr.name;
    				let attrValue = attr.value;
    				if(this.isDirctive(attrName)){
    					this.listen(node,attrName,attrValue)
    				}
    			})
    		}else if(this.isInterplation(node)){
    			//console.log('编译文本'+node.textContent);
    			
    			this.compileText(node);
    		}
    		if(node.childNodes && node.childNodes.length>0){
    			this.compile(node);
    		}
    	})
    }

    compileText(node){
    	this.update(node,this.$vm,RegExp.$1,'text');
    }

    update(node,vm,exp,dir){
    	const updateFn = this['textUpdate']
    	console.log(updateFn);
    	updateFn && updateFn(node,vm[exp]);
    	new Watcher(vm,exp,function(value){
    		updateFn && updateFn.call(this,node,value);
    	})
    }


    isDirctive(attr){
    	return attr.indexOf('@') >= 0;
    }
    listen(node,exp,value){
    	exp = exp.substring(1);
    	console.log('aaaaa'+value);
    	console.log(this.$vm.$options.methods[value]);
    	const fn = this.$vm.$options.methods[value]
    	node.addEventListener(exp,fn.bind(this.$vm))
    }
    textUpdate(node,val){
    	console.log(this)
    	console.log(RegExp.$1)
    	node.textContent = val;
    }


    // 元素节点
    isElement(node){
    	return node && node.nodeType == 1;
    }
    //文本节点
    isInterplation(node){
    	return node && node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
    
}