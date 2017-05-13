jQuery.sap.declare("Birthdays.util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

Birthdays.util.Formatter = {
	
	formatDate: function (value) {
		debugger;
		if (value) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "MM.dd.yyyy"}); 
			return oDateFormat.format(new Date(value));
		} else {
			var start = new Date().getTime();
			var end = new Date( start + 7 * 24*3600*1000).getTime();
			 var date = new Date(+start + Math.random() * (end - start));
			 date.setYear( date.getYear() - (Math.floor(Math.random() * 20) + 30)  );
			 var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "MM.dd.yyyy"}); 
			return oDateFormat.format( date);
		}
	}
};