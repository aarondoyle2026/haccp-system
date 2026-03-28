var DAYS=[‘Mon’,‘Tue’,‘Wed’,‘Thu’,‘Fri’,‘Sat’,‘Sun’];
var meatTempUnits=[[‘Fish Display Unit’,‘0-5\u00b0C’],[‘Poultry’,‘0-5\u00b0C’],[‘Pork’,‘0-5\u00b0C’],[‘Raw Meat’,‘0-5\u00b0C’],[‘Walk in fridge’,‘0-5\u00b0C’],[‘Pre-pack fish doors’,‘0-5\u00b0C’]];
var prepackTempUnits=[[‘1. Stand up juice fridge at front door’,‘0-5\u00b0C’],[‘2. Meat spider at food academy’,‘0-5\u00b0C’],[‘3. Meat spider at food academy’,‘0-5\u00b0C’],[‘4. Meat spider at food academy’,‘0-5\u00b0C’],[‘5. Superquinn spider’,‘0-5\u00b0C’],[‘6. Spider fishmonger’,‘0-5\u00b0C’],[‘7. Dairy spider at fish pre pack’,‘0-5\u00b0C’],[‘8. Ham spider fridge’,‘0-5\u00b0C’],[‘9. Provisions promo bay’,’’],[‘10. Food Academy Fridge’,‘0-5\u00b0C’],[‘11. Butchers Prepack’,‘0-5\u00b0C’],[‘12. Prepared by the Butcher’,‘0-5\u00b0C’],[‘13. Poultry’,‘0-5\u00b0C’],[‘14. Cheese Prepack’,‘0-5\u00b0C’],[‘15. Bacon/Special Offers’,‘0-5\u00b0C’],[‘16. Sausages/Rashers’,‘0-5\u00b0C’],[‘17. Pudding/Superquinn/Continental’,‘0-5\u00b0C’],[‘18. Cooked Meats/Signature Range’,‘0-5\u00b0C’],[‘19. Ready meals’,‘0-5\u00b0C’],[‘20. Meal deck’,‘0-5\u00b0C’]];
var dairyTempUnits=[[‘1. Milk’,‘0-5\u00b0C’],[‘2. Cream/Deserts/Juice’,‘0-5\u00b0C’],[‘3. Yoghurts’,‘0-5\u00b0C’],[‘4. Cheese’,‘0-5\u00b0C’],[‘5. Spreads’,‘0-5\u00b0C’],[‘6. Dairy Special Offers’,‘0-5\u00b0C’],[‘7. Fish Fridge’,‘0-5\u00b0C’],[‘10. Dairy Back-up’,‘0-5\u00b0C’],[‘11. Milk Fridge at Coffee Machine’,‘0-5\u00b0C’],[‘12. Milk Dispenser at Coffee Machine’,‘0-5\u00b0C’]];
var frozenTempUnits=[[‘1. Ice Cream Bay 1 Door’,’-23\u00b0C’],[‘2. Ice Cream Bay 1 Well’,’-23\u00b0C’],[‘3. Ice Cream Bay 2 Door’,’-23\u00b0C’],[‘4. Ice Cream Bay 2 Well’,’-23\u00b0C’],[‘5. Ice Cream Bay 3 Door’,’-23\u00b0C’],[‘6. Ice Cream Bay 3 Well’,’-23\u00b0C’],[‘7. Ice Cream Stick Fridge’,’-23\u00b0C’],[‘8. Special Offer Well no 1’,’-18\u00b0C’],[‘9. Potato Product Well’,’-18\u00b0C’],[‘10. Chip Well’,’-18\u00b0C’],[‘11. Chicken and Burger Well’,’-18\u00b0C’],[‘12. Veg Well’,’-18\u00b0C’],[‘13. Ready Meal Well’,’-18\u00b0C’],[‘14. Special Offer Well no 2’,’-18\u00b0C’],[‘15. Fish Product Well’,’-18\u00b0C’],[‘16. Fish Well’,’-18\u00b0C’],[‘17. Pizza Well 1’,’-18\u00b0C’],[‘18. Pizza Well 2’,’-18\u00b0C’],[‘19. Vegetarian Food Well’,’-18\u00b0C’],[‘20. Back-up Freezer’,’-18\u00b0C’]];
var fruitVegTempUnits=[[‘Display Fridge Veg 1’,‘0-5\u00b0C’],[‘Display Fridge Veg 2’,‘0-5\u00b0C’],[‘Display Fridge Fruit’,‘0-5\u00b0C’],[‘Salad Fridge’,‘0-5\u00b0C’],[‘Walk-in Back-up’,‘0-5\u00b0C’],[‘Berry Fridge 1’,‘0-5\u00b0C’],[‘Berry Fridge 2’,‘0-5\u00b0C’]];
var deliTempUnits=[[‘Bakery Serveover Fridge 1’,‘0-5\u00b0C’],[‘Bakery Serveover Fridge 2’,‘0-5\u00b0C’],[‘Sandwich Bar Fridge’,‘0-5\u00b0C’],[‘Sandwich Bar Serveover’,‘0-5\u00b0C’],[‘Deli Counter Fridge 1’,‘0-5\u00b0C’],[‘Deli Counter Fridge 2’,‘0-5\u00b0C’],[‘Hot Food Serveover’,‘0-5\u00b0C’],[‘Prep Fridge’,‘0-5\u00b0C’],[‘Walk-in Chill’,‘0-5\u00b0C’]];
var hotfoodTimes=[‘9am’,‘10am’,‘11am’,‘12pm’,‘1pm’,‘2pm’,‘3pm’,‘4pm’,‘5pm’,‘6pm’];
var hotfoodDailyClean=[[‘Hot bar glass front and back, sides and counter top, trays’,‘Glass cleaner, degreaser’],[‘Scales and shelf’,‘Sanitizer’],[‘Sandwich bar glass front and back, sides and bar counter top, trays’,‘Sanitizer, Glass cleaner’],[‘Fresh Cream bakery serveover glass’,‘Glass cleaner’],[‘Bakery serveover fridge x2, glass doors and handles’,‘Glass cleaner’],[‘Counter tops / Stainless steel’,‘Sanitiser’],[‘Equipment sink top and bottom’,‘Sanitiser’],[‘Handsink / requisites’,‘Sanitizer’],[‘Utensils / equipment / trays’,‘Sanitizer’],[‘Bin’,‘Sanitiser’],[‘Temperature probe’,‘Sanitizer’],[‘Hot food oven, surfaces in direct contact with food, trays, racks’,‘Sanitiser’],[‘Bakery oven and stand x2, surfaces in direct contact with food, trays, racks’,‘Sanitiser’],[‘Grease trap, empty and wash out holder’,‘Degreaser, Sanitiser’],[‘Floor swept and mopped (under tables inc. back up)’,‘Floor cleaner’],[‘Chicken Unit’,‘Degreaser, Sanitiser’],[‘Turbo chef machine, direct contact with food, trays’,‘Sanitiser’],[‘Soup kettle’,‘Sanitiser’]];
var hotfoodWeeklyClean=[[‘Hot food bar, full deep clean’,‘Degreaser, Oven cleaner’],[‘Sandwich bar, full deep clean’,‘Sanitiser’],[‘Fresh cream bakery serveover, full deep clean’,‘Sanitiser’],[‘Bakery serveover fridge x2, full deep clean’,‘Sanitiser’],[‘Presses inside out, inc. door handles’,‘Sanitiser’],[‘Stainless steel prep area (wheels, casters, legs, walls)’,‘Sanitizer’],[‘Bakery display table x3’,‘Sanitizer’],[‘Bread display’,‘Sanitizer’],[‘Canopy filter’,‘Degreaser’],[‘Chicken oven, full deep clean’,‘Degreaser, Oven cleaner’],[‘Bakery oven x2, full deep clean’,‘Oven cleaner’],[‘Hot food oven, full deep clean’,‘Degreaser, Oven cleaner’],[‘Chicken prep trolley’,‘Sanitizer’]];
var cookedmeatClean=[[‘Serveover front glass, counter top, sides’,‘Glass cleaner’],[‘Serveover inside, along sides and front’,‘Sanitiser’],[‘Scales and shelve’,‘Sanitizer’],[‘Equipment / trays / chopping boards’,‘Sanitiser’],[‘Counter tops’,‘Sanitiser’],[‘Tables (tops & legs)’,‘Sanitizer’],[‘Meat slicer’,‘Sanitiser’],[‘Cling film unit’,‘Sanitizer’],[‘Temperature probe x2’,‘Sanitiser’],[‘Bins x3’,‘Sanitiser’],[‘Bread slicer’,‘Sanitiser’],[‘Floor sweep and mop’,‘Floor cleaner’],[‘Cheese cutter Pasteurised’,‘Detergent Sanitizer’],[‘Bread Crumber’,‘Sanitizer’]];
var cookedmeatWeeklyClean=[[‘Serveover - Cooked meats deep clean’,‘Sanitizer Degreaser’],[‘Presses inside & out’,‘Sanitizer’],[‘Prep area stainless steel’,‘Sanitizer, Degreaser’],[‘Coldroom (walls, door & floor + shelving)’,‘Sanitizer Degreaser’],[‘All counter display shelving’,‘Sanitizer Degreaser’],[‘Cheese display fridge deep clean’,‘Sanitizer Degreaser’],[‘Ready meal display fridge deep clean’,‘Sanitizer Degreaser’],[‘Salad spider’,‘Sanitizer Degreaser’]];
var cleaningItemsDaily=[[‘Scales, bags, shelves’,‘Sanitiser’],[‘Raw Servovers’,‘Sanitiser, glass cleaner’],[‘Bins’,‘Degreaser’],[‘Equipment/trays/chopping boards’,‘Wash up liq’],[‘Fish equipment sink & shelf below’,‘Wash up liq, Degreaser’],[‘Hot seal wrap unit’,‘Sanitiser’],[‘SELs/Garnishing’,‘Sanitiser’],[‘Stainless steel serveover’,‘Stainless Steel spray’],[‘Hands sink/Requisites’,‘Degreaser/sanitiser’],[‘Wooden block/Table legs’,‘Block brush’],[‘Table tops’,‘Sanitiser’],[‘Doors/handles’,‘Sanitiser’],[‘Telephone’,‘Sanitiser’],[‘Equipment sink & hand sink’,‘Wash up liq’],[‘Knife rack’,‘Sanitiser’],[‘Scales’,‘Sanitiser’],[‘Burger press’,‘Wash up liq, degreaser’],[‘Mincer head’,‘Wash up liq, degreaser’],[‘Mincer’,‘Wash up liq, degreaser’],[‘Ice Machine’,‘Stainless steel cleaner’],[‘Coldroom floor/door/handle’,‘Degreaser’],[‘Rubber around fridge door’,’’]];
var cleaningItemsWeekly=[[‘Prep room racking’,‘Degreaser’],[‘Serveover - Raw’,‘Degreaser’],[‘Serveover - Fish’,‘Degreaser’],[‘Prep area walls & tables’,‘Degreaser’],[‘Returns trolleys’,‘Degreaser’],[‘Stainless steel - Raw’,‘Stainless steel cleaner’],[‘Raw coldroom - floor, shelving’,‘Degreaser’],[‘Display shelving - fish & raw’,‘Degreaser’],[‘Stainless steel - Fish’,‘Stainless steel’],[‘Ice Machine - presses inside and out’,‘Defrosted/clean, Sanitiser’]];
var deliTraceStuffing=[‘Stuffing (Crumbs/Herbs/Veg)’,‘Beetroot’,‘Wraps Tomato’,‘Wraps Brown’,‘Wraps Plain’];
var deliTraceButter=[‘Butter’,‘Ham’,‘Turkey’,‘Cheese’,‘Mozzarella Cheese’,‘Coleslaw’,‘Potato Salad’];
var deliTraceChicken=[‘Chicken Tikka’];
var deliTraceSaladVeg=[‘Chicken’,‘Onion’,‘Cucumber’,‘Scallions’,‘Mixed Peppers’,‘Tomatoes’,‘Lettuce’];
var deliTraceEggTuna=[‘Eggs’,‘Mayo’,‘Egg Mayo’,‘Tuna & Sweetcorn’,‘Sweetcorn’];
var sandwiches=[‘B.L.T. on White’,‘B.L.T. on Brown’,‘Bacon & Boiled Egg White’,‘Bacon & Boiled Egg Brown’,‘Chicken & Bacon (White)’,‘Chicken & Bacon (Brown)’,‘Chicken & Stuffing (White)’,‘Chicken & Stuffing (Brown)’,‘Chicken Tikka’,‘Egg Mayo’,‘Tuna Salad’,‘Turkey & Egg Mayo’,‘Ham & Smoked Cheese (White)’,‘Ham & Smoked Cheese (Brown)’,‘BLTC on Brown’,‘BLTC on White’,‘Ham and Cheese’,‘Ham, Cheese & Coleslaw’];
var wraps=[‘Chicken Tikka Wrap’,‘Egg Mayo Salad Wrap’,‘Chicken & Stuffing Wrap’,‘Tuna Salad Wrap’,‘Turkey & Egg Mayo Wrap’,‘Sweet Chili Chicken Wrap’,‘Crunchy Tuna Wrap’];
var pizzas=[‘Cheese Pizza’,‘Ham & Mushroom’,‘Ham & Sweetcorn’,‘Meat Pizza’,‘Pepperoni & Pepper’,‘Vegetable Deluxe’,‘Spicy Pepperoni’];
var saladsMade=[‘Egg Mayo Salad’,‘Carrot & Broccoli’,‘Cheese Mix’,‘Mix Salad’,‘Summer Salad’,‘Chicken Noodle’];
var saladsPrepack=[‘Egg Mayo’,‘Beetroot’,‘Asian Noodles’,‘Pasta Spinach Pinenut’,‘Coleslaw’,‘Tuna Mix’,‘Chunky Potato’,‘Mash Potato Salad’,‘Green Lentil Multigrain’,‘Carrot, Broccoli & Cranberry’,‘Chipotle Coleslaw’,‘Basil & Pesto’,‘Lemon Cous Cous’,‘Creamy Tomato Pasta’,‘Carrot, Ginger, Chia Seeds’,‘Cheese Mix’,‘Cheese Coleslaw’,‘Mix Salad’,‘Summer Salad’];
var savouries=[‘Beef Lasagne’,‘Chicken & Mushroom Vol au Vent’,‘Red Pepper Goats Cheese Quiche’,‘Black pudding s. rolls’,‘Honey & mustard s. rolls’];
var cookedMeats=[“Ryan’s Low Salt”,“Honey Glazed”,“Moriarty’s Turkey”,“Carroll’s Crumbed”,“Turkey OTB”,“Oak Smoked Ham”,“Corned Beef”,“Brady’s Crumbed”,“Brady’s Baked”,“Hazlett”,“Wiltshire Ham OTB”];
var salamiOlives=[‘Mixed Olives’,‘Sundried Tomatoes’,‘Cheese Filled Peppers’,‘Chorizo Extra’,‘Pre pack Mixed olives’,‘Pre pack Sundried tomatoes’,‘Pre pack Cheese filled peppers’,‘Pre Pack Stuffing’];
function escF(s){return String(s==null?’’:s).replace(/&/g,’&’).replace(/</g,’<’).replace(/>/g,’>’);}
function gv(fd,k){return fd&&fd[k]?’<td style="background:#e8f5ee;font-weight:700;font-size:11px;padding:4px;text-align:center;">’+escF(fd[k])+’</td>’:’<td style="font-size:11px;padding:4px;border:1px solid #eee;"></td>’;}
var TH=‘background:#00703c;color:white;padding:5px 4px;font-size:10px;font-weight:700;text-align:center;border:1px solid #005a30;white-space:nowrap;’;
var TD=‘border:1px solid #d0d0d0;’;
var UN=‘text-align:left;padding:5px 8px;background:#fafafa;font-size:11px;font-weight:500;’;
var TG=‘color:#005a30;font-weight:700;background:#e8f5ee;text-align:center;font-size:11px;padding:4px;’;
function tempTable(units,fd){
var h=’<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:11px;"><thead><tr><th style="'+TH+';min-width:140px;text-align:left;">Unit</th><th style="'+TH+'">Target</th>’;
for(var d=0;d<7;d++)h+=’<th style="'+TH+'" colspan="2">’+DAYS[d]+’</th>’;
h+=’<th style="'+TH+'">Comments</th></tr><tr><th style="'+TH+'"></th><th style="'+TH+'"></th>’;
for(var d2=0;d2<7;d2++)h+=’<th style="'+TH+'">AM</th><th style="'+TH+'">PM</th>’;
h+=’<th style="'+TH+'"></th></tr></thead><tbody>’;
for(var i=0;i<units.length;i++){
h+=’<tr><td style="'+TD+UN+'">’+escF(units[i][0])+’</td><td style="'+TD+TG+'">’+escF(units[i][1])+’</td>’;
for(var d3=0;d3<7;d3++){
h+=gv(fd,units[i][0]+’ ‘+DAYS[d3]+’ AM’)+gv(fd,units[i][0]+’ ‘+DAYS[d3]+’ PM’);
}
h+=gv(fd,units[i][0]+’ Comments’)+’</tr>’;
}
return h+’</tbody></table></div>’;
}
function hourlyTable(fd,mode){
var h=’<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:10px;"><thead><tr><th style="'+TH+';min-width:38px;">Time</th>’;
for(var d=0;d<7;d++)h+=’<th style="'+TH+'" colspan="2">’+DAYS[d]+’</th>’;
h+=’</tr><tr><th style="'+TH+'"></th>’;
for(var d2=0;d2<7;d2++)h+=mode===‘s1s2’?’<th style="'+TH+'">S1</th><th style="'+TH+'">S2</th>’:’<th style="'+TH+'">Prod</th><th style="'+TH+'">Temp</th>’;
h+=’</tr></thead><tbody>’;
for(var ti=0;ti<10;ti++){
var t=[‘9am’,‘10am’,‘11am’,‘12pm’,‘1pm’,‘2pm’,‘3pm’,‘4pm’,‘5pm’,‘6pm’][ti];
h+=’<tr><td style="background:#e8f5ee;font-weight:700;text-align:center;font-size:11px;padding:4px;">’+t+’</td>’;
for(var d3=0;d3<7;d3++){
var k1=DAYS[d3]+’ ‘+t+(mode===‘s1s2’?’ S1’:’ Product’);
var k2=DAYS[d3]+’ ‘+t+(mode===‘s1s2’?’ S2’:’ Temp’);
h+=gv(fd,k1)+gv(fd,k2);
}
h+=’</tr>’;
}
return h+’</tbody></table></div>’;
}
function cleanTable(items,fd){
var h=’<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:11px;"><thead><tr><th style="'+TH+';min-width:160px;text-align:left;">Area</th><th style="'+TH+';min-width:100px;text-align:left;">Chemical</th>’;
for(var d=0;d<7;d++)h+=’<th style="'+TH+';min-width:26px;">’+DAYS[d][0]+’</th>’;
h+=’</tr></thead><tbody>’;
for(var i=0;i<items.length;i++){
h+=’<tr><td style="'+TD+UN+'">’+escF(items[i][0])+’</td><td style="'+TD+';font-size:10px;color:#666;padding:4px 6px;">’+escF(items[i][1])+’</td>’;
for(var d2=0;d2<7;d2++)h+=gv(fd,items[i][0]+’ ‘+DAYS[d2]);
h+=’</tr>’;
}
return h+’</tbody></table></div>’;
}
function deliTrace(products,cols,fd){
var h=’<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:10px;"><thead><tr><th style="'+TH+';min-width:120px;text-align:left;">Product</th>’;
for(var d=0;d<7;d++)h+=’<th style="'+TH+'" colspan="'+cols.length+'">’+DAYS[d]+’</th>’;
h+=’</tr><tr><th style="'+TH+'"></th>’;
for(var d2=0;d2<7;d2++)for(var ci=0;ci<cols.length;ci++)h+=’<th style="'+TH+';font-size:9px;">’+escF(cols[ci])+’</th>’;
h+=’</tr></thead><tbody>’;
for(var i=0;i<products.length;i++){
h+=’<tr><td style="'+TD+UN+'">’+escF(products[i])+’</td>’;
for(var d3=0;d3<7;d3++)for(var ci2=0;ci2<cols.length;ci2++)h+=gv(fd,products[i]+’ ‘+DAYS[d3]+’ ‘+cols[ci2]);
h+=’</tr>’;
}
return h+’</tbody></table></div>’;
}
function iubdTable(products,cols,fd){
var h=’<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:10px;"><thead><tr><th style="'+TH+';min-width:130px;text-align:left;">Product</th>’;
for(var d=0;d<7;d++)h+=’<th style="'+TH+'" colspan="'+cols.length+'">’+DAYS[d]+’</th>’;
h+=’</tr><tr><th style="'+TH+'"></th>’;
for(var d2=0;d2<7;d2++)for(var ci=0;ci<cols.length;ci++)h+=’<th style="'+TH+';font-size:9px;">’+escF(cols[ci])+’</th>’;
h+=’</tr></thead><tbody>’;
for(var i=0;i<products.length;i++){
var pn=typeof products[i]===‘string’?products[i]:products[i];
h+=’<tr><td style="'+TD+UN+'">’+escF(pn)+’</td>’;
for(var d3=0;d3<7;d3++)for(var ci2=0;ci2<cols.length;ci2++)h+=gv(fd,pn+’ ‘+DAYS[d3]+’ ‘+cols[ci2]);
h+=’</tr>’;
}
return h+’</tbody></table></div>’;
}
function oubdTable(products,c2,c3,fd){
c2=c2||‘DO’;c3=c3||‘UBD’;
var h=’<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:10px;"><thead><tr><th style="'+TH+';min-width:130px;text-align:left;">Product</th>’;
for(var d=0;d<7;d++)h+=’<th style="'+TH+'" colspan="3">’+DAYS[d]+’</th>’;
h+=’</tr><tr><th style="'+TH+'"></th>’;
for(var d2=0;d2<7;d2++)h+=’<th style="'+TH+';font-size:9px;">OUBD</th><th style="'+TH+';font-size:9px;">’+escF(c2)+’</th><th style="'+TH+';font-size:9px;">’+escF(c3)+’</th>’;
h+=’</tr></thead><tbody>’;
for(var i=0;i<products.length;i++){
var n=typeof products[i]===‘string’?products[i]:products[i];
h+=’<tr><td style="'+TD+UN+'">’+escF(n)+’</td>’;
for(var d3=0;d3<7;d3++){h+=gv(fd,n+’ ‘+DAYS[d3]+’ OUBD’)+gv(fd,n+’ ‘+DAYS[d3]+’ ‘+c2)+gv(fd,n+’ ‘+DAYS[d3]+’ ‘+c3);}
h+=’</tr>’;
}
return h+’</tbody></table></div>’;
}
function cookedMeatsTable(fd){
var h=’<div style="overflow-x:auto"><table style="border-collapse:collapse;font-size:10px;"><thead><tr><th style="'+TH+';min-width:130px;text-align:left;">Product</th>’;
for(var d=0;d<7;d++)h+=’<th style="'+TH+'" colspan="3">’+DAYS[d]+’</th>’;
h+=’</tr><tr><th style="'+TH+'"></th>’;
for(var d2=0;d2<7;d2++)h+=’<th style="'+TH+';font-size:9px;">OUBD</th><th style="'+TH+';font-size:9px;">Bulk DU</th><th style="'+TH+';font-size:9px;">Slice DU</th>’;
h+=’</tr></thead><tbody>’;
for(var i=0;i<cookedMeats.length;i++){
h+=’<tr><td style="'+TD+UN+'">’+escF(cookedMeats[i])+’</td>’;
for(var d3=0;d3<7;d3++){h+=gv(fd,cookedMeats[i]+’ ‘+DAYS[d3]+’ OUBD’)+gv(fd,cookedMeats[i]+’ ‘+DAYS[d3]+’ Bulk DU’)+gv(fd,cookedMeats[i]+’ ‘+DAYS[d3]+’ Slice DU’);}
h+=’</tr>’;
}
return h+’</tbody></table></div>’;
}
function logTable(headers,rows,fd){
var h=’<table style="border-collapse:collapse;width:100%;font-size:11px;"><thead><tr>’;
for(var hi=0;hi<headers.length;hi++)h+=’<th style="'+TH+';text-align:left;">’+escF(headers[hi])+’</th>’;
h+=’</tr></thead><tbody>’;
for(var i=1;i<=rows;i++){
h+=’<tr>’;
for(var hi2=0;hi2<headers.length;hi2++){
var k=headers[hi2]+’ row’+i;
h+=fd&&fd[k]?’<td style="'+TD+';background:#e8f5ee;font-weight:600;padding:4px;font-size:11px;">’+escF(fd[k])+’</td>’:’<td style="'+TD+';padding:4px;font-size:11px;"> </td>’;
}
h+=’</tr>’;
}
return h+’</tbody></table>’;
}
function redMeatClean(fd){
var s1h=’<tr><td colspan="9" style="background:#005a30;color:white;font-weight:700;font-size:11px;padding:4px 8px;">DAILY</td></tr>’;
var s2h=’<tr><td colspan="9" style="background:#005a30;color:white;font-weight:700;font-size:11px;padding:4px 8px;">WEEKLY</td></tr>’;
var rows1=’’,rows2=’’;
for(var i=0;i<cleaningItemsDaily.length;i++){
rows1+=’<tr><td style="'+TD+UN+'">’+escF(cleaningItemsDaily[i][0])+’</td><td style="'+TD+';font-size:10px;color:#666;padding:4px;">’+escF(cleaningItemsDaily[i][1])+’</td>’;
for(var d=0;d<7;d++)rows1+=gv(fd,cleaningItemsDaily[i][0]+’ ‘+DAYS[d]);
rows1+=’</tr>’;
}
for(var j=0;j<cleaningItemsWeekly.length;j++){
rows2+=’<tr><td style="'+TD+UN+'">’+escF(cleaningItemsWeekly[j][0])+’</td><td style="'+TD+';font-size:10px;color:#666;padding:4px;">’+escF(cleaningItemsWeekly[j][1])+’</td>’;
for(var d2=0;d2<7;d2++)rows2+=gv(fd,cleaningItemsWeekly[j][0]+’ ‘+DAYS[d2]);
rows2+=’</tr>’;
}
var hdr=’<th style="'+TH+';min-width:160px;text-align:left;">Area</th><th style="'+TH+';min-width:100px;text-align:left;">Chemical</th>’;
for(var d3=0;d3<7;d3++)hdr+=’<th style="'+TH+';min-width:26px;">’+DAYS[d3][0]+’</th>’;
return ‘<div style="overflow-x:auto"><table style="border-collapse:collapse;width:100%;font-size:11px;"><thead><tr>’+hdr+’</tr></thead><tbody>’+s1h+rows1+s2h+rows2+’</tbody></table></div>’;
}
window.renderFormSheet=function(formId,fd){
if(formId===‘temp-meat’)return tempTable(meatTempUnits,fd);
if(formId===‘temp-prepack’)return tempTable(prepackTempUnits,fd);
if(formId===‘temp-dairy’)return tempTable(dairyTempUnits,fd);
if(formId===‘temp-frozen’)return tempTable(frozenTempUnits,fd);
if(formId===‘temp-fruitveg’)return tempTable(fruitVegTempUnits,fd);
if(formId===‘temp-deli’)return tempTable(deliTempUnits,fd);
if(formId===‘hotfood-chicken-temp’)return hourlyTable(fd,‘s1s2’);
if(formId===‘hotfood-bar-temp’)return hourlyTable(fd,‘prodtemp’);
if(formId===‘hotfood-soup-temp’)return hourlyTable(fd,‘s1s2’);
if(formId===‘hotfood-daily-clean’)return cleanTable(hotfoodDailyClean,fd);
if(formId===‘hotfood-weekly-clean’)return cleanTable(hotfoodWeeklyClean,fd);
if(formId===‘cookedmeat-clean’)return cleanTable(cookedmeatClean,fd);
if(formId===‘cookedmeat-weekly-clean’)return cleanTable(cookedmeatWeeklyClean,fd);
if(formId===‘deli-trace-stuffing’)return deliTrace(deliTraceStuffing,[‘OUBD’,‘DP’,‘UBD’,‘D’],fd);
if(formId===‘deli-trace-butter’)return deliTrace(deliTraceButter,[‘OUBD’,‘DP’,‘UBD’,‘D’],fd);
if(formId===‘deli-trace-chicken’)return deliTrace(deliTraceChicken,[‘OUBD’,‘DP’,‘UBD’],fd);
if(formId===‘deli-trace-saladveg’)return deliTrace(deliTraceSaladVeg,[‘OUBD’,‘DP’,‘UBD’,‘D’],fd);
if(formId===‘deli-trace-eggtuna’)return deliTrace(deliTraceEggTuna,[‘OUBD’,‘DP’,‘UBD’],fd);
if(formId===‘trace-sandwich’)return iubdTable(sandwiches,[‘IUBD’,‘UBD’],fd);
if(formId===‘trace-wrap’)return iubdTable(wraps,[‘IUBD’,‘UBD’],fd);
if(formId===‘trace-pizza’)return iubdTable(pizzas,[‘IUBD’,‘UBD’],fd);
if(formId===‘trace-salad-made’)return iubdTable(saladsMade,[‘IUBD’,‘DM’,‘DD’],fd);
if(formId===‘trace-salad-prepack’)return iubdTable(saladsPrepack,[‘IUBD/OUBD’,‘DM/DO’,‘DD’],fd);
if(formId===‘trace-savouries’)return oubdTable(savouries,‘DO’,‘UBD’,fd);
if(formId===‘trace-cooked-meats’)return cookedMeatsTable(fd);
if(formId===‘trace-salami’)return oubdTable(salamiOlives,‘DO’,‘UBD’,fd);
if(formId===‘trace-pork’)return logTable([‘Product’,‘OUBD’,‘Date Opened/Cut’,‘Scales Use By’,‘Batch No’,‘Signature’],25,fd);
if(formId===‘prod-mince’)return logTable([‘Date/Time’,‘Person’,‘Meat/Batch Code’,‘Cut Type’,‘Temp After Chilling’,‘Scales Use By’,‘Date Removed’],20,fd);
if(formId===‘prod-burger’)return logTable([‘Date/Time’,‘Person’,‘Meat/Batch Code’,‘Burger Mix’,‘Scales Use By’,‘Date Removed’],20,fd);
if(formId===‘clean-redmeat’)return redMeatClean(fd);
if(formId===‘clean-fruitveg’)return cleanTable([[‘Floor’,‘Mop & bucket/degreaser’],[‘Scales’,‘Sanitiser’],[‘Juicer’,‘Wash up liq/Sanitiser’],[‘Salad display’,‘Sanitiser’],[‘Potato stands’,‘Sanitiser’]],fd);
if(formId===‘clean-stockroom’)return cleanTable([[‘Yard’,‘Degreaser/Mop’],[‘Back-up cold room’,‘Degreaser/Sanitiser’],[‘Ground floor stockroom’,‘Degreaser/Mop’],[‘First floor stockroom’,‘Degreaser/Mop’],[‘Sluice room’,‘Degreaser/Sanitiser’],[‘Bailer area’,‘Degreaser/Mop’],[‘Returns area’,‘Degreaser/Mop’],[‘Frozen back-up’,‘Degreaser/Sanitiser’],[‘Dairy back-up’,‘Degreaser/Sanitiser’],[‘Office’,‘Sanitiser’]],fd);
if(formId===‘goods-chilled’||formId===‘goods-ambient’)return logTable([‘Date’,‘Supplier’,‘Temp Check’,‘Food Safety Checks’,‘Docket No’,‘Product Dating’,‘Product Name’,‘Accept/Reject’,‘Comments’,‘Signature’],20,fd);
return ‘<p style="color:#999;font-style:italic;padding:8px;">See audit section for field data</p>’;
};
