function convertPoundsToKg(matchedWeight, weightInLb){
	var weight = 0.45359237 * weightInLb;
	var renderedWeight = weight > 1 ? Math.round(weight * 100) / 100 +'Kg' : Math.round(weight * 100) +'g';
	return buildWeightElement(matchedWeight, renderedWeight);
}

function convertOzToGrams(matchedWeight, weightInOz){
	var weight = 28.3495 * weightInOz;
	var renderedWeight = Math.round(weight * 100) / 100 +'g';
	return buildWeightElement(matchedWeight, renderedWeight);
}

function buildWeightElement(originalText, newText){
	return '<span title="Caclulated from '+originalText+'" class="replaced">' + newText + '</span>'
}

//First replace all lbs occurences with metric
var lbRegex = /([0-9\.]+)\s*((lb)s?|(pound)s?)/gi;
document.body.innerHTML = document.body.innerHTML.replace(lbRegex, convertPoundsToKg);
//then replace all oz occurances with metric
var ozRegex = /([0-9\.]+)\s*((oz)s?|(ounce)s?)/gi;
document.body.innerHTML = document.body.innerHTML.replace(ozRegex, convertOzToGrams);
