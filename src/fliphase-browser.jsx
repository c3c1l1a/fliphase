import {katnip} from "katnip";
import PHONEFLIP from "bootstrap-icons/icons/phone-flip.svg";

// This file will be run in the browser.
// Here we do things like:

// Add custom elements, see: https://katnip.tech/page/custom-elements
// katnip.addElement(/*...*/);

// Add routes, see: https://katnip.tech/page/creating-routes
// katnip.addRoute(/*...*/);

// Add page templates.
// katnip.addTemplate(/*...*/);

// We can communicate with the server using
// katnip.apiFetch(/*...*/); or katnip.useApiFetch(/*...*/);

// Or consume data from a realtime channel, see: https://katnip.tech/page/realtime-channels
// katnip.useChannel(/*...*/);

// Hook into the system in various ways, listen for events
// to customize the client side behaivour.
// katnip.addAction(/*...*/);

katnip.addAction("getAdminMenu", (items)=>{
	items.push({
		title: 'Fliphase',
		href: '/admin/fliphase',
		priority: 40, 
		icon: PHONEFLIP
	})
});