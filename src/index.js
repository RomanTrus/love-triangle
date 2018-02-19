/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let counter = 0;
    let i;
for (i=0;i<preferences.length;i++){
	//console.log(i+'--'+preferences[i]+'---'+preferences[preferences[i]-1]+'--'+preferences[preferences[preferences[i]-1]-1])
	if(preferences[preferences[preferences[i]-1]-1]===i+1&&preferences[i]!=preferences[preferences[i]-1]){counter++;
		preferences[preferences[preferences[i]-1]-1]=undefined;
		preferences[preferences[i]-1]=undefined;
		preferences[i]=undefined;
		}
}
	return counter;
};