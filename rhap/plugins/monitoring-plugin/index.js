module.exports = function() {
    return {
        name: 'monitoring-plugin',
        postBuild() {
            console.log("You have made a change!");
        }
    }
}