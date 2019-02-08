var tabBox = {
	__liSelected: null,
	
	init: function() {
		
		document.getElementById("tab1").
		onclick = this.__onClicked;
		
		document.getElementById("tab2").
		onclick = this.__onClicked;

		document.getElementById("tab3").
		onclick = this.__onClicked;

		document.getElementById("tab4").
		onclick = this.__onClicked;

		document.getElementById("tab5").
		onclick = this.__onClicked;
	},
	
	__onClicked: function() 
	{	
		console.log(this);
		if (tabBox.__liSelected != null)
		{
			tabBox.__liSelected.className = "";
		}

		this.className = "selected";		
		tabbox.liSelected = this;
	}
}

window.onload = () => {
	tabBox.init();
};